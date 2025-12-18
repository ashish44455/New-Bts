import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const VisitedPeethasAccordion = ({ items = [], defaultOpen = false }) => {
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen ? "visited" : undefined} className="w-full">
      <AccordionItem value="visited" className="border-[rgba(201,162,77,0.28)]">
        <AccordionTrigger className="text-left font-display text-[color:var(--brand-text)]">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span lang="en" className="lang-en">
              Visited Shakti Peethas ({items.length})
            </span>
            <span lang="te" className="lang-te">
              సందర్శించిన శక్తి పీఠాలు ({items.length})
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-sm text-[color:var(--brand-text-muted)]">
          <ul className="space-y-3">
            {items.map((p) => (
              <li key={p.id} className="rounded-2xl border border-[rgba(201,162,77,0.20)] bg-white/25 px-4 py-3">
                <div lang="en" className="lang-en font-medium text-[color:var(--brand-text)]">
                  {p.enName}
                </div>
                <div lang="en" className="lang-en text-xs text-[color:var(--brand-text-muted)]">
                  {p.enLocation}
                </div>

                <div lang="te" className="lang-te font-medium text-[color:var(--brand-text)]">
                  {p.teName}
                </div>
                <div lang="te" className="lang-te text-xs text-[color:var(--brand-text-muted)]">
                  {p.teLocation}
                </div>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
