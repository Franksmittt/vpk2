import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Mountain,
  Binoculars,
  Target,
  Flame,
} from "lucide-react";
import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "@/data/monographs/types";
import { speciesImageUrl } from "@/lib/species-media";
import { MonographFig, MonographSpeciesFig } from "./MonographMedia";
import { StickyBreadcrumbImageBackdrop } from "@/components/species/StickyBreadcrumbImageBackdrop";

const socialIconMap = {
  mountain: Mountain,
  binoculars: Binoculars,
  crosshair: Crosshair,
} as const;

const huntIconMap = {
  binoculars: Binoculars,
  target: Target,
  flame: Flame,
} as const;

function NavPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white/90"
    >
      {children}
    </a>
  );
}

const SpeciesMonographGuide = ({
  species: s,
  content: c,
}: {
  species: QuarrySpecies;
  content: MonographDefinition;
}) => {
  const showTrophy = c.showTrophySection !== false;
  const huntEyebrow = c.huntSectionEyebrow ?? c.huntTitle;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="sticky top-20 z-[90] relative overflow-hidden border-b border-white/[0.08] backdrop-blur-xl md:top-24">
        <StickyBreadcrumbImageBackdrop
          src={speciesImageUrl(c.imageSeeds.hero, 960, 400)}
          alt={`Waterberg bush strip behind ${s.name} monograph navigation`}
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3 sm:px-8 md:px-12">
          <Link
            href="/species"
            className="mr-auto inline-flex items-center gap-1 font-sans text-sm text-white/80 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Quarry
          </Link>
          <nav
            className="flex max-w-full gap-2 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] md:flex-wrap md:overflow-visible md:pb-0"
            aria-label="On this page"
          >
            <NavPill href="#overview">Overview</NavPill>
            <NavPill href="#form">Form &amp; horns</NavPill>
            <NavPill href="#range">Range &amp; diet</NavPill>
            <NavPill href="#hunt">Hunting</NavPill>
            <NavPill href="#rifle">Rifle &amp; shot</NavPill>
            <NavPill href="#table">Quick facts</NavPill>
          </nav>
        </div>
      </div>

      <header className="relative min-h-[min(88svh,820px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={speciesImageUrl(c.imageSeeds.hero, 1920, 1200)}
            alt={`${s.name} monograph hero for Waterberg quarry photography on the Iron Mountain`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/22" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/32 to-black/18"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(88svh,820px)] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 md:px-12 md:pb-24">
          <div className="hero-readable-eyebrow mb-5 inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-white/70">
            <Crosshair className="h-3.5 w-3.5 text-burnished-copper" />
            Species monograph
          </div>
          <h1 className="hero-readable-title max-w-4xl font-sans text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            {c.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-burnished-copper/90 md:text-xl">
            {s.name} · {s.scientific}
          </p>
          <p className="hero-readable-body mt-8 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
            {c.heroLead}
          </p>
          <div className="mt-10 flex min-w-0 flex-col flex-wrap gap-3 sm:flex-row">
            <Link
              href="/reserve"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-center font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto"
            >
              {c.bookCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="#hunt"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-center font-sans text-sm font-medium text-white/70 transition-colors hover:border-white/35 hover:text-white sm:w-auto"
            >
              Fieldcraft
            </a>
          </div>
        </div>
      </header>

      <div id="overview" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="border-t border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:gap-16 md:px-12">
          <div className="space-y-6 font-sans text-base leading-[1.7] text-white/52 md:text-[1.05rem] md:py-0.5">
            {c.variantCallout ? (
              <p className="rounded-2xl border border-burnished-copper/30 bg-burnished-copper/[0.07] p-4 font-sans text-sm leading-relaxed text-white/70">
                {c.variantCallout}
              </p>
            ) : null}
            <p>{c.introParagraphs[0]}</p>
            <p>{c.introParagraphs[1]}</p>
          </div>
          <div className="flex min-h-0 flex-col">
            <MonographSpeciesFig
              speciesId={s.id}
              seed={c.imageSeeds.intro}
              useCardImage={c.imageSeeds.useIntroCardImage}
              layout="matchText"
              className="h-full min-h-[min(13.75rem,48dvh)]"
            />
          </div>
        </div>
      </section>

      <MonographFig
        seed={c.imageSeeds.panorama}
        className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12"
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.taxonomyTitle}</h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.taxonomyIntro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {c.taxonomyCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
            >
              <h3 className="font-sans text-sm font-semibold text-white/90">{card.title}</h3>
              <p className="mt-1 font-serif text-xs italic text-burnished-copper/80">{card.sub}</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="form" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="border-t border-white/[0.07] bg-[#080808] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.formTitle}</h2>
            <p className="max-w-md font-sans text-sm text-white/65">{c.formEyebrow}</p>
          </div>

          <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 lg:py-0.5">
              <h3 className="font-sans text-lg font-medium text-white/90">{c.formPrimaryTitle}</h3>
              <p className="font-sans text-base leading-[1.75] text-white/70">{c.formPrimaryBody}</p>
              <ul className="space-y-3 font-sans text-sm text-white/70">
                {c.formPrimaryBullets.map((li, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 border-l-2 pl-4 ${i === 0 ? "border-burnished-copper/40" : "border-white/10"}`}
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-h-0 flex-col">
              <MonographFig seed={c.imageSeeds.formPrimary} layout="matchText" className="h-full" />
            </div>
          </div>

          <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex min-h-0 flex-col lg:order-1">
              <MonographFig seed={c.imageSeeds.formSecondary} layout="matchText" className="h-full" />
            </div>
            <div className="order-1 space-y-6 lg:order-2 lg:py-0.5">
              <h3 className="font-sans text-lg font-medium text-white/90">{c.formSecondaryTitle}</h3>
              <p className="font-sans text-base leading-[1.75] text-white/70">{c.formSecondaryBody}</p>
            </div>
          </div>

          <blockquote className="relative mt-16 border-l-2 border-burnished-copper/60 bg-white/[0.02] py-6 pl-6 pr-4 font-serif text-lg leading-relaxed text-white/70 md:pl-10 md:text-xl">
            <span className="absolute left-2 top-4 font-serif text-5xl leading-none text-white/[0.07] md:left-4">
              &ldquo;
            </span>
            {c.formBlockquote}
          </blockquote>

          <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2 md:gap-10">
            <MonographFig
              layout="matchText"
              className="h-full"
              placeholder="Field reference: broadside heart-lung placement for this species (PH briefing style)."
            />
            <MonographFig seed={`${s.id}-horns`} layout="matchText" className="h-full" />
          </div>
        </div>
      </section>

      <div id="range" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.ecologyTitle}</h2>
        <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 font-sans text-base leading-[1.75] text-white/52 lg:col-span-7 lg:py-0.5">
            {c.ecologyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex min-h-0 flex-col lg:col-span-5">
            <MonographFig seed={c.imageSeeds.ecology} layout="matchText" className="h-full" />
          </div>
        </div>

        <h3 className="mt-16 font-sans text-xl font-semibold text-white/90">{c.feedSectionTitle}</h3>
        <p className="mt-4 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.feedBody}</p>

        <div className="mt-8 rounded-2xl border border-burnished-copper/25 bg-burnished-copper/[0.06] p-6 md:p-8">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-burnished-copper">
            {c.fieldNoteTitle}
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-white/70">{c.fieldNoteBody}</p>
        </div>

        <MonographFig seed={c.imageSeeds.feedWide} className="mt-12" />
      </section>

      <section className="border-t border-white/[0.07] bg-[#060606] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.socialTitle}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {c.socialCards.map((card) => {
              const Icon = socialIconMap[card.icon];
              return (
                <div key={card.title} className="rounded-2xl border border-white/[0.08] p-6">
                  <Icon className="h-6 w-6 text-burnished-copper/80" />
                  <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{card.body}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.rutParagraph}</p>
          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <MonographFig seed={c.imageSeeds.rutLeft} layout="matchText" className="h-full" />
            <MonographFig
              layout="matchText"
              className="h-full"
              placeholder="Vocal signature and herd behaviour: reference diagram for guides and guests."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.predationTitle}</h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.predationBody}</p>
        <MonographFig seed={c.imageSeeds.predation} className="mt-10" />
      </section>

      <div id="hunt" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="border-t border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{huntEyebrow}</h2>
          <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.huntIntro}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.huntMethods.map((b) => {
              const Icon = huntIconMap[b.icon];
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-burnished-copper/25"
                >
                  <Icon className="h-7 w-7 text-burnished-copper/85" />
                  <h3 className="mt-4 font-sans text-base font-semibold text-white/90">{b.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{b.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <MonographFig seed={c.imageSeeds.hunt} layout="matchText" className="h-full" />
            <MonographFig
              layout="matchText"
              className="h-full"
              placeholder="Spoor comparison: this species alongside common Waterberg quarry for scale."
            />
          </div>
        </div>
      </section>

      {showTrophy ? (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.trophyTitle}</h2>
          {c.trophyParagraphs.map((p, i) => (
            <p key={i} className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
              {p}
            </p>
          ))}
          <MonographFig seed={c.imageSeeds.trophy} className="mt-10" />
        </section>
      ) : null}

      <div id="rifle" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="border-t border-white/[0.07] bg-[#080808] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.rifleTitle}</h2>
          <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">{c.rifleIntro}</p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/65">
                    Class
                  </th>
                  <th className="px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/65">
                    Examples
                  </th>
                  <th className="px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/65">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/65">
                {c.rifleTable.map(([a, b, row]) => (
                  <tr key={a} className="border-b border-white/[0.06]">
                    <td className="px-4 py-3 font-medium text-white/85">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3 text-white/70">{row}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 font-sans text-sm leading-relaxed text-white/70 lg:py-0.5">
              {c.rifleTips.map((t) => (
                <p key={t.label}>
                  <span className="font-medium text-white/75">{t.label}</span> {t.body}
                </p>
              ))}
            </div>
            <div className="flex min-h-0 flex-col">
              <MonographFig
                layout="matchText"
                className="h-full"
                placeholder="Anatomical overlay and ethical shot window for this species (field briefing card)."
              />
            </div>
          </div>

          <MonographFig seed={c.imageSeeds.rifle} className="mt-12" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{c.meatTitle}</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 font-sans text-base leading-[1.75] text-white/52">
            {c.meatLeft.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="space-y-5 font-sans text-base leading-[1.75] text-white/52">
            {c.meatRight.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <MonographFig seed={c.imageSeeds.meat} layout="matchText" className="h-full" />
          <MonographFig
            layout="matchText"
            className="h-full"
            placeholder="Meat handling: chill chain, curing, and table presentation at camp."
          />
        </div>
      </section>

      <div id="table" className="scroll-mt-36 md:scroll-mt-40" />

      <section className="border-t border-white/[0.07] bg-[#060606] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Quick reference</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody className="text-white/65">
                {[
                  ["Scientific name", s.scientific],
                  ["Caliber (estate brief)", s.caliber],
                  ["Rowland Ward", s.rowlandWard],
                  ["Terrain tag", s.terrain],
                  ...c.quickFactExtraRows,
                  ["On Iron Mountain", `${s.terrain} · quota and age rules follow the annual census`],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-white/[0.06]">
                    <th className="whitespace-nowrap px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-white/65">
                      {k}
                    </th>
                    <td className="px-4 py-3 text-white/75">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 md:px-12">
          <h2 className="font-sans text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{c.closingTitle}</h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-white/70">{c.closingBody}</p>
          <div className="mt-10 flex min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/reserve"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
            >
              Enquire for Vaalpenskraal
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/species"
              className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-center font-sans text-sm font-medium text-white/70 transition-colors hover:border-white/35 hover:text-white sm:w-auto sm:px-8 sm:py-4"
            >
              Back to full quarry list
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeciesMonographGuide;
