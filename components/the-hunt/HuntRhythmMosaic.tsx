import Image from "next/image";
import { Compass, Globe, Users } from "lucide-react";

const tiles = [
  {
    icon: Compass,
    title: "Typical rhythm",
    body: "Cold dawn coffee. Glass, wind, wait. Midday stillness and food that tastes earned. Last light until the bush wins. Fire. Stars without city noise.",
    src: "/images/lodge/lodge-boma.jpg",
    alt: "Evening boma fire and camp silhouettes at Vaalpenskraal",
  },
  {
    icon: Users,
    title: "Groups and bonds",
    body: "Mates, parent and child, or one guest who wants rolling plains without chatter. Everyone carries glass or patience. The boma forgets your title.",
    src: "/images/home/brotherhood-bento.png",
    alt: "Hunters together on the estate in shared field time",
  },
  {
    icon: Globe,
    title: "International guests",
    body: "Dip, pack, and ship stay with your agent and your timeline. We do not touch import or export files. We keep the hunt clean so their paperwork stays honest.",
    src: "/images/lodge/brochure-pool.jpg",
    alt: "Lodge pool and thatch chalets in the Waterberg bushveld",
  },
] as const;

const HuntRhythmMosaic = () => {
  return (
    <section className="border-b border-white/[0.07] py-20 md:py-28">
      <div className="editorial-container">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Camp pulse</p>
        <h2 className="vp-scroll-reveal-type mt-4 max-w-2xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
          When the rifle goes quiet, the week keeps teaching
        </h2>
      </div>
      <div className="editorial-container mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
        {tiles.map((t) => {
          const Icon = t.icon;
          return (
            <article
              key={t.title}
              className="group relative min-h-[min(52vh,420px)] overflow-hidden rounded-2xl border border-white/[0.08] ring-1 ring-white/[0.05] md:min-h-[min(48vh,520px)]"
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <Icon className="h-8 w-8 text-burnished-copper/85" aria-hidden />
                <h3 className="mt-4 font-sans text-xl font-semibold tracking-tight text-white md:text-2xl">{t.title}</h3>
                <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-white/75 md:text-base">{t.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default HuntRhythmMosaic;
