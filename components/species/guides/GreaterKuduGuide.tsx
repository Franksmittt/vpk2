import type { ComponentProps } from "react";
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
import { speciesImageUrl } from "@/lib/species-media";
import { GuideFigureImg } from "@/components/species/guides/GuideFigureImg";

type FigLayout = "banner" | "tall" | "matchText";

/** Files live in public/images/species/greater-kudu/: see WHERE-TO-PUT-IMAGES.txt */
export const GREATER_KUDU_LOCAL_IMAGE_BASE = "/images/species/greater-kudu";
/** Local assets in public/images/species/greater-kudu/ */
export const GREATER_KUDU_LOCAL_IMAGE_EXT = "png";

export const GREATER_KUDU_DIAGRAMS_BASE = `${GREATER_KUDU_LOCAL_IMAGE_BASE}/diagrams`;

/**
 * matchText: image block stretches to the height of its grid row (sibling copy column).
 * Use beside body copy; avoids portrait aspect ratios that dwarf the text.
 */
function Fig({
  seed,
  caption,
  className = "",
  layout = "banner",
  placeholder,
  diagramSrc,
  localBase,
  localExt = "jpg",
}: {
  seed?: string;
  caption?: string;
  className?: string;
  layout?: FigLayout;
  placeholder?: string;
  /** Static asset under /public, e.g. /images/species/greater-kudu/diagrams/....png */
  diagramSrc?: string;
  /** e.g. /images/species/greater-kudu: tries /{base}/{seed}.{ext} before remote fallback */
  localBase?: string;
  localExt?: string;
}) {
  const matchFallbackW = 1200;
  const matchFallbackH = 1200;
  const wideFallbackW = layout === "tall" ? 1000 : 1600;
  const wideFallbackH = layout === "tall" ? 1250 : 900;

  if (layout === "matchText") {
    return (
      <figure className={`flex h-full min-h-0 flex-col ${className}`}>
        <div className="relative min-h-[min(13.75rem,50dvh)] w-full flex-1 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] sm:min-h-[min(16rem,52dvh)] lg:min-h-0">
          {diagramSrc ? (
            <Image
              src={diagramSrc}
              alt={caption ? `Diagram: ${caption}` : "Greater kudu species diagram"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          ) : placeholder ? (
            <div className="flex h-full min-h-[min(12rem,42dvh)] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-6 text-center">
              <span className="font-sans text-xs leading-relaxed text-white/65">{placeholder}</span>
            </div>
          ) : localBase ? (
            <GuideFigureImg
              localSrc={`${localBase}/${seed}.${localExt}`}
              fallbackSrc={speciesImageUrl(seed!, matchFallbackW, matchFallbackH)}
              className="absolute inset-0 h-full w-full object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <Image
              src={speciesImageUrl(seed!, matchFallbackW, matchFallbackH)}
              alt={caption ? `Figure: ${caption}` : "Greater kudu monograph figure"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          )}
        </div>
        {caption ? (
          <figcaption className="mt-3 shrink-0 font-sans text-[11px] leading-snug text-white/65">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  const ratio =
    layout === "tall" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[21/9] sm:aspect-video";
  if (placeholder) {
    return (
      <figure className={className}>
        <div
          className={`flex ${ratio} items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/[0.04] to-transparent px-6 text-center`}
        >
          <span className="font-sans text-xs leading-relaxed text-white/65">{placeholder}</span>
        </div>
        {caption ? (
          <figcaption className="mt-3 font-sans text-[11px] leading-snug text-white/65">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden rounded-2xl ring-1 ring-white/[0.08] ${ratio}`}>
        {localBase ? (
          <GuideFigureImg
            localSrc={`${localBase}/${seed}.${localExt}`}
            fallbackSrc={speciesImageUrl(seed!, wideFallbackW, wideFallbackH)}
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        ) : (
          <Image
            src={speciesImageUrl(seed!, wideFallbackW, wideFallbackH)}
            alt={caption ? `Figure: ${caption}` : "Greater kudu monograph banner"}
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-sans text-[11px] leading-snug text-white/65">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function KuduFig(props: Omit<ComponentProps<typeof Fig>, "localBase" | "localExt"> & { seed: string }) {
  return (
    <Fig
      {...props}
      localBase={GREATER_KUDU_LOCAL_IMAGE_BASE}
      localExt={GREATER_KUDU_LOCAL_IMAGE_EXT}
    />
  );
}

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

const GreaterKuduGuide = ({ species: s }: { species: QuarrySpecies }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <header className="relative min-h-[min(88svh,820px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={speciesImageUrl("kuduheroiron", 1920, 1200)}
            alt="Greater kudu bull in iron-stone Waterberg thicket, monograph hero at Vaalpenskraal"
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
            The Grey Ghost of the thickets
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-lg italic text-burnished-copper/90 md:text-xl">
            Greater Kudu · {s.scientific}
          </p>
          <p className="hero-readable-body mt-8 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
            Few African animals earn the quiet reverence of a mature kudu bull. Spiral horns, disruptive
            stripes, and a freeze that breaks your nerve: this is the graduate course in bush stillness.
          </p>
          <div className="mt-10 flex min-w-0 flex-col flex-wrap gap-3 sm:flex-row">
            <Link
              href="/reserve"
              className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-center font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto"
            >
              Book a kudu hunt
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

      <div className="sticky top-20 z-[90] border-b border-white/[0.08] bg-black/90 backdrop-blur-md md:top-24">
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3 sm:px-8 md:px-12">
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

      <div id="overview" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Intro band + image (row-height matched, not a towering portrait) */}
      <section className="border-t border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:gap-16 md:px-12">
          <div className="space-y-6 font-sans text-base leading-[1.7] text-white/52 md:text-[1.05rem] md:py-0.5">
            <p>
              In the lexicon of African wildlife, the Greater Kudu sits near the top for hunters,
              managers, and ecologists alike. For us on the Iron Mountain it is a signal of habitat
              health: where thick cover, browse quality, and water line up, kudu density tells the truth.
            </p>
            <p>
              This page is built for people who want more than a trophy photo. We walk through
              taxonomy, morphology, diet tricks (including how kudu beat tannin warfare), social structure,
              fieldcraft, rifles, shot placement, meat, and the folklore that still travels around the fire.
            </p>
          </div>
          <div className="flex min-h-0 flex-col">
            <KuduFig
              seed="kuduintro"
              layout="matchText"
              className="h-full min-h-[min(13.75rem,48dvh)]"
            />
          </div>
        </div>
      </section>

      <KuduFig
        seed="kudupanorama"
        className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12"
      />

      {/* Taxonomy */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
          Taxonomy and names
        </h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
          Kudu belong to the spiral-horned tribe Tragelaphini alongside nyala, bushbuck, sitatunga,
          bongo, and eland. The name{" "}
          <span className="text-white/75">Tragelaphus strepsiceros</span> is poetry in Greek: goat-like
          tenacity, deer-like grace, and horns that twist like rope under tension.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Southern greater kudu",
              sub: "T. s. strepsiceros",
              body: "The form you meet in South Africa, Namibia, Botswana, Zimbabwe, and into southern Kenya. Heavy bodies, classic grey bulls, the backbone of our industry.",
            },
            {
              title: "East African greater kudu",
              sub: "T. s. bea / chora",
              body: "Lighter, often less striping, tuned to acacia scrub and more arid country toward the Horn of Africa.",
            },
            {
              title: "Western greater kudu",
              sub: "T. s. cottoni",
              body: "Isolated pockets in Chad and western Sudan. Rare air for most hunters, but part of the full map.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
            >
              <h3 className="font-sans text-sm font-semibold text-white/90">{c.title}</h3>
              <p className="mt-1 font-serif text-xs italic text-burnished-copper/80">{c.sub}</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="form" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Morphology */}
      <section className="border-t border-white/[0.07] bg-[#080808] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              Size, coat, and the spiral
            </h2>
            <p className="max-w-md font-sans text-sm text-white/65">
              Sexual dimorphism here is strategy, not decoration.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 lg:py-0.5">
              <h3 className="font-sans text-lg font-medium text-white/90">The bull</h3>
              <p className="font-sans text-base leading-[1.75] text-white/70">
                Mature bulls are enormous: roughly 140 to 160 cm at the shoulder and commonly 190 to 270
                kg, with exceptional South African animals past 300 kg. Full body size may take until six
                years. The neck thickens to carry horn weight and to power horn wrestling, not head
                smashing like sheep.
              </p>
              <ul className="space-y-3 font-sans text-sm text-white/70">
                <li className="flex gap-3 border-l-2 border-burnished-copper/40 pl-4">
                  Horn length along the spiral often lands near 120 cm. Fifty-four inches is widely
                  discussed as a trophy benchmark; sixty is lifetime-grade; seventy-two-inch records are
                  lightning strikes.
                </li>
                <li className="flex gap-3 border-l-2 border-white/10 pl-4">
                  Bulls tilt the chin up and lay horns back to slip through thorn. The spiral sheds
                  branches instead of hooking every twig.
                </li>
              </ul>
            </div>
            <div className="flex min-h-0 flex-col">
              <KuduFig
                seed="kudubullportrait"
                layout="matchText"
                className="h-full"
              />
            </div>
          </div>

          <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex min-h-0 flex-col lg:order-1">
              <KuduFig
                seed="kuducowears"
                layout="matchText"
                className="h-full"
              />
            </div>
            <div className="order-1 space-y-6 lg:order-2 lg:py-0.5">
              <h3 className="font-sans text-lg font-medium text-white/90">The cow</h3>
              <p className="font-sans text-base leading-[1.75] text-white/70">
                Cows run about 100 to 125 cm at the shoulder and 120 to 210 kg. No horns, less beard,
                often a softer face. Those ears are not cosmetic: they track the snap that gives a
                leopard away.
              </p>
              <h3 className="pt-4 font-sans text-lg font-medium text-white/90">Stripes and shadow</h3>
              <p className="font-sans text-base leading-[1.75] text-white/70">
                Six to ten vertical white lines break the outline in dappled thicket. In open sun the
                pattern looks loud. In broken shade it erases mass. Add cheek spots, a chevron, and an
                erectile dorsal mane for threat display, and you understand why animals “appear” after
                minutes of staring.
              </p>
            </div>
          </div>

          <blockquote className="relative mt-16 border-l-2 border-burnished-copper/60 bg-white/[0.02] py-6 pl-6 pr-4 font-serif text-lg leading-relaxed text-white/70 md:pl-10 md:text-xl">
            <span className="absolute left-2 top-4 font-serif text-5xl leading-none text-white/[0.07] md:left-4">
              &ldquo;
            </span>
            Hunters learn quickly: the first defense is not running. It is standing still until you
            doubt your own eyes.
          </blockquote>
        </div>
      </section>

      <div id="range" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Ecology */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
          Range, heat, and water
        </h2>
        <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 font-sans text-base leading-[1.75] text-white/52 lg:col-span-7 lg:py-0.5">
            <p>
              Kudu are edge animals: savanna woodland, acacia thickets, riverine strips, koppies with
              concentrated feed. They are not bulk grassland specialists like wildebeest, and not closed
              forest hermits like bushbuck. Cover density is the main dial on population.
            </p>
            <p>
              Big ears dump heat. Thin fat makes cold snaps dangerous. That is why activity skews
              crepuscular, with midday spent as a grey statue in the deepest shade. Under pressure they
              may go almost nocturnal, which is when the game gets harder and more technical for the
              hunter.
            </p>
            <p>
              Plan on roughly nine liters of drinking water per day for an adult, usually one or two
              visits. In dry months they rarely drift more than a few kilometers from reliable water,
              which concentrates movement and shapes how we hunt ethically in summer.
            </p>
          </div>
          <div className="flex min-h-0 flex-col lg:col-span-5">
            <KuduFig
              seed="kuduwaterhole"
              layout="matchText"
              className="h-full"
            />
          </div>
        </div>

        <h3 className="mt-16 font-sans text-xl font-semibold text-white/90">Browsing and tannin chess</h3>
        <p className="mt-4 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
          Kudu are pure browsers. Grass is a footnote unless it is young and explosive. They strip acacia
          and combretum, hit sickle bush that farmers curse, and raid seasonal fruits. The twist:
          damaged acacias spike tannins fast and warn neighbors with ethylene. Kudu respond by browsing
          briefly, then moving upwind to fresh leaves. That is why a feeding bull covers ground even
          when he looks calm.
        </p>

        <div className="mt-8 rounded-2xl border border-burnished-copper/25 bg-burnished-copper/[0.06] p-6 md:p-8">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-burnished-copper">
            Field note
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-white/70">
            If you watch a bull “nibble and walk,” you are seeing chemistry, not boredom. Respect that
            rhythm on approach: cutting him off from the next tree is often worse than a noisy boot.
          </p>
        </div>

        <KuduFig
          seed="kudubrowseacacia"
          className="mt-12"
        />
      </section>

      {/* Social + rut */}
      <section className="border-t border-white/[0.07] bg-[#060606] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Society, rut, and the death lock
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] p-6">
              <Mountain className="h-6 w-6 text-burnished-copper/80" />
              <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                Maternal herds
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                Cows and young run in stable groups, sharing grooming and watch duty across overlapping
                home ranges.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] p-6">
              <Binoculars className="h-6 w-6 text-burnished-copper/80" />
              <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                Bachelor herds
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                Young bulls peel off around two years, spar in low gear, and sort a pecking order before
                solitude later in life.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] p-6">
              <Crosshair className="h-6 w-6 text-burnished-copper/80" />
              <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                Solitary patriarchs
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                Old bulls vanish into the worst country. They meet cows on their terms, on a short rut
                clock.
              </p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
            Rut peaks late summer into early winter in southern Africa. Necks swell. Bulls flehmen on
            estrus signals. Fights are horn wrestling: lock, twist, leverage. Rarely, spirals bind in a
            death lock. African camp stories still carry paired skeletons as a warning about pride
            without exit.
          </p>
        </div>
      </section>

      <div id="hunt" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Hunting */}
      <section className="border-t border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Hunting the ghost
          </h2>
          <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
            Most serious kudu work is glass, wind, and feet. You are not beating them in a sprint. You
            are trying to be boring enough to close the meters.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Binoculars,
                title: "Spot and stalk",
                text: "Koppie at first light. Scan for horn glint, ear flick, horizontal back line in vertical timber. Plan a stalk on wind, not on hope.",
              },
              {
                icon: Target,
                title: "Ambush",
                text: "Blinds on water or minerals in dry months. Lets you judge age and mass with less movement. Bowhunters live here.",
              },
              {
                icon: Flame,
                title: "Tracking",
                text: "Long kudu tracks: narrow and elongated versus wildebeest hearts. Heavy bulls blunt toes and sink heels. Read gait for panic vs feed.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-burnished-copper/25"
              >
                <b.icon className="h-7 w-7 text-burnished-copper/85" />
                <h3 className="mt-4 font-sans text-base font-semibold text-white/90">{b.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <KuduFig
              seed="kudustalkridge"
              layout="matchText"
              className="h-full"
            />
            <Fig
              diagramSrc={`${GREATER_KUDU_DIAGRAMS_BASE}/spoor-board.png`}
              layout="matchText"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* Trophy */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
          Trophy sense on the hoof
        </h2>
        <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
          Spirals lie. Deep curls eat length that tight curls hide. Tips out and back usually mean a
          finished rotation; tips in or up can mean immaturity. Ivory tips from decades of rubbing read
          as character even when tape loses a fraction. The ear is roughly eight inches: horn past the
          ear before the first turn is a practical field clue.
        </p>
        <p className="mt-4 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
          Ethical hunting here is age and condition, not panic over inches. Old bulls show dark facial
          masks, heavy dewlaps, sway in the topline, and hips that tell stories. Young bulls look clean
          and athletic. Your PH carries the final say against the quota and the condition of the habitat.
        </p>
        <KuduFig
          seed="kudutrophycompare"
          className="mt-10"
        />
      </section>

      <div id="rifle" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Rifle + shot */}
      <section className="border-t border-white/[0.07] bg-[#080808] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Rifles, bullets, optics, placement
          </h2>
          <p className="mt-5 max-w-3xl font-sans text-base leading-[1.75] text-white/52">
            Kudu are big but not buffalo-thick. What you need is controlled expansion and enough shank
            to punch a shoulder if a twig lies. Premium bonded or partition types have paid for a lot of
            thicket-country reliability. Monolithics work if you keep speed honest.
          </p>

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
                {[
                  ["Minimum", ".270 Win, 7mm-08", "Open ground, perfect placement, premium bullets."],
                  ["Standard", ".308 Win, .30-06", "180 gr class is a proven all-rounder in thick bush."],
                  ["Magnum", ".300 Win Mag, 7mm Rem Mag", "Cross-valley confidence and flatter arcs."],
                  ["Thicket", "9.3x62, .375 H&H", "Heavy slow bullets forgive light brush."],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-b border-white/[0.06]">
                    <td className="px-4 py-3 font-medium text-white/85">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3 text-white/70">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 font-sans text-sm leading-relaxed text-white/70 lg:py-0.5">
              <p>
                <span className="font-medium text-white/75">Glass:</span> 10x42 is the African default.
                Buy transmission you trust in shadow, not just magnification on the box.
              </p>
              <p>
                <span className="font-medium text-white/75">Scope:</span> Low end for close thicket
                encounters, top end for judging curl across a valley.
              </p>
              <p>
                <span className="font-medium text-white/75">Broadside:</span> Up the back leg, about a
                third up the body, through heart and lungs. “Behind the shoulder” deer habits can slide
                you into liver if the angle lies.
              </p>
              <p>
                <span className="font-medium text-white/75">Quartering away:</span> Drive through on the
                near side, exit opposite shoulder if you can picture the line.
              </p>
            </div>
            <div className="flex min-h-0 flex-col">
              <Fig
                diagramSrc={`${GREATER_KUDU_DIAGRAMS_BASE}/anatomical-overlay.png`}
                layout="matchText"
                className="h-full"
              />
            </div>
          </div>

          <KuduFig
            seed="kuduhunterrifle"
            className="mt-12"
          />
        </div>
      </section>

      {/* Meat + culture */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
          Meat, fire, and story
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 font-sans text-base leading-[1.75] text-white/52">
            <p>
              Kudu venison is dark, lean, and closer to fine beef than to musky impala if you treat it
              with respect. No intramuscular fat means rare to medium-rare or you cook leather.
            </p>
            <p>
              Backstrap over coals with salt and coriander. Schnitzel from leg cuts for the kids. Neck
              and shin in a slow pot, low heat, with wine, onion, and dried apricot for sweetness against
              the iron in the meat. Air-dried cured strips from the long muscle groups: ideal travel
              protein for the drive home.
            </p>
          </div>
          <div className="space-y-5 font-sans text-base leading-[1.75] text-white/52">
            <p>
              Horns have been trumpets and ritual tools for generations. Tswana clans carry kudu as
              totem for some lines. Zulu teaching stories use locked horns as a metaphor for stubborn war
              that kills both sides. Dream folklore ties the animal to rising status and the weight that
              comes with it.
            </p>
          </div>
        </div>
      </section>

      <div id="table" className="scroll-mt-36 md:scroll-mt-40" />

      {/* Quick reference */}
      <section className="border-t border-white/[0.07] bg-[#060606] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <h2 className="font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
            Quick reference
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody className="text-white/65">
                {[
                  ["Scientific name", s.scientific],
                  ["Trophy talk", "54 inches discussed as strong; 60 is legend-grade"],
                  ["Bull mass", "190 to 270 kg typical; exceptional animals heavier"],
                  ["Cow mass", "120 to 210 kg; hornless"],
                  ["Water", "~9 L / day; dry-season concentration near perennial sources"],
                  ["Browse staples", "Acacia, combretum, sickle bush, seasonal fruit, spekboom"],
                  ["On Iron Mountain", `${s.terrain} · ${s.caliber} per estate brief`],
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

      {/* CTA */}
      <section className="border-t border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 md:px-12">
          <h2 className="font-sans text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Ready to hunt the spiral?
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-white/70">
            Bring patience, good glass, and a rifle you can shoot cold. We will match you to the bush as
            it is this season, not as a brochure promised last year.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

export default GreaterKuduGuide;
