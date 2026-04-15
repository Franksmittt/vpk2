import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSpeciesBySlug, QUARRY_SPECIES, type QuarrySpecies } from "@/data/species";
import { hasSpeciesMonograph, getMonographContent } from "@/data/monographs/registry";
import GreaterKuduGuide from "@/components/species/guides/GreaterKuduGuide";
import SpeciesMonographGuide from "@/components/species/guides/monograph/SpeciesMonographGuide";
import SpeciesStubDetail from "@/components/species/SpeciesStubDetail";
import { SPECIES_CARD_IMAGE_BY_ID } from "@/lib/species-media";
import { buildSpeciesJsonLd } from "@/lib/seo/species-json-ld";
import { siteMetadataBase, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return QUARRY_SPECIES.map((s) => ({ slug: s.id }));
}

function speciesPageDescription(slug: string, s: QuarrySpecies) {
  const richMonograph = slug === "greater-kudu" || hasSpeciesMonograph(slug);
  return richMonograph
    ? `${s.name} monograph: biology, fieldcraft, rifles, trophies, meat, and Iron Mountain hunting at Vaalpenskraal.`
    : `${s.name} (${s.scientific}). Iron Mountain quarry profile and booking at Vaalpenskraal.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpeciesBySlug(slug);
  if (!s) {
    return { title: "Species", robots: { index: false, follow: false } };
  }
  const description = speciesPageDescription(slug, s);
  const canonical = siteUrl(`/species/${slug}`);
  const pageTitle = `${s.name} | Vaalpenskraal Game Reserve`;
  const ogImage = SPECIES_CARD_IMAGE_BY_ID[s.id]
    ? new URL(SPECIES_CARD_IMAGE_BY_ID[s.id]!, siteMetadataBase).toString()
    : undefined;

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "Vaalpenskraal Game Reserve",
      title: pageTitle,
      description,
      locale: "en_ZA",
      ...(ogImage ? { images: [{ url: ogImage, width: 800, height: 1000, alt: `${s.name} on the Iron Mountain quarry roster` }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: pageTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

const SpeciesSlugPage = async ({ params }: Props) => {
  const { slug } = await params;
  const s = getSpeciesBySlug(slug);
  if (!s) notFound();

  const description = speciesPageDescription(slug, s);
  const cardPath = SPECIES_CARD_IMAGE_BY_ID[s.id];
  const jsonLd = buildSpeciesJsonLd(slug, s, description, {
    primaryImagePath: cardPath,
  });

  let body: ReactNode;
  if (slug === "greater-kudu") {
    body = <GreaterKuduGuide species={s} />;
  } else {
    const monograph = getMonographContent(s);
    body = monograph ? <SpeciesMonographGuide species={s} content={monograph} /> : <SpeciesStubDetail species={s} />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {body}
    </>
  );
};

export default SpeciesSlugPage;
