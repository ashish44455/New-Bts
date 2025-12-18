import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ChevronRight,
  Sparkles,
  Flame,
  Flower2,
  CalendarHeart,
  Star,
  MapPin,
  Phone,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  ASTROLOGY,
  FOUNDER,
  GALLERY,
  SERVICES,
  STORE,
  TRUST,
  buildWaMeLink,
} from "@/mock";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VisitedPeethasAccordion } from "@/components/VisitedPeethasAccordion";

const PageShell = ({ eyebrow, title, desc, children }) => (
  <div className="space-y-8">
    <div className="space-y-3">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,162,77,0.40)] bg-white/35 px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--brand-red)] backdrop-blur-[16px]">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-gold)]" />
          {eyebrow}
        </div>
      ) : null}
      <h1 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-text)] md:text-4xl">
        {title}
      </h1>
      {desc ? (
        <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
          {desc}
        </p>
      ) : null}
    </div>

    {children}
  </div>
);

const ServiceCard = ({ icon: Icon, name, desc, waLink }) => (
  <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/32 p-5 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]">
    <div className="flex items-start justify-between gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(201,162,77,0.45)] bg-white/45">
        <Icon className="h-5 w-5 text-[color:var(--brand-red)]" />
      </div>
      <Badge className="rounded-full bg-[rgba(201,162,77,0.18)] text-[color:var(--brand-text)] hover:bg-[rgba(201,162,77,0.18)]">
        WhatsApp only
      </Badge>
    </div>

    <div className="mt-4 font-display text-lg font-semibold text-[color:var(--brand-text)]">
      {name}
    </div>
    <div className="mt-2 text-sm leading-relaxed text-[color:var(--brand-text-muted)]">
      {desc}
    </div>

    <Button
      asChild
      className="mt-5 h-10 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
    >
      <a href={waLink} target="_blank" rel="noreferrer">
        Book via WhatsApp
        <MessageCircle className="ml-2 h-4 w-4" />
      </a>
    </Button>
  </Card>
);

export const AboutPage = () => {
  const waLink = React.useMemo(() => buildWaMeLink(), []);
  const progressValue = Math.round(
    (TRUST.progressCompleted / TRUST.progressTotal) * 100,
  );

  return (
    <PageShell
      eyebrow="About Us"
      title="Sri Bala Tripura Sundari Seva Sadan"
      desc="A spiritual trust dedicated to traditional seva, guided personally and conducted in a devotional, non-commercial manner."
    >
      {/* About: 5 blank photo placeholders (above Founder details) */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card
            key={`about-ph-${idx}`}
            className="overflow-hidden rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/30 shadow-[0_18px_55px_rgba(58,42,26,0.10)] backdrop-blur-[18px]"
          >
            <AspectRatio ratio={4 / 5}>
              <div className="relative h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(255,255,255,0.18))]">
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.25),transparent_62%)]" />
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,30,30,0.16),transparent_62%)]" />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full border border-[rgba(201,162,77,0.40)] bg-white/25 px-3 py-1 text-[11px] font-semibold text-[color:var(--brand-text-muted)]">
                    Photo Placeholder
                  </div>
                </div>
              </div>
            </AspectRatio>
          </Card>
        ))}
      </div>


      {/* ADD-ON 1: Founder details inserted at the very top of About section */}
      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
        <div lang="en" className="lang-en font-display text-xl font-semibold text-[color:var(--brand-text)]">
          {FOUNDER.headingEn}
        </div>
        <div lang="te" className="lang-te font-display text-xl font-semibold text-[color:var(--brand-text)]">
          స్థాపకుడు & ఆధ్యాత్మిక మార్గదర్శకుడు
        </div>
        <div className="mt-2 font-display text-2xl font-semibold text-[color:var(--brand-red)]">
          {FOUNDER.name}
        </div>
        <p lang="en" className="lang-en mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
          {FOUNDER.descEn}
        </p>
        <p
          lang="te"
          className="lang-te mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base"
        >
          {FOUNDER.descTe}
        </p>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="font-display text-lg font-semibold text-[color:var(--brand-text)]">
            Our Vision
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
            We aim to preserve the sanctity of traditional rituals and personal
            guidance. Our services are coordinated through WhatsApp to ensure
            dialogue, clarity, and trust.
          </p>

          <div className="mt-6 rounded-2xl border border-[rgba(201,162,77,0.35)] bg-white/30 p-4 text-sm text-[color:var(--brand-text-muted)]">
            <div className="font-semibold text-[color:var(--brand-text)]">
              Trust Moto
            </div>
            <div className="mt-1">{TRUST.moto}</div>
          </div>

          <Button
            asChild
            className="mt-6 h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              Connect via WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Card>

        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="font-display text-lg font-semibold text-[color:var(--brand-text)]">
            Ashtadasa Shakti Peetha Seva Sankalpa
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
            Our seva is aligned with the sacred tradition of the 18 Shakti Peethas.
            This commitment is ongoing, transparent, and devotional.
          </p>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm font-semibold text-[color:var(--brand-red)]">
              {TRUST.progressCompleted} / {TRUST.progressTotal} completed
            </div>
            <div className="text-xs font-semibold text-[color:var(--brand-text-muted)]">
              Updated manually
            </div>
          </div>
          <Progress
            value={progressValue}
            className="mt-3 h-3 bg-[rgba(201,162,77,0.18)]"
          />
          <p className="mt-4 text-sm text-[color:var(--brand-text-muted)]">
            Progress is also displayed on the Home page as a trust marker.
          </p>
        </Card>
      </div>
    </PageShell>
  );
};

