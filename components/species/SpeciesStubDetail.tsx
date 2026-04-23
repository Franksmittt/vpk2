import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { QuarrySpecies } from "@/data/species";
import { speciesImageUrl } from "@/lib/species-media";

const SpeciesStubDetail = ({ species: s }: { species: QuarrySpecies }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={speciesImageUrl(s.imageSeed, 1920, 900)}
            alt={`${s.name} (${s.scientific}) stub profile hero on the Vaalpenskraal quarry roster`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-black/22" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/62 via-black/28 to-black/16"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:px-12 md:py-28">
          <div className="w-2/3 min-w-0 max-w-full pr-1 sm:pr-2">
            <p className="hero-readable-eyebrow font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/85">
              {s.epithet}
            </p>
            <h1 className="hero-readable-title mt-4 font-sans text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-6xl">
              {s.name}
            </h1>
            <p className="mt-3 font-serif text-lg italic text-white/70">{s.scientific}</p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">Caliber</dt>
                <dd className="mt-2 font-sans text-sm text-white/85">{s.caliber}</dd>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">
                  Rowland Ward
                </dt>
                <dd className="mt-2 font-sans text-sm text-white/85">{s.rowlandWard}</dd>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/65">Terrain</dt>
                <dd className="mt-2 font-sans text-sm text-white/85">{s.terrain}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="sticky top-20 z-[90] border-b border-white/[0.08] bg-black/90 backdrop-blur-md md:top-24">
        <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 sm:px-8 md:px-12">
          <Link
            href="/species"
            className="focus-ring-invert inline-flex items-center gap-2 font-sans text-sm text-white/80 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            All species
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-tight">Full hunting monograph</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/70">
          We are publishing deep species guides one animal at a time: biology, fieldcraft, ballistics,
          and camp culture. The Greater Kudu guide is live now. This species page will expand with the
          same depth soon.
        </p>
        <div className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/species/greater-kudu"
            className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-center font-sans text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Read the kudu guide
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/reserve"
            className="focus-ring-invert inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto"
          >
            Enquire to hunt {s.name}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SpeciesStubDetail;
