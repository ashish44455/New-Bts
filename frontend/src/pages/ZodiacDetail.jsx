import React from "react";
import { Link, useParams } from "react-router-dom";

import { ZODIAC_2026_2027 } from "@/mock";
import { Card } from "@/components/ui/card";

export default function ZodiacDetail() {
  const { rasi } = useParams();
  const item = ZODIAC_2026_2027.rasis.find((x) => x.key === rasi) || null;

  if (!item) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)]">
          Zodiac not found
        </div>
        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="text-sm text-[color:var(--brand-text-muted)]">
            Please return to Home and select a zodiac icon.
          </div>
          <div className="mt-4">
            <Link to="/" className="text-sm font-semibold text-[color:var(--brand-red)]">
              ← Back to Home
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const titleEn = item.en.split(" (")[0];

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Back navigation (explicit route to Home) */}
      <div className="text-sm">
        <Link to="/" className="font-semibold text-[color:var(--brand-red)]">
          ← Back to Home
        </Link>
        <div className="mt-1 text-xs text-[color:var(--brand-text-muted)]">
          హోమ్‌కు తిరిగి వెళ్ళండి
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)] md:text-4xl">
          {titleEn}
        </div>
        <div className="font-display text-2xl font-semibold text-[color:var(--brand-red)]">
          {item.te}
        </div>

        <div className="mt-3 text-sm text-[color:var(--brand-text-muted)]">
          <div>{ZODIAC_2026_2027.authorityEn}</div>
          <div className="mt-1">{ZODIAC_2026_2027.authorityTe}</div>
        </div>

        <div className="mt-3 text-sm font-semibold text-[color:var(--brand-text)]">
          Yearly Prediction – {ZODIAC_2026_2027.yearLabel}
        </div>
      </div>

      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
        <div className="space-y-4 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
          <div>{item.textEn}</div>
          <div>{item.textTe}</div>
        </div>

        <div className="mt-6 border-t border-[rgba(201,162,77,0.24)] pt-4 text-xs text-[color:var(--brand-text-muted)]">
          <div>{ZODIAC_2026_2027.disclaimerEn}</div>
          <div className="mt-1">{ZODIAC_2026_2027.disclaimerTe}</div>
        </div>
      </Card>

    </div>
  );
}