export const ServicesPage = () => {
  const waLink = React.useMemo(() => buildWaMeLink(), []);

  const groups = [
    { key: "pujas", label: "Pujas", icon: Flower2, items: SERVICES.pujas },
    {
      key: "vrathams",
      label: "Vrathams",
      icon: CalendarHeart,
      items: SERVICES.vrathams,
    },
    { key: "homams", label: "Homams", icon: Flame, items: SERVICES.homams },
    { key: "events", label: "Events", icon: Star, items: SERVICES.events },
  ];

  return (
    <PageShell
      eyebrow="Services"
      title="Traditional Services (WhatsApp-only)"
      desc="No online booking, no payment gateway. Every seva is coordinated personally via WhatsApp."
    >
      <Tabs defaultValue={groups[0].key} className="w-full">
        <TabsList className="flex h-auto flex-wrap justify-start gap-2 rounded-2xl border border-[rgba(201,162,77,0.35)] bg-white/35 p-2 backdrop-blur-[16px]">
          {groups.map((g) => (
            <TabsTrigger
              key={g.key}
              value={g.key}
              className="rounded-xl data-[state=active]:bg-white/70 data-[state=active]:text-[color:var(--brand-red)]"
            >
              <g.icon className="mr-2 h-4 w-4 text-[color:var(--brand-gold)]" />
              {g.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {groups.map((g) => (
          <TabsContent key={g.key} value={g.key} className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {g.items.map((s) => (
                <ServiceCard
                  key={s.id}
                  icon={g.icon}
                  name={s.name}
                  desc={s.desc}
                  waLink={waLink}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/30 p-6 text-sm text-[color:var(--brand-text-muted)] shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]">
        Need help choosing the right puja/homam? Send a WhatsApp message and we will guide you.
        <div className="mt-4">
          <Button
            asChild
            className="h-11 rounded-xl bg-[color:var(--brand-red)] px-6 text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              Enquire on WhatsApp
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </PageShell>
  );
};

export const AstrologyPage = () => {
  const waLink = React.useMemo(() => buildWaMeLink(), []);

  return (
    <PageShell
      eyebrow="Astrology"
      title={ASTROLOGY.heading}
      desc={ASTROLOGY.subheading}
    >
      <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
        <div className="text-sm font-semibold text-[color:var(--brand-text)]">
          Mandatory Note
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
          {ASTROLOGY.intro}
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {ASTROLOGY.items.map((it) => (
            <div
              key={it}
              className="flex items-center gap-3 rounded-2xl border border-[rgba(201,162,77,0.30)] bg-white/30 px-4 py-3 text-sm"
            >
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-[rgba(201,162,77,0.18)]">
                <Star className="h-4 w-4 text-[color:var(--brand-red)]" />
              </div>
              <div className="font-medium text-[color:var(--brand-text)]">{it}</div>
            </div>
          ))}
        </div>

        <Button
          asChild
          className="mt-6 h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
        >
          <a href={waLink} target="_blank" rel="noreferrer">
            Consult via WhatsApp
            <MessageCircle className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </Card>
    </PageShell>
  );
};

export const GalleryPage = () => {
  const [activeCat, setActiveCat] = React.useState("All");
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const filtered = React.useMemo(() => {
    if (activeCat === "All") return GALLERY.items;
    return GALLERY.items.filter((x) => x.category === activeCat);
  }, [activeCat]);

  return (
    <PageShell
      eyebrow="Gallery"
      title="Devotional Gallery"
      desc="15 replaceable placeholders grouped by category. Tap any image to view it larger."
    >
      <div className="flex flex-wrap gap-2">
        {GALLERY.categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCat(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              c === activeCat
                ? "border-[color:var(--brand-red)] bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)]"
                : "border-[rgba(201,162,77,0.45)] bg-white/35 text-[color:var(--brand-text)] hover:bg-white/60",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((img) => (
          <button
            key={img.id}
            onClick={() => {
              setSelected(img);
              setOpen(true);
            }}
            className="group overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/25 text-left shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
          >
            <div className="relative">
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_62%)]" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[18px]">
                  {img.category}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">
                  {img.title}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-[rgba(201,162,77,0.45)] bg-[rgba(255,247,236,0.86)] backdrop-blur-[20px]">
          <DialogHeader>
            <DialogTitle className="font-display text-[color:var(--brand-text)]">
              {selected?.title}
            </DialogTitle>
          </DialogHeader>
          {selected ? (
            <div className="space-y-3">
              <div className="overflow-hidden rounded-2xl border border-[rgba(201,162,77,0.35)] bg-white/30">
                <img
                  src={selected.url}
                  alt={selected.title}
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="text-sm text-[color:var(--brand-text-muted)]">
                Category: <span className="font-semibold">{selected.category}</span>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
};

export const StorePage = () => {
  const waLink = React.useMemo(() => buildWaMeLink(), []);

  return (
    <PageShell
      eyebrow="Store"
      title="Store (Catalog Only)"
      desc="No cart, no checkout. Availability and details are shared on WhatsApp."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {STORE.items.map((it) => (
          <Card
            key={it.id}
            className="overflow-hidden rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/32 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
          >
            <div className="relative">
              <img
                src={it.image}
                alt={it.name}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_65%)]" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="text-lg font-semibold">{it.name}</div>
              </div>
            </div>
            <div className="p-5">
              <div className="text-sm leading-relaxed text-[color:var(--brand-text-muted)]">
                {it.desc}
              </div>
              <Button
                asChild
                className="mt-4 h-10 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
              >
                <a href={waLink} target="_blank" rel="noreferrer">
                  Enquire on WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
};

export const ContactPage = () => {
  const waLink = React.useMemo(() => buildWaMeLink(), []);

  return (
    <PageShell
      eyebrow="Contact"
      title="Contact & Location"
      desc="For bookings, consultations, and enquiries — WhatsApp only."
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-text)]">
              <Phone className="h-4 w-4 text-[color:var(--brand-gold)]" />
              <span>{TRUST.phoneDisplay}</span>
            </div>

            <div className="flex items-start gap-2 text-sm text-[color:var(--brand-text-muted)]">
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
            className="mt-6 h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              WhatsApp Now
              <MessageCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <div className="mt-5 rounded-2xl border border-[rgba(201,162,77,0.35)] bg-white/30 p-4 text-sm text-[color:var(--brand-text-muted)]">
            {TRUST.whatsappMessage}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-4 h-10 w-full rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 text-[color:var(--brand-text)] hover:bg-white/75"
          >
            <Link to="/services">
              Browse services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Card>

        <Card className="overflow-hidden rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/30 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]">
          <div className="p-5">
            <div className="text-sm font-semibold text-[color:var(--brand-text)]">
              Map (optional)
            </div>
            <div className="mt-2 text-sm text-[color:var(--brand-text-muted)]">
              Embedded map without API key.
            </div>
          </div>
          <iframe
            title="Sri Bala Tripura Sundari Seva Sadan Location"
            src={TRUST.googleMapsEmbedUrl}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </div>
    </PageShell>
  );
};
