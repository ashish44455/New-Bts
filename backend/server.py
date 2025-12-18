from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
from fastapi import HTTPException
from fastapi.responses import StreamingResponse
from starlette.responses import Response


ROOT_DIR = Path(__file__).parent

REFERENCE_DIR = ROOT_DIR / "storage" / "reference_pdfs"
REFERENCE_DIR.mkdir(parents=True, exist_ok=True)

# 3 PDFs per section (upload these files manually to backend/storage/reference_pdfs)
ALLOWED_DOCS = {
    "panchangam": ["panchangam_1.pdf", "panchangam_2.pdf", "panchangam_3.pdf"],
    "calendar": ["calendar_1.pdf", "calendar_2.pdf", "calendar_3.pdf"],
}

load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/reference/{doc}")
async def get_reference_pdf(doc: str):
    # Backward compatible: serves slot 1
    return await get_reference_pdf_slot(doc, 1)


@api_router.get("/reference/{doc}/{slot}")
async def get_reference_pdf_slot(doc: str, slot: int):
    # Best-effort protection: allow only known docs and slots
    if doc not in ALLOWED_DOCS:
        raise HTTPException(status_code=404, detail="Not found")
    if slot < 1 or slot > len(ALLOWED_DOCS[doc]):
        raise HTTPException(status_code=404, detail="Not found")

    file_path = REFERENCE_DIR / ALLOWED_DOCS[doc][slot - 1]
    if not file_path.exists():
        # 204 indicates "no content" without exposing file
        return Response(status_code=204)

    # Stream the PDF. We do not provide Content-Disposition attachment.
    # Add headers to discourage caching and embedding outside.
    def iterfile():
        with open(file_path, "rb") as f:
            while True:
                chunk = f.read(1024 * 256)
                if not chunk:
                    break
                yield chunk


@api_router.get("/reference/{doc}/{slot}/meta")
async def get_reference_pdf_meta(doc: str, slot: int):
    if doc not in ALLOWED_DOCS:
        raise HTTPException(status_code=404, detail="Not found")
    if slot < 1 or slot > len(ALLOWED_DOCS[doc]):
        raise HTTPException(status_code=404, detail="Not found")

    file_path = REFERENCE_DIR / ALLOWED_DOCS[doc][slot - 1]
    return {"available": file_path.exists(), "doc": doc, "slot": slot}

    headers = {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        "Pragma": "no-cache",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "frame-ancestors 'self'",
        "Cross-Origin-Resource-Policy": "same-site",
    }

    return StreamingResponse(iterfile(), media_type="application/pdf", headers=headers)

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()