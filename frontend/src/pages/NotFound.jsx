import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";

import { buildWaMeLink } from "@/mock";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  const waLink = React.useMemo(() => buildWaMeLink(), []);

  return (
    <div className="mx-auto max-w-3xl">
      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-8 text-center shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
        <div className="font-display text-3xl font-semibold text-[color:var(--brand-text)] md:text-4xl">
          Page not found
        </div>
        <p className="mt-3 text-sm text-[color:var(--brand-text-muted)] md:text-base">
          Please use the navigation menu. For any enquiry, contact us directly on
          WhatsApp.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            className="h-11 rounded-xl bg-[color:var(--brand-red)] px-6 text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              WhatsApp Enquiry
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 px-6 text-[color:var(--brand-text)] hover:bg-white/75"
          >
            <Link to="/">
              Go Home
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
