import Image from "next/image";

const lanes = [
  {
    tag: "First stalk",
    title: "First farm hunt?",
    body: "We slow the clock on foot placement, safety arc, what the PH sees before you do. Ask anything. That is the work.",
    src: "/images/home/solitary-tracker.png",
    alt: "Hunter moving alone through dense Waterberg thicket",
  },
  {
    tag: "Seasoned",
    title: "Been elsewhere?",
    body: "The Waterberg still punishes hurry. Wind first. Angle second. Ego stays in the bakkie.",
    src: "/images/hero/hero-encounter.png",
    alt: "Professional hunter and guest glassing at first light",
  },
  {
    tag: "Local",
    title: "Limpopo weekends?",
    body: "You know the light. We match it with blunt quota talk and pacing that respects the freezer and the veld.",
    src: "/images/home/quarry-kudu.png",
    alt: "Greater kudu in bushveld, quarry context on the estate",
  },
  {
    tag: "Global",
    title: "Overseas flight?",
    body: "JHB, then gravel. Jet lag is a hunting hazard, and we say so. Import and export sit with you and your agent. We run camp and field, not Home Affairs.",
    src: "/images/lodge/brochure-vista.jpg",
    alt: "Wide vista over Waterberg bush from the lodge outlook",
  },
] as const;

const HuntAudienceImmersion = () => {
  return (
    <section className="border-b border-white/[0.07] py-20 md:py-28">
      <div className="editorial-container">
        <div className="max-w-2xl [perspective:1400px]">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Who walks with us</p>
          <h2 className="vp-scroll-reveal-type mt-4 font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.5rem]">
            Same dawn, different boots
          </h2>
          <p className="vp-scroll-root-line mt-5 font-sans text-base leading-relaxed text-white/65">
            Pick the lane that sounds like your passport and your nerves. The veld still reads everyone the same.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {lanes.map((lane) => (
            <article
              key={lane.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.05] transition-colors hover:border-burnished-copper/25"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={lane.src}
                  alt={lane.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <p className="absolute bottom-4 left-4 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-burnished-copper/90">
                  {lane.tag}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-white/95">{lane.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/65">{lane.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HuntAudienceImmersion;
