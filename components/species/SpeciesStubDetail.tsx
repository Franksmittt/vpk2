import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { QuarrySpecies } from "@/data/species";
import { speciesImageUrl } from "@/lib/species-media";

export default function SpeciesStubDetail({ species: s }: { species: QuarrySpecies }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 sm:px-8 md:px-12">
          <Link
            href="/species"
            className="inline-flex items-center gap-1 font-sans text-sm text-white/50 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            All species
          </Link>
        </div>
      </div>

      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={speciesImageUrl(s.imageSeed, 1920, 900)}
            alt=""
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:px-12 md:py-28">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/85">
            {s.epithet}
          </p>
          <h1 className="mt-4 font-sans text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-6xl">
            {s.name}
          </h1>
          <p className="mt-3 font-serif text-lg italic text-white/45">{s.scientific}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">Caliber</dt>
              <dd className="mt-2 font-sans text-sm text-white/85">{s.caliber}</dd>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
                Rowland Ward
              </dt>
              <dd className="mt-2 font-sans text-sm text-white/85">{s.rowlandWard}</dd>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <dt className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">Terrain</dt>
              <dd className="mt-2 font-sans text-sm text-white/85">{s.terrain}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <h2 className="font-sans text-2xl font-semibold tracking-tight">Full hunting monograph</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-white/50">
          We are publishing deep species guides one animal at a time: biology, fieldcraft, ballistics,
          and camp culture. The Greater Kudu guide is live now. This species page will expand with the
          same depth soon.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/species/greater-kudu"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Read the kudu guide
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            href="/reserve"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Enquire to hunt {s.name}
          </Link>
        </div>
      </section>
    </div>
  );
}
