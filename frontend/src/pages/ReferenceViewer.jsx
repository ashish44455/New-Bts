import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";

const meta = {
  panchangam: {
    titleEn: "Andhra Panchangam (PDF)",
    titleTe: "ఆంధ్ర పంచాంగం (PDF)",
    message: "Panchangam will be updated soon.",
  },
  calendar: {
    titleEn: "Andhra Calendar (PDF)",
    titleTe: "ఆంధ్ర కాలదర్శిని (PDF)",
    message: "Calendar will be updated soon.",
  },
};

export default function ReferenceViewer() {
  const { doc } = useParams();
  const cfg = meta[doc] || null;

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
        <div className="font-display text-2xl font-semibold text-[color:var(--brand-red)]">
          {cfg.titleTe}
        </div>
      </div>

      {/* View-only viewer shell (PDFs will be uploaded later) */}
      <Card
        className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]"
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="text-sm text-[color:var(--brand-text-muted)]">
          {cfg.message}
        </div>
        <div className="mt-6 rounded-2xl border border-[rgba(201,162,77,0.28)] bg-white/30 p-6 text-sm text-[color:var(--brand-text-muted)]">
          PDF viewer will appear here after the document is uploaded.
          <div className="mt-2">(View-only • Download/Print disabled where technically possible)</div>
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
