import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Users,
  Bath,
  BedDouble,
  Waves,
  Trees,
  Flame,
  Wine,
  UtensilsCrossed,
  Shield,
  KeyRound,
  User,
  UsersRound,
  HeartHandshake,
  Fan,
  Truck,
  Award,
  Globe2,
  Mountain,
  Droplets,
  Snowflake,
  Scale,
  Vault,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { CHALET_KRAALS, CHALET_KRAALS_LINE, COMMUNAL_BAR_KRAAL } from "@/data/camp-kraals";

export const metadata: Metadata = {
  title: "The Lodge & Stay | Vaalpenskraal Game Reserve",
  description:
    "Vaalpenskraal: four named chalets (Roan, Eland, Gemsbok, Koedoe Kraal), Vark Kraal bar & kitchen, full board, pool, boma, outlook & waterhole, P3 permit, safes, cold room, meat services, taxidermy via your contractors, Matlabas Protection Service.",
};

const LODGE = "/images/lodge";

function Pic({
  seed,
  src,
  alt,
  className,
  priority,
}: {
  seed: string;
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src ?? `https://picsum.photos/seed/${seed}/1600/1050`}
      alt={alt}
      width={1600}
      height={1050}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

type SpecLayout = "full" | "wide" | "default";

type SpecRow = {
  label: string;
  value: string;
  seed: string;
  /** On-site photo under `public/images/lodge/` when available */
  src?: string;
  layout?: SpecLayout;
  imageTall?: boolean;
};

const SPECS: SpecRow[] = [
  {
    label: "Overnight",
    value: "Four chalets only — the only guest sleeping quarters on the hunting camp; no separate guest residence",
    seed: "vpspec-overnight",
    src: `${LODGE}/spec-overnight.jpg`,
    layout: "full",
    imageTall: true,
  },
  {
    label: "Chalets",
    value: `${CHALET_KRAALS_LINE} · identical layout · 4–5 guests each`,
    seed: "vpspec-chalets",
    src: `${LODGE}/spec-chalets.jpg`,
  },
  {
    label: "Sleeps",
    value: "4 to 5 guests per chalet · up to ~20 guests camp-wide",
    seed: "vpspec-sleeps",
    src: `${LODGE}/spec-sleeps.jpg`,
  },
  { label: "Beds", value: "4 single beds + 1 double bed per chalet", seed: "vpspec-beds", src: `${LODGE}/spec-beds.jpg` },
  { label: "Climate", value: "Air conditioning in all chalets", seed: "vpspec-climate", src: `${LODGE}/spec-climate.jpg` },
  { label: "Bathroom", value: "Showers · 2 basins · toilet (per chalet)", seed: "vpspec-bathroom", src: `${LODGE}/spec-bathroom.jpg` },
  {
    label: "Catering",
    value: "Fully catered: snacks, lunch, supper · all food & drinks including alcohol",
    seed: "vpspec-catering",
    src: `${LODGE}/spec-catering.jpg`,
    layout: "wide",
  },
  {
    label: "Communal",
    value: `${COMMUNAL_BAR_KRAAL} (bar) · kitchen & chill · gas stove · electric oven`,
    seed: "vpspec-communal",
    src: `${LODGE}/spec-communal.jpg`,
  },
  {
    label: "Outdoor",
    value: "Swimming pool · canopy boma · outlook point & waterhole for game viewing and sundowners",
    seed: "vpspec-outdoor",
    src: `${LODGE}/spec-outdoor.jpg`,
    layout: "wide",
  },
  { label: "Activities", value: "Clay pigeon shooting · game drives", seed: "vpspec-activities" },
  {
    label: "Permit",
    value: "P3 Exemption Permit — confirm current certificates with management when booking",
    seed: "vpspec-permit",
    src: `${LODGE}/spec-permit.jpg`,
  },
  {
    label: "Valuables",
    value: "On-site safe facilities for storing jewellery, cash, and documents",
    seed: "vpspec-valuables",
    src: `${LODGE}/spec-valuables.jpg`,
  },
  { label: "Cold chain", value: "Cold room facilities for meat and perishables", seed: "vpspec-cold" },
  {
    label: "Meat & hides",
    value: "Professional slaughtering · salting of hides · carcass weighing (coordinate with camp when planning your hunt)",
    seed: "vpspec-meat",
    layout: "wide",
  },
  {
    label: "Taxidermy",
    value: "Outsourced to professional taxidermists you appoint; international shipping & export paperwork sit with you and your taxidermist — the estate does not process client trophy paperwork",
    seed: "vpspec-taxidermy",
    src: `${LODGE}/spec-taxidermy.png`,
    layout: "full",
    imageTall: true,
  },
  { label: "Transfers", value: "Optional shuttle service (enquire when booking)", seed: "vpspec-transfers" },
  {
    label: "Security",
    value: "Gated access · falls under Matlabas Protection Service",
    seed: "vpspec-security",
    src: `${LODGE}/spec-security.jpg`,
  },
];

export default function LodgePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="The Lodge"
        title="Four chalets, shared basecamp, full board in the bush"
        subtitle={`Overnight accommodation is four matching air-conditioned chalets—${CHALET_KRAALS_LINE}—the only guest sleeping quarters on the hunting camp. The communal bar is ${COMMUNAL_BAR_KRAAL}. Everyone shares the kitchen, pool, canopy boma, outlook point, and waterhole for relaxed evenings and game viewing. Full board includes meals, snacks, and drinks. Add clay pigeon or a game drive when the schedule allows. The snapshot below is what we put in front of guests, agents, and management when facts need to match reality.`}
        imageSeed="lodgethero"
        imageSrc={`${LODGE}/hero.jpg`}
      />

      <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#030303]">
        <div className="pointer-events-none absolute -right-[15%] top-[-20%] h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full bg-burnished-copper/[0.06] blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-20%] h-[min(70vw,440px)] w-[min(70vw,440px)] rounded-full bg-bushveld-soil/[0.12] blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_28%,transparent_72%,rgba(0,0,0,0.45)_100%)]" aria-hidden />

        <div className="editorial-container-wide relative pb-20 pt-14 md:pb-28 md:pt-20">
          {/* Editorial image ribbon — on-site Vaalpenskraal photography */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:min-h-[min(52vh,460px)] lg:grid-cols-6 lg:grid-rows-2 lg:gap-3">
              <div className="group relative col-span-2 aspect-[4/5] overflow-hidden rounded-[1.25rem] ring-1 ring-white/[0.1] sm:rounded-2xl lg:col-span-3 lg:row-span-2 lg:aspect-auto lg:min-h-0">
                <img
                  src={`${LODGE}/brochure-hero.jpg`}
                  alt="Vaalpenskraal chalets and camp buildings from the approach"
                  width={1400}
                  height={1200}
                  className="h-full w-full object-cover transition duration-[1.25s] ease-out group-hover:scale-[1.04]"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30" aria-hidden />
              </div>
              <div className="group relative aspect-[16/11] overflow-hidden rounded-[1.25rem] ring-1 ring-white/[0.1] sm:rounded-2xl lg:col-span-3 lg:min-h-0">
                <img
                  src={`${LODGE}/brochure-bar.jpg`}
                  alt={`${COMMUNAL_BAR_KRAAL} — communal bar and lounge`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition duration-[1.25s] ease-out group-hover:scale-[1.04]"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" aria-hidden />
              </div>
              <div className="group relative aspect-[16/11] overflow-hidden rounded-[1.25rem] ring-1 ring-white/[0.1] sm:rounded-2xl lg:col-span-3 lg:min-h-0">
                <img
                  src={`${LODGE}/brochure-pool.jpg`}
                  alt="Swimming pool with chalets and lapa in the background"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition duration-[1.25s] ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" aria-hidden />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
              {(
                [
                  [`${LODGE}/brochure-vista.jpg`, "Lapa, pool, and chalets across the camp"],
                  [`${LODGE}/brochure-game.jpg`, "Bush detail — dragonfly on a twig"],
                  [`${LODGE}/brochure-food.jpg`, "Drinks and snacks by the pool"],
                  [`${LODGE}/brochure-night.jpg`, "Boma and lapa gathering space under the trees"],
                ] as const
              ).map(([src, alt], i) => (
                <div
                  key={src}
                  className="group relative aspect-[5/4] overflow-hidden rounded-[1.1rem] ring-1 ring-white/[0.09] sm:rounded-xl lg:aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={alt}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.05]"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" aria-hidden />
                </div>
              ))}
            </div>
            <div className="group relative aspect-[21/10] overflow-hidden rounded-[1.25rem] ring-1 ring-white/[0.1] sm:rounded-2xl lg:aspect-[3/1]">
              <img
                src={`${LODGE}/brochure-pano.jpg`}
                alt="Panoramic view of Vaalpenskraal gate and bushveld"
                width={1600}
                height={550}
                className="h-full w-full object-cover transition duration-[1.25s] ease-out group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" aria-hidden />
            </div>
          </div>

          {/* Masthead */}
          <header className="mt-14 border-t border-white/[0.09] pt-10 md:mt-20 md:pt-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-burnished-copper">On the brochure</p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="font-serif text-3xl font-normal tracking-[-0.02em] text-white sm:text-4xl md:text-[2.65rem] md:leading-[1.1]">
                    Property snapshot
                  </h2>
                  <span className="hidden h-px w-12 bg-burnished-copper/50 sm:block md:w-16" aria-hidden />
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/30">Facts sheet</span>
                </div>
                <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/45 md:text-base">
                  Copy-paste clarity for agents and guests. Photography on this grid is from camp; a few spec tiles below still use placeholders until dedicated shots exist (activities, cold chain, meat handling, transfers).
                </p>
              </div>
              <Link
                href="/contact?intent=lodge"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/90 lg:self-end"
              >
                Enquire dates
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              </Link>
            </div>
          </header>

          {/* Bento spec grid — image + fact per row */}
          <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3 xl:gap-4">
            {SPECS.map((row) => {
              const spanClass =
                row.layout === "full"
                  ? "sm:col-span-2 xl:col-span-3"
                  : row.layout === "wide"
                    ? "sm:col-span-2 xl:col-span-2"
                    : "";
              const imgAspect = row.imageTall ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[2/1] sm:aspect-[21/9]";
              return (
                <div
                  key={row.label}
                  className={`group flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0a0a] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition duration-500 hover:border-burnished-copper/35 hover:shadow-[0_28px_90px_-28px_rgba(184,115,51,0.22)] ${spanClass}`}
                >
                  <div className={`relative w-full overflow-hidden ${imgAspect}`}>
                    <img
                      src={row.src ?? `https://picsum.photos/seed/${row.seed}/1000/480`}
                      alt={row.src ? `Vaalpenskraal — ${row.label}` : `Placeholder — ${row.label}`}
                      width={1000}
                      height={480}
                      className="h-full w-full object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/25 to-black/30" />
                    {!row.src ? (
                      <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 font-sans text-[8px] font-semibold uppercase tracking-[0.22em] text-white/45 ring-1 ring-white/10 backdrop-blur-sm">
                        Image slot
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col border-t border-white/[0.06] p-5 md:p-6">
                    <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.26em] text-burnished-copper/90">{row.label}</dt>
                    <dd className="mt-3 font-sans text-sm font-medium leading-relaxed tracking-[-0.01em] text-white/78 md:text-[0.95rem]">
                      {row.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Through a guest&apos;s eyes</p>
              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Chalets for sleeping. Communal space for living loud.</h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  You check in through a <strong className="font-medium text-white/75">gated entrance</strong>, then split the week into two ideas: your <strong className="font-medium text-white/75">chalet</strong> is where you crash, cool down, and reset with aircon after a day in the bush. The <strong className="font-medium text-white/75">communal bar, kitchen, and chill area</strong> is where the group becomes a camp: long meals, fireside talk, and the honesty that only happens when nobody is rushing to an invoice.
                </p>
                <p>
                  <strong className="font-medium text-white/75">Fully catered</strong> means snacks, lunch, and supper land without you playing project manager. <strong className="font-medium text-white/75">Drinks and alcohol are included</strong> under the camp&apos;s responsible service guidelines, so the bar is part of the hospitality, not a separate meter.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:col-span-7">
              <Pic
                seed="vplodgeoverview"
                src={`${LODGE}/lodge-overview.jpg`}
                alt="Overview of Vaalpenskraal chalets, pool, and communal area"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Four chalets */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="editorial-container">
          <div className="mx-auto max-w-3xl text-center">
            <Home className="mx-auto h-9 w-9 text-burnished-copper/80" aria-hidden />
            <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Accommodation</p>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.35rem]">
              Four kraals · Roan, Eland, Gemsbok &amp; Koedoe
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/45">
              Each chalet carries a camp name—<strong className="font-medium text-white/70">{CHALET_KRAALS_LINE}</strong>—with the same footprint inside so nobody draws the short straw. There is{" "}
              <strong className="font-medium text-white/70">no separate main residence or guest house</strong> for hunters on camp: these four units are the full overnight inventory. Sleep <strong className="font-medium text-white/70">four or five</strong> guests using{" "}
              <strong className="font-medium text-white/70">four single beds and one double bed</strong>. <strong className="font-medium text-white/70">Air conditioning</strong> takes the edge off Limpopo heat when you need real sleep before dawn.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 lg:col-span-4">
              <div className="flex items-start gap-3">
                <Bath className="mt-0.5 h-6 w-6 shrink-0 text-burnished-copper/75" aria-hidden />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white/90">Bathroom</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                    Showers, <strong className="font-medium text-white/55">two basins</strong>, and <strong className="font-medium text-white/55">toilet</strong> per chalet. Enough elbow room for two people getting ready while a third still packs a daypack.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-white/[0.08] pt-8">
                <Fan className="mt-0.5 h-6 w-6 shrink-0 text-burnished-copper/75" aria-hidden />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white/90">Aircons</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                    Climate control in the chalets so midday rest and night recovery are predictable. The bush is wild; your room temperature does not have to be.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-white/[0.08] pt-8">
                <BedDouble className="mt-0.5 h-6 w-6 shrink-0 text-burnished-copper/75" aria-hidden />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white/90">Bed maths</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                    Four singles plus one double fits hunting pairs, family combos, or a small group that still wants separate beds. Plan rooming when you enquire so we match chalets to your roster.
                  </p>
                </div>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:col-span-8">
              <Pic
                seed="vpchaletinterior"
                src={`${LODGE}/lodge-chalet-interior.jpg`}
                alt="Chalet interior with beds and air conditioning"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {CHALET_KRAALS.map((kraal) => (
              <figure key={kraal.key} className="overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                <Pic
                  seed={`vpchalet-${kraal.key}`}
                  src={`${LODGE}/lodge-chalet-${kraal.key}.jpg`}
                  alt={`${kraal.name} guest chalet`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Communal bar / kitchen */}
      <section className="border-b border-white/[0.07] py-20 md:py-32">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Wine className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Communal space</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
                {COMMUNAL_BAR_KRAAL} — bar, kitchen, and the slow art of the fireside
              </h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  This is the shared basecamp: a proper <strong className="font-medium text-white/75">bar</strong>, a <strong className="font-medium text-white/75">kitchen</strong> that works for catering, and room to sprawl after a walk in thorns. It is not a hotel lobby. It is where rifles get cleaned on a towel, where someone tells a story badly on purpose, and where the fire team plates food without shouting.
                </p>
                <p>
                  Cooking hardware is real-world: <strong className="font-medium text-white/75">gas stove</strong> and <strong className="font-medium text-white/75">electric oven</strong> so chefs (or your hosts) can run breakfast, grill sides, and slow roasts the way bush kitchens should.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                <Pic
                  seed="vpbarkroeg"
                  src={`${LODGE}/lodge-bar.jpg`}
                  alt="Communal bar and lounge"
                  className="aspect-[16/10] w-full object-cover"
                />
              </figure>
              <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                <Pic
                  seed="vpkitchen"
                  src={`${LODGE}/lodge-kitchen.jpg`}
                  alt="Kitchen with gas stove and electric oven"
                  className="aspect-[16/10] w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Fully catered */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <figure className="order-2 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:order-1">
              <Pic
                seed="vpcateringtable"
                src={`${LODGE}/lodge-catering.jpg`}
                alt="Drinks and snacks served by the pool as part of full board"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div className="order-1 lg:order-2">
              <UtensilsCrossed className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Fully catered</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Snacks, lunch, supper, and the bar stays open</h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-white/48">
                <strong className="font-medium text-white/75">Snacks, lunch, and supper</strong> are included. So are <strong className="font-medium text-white/75">food, soft drinks, and alcohol</strong> served on the estate as part of the package. We still run a responsible camp: pace yourself, respect firearms rules, and let the PH own the early morning.
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/40">
                If a guest has medical or religious dietary needs, mention them when you book so the kitchen can plan without last-minute drama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pool + Boma */}
      <section className="border-b border-white/[0.07] py-20 md:py-32">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Outdoor living</p>
          <h2 className="mt-3 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Swimming pool and a boma under the canopy</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-white/45">
            Midday heat meets water. Evening meets fire under <strong className="font-medium text-white/65">trees</strong> with a <strong className="font-medium text-white/65">canopy</strong> over the <strong className="font-medium text-white/65">boma</strong>: embers, stars, and the kind of circle that does not need a ceiling fan.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic
                seed="vppoolarea"
                src={`${LODGE}/lodge-pool.jpg`}
                alt="Swimming pool"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 md:p-6">
                <Waves className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Swimming pool</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  A dedicated pool area for guests. Recovery after a stalk, entertainment for kids, and honest relief when the thermometer wins.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic
                seed="vpbomatrees"
                src={`${LODGE}/lodge-boma.jpg`}
                alt="Boma fire under trees with canopy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2">
                  <Trees className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                  <Flame className="h-6 w-6 text-burnished-copper/70" aria-hidden />
                </div>
                <h3 className="mt-4 font-sans text-lg font-semibold">Boma area</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  Outdoor fire and social space <strong className="font-medium text-white/55">under the trees</strong>, with <strong className="font-medium text-white/55">canopy</strong> cover. This is the chapter guests photograph least and remember longest.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Outlook & waterhole */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Slow hours</p>
          <h2 className="mt-3 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Outlook point &amp; waterhole</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-white/45">
            Between stalks and stories, the estate gives you places to <strong className="font-medium text-white/65">watch game</strong> without a rifle in hand. The{" "}
            <strong className="font-medium text-white/65">outlook point</strong> lifts the view; the <strong className="font-medium text-white/65">waterhole</strong> pulls animals in on their schedule. Bring binoculars, a jacket for the breeze, and time for{" "}
            <strong className="font-medium text-white/65">sundowners</strong> when the light turns copper — the kind of evening that does not need a filter.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic
                seed="vpoutlookpoint"
                src={`${LODGE}/lodge-outlook.jpg`}
                alt="Camp and chalets from an elevated outlook over the bush"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 md:p-6">
                <Mountain className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Outlook point</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  Elevated perspective over valleys and thicket lines: ideal for scanning movement, glassing at last light, and letting non-hunters feel the scale of the Waterberg without a vehicle bouncing under them.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic
                seed="vpwaterhole"
                src={`${LODGE}/lodge-waterhole.jpg`}
                alt="Pool edge and bushveld opening toward game country"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5 md:p-6">
                <Droplets className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Waterhole</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  A natural focal point for game viewing: patience beats horsepower here. We keep voices low and respect the animals&apos; rhythm — sundowners taste better when kudu or zebra step in on their own time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="border-b border-white/[0.07] bg-[#070707] py-20 md:py-28">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">On the estate</p>
          <h2 className="mt-3 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Clay pigeon and game drives</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-white/45">
            Beyond the hunt itself, we run experiences that keep hands busy and binoculars up: <strong className="font-medium text-white/65">clay pigeon shooting</strong> for shotgunning rhythm, and <strong className="font-medium text-white/65">game drives</strong> for guests who want the bush without a rifle.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
              <Pic
                seed="vpclaypigeon"
                src={`${LODGE}/spec-outdoor.jpg`}
                alt="Clay pigeon and open grounds on the estate"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
              <Pic
                seed="vpgamedrive"
                src={`${LODGE}/brochure-pano.jpg`}
                alt="Lodge grounds and bushveld"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* P3, safes, cold room, meat */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-28">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Compliance &amp; camp infrastructure</p>
          <h2 className="mt-3 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Permit, safes, cold room, and meat handling</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-white/45">
            Trophy hunters and international groups often need more than a bed: secure storage, cold chain, and professional field support. The lines below are the services we highlight on camp; numbers and permit references are confirmed on your booking pack.
          </p>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-burnished-copper/30 bg-burnished-copper/[0.06] px-5 py-5 md:px-8 md:py-6">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
              <Award className="h-9 w-9 shrink-0 text-burnished-copper" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold text-white/90">P3 Exemption Permit</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">
                  Vaalpenskraal operates under the <strong className="font-medium text-white/70">P3 Exemption Permit</strong> framework relevant to our activities. Request the current certificate and scope from management or your booking agent so your paperwork trail matches what authorities expect.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
              <Vault className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <h3 className="mt-4 font-sans text-lg font-semibold">Safe facilities</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                On-site safes are available for <strong className="font-medium text-white/55">valuables</strong> — cash, documents, watches, and small electronics you do not want loose in a chalet when the whole group is in and out of vehicles.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
              <Snowflake className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <h3 className="mt-4 font-sans text-lg font-semibold">Cold room</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                <strong className="font-medium text-white/55">Cold room facilities</strong> support proper meat handling after the shot: hang time, hygiene, and handover to your butcher or export chain without improvising ice in a cooler box.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
              <Scale className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <h3 className="mt-4 font-sans text-lg font-semibold">Slaughter, hides &amp; weighing</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                <strong className="font-medium text-white/55">Professional slaughtering</strong>, <strong className="font-medium text-white/55">salting of hides</strong>, and <strong className="font-medium text-white/55">carcass weighing</strong> keep the harvest disciplined. Discuss timing and species with camp when you build your hunt plan so crews and equipment are lined up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taxidermy & international */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Globe2 className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">International &amp; trophy hunters</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Taxidermy partners and shipping home</h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  Many guests appoint a <strong className="font-medium text-white/75">professional taxidermist</strong> they already trust. On camp we help with practical handover and timing with <em className="text-white/60">your</em> contractor — the estate is not the taxidermy shop; field prep, dipping, and paperwork follow your taxidermist&apos;s scope.
                </p>
                <p>
                  For clients who need trophies moved <strong className="font-medium text-white/75">outside South Africa</strong>, the export path, permits, and courier paperwork are handled between <strong className="font-medium text-white/75">you, your taxidermist, and the relevant authorities</strong>. Vaalpenskraal does not process client import/export paperwork; we keep the hunt and camp services honest so your agents can do their job without mixed signals.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:col-span-7">
              <Pic
                seed="vptaxidermyprep"
                src={`${LODGE}/lodge-taxidermy.png`}
                alt="Taxidermist working on a shoulder mount in a workshop"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Shuttle + Security */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
            <Truck className="h-8 w-8 text-burnished-copper/80" aria-hidden />
            <h2 className="mt-5 font-sans text-xl font-semibold sm:text-2xl">Optional shuttle service</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/45 md:text-base">
              Flying into Johannesburg or driving from Pretoria? Ask about an <strong className="font-medium text-white/70">optional shuttle</strong> when you book. We line up timing with gate access and check-in so you are not solving gravel roads in the dark on three hours of sleep.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <KeyRound className="h-7 w-7 text-white/25" aria-hidden />
            </div>
            <h2 className="mt-5 font-sans text-xl font-semibold sm:text-2xl">Safe camp · Matlabas Protection Service</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/45 md:text-base">
              The property is <strong className="font-medium text-white/70">gated</strong> from the road and sits under professional security oversight. Vaalpenskraal falls under <strong className="font-medium text-white/70">Matlabas Protection Service</strong>, so guests, vehicles, and equipment sit inside a managed perimeter, not an open roadside stop.
            </p>
          </div>
        </div>
      </section>

      {/* Three lenses */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Same camp, different trips</p>
          <h2 className="mt-3 text-center font-sans text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Solo hunters, squads, and families</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <User className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Solo or pair</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                One chalet, multiple beds, room for gear. You join the communal meals and bar when you want company, then retreat to aircon and a real shower when a long day in the bush has emptied you out.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <UsersRound className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Hunting group</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                Spread across four matching units, debrief at the communal bar, and let fully catered meals keep the schedule simple. Clay pigeon and game drives fill rest days without inventing entertainment.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <HeartHandshake className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Family &amp; friends</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                Kids live at the pool. Adults trade off game drives and long evenings at the bar. The double bed plus singles lets you mix couples and singles without awkward sofa wars. Security and gates matter more when you bring everyone you love.
              </p>
            </div>
          </div>
          <blockquote className="mx-auto mt-14 max-w-3xl border-l-2 border-burnished-copper/55 py-1 pl-6 font-serif text-lg leading-relaxed text-white/65 md:text-xl">
            When management tweaks this page, the spine stays: four chalets only for sleeping, shared bar and kitchen, full board including the bar, pool, canopy boma, outlook and waterhole, clay and drives, P3 permit callout, safes and cold room, professional meat and hide handling, taxidermy via your contractors, and Matlabas on the perimeter. Swap photos and booking fine print — not the facts.
          </blockquote>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-neutral-950 py-16 md:py-20">
        <div className="editorial-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <Users className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <h2 className="mt-4 font-sans text-xl font-semibold sm:text-2xl">Media &amp; crews</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/42">
                Film and editorial teams: share crew size, vehicle needs, and whether you are shooting clay pigeon or game drives. We keep other guests comfortable while you get your frames.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
              <Pic
                seed="vplodgeevening"
                src={`${LODGE}/lodge-evening.jpg`}
                alt="Warm light in the communal bar at camp"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-16 md:py-20">
        <div className="editorial-container flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-sans text-xl font-semibold sm:text-2xl">Hold your dates</h2>
            <p className="mt-2 max-w-lg font-sans text-sm text-white/45">
              Four chalets only for overnight guests, full catering, pool, boma, outlook and waterhole, field services, and optional shuttle. Enquire with group size and we map beds to chalets.
            </p>
          </div>
          <Link
            href="/contact?intent=lodge"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Enquire about staying
            <ChevronRight className="h-4 w-4 opacity-60" />
          </Link>
        </div>
      </section>
    </div>
  );
}
