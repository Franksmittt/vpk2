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
    src: "/images/lodge/brochure-game.jpg",
    alt: "Guests and guide at a safari vehicle on the estate, scanning for game",
    cap: "Shared miles",
    text: "Bakkie corridors, glass up, quiet jokes that end when the wind changes. Groups still move as one muzzle line.",
  },
  {
    n: "03",
    src: "/images/lodge/spec-permit.jpg",
    alt: "Permit and field paperwork reference materials on a lodge desk",
    cap: "Rifles and paperwork",
    text: "Own licensed rifle or hire from the estate when management confirms availability and terms. Temporary import, for example SAPS 520, and licences stay with you and your own agents. We keep the hunt honest, and your stack stays yours.",
  },
] as const;

const HuntFieldImmersion = () => {
  return (
    <section className="border-b border-white/[0.07] bg-black">
      <div className="editorial-container py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center [perspective:1400px] lg:max-w-4xl">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">In the field</p>
          <h2 className="vp-scroll-reveal-type mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.5rem]">
            Solo glass, shared miles, clean muzzle discipline
          </h2>
          <div className="mx-auto mt-8 max-w-2xl border-t border-burnished-copper/30 pt-8">
            <p className="font-sans text-base leading-relaxed text-white/70 md:text-[1.05rem]">
              Fair-chase means feet on soil, not a conveyor. You will walk until your boots tell the truth. When the day needs wheels, we still treat every exit from the cab like a fresh safety brief.
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-white/65 md:text-[1.05rem]">
              Cold room, slaughter, and hide salting sit on the estate side of the line. Trophy export, dip-and-pack, and home-country import stay with the agents you appoint. Say their names early so handover timing never fights your flight.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {strips.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={p.n}
              className="grid border-t border-white/[0.06] md:grid-cols-2 md:items-stretch"
            >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 md:bg-gradient-to-r md:from-black/45 md:via-transparent md:to-transparent" aria-hidden />
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
