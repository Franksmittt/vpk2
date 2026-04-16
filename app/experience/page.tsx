import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Binoculars,
  ChevronRight,
  Clock,
  Ear,
  Flame,
  Globe2,
  Home,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { EXPERIENCE_IMAGES } from "@/lib/experience-media";
import truth from "@/client-business-truth.json";

export const metadata: Metadata = {
  title: "The Experience | Vaalpenskraal Game Reserve",
  description:
    "Dawn on the Iron Mountain. Thicket, wind, and honest fieldcraft. First light on the escarpment, camp rhythm at Vark Kraal, and the straight talk you need before you book.",
};

const meatLines = truth.fieldAndLogistics.meatAndHides as readonly string[];
const p3Line = truth.complianceAndTrust.p3ExemptionPermit;
const communalName = truth.communalHub.name;
const communalRole = truth.communalHub.role;
const chaletCount = truth.accommodation.chalets.length;
const campCapacity = truth.accommodation.campWideCapacityApprox;

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

const STALK_BEATS = [
  {
    time: "04:30",
    title: "The prep",
    paragraphs: [
      "Pre-dawn coffee and rifle checks at Vark Kraal. Blade-cold air, wet finger to wind, city noise gone.",
      "Magazines, slings, and small kit get settled without theatre. The arguments you end now stay out of the thicket later.",
      "The PH sketches the day in three lines: wind, heat, what we will refuse to chase. You nod because you want the same blunt honesty you will demand at the shot.",
    ],
    src: EXPERIENCE_IMAGES.stalk.prep,
    seed: "expstalkprep",
    alt: "Vaalpenskraal camp kitchen and early-morning prep before a stalk",
  },
  {
    time: "06:00",
    title: "The thicket",
    paragraphs: [
      "Wind discipline, silent boots, crushed bushveld herbs in mixed terrain. The Waterberg asks you to listen before you move.",
      "Sound carries in thorn corridors. One lazy sleeve or a boot placed wrong can cost thirty metres you do not have.",
      "You start reading negative space: a gap in shadow that might be ribs, or might be nothing worth a trigger. Either answer is information.",
    ],
    src: EXPERIENCE_IMAGES.stalk.thicket,
    seed: "expstalkthicket",
    alt: "Thick Waterberg bush on the estate with hunters at a distance",
  },
  {
    time: "09:15",
    title: "The pause",
    paragraphs: [
      "That heartbeat stillness before the shot. No theatre. Just you, glass, and the line the PH will not let you lie to.",
      "Time stretches wrong. Your mouth goes dry. The ring on the optic feels hotter than it should.",
      "If the honest call is to swallow pride and back out, the best PHs say it plain. That refusal is part of the shot, not a footnote.",
    ],
    src: EXPERIENCE_IMAGES.stalk.pause,
    seed: "expstalkpause",
    alt: "Hunter and PH glassing in the bush at first light on the estate",
  },
  {
    time: "11:30",
    title: "The weight",
    paragraphs: [
      "Recovery, skinning, and the heavy truth of the carcass. On camp we run professional slaughtering, salting of hides, carcass weighing, and a cold room for meat and perishables.",
      "Hands tire in ways office work never taught. Blood under nails is not romance. It is consequence you signed for when you squeezed.",
      "Then cold chain takes over. The estate owes the animal a clean thread from field to cold room, and the crew treats that like craft, not hurry.",
    ],
    src: EXPERIENCE_IMAGES.stalk.weight,
    seed: "expstalkweight",
    alt: "Outdoor camp and field areas used between hunt sessions at Vaalpenskraal",
  },
  {
    time: "18:00",
    title: "The fire",
    paragraphs: [
      "Sundowners at the elevated outlook, then boma embers and braai smoke under the canopy. The day lands where words get honest.",
      "Plates land when they land. Someone tells a story that would sound thin in a city lounge but carries here because everyone is tired enough to listen.",
      "You sleep with smoke in your hair and a week that already feels longer than the calendar says. That is the bush doing its quiet accounting.",
    ],
    src: EXPERIENCE_IMAGES.stalk.fire,
    seed: "expstalkfire",
    alt: "Outlook over the Vaalpenskraal bushveld at last light before boma evening",
  },
] as const;

