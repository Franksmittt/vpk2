import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { QuarrySpecies } from "@/data/species";
import { QUARRY_SPECIES } from "@/data/species";
import { quarrySpeciesImageSrc } from "@/lib/species-media";

/** Editorial picks only. Full roster is census-driven (see `/species`). */
const TOP_QUARRY_IDS = ["greater-kudu", "cape-buffalo", "impala", "nyala", "gemsbok", "sable-antelope"] as const;

function topQuarrySpecies(): QuarrySpecies[] {
  return TOP_QUARRY_IDS.map((id) => QUARRY_SPECIES.find((s) => s.id === id)).filter((s): s is QuarrySpecies => Boolean(s));
}

const HuntQuarryStrip = () => {
  const picks = topQuarrySpecies();

  return (
    <section className="border-b border-white/[0.07] bg-[#050505] py-16 md:py-24">
      <div className="editorial-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">Quarry</p>
            <h2 className="vp-scroll-reveal-type mt-3 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">Top picks on the roster</h2>
            <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
              Twenty-two species when the census says yes. Scroll the strip, then open a profile for calibre notes and terrain truth.
            </p>
          </div>
          <Link
            href="/species"
            className="focus-ring-invert inline-flex shrink-0 items-center gap-2 self-start font-sans text-sm text-white/70 transition-colors hover:text-white md:self-auto"
          >
            Full quarry index
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
        </div>

        <ul
          className="mt-10 flex snap-x snap-mandatory list-none gap-4 overflow-x-auto pb-2 pl-0 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-12 md:gap-5 [&::-webkit-scrollbar]:hidden"
          aria-label="Featured quarry species"
        >
          {picks.map((s) => {
            const src = quarrySpeciesImageSrc(s, 640, 640);
            return (
              <li key={s.id} className="shrink-0 snap-start">
                <Link
                  href={`/species/${s.id}`}
                  className="focus-ring-invert group relative block w-[min(78vw,280px)] overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 ring-1 ring-white/[0.05] sm:w-[240px] md:w-[260px]"
                >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${s.name}, quarry species at Vaalpenskraal`}
                    fill
                    sizes="(max-width: 768px) 78vw, 260px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">{s.epithet}</p>
                    <p className="mt-1 font-sans text-lg font-semibold tracking-tight text-white">{s.name}</p>
                    <p className="mt-1 inline-flex items-center gap-1 font-sans text-[11px] font-medium text-white/70">
                      Field sheet
                      <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />
                    </p>
                  </div>
                </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HuntQuarryStrip;
