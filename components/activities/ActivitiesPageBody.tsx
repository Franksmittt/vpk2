import Image from "next/image";
import Link from "next/link";
import { Binoculars, ChevronRight, Sunset, Target } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { ClayPigeonVideoGrid } from "@/components/activities/ClayPigeonVideoGrid";
import truth from "@/client-business-truth.json";
import { formatEnglishList } from "@/lib/format-english-list";
import { OUTLOOK_POINT_IMAGES } from "@/lib/outlook-media";

const schedulingNote = truth.onEstateActivities.scheduling;
const clayTitle = truth.onEstateActivities.items[0]!;
const driveTitle = truth.onEstateActivities.items[1]!;
const sundownerTitle = truth.onEstateActivities.items[2]!;
const clayActivityLower = clayTitle.toLowerCase();
const outlookFacilityLabel = truth.campFacilities[2]!;

const HERO_STRIP: { src: string; alt: string }[] = [
  {
    src: "/images/activities/activities-pool-hero.jpg",
    alt: "Swimming pool and lodge chalets at Vaalpenskraal camp",
  },
  { src: OUTLOOK_POINT_IMAGES.am952, alt: "Outlook point above the Vaalpenskraal bushveld" },
  { src: "/images/lodge/lodge-waterhole.jpg", alt: "Waterhole for passive game viewing at camp" },
];

const CLAY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/hero/wide-hunt-story.png", alt: "Open bushveld on the Vaalpenskraal estate" },
  { src: "/images/lodge/spec-outdoor.jpg", alt: "Outdoor space at camp between hunt sessions" },
  { src: "/images/lodge/lodge-overview.jpg", alt: "Overview of Vaalpenskraal camp buildings and bush" },
];

const DRIVE_HERO = {
  src: "/images/lodge/brochure-game.jpg",
  alt: "Game viewing from a vehicle on the estate",
} as const;

const DRIVE_STACK: { src: string; alt: string }[] = [
  { src: "/images/lodge/lodge-overview.jpg", alt: "Camp and bush from an elevated viewpoint" },
  { src: "/images/species/iron-mountain-quarry-hero.png", alt: "Waterberg thicket and open ground on the estate" },
];

/** Filmstrip under drive copy: camp context, vehicle glassing, thicket (not a sidebar column). */
const DRIVE_TRIPTYCH: readonly { src: string; alt: string }[] = [DRIVE_STACK[0]!, DRIVE_HERO, DRIVE_STACK[1]!];

const SUNDOWNER_TRIPTYCH: readonly { src: string; alt: string }[] = [
  { src: OUTLOOK_POINT_IMAGES.am949, alt: "Outlook point ridgeline above Vaalpenskraal bushveld" },
  { src: OUTLOOK_POINT_IMAGES.am946, alt: "Outlook point for viewing and last light at Vaalpenskraal" },
  { src: OUTLOOK_POINT_IMAGES.am952, alt: "Wide outlook over Iron Mountain country at sundowner hour" },
];

const SUNDOWNER_QUARRY_ROWS = [
  {
    code: "01",
    nickname: "The ridgeline seat",
    title: "Outlook point",
    blurb: `${schedulingNote} The published facility list names this stop as ${outlookFacilityLabel}. It is the same ridgeline seat you will see on the lodge route, used here as a scheduled extra when the day has room for last light and wind you can read without rushing.`,
    image: SUNDOWNER_TRIPTYCH[0]!,
    href: "/lodge" as const,
  },
  {
    code: "02",
    nickname: "Field discipline",
    title: "Sundowners on camp",
    blurb:
      "Sundowners here are not a nightclub on gravel. The PH keeps glass disciplined, voices low, and movement predictable so breeding herds below the rim are not treated like a stage set. You get honest Waterberg colour, a safe place to set a drink when the estate allows it under the same catering line as the rest of camp, and a hard stop when the schedule says the ridge is done for the night.",
    image: SUNDOWNER_TRIPTYCH[1]!,
    href: "#leisure" as const,
  },
  {
    code: "03",
    nickname: "Hosted pass",
    title: "The same crew",
    blurb: `If you only need a quiet bench and binoculars without the ritual, the outlook still belongs to the same facility card in leisure. When we list ${sundownerTitle.toLowerCase()} as its own roster line, we mean the hosted evening pass with the crew you already hunted beside that week. Scheduling stays blunt on purpose: ${schedulingNote}`,
    image: SUNDOWNER_TRIPTYCH[2]!,
    href: "/reserve#book-hunt" as const,
  },
];

