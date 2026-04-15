import type { QuarrySpecies } from "@/data/species";
import { SITE_ORIGIN } from "@/lib/site";

export function buildSpeciesJsonLd(
  slug: string,
  species: QuarrySpecies,
  pageDescription: string,
  options?: { primaryImagePath?: string },
) {
  const pageUrl = `${SITE_ORIGIN}/species/${slug}`;
  const taxonId = `${pageUrl}#taxon`;
  const webPageId = `${pageUrl}#webpage`;
  const primaryImageAbsolute =
    options?.primaryImagePath != null && options.primaryImagePath.length > 0
      ? new URL(options.primaryImagePath, SITE_ORIGIN).toString()
      : undefined;

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": webPageId,
    url: pageUrl,
    name: `${species.name} | Vaalpenskraal Game Reserve`,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}#website`,
      url: SITE_ORIGIN,
      name: "Vaalpenskraal Game Reserve",
    },
    about: { "@id": taxonId },
  };

  if (primaryImageAbsolute) {
    webPage.primaryImageOfPage = {
      "@type": "ImageObject",
      url: primaryImageAbsolute,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Taxon", "Thing"],
        "@id": taxonId,
        name: species.name,
        alternateName: species.scientific,
      },
      webPage,
    ],
  };
}
