import Image from "next/image";

const strips = [
  {
    n: "01",
    src: "/images/home/solitary-tracker.png",
    alt: "Hunter on foot in thick Waterberg bush, low profile stalk",
    cap: "Solo stalk",
    text: "Distance collapses to metres. The PH reads thicket the way you read weather at home.",
  },
  {
    n: "02",
    src: "/images/the-hunt/hunt-field-shared-miles.jpg",
    alt: "Guests and guide at a safari vehicle on the estate, scanning for game",
    cap: "Shared miles",
    text: "Bakkie corridors, glass up, quiet jokes that end when the wind changes. Groups still move as one muzzle line.",
  },
  {
    n: "03",
    src: "/images/the-hunt/hunt-field-rifles-paperwork.jpg",
    alt: "Rifle and paperwork preparation for a Waterberg hunt at Vaalpenskraal",
    cap: "Rifles and paperwork",
    text: "Own licensed rifle or hire from the estate when management confirms availability and terms. Temporary import, for example SAPS 520, and licences stay with you and your own agents. We keep the hunt honest, and your stack stays yours.",
  },
] as const;

const fieldIntroEyebrow = "In the field";
const fieldIntroTitle = "Solo glass, shared miles, clean muzzle discipline";
const fieldIntroP1 =
  "Fair-chase means feet on soil, not a conveyor. You will walk until your boots tell the truth. When the day needs wheels, we still treat every exit from the cab like a fresh safety brief.";
const fieldIntroP2 =
  "Cold room, slaughter, and hide salting sit on the estate side of the line. Trophy export, dip-and-pack, and home-country import stay with the agents you appoint. Say their names early so handover timing never fights your flight.";

/** Intro: split rail (eyebrow + serif title | body copy). Below: alternating image strips. */
const HuntFieldImmersion = () => {
  return (
    <section className="border-b border-white/[0.07] bg-black" aria-labelledby="hunt-field-intro-heading">
      <div className="border-b border-white/[0.07]">
        <div className="editorial-container py-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-4 lg:border-r lg:border-white/[0.1] lg:pr-12">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/85">{fieldIntroEyebrow}</p>
              <h2
                id="hunt-field-intro-heading"
                className="vp-scroll-reveal-type mt-4 font-serif text-[clamp(1.65rem,3.5vw,2.35rem)] font-medium leading-[1.12] tracking-[-0.02em] text-canvas-cream"
              >
                {fieldIntroTitle}
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-8">
              <p className="font-sans text-base leading-relaxed text-white/72 md:text-[1.05rem]">{fieldIntroP1}</p>
              <p className="border-l-2 border-burnished-copper/40 pl-5 font-sans text-base leading-relaxed text-white/68 md:pl-6 md:text-[1.05rem]">
                {fieldIntroP2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {strips.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={p.n} className="grid border-t border-white/[0.06] md:grid-cols-2 md:items-stretch">
              <div
                className={`relative min-h-[min(52vh,420px)] w-full md:min-h-[380px] lg:min-h-[min(44vh,520px)] ${reverse ? "md:order-2" : "md:order-1"}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 md:bg-gradient-to-r md:from-black/45 md:via-transparent md:to-transparent"
                  aria-hidden
                />
              </div>
              <div
                className={`flex flex-col justify-center bg-[#070707] px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16 ${reverse ? "md:order-1" : "md:order-2"}`}
              >
                <span className="font-sans text-[11px] font-medium tabular-nums tracking-[0.35em] text-burnished-copper/80">{p.n}</span>
                <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.28em] text-white/50">{p.cap}</p>
                <p className="mt-4 max-w-md font-sans text-lg font-medium leading-snug tracking-tight text-white/92 md:text-xl">{p.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HuntFieldImmersion;