const SENSE_HUD_TILES = [
  {
    key: "sight",
    label: "Sight",
    cap: "Golden hour on horns and red soil",
    src: "/images/lodge/brochure-game.jpg",
    alt: "Game viewing light on the Vaalpenskraal estate",
  },
  {
    key: "sound",
    label: "Sound",
    cap: "Francolin alarm, warthog grunt, silence, then a twig",
    src: "/images/lodge/lodge-waterhole.jpg",
    alt: "Waterhole edge at Vaalpenskraal for quiet bush soundscape",
  },
  {
    key: "smell",
    label: "Smell",
    cap: "Dust after rain, acacia smoke, warm hide",
    src: "/images/experience/senses-boma-embers.png",
    alt: "Boma embers sensory moment on the Vaalpenskraal estate",
  },
  {
    key: "touch",
    label: "Touch",
    cap: "Stock warm from sun, sweat on your back, evening chill",
    src: "/images/experience/senses-dry-grass.png",
    alt: "Dry grass against legs on the Vaalpenskraal estate",
  },
  {
    key: "taste",
    label: "Taste",
    cap: "Cold beer after a stalk, kudu backstrap off the coals",
    src: "/images/lodge/brochure-food.jpg",
    alt: "Camp catering and meal spread at Vaalpenskraal",
  },
  {
    key: "sky",
    label: "Sky",
    cap: "Night sky pressed close over camp",
    src: "/images/experience/senses-night-sky.png",
    alt: "Night sky over the Vaalpenskraal camp",
  },
  {
    key: "petrichor",
    label: "Petrichor",
    cap: "Iron soil breathing after rain",
    src: "/images/experience/senses-petrichor.png",
    alt: "Petrichor and storm air over the Waterberg estate",
  },
  {
    key: "ember",
    label: "Ember",
    cap: "Coals and wool after the boma",
    src: "/images/lodge/brochure-night.jpg",
    alt: "Evening camp light at Vaalpenskraal",
  },
] as const;

