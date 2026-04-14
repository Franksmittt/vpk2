import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Compass, Globe, Target, Users, Sun } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import HuntBookingPanel from "@/components/reserve/HuntBookingPanel";
import { siteUrl } from "@/lib/site";

const RESERVE_BOOK_HUNT_URL = siteUrl("/reserve#book-hunt");

const RESERVE_BOOKING_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  name: "Enquire to book a hunt at Vaalpenskraal Game Reserve",
  description:
    "Submit a hunt enquiry with preferred dates, party size, and species focus. Vaalpenskraal replies with quota, next steps, and realistic planning for the Waterberg estate.",
  target: {
    "@type": "EntryPoint",
    url: RESERVE_BOOK_HUNT_URL,
  },
};

export const metadata: Metadata = {
  title: "Book Your Hunt | Vaalpenskraal Game Reserve",
  description:
    "Waterberg dates. Solo or squad. First stalk or fiftieth. Plains and DG where the plan allows. Tell us who travels and what species owns your sleep.",
};

const STEPS = [
  {
    n: "01",
    title: "Who travels",
    body: "Solo, father and son, corporate, old mates. Headcount sets vehicles, PH hours, and how hard we push the thicket.",
  },
  {
    n: "02",
    title: "Your window",
    body: "Season, moon, rut: we read the calendar with you. No zoo promises.",
  },
  {
    n: "03",
    title: "Quarry on iron soil",
    body: "Twenty-three species on the roster. Wish list meets census, ethics, and the legs you actually brought.",
  },
  {
    n: "04",
    title: "Hard facts",
    body: "Own rifle or hire. Licences and temp import: yours. DG rules where they apply. Heat and fitness: spoken out loud.",
  },
];

const ReservePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="reserve-hero-title"
        scrollLinkedTypography
        eyebrow="The Hunt"
        title="Hold a week on the Iron Mountain."
        subtitle="Brochure stops here. Send dates, party, species in order. We reply with quota, silence where the land says no, and a stalk rhythm that fits the heat."
        imageSeed="reservehero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section id="book-hunt" className="scroll-mt-24 border-b border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="editorial-container">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(RESERVE_BOOKING_JSON_LD) }}
          />
          <HuntBookingPanel />
        </div>
      </section>

      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <div className="max-w-xl [perspective:1400px] lg:col-span-5">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Who walks with us</p>
              <h2 className="vp-scroll-reveal-type mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Same dawn, different boots</h2>
            </div>
            <div className="space-y-8 font-sans text-base leading-relaxed text-white/70 lg:col-span-7">
              <p>
                <strong className="font-medium text-white/80">First farm hunt?</strong> We slow the clock: foot placement, safety arc, what the PH sees before you do. Ask anything. That is the work.
              </p>
              <p>
                <strong className="font-medium text-white/80">Seasoned elsewhere?</strong> The Waterberg still punishes hurry. Wind first. Angle second. Ego stays in the bakkie.
              </p>
              <p>
                <strong className="font-medium text-white/80">Local weekends?</strong> You know Limpopo light. We match it with blunt quota talk and pacing that respects the freezer and the veld.
              </p>
              <p>
                <strong className="font-medium text-white/80">Overseas?</strong> JHB, then gravel. Jet lag is a hunting hazard: we say so. Rifle import and trophy export sit with you and your agent. We run camp and field, not Home Affairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">How booking works</p>
          <h2 className="vp-scroll-reveal-type mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl [perspective:1400px]">
            From first email to copper ridgelines
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] md:p-8 lg:col-span-6"
              >
                <span className="font-sans text-[11px] font-medium tabular-nums tracking-[0.25em] text-burnished-copper/85">{s.n}</span>
                <h3 className="mt-4 font-sans text-lg font-semibold text-white/92">{s.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex gap-4">
              <Compass className="mt-1 h-8 w-8 shrink-0 text-burnished-copper/80" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold">Typical rhythm</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                  Cold dawn coffee. Glass, wind, wait. Midday stillness and food that tastes earned. Last light until the bush wins. Fire. Elite silence overhead.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="mt-1 h-8 w-8 shrink-0 text-burnished-copper/80" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold">Groups &amp; bonds</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                  Mates, parent and child, or one guest who wants rolling plains without chatter. Everyone carries glass or patience. The boma forgets your title.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="mt-1 h-8 w-8 shrink-0 text-burnished-copper/80" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold">International guests</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                  Dip, pack, ship: your agent, your timeline. We do not touch import or export files. We keep the hunt clean so their paperwork stays honest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Packages</p>
              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight">Stay long enough for the veld to speak</h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/70">
                One dawn teaches little. Multi-day weeks let thicket and heat do their job. DG follows law and PH judgement. Fees move with season and census: the form is where numbers turn real.
              </p>
              <ul className="mt-8 space-y-3 font-sans text-sm text-white/70">
                <li className="flex gap-3">
                  <Sun className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/70" aria-hidden />
                  Short intensives for locals with limited leave
                </li>
                <li className="flex gap-3">
                  <Target className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/70" aria-hidden />
                  Classic plains-game weeks with mixed species
                </li>
                <li className="flex gap-3">
                  <Target className="mt-1 h-4 w-4 shrink-0 text-burnished-copper/70" aria-hidden />
                  Add-on dangerous-game blocks where the estate plan allows
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10 lg:col-span-5">
              <h3 className="font-sans text-lg font-semibold text-white/90">What to mention in your enquiry</h3>
              <ul className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-white/70">
                <li>Approximate dates and flexibility</li>
                <li>Number of hunters and non-hunters</li>
                <li>Species that matter most, in order</li>
                <li>First hunt or many seasons of experience</li>
                <li>Rifle plans: own, hire, or undecided (your temp import is your arrangement)</li>
                <li>Any mobility or dietary needs we should plan for</li>
                <li>Your own trophy export / dip-and-pack agent if applicable (the estate does not process that paperwork)</li>
              </ul>
              <Link
                href="/reserve#book-hunt"
                className="focus-ring-invert mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                Open the booking form
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#070707] py-20 md:py-28">
        <div className="editorial-container text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">The mountain ignores your PDF</h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/70">
              We own prep, ethics, sweat. Weather, animal mood, jagged horizons: not ours to command. That blunt respect is why people return.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/species"
                className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                Browse quarry species
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
              <Link
                href="/contact?intent=hunt"
                className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-white"
              >
                Contact the hunt desk
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;
