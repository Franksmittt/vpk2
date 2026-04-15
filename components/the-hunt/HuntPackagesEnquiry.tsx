import Link from "next/link";
import { ChevronRight, Sun, Target } from "lucide-react";

const HuntPackagesEnquiry = () => {
  return (
    <section className="border-b border-white/[0.07] bg-neutral-950 py-20 md:py-28">
      <div className="editorial-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <div className="flex min-h-0 flex-col lg:col-span-7">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Packages</p>
            <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl">Stay long enough for the veld to speak</h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/70 md:text-lg">
              One dawn teaches little. Multi-day weeks let thicket and heat do their job. DG follows law and PH judgement. Fees move with season and census. The form is where numbers turn real.
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/70 md:text-lg">
              A classic week still reads like chapters. Cold stalk blocks, midday stillness when animals go to shade, last light that rewards patience. We build the day around honest legs and honest quarry, not a checklist sprint.
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/70 md:text-lg">
              The roster stays census-driven. Availability is ecology and quota, not a printed menu promise. When you name species in order, we answer with what the veld can carry that season, then translate it into days on the ground.
            </p>
            <ul className="mt-8 space-y-3 font-sans text-sm text-white/70 md:text-base">
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
          <div className="flex min-h-0 flex-col lg:col-span-5">
            <div className="flex flex-1 flex-col rounded-2xl border border-burnished-copper/20 bg-gradient-to-br from-burnished-copper/[0.07] via-white/[0.03] to-transparent p-8 shadow-[0_24px_80px_rgb(0_0_0/0.35)] md:p-10">
              <h3 className="font-sans text-lg font-semibold text-white/95 md:text-xl">What to mention in your enquiry</h3>
              <ul className="mt-6 flex-1 space-y-3 font-sans text-sm leading-relaxed text-white/70 md:text-[0.95rem]">
                <li>Approximate dates and flexibility</li>
                <li>Number of hunters and non-hunters</li>
                <li>Species that matter most, in order</li>
                <li>First hunt or many seasons of experience</li>
                <li>Rifle plans include own, hire, or undecided (your temp import is your arrangement)</li>
                <li>Any mobility or dietary needs we should plan for</li>
                <li>Your own trophy export / dip-and-pack agent if applicable (the estate does not process that paperwork)</li>
              </ul>
              <Link
                href="/reserve#book-hunt"
                className="focus-ring-invert mt-10 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90 sm:w-auto lg:mt-auto"
              >
                Open the booking form
                <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HuntPackagesEnquiry;