const ZIGZAG_ROWS = [
  {
    key: "encounter",
    title: "Field stills, not catalogue poses",
    paragraphs: [
      "Real hunters, real dust, real wait. We reserve the right to refuse staged stress on animals or crowd noise in a stalk. The veld is not a rental studio.",
      "Bring a small crew if you must, but noise and distance still answer to ethics first. The archive we care about is memory, not click rate.",
      "When light is wrong, we wait. When wind lies, we reposition. The shutter can wait too. The animal never signed up to be a prop.",
    ],
    src: EXPERIENCE_IMAGES.zigzag.encounter,
    seed: "expzzencounter",
    alt: "Hunter and guide glassing during a stalk on the Vaalpenskraal estate",
  },
  {
    key: "waterhole",
    title: "Waterhole at dusk",
    paragraphs: [
      "Passive viewing, low impact. Game comes on its own clock. You learn patience without a scope in your face.",
      "Zebras strip the margin. Nyala step like they owe money. Sometimes nothing shows and the seat still earns its sweat.",
      "Binoculars, hat, sun cream again. The discipline is boredom handled well, because the one animal you miss always drank while you checked your phone.",
    ],
    src: EXPERIENCE_IMAGES.zigzag.waterhole,
    seed: "expzzwater",
    alt: "Waterhole for passive game viewing at Vaalpenskraal camp",
  },
  {
    key: "boma",
    title: "Boma under the canopy",
    paragraphs: [
      "Evening fire, communal tables, honest fatigue. Fully catered on camp at Vark Kraal so you are not hunting calories on the side.",
      "Someone passes a bowl that took real care. Someone else tells a joke that only lands because everyone is tired enough to be kind.",
      "Kids get shorter answers about horn and death, age-appropriate, blunt. Adults get the same honesty, just with bigger words and no performance.",
    ],
    src: EXPERIENCE_IMAGES.zigzag.boma,
    seed: "expzzboma",
    alt: "Canopy boma fire and evening gathering at Vaalpenskraal",
  },
  {
    key: "catering",
    title: "Kitchen rhythm",
    paragraphs: [
      "Snacks, lunch, supper. Gas stove and electric oven when the schedule needs real cooking, not props.",
      "Soft drinks and alcohol sit inside the estate's fully catered lane under responsible service, not a metered raid on your wallet at midnight.",
      "If you have dietary edges or faith edges around meat, say so in your first mail so the week can be planned without surprises at the table.",
    ],
    src: EXPERIENCE_IMAGES.zigzag.catering,
    seed: "expzzfood",
    alt: "Camp kitchen and meal service at Vaalpenskraal",
  },
] as const;

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="experience-hero-title"
        scrollLinkedTypography
        eyebrow="The Waterberg thicket"
        title="This is not a brochure hunt."
        subtitle="Thick bush, wind in your face, heart in your throat. The honest satisfaction of a clean, ethical shot after hours of real fieldcraft. First light on the escarpment, mist in the valleys, a PH on glass on the ridge. No waxy brochure gloss, just grit you can stand in."
        imageSeed="experiencehero"
        imageSrc={EXPERIENCE_IMAGES.hero}
        heroActions={
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
            <Link
              href="/reserve#book-hunt"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
            >
              Live the experience, book your hunt
              <ChevronRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
            </Link>
            <Link
              href="/species"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 py-3.5 text-center font-sans text-sm font-medium text-white/85 transition-colors hover:text-white sm:w-auto sm:px-2 sm:py-4"
            >
              <span className="hero-readable-ghost">See the species</span>
              <ChevronRight className="hero-readable-ui h-4 w-4 shrink-0 opacity-70" aria-hidden />
            </Link>
          </div>
        }
      />

      {/* 2. Through your eyes (the stalk) */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="max-w-3xl [perspective:1400px]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">The stalk</p>
              <h2 className="vp-scroll-reveal-type mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
                Through your eyes
            </h2>
            <p className="vp-scroll-root-line mt-5 font-sans text-base leading-relaxed text-white/70 md:text-lg">
              A step-by-daybreak timeline. Same editorial container and spacing as the rest of the site, with one beat per row so nothing feels like a template dump.
            </p>
          </div>

          <div className="mt-14 space-y-14 md:mt-16 md:space-y-16 lg:space-y-20">
            {STALK_BEATS.map((b, i) => (
              <article
                key={b.time}
                className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/[0.08] ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <ExperienceImg
                    fill
                    src={b.src}
                    seed={b.seed}
                    alt={b.alt}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" aria-hidden />
                </div>
                <div className={`min-w-0 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-burnished-copper/90 md:text-sm">
                    {b.time}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-semibold tracking-tight text-white/95 md:text-2xl">
                    {b.title}
                  </h3>
                  <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">
                    {b.paragraphs.map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Senses grid (HUD) */}
      <section className="border-b border-white/[0.07] bg-[#070707] py-20 md:py-28">
        <div className="editorial-container">
          <div className="max-w-2xl">
            <Ear className="h-8 w-8 text-burnished-copper/80" aria-hidden />
            <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl md:text-[2rem]">
              Senses grid
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-white/70 md:text-base">
              Compact HUD tiles. Local photography and experience PNGs. Hover lifts the frame slightly, no springy motion.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-4">
            {SENSE_HUD_TILES.map((s) => (
              <figure
                key={s.key}
                className="group overflow-hidden rounded-xl border border-white/[0.1] bg-black/50 ring-1 ring-white/[0.06]"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-0.5 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute left-2 top-2 rounded border border-white/15 bg-black/55 px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm md:left-2.5 md:top-2.5 md:text-[10px]">
                    {s.label}
                  </div>
                </div>
                <figcaption className="border-t border-white/[0.08] bg-black/60 px-2.5 py-2.5 font-sans text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-white/75 md:px-3 md:py-3 md:text-[11px] md:tracking-[0.14em]">
                  {s.cap}
                </figcaption>
              </figure>
              ))}
          </div>
        </div>
      </section>

      {/* 4. Straight talk */}
      <section className="border-b border-white/[0.07] bg-espresso py-20 text-canvas-cream md:py-28">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-canvas-cream/70">Straight talk</p>
          <h2 className="mt-3 max-w-3xl font-sans text-3xl font-semibold tracking-tight text-canvas-cream sm:text-4xl">
            No brochure bullshit
          </h2>
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-canvas-cream/85 md:text-lg">
            We do not bait. This is real terrain. Some days you come back empty. Some days you earn a hard-won trophy. Fair chase and ethical harvest sit above feed-scroll bravado.
          </p>
          <p className="mt-5 max-w-3xl font-sans text-base leading-relaxed text-canvas-cream/80 md:text-lg">
            {truth.huntingServices.quarryPolicy} {truth.huntingServices.primary}.
          </p>

          <div className="mt-12 rounded-2xl border border-canvas-cream/15 bg-black/25 p-6 md:p-8">
            <Flame className="h-7 w-7 text-burnished-copper/90" aria-hidden />
            <h3 className="mt-4 font-sans text-lg font-semibold text-canvas-cream">On-site meat and hides</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 font-sans text-sm leading-relaxed text-canvas-cream/80 md:text-base">
              {meatLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-6 font-sans text-sm leading-relaxed text-canvas-cream/75 md:text-base">
              {truth.complianceAndTrust.taxidermyAndExport}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-canvas-cream/12 bg-black/20 p-6 md:p-7">
              <Binoculars className="h-7 w-7 text-burnished-copper/85" aria-hidden />
              <h3 className="mt-4 font-sans text-base font-semibold text-canvas-cream">Fence questions</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-canvas-cream/78">
                Ask carrying capacity, movement, selective harvest. Transparent ground. If we do not earn your trust, book where you already trust the fence line.
              </p>
            </div>
            <div className="rounded-2xl border border-canvas-cream/12 bg-black/20 p-6 md:p-7">
              <Globe2 className="h-7 w-7 text-burnished-copper/85" aria-hidden />
              <h3 className="mt-4 font-sans text-base font-semibold text-canvas-cream">Paperwork stays yours</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-canvas-cream/78">
                {truth.fieldAndLogistics.firearmImport}. Trophy export and dip-and-pack sit with your agents, not our desk.
              </p>
            </div>
            <div className="rounded-2xl border border-canvas-cream/12 bg-black/20 p-6 md:p-7">
              <Users className="h-7 w-7 text-burnished-copper/85" aria-hidden />
              <h3 className="mt-4 font-sans text-base font-semibold text-canvas-cream">Who walks with you</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-canvas-cream/78">
                PH-led field days. {truth.complianceAndTrust.security}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Camp rhythm & audience */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Camp rhythm</p>
          <h2 className="vp-scroll-reveal-type mt-3 max-w-3xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            Four kraals. One communal pulse.
          </h2>
          <p className="vp-scroll-root-line mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            {truth.accommodation.model} {communalName}: {communalRole}. {campCapacity} when the camp is full.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.chalets}
                  seed="expcampchalets"
                  alt="Placeholder image slot for guest chalets on camp at Vaalpenskraal"
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <Home className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  {chaletCount} guest chalets
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  Named kraals on camp only. {truth.accommodation.bedding}. {truth.accommodation.climateControl}.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.communalHub}
                  seed="expcampvark"
                  alt={`Placeholder image slot for ${communalName} communal hub and catering`}
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <UtensilsCrossed className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  {communalName}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  {truth.catering.board}. {truth.catering.includes.slice(0, 3).join(", ")}, and more on responsible service.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.pace}
                  seed="expcamppace"
                  alt="Unhurried camp pace and optional clay or game drives at Vaalpenskraal"
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <Clock className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  Unhurried pace
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  {truth.onEstateActivities.scheduling} Clay and game drives when the week allows. Say what you need in your first mail.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.solo}
                  seed="expcampsolo"
                  alt="Solo hunter and PH-led technical stalks on the Vaalpenskraal estate"
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <Binoculars className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  Solo rifleman
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  Technical stalks, wind maths, thicket IQ. The PH shortens the curve without turning the veld into an audition.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.family}
                  seed="expcampfamily"
                  alt="Fathers and sons and family rhythm at Vaalpenskraal camp"
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <Users className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  Fathers and sons
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  Shared discomfort on the walk, shared laughter at coals. Non-hunters still get the same light clock and honest safety lines.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden border-b border-white/[0.06] bg-black/50">
                <ExperienceImg
                  fill
                  src={EXPERIENCE_IMAGES.campRhythm.international}
                  seed="expcampglobal"
                  alt="International hunters and travel context for Vaalpenskraal"
                  className="object-cover"
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" aria-hidden />
              </div>
              <div className="p-5 md:p-6">
                <Globe2 className="h-6 w-6 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                  International hunters
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                  {truth.geography.travelNote} Import, export, and temp rifle stay with your stack or outfitter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Zigzag gallery */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Honest media</p>
          <h2 className="vp-scroll-reveal-type mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
            Zigzag through the week
          </h2>
          <p className="vp-scroll-root-line mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            A raw pass: encounter stills, waterhole dusk, boma canopy, kitchen rhythm. Tasteful, not polished into fiction.
          </p>

          <div className="mt-14 space-y-16 md:mt-16 md:space-y-20 lg:space-y-24">
            {ZIGZAG_ROWS.map((row, i) => (
              <div
                key={row.key}
                className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16"
              >
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/[0.08] ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                <ExperienceImg
                  fill
                    src={row.src}
                    seed={row.seed}
                    alt={row.alt}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-sans text-2xl font-semibold tracking-tight text-white/95 md:text-3xl">{row.title}</h3>
                  <div className="mt-4 space-y-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">
                    {row.paragraphs.map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex min-w-0 flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact?intent=media"
              className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-center font-sans text-sm font-medium text-white/85 transition-colors hover:border-white/35 hover:bg-white/[0.04] sm:w-auto"
                >
                  Media enquiry
              <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
                </Link>
          </div>
        </div>
      </section>

      {/* 7. Final push */}
      <section className="relative flex min-h-[min(78vh,880px)] items-center justify-center py-20 md:min-h-[min(82vh,920px)] md:py-28">
        <div className="absolute inset-0">
          <ExperienceImg
            fill
            src={EXPERIENCE_IMAGES.closingBoma}
            seed="expclosingboma"
            alt="Boma fire under the canopy at Vaalpenskraal for closing call to book"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/28 to-black/20" aria-hidden />
        </div>
        <div className="editorial-container relative z-10">
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/[0.1] bg-black/40 px-7 py-10 shadow-[0_4px_24px_rgb(0_0_0/0.35),0_24px_64px_rgb(0_0_0/0.45)] backdrop-blur-sm sm:px-10 sm:py-12 md:px-12 md:py-14">
            <h2 className="text-center font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.5rem] [text-shadow:0_1px_2px_rgb(0_0_0/0.85),0_2px_12px_rgb(0_0_0/0.75)]">
              Come for the hunt. Stay for the honesty of the bush.
            </h2>
            <p className="mt-5 text-center font-sans text-base leading-relaxed text-white/88 md:text-lg [text-shadow:0_1px_2px_rgb(0_0_0/0.9),0_2px_16px_rgb(0_0_0/0.65)]">
              Small camp intimacy, professional meat chain on site, and compliance language you can verify with management before you sign anything.
            </p>
            <ul className="mx-auto mt-8 max-w-xl list-inside list-disc space-y-2 text-left font-sans text-sm leading-relaxed text-white/80 md:text-base">
              <li>{p3Line}</li>
              <li>{meatLines.join("; ")}.</li>
              <li>
                {chaletCount} guest chalets on camp, {communalName} communal hub.
              </li>
            </ul>
            <div className="mt-10 flex min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Link
                href="/reserve#book-hunt"
                className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center font-sans text-sm font-semibold text-black shadow-[0_4px_20px_rgb(0_0_0/0.45)] transition-colors hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4"
              >
                Book your hunt
                <ChevronRight className="h-4 w-4 opacity-70" aria-hidden />
              </Link>
              <Link
                href="/species"
                className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-3.5 text-center font-sans text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
              >
                Browse quarry species
                <ChevronRight className="h-4 w-4 opacity-70" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