const facilityImageByTitle: Record<string, { src: string; alt: string }> = {
  "Swimming pool": {
    src: "/images/activities/activities-pool-hero.jpg",
    alt: "Swimming pool and lodge chalets at Vaalpenskraal camp",
  },
  "Canopy boma under trees": { src: "/images/lodge/lodge-boma.jpg", alt: "Canopy boma under trees at Vaalpenskraal" },
  "Outlook point for viewing and sundowners": {
    src: OUTLOOK_POINT_IMAGES.am946,
    alt: "Outlook point for viewing and sundowners at Vaalpenskraal",
  },
  "Waterhole for passive game viewing": {
    src: "/images/lodge/lodge-waterhole.jpg",
    alt: "Waterhole for passive game viewing at Vaalpenskraal",
  },
};

const LEISURE_QUARRY_TOTAL = String(truth.campFacilities.length).padStart(2, "0");

const LEISURE_FACILITY_NICKNAME: Record<string, string> = {
  "Swimming pool": "Between stalks",
  "Canopy boma under trees": "Fire ring nights",
  "Outlook point for viewing and sundowners": "Glass and rim",
  "Waterhole for passive game viewing": "Still water watch",
};

const LEISURE_FACILITY_BLURB: Record<string, string> = {
  "Swimming pool":
    "Cool water between stalks and long meals. Depth and rules follow camp briefing on arrival.",
  "Canopy boma under trees": `Fire, canopy cover, and the social heart next to ${truth.communalHub.name} dining when the evening belongs to the group.`,
  "Outlook point for viewing and sundowners":
    "Raised stop for glass, wind check, and last light without crowding the water itself.",
  "Waterhole for passive game viewing":
    "Quiet bench discipline when animals choose the pan. No staged feeding: patience only.",
};

const LEISURE_QUARRY_ROWS = truth.campFacilities.map((title, index) => {
  const image = facilityImageByTitle[title];
  if (!image) {
    throw new Error(`Missing facility image for leisure row: ${title}`);
  }
  return {
    code: String(index + 1).padStart(2, "0"),
    nickname: LEISURE_FACILITY_NICKNAME[title] ?? "On camp",
    title,
    blurb: LEISURE_FACILITY_BLURB[title] ?? "",
    image,
    href: title === "Outlook point for viewing and sundowners" ? "#sundowners" : "/lodge",
  };
});

function EditorialImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-neutral-950 ring-1 ring-white/[0.04] sm:rounded-[1.35rem] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

const jumpLinkClass =
  "focus-ring-invert rounded-full border border-white/20 bg-white/[0.04] px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors hover:border-burnished-copper/45 hover:bg-white/[0.07]";

