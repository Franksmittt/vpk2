"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  GitCompare,
  X,
  Crosshair,
  Mountain,
} from "lucide-react";
import { QUARRY_SPECIES, type QuarrySpecies } from "@/data/species";
import {
  GREATER_KUDU_QUARRY_PAGE_IMAGE,
  SPECIES_PAGE_HERO_IMAGE,
  quarrySpeciesImageSrc,
} from "@/lib/species-media";

function SpecCard({
  s,
  comparePick,
  onToggleCompare,
  onOpenDetail,
  pickingCompare,
  index,
}: {
  s: QuarrySpecies;
  comparePick: boolean;
  onToggleCompare: () => void;
  onOpenDetail: () => void;
  pickingCompare: boolean;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4) }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-neutral-950 ring-1 ring-white/[0.08] transition-shadow ${
        pickingCompare && comparePick ? "ring-2 ring-burnished-copper/70 shadow-[0_0_40px_rgba(184,115,51,0.15)]" : ""
      } ${pickingCompare ? "cursor-pointer" : ""}`}
      onClick={pickingCompare ? onToggleCompare : undefined}
    >
      <Link
        href={`/species/${s.id}`}
        onClick={(e) => {
          if (pickingCompare) {
            e.preventDefault();
            onToggleCompare();
          }
        }}
        className="relative block aspect-[4/5] overflow-hidden sm:aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-burnished-copper/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <img
          src={quarrySpeciesImageSrc(s, 800, 1000)}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-black/50 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            {s.epithet}
          </span>
          {s.dangerous && (
            <span className="rounded-full border border-red-500/40 bg-red-950/50 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-red-200/90">
              DG
            </span>
          )}
          {s.variant && (
            <span className="rounded-full border border-burnished-copper/35 bg-burnished-copper/15 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-sunset-gold">
              Variant
            </span>
          )}
        </div>
        {!pickingCompare && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare();
            }}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            aria-label={comparePick ? "Remove from compare" : "Add to compare"}
          >
            <GitCompare className={`h-4 w-4 ${comparePick ? "text-burnished-copper" : ""}`} />
          </button>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link
          href={`/species/${s.id}`}
          onClick={(e) => {
            if (pickingCompare) {
              e.preventDefault();
              onToggleCompare();
            }
          }}
          className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-burnished-copper/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          <h2 className="font-sans text-xl font-semibold tracking-[-0.02em] text-white transition-colors group-hover:text-burnished-copper/95 sm:text-2xl">
            {s.name}
          </h2>
          <p className="mt-1 font-serif text-sm italic text-white/45">{s.scientific}</p>
        </Link>

        <dl className="mt-5 grid gap-3 text-sm">
          <div className="flex justify-between gap-4 border-b border-white/[0.06] pb-2">
            <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Caliber
            </dt>
            <dd className="text-right font-sans text-xs font-medium text-white/75">{s.caliber}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-white/[0.06] pb-2">
            <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Rowland Ward
            </dt>
            <dd className="text-right font-sans text-xs font-medium text-white/75">{s.rowlandWard}</dd>
          </div>
          <div className="flex justify-between gap-4 pb-1">
            <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Terrain
            </dt>
            <dd className="text-right font-sans text-xs font-medium text-white/75">{s.terrain}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail();
            }}
            className="inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
          >
            View details
            <ChevronRight className="h-3.5 w-3.5 opacity-70" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function DetailPanel({
  s,
  onClose,
}: {
  s: QuarrySpecies;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[3000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close overlay"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="absolute inset-x-0 bottom-0 max-h-[min(92vh,880px)] overflow-y-auto rounded-t-[1.75rem] border border-white/10 bg-[#0a0a0a] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`species-${s.id}-title`}
        onClick={(e) => e.stopPropagation()}
      >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0a0a0a]/95 px-5 py-4 backdrop-blur-md">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
          Quarry sheet
        </p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/15 p-2 text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="relative h-56 w-full sm:h-72">
        <img
          src={quarrySpeciesImageSrc(s, 1600, 900)}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>
      <div className="px-5 pb-10 pt-2 sm:px-8">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-burnished-copper/90">
          {s.epithet}
        </p>
        <h2
          id={`species-${s.id}-title`}
          className="mt-2 font-sans text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl"
        >
          {s.name}
        </h2>
        <p className="mt-2 font-serif text-base italic text-white/45">{s.scientific}</p>
        <p className="mt-6 font-sans text-sm leading-relaxed text-white/50">
          Availability follows our annual ecological census. We do not sell animals off a list. We
          manage carrying capacity, age structure, and stress on the land. Your PH will confirm what
          is ethical and legal for the season you hunt.
        </p>
        <dl className="mt-8 grid gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <div>
            <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/35">Caliber</dt>
            <dd className="mt-1 font-sans text-base text-white/85">{s.caliber}</dd>
          </div>
          <div>
            <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/35">
              Rowland Ward
            </dt>
            <dd className="mt-1 font-sans text-base text-white/85">{s.rowlandWard}</dd>
          </div>
          <div>
            <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/35">Terrain</dt>
            <dd className="mt-1 font-sans text-base text-white/85">{s.terrain}</dd>
          </div>
        </dl>
        <Link
          href={`/species/${s.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 py-3 font-sans text-sm font-medium text-white/80 transition-colors hover:border-white/35 hover:bg-white/5 hover:text-white"
        >
          Full species page
          <ChevronRight className="h-4 w-4" />
        </Link>
        <Link
          href="/reserve"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-sans text-sm font-semibold text-black transition-colors hover:bg-white/90"
        >
          Enquire for this season
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
    </motion.div>
  );
}

