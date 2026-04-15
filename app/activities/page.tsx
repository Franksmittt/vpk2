import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Target, Binoculars, Waves, Flame, Mountain, Droplets } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import truth from "@/client-business-truth.json";

export const metadata: Metadata = {
  title: "Activities | Vaalpenskraal Game Reserve",
  description:
    "Clay pigeon shooting, game drives, swimming pool, canopy boma, outlook point, and waterhole viewing at Vaalpenskraal. Scheduling follows camp workload: confirm when you book.",
};

const schedulingNote = truth.onEstateActivities.scheduling;

/** Estate photography already in `public/images/` (no new venues implied). */
const MOSAIC_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/lodge/lodge-pool.jpg", alt: "Swimming pool at Vaalpenskraal camp" },
  { src: "/images/lodge/lodge-boma.jpg", alt: "Canopy boma area at Vaalpenskraal camp" },
  { src: "/images/lodge/lodge-outlook.jpg", alt: "Outlook point above the Vaalpenskraal bushveld" },
  { src: "/images/lodge/lodge-waterhole.jpg", alt: "Waterhole for passive game viewing at camp" },
  { src: "/images/lodge/brochure-game.jpg", alt: "Game viewing from a vehicle on the estate" },
  { src: "/images/lodge/spec-outdoor.jpg", alt: "Outdoor camp areas used for scheduled activities" },
  { src: "/images/lodge/lodge-evening.jpg", alt: "Evening light over the Vaalpenskraal lodge grounds" },
  { src: "/images/lodge/brochure-pano.jpg", alt: "Wide Waterberg view from the estate" },
  { src: "/images/experience/senses-dry-grass.png", alt: "Dry grass and bush texture on the estate" },
];

const CLAY_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/hero/wide-hunt-story.png", alt: "Open bushveld on the Vaalpenskraal estate" },
  { src: "/images/lodge/spec-outdoor.jpg", alt: "Outdoor space at camp between hunt sessions" },
  { src: "/images/lodge/lodge-overview.jpg", alt: "Overview of Vaalpenskraal camp buildings and bush" },
];

const DRIVE_IMAGES: { src: string; alt: string }[] = [
  { src: "/images/lodge/brochure-game.jpg", alt: "Game viewing from a vehicle on the estate" },
  { src: "/images/lodge/lodge-overview.jpg", alt: "Camp and bush from an elevated viewpoint" },
  { src: "/images/species/iron-mountain-quarry-hero.png", alt: "Waterberg thicket and open ground on the estate" },
  { src: "/images/lodge/brochure-pano.jpg", alt: "Panorama across the Waterberg from the estate" },
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
    src: "/images/lodge/lodge-outlook.jpg",
    alt: "Outlook point for viewing and sundowners at Vaalpenskraal",
  },
  "Waterhole for passive game viewing": {
    src: "/images/lodge/lodge-waterhole.jpg",
    alt: "Waterhole for passive game viewing at Vaalpenskraal",
  },
};

