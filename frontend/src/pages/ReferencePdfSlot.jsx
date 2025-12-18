import React from "react";
import { Link, useParams } from "react-router-dom";

import { PdfCanvasViewer } from "@/components/PdfCanvasViewer";
import { Card } from "@/components/ui/card";

const meta = {
  panchangam: {
    titleEn: "Andhra Panchangam",
    titleTe: "ఆంధ్ర పంచాంగం",
  },
  calendar: {
    titleEn: "Andhra Calendar",
    titleTe: "ఆంధ్ర కాలదర్శిని",
  },
};

export default function ReferencePdfSlot() {
  const { doc, slot } = useParams();
  const cfg = meta[doc];
  const slotNum = Number(slot);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const API = `${BACKEND_URL}/api`;

  if (!cfg || !Number.isFinite(slotNum) || slotNum < 1 || slotNum > 3) {
    return (
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)]">
          Reference not found
        </div>
        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="text-sm text-[color:var(--brand-text-muted)]">
            Please return.
          </div>
          <div className="mt-4">
            <Link to={`/reference/${doc || "panchangam"}`} className="font-semibold text-[color:var(--brand-red)]">
              ← Back
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="space-y-1">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)] md:text-4xl">
          {cfg.titleEn}
        </div>
        <div lang="te" className="font-display text-2xl font-semibold text-[color:var(--brand-red)]">
          {cfg.titleTe}
        </div>
        <div className="text-sm text-[color:var(--brand-text-muted)]">
          <span lang="en" className="lang-en">Document {slotNum} (view-only)</span>
          <span lang="te" className="lang-te">పత్రం {slotNum} (వీక్షణ మాత్రమే)</span>
        </div>
      </div>

      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]" onContextMenu={(e) => e.preventDefault()}>
        <PdfCanvasViewer url={`${API}/reference/${doc}/${slotNum}`} />

        <div className="mt-4 rounded-2xl border border-[rgba(201,162,77,0.24)] bg-white/30 p-4 text-sm text-[color:var(--brand-text-muted)]">
          <span lang="en" className="lang-en">If the PDF is not uploaded yet, it will show an error/blank. Upload the file to enable viewing.</span>
          <span lang="te" className="lang-te">PDF ఇంకా అప్‌లోడ్ చేయకపోతే ఇది చూపబడదు. ఫైల్ అప్‌లోడ్ చేసిన తర్వాత వీక్షించవచ్చు.</span>
        </div>
      </Card>

      <div className="text-sm">
        <Link to={`/reference/${doc}`} className="font-semibold text-[color:var(--brand-red)]">
          ← Back
        </Link>
      </div>
    </div>
  );
}
