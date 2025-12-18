import React from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
// PdfCanvasViewer intentionally not used here (PDFs not added yet)

const meta = {
  panchangam: {
    titleEn: "Andhra Panchangam",
    titleTe: "ఆంధ్ర పంచాంగం",
    titleTeLang: "te",
    message: "Content will be updated soon.",
    apiDoc: "panchangam",
  },
  calendar: {
    titleEn: "Andhra Calendar",
    titleTe: "ఆంధ్ర కాలదర్శిని",
    titleTeLang: "te",
    message: "Content will be updated soon.",
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
          <span lang="en" className="lang-en">Content will be updated soon.</span>
          <span lang="te" className="lang-te">విషయం త్వరలో అప్‌డేట్ చేయబడుతుంది.</span>
        </div>

        {/* 3 placeholders inside this reference page */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={`ref-ph-${cfg.apiDoc}-${idx}`}
              className="overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/30 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
            >
              <Link
                to={`/reference/${cfg.apiDoc}/${idx + 1}`}
                className="block"
                aria-label={`Open ${cfg.apiDoc} document ${idx + 1}`}
              >
              <div className="relative">
                <img
                  src={
                    cfg.apiDoc === "panchangam"
                      ? "https://images.unsplash.com/photo-1602305361939-806b254e9f47?auto=format&fit=crop&w=1400&q=80"
                      : "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?auto=format&fit=crop&w=1400&q=80"
                  }
                  alt="Placeholder"
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_70%)]" />
              </div>
              <div className="px-4 py-3">
                <div lang="en" className="lang-en text-xs text-[color:var(--brand-text-muted)]">
                  Content will be updated soon.
                </div>
                <div lang="te" className="lang-te text-xs text-[color:var(--brand-text-muted)]">
                  విషయం త్వరలో అప్‌డేట్ చేయబడుతుంది.
                </div>
              </div>
            </div>
          ))}
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