function MosaicTile({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.04]">
      <Image src={src} alt={alt} fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="activities-hero-title"
        scrollLinkedTypography
        eyebrow="On the estate"
        title="Camp life between stalks."
        subtitle="Pool, canopy boma, outlook point, waterhole, clay pigeon shooting, and game drives: the same facility and activity names we publish for Vaalpenskraal. Hunting stays the spine of the week; scheduling stays honest."
        imageSeed="activitieshero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section className="border-b border-white/[0.07] bg-[#050505] py-10 md:py-14">
        <div className="editorial-container-wide">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-3 lg:gap-4">
            {MOSAIC_IMAGES.map((img) => (
              <MosaicTile key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-[#050505] py-14 md:py-20">
        <div className="editorial-container max-w-3xl rounded-2xl border border-burnished-copper/25 bg-burnished-copper/[0.06] p-6 md:p-8">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-burnished-copper/90">Scheduling</p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-white/75 md:text-base">{schedulingNote}</p>
        </div>
      </section>

      {/* Clay pigeon: estate list item + general fieldcraft context (no trap layout claimed). */}
      <section className="border-b border-white/[0.07] py-16 md:py-24">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center gap-3">
            <Target className="h-9 w-9 text-burnished-copper/85" aria-hidden />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">On-estate activity</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">{truth.onEstateActivities.items[0]}</h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/70 md:text-base">
            {schedulingNote} Say you want clays in your first email so PH time, vehicles, and hunt blocks stay aligned.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="space-y-5 font-sans text-sm leading-relaxed text-white/70 md:text-base lg:col-span-6">
              <p>
                Clay pigeon work is straightforward in concept: a thrower sends a brittle disc across sky or
                ground edge, and you practice mounting the shotgun, picking up the line, and finishing the swing so
                shot and target still share the same future. Eye dominance, cast, and foot placement matter as much as
                speed. It is one of the fastest ways to shake off flight rust and prove safety habits before anyone
                steps into live thicket.
              </p>
              <p>
                At camp it is rarely about trophies. It is about rhythm: closing the gun safely, calling &quot;pull&quot; only
                when the lane is clear, respecting the next shooter in line, and letting the PH reset the drill when
                wind or fatigue shows up. Good sessions stay short, loud only in the right moments, and end with
                everyone still friends with their own shoulder.
              </p>
              <p>
                Vaalpenskraal lists {truth.onEstateActivities.items[0].toLowerCase()} on the published activity roster.
                We do not promise a fixed lane layout or daily trap time here on the web. What we promise is honesty: if
                the day belongs to stalking, meat, and rest, clays wait. If the day has a window and the right people on
                range, you get real throws and real feedback, not a brochure photo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-6 lg:grid-cols-1 xl:grid-cols-3">
              {CLAY_IMAGES.map((img) => (
                <MosaicTile key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game drives */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-16 md:py-24">
        <div className="editorial-container">
          <div className="flex flex-wrap items-center gap-3">
            <Binoculars className="h-9 w-9 text-burnished-copper/85" aria-hidden />
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">On-estate activity</p>
          </div>
          <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">{truth.onEstateActivities.items[1]}</h2>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-white/70 md:text-base">
            {schedulingNote} Game drives complement foot hunting: they are for orientation, rest days, guests who are
            not on a stalk, and quiet glassing when the estate plan allows vehicle use.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:col-span-7">
              {DRIVE_IMAGES.map((img) => (
                <MosaicTile key={img.src} src={img.src} alt={img.alt} />
              ))}
            </div>
            <div className="space-y-5 font-sans text-sm leading-relaxed text-white/70 md:text-base lg:col-span-5">
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
              <p>
                Again, the only hard rule we print in data is the same scheduling line: {schedulingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Camp facilities with imagery */}
      <section className="py-16 md:py-24">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Camp facilities</p>
          <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Pool, boma, outlook, water</h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Each block below pairs the facility title from our published brief with on-estate photography already used
            on the lodge pages.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {truth.campFacilities.map((title) => {
              const Icon = facilityIconByTitle[title] ?? Mountain;
              const shot = facilityImageByTitle[title];
              return (
                <article
                  key={title}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:border-burnished-copper/35"
                >
                  {shot ? (
                    <div className="relative aspect-[16/10] w-full border-b border-white/[0.06]">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 md:p-8">
                    <Icon className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                    <h3 className="mt-4 font-sans text-xl font-semibold leading-snug text-white/90">{title}</h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-white/68">
                      {title === "Swimming pool" &&
                        "Cool water between stalks and long meals. Depth and rules follow camp briefing on arrival."}
                      {title === "Canopy boma under trees" &&
                        "Fire, canopy cover, and the social heart next to Vark Kraal dining when the evening belongs to the group."}
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

      <section className="border-t border-white/[0.07] bg-[#070707] py-16 md:py-20">
        <div className="editorial-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl font-sans text-sm text-white/65">
            For dates, party size, and species, use the hunt enquiry flow on Book your hunt.
          </p>
          <Link
            href="/reserve#book-hunt"
            className="focus-ring-invert inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/90 md:px-8 md:py-4"
          >
            Book your hunt
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
