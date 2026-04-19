"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CHALET_KRAALS_LINE, COMMUNAL_BAR_KRAAL } from "@/data/camp-kraals";
import { ChevronRight, Crosshair, Users, Flame, Map, Shield, Leaf, Target, ChevronLeft } from "lucide-react";
import HeroCanvasScrollSection from "@/components/home/HeroCanvasScrollSection";
import { ContentTrack, PageShell, Prose, Section, Stack } from "@/components/layout/system";

const TESTIMONIALS = [
  {
    id: "james-r",
    quote:
      "Vaalpenskraal isn't just a hunting destination. It's a crucible. The terrain tests you, the animals humble you, and the fire at night brings it all together. The purest hunt I've experienced in Africa.",
    emphasis: "crucible",
    name: "James R.",
    location: "Texas, USA",
    locale: "en" as const,
    local: false,
    imgSeed: "hunterportrait",
  },
  {
    id: "piet-modimolle",
    quote:
      "The Waterberg has teeth: you learn to respect them here. Kudu in thick bush, buffalo that stop you in your tracks, and a boma where the stories outlast the wood on the fire.",
    emphasis: "respect them",
    name: "Pieter v.d. Merwe",
    location: "Modimolle, Limpopo",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter1",
  },
  {
    id: "thabo-pretoria",
    quote:
      "I've hunted across South Africa. Too many places sell a postcard. Vaalpenskraal sells the real thing: thick bush, honest animals, and a team that doesn't treat you like a tourist.",
    emphasis: "the real thing",
    name: "Thabo M.",
    location: "Pretoria, South Africa",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter2",
  },
  {
    id: "sarie-polokwane",
    quote:
      "We've been coming back for years. It's hard to put into words, but it feels as if the ground itself asks you to hunt better: more patience, more respect, less noise.",
    emphasis: "hunt better",
    name: "Sarie B.",
    location: "Polokwane, Limpopo",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter3",
  },
  {
    id: "lisa-stellenbosch",
    quote:
      "We drove up from the Cape for a week. The lodge is refined without being precious: hot water when you need it, silence when you don't, and kudu tracks five minutes from your door.",
    emphasis: "refined without being precious",
    name: "Lisa van Zyl",
    location: "Stellenbosch, South Africa",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter4",
  },
  {
    id: "johan-hoedspruit",
    quote:
      "First-class comfort, with nothing cushioned away from real hunting. Exactly what we want: a camp that works, and game that still makes you sweat.",
    emphasis: "real hunting",
    name: "Johan K.",
    location: "Hoedspruit, Limpopo",
    locale: "en" as const,
    local: true,
    imgSeed: "safarihunter5",
  },
  {
    id: "marcus-uk",
    quote:
      "I've hunted in Namibia and Zimbabwe. The Waterberg thicket here is a different exam: closer, slower, more technical. Vaalpenskraal doesn't make it easy, and that's exactly the point.",
    emphasis: "a different exam",
    name: "Marcus H.",
    location: "Yorkshire, UK",
    locale: "en" as const,
    local: false,
    imgSeed: "safarihunter6",
  },
];

function testimonialQuoteBody(quote: string, emphasis?: string) {
  if (!emphasis || !quote.includes(emphasis)) {
    return quote;
  }
  const [before, ...rest] = quote.split(emphasis);
  const after = rest.join(emphasis);
  return (
    <>
      {before}
      <span className="text-burnished-copper/95">{emphasis}</span>
      {after}
    </>
  );
}

