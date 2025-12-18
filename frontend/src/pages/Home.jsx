import React from "react";
import { Link } from "react-router-dom";
import { Flame, Flower2, Star, CalendarHeart, ChevronRight } from "lucide-react";

import { RasiIcon } from "@/components/RasiIcons";

import { cn } from "@/lib/utils";
import {
  ASTROLOGY,
  HERO,
  IMAGES,
  SERVICES,
  TRUST,
  ZODIAC_2026_2027,
  buildWaMeLink,
} from "@/mock";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { VisitedPeethasAccordion } from "@/components/VisitedPeethasAccordion";

const IconBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full border border-[rgba(201,162,77,0.38)] bg-white/35 px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-text)] backdrop-blur-[16px]">
    <Icon className="h-4 w-4 text-[color:var(--brand-gold)]" />
    <span>{label}</span>
  </div>
);

const SectionHeading = ({ eyebrow, title, desc, align = "left" }) => (
  <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
    {eyebrow ? (
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[rgba(201,162,77,0.40)] bg-white/35 px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--brand-red)] backdrop-blur-[16px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" />
        {eyebrow}
      </div>
    ) : null}
    <h2 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--brand-text)] md:text-3xl">
      {title}
    </h2>
    {desc ? (
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
        {desc}
      </p>
    ) : null}
  </div>
);

