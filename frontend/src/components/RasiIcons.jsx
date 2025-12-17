import React from "react";
import { cn } from "@/lib/utils";

// Minimal, traditional-inspired line glyphs for 12 Rasis.
// Note: These are stylized placeholders (not emojis) and can be replaced with official icon set later.

const Glyph = ({ children, className, ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-9 w-9", className)}
    {...props}
  >
    {children}
  </svg>
);

export const RasiIcon = ({ rasiKey, className }) => {
  const common = {
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (rasiKey) {
    case "mesham":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M14 40c0-10 6-16 12-16" />
          <path {...common} d="M50 40c0-10-6-16-12-16" />
          <path {...common} d="M20 44c4 4 8 6 12 6s8-2 12-6" />
          <path {...common} d="M32 18v8" />
        </Glyph>
      );
    case "vrishabham":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M20 20c0 10 8 12 12 12s12-2 12-12" />
          <path {...common} d="M18 20c-4 2-6 6-6 10" />
          <path {...common} d="M46 20c4 2 6 6 6 10" />
          <circle cx="32" cy="44" r="10" {...common} />
        </Glyph>
      );
    case "mithunam":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M22 16v32" />
          <path {...common} d="M42 16v32" />
          <path {...common} d="M18 20h28" />
          <path {...common} d="M18 44h28" />
          <path {...common} d="M22 48c2 2 6 4 10 4s8-2 10-4" />
        </Glyph>
      );
    case "karkatakam":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M22 26a10 10 0 1 0 0 20" />
          <path {...common} d="M42 38a10 10 0 1 0 0-20" />
          <circle cx="22" cy="36" r="4" {...common} />
          <circle cx="42" cy="28" r="4" {...common} />
        </Glyph>
      );
    case "simham":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M24 18c8 0 16 6 16 14v16" />
          <path {...common} d="M40 18c6 2 10 8 10 14" />
          <path {...common} d="M18 44c2 4 6 6 10 6h8" />
          <path {...common} d="M26 30c0-6-4-10-10-10" />
        </Glyph>
      );
    case "kanya":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M22 18v28" />
          <path {...common} d="M32 18v28" />
          <path {...common} d="M42 18v22c0 8-6 12-12 12" />
          <path {...common} d="M18 24h28" />
          <path {...common} d="M36 52l10 6" />
        </Glyph>
      );
    case "tula":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M20 28h24" />
          <path {...common} d="M18 34h28" />
          <path {...common} d="M26 28c0-6 4-10 6-10s6 4 6 10" />
          <path {...common} d="M24 42h16" />
        </Glyph>
      );
    case "vrischikam":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M20 18v28" />
          <path {...common} d="M30 18v28" />
          <path {...common} d="M40 18v34" />
          <path {...common} d="M18 24h26" />
          <path {...common} d="M40 52c6 0 10-4 10-10" />
          <path {...common} d="M50 42l-6 2 2-6" />
        </Glyph>
      );
    case "dhanussu":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M18 46l28-28" />
          <path {...common} d="M34 18h12v12" />
          <path {...common} d="M18 30h16" />
          <path {...common} d="M34 46v-16" />
        </Glyph>
      );
    case "makaram":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M20 40c0-10 8-16 16-16" />
          <path {...common} d="M36 24c8 0 14 6 14 14" />
          <path {...common} d="M20 40c0 8 6 12 12 12" />
          <path {...common} d="M32 52c6 0 10-4 10-10" />
        </Glyph>
      );
    case "kumbham":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M16 28c6-6 10-6 16 0s10 6 16 0" />
          <path {...common} d="M16 40c6-6 10-6 16 0s10 6 16 0" />
          <path {...common} d="M20 18h24" />
          <path {...common} d="M20 50h24" />
        </Glyph>
      );
    case "meenam":
      return (
        <Glyph className={className} aria-hidden="true">
          <path {...common} d="M24 22c-6 6-6 14 0 20" />
          <path {...common} d="M40 22c6 6 6 14 0 20" />
          <path {...common} d="M24 32h16" />
          <path {...common} d="M18 18l6 6" />
          <path {...common} d="M46 18l-6 6" />
        </Glyph>
      );
    default:
      return (
        <Glyph className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="18" {...common} />
        </Glyph>
      );
  }
};