const HomePageClient = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(t);
  }, []);

  const activeT = TESTIMONIALS[activeTestimonial];

  return (
    <PageShell>
      <HeroCanvasScrollSection>
        <div className="flex w-full max-w-xl flex-col gap-ds-sm pt-ds-2xs sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/reserve"
            className="focus-ring-invert group relative inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] sm:px-8"
          >
            <span className="relative z-10">Book the hunt</span>
            <div className="absolute inset-0 origin-left scale-x-0 transform bg-neutral-200 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
          <Link
            href="/species"
            className="focus-ring-invert group inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/35 bg-black/35 px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/50 sm:px-8"
          >
            <span className="hero-readable-ghost">Quarry roster</span>
          </Link>
        </div>
      </HeroCanvasScrollSection>

      {/* The Code: headline row + hairline 3-up panels */}
      <Section
        className="border-b border-white/[0.06] bg-neutral-950"
        aria-labelledby="home-code-heading"
      >
        <ContentTrack>
          <Stack gap="lg">
            <div className="flex flex-col gap-ds-md border-b border-white/[0.08] pb-ds-lg md:flex-row md:items-end md:justify-between md:gap-ds-xl md:pb-ds-xl">
              <Stack gap="xs" className="max-w-2xl">
                <p className="font-[family-name:var(--font-montserrat),sans-serif] text-[11px] font-medium uppercase tracking-[0.32em] text-burnished-copper/90">
                  Field standard
                </p>
                <h2
                  id="home-code-heading"
                  className="vp-scroll-reveal-type font-sans text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold uppercase leading-[1.08] tracking-[-0.03em] text-white"
                >
                  The code <span className="text-white/55">we hunt by</span>
                </h2>
              </Stack>
              <p className="max-w-md font-sans text-sm font-normal leading-relaxed text-white/65 md:max-w-sm md:pb-1 md:text-right md:text-base">
                PH-led work on Waterberg iron soil. Quarry follows census and quota, not a brochure fantasy. When the day is thin, we say so.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/[0.12] ring-1 ring-white/[0.06] sm:rounded-[1.35rem] md:grid-cols-3">
            <article className="group relative flex min-h-0 flex-col bg-[#0a0a0a] p-ds-sm transition-colors duration-500 hover:bg-[#0d0d0d] sm:p-ds-md md:min-h-[min(22rem,46vh)]">
              <div
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-burnished-copper/80 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="mb-ds-md flex items-center gap-ds-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-burnished-copper/95">
                  <Shield className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Fair chase
                </h3>
              </div>
              <p className="mt-auto font-sans text-sm leading-relaxed text-white/68 sm:text-[0.9375rem]">
                Free-ranging quarry. No theatre. You read thorns, heat, and your own pulse.
              </p>
            </article>

            <article className="group relative flex min-h-0 flex-col bg-[#0a0a0a] p-ds-sm transition-colors duration-500 hover:bg-[#0d0d0d] sm:p-ds-md md:min-h-[min(22rem,46vh)]">
              <div
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-burnished-copper/80 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="mb-ds-md flex items-center gap-ds-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-burnished-copper/95">
                  <Leaf className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Land first
                </h3>
              </div>
              <p className="mt-auto font-sans text-sm leading-relaxed text-white/68 sm:text-[0.9375rem]">
                Census drives quota. The veld decides what we offer. We listen.
              </p>
            </article>

            <article className="group relative flex min-h-0 flex-col bg-[#0a0a0a] p-ds-sm transition-colors duration-500 hover:bg-[#0d0d0d] sm:p-ds-md md:min-h-[min(22rem,46vh)]">
              <div
                className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-burnished-copper/80 transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="mb-ds-md flex items-center gap-ds-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-burnished-copper/95">
                  <Target className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  One clean moment
                </h3>
              </div>
              <p className="mt-auto font-sans text-sm leading-relaxed text-white/68 sm:text-[0.9375rem]">
                Patience is not decoration. It is how you honour the animal and the rifle.
              </p>
            </article>
          </div>
          </Stack>
        </ContentTrack>
      </Section>

      {/* Bento Grid: The Experience */}
      <Section className="relative z-30">
        <ContentTrack>
          <Stack gap="xl" className="mb-ds-xl text-center md:mb-ds-2xl">
            <h2 className="vp-scroll-reveal-type font-sans text-4xl font-semibold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Built for the stalk
            </h2>
            <p className="mx-auto max-w-3xl font-sans text-lg font-medium leading-relaxed text-white/70 sm:text-xl md:text-2xl">
              Solo miles or fireside noise. Same iron soil. Same standard.
            </p>
          </Stack>

        <div className="grid grid-cols-1 gap-ds-md md:grid-cols-3 lg:grid-cols-12 lg:gap-ds-md">
          {/* Card 1: Solo Hunter */}
          <Link
            href="/reserve"
            aria-label="Book a hunt: the solitary tracker"
            className="focus-ring-invert group relative block min-h-[min(22rem,58dvh)] overflow-hidden rounded-[2rem] bg-neutral-900 md:col-span-2 md:min-h-[min(26rem,52dvh)] lg:col-span-7"
          >
            <div className="absolute inset-0 overflow-hidden transition-all duration-1000 group-hover:scale-105">
              <Image
                src="/images/home/solitary-tracker.png"
                alt="Lone hunter tracking through Vaalpenskraal bushveld at dawn"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center opacity-50 transition-opacity duration-1000 group-hover:opacity-70"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-ds-sm sm:p-ds-md md:p-ds-lg">
              <Stack gap="sm" className="max-w-lg">
              <Crosshair className="h-8 w-8 text-white md:h-10 md:w-10" aria-hidden />
              <h3 className="font-sans text-3xl font-semibold uppercase tracking-tight sm:text-4xl md:text-5xl">
                The solitary tracker
              </h3>
              <p className="font-sans text-base font-medium leading-relaxed text-white/70 sm:text-lg">
                Dawn cold on your cheek. Boots loud until they are not. Then only wind.
              </p>
              </Stack>
            </div>
          </Link>

          {/* Card 2: quarry species index */}
          <Link
            href="/species"
            aria-label="Explore quarry species"
            className="focus-ring-invert group relative flex min-h-[min(22rem,58dvh)] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-900 p-ds-sm sm:p-ds-md md:col-span-1 md:min-h-[min(26rem,52dvh)] md:p-ds-lg lg:col-span-5"
          >
            <div className="absolute inset-0 overflow-hidden transition-all duration-1000 group-hover:scale-105">
              <Image
                src="/images/home/species-bento.png"
                alt="Collage-style quarry species photography for the Vaalpenskraal species index"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center opacity-40 transition-opacity duration-1000 group-hover:opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <Stack gap="sm" className="relative z-10">
              <Map className="h-8 w-8 text-white md:h-10 md:w-10" aria-hidden />
              <h3 className="font-sans text-3xl font-semibold uppercase tracking-tight sm:text-4xl">Twenty-two species</h3>
              <p className="font-sans text-base font-medium leading-relaxed text-white/70 sm:text-lg">
                Grey Ghost kudu. Buffalo that own the thicket. Names you already respect.
              </p>
            </Stack>
          </Link>

          {/* Card 3: The Brotherhood */}
          <Link
            href="/lodge"
            aria-label="The lodge: groups and fireside"
            className="focus-ring-invert group relative flex min-h-[min(22rem,58dvh)] flex-col justify-end overflow-hidden rounded-[2rem] bg-neutral-900 p-ds-sm sm:p-ds-md md:col-span-1 md:min-h-[min(26rem,52dvh)] md:p-ds-lg lg:col-span-5"
          >
            <div className="absolute inset-0 overflow-hidden transition-all duration-1000 group-hover:scale-105">
              <Image
                src="/images/home/brotherhood-bento.png"
                alt="Hunters gathered at firelight for a brotherhood weekend at Vaalpenskraal"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center opacity-40 transition-opacity duration-1000 group-hover:opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <Stack gap="sm" className="relative z-10">
              <Users className="h-8 w-8 text-white md:h-10 md:w-10" aria-hidden />
              <h3 className="font-sans text-3xl font-semibold uppercase tracking-tight sm:text-4xl">Fire and roster</h3>
              <p className="font-sans text-base font-medium leading-relaxed text-white/70 sm:text-lg">
                Ember light on wet eyes. The week names itself here.
              </p>
            </Stack>
          </Link>

          {/* Card 4: The Culture */}
          <Link
            href="/experience"
            aria-label="The Vaalpenskraal experience"
            className="focus-ring-invert group relative block min-h-[min(22rem,58dvh)] overflow-hidden rounded-[2rem] bg-neutral-900 md:col-span-2 md:min-h-[min(26rem,52dvh)] lg:col-span-7"
          >
            <div className="absolute inset-0 overflow-hidden transition-all duration-1000 group-hover:scale-105">
              <Image
                src="/images/home/culture-bento.png"
                alt="Boma culture and evening fire at Vaalpenskraal lodge camp"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center opacity-50 transition-opacity duration-1000 group-hover:opacity-70"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-ds-sm sm:p-ds-md md:p-ds-lg">
              <Stack gap="sm" className="max-w-lg">
              <Flame className="h-8 w-8 text-white md:h-10 md:w-10" aria-hidden />
              <h3 className="font-sans text-3xl font-semibold uppercase tracking-tight sm:text-4xl md:text-5xl">
                The culture
              </h3>
              <p className="font-sans text-base font-medium leading-relaxed text-white/70 sm:text-lg">
                Dust in the throat. Woodsmoke in wool. The stalk still humming behind your ribs.
              </p>
              </Stack>
            </div>
          </Link>
        </div>
        </ContentTrack>
      </Section>

      {/* Basecamp - split canvas: image + stacked amenity rails */}
      <Section className="border-t border-white/[0.06] bg-[#070707] text-white" padding="none">
        <ContentTrack className="ds-section-y">
          <Stack gap="2xl">
            <div className="flex flex-col gap-ds-lg lg:flex-row lg:items-end lg:justify-between lg:gap-ds-xl">
              <Stack gap="xs" className="max-w-xl">
                <p className="font-sans text-[11px] font-medium tracking-[0.3em] uppercase text-white/70">
                  The lodge
                </p>
                <h2 className="font-sans text-[2.75rem] sm:text-4xl md:text-[2.85rem] font-light tracking-[-0.03em] leading-[1.08]">
                  The basecamp is{" "}
                  <span className="font-semibold text-white">where the bush</span>
                  <br className="hidden sm:block" />
                  <span className="font-semibold text-white"> lets you exhale.</span>
                </h2>
              </Stack>
              <p className="font-sans text-base leading-relaxed text-white/65 md:text-base lg:max-w-[22rem] lg:text-right">
                After miles in thick thicket, you want silence, hot water, and a fire you did not have to build alone. Premium comfort, without polishing away the grit.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-ds-md md:items-stretch lg:grid-cols-12">
            <div className="relative min-h-[min(52vh,420px)] overflow-hidden rounded-[1.35rem] bg-neutral-900 ring-1 ring-white/[0.07] md:min-h-[520px] md:rounded-[1.75rem] lg:col-span-7">
              <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out hover:scale-[1.02]">
                <Image
                  src="/images/lodge/lodge-chalet-gemsbok.jpg"
                  alt="Gemsbok Kraal chalet at Vaalpenskraal lodge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-black/25 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-ds-sm p-ds-sm md:p-ds-md">
                <p className="font-sans text-xs md:text-sm text-white/55 max-w-[18rem] leading-snug">
                  {CHALET_KRAALS_LINE} · overnight guests only. {COMMUNAL_BAR_KRAAL}, kitchen, pool, boma, outlook &amp; waterhole. Full board in the Waterberg.
                </p>
                <Link
                  href="/lodge"
                  className="focus-ring-invert shrink-0 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 font-sans text-xs font-medium text-black transition-colors hover:bg-white md:px-5 md:text-sm"
                >
                  Explore
                  <ChevronRight className="h-4 w-4 opacity-70 md:h-4 md:w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <Stack gap="md" className="lg:col-span-5">
              {[
                {
                  tag: "01",
                  title: "Four kraals",
                  note: `${CHALET_KRAALS_LINE} · 4–5 sleep · 4 singles + double · aircon · full bath`,
                },
                {
                  tag: "02",
                  title: `${COMMUNAL_BAR_KRAAL} & kitchen`,
                  note: "Gas stove · electric oven · lounge & dining space",
                },
                { tag: "03", title: "Fully catered", note: "Snacks, lunch, supper · drinks & alcohol included" },
                {
                  tag: "04",
                  title: "Pool, boma & viewing",
                  note: "Swim · canopy boma · outlook point & waterhole · sundowners",
                },
                {
                  tag: "05",
                  title: "Field services",
                  note: "Safes · cold room · slaughter & hides · carcass weighing · P3 permit",
                },
                { tag: "06", title: "Safe & gated", note: "Matlabas Protection · optional shuttle · taxidermy via your contractors" },
              ].map((row) => (
                <div
                  key={row.tag}
                  className="group flex gap-ds-sm rounded-2xl border border-white/[0.08] bg-white/[0.02] px-ds-sm py-ds-sm transition-colors hover:border-white/[0.14] hover:bg-white/[0.035] md:px-ds-md md:py-ds-sm"
                >
                  <span className="pt-1 font-sans text-[11px] font-medium tabular-nums tracking-widest text-white/60">
                    {row.tag}
                  </span>
                  <Stack gap="2xs" className="min-w-0 flex-1">
                    <p className="font-sans text-base font-medium tracking-[-0.015em] text-white/90">
                      {row.title}
                    </p>
                    <p className="font-sans text-xs leading-snug text-white/65 md:text-sm">
                      {row.note}
                    </p>
                  </Stack>
                </div>
              ))}
            </Stack>
          </div>

            <div className="flex justify-start md:justify-end">
            <Link
              href="/lodge"
              className="focus-ring-invert group inline-flex items-center gap-ds-sm font-sans text-sm text-white/70 transition-colors hover:text-white"
            >
              Full lodge breakdown
              <ChevronRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            </div>
          </Stack>
        </ContentTrack>
      </Section>

      {/* Manifesto - iron / copper editorial */}
      <Section className="relative isolate border-y border-white/[0.07] bg-black">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.55]"
          aria-hidden
        >
          <div className="absolute -top-40 left-1/2 h-[min(100vw,520px)] w-[min(100vw,520px)] -translate-x-1/2 rounded-full bg-burnished-copper/25 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[min(80vw,420px)] w-[min(80vw,420px)] rounded-full bg-bushveld-soil/30 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(184,115,51,0.12),transparent_55%)]" />
        </div>

        <ContentTrack className="relative min-w-0">
          <Stack gap="lg">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70 md:mb-2">
              The Waterberg · not a brochure trip
            </p>

            <div className="grid min-w-0 grid-cols-1 items-end gap-ds-xl lg:gap-x-ds-2xl lg:gap-y-0 lg:[grid-template-columns:minmax(0,7fr)_minmax(0,5fr)]">
              <div className="min-w-0 max-w-full overflow-x-clip lg:pr-ds-sm">
                <h2 className="max-w-full break-words font-sans text-[clamp(2.6rem,7.5vw,5.25rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
                  <span className="block max-w-full text-white">Raw.</span>
                  <span className="block max-w-full text-white/88">Real.</span>
                  <span className="block max-w-full bg-gradient-to-r from-sunset-gold via-burnished-copper to-dried-grass bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(184,115,51,0.25)]">
                    Relentless.
                  </span>
                </h2>
                <div
                  className="mt-ds-md h-px max-w-[10rem] bg-gradient-to-r from-burnished-copper/90 via-white/25 to-transparent md:mt-ds-lg"
                  aria-hidden
                />
              </div>

              <Stack gap="lg" className="relative z-10 min-w-0 w-full md:gap-ds-xl">
                <Prose className="break-words text-lg text-white/65 first-line:font-medium first-line:text-white/85 md:text-xl lg:text-[1.35rem] lg:leading-[1.55]">
                  We reject the staged safari circuit. Vaalpenskraal is a return to the Waterberg bush as it is: oxidized iron under your boots, burnished copper light on the ridgeline, and terrain that does not perform for a camera.
                </Prose>
                <Prose className="relative z-10 box-border max-w-full break-words pl-ds-md text-base leading-relaxed text-white/65 md:pl-ds-lg md:text-lg">
                  <span
                    className="absolute left-0 top-1 bottom-1 w-px rounded-full bg-gradient-to-b from-burnished-copper/85 via-white/20 to-transparent"
                    aria-hidden
                  />
                  For those who still believe in respect: the stalk, the fire, the silence after. The kind of bond with the land that outlasts the flight home.
                </Prose>
              </Stack>
            </div>
          </Stack>
        </ContentTrack>
      </Section>

      {/* The Quarry - editorial zigzag + index */}
      <Section className="relative border-t border-white/[0.07] bg-[#050505] text-white" padding="none">
        <ContentTrack className="ds-section-y">
          <div className="flex min-w-0 flex-col gap-ds-xl lg:flex-row lg:items-end lg:justify-between lg:gap-ds-xl">
            <Stack gap="sm" className="min-w-0 max-w-2xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">
                Species
              </p>
              <h2 className="font-sans text-[2.5rem] font-light leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-[2.75rem]">
                The{" "}
                <span className="font-semibold text-white">quarry</span>
                <span className="text-white/50">.</span>
              </h2>
              <Prose className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Legendary Waterberg game: each animal its own exam. Reading wind, closing distance, and earning the shot.
              </Prose>
            </Stack>
            <Link
              href="/species"
              className="focus-ring-invert inline-flex w-full min-w-0 shrink-0 items-center justify-center gap-ds-sm self-start rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-8 sm:py-4 lg:w-auto lg:self-auto"
            >
              Full quarry list
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
          </div>
        </ContentTrack>

        <div className="border-t border-white/[0.07]">
          {[
            {
              code: "01",
              nickname: "The Black Death",
              name: "Cape Buffalo",
              imageUrl: "/images/home/quarry-buffalo.png",
              href: "/species/cape-buffalo",
              blurb: "Thick bush. Zero margin. The Waterberg's most serious conversation.",
            },
            {
              code: "02",
              nickname: "The Grey Ghost",
              name: "Greater Kudu",
              imageUrl: "/images/home/quarry-kudu.png",
              href: "/species/greater-kudu",
              blurb: "Height, patience, and a silhouette that vanishes between thorns.",
            },
            {
              code: "03",
              nickname: "The Desert Lord",
              name: "Livingstone Eland",
              imageUrl: "/images/home/quarry-eland.png",
              href: "/species/livingstone-eland",
              blurb: "Mass at distance. Power that looks calm until it isn't.",
            },
          ].map((row, i) => (
            <Link
              key={row.code}
              href={row.href}
              className="focus-ring-invert group grid grid-cols-1 border-b border-white/[0.07] transition-colors hover:bg-white/[0.02] md:grid-cols-2 lg:grid-cols-12"
            >
              <div
                className={`relative min-h-[260px] overflow-hidden bg-neutral-950 ring-1 ring-inset ring-white/[0.06] sm:min-h-[320px] md:min-h-[min(52vh,480px)] lg:col-span-7 ${
                  i % 2 === 1 ? "md:order-2 lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]">
                  <Image
                    src={row.imageUrl}
                    alt={`${row.name} (${row.nickname}) quarry photography on the Vaalpenskraal estate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/15 to-transparent md:from-black/50" />
                <span className="absolute left-4 top-4 font-sans text-[11px] font-medium tabular-nums tracking-[0.25em] text-white/70 md:left-5 md:top-5">
                  {row.code} / 03
                </span>
              </div>

              <Stack
                gap="md"
                className={`items-start justify-center px-4 py-ds-xl sm:px-6 md:px-ds-xl md:py-ds-2xl lg:col-span-5 ${
                  i % 2 === 1 ? "md:order-1 lg:order-1" : ""
                }`}
              >
                <p className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-burnished-copper/85">
                  {row.nickname}
                </p>
                <h3 className="font-sans text-3xl font-semibold tracking-[-0.035em] text-white/95 sm:text-4xl md:text-[2.35rem]">
                  {row.name}
                </h3>
                <Prose className="max-w-md text-sm text-white/70 md:text-base">
                  {row.blurb}
                </Prose>
                <span className="inline-flex items-center gap-ds-sm font-sans text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  Explore
                  <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Stack>
            </Link>
          ))}
        </div>
      </Section>

      {/* Editorial testimonials: local and international guests */}
      <Section
        className="relative isolate overflow-hidden border-t border-white/[0.07] bg-black"
        aria-labelledby="legacy-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
        >
          <div className="absolute left-[-20%] top-1/2 h-[min(90vw,560px)] w-[min(90vw,560px)] -translate-y-1/2 rounded-full bg-burnished-copper/20 blur-[110px]" />
        </div>

        <ContentTrack className="relative">
          <Stack gap="lg" className="md:gap-ds-xl">
          <div className="flex flex-col gap-ds-sm sm:flex-row sm:items-end sm:justify-between">
            <Stack gap="xs">
              <p
                id="legacy-heading"
                className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70"
              >
                In their words
              </p>
              <p className="font-sans text-sm text-white/70">
                Guests from across South Africa and overseas. Many of our hunters fly in from abroad.
              </p>
            </Stack>
            <div className="flex gap-ds-sm self-start sm:self-auto">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial - 1 + TESTIMONIALS.length) %
                      TESTIMONIALS.length
                  )
                }
                className="focus-ring-invert rounded-full border border-white/15 bg-white/5 p-3 text-white/80 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial + 1) % TESTIMONIALS.length
                  )
                }
                className="focus-ring-invert rounded-full border border-white/15 bg-white/5 p-3 text-white/80 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>

          <div className="grid gap-ds-xl lg:grid-cols-12 lg:items-stretch lg:gap-ds-xl">
            <div className="relative lg:col-span-7">
              <span
                className="pointer-events-none absolute -left-1 -top-6 sm:-top-10 font-serif text-[clamp(4.5rem,14vw,9rem)] leading-none text-white/[0.06]"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative" lang={activeT.locale}>
                <p className="font-serif text-[1.35rem] sm:text-2xl md:text-[1.65rem] lg:text-[1.75rem] leading-[1.45] text-white/78 font-normal text-balance">
                  {testimonialQuoteBody(activeT.quote, activeT.emphasis)}
                </p>
              </blockquote>
            </div>

            <aside className="flex flex-row items-center gap-ds-md border-t border-white/[0.08] pt-ds-lg lg:col-span-5 lg:flex-col lg:items-start lg:justify-center lg:border-t-0 lg:border-l lg:border-white/[0.08] lg:pt-0 lg:pl-ds-xl">
              <div
                className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-neutral-800 ring-2 ring-white/10 sm:h-16 sm:w-16"
                role="presentation"
              >
                <Image
                  src={`https://picsum.photos/seed/${activeT.imgSeed}/200/200`}
                  alt={`Guest portrait for ${activeT.name} (representative imagery)`}
                  width={200}
                  height={200}
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <Stack gap="2xs" className="min-w-0 flex-1 text-left">
                <div className="flex flex-wrap items-center gap-ds-sm">
                  <p className="font-sans text-lg font-medium tracking-[-0.02em] text-white/92">
                    {activeT.name}
                  </p>
                  {activeT.local && (
                    <span className="rounded-full border border-burnished-copper/25 bg-burnished-copper/10 px-2 py-1 font-sans text-[10px] font-medium uppercase tracking-wider text-burnished-copper/90">
                      Local
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm text-white/70">
                  {activeT.location}
                </p>
              </Stack>
            </aside>
          </div>

          <div
            className="flex gap-ds-sm overflow-x-auto pb-ds-sm [-webkit-overflow-scrolling:touch] md:flex-wrap md:overflow-visible md:pb-0"
            role="tablist"
            aria-label="Choose a testimonial"
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === activeTestimonial}
                onClick={() => setActiveTestimonial(i)}
                className={`focus-ring-invert shrink-0 rounded-full border px-ds-sm py-ds-sm text-left transition-colors md:min-w-0 ${
                  i === activeTestimonial
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-transparent text-white/70 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Stack gap="3xs">
                  <span className="block font-sans text-xs font-medium tracking-[-0.01em] text-white/90">
                    {item.name}
                  </span>
                  <span className="block font-sans text-[10px] uppercase tracking-wider text-white/65">
                    {item.location}
                  </span>
                </Stack>
              </button>
            ))}
          </div>
          </Stack>
        </ContentTrack>
      </Section>

      {/* Bottom CTA: centered cinematic (chosen layout A) */}
      <Section className="relative border-t border-white/[0.08]" padding="none" aria-labelledby="home-bush-cta-heading">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/cta-bush-calling.png"
            alt="Sunset over Waterberg bush calling hunters back to Vaalpenskraal"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/25" aria-hidden />
        <ContentTrack className="relative z-20 flex min-h-[min(64vh,520px)] flex-col items-center justify-center py-ds-2xl text-center">
          <Stack gap="lg" className="w-full max-w-md items-center sm:max-w-none">
            <h2
              id="home-bush-cta-heading"
              className="max-w-4xl font-serif text-[clamp(2.75rem,9vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-canvas-cream"
            >
              The bush
              <br />
              <span className="text-white/90">is calling.</span>
            </h2>
            <Prose align="center" className="max-w-xl text-base font-normal text-white/75 sm:text-lg">
              Secure your place in the legacy of the Waterberg.
            </Prose>
            <div className="flex w-full max-w-md flex-col gap-ds-sm sm:flex-row sm:justify-center">
              <Link
                href="/reserve"
                className="focus-ring-invert group relative inline-flex min-h-[48px] flex-1 items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-black sm:flex-none sm:px-10"
              >
                <span className="relative z-10">Book your hunt</span>
                <div className="absolute inset-0 origin-left scale-x-0 transform bg-neutral-200 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
              <Link
                href="/species"
                className="focus-ring-invert inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/35 bg-black/35 px-8 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:flex-none sm:px-10"
              >
                Quarry roster
              </Link>
            </div>
          </Stack>
        </ContentTrack>
      </Section>
    </PageShell>
  );
};

export default HomePageClient;
