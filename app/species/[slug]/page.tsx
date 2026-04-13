import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSpeciesBySlug, QUARRY_SPECIES } from "@/data/species";
import { hasSpeciesMonograph, getMonographContent } from "@/data/monographs/registry";
import GreaterKuduGuide from "@/components/species/guides/GreaterKuduGuide";
import SpeciesMonographGuide from "@/components/species/guides/monograph/SpeciesMonographGuide";
import SpeciesStubDetail from "@/components/species/SpeciesStubDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return QUARRY_SPECIES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpeciesBySlug(slug);
  if (!s) return { title: "Species" };
  const richMonograph = slug === "greater-kudu" || hasSpeciesMonograph(slug);
  return {
    title: `${s.name} | Vaalpenskraal Game Reserve`,
    description: richMonograph
      ? `${s.name} monograph: biology, fieldcraft, rifles, trophies, meat, and Iron Mountain hunting at Vaalpenskraal.`
      : `${s.name} (${s.scientific}): Iron Mountain quarry profile and booking at Vaalpenskraal.`,
  };
}

export default async function SpeciesSlugPage({ params }: Props) {
  const { slug } = await params;
  const s = getSpeciesBySlug(slug);
  if (!s) notFound();
  if (slug === "greater-kudu") {
    return <GreaterKuduGuide species={s} />;
  }
  const monograph = getMonographContent(s);
  if (monograph) {
    return <SpeciesMonographGuide species={s} content={monograph} />;
  }
  return <SpeciesStubDetail species={s} />;
}