function ComparePanel({
  a,
  b,
  onClose,
}: {
  a: QuarrySpecies;
  b: QuarrySpecies;
  onClose: () => void;
}) {
  const rows: { label: string; key: keyof Pick<QuarrySpecies, "caliber" | "rowlandWard" | "terrain" | "scientific" | "epithet"> }[] = [
    { label: "Epithet", key: "epithet" },
    { label: "Scientific", key: "scientific" },
    { label: "Caliber", key: "caliber" },
    { label: "Rowland Ward", key: "rowlandWard" },
    { label: "Terrain", key: "terrain" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[3000] flex flex-col bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Compare species"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="font-sans text-sm font-medium text-white">Side by side</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/15 p-2 text-white/70 hover:bg-white/10"
          aria-label="Close compare"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {[a, b].map((s) => (
            <div key={s.id} className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="relative h-40">
                <img
                  src={quarrySpeciesImageSrc(s, 800, 500)}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-burnished-copper/90">
                    {s.epithet}
                  </p>
                  <p className="font-sans text-lg font-semibold text-white">{s.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-5xl overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-white/[0.06] last:border-0">
                  <th className="w-[28%] px-4 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
                    {row.label}
                  </th>
                  <td className="w-[36%] px-4 py-3 font-sans text-white/80">{a[row.key]}</td>
                  <td className="px-4 py-3 font-sans text-white/80">{b[row.key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpeciesPageContent() {
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [pickingCompare, setPickingCompare] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);

  const byId = useMemo(() => {
    const m = new Map<string, QuarrySpecies>();
    QUARRY_SPECIES.forEach((s) => m.set(s.id, s));
    return m;
  }, []);

  const detailSpecies = detailId ? byId.get(detailId) : undefined;
  const compareA = compareIds[0] ? byId.get(compareIds[0]) : undefined;
  const compareB = compareIds[1] ? byId.get(compareIds[1]) : undefined;

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 2) return [prev[0], id];
      return [...prev, id];
    });
  }, []);

  useEffect(() => {
    const locked = Boolean(detailSpecies || (compareOpen && compareA && compareB));
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [detailSpecies, compareOpen, compareA, compareB]);

  useEffect(() => {
    if (compareIds.length < 2) setCompareOpen(false);
  }, [compareIds.length]);

  useEffect(() => {
    if (pickingCompare && compareIds.length >= 2) {
      setPickingCompare(false);
      setCompareOpen(true);
    }
  }, [pickingCompare, compareIds.length]);

  const startComparePick = () => {
    setCompareIds([]);
    setPickingCompare(true);
    setDetailId(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[min(100svh,920px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SPECIES_PAGE_HERO_IMAGE}
            alt="Iron Mountain bushveld, hunters stalking at a distance (hero)"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(184,115,51,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_45%,rgb(0_0_0/0.1)_0%,rgb(0_0_0/0.4)_55%,rgb(0_0_0/0.7)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[28%] bg-gradient-to-b from-transparent via-black/35 to-black/78" />
        </div>

        <div className="editorial-container relative z-10 flex min-h-[min(100svh,920px)] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 backdrop-blur-md">
              <Mountain className="h-3.5 w-3.5 text-burnished-copper" />
              Iron Mountain quarry
            </div>
            <h1 className="hero-readable-title font-sans text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              Primary species of the Iron Mountain
            </h1>
            <p className="hero-readable-body mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/75 md:text-lg">
              We do not sell animals. We manage an ecosystem. The availability of specific quarry is
              dictated strictly by our annual ecological census, weather, and what the land can carry
              without flinching.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={startComparePick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-sans text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:bg-white/90"
              >
                <GitCompare className="h-4 w-4" />
                Compare species side by side
              </button>
              <a
                href="#grid"
                className="inline-flex items-center justify-center gap-1 font-sans text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <span className="hero-readable-ghost">Browse the quarry</span>
                <ChevronRight className="hero-readable-ui h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky compare bar */}
      <AnimatePresence>
        {(compareIds.length > 0 || pickingCompare) && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="sticky top-20 z-[500] border-b border-white/[0.08] bg-black/90 px-4 py-3 backdrop-blur-xl md:top-24"
          >
            <div className="editorial-container flex flex-wrap items-center justify-between gap-3">
              <p className="font-sans text-xs text-white/50">
                {pickingCompare
                  ? "Tap two species to compare."
                  : `${compareIds.length} selected · max 2`}
              </p>
              <div className="flex flex-wrap gap-2">
                {pickingCompare && (
                  <button
                    type="button"
                    onClick={() => setPickingCompare(false)}
                    className="rounded-full border border-white/15 px-4 py-2 font-sans text-xs font-medium text-white/70 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                )}
                {compareIds.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setCompareIds([]);
                      setCompareOpen(false);
                    }}
                    className="rounded-full border border-white/15 px-4 py-2 font-sans text-xs font-medium text-white/70 hover:bg-white/10"
                  >
                    Clear
                  </button>
                )}
                {compareIds.length === 2 && !pickingCompare && (
                  <button
                    type="button"
                    onClick={() => setCompareOpen(true)}
                    className="rounded-full bg-burnished-copper px-5 py-2 font-sans text-xs font-semibold text-black hover:bg-burnished-copper/90"
                  >
                    View comparison
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="grid" className="editorial-container py-16 md:py-24">
        <div className="mb-12 flex flex-col gap-4 border-b border-white/[0.07] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-white/35">
              {QUARRY_SPECIES.length} species on roster
            </p>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              Pick your exam
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-white/45">
            Each row is a living brief: what rifle ethics look like here, what the tape measures,
            where you will likely intersect the animal.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {QUARRY_SPECIES.map((s, i) => (
            <SpecCard
              key={s.id}
              s={s}
              comparePick={compareIds.includes(s.id)}
              pickingCompare={pickingCompare}
              index={i}
              onToggleCompare={() => toggleCompare(s.id)}
              onOpenDetail={() => setDetailId(s.id)}
            />
          ))}
        </div>
      </section>

      {/* Spotlight: Grey Ghost */}
      <section className="relative border-t border-white/[0.07] bg-[#060606] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:px-12">
          <Link
            href="/species/greater-kudu"
            className="block rounded-[1.5rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-burnished-copper/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060606]"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-white/[0.08] transition-transform duration-500 hover:scale-[1.01] md:aspect-[3/4]"
            >
              <img
                src={GREATER_KUDU_QUARRY_PAGE_IMAGE}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-burnished-copper/10" />
              <Crosshair className="absolute right-6 top-6 h-8 w-8 text-white/25" />
            </motion.div>
          </Link>
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-burnished-copper/85">
              Featured quarry
            </p>
            <Link
              href="/species/greater-kudu"
              className="group mt-4 block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-burnished-copper/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060606]"
            >
              <h2 className="font-sans text-3xl font-semibold leading-tight tracking-[-0.035em] transition-colors group-hover:text-burnished-copper/95 md:text-4xl lg:text-[2.5rem]">
                Greater kudu bull
              </h2>
              <p className="mt-2 font-sans text-xl text-white/50 transition-colors group-hover:text-white/65">
                The Grey Ghost
              </p>
            </Link>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/48">
              Stripes in shade. Horns that pick up last light. A bull can hold motionless until you
              doubt your own eyes, then cover ground in three bounds. On the Iron Mountain, kudu are
              not a consolation prize. They are the graduate course in stillness.
            </p>
            <Link
              href="/reserve"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/10"
            >
              Talk to us about kudu dates
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-12 text-center">
        <Link href="/" className="font-sans text-sm text-white/40 hover:text-white">
          Back to home
        </Link>
      </footer>

      <AnimatePresence mode="wait">
        {detailSpecies && (
          <DetailPanel key={detailSpecies.id} s={detailSpecies} onClose={() => setDetailId(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {compareOpen && compareA && compareB && (
          <ComparePanel
            a={compareA}
            b={compareB}
            onClose={() => {
              setCompareOpen(false);
              setCompareIds([]);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
