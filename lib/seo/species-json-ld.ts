import type { QuarrySpecies } from "@/data/species";
import { SITE_ORIGIN } from "@/lib/site";

export function buildSpeciesJsonLd(slug: string, species: QuarrySpecies, pageDescription: string) {
  const pageUrl = `${SITE_ORIGIN}/species/${slug}`;
  const taxonId = `${pageUrl}#taxon`;
  const webPageId = `${pageUrl}#webpage`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Taxon", "Thing"],
        "@id": taxonId,
        name: species.name,
        alternateName: species.scientific,
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: `${species.name} | Vaalpenskraal Game Reserve`,
        description: pageDescription,
        isPartOf: {
          "@type": "WebSite",
          url: SITE_ORIGIN,
          name: "Vaalpenskraal Game Reserve",
        },
        about: { "@id": taxonId },
      },
    ],
  };
}
