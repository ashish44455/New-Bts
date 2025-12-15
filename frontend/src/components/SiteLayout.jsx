import React, { useMemo } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  MessageCircle,
  Phone,
  MapPin,
  Sparkle,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { TRUST, buildWaMeLink } from "@/mock";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/astrology", label: "Astrology" },
  { to: "/gallery", label: "Gallery" },
  { to: "/store", label: "Store" },
  { to: "/contact", label: "Contact" },
];

const ActiveLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      cn(
        "rounded-full px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-white/40 hover:text-[color:var(--brand-red)]",
        isActive
          ? "bg-white/65 text-[color:var(--brand-red)] shadow-sm"
          : "text-[color:var(--brand-text)]",
      )
    }
  >
    {children}
  </NavLink>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

export const SiteLayout = () => {
  const waLink = useMemo(() => buildWaMeLink(), []);

  return (
    <div className="min-h-dvh bg-[color:var(--brand-ivory)] text-[color:var(--brand-text)]">
      <ScrollToTop />

      {/* Decorative background layers */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.55]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(201,162,77,0.22),transparent_55%),radial-gradient(900px_600px_at_85%_20%,rgba(139,30,30,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,247,236,0.92),rgba(255,247,236,0.78),rgba(255,247,236,1))]" />
        <div className="noise-overlay" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[rgba(201,162,77,0.32)] bg-[rgba(255,247,236,0.65)] backdrop-blur-[18px]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(201,162,77,0.55)] bg-white/45 shadow-[0_10px_30px_rgba(58,42,26,0.10)] backdrop-blur-[16px]">
              <Sparkle className="h-5 w-5 text-[color:var(--brand-gold)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[rgba(139,30,30,0.20)]" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-wide text-[color:var(--brand-red)] md:text-lg">
                {TRUST.name}
              </div>
              <div className="text-xs font-medium tracking-wide text-[color:var(--brand-text-muted)]">
                {TRUST.moto}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-[rgba(201,162,77,0.35)] bg-white/35 px-2 py-1.5 shadow-sm backdrop-blur-[18px] md:flex">
            {navItems.map((it) => (
              <ActiveLink key={it.to} to={it.to}>
                {it.label}
              </ActiveLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              className="h-10 rounded-full bg-[color:var(--brand-red)] px-5 text-[color:var(--brand-ivory)] shadow-[0_12px_24px_rgba(139,30,30,0.22)] transition-colors hover:bg-[color:var(--brand-red-hover)]"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                Book via WhatsApp
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[color:var(--brand-red)] px-4 text-[color:var(--brand-ivory)] shadow-[0_12px_24px_rgba(139,30,30,0.18)] hover:bg-[color:var(--brand-red-hover)]"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-[rgba(201,162,77,0.55)] bg-white/50 backdrop-blur-[16px]"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] bg-[rgba(255,247,236,0.82)] backdrop-blur-[20px]">
                <SheetHeader>
                  <SheetTitle className="font-display text-[color:var(--brand-red)]">
                    {TRUST.name}
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-5 grid gap-2">
                  {navItems.map((it) => (
                    <Link
                      key={it.to}
                      to={it.to}
                      className="rounded-xl border border-[rgba(201,162,77,0.35)] bg-white/45 px-4 py-3 text-sm font-medium text-[color:var(--brand-text)] transition-colors hover:bg-white/70"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>

                <Separator className="my-6 bg-[rgba(201,162,77,0.35)]" />

                <div className="grid gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
                  >
                    <a href={waLink} target="_blank" rel="noreferrer">
                      Book / Consult via WhatsApp
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <div className="rounded-xl border border-[rgba(201,162,77,0.35)] bg-white/40 p-4 text-sm">
                    <div className="flex items-center gap-2 text-[color:var(--brand-text)]">
                      <Phone className="h-4 w-4 text-[color:var(--brand-gold)]" />
                      <span className="font-medium">{TRUST.phoneDisplay}</span>
                    </div>
                    <div className="mt-2 flex items-start gap-2 text-[color:var(--brand-text-muted)]">
                      <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--brand-gold)]" />
                      <div>
                        {TRUST.addressLines.map((l) => (
                          <div key={l}>{l}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(201,162,77,0.32)] bg-[rgba(255,247,236,0.82)] backdrop-blur-[16px]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
          <div>
            <div className="font-display text-lg font-semibold text-[color:var(--brand-red)]">
              {TRUST.name}
            </div>
            <div className="mt-2 text-sm text-[color:var(--brand-text-muted)]">
              Traditional Pujas, Astrology & Seva — guided personally.
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(201,162,77,0.45)] bg-white/35 px-3 py-1 text-xs font-medium text-[color:var(--brand-text)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" />
              {TRUST.moto}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[color:var(--brand-text)]">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm">
              {navItems.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  className="text-[color:var(--brand-text-muted)] transition-colors hover:text-[color:var(--brand-red)]"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[color:var(--brand-text)]">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-[color:var(--brand-text-muted)]">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[color:var(--brand-gold)]" />
                <span>{TRUST.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--brand-gold)]" />
                <div>
                  {TRUST.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
            </div>

            <Button
              asChild
              className="mt-4 h-10 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                WhatsApp Consultation
                <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-[rgba(201,162,77,0.24)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[color:var(--brand-text-muted)] md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              © {new Date().getFullYear()} {TRUST.name}. All guidance is handled via WhatsApp.
            </div>
            <div>
              No payments • No online booking • Devotional, non-commercial communication
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50"
        aria-label="Open WhatsApp enquiry"
      >
        <div className="group inline-flex items-center gap-2 rounded-full border border-[rgba(201,162,77,0.45)] bg-[rgba(255,255,255,0.60)] px-4 py-3 shadow-[0_20px_45px_rgba(58,42,26,0.20)] backdrop-blur-[18px] transition-colors hover:bg-white/80">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] shadow-[0_10px_20px_rgba(139,30,30,0.22)] transition-colors group-hover:bg-[color:var(--brand-red-hover)]">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="hidden pr-1 text-sm font-semibold text-[color:var(--brand-text)] md:block">
            WhatsApp
          </div>
        </div>
      </a>
    </div>
  );
};
