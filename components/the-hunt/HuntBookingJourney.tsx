import Image from "next/image";
import { HUNT_PLANNING_STEPS } from "@/data/hunt-planning";

const stepImage: Record<string, string> = {
  "01": "/images/home/solitary-tracker.png",
  "02": "/images/lodge/brochure-night.jpg",
  "03": "/images/species/iron-mountain-quarry-hero.png",
  "04": "/images/lodge/spec-permit.jpg",
};

const HuntBookingJourney = () => {
  return (
    <section className="border-b border-white/[0.07] bg-[#050505] py-20 md:py-28">
      <div className="editorial-container">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">How booking works</p>
        <h2 className="vp-scroll-reveal-type mt-4 max-w-3xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.5rem]">
          From first email to copper ridgelines
        </h2>
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/65">
          Four beats. No slide deck cosplay. Each step changes what we carry in the field.
        </p>

        <div className="mt-16 flex flex-col gap-12 md:gap-16 lg:mt-20">
          {HUNT_PLANNING_STEPS.map((s, i) => {
            const src = stepImage[s.n] ?? "/images/hero/estate-bushveld-wide.png";
            const reverse = i % 2 === 1;
            return (
              <div key={s.n} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={`relative lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/[0.08] ring-1 ring-white/[0.05]">
                    <Image
                      src={src}
                      alt={`${s.title} for Vaalpenskraal hunt planning context`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" aria-hidden />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="font-sans text-[11px] font-medium tabular-nums tracking-[0.3em] text-burnished-copper/85">{s.n}</span>
                  <h3 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-white md:text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-white/70">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HuntBookingJourney;