export default function Home() {
  const waLink = React.useMemo(() => buildWaMeLink(), []);
  const [api, setApi] = React.useState(null);
  const [activeSlide, setActiveSlide] = React.useState(0);


  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      try {
        setActiveSlide(api.selectedScrollSnap());
      } catch {
        // ignore
      }
    };

    onSelect();
    api.on("select", onSelect);

    const id = window.setInterval(() => {
      try {
        api.scrollNext();
      } catch {
        // ignore
      }
    }, 4500);

    return () => {
      window.clearInterval(id);
      api.off("select", onSelect);
    };
  }, [api]);

  const progressValue = Math.round(
    (TRUST.progressCompleted / TRUST.progressTotal) * 100,
  );

  return (
    <div className="space-y-14 md:space-y-18">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-[linear-gradient(120deg,rgba(255,255,255,0.60),rgba(255,255,255,0.28))] p-6 shadow-[0_24px_70px_rgba(58,42,26,0.16)] backdrop-blur-[18px] md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.85]" aria-hidden="true">
          <div className="absolute -left-28 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.33),transparent_60%)]" />
          <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,30,30,0.20),transparent_62%)]" />
        </div>

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <IconBadge icon={Star} label={TRUST.moto} />
              <IconBadge
                icon={Flame}
                label={
                  <>
                    <span lang="en" className="lang-en">
                      {TRUST.progressCompleted} / {TRUST.progressTotal} Shakti Peethas
                    </span>
                    <span lang="te" className="lang-te">
                      {TRUST.progressCompleted} / {TRUST.progressTotal} శక్తి పీఠాలు
                    </span>
                  </>
                }
              />
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[color:var(--brand-text)] md:text-5xl">
              {TRUST.name}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
              <span lang="en" className="lang-en">
                Traditional Pujas, Astrology & Seva — Guided Personally.
              </span>
              <span lang="te" className="lang-te">
                సంప్రదాయ పూజలు, జ్యోతిష్యం & సేవ — వ్యక్తిగతంగా మార్గదర్శనం.
              </span>
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 rounded-xl bg-[color:var(--brand-red)] px-6 text-[color:var(--brand-ivory)] shadow-[0_18px_32px_rgba(139,30,30,0.22)] hover:bg-[color:var(--brand-red-hover)]"
              >
                <a href={waLink} target="_blank" rel="noreferrer">
                  Book via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 px-6 text-[color:var(--brand-text)] backdrop-blur-[16px] hover:bg-white/75"
              >
                <a href={waLink} target="_blank" rel="noreferrer">
                  Consult via WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-7 max-w-xl rounded-2xl border border-[rgba(201,162,77,0.35)] bg-white/35 p-4 text-sm text-[color:var(--brand-text-muted)] backdrop-blur-[16px]">
              <span lang="en" className="lang-en">
                To preserve personal guidance and traditional authenticity, all bookings and consultations are handled directly via WhatsApp.
              </span>
              <span lang="te" className="lang-te">
                వ్యక్తిగత మార్గదర్శనం మరియు సంప్రదాయ ప్రామాణికతను నిలుపుకోవడానికి, అన్ని బుకింగ్స్ & సంప్రదింపులు WhatsApp ద్వారా మాత్రమే నిర్వహించబడతాయి.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-[radial-gradient(closest-side,rgba(201,162,77,0.25),transparent_70%)]" />
            <div className="overflow-hidden rounded-[2rem] border border-[rgba(201,162,77,0.40)] bg-white/25 shadow-[0_30px_80px_rgba(58,42,26,0.18)] backdrop-blur-[18px]">
              <img
                src={HERO.image}
                alt={HERO.imageAlt}
                loading="eager"
                className="h-[360px] w-full object-cover md:h-[460px]"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="rounded-full bg-[rgba(201,162,77,0.18)] text-[color:var(--brand-text)] hover:bg-[rgba(201,162,77,0.18)]">
                <span lang="en" className="lang-en">Soft sacred glow (placeholder)</span>
                <span lang="te" className="lang-te">సూక్ష్మ పవిత్ర కాంతి (ప్లేస్‌హోల్డర్)</span>
              </Badge>
              <Badge className="rounded-full bg-[rgba(139,30,30,0.14)] text-[color:var(--brand-text)] hover:bg-[rgba(139,30,30,0.14)]">
                <span lang="en" className="lang-en">Replaceable image</span>
                <span lang="te" className="lang-te">మార్చగల చిత్రం</span>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="space-y-5">
        <SectionHeading
          eyebrow={
            <>
              <span lang="en" className="lang-en">Devotional Gallery</span>
              <span lang="te" className="lang-te">భక్తి గ్యాలరీ</span>
            </>
          }
          title={
            <>
              <span lang="en" className="lang-en">Sacred moments & temple atmosphere</span>
              <span lang="te" className="lang-te">పవిత్ర క్షణాలు & ఆలయ వాతావరణం</span>
            </>
          }
          desc={
            <>
              <span lang="en" className="lang-en">
                A smooth slider with replaceable devotional placeholders (you can swap these with your official images anytime).
              </span>
              <span lang="te" className="lang-te">
                మార్చగల భక్తి ప్లేస్‌హోల్డర్ చిత్రాలతో సున్నితమైన స్లైడర్ (మీ అధికారిక చిత్రాలతో ఎప్పుడైనా మారుస్తారు).
              </span>
            </>
          }
        />

        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent>
            {IMAGES.slider.map((src, idx) => (
              <CarouselItem key={`${src}-${idx}`} className="md:basis-1/1">
                <Card className="overflow-hidden rounded-3xl border-[rgba(201,162,77,0.32)] bg-white/30 shadow-[0_22px_60px_rgba(58,42,26,0.14)] backdrop-blur-[16px]">
                  <div className="relative">
                    <img
                      src={src}
                      alt={`Devotional placeholder ${idx + 1}`}
                      className="h-[320px] w-full object-cover md:h-[420px]"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_55%)]" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[18px]">
                        {TRUST.moto}
                      </div>
                      <div className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[18px]">
                        <span lang="en" className="lang-en">
                          Slide {idx + 1} / {IMAGES.slider.length}
                        </span>
                        <span lang="te" className="lang-te">
                          స్లైడ్ {idx + 1} / {IMAGES.slider.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="flex items-center justify-center gap-2">
          {IMAGES.slider.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition-colors",
                idx === activeSlide
                  ? "border-[color:var(--brand-red)] bg-[color:var(--brand-red)]"
                  : "border-[rgba(201,162,77,0.55)] bg-white/40 hover:bg-white/70",
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ADD-ON 2: Yearly Zodiac Predictions (2026–2027) */}
      <section className="space-y-2">
        {/* Icon-only display (no names on Home) */}
        <div className="rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/30 px-3 py-3 shadow-[0_18px_55px_rgba(58,42,26,0.10)] backdrop-blur-[18px]">
          <div className="flex w-full gap-2 overflow-x-auto px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-between md:gap-0 md:overflow-visible">
            {ZODIAC_2026_2027.rasis.map((r) => (
              <Link
                key={r.key}
                to={`/zodiac/${r.key}`}
                className="shrink-0"
                aria-label={r.en}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[rgba(201,162,77,0.40)] bg-white/35 text-[color:var(--brand-gold)] hover:bg-white/55 hover:text-[color:var(--brand-red)]">
                  <RasiIcon rasiKey={r.key} className="h-8 w-8" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ON: Panchangam & Calendar (image placeholders -> internal view-only pages) */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow={undefined}
          title={
            <>
              <span lang="en" className="lang-en">
                Andhra Panchangam & Calendar
              </span>
              <span lang="te" className="lang-te">
                ఆంధ్ర పంచాంగం & కాలదర్శిని
              </span>
            </>
          }
          desc={undefined}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {/* Panchangam tile */}
          <Link
            to="/reference/panchangam"
            className="overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/30 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
            aria-label="View Panchangam"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1602305361939-806b254e9f47?auto=format&fit=crop&w=1600&q=80"
                alt="Panchangam placeholder"
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_65%)]" />
            </div>
            <div className="px-5 py-4">
              <div lang="en" className="lang-en text-xs text-[color:var(--brand-text-muted)]">
                View Panchangam
              </div>
              <div lang="te" className="lang-te text-xs text-[color:var(--brand-text-muted)]">
                పంచాంగం చూడండి
              </div>
            </div>
          </Link>

          {/* Calendar tile */}
          <Link
            to="/reference/calendar"
            className="overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/30 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
            aria-label="View Calendar"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?auto=format&fit=crop&w=1600&q=80"
                alt="Calendar placeholder"
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_65%)]" />
            </div>
            <div className="px-5 py-4">
              <div lang="en" className="lang-en text-xs text-[color:var(--brand-text-muted)]">
                View Calendar
              </div>
              <div lang="te" className="lang-te text-xs text-[color:var(--brand-text-muted)]">
                కాలదర్శిని చూడండి
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <SectionHeading
          eyebrow="Our Sacred Mission"
          title={TRUST.moto}
          desc="Our seva is dedicated to the Ashtadasa Shakti Peethas. This sankalpa is a living commitment — not a campaign."
        />

        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-6 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px] md:p-8">
          <div className="flex items-center justify-between">
            <div className="font-display text-lg font-semibold text-[color:var(--brand-text)]">
              Progress
            </div>
            <div className="text-sm font-semibold text-[color:var(--brand-red)]">
              {TRUST.progressCompleted} / {TRUST.progressTotal} completed
            </div>
          </div>
          <Progress
            value={progressValue}
            className="mt-4 h-3 bg-[rgba(201,162,77,0.18)]"
          />
          <div className="mt-3 text-sm text-[color:var(--brand-text-muted)]">
            <span lang="en" className="lang-en">
              This progress is displayed prominently to keep the sankalpa transparent and accountable.
            </span>
            <span lang="te" className="lang-te">
              సంకల్పం పారదర్శకంగా మరియు బాధ్యతాయుతంగా ఉండేందుకు ఈ ప్రగతి చూపబడుతుంది.
            </span>
          </div>

          <div className="mt-5">
            <VisitedPeethasAccordion items={TRUST.visitedPeethas} />
          </div>

          <div className="mt-5">
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 text-[color:var(--brand-text)] hover:bg-white/75"
            >
              <Link to="/about">
                Read full mission
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Services at a glance */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Our Services at a Glance"
          title="Traditional services — guided personally"
          desc="Every seva is coordinated through WhatsApp to preserve authenticity, clarity, and personal guidance."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              label: "Pujas",
              icon: Flower2,
              count: SERVICES.pujas.length,
              to: "/services",
            },
            {
              label: "Homams",
              icon: Flame,
              count: SERVICES.homams.length,
              to: "/services",
            },
            {
              label: "Events",
              icon: CalendarHeart,
              count: SERVICES.events.length,
              to: "/services",
            },
            {
              label: "Astrology",
              icon: Star,
              count: ASTROLOGY.items.length,
              to: "/astrology",
            },
          ].map((b) => (
            <Card
              key={b.label}
              className="group rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/32 p-5 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[rgba(201,162,77,0.45)] bg-white/45">
                  <b.icon className="h-5 w-5 text-[color:var(--brand-red)]" />
                </div>
                <div className="rounded-full bg-[rgba(201,162,77,0.18)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-text)]">
                  {b.count}+ options
                </div>
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-[color:var(--brand-text)]">
                {b.label}
              </div>
              <div className="mt-1 text-sm text-[color:var(--brand-text-muted)]">
                Tap to explore.
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Button
                  asChild
                  className="h-10 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] hover:bg-[color:var(--brand-red-hover)]"
                >
                  <a href={waLink} target="_blank" rel="noreferrer">
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 w-full rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 text-[color:var(--brand-text)] hover:bg-white/75"
                >
                  <Link to={b.to}>View details</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why WhatsApp */}
      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Why WhatsApp Consultation"
            title="Personal guidance, not automation"
            desc="We keep the process human and devotional. WhatsApp helps us understand your needs and guide the right sankalpa, muhurtham, and procedure."
          />
          <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/32 p-5 text-sm text-[color:var(--brand-text-muted)] shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]">
            One message is enough to begin. We respond with the next steps, requirements, and traditional guidance.
          </Card>
        </div>

        <Card className="rounded-3xl border-[rgba(201,162,77,0.35)] bg-white/35 p-4 shadow-[0_18px_55px_rgba(58,42,26,0.14)] backdrop-blur-[18px] md:p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="a1" className="border-[rgba(201,162,77,0.28)]">
              <AccordionTrigger className="text-left font-display text-[color:var(--brand-text)]">
                What you receive in WhatsApp guidance
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[color:var(--brand-text-muted)]">
                Clear next steps, required samagri (if any), timelines, and devotional guidance — all shared personally.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="a2" className="border-[rgba(201,162,77,0.28)]">
              <AccordionTrigger className="text-left font-display text-[color:var(--brand-text)]">
                Why we do not use forms or automated booking
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[color:var(--brand-text-muted)]">
                Every puja and consultation needs context. We keep it personal to preserve traditional authenticity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="a3" className="border-[rgba(201,162,77,0.28)]">
              <AccordionTrigger className="text-left font-display text-[color:var(--brand-text)]">
                International enquiries are welcome
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[color:var(--brand-text-muted)]">
                WhatsApp makes it easy for devotees across locations to connect. Guidance is shared respectfully and clearly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button
            asChild
            className="mt-4 h-11 w-full rounded-xl bg-[color:var(--brand-red)] text-[color:var(--brand-ivory)] shadow-[0_18px_32px_rgba(139,30,30,0.20)] hover:bg-[color:var(--brand-red-hover)]"
          >
            <a href={waLink} target="_blank" rel="noreferrer">
              Start on WhatsApp
            </a>
          </Button>
        </Card>
      </section>

      {/* Featured Gallery */}
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Gallery Preview"
          title="A glimpse of devotion"
          desc="A small preview from the gallery. Tap to view the full collection with lightbox view."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {IMAGES.featuredGallery.slice(0, 6).map((img) => (
            <Link
              key={img.id}
              to="/gallery"
              className="group overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-white/25 shadow-[0_18px_55px_rgba(58,42,26,0.12)] backdrop-blur-[18px]"
            >
              <div className="relative">
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(58,42,26,0.55),transparent_60%)]" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-[18px]">
                    {img.category}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {img.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Button
            asChild
            variant="outline"
            className="rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 text-[color:var(--brand-text)] hover:bg-white/75"
          >
            <Link to="/gallery">
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden rounded-3xl border border-[rgba(201,162,77,0.35)] bg-[linear-gradient(120deg,rgba(139,30,30,0.12),rgba(255,255,255,0.35))] p-6 shadow-[0_24px_70px_rgba(58,42,26,0.14)] backdrop-blur-[18px] md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.9]" aria-hidden="true">
          <div className="absolute -left-20 -bottom-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.28),transparent_62%)]" />
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,30,30,0.20),transparent_62%)]" />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="font-display text-2xl font-semibold tracking-tight text-[color:var(--brand-text)] md:text-3xl">
              Begin with a simple WhatsApp message
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--brand-text-muted)] md:text-base">
              {TRUST.whatsappMessage}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              asChild
              className="h-11 rounded-xl bg-[color:var(--brand-red)] px-6 text-[color:var(--brand-ivory)] shadow-[0_18px_32px_rgba(139,30,30,0.22)] hover:bg-[color:var(--brand-red-hover)]"
            >
              <a href={waLink} target="_blank" rel="noreferrer">
                Book via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-xl border-[rgba(201,162,77,0.55)] bg-white/55 px-6 text-[color:var(--brand-text)] hover:bg-white/75"
            >
              <Link to="/contact">Contact Details</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