const ActivitiesPageBody = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="activities-hero-title"
        scrollLinkedTypography
        eyebrow="On the estate"
        title="Between stalks, the hunting camp still breathes."
        subtitle="Guest chalets on camp, not campground camping. Clay pigeon shooting, game drives, sundowners at the outlook point, pool, canopy boma, outlook point, and waterhole sit on the same published roster as the lodge. Hunting stays the spine of the week. Scheduling follows camp workload: confirm when you book."
        imageSeed="activitieshero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      {/* Estate overview: split rail + scheduling + hero strip */}
      <section className="section-y border-b border-white/[0.06] bg-gradient-to-b from-espresso via-neutral-950 to-black">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-7 lg:border-r lg:border-white/[0.08] lg:pr-12">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/90">
                Hunting camp layout
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-canvas-cream">
                Pool, boma, outlook, water, and three scheduled extras.
              </h2>
              <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-white/68 md:text-base">
                {truth.accommodation.model} {formatEnglishList(truth.onEstateActivities.items)} use the same scheduling
                rule as everything else on this page. Names match our published brief, including the lodge route.
              </p>
            </div>
            <aside className="rounded-2xl border border-burnished-copper/30 bg-burnished-copper/[0.07] p-6 md:p-8 lg:col-span-5">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-burnished-copper/95">
                Scheduling
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/80 md:text-base">{schedulingNote}</p>
              <p className="mt-4 font-sans text-xs leading-relaxed text-white/55">
                Say clays, drives, or outlook sundowners in your first email so PH time, vehicles, and hunt blocks stay
                aligned.
              </p>
            </aside>
          </div>

          <nav
            className="mt-10 flex flex-wrap gap-2 border-t border-white/[0.08] pt-10 md:mt-14 md:gap-3 md:pt-12"
            aria-label="Jump to activity sections"
          >
            <a href="#clays" className={jumpLinkClass}>
              {clayTitle}
            </a>
            <a href="#drives" className={jumpLinkClass}>
              {driveTitle}
            </a>
            <a href="#sundowners" className={jumpLinkClass}>
              {sundownerTitle}
            </a>
            <a href="#leisure" className={jumpLinkClass}>
              Leisure on camp
            </a>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
            {HERO_STRIP.map((img) => (
              <EditorialImage key={img.src} src={img.src} alt={img.alt} className="aspect-[5/4] min-h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Clay pigeon */}
      <section id="clays" className="scroll-mt-28 border-b border-white/[0.07] bg-[#060606] py-16 md:py-24 lg:scroll-mt-32">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center gap-3">
            <Target className="h-9 w-9 shrink-0 text-burnished-copper/85" aria-hidden />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">On-estate activity</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl md:text-[2.35rem]">
            {clayTitle}
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/68 md:text-base">
            {schedulingNote} Mention clays when you first write so we can line up PH time, vehicles, and hunt blocks.
          </p>

          <div className="mt-10 rounded-[1.25rem] border border-white/[0.1] bg-white/[0.02] p-4 ring-1 ring-white/[0.04] sm:rounded-[1.5rem] sm:p-5 md:mt-12">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">On the line</p>
            <p className="mt-2 max-w-2xl font-sans text-xs leading-relaxed text-white/55 md:text-sm">
              Three short clips from clay sessions. Thumbnails open a larger view. Playback stays muted on this page.
            </p>
            <div className="mt-4">
              <ClayPigeonVideoGrid />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
            {[
              {
                img: CLAY_IMAGES[0],
                body: "Clay pigeon work is straightforward in concept. A thrower sends a brittle disc across sky or ground edge, and you practice mounting the shotgun, picking up the line, and finishing the swing so shot and target still share the same future. Eye dominance, cast, and foot placement matter as much as speed. It is one of the fastest ways to shake off flight rust and prove safety habits before anyone steps into live thicket.",
              },
              {
                img: CLAY_IMAGES[1],
                body: "At camp it is rarely about trophies. It is about rhythm, closing the gun safely, calling \"pull\" only when the lane is clear, respecting the next shooter in line, and letting the PH reset the drill when wind or fatigue shows up. Good sessions stay short, loud only in the right moments, and end with everyone still friends with their own shoulder.",
              },
              {
                img: CLAY_IMAGES[2],
                body: `Vaalpenskraal lists ${clayActivityLower} on the published activity roster. We do not promise a fixed lane layout or daily trap time here on the web. What we promise is honesty. If the day belongs to stalking, meat, and rest, clays wait. If the day has a window and the right people on range, you get real throws and real feedback, not a brochure photo.`,
              },
            ].map((col) => (
              <article
                key={col.img.src}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.04] to-transparent p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:rounded-3xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:rounded-2xl">
                  <Image src={col.img.src} alt={col.img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <p className="px-4 py-5 font-sans text-sm leading-relaxed text-white/72 md:px-5 md:py-6 md:text-[0.9375rem]">
                  {col.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Game drives */}
      <section id="drives" className="scroll-mt-28 border-b border-white/[0.07] bg-black py-16 md:py-24 lg:scroll-mt-32">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center gap-3">
            <Binoculars className="h-9 w-9 shrink-0 text-burnished-copper/85" aria-hidden />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">On-estate activity</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl md:text-[2.35rem]">
            {driveTitle}
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/68 md:text-base">
            {schedulingNote} Drives complement foot hunting: orientation, rest days, guests not on a stalk, and quiet
            glassing when the estate plan allows vehicle use.
          </p>

          <div className="mt-10 max-w-3xl space-y-6 font-sans text-sm leading-relaxed text-white/72 md:mt-12 md:space-y-7 md:text-base">
            <p>
              A drive here is not a theme-park loop. It is slow tyres on estate roads, windows down when dust allows,
              and time to read body language on animals that already know engine notes. The PH sets pace, distance,
              and silence so breeding herds do not get treated like a zoo timetable.
            </p>
            <p>
              Non-hunters often get their best colour on a drive: light on the grass, kudu stepping out as if the bush
              had been holding its breath, and the honest limit of what a lens can take without stressing animals.
              Hunters use the same seat on a rest half-day to study routes they will later walk with a rifle.
            </p>
            <p className="border-l-2 border-burnished-copper/40 pl-5 text-white/68 md:pl-6">
              Again, the only hard rule we print in data is the same scheduling line: {schedulingNote}
            </p>
          </div>

          <div
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-14 md:gap-4"
            aria-label="Game drive views on the estate"
          >
            {DRIVE_TRIPTYCH.map((img) => (
              <EditorialImage key={img.src} src={img.src} alt={img.alt} className="aspect-[5/4] min-h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Sundowners: same zigzag rail as home "The quarry" (species strip) */}
      <section id="sundowners" className="scroll-mt-28 border-b border-white/[0.07] bg-[#050505] text-white lg:scroll-mt-32">
        <div className="editorial-container pb-16 pt-16 md:pb-20 md:pt-24 lg:pt-28">
          <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="min-w-0 max-w-2xl">
              <p className="mb-4 flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">
                <Sunset className="h-5 w-5 shrink-0 text-burnished-copper/85" aria-hidden />
                On-estate activity
              </p>
              <h2 className="font-sans text-[2.5rem] font-light leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-[2.75rem]">
                <span className="text-white/90">Sundowners at the</span>{" "}
                <span className="font-semibold text-white">outlook point</span>
                <span className="text-white/50">.</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
                Same ridgeline seat as the lodge route, same scheduling honesty as every other on-estate extra. PH-led
                glass, low voices, and last light that does not borrow drama from the bush below.
              </p>
            </div>
            <Link
              href="/lodge"
              className="focus-ring-invert inline-flex w-full min-w-0 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-8 sm:py-4 lg:w-auto lg:self-auto"
            >
              The Lodge
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          {SUNDOWNER_QUARRY_ROWS.map((row, i) => (
            <Link
              key={row.code}
              href={row.href}
              className="focus-ring-invert group grid grid-cols-1 items-stretch border-b border-white/[0.07] transition-colors hover:bg-white/[0.02] md:grid-cols-2 lg:grid-cols-12"
            >
              <div
                className={`relative h-full min-h-[200px] w-full shrink-0 overflow-hidden bg-neutral-950 ring-1 ring-inset ring-white/[0.06] sm:min-h-[220px] md:min-h-[240px] lg:col-span-7 ${
                  i % 2 === 1 ? "md:order-2 lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]">
                  <Image
                    src={row.image.src}
                    alt={row.image.alt}
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

              <div
                className={`flex flex-col justify-center px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:col-span-5 ${
                  i % 2 === 1 ? "md:order-1 lg:order-1" : ""
                }`}
              >
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-burnished-copper/85">
                  {row.nickname}
                </p>
                <h3 className="mt-4 font-sans text-2xl font-semibold tracking-[-0.035em] text-white/95 sm:text-3xl md:text-[2rem]">
                  {row.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/70 md:mt-5 md:text-base">
                  {row.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-white/70 transition-colors group-hover:text-white md:mt-8">
                  Explore
                  <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Leisure on camp: same quarry rail as sundowners (zigzag, stretch, Explore) */}
      <section id="leisure" className="scroll-mt-28 border-b border-white/[0.07] bg-[#050505] text-white lg:scroll-mt-32">
        <div className="editorial-container pb-16 pt-16 md:pb-20 md:pt-24 lg:pt-28">
          <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="min-w-0 max-w-2xl">
              <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">
                Leisure on camp
              </p>
              <h2 className="font-sans text-[2.5rem] font-light leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-[2.75rem]">
                <span className="text-white/90">Pool, boma,</span>{" "}
                <span className="font-semibold text-white">outlook, water</span>
                <span className="text-white/50">.</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
                {truth.accommodation.model} We do not offer campground camping, tent pitches, or self-cater camping in the
                public campground sense. You sleep in chalets and use communal space at {truth.communalHub.name} for bar,
                kitchen, lounge, and dining.
              </p>
              <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
                Leisure on the estate still means the swimming pool, canopy boma, outlook point for viewing and sundowners,
                and passive viewing at the waterhole. {schedulingNote}{" "}
                {formatEnglishList(truth.onEstateActivities.items)} sit in the sections above.
              </p>
              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/55 md:text-base">
                Each row below pairs a published facility title with on-estate photography already used on the lodge route.
              </p>
            </div>
            <div className="flex min-w-0 w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:w-auto lg:justify-end">
              <Link
                href="/lodge"
                className="focus-ring-invert inline-flex w-full min-w-0 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
              >
                The Lodge
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
              <Link
                href="/reserve#book-hunt"
                className="focus-ring-invert inline-flex w-full min-w-0 shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-center font-sans text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.06] sm:w-auto sm:px-8 sm:py-4"
              >
                Book your hunt
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          {LEISURE_QUARRY_ROWS.map((row, i) => (
            <Link
              key={row.title}
              href={row.href}
              className="focus-ring-invert group grid grid-cols-1 items-stretch border-b border-white/[0.07] transition-colors hover:bg-white/[0.02] md:grid-cols-2 lg:grid-cols-12"
            >
              <div
                className={`relative h-full min-h-[200px] w-full shrink-0 overflow-hidden bg-neutral-950 ring-1 ring-inset ring-white/[0.06] sm:min-h-[220px] md:min-h-[240px] lg:col-span-7 ${
                  i % 2 === 1 ? "md:order-2 lg:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]">
                  <Image
                    src={row.image.src}
                    alt={row.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/15 to-transparent md:from-black/50" />
                <span className="absolute left-4 top-4 font-sans text-[11px] font-medium tabular-nums tracking-[0.25em] text-white/70 md:left-5 md:top-5">
                  {row.code} / {LEISURE_QUARRY_TOTAL}
                </span>
              </div>

              <div
                className={`flex flex-col justify-center px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:col-span-5 ${
                  i % 2 === 1 ? "md:order-1 lg:order-1" : ""
                }`}
              >
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-burnished-copper/85">
                  {row.nickname}
                </p>
                <h3 className="mt-4 font-sans text-xl font-semibold tracking-[-0.035em] text-white/95 sm:text-2xl md:text-[1.65rem]">
                  {row.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/70 md:mt-5 md:text-base">
                  {row.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-white/70 transition-colors group-hover:text-white md:mt-8">
                  Explore
                  <ChevronRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ActivitiesPageBody;
