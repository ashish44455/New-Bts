import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { PdfCanvasViewer } from "@/components/PdfCanvasViewer";

const meta = {
  panchangam: {
    titleEn: "Andhra Panchangam (PDF)",
    titleTe: "ఆంధ్ర పంచాంగం (PDF)",
    titleTeLang: "te",
    message: "Panchangam will be updated soon.",
    apiDoc: "panchangam",
  },
  calendar: {
    titleEn: "Andhra Calendar (PDF)",
    titleTe: "ఆంధ్ర కాలదర్శిని (PDF)",
    titleTeLang: "te",
    message: "Calendar will be updated soon.",
    apiDoc: "calendar",
  },
};

export default function ReferenceViewer() {
  const { doc } = useParams();
  const cfg = meta[doc] || null;

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const API = `${BACKEND_URL}/api`;

  if (!cfg) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)]">
          Reference not found
        </div>
        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="text-sm text-[color:var(--brand-text-muted)]">
            Please return to Home.
          </div>
          <div className="mt-4">
            <Link
              to="/"
              className="text-sm font-semibold text-[color:var(--brand-red)]"
            >
              Go to Home
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-1">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)] md:text-4xl">
          {cfg.titleEn}
        </div>
        <div
          lang={cfg.titleTeLang || "te"}
          className="font-display text-2xl font-semibold text-[color:var(--brand-red)]"
        >
          {cfg.titleTe}
        </div>
      </div>

      {/* View-only viewer shell */}
      <Card
        className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="text-sm text-[color:var(--brand-text-muted)]">
          {cfg.message}
        </div>

        <div className="mt-6">
          {/* If the PDF is missing, backend returns 204. pdf.js will fail to load and we show the message below. */}
          <PdfCanvasViewer url={`${API}/reference/${cfg.apiDoc}`} />

          <div className="mt-5 rounded-xl border border-[rgba(201,162,77,0.28)] bg-white/35 px-4 py-3 text-sm">
            <div className="font-semibold text-[color:var(--brand-text)]">{cfg.message}</div>
            <div className="mt-1 text-[color:var(--brand-text-muted)]">
              Document is not available yet.
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-red)]">
              <span>Return to Home</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Card>

      <div className="text-sm">
        <Link to="/" className="font-semibold text-[color:var(--brand-red)]">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
