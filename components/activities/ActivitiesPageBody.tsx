import Image from "next/image";
import Link from "next/link";
import { Binoculars, Droplets, Flame, Mountain, Sunset, Target, Waves } from "lucide-react";
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
  { src: "/images/lodge/lodge-pool.jpg", alt: "Swimming pool at Vaalpenskraal camp" },
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

const facilityIconByTitle: Record<string, typeof Waves> = {
  "Swimming pool": Waves,
  "Canopy boma under trees": Flame,
  "Outlook point for viewing and sundowners": Mountain,
  "Waterhole for passive game viewing": Droplets,
};

const facilityImageByTitle: Record<string, { src: string; alt: string }> = {
  "Swimming pool": { src: "/images/lodge/lodge-pool.jpg", alt: "Swimming pool at Vaalpenskraal camp" },
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

      {/* Sundowners at outlook */}
      <section id="sundowners" className="scroll-mt-28 border-b border-white/[0.07] bg-[#060606] py-16 md:py-24 lg:scroll-mt-32">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center gap-3">
            <Sunset className="h-9 w-9 shrink-0 text-burnished-copper/85" aria-hidden />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">On-estate activity</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl md:text-[2.35rem]">
            {sundownerTitle}
          </h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/68 md:text-base">
            {schedulingNote} The published facility list names this stop as {outlookFacilityLabel}. It is the same ridgeline
            seat you will see on the lodge route, used here as a scheduled extra when the day has room for last light
            and wind you can read without rushing.
          </p>

          <div className="mt-10 max-w-3xl space-y-6 font-sans text-sm leading-relaxed text-white/72 md:mt-12 md:space-y-7 md:text-base">
            <p>
              Sundowners here are not a nightclub on gravel. The PH keeps glass disciplined, voices low, and movement
              predictable so breeding herds below the rim are not treated like a stage set. You get honest Waterberg
              colour, a safe place to set a drink when the estate allows it under the same catering line as the rest of
              camp, and a hard stop when the schedule says the ridge is done for the night.
            </p>
            <p>
              If you only need a quiet bench and binoculars without the ritual, the outlook still belongs to the same
              facility card in leisure. When we list {sundownerTitle.toLowerCase()} as its own roster line, we mean the
              hosted evening pass with the crew you already hunted beside that week.
            </p>
            <p className="border-l-2 border-burnished-copper/40 pl-5 text-white/68 md:pl-6">
              Scheduling stays blunt on purpose: {schedulingNote}
            </p>
          </div>

          <div
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-14 md:gap-4"
            aria-label="Outlook point photography on the estate"
          >
            {SUNDOWNER_TRIPTYCH.map((img) => (
              <EditorialImage key={img.src} src={img.src} alt={img.alt} className="aspect-[5/4] min-h-[200px]" />
            ))}
          </div>
        </div>
      </section>

      {/* Leisure on camp: truth-backed facilities plus photography (single block, no duplicate footer CTA) */}
      <section id="leisure" className="scroll-mt-28 border-b border-white/[0.07] bg-neutral-950 py-16 md:py-24 lg:scroll-mt-32">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/90">
            Leisure on camp
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(1.85rem,3.5vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-canvas-cream">
            Pool, boma, outlook, water
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 font-sans text-sm leading-relaxed text-white/70 md:text-base">
            <p>
              {truth.accommodation.model} We do not offer campground camping, tent pitches, or self-cater camping in the
              public campground sense. You sleep in chalets and use communal space at {truth.communalHub.name} for bar,
              kitchen, lounge, and dining.
            </p>
            <p>
              Leisure on the estate still means the swimming pool, canopy boma, outlook point for viewing and sundowners,
              and passive viewing at the waterhole. {schedulingNote}{" "}
              {formatEnglishList(truth.onEstateActivities.items)} sit in the sections above.
            </p>
          </div>
          <p className="mt-8 max-w-2xl font-sans text-xs leading-relaxed text-white/50 md:text-sm">
            Chalet layout, full board, and communal hub detail live on{" "}
            <Link href="/lodge" className="text-burnished-copper/90 underline decoration-burnished-copper/40 underline-offset-4 transition-colors hover:text-burnished-copper">
              The Lodge
            </Link>
            . Dates, party size, and species use{" "}
            <Link href="/reserve#book-hunt" className="text-burnished-copper/90 underline decoration-burnished-copper/40 underline-offset-4 transition-colors hover:text-burnished-copper">
              Book your hunt
            </Link>
            .
          </p>
          <p className="mt-10 max-w-2xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Each card pairs a facility title from our published list with on-estate photography already used on the lodge
            route.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {truth.campFacilities.map((title) => {
              const Icon = facilityIconByTitle[title] ?? Mountain;
              const shot = facilityImageByTitle[title];
              return (
                <article
                  key={title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a0a0a] transition-colors hover:border-burnished-copper/35 md:rounded-[1.35rem]"
                >
                  {shot ? (
                    <div className="relative aspect-[5/4] w-full border-b border-white/[0.06]">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <Icon className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                    <h3 className="mt-3 font-sans text-base font-semibold leading-snug text-white/92 md:text-lg">{title}</h3>
                    <p className="mt-2 flex-1 font-sans text-xs leading-relaxed text-white/65 md:text-sm">
                      {title === "Swimming pool" &&
                        "Cool water between stalks and long meals. Depth and rules follow camp briefing on arrival."}
                      {title === "Canopy boma under trees" &&
                        `Fire, canopy cover, and the social heart next to ${truth.communalHub.name} dining when the evening belongs to the group.`}
                      {title === "Outlook point for viewing and sundowners" &&
                        "Raised stop for glass, wind check, and last light without crowding the water itself."}
                      {title === "Waterhole for passive game viewing" &&
                        "Quiet bench discipline when animals choose the pan. No staged feeding: patience only."}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ActivitiesPageBody;
