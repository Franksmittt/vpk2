import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Building2,
  Users,
  Bath,
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
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "The Lodge & Stay | Vaalpenskraal Game Reserve",
  description:
    "Vaalpenskraal: main house, four identical en-suite chalets (20 guests), pool and lapa, boma under the trees, indoor bar and kitchen, gated Waterberg reserve.",
};

function Pic({ seed, alt, className, priority }: { seed: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <img
      src={`https://picsum.photos/seed/${seed}/1600/1050`}
      alt={alt}
      width={1600}
      height={1050}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

const SPECS = [
  { label: "Chalets", value: "4 identical units, same design & layout" },
  { label: "Sleeping capacity", value: "Up to 5 guests per chalet · 20 guests total" },
  { label: "Bathrooms", value: "En-suite in every chalet" },
  { label: "Main house", value: "Central living, bar, kitchen & social hub" },
  { label: "Outdoor", value: "Swimming pool, lapa beside pool, boma under trees" },
  { label: "Access", value: "Gated entrance from the road" },
];

export default function LodgePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="The Lodge"
        title="Main house, four chalets, and the Waterberg at your doorstep"
        subtitle="Vaalpenskraal is built like a serious bush camp should be: a central house for gathering, four matching chalets for privacy, a pool and lapa for heat-of-day relief, and a boma under the trees where the day actually ends. Below is what is on the property today, written so guests, agents, and owners can all scan the same facts."
        imageSeed="lodgethero"
      />

      {/* Quick specs strip (estate-agent clarity) */}
      <section className="border-b border-white/[0.07] bg-[#0a0a0a] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-burnished-copper/85">On the brochure</p>
              <h2 className="mt-2 font-sans text-xl font-semibold tracking-tight text-white/90 sm:text-2xl">
                Property snapshot
              </h2>
              <p className="mt-2 max-w-xl font-sans text-sm text-white/42">
                Numbers you can put in an email to a client or a cousin. Swap photography when you sit with the owner.
              </p>
            </div>
            <Link
              href="/contact?intent=lodge"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wider text-white/80 transition-colors hover:border-white/35 hover:bg-white/[0.04]"
            >
              Enquire dates
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map((row) => (
              <div
                key={row.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 md:px-5 md:py-4"
              >
                <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/38">{row.label}</dt>
                <dd className="mt-2 font-sans text-sm font-medium leading-snug text-white/78">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Visitor lens intro + wide image */}
      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Through a guest&apos;s eyes</p>
              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">You are not checking into a hotel wing</h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  You arrive through a <strong className="font-medium text-white/75">gated entrance</strong>: the first quiet moment that says the city is behind you. Then you see how the camp is laid out: a <strong className="font-medium text-white/75">main house</strong> where everyone can gather, and <strong className="font-medium text-white/75">four identical chalets</strong> spaced so you still get your own door, your own shower, and your own silence when the day has wrung you out.
                </p>
                <p>
                  If you hunt, you want hot water and a bed that does not apologize. If you do not hunt, you want a pool within reach, a lapa chair in the shade, and a boma that smells like woodsmoke before anyone says a word. That is the rhythm here.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:col-span-7">
              <Pic
                seed="vplodgeoverview"
                alt="Overview of lodge buildings and bushveld setting"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                priority
              />
              <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] leading-snug text-white/40 md:px-5">
                Placeholder: aerial or wide shot of main house, chalets, and pool area (replace with Vaalpenskraal photography).
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Main house */}
      <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <figure className="order-2 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:order-1">
              <Pic
                seed="vpmainhouse"
                alt="Main house living and social spaces"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/40 md:px-5">
                Placeholder: main house interior or facade.
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <Building2 className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Main house</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">The hub where the group becomes a camp</h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  The main house is the spine of the stay: where coffee appears before the stars fade, where plans for the day get spoken in low voices, and where everyone lands again when the sun has taken its toll. For an owner, it is the room that carries the personality of the place. For an agent, it is the sell that ties the accommodation story together.
                </p>
                <p>
                  It anchors the <strong className="font-medium text-white/75">indoor bar and social area</strong>, a proper <span className="text-white/65">“kroeg &amp; kuier”</span> space: somewhere to pour a drink, debrief a stalk, or sit with family who spent the day by the pool instead of in the bush.
                </p>
                <p>
                  The <strong className="font-medium text-white/75">kitchen sits adjacent to the bar</strong>, which matters more than it sounds. Service flows. Braai prep does not fight the conversation. Catering for a group or a hunt party stays practical instead of chaotic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four chalets - deep dive */}
      <section className="border-b border-white/[0.07] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Home className="mx-auto h-9 w-9 text-burnished-copper/80" aria-hidden />
            <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Accommodation</p>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.35rem]">
              Four identical chalets. Same layout. No favourites.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/45">
              Every unit matches the next: uniform design, predictable flow, and the fairness that groups appreciate when nobody wants the “bad” room. Each chalet sleeps up to <strong className="font-medium text-white/70">five guests</strong>, which means the camp holds up to <strong className="font-medium text-white/70">twenty people</strong> across all four when fully utilised.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 lg:col-span-4">
              <div className="flex items-start gap-3">
                <Bath className="mt-0.5 h-6 w-6 shrink-0 text-burnished-copper/75" aria-hidden />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white/90">En-suite bathrooms</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                    All four chalets include en-suite bathrooms. After dust, sweat, and thorns, private ablutions are not a luxury detail. They are what lets a hunter sleep, and what lets a non-hunter feel at home in the bush.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-3 border-t border-white/[0.08] pt-8">
                <Users className="mt-0.5 h-6 w-6 shrink-0 text-burnished-copper/75" aria-hidden />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white/90">Who the maths works for</h3>
                  <ul className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-white/42">
                    <li>
                      <strong className="font-medium text-white/60">Solo or pair:</strong> one chalet, space to spread gear, no crowding.
                    </li>
                    <li>
                      <strong className="font-medium text-white/60">Hunting group:</strong> allocate chalets by team, snoring tolerance, or PH proximity.
                    </li>
                    <li>
                      <strong className="font-medium text-white/60">Family getaway:</strong> one unit for parents and kids, still room for a grandparent or friend.
                    </li>
                    <li>
                      <strong className="font-medium text-white/60">Friends weekend:</strong> book two to four chalets and own the main house in between.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:col-span-8">
              <Pic seed="vpchaletinterior" alt="Chalet interior bedroom and living space" className="aspect-[16/10] w-full object-cover" />
              <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/40 md:px-5">
                Placeholder: chalet interior (same look across all four when you shoot).
              </figcaption>
            </figure>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {["vpchaletA", "vpchaletB", "vpchaletC", "vpchaletD"].map((seed, i) => (
              <figure key={seed} className="overflow-hidden rounded-xl ring-1 ring-white/[0.08]">
                <Pic seed={seed} alt={`Chalet exterior or veranda view ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="border-t border-white/[0.06] bg-black/60 px-2 py-2 text-center font-sans text-[10px] uppercase tracking-wider text-white/35">
                  Unit {i + 1} (placeholder)
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pool + lapa + boma */}
      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Leisure &amp; outdoor</p>
          <h2 className="mt-3 text-center font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Water, shade, and fire in the right order</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans text-base leading-relaxed text-white/45">
            Limpopo heat is honest. A swimming pool is not resort fluff here: it is where kids become bearable again, where non-hunters wait out the midday, and where hunters cool blood pressure before the evening walk. The <strong className="font-medium text-white/65">lapa sits next to the pool</strong> by design, towels on shoulders, drinks within reach. The <strong className="font-medium text-white/65">boma lives under the trees</strong>, away from chlorine, closer to stars and woodsmoke.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic seed="vppoolarea" alt="Swimming pool and deck area" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5 md:p-6">
                <Waves className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Swimming pool</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  Dedicated pool area for guests. The kind of blue that looks wrong on a hunt brochure until you have spent three hours in thorn scrub and would trade a horn for a float.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic seed="vplapa" alt="Lapa next to swimming pool" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5 md:p-6">
                <Trees className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Lapa by the pool</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  Covered outdoor space right beside the water: shade, wind relief, and a natural pause between morning and afternoon. Estate agents call it lifestyle. Guests call it “where we lived all Tuesday.”
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30">
              <Pic seed="vpbomatrees" alt="Boma fire area under trees" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5 md:p-6">
                <Flame className="h-7 w-7 text-burnished-copper/80" aria-hidden />
                <h3 className="mt-4 font-sans text-lg font-semibold">Boma under the trees</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-white/42">
                  Outdoor fire pit and social circle where the day actually ends. Not a gas flame for show: real coals, real stories, real quiet between sentences.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Bar + kitchen */}
      <section className="border-b border-white/[0.07] py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Wine className="h-9 w-9 text-burnished-copper/80" aria-hidden />
              <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Social &amp; catering</p>
              <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Bar, kitchen, and the art of not rushing</h2>
              <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-white/48">
                <p>
                  The <strong className="font-medium text-white/75">indoor bar and social area</strong> is built for the South African tradition of <span className="text-white/65">kroeg &amp; kuier</span>: a corner that turns into the whole evening. For groups, it is where bonds tighten. For families, it is where teenagers learn that adults can laugh loudly without a screen.
                </p>
                <p>
                  The <strong className="font-medium text-white/75">kitchen is next to the bar</strong>, which keeps catering logical: platters to the counter, potjie coordination, breakfast before the PH knocks. Owners care about workflow. Guests only notice that food feels effortless.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                <Pic seed="vpbarkroeg" alt="Indoor bar and social lounge" className="aspect-[16/10] w-full object-cover" />
                <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5 font-sans text-[11px] text-white/40">
                  Placeholder: bar &amp; kuier area.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
                <Pic seed="vpkitchen" alt="Kitchen adjacent to bar" className="aspect-[16/10] w-full object-cover" />
                <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5 font-sans text-[11px] text-white/40">
                  Placeholder: kitchen (show adjacency to bar if possible).
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Gated access */}
      <section className="border-b border-white/[0.07] bg-[#070707] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <figure className="order-2 overflow-hidden rounded-2xl ring-1 ring-white/[0.08] lg:order-1">
            <Pic seed="vpgateentrance" alt="Gated entrance to the reserve" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 font-sans text-[11px] text-white/40">
              Placeholder: main gate / access from road.
            </figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <KeyRound className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <Shield className="h-8 w-8 text-white/25" aria-hidden />
            </div>
            <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Property &amp; access</p>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">Gated entrance from the road</h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/48">
              The reserve is reached through a <strong className="font-medium text-white/75">main entrance gate</strong> off the road. For visitors, that is peace of mind: children, vehicles, and gear sit inside a controlled perimeter. For an owner, it is non-negotiable estate logic. For an agent, it is a line on the fact sheet that answers the first security question before it is asked.
            </p>
          </div>
        </div>
      </section>

      {/* Three lenses */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <p className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Same roof, three ways of reading it</p>
          <h2 className="mt-3 text-center font-sans text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Solo, squad, or family: the layout still works</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <User className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Solo hunter</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                One chalet, five beds worth of space for one person: room for rifle case, boots, and the mental clutter that thicket hunting unpacks. The main house stays social when you want company; the chalet stays yours when you do not.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <UsersRound className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Group hunt</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                Spread across identical units so nobody argues over floor plans. Debrief at the bar, compare notes at the boma, and keep PH logistics sane because the camp has obvious meeting points and predictable rooming.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              <HeartHandshake className="h-7 w-7 text-burnished-copper/75" aria-hidden />
              <h3 className="mt-5 font-sans text-lg font-semibold">Family &amp; friends</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/42">
                Pool and lapa carry the midday for kids. The boma carries the memory. Parents still get en-suite privacy. Friends can book multiple chalets and treat the main house as shared living without stepping on bedtime routines.
              </p>
            </div>
          </div>
          <blockquote className="mx-auto mt-14 max-w-3xl border-l-2 border-burnished-copper/55 py-1 pl-6 font-serif text-lg leading-relaxed text-white/65 md:text-xl">
            If you are the owner sitting with your developer: this page is your inventory in plain language. When your photography lands, swap the placeholders and the words can stay. Good estates are specific. Great ones are specific and warm.
          </blockquote>
        </div>
      </section>

      {/* Practical */}
      <section className="border-t border-white/[0.07] bg-neutral-950 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <UtensilsCrossed className="h-8 w-8 text-burnished-copper/80" aria-hidden />
              <h2 className="mt-4 font-sans text-xl font-semibold sm:text-2xl">Media &amp; practicals</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/42">
                Film and editorial crews: mention crew size and gear in your enquiry so we can plan vehicle access and quiet hours around the pool, boma, and main house without surprising other guests.
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm leading-relaxed text-white/38">
                <li>Limpopo: cool dawns, strong midday sun, jacket at the boma.</li>
                <li>Soft bags beat rigid cases in camp transfers.</li>
                <li>Power for CPAP or cameras: tell us before arrival.</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
              <Pic seed="vplodgeevening" alt="Lodge at dusk" className="aspect-[16/10] w-full object-cover" />
              <p className="border-t border-white/[0.06] bg-black/80 px-4 py-3 font-sans text-[11px] text-white/40">
                Placeholder: golden-hour lodge mood shot for marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-16 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8 md:px-12">
          <div>
            <h2 className="font-sans text-xl font-semibold sm:text-2xl">Hold your dates</h2>
            <p className="mt-2 max-w-lg font-sans text-sm text-white/45">
              Chalet count and capacity are fixed at four units and twenty guests. Enquire with group size and we map rooming to the actual layout.
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
