import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Compass, Globe, Target, Users, Sun } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import HuntBookingPanel from "@/components/reserve/HuntBookingPanel";

export const metadata: Metadata = {
  title: "Book Your Hunt | Vaalpenskraal Game Reserve",
  description:
    "Plan your Waterberg hunt at Vaalpenskraal: solo and group safaris, first-time and seasoned hunters, plains game and dangerous game, international guests, and what to expect from arrival to fireside.",
};

const STEPS = [
  {
    n: "01",
    title: "Tell us who is travelling",
    body: "Solo hunter, father and son, corporate group, or friends who have shared a campfire for twenty years. Group size shapes vehicle use, PH time, and how we pace each day on the property.",
  },
  {
    n: "02",
    title: "Choose your window",
    body: "Season, moon, and rut all whisper different advice. We help you read the calendar against the species you care about, without promising a zoo.",
  },
  {
    n: "03",
    title: "Match quarry to the land",
    body: "Twenty-three quarry species on the estate. We align wish lists with census, ethics, and the kind of walking your legs are ready for.",
  },
  {
    n: "04",
    title: "Confirm the practicals",
    body: "Rifle hire or your own rifle (your licences and imports are your job), dangerous-game minimums where applicable, and realistic talk about fitness and heat.",
  },
];

export default function ReservePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        eyebrow="The Hunt"
        title="Reserve your place in the Waterberg"
        subtitle="This is where the brochure ends and the bush begins. Tell us your story, your dates, and the animals you dream about. We answer with honesty, quota, and a plan that respects the land."
        imageSeed="reservehero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section id="book-hunt" className="scroll-mt-24 border-b border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="editorial-container">
          <HuntBookingPanel />
        </div>
      </section>

      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Who walks with us</p>
              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Every hunter has a different first day</h2>
            </div>
            <div className="space-y-8 font-sans text-base leading-relaxed text-white/50 lg:col-span-7">
              <p>
                <strong className="font-medium text-white/80">First time on a game farm?</strong> You are not behind. We slow the clock: how we move in thick bush, when the safety stays on, what the PH is watching that you have not learned to see yet. Questions are part of the hunt, not an interruption.
              </p>
              <p>
                <strong className="font-medium text-white/80">Seasoned on four continents?</strong> Good. The Waterberg thicket will still humiliate a rushed stalk. We trade ego for wind, and distance for a clean angle. You get technical fieldcraft, not a parade lap.
              </p>
              <p>
                <strong className="font-medium text-white/80">South African hunters?</strong> You already know how weekends in Limpopo feel. We match that with straight talk on quota, venison, and realistic pacing, same rigour we give international guests flying in for a once-in-a-lifetime trip.
              </p>
              <p>
                <strong className="font-medium text-white/80">Flying in from abroad?</strong> Plan flights to Johannesburg, road time into the Waterberg, estate rifle hire or your own firearm (you handle temp import and export with your agent), and the jet-lag day nobody posts on Instagram. We focus on the hunt and camp, not your government forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.07] py-20 md:py-28">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">How booking works</p>
          <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">From first email to first light on the mountain</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] md:p-8"
              >
                <span className="font-sans text-[11px] font-medium tabular-nums tracking-[0.25em] text-burnished-copper/85">{s.n}</span>
                <h3 className="mt-4 font-sans text-lg font-semibold text-white/92">{s.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/48">{s.body}</p>
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
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/48">
                  Dawn in the cold air, coffee that tastes better than at home, then miles of decisions: glass, wind, wait. Midday rest and honest food. Late afternoon until the light fails. Fire, stars, stories that outlast the wood.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="mt-1 h-8 w-8 shrink-0 text-burnished-copper/80" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold">Groups &amp; bonds</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/48">
                  Mates trips, parent and child, or a single hunter who wants silence. We structure the day so everyone has a role: glass, carry, listen. The boma does not care about your title in the city.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="mt-1 h-8 w-8 shrink-0 text-burnished-copper/80" aria-hidden />
              <div>
                <h3 className="font-sans text-lg font-semibold">International guests</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/48">
                  Trophy shipping, temporary import permits, and export from South Africa sit with you and your professional agent. Vaalpenskraal does not process that paperwork. Book timelines with your dip-and-pack or clearing agent so trophies are not stuck because the camp does not file on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">Packages</p>
              <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight">Length of stay, not a catalogue of guarantees</h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-white/48">
                Most hunters book multi-day safaris so the bush can teach what a single rushed morning cannot. Dangerous-game pursuits follow South African legal minima and professional judgement. Exact fees and availability change with season and census: the enquiry form is how we give you a number that means something.
              </p>
              <ul className="mt-8 space-y-3 font-sans text-sm text-white/55">
                <li className="flex gap-3">
                  <Sun className="mt-0.5 h-4 w-4 shrink-0 text-burnished-copper/70" />
                  Short intensives for locals with limited leave
                </li>
                <li className="flex gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-burnished-copper/70" />
                  Classic plains-game weeks with mixed species
                </li>
                <li className="flex gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-burnished-copper/70" />
                  Add-on dangerous-game blocks where the estate plan allows
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10">
              <h3 className="font-sans text-lg font-semibold text-white/90">What to mention in your enquiry</h3>
              <ul className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-white/45">
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
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                Open the booking form
                <ChevronRight className="h-4 w-4 opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#070707] py-20 md:py-28">
        <div className="editorial-container text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">The mountain does not read your itinerary</h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/45">
              We control preparation, ethics, and effort. We do not control weather, animal mood, or the lesson the bush chooses to teach. That honesty is why hunters come back.
            </p>
            <Link
              href="/species"
              className="mt-10 inline-flex items-center gap-1.5 font-sans text-sm text-white/50 transition-colors hover:text-white"
            >
              Browse quarry species
              <ChevronRight className="h-4 w-4 opacity-60" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
