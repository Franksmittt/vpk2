import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Footprints,
  Heart,
  MapPin,
  Sparkles,
  Sunrise,
  Flame,
  Ear,
  Binoculars,
  Camera,
  BookOpen,
  Compass,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { EXPERIENCE_IMAGES } from "@/lib/experience-media";

export const metadata: Metadata = {
  title: "The Experience | Vaalpenskraal Game Reserve",
  description:
    "Dawn on the Iron Mountain. Boma embers. Thicket that teaches patience. First hunt or fiftieth: the Waterberg asks for honesty, not bravado.",
};

/** Local `src` wins; otherwise picsum by `seed` (placeholder until you add an asset). */
function ExperienceImg({
  src,
  seed,
  alt,
  className,
  priority,
  width = 1600,
  height = 1000,
  fill,
  sizes,
}: {
  src?: string;
  seed: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
}) {
  const url = src ?? `https://picsum.photos/seed/${seed}/${width}/${height}`;
  const resolvedSizes = sizes ?? (fill ? "100vw" : "(max-width: 768px) 100vw, 85vw");

  if (fill) {
    return (
      <Image
        src={url}
        alt={alt}
        fill
        sizes={resolvedSizes}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={url}
      alt={alt}
      width={width}
      height={height}
      sizes={resolvedSizes}
      className={className}
      priority={priority}
    />
  );
}

const AUDIENCE: {
  key: string;
  seed: string;
  src?: string;
  title: string;
  icon: typeof Footprints;
  body: string;
  extra: string;
}[] = [
  {
    key: "solo",
    seed: "expsolo",
    src: EXPERIENCE_IMAGES.audience.solo,
    title: "Solo hunters",
    icon: Footprints,
    body: "Elite silence on the stalk. Your pace. The PH beside you, but the shot stays yours. Plenty arrive for horns and leave with a quieter skull.",
    extra:
      "Flying in alone: we spell gate time, first-night rhythm, who meets you. Rifle and trophy paperwork stay with your agent, not our desk.",
  },
  {
    key: "family",
    seed: "expfamily",
    src: EXPERIENCE_IMAGES.audience.family,
    title: "Friends, family, children",
    icon: Heart,
    body: "Shared discomfort on the walk. Shared laughter at coals. Kids watch adults go still. Non-hunters still get copper dawn on the stoep, nyala at the wire, stories that start mid-sentence.",
    extra:
      "Safety is blunt: animals, cars, water are real. Clear lines. Parents tell us the week rewired listening. They rebook. We believe them.",
  },
  {
    key: "global",
    seed: "expglobal",
    src: EXPERIENCE_IMAGES.audience.global,
    title: "Local & international",
    icon: MapPin,
    body: "Modimolle or Melbourne: last hour narrows to dust, grass, cattle grids. Locals bring humour and honest expectations. Internationals bring jet lag and sharp questions. Same answers.",
    extra:
      "Import, export, temp rifle: your stack or your outfitter. We stay out. We do care if you are still on another time zone: the PH will bench a reckless first morning.",
  },
];

const HOURS = [
  {
    t: "Before first light",
    text: "Coffee while the air is blade-cold. Wet finger wind. City noise gone.",
  },
  {
    t: "Golden hour",
    text: "Glass up. Tracks as sentences. The PH murmurs a line your boots accept before your head does.",
  },
  {
    t: "Midday",
    text: "Heat herds game to shade. You eat slow. Legs earned the salt.",
  },
  {
    t: "Late afternoon",
    text: "Honest light. Long shadows. Thicket stops forgiving lazy wind.",
  },
  {
    t: "After dark",
    text: "Boma smoke in your hair. Stars close enough to taste. Stories that only worked there.",
  },
];

const SENSE_TILES = [
  {
    seed: "expsensefire",
    cap: "Smoke and boma embers",
    src: "/images/experience/senses-boma-embers.png",
  },
  {
    seed: "expsenserain",
    cap: "Petrichor before a storm",
    src: "/images/experience/senses-petrichor.png",
  },
  {
    seed: "expsensegrass",
    cap: "Dry grass against your legs",
    src: "/images/experience/senses-dry-grass.png",
  },
  {
    seed: "expsensenight",
    cap: "Night sky over the camp",
    src: "/images/experience/senses-night-sky.png",
  },
] as const;

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="experience-hero-title"
        scrollLinkedTypography
        eyebrow="The Experience"
        title="The bush is the lead role."
        subtitle="Dust when the tyres slow. Turtle dove at noon. Cold air under your cuffs at last light. Read this before you book. Hunters, families, writers, guests who never carry a rifle: same respect."
        imageSeed="experiencehero"
        imageSrc={EXPERIENCE_IMAGES.hero}
      />

      {/* Full-bleed panorama */}
      <section className="relative border-b border-white/[0.07]">
        <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden bg-neutral-950 sm:min-h-[280px] md:min-h-[340px]">
          <ExperienceImg
            fill
            src={EXPERIENCE_IMAGES.panorama}
            seed="expwaterbergpan"
            alt="Wide view over the Waterberg bush at dawn across Vaalpenskraal"
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
            <p className="vp-scroll-root-line max-w-3xl font-sans text-sm leading-relaxed text-white/75 md:text-base">
              Iron soil. Thorn corridors. Ridgelines that turn copper while the sun still has work to do.
            </p>
          </div>
        </div>
      </section>

      {/* Through your eyes */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5 [perspective:1400px]">
              <Sparkles className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Field note</p>
              <h2 className="vp-scroll-reveal-type mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
                Through your eyes
              </h2>
            </div>
            <div className="space-y-6 font-sans text-base leading-relaxed text-white/70 lg:col-span-7">
              <p>New to hunting? The arc is slower than a trophy photo. Wind on your neck. Impala alarm that outruns thought. Then the PH goes quiet because the thicket changed the rules.</p>
              <p>Seasoned elsewhere? The Waterberg still gives you a new paper. Open glades, then thicket that eats distance. Sometimes the right shot is the one you do not take.</p>
              <p>Skeptical of fenced estates? Ask blunt questions. We answer. Habitat, harvest, where money flows back into the veld: that is the spine, not garnish.</p>
              <blockquote className="relative border-l-2 border-burnished-copper/60 py-1 pl-6 font-serif text-lg leading-snug text-white/70 md:text-xl">
                Curious guests leave quieter. Not smaller. Quieter.
              </blockquote>
              <p>Non-hunters get the same light clock: jackals like rusted hinges, kudu stepping out as if the bush had been holding its breath.</p>
            </div>
          </div>

          <figure className="relative mt-12 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:mt-16">
            <div className="relative aspect-[4/3] w-full lg:aspect-[21/9]">
              <ExperienceImg
                fill
                src={EXPERIENCE_IMAGES.thicketWalk}
                seed="expthicketwalk"
                alt="Thick Waterberg bush on the estate with hunters at a distance"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
            <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] leading-snug text-white/65 md:px-8">
              On-estate stalk: thicket and distance, same rhythm as the quarry page hero.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Audience */}
      <section className="border-b border-white/[0.07] bg-[#070707] py-20 md:py-32">
        <div className="editorial-container">
          <div className="mx-auto max-w-3xl text-center [perspective:1400px]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Who you arrive as</p>
            <h2 className="vp-scroll-reveal-type mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.35rem]">
              Same mountain, different shoes
            </h2>
            <p className="vp-scroll-root-line mt-5 font-sans text-base leading-relaxed text-white/70">
              First-timer, PH on leave, father and son, writer after adjectives, corporate crew still pretending they are not scoring. The veld reads you first.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:gap-8">
            {AUDIENCE.map((a) => (
              <article
                key={a.key}
                className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.05] md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] min-h-[200px] md:aspect-auto md:min-h-[min(100%,320px)]">
                  <ExperienceImg
                    fill
                    src={a.src}
                    seed={a.seed}
                    alt={`${a.title}: Waterberg hunting and lodge context at Vaalpenskraal`}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/75" />
                  <a.icon className="absolute left-5 top-5 h-9 w-9 text-white/90 drop-shadow-md md:left-6 md:top-6" aria-hidden />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-white/95 md:text-2xl">{a.title}</h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/70 md:text-base">{a.body}</p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/65 md:text-[0.95rem]">{a.extra}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Day rhythm */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 [perspective:1400px]">
                <Sunrise className="h-9 w-9 text-burnished-copper/80" aria-hidden />
                <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Rhythm</p>
                <h2 className="vp-scroll-reveal-type mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">A day inside the hunt</h2>
                <p className="vp-scroll-root-line mt-5 font-sans text-sm leading-relaxed text-white/70 md:text-base">
                  No twin days. Wind and animal mood rewrites. By day three the beat sits in your ribs anyway.
                </p>
                <figure className="relative mt-10 overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                  <div className="relative aspect-[4/5] w-full">
                    <ExperienceImg
                      fill
                      src={EXPERIENCE_IMAGES.dawnOutlook}
                      seed="expdawncoffee"
                      alt="View from the Vaalpenskraal lodge outlook over bushveld at morning light"
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      width={1200}
                      height={1500}
                    />
                  </div>
                  <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/65">
                    Lodge outlook and morning light (estate photography).
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="space-y-0 lg:col-span-7">
              {HOURS.map((h, i) => (
                <div
                  key={h.t}
                  className={`border-t border-white/[0.08] py-8 first:border-t-0 first:pt-0 md:py-10 ${i === HOURS.length - 1 ? "md:pb-0" : ""}`}
                >
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-burnished-copper/85">{h.t}</p>
                  <p className="mt-3 font-sans text-base leading-relaxed text-white/70 md:text-lg">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Straight talk */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-32">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Straight talk</p>
          <h2 className="mt-4 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Three talks we have every season</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Compass className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I have never hunted. Will I embarrass myself?”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                Every first stalk has a loud sleeve or a dumb question. The PH shortens the curve without shaming you. Not an audition. Older than a feed scroll.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Binoculars className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I have done Namibia, Zambia, the lot. Surprise me.”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                Then we drill thicket IQ: small openings, negative space, refusing the scope lie. Waterberg is a technical paper. Arrogance costs inches. Patience pays.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Flame className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I do not trust fenced hunting.”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                Fair. Ask carrying capacity, movement, selective harvest. Transparent ground. If we do not earn your trust, book where you already trust the fence line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senses */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <Ear className="mx-auto h-8 w-8 text-burnished-copper/80 md:mx-0" aria-hidden />
              <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">What cameras miss</h2>
              <p className="mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-white/70 md:mx-0 md:text-base">
                Woodsmoke in wool. Metal on the tongue when adrenaline hits. Thorns tugging your cuff like the bush asking if you are awake.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {SENSE_TILES.map((s) => (
                <figure key={s.seed} className="group overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                <div className="relative aspect-square w-full">
                  <Image
                    src={s.src}
                    alt={`${s.cap} sensory moment on the Vaalpenskraal estate`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="border-t border-white/[0.06] bg-white/[0.03] px-3 py-3 font-sans text-[10px] uppercase tracking-[0.12em] text-white/70 md:text-[11px]">
                  {s.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guides / media */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <figure className="relative order-2 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:order-1 lg:col-span-7">
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.guidesEncounter}
                  seed="expguideglass"
                  alt="Hunter and professional guide glassing in the bush at first light"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/65 md:px-6">
                Field encounter: estate hunt photography (replace if you want a dedicated glassing shot).
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <BookOpen className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Professionals</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Guides, writers, cameras</h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/70">
                PHs meet PHs: safety arcs, client headspace, when to kill a stalk. Craft respected. Egos stay at the gate with city dust.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/70">
                Press and crews get access without turning the veld into theatre. Stay honest to story and animal. Name format, crew count, dates so we can slot vehicles and quiet hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/reserve"
                  className="focus-ring-invert inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Plan a hunt
                  <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
                </Link>
                <Link
                  href="/contact?intent=media"
                  className="focus-ring-invert inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-sans text-sm font-medium text-white/85 transition-colors hover:border-white/35 hover:bg-white/[0.04]"
                >
                  <Camera className="h-4 w-4 opacity-70" aria-hidden />
                  Media enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative flex min-h-[min(72vh,820px)] items-center justify-center py-20 md:py-28">
        <div className="absolute inset-0">
          <ExperienceImg
            fill
            src={EXPERIENCE_IMAGES.closingBoma}
            seed="expclosingboma"
            alt="Evening boma firelight and camp silhouettes at Vaalpenskraal"
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/88 to-black/70" />
        </div>
        <div className="editorial-container relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.5rem]">The fire you imagined is already lit</h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/70 md:text-lg">
              Walk it once on iron soil. Then argue with the silence if you can.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/lodge"
                className="focus-ring-invert inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                See the lodge
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
              <Link
                href="/species"
                className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                Quarry species
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
              <Link
                href="/contact?intent=general"
                className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                Ask a question
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
