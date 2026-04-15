import { Suspense } from "react";
import { QUARRY_SPECIES } from "@/data/species";
import SpeciesPageContent from "@/components/species/SpeciesPageContent";

const SpeciesPageFallback = () => (
  <div className="min-h-screen bg-black text-white" aria-busy="true" aria-label="Loading species">
    <div className="editorial-container py-28">
      <p className="font-sans text-sm text-white/60">Loading quarry roster…</p>
    </div>
  </div>
);

const SpeciesPage = () => (
  <Suspense fallback={<SpeciesPageFallback />}>
    <SpeciesPageContent species={QUARRY_SPECIES} />
  </Suspense>
);

export default SpeciesPage;
