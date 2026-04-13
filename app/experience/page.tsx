import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Experience | Vaalpenskraal Game Reserve",
  description:
    "What it feels like to hunt and stay at Vaalpenskraal: dawn on the Iron Mountain, boma fire, first-time hunters, seasoned Waterberg thicket, families, international travel, and the bush through every sense.",
};

function Pic({
  seed,
  alt,
  className,
  priority,
}: {
  seed: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/1600/1000`}
      alt={alt}
      width={1600}
      height={1000}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

const AUDIENCE = [
  {
    seed: "expsolo",
    title: "Solo hunters",
    icon: Footprints,
    body: "Silence becomes a companion, not an empty room. You set the pace of your thoughts. The PH walks with you, but the weight of the decision at the shot is yours. Many guests say they came for a species and left with a quieter mind: the veld does that when nobody is performing for a group chat.",
    extra:
      "If you travel alone from overseas, we build in check-ins so logistics never feel lonely: airport timing, rifle paperwork, and a clear plan for the first night so you sleep instead of spiralling.",
  },
  {
    seed: "expfamily",
    title: "Friends, family, children",
    icon: Heart,
    body: "Shared discomfort on a stalk turns into shared laughter at the fire. Kids learn that adults can be still. Partners who do not hunt still get dawn light on the porch, nyala at the fence line, and the sound of stories that start with 'you should have seen his face when…'",
    extra:
      "We are direct about safety: wild animals, vehicles, and open water are real. With clear boundaries, families often say the trip rewired how their children listen. That is not brochure poetry. It is what parents tell us when they rebook.",
  },
  {
    seed: "expglobal",
    title: "Local & international",
    icon: MapPin,
    body: "From Modimolle to Melbourne, the last hour of the drive feels the same: smaller roads, more cattle grids, air that smells like dust and grass. Locals bring boerewors jokes and realistic expectations. Internationals bring jet lag and big questions. Both get honest answers.",
    extra:
      "We help overseas hunters with the unglamorous chapters: temporary rifle import, trophy export, and the day you should not hunt because you are still in another time zone. The hunt deserves a sharp mind.",
  },
];

const HOURS = [
  {
    t: "Before first light",
    text: "Coffee in the dark. Steel-cold air on your cheeks. Someone checks wind on the back of a wet finger. You realise the city never sounded this quiet.",
  },
  {
    t: "Golden hour",
    text: "Glass up. Tracks read like sentences. The PH whispers a plan you only half understand until your boots are already committed to the path.",
  },
  {
    t: "Midday",
    text: "Heat pushes animals to shade. You eat without rushing. The kind of meal that tastes better because your legs earned it.",
  },
  {
    t: "Late afternoon",
    text: "Light turns honest. Long shadows hide nothing and everything. This is when thicket hunting stops forgiving lazy wind.",
  },
  {
    t: "After dark",
    text: "Boma smoke in your hair. Stars you forgot existed. A story you will tell badly on purpose because the real version only worked there.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="The Experience"
        title="The bush is not a backdrop. It is the main character."
        subtitle="Smell the dust when the tyres slow. Hear the cape turtle dove. Feel the cold sneak into your sleeves at last light. This page is for everyone who wants to understand the trip before they book: hunters, families, writers, and guests who will never shoulder a rifle."
        imageSeed="experiencehero"
      />

      {/* Full-bleed panorama */}
      <section className="relative border-b border-white/[0.07]">
        <div className="relative aspect-[21/9] min-h-[200px] w-full overflow-hidden bg-neutral-950 sm:min-h-[280px] md:min-h-[340px]">
          <Pic
            seed="expwaterbergpan"
            alt="Wide view over Waterberg bushveld at dawn"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
            <p className="max-w-3xl font-sans text-sm leading-relaxed text-white/75 md:text-base">
              The Waterberg is not a single postcard. It is iron soil, thorn corridors, open moments that lie about distance, and ridgelines that turn copper long before the sun gives up.
            </p>
          </div>
        </div>
      </section>

      {/* Through your eyes: split + image */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-5">
              <Sparkles className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Field note</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Through your eyes</h2>
              <figure className="mt-10 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:hidden">
                <Pic
                  seed="expthicketwalk"
                  alt="Hunter and guide walking in thick bushveld"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] leading-snug text-white/40">
                  Placeholder: replace with Vaalpenskraal stalk photography when available.
                </figcaption>
              </figure>
            </div>
            <div className="space-y-6 font-sans text-base leading-relaxed text-white/50 lg:col-span-7">
              <p>
                If you have never hunted before, you might picture a trophy photo and a rifle. The real arc is slower: learning to read wind on the back of your neck, discovering that impala alarm barks travel faster than thought, and realising the PH stopped talking because something in the thicket just changed the rules.
              </p>
              <p>
                If you have hunted your whole life, you still get a new exam here. The Waterberg mixes open moments with thicket that swallows distance. The animal you wanted might offer a shot you refuse because the angle is a lie. That restraint is as much the hunt as the harvest.
              </p>
              <p>
                If you are unsure about game farms, ask hard questions. We welcome them. Ethical stocking, fair chase, meat use, and how revenue flows back into habitat are not marketing garnish. They are the reason places like this exist next to cities that keep growing.
              </p>
              <blockquote className="relative border-l-2 border-burnished-copper/60 py-1 pl-6 font-serif text-lg leading-snug text-white/70 md:text-xl">
                The best guests arrive curious and leave quieter. Not smaller. Quieter. As if the veld turned down the volume on everything that did not matter.
              </blockquote>
              <p>
                Non-hunters still get the documentary pace: light changing by the minute, jackals calling like broken hinges, and the small shock of seeing a kudu bull step out as if the bush had been holding its breath.
              </p>
            </div>
          </div>
          <figure className="mx-auto mt-16 hidden max-w-6xl overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:block">
            <Pic
              seed="expthicketwalk"
              alt="Hunter and guide walking in thick bushveld"
              className="aspect-[21/9] w-full object-cover"
            />
            <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-3 font-sans text-[11px] leading-snug text-white/40 md:px-8">
              Placeholder image: swap for on-estate stalk and PH photography.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Audience: three image-forward cards */}
      <section className="border-b border-white/[0.07] bg-[#070707] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Who you arrive as</p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.35rem]">
              The same mountain, different shoes
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/45">
              We have watched every archetype step out of a bakkie: the nervous first-timer, the PH on holiday, the father who wants one clean week with his son, the writer hunting adjectives, the corporate group pretending they are not competing. The bush reads you faster than you read it.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:gap-8">
            {AUDIENCE.map((a) => (
              <article
                key={a.title}
                className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.05] md:grid-cols-2"
              >
                <div className="relative min-h-[240px] md:min-h-[320px]">
                  <Pic
                    seed={a.seed}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/75" />
                  <a.icon className="absolute left-5 top-5 h-9 w-9 text-white/90 drop-shadow-md md:left-6 md:top-6" aria-hidden />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <h3 className="font-sans text-xl font-semibold tracking-tight text-white/95 md:text-2xl">{a.title}</h3>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/48 md:text-base">{a.body}</p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-white/38 md:text-[0.95rem]">{a.extra}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Day rhythm + side image */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <Sunrise className="h-9 w-9 text-burnished-copper/80" aria-hidden />
                <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Rhythm</p>
                <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">A day in the skin of the hunt</h2>
                <p className="mt-5 font-sans text-sm leading-relaxed text-white/45 md:text-base">
                  No two days clone each other. Weather, wind, and animal mood rewrite the script. Still, most weeks move to a beat you begin to feel in your bones by day three.
                </p>
                <figure className="mt-10 overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                  <Pic
                    seed="expdawncoffee"
                    alt="Steam rising from mug at dawn in the bush"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/40">
                    Placeholder: lodge dawn / coffee on the deck.
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
                  <p className="mt-3 font-sans text-base leading-relaxed text-white/52 md:text-[1.05rem]">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First-timer / seasoned / skeptics */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Straight talk</p>
          <h2 className="mt-4 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Three conversations we have every season</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Compass className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I have never hunted. Will I embarrass myself?”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/45">
                Everyone’s first stalk includes a wrong step, a noisy sleeve, or a question they think is stupid. The PH’s job is to compress the learning curve without shaming you. You are not auditioning. You are participating in something older than Instagram.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Binoculars className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I have done Namibia, Zambia, the lot. Surprise me.”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/45">
                Then we lean into thicket IQ: reading small openings, trusting negative space, refusing the shot that looks good on a scope but lies in the body. The Waterberg is a technical exam. Arrogance costs horn length. Patience pays.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-8">
              <Flame className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">“I do not trust fenced hunting.”</h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/45">
                Fair. Ask us about size, carrying capacity, how animals move, and how selective harvest fits management. Ethical hunting is transparent hunting. If our answers do not satisfy you, we would rather you book somewhere that does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senses row */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <Ear className="mx-auto h-8 w-8 text-burnished-copper/80 md:mx-0" aria-hidden />
              <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">The parts cameras miss</h2>
              <p className="mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-white/45 md:mx-0 md:text-base">
                Documentary crews love light. Hunters love the other senses: woodsmoke in your jersey, the metallic taste of adrenaline, thorns catching your sleeve like the veld checking if you are paying attention.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { seed: "expsensefire", cap: "Smoke and boma embers" },
              { seed: "expsenserain", cap: "Petrichor before a storm" },
              { seed: "expsensegrass", cap: "Dry grass against your legs" },
              { seed: "expsensenight", cap: "Night sky over the camp" },
            ].map((s) => (
              <figure key={s.seed} className="group overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                <Pic
                  seed={s.seed}
                  alt=""
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="border-t border-white/[0.06] bg-white/[0.03] px-3 py-2.5 font-sans text-[10px] uppercase tracking-[0.12em] text-white/45 md:text-[11px]">
                  {s.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Guides / media zigzag */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <figure className="order-2 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:order-1">
              <Pic
                seed="expguideglass"
                alt="Professional hunter glassing at sunrise"
                className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
              />
              <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/40 md:px-6">
                Placeholder: PH / guiding photography on the estate.
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <BookOpen className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Professionals</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Guides, writers, cameras</h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/48">
                Professional hunting guides find a team that speaks the same language: safety arcs, client psychology, and when to call off a stalk. We respect the craft. Egos get left at the gate with the city dust.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/48">
                Journalists and documentary makers find a reserve that understands access without turning the hunt into theatre. We help you stay honest to the story and to the animals. Mention format, crew size, and timeline in your enquiry so we can plan vehicle use and quiet hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/reserve"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  Plan a hunt
                  <ChevronRight className="h-4 w-4 opacity-60" />
                </Link>
                <Link
                  href="/contact?intent=media"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-sans text-sm font-medium text-white/85 transition-colors hover:border-white/35 hover:bg-white/[0.04]"
                >
                  <Camera className="h-4 w-4 opacity-70" />
                  Media enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="relative flex min-h-[min(72vh,820px)] items-center justify-center py-20 md:py-28">
        <div className="absolute inset-0">
          <Pic
            seed="expclosingboma"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/88 to-black/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8 md:px-12">
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.5rem]">
            The fire is already waiting in the story you tell yourself
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-white/50 md:text-lg">
            Walk it once with boots on iron soil. Then tell us if we were wrong about the silence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/lodge"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              See the lodge
              <ChevronRight className="h-4 w-4 opacity-60" />
            </Link>
            <Link
              href="/species"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/55 transition-colors hover:text-white"
            >
              Quarry species
              <ChevronRight className="h-4 w-4 opacity-60" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/55 transition-colors hover:text-white"
            >
              Ask a question
              <ChevronRight className="h-4 w-4 opacity-60" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
