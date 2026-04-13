import type { QuarrySpecies } from "@/data/species";

export function speciesImageUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

/**
 * Local card / sheet / compare images for `/species`.
 * Drop `public/images/species/cards/{id}.png` (lowercase) and add the id here.
 * Greater kudu stays on the monograph asset path.
 */
export const SPECIES_CARD_IMAGE_BY_ID: Partial<Record<string, string>> = {
  "greater-kudu": "/images/species/greater-kudu/kuduintro.png",
  "blue-wildebeest": "/images/species/cards/blue-wildebeest.png",
  "warthog": "/images/species/cards/warthog.png",
  "gemsbok": "/images/species/cards/gemsbok.png",
  "impala": "/images/species/cards/impala.png",
};

/** Hero + spotlight on `/species` (same file as kudu card). */
export const GREATER_KUDU_QUARRY_PAGE_IMAGE = SPECIES_CARD_IMAGE_BY_ID["greater-kudu"]!;

export function quarrySpeciesImageSrc(s: QuarrySpecies, w: number, h: number): string {
  const local = SPECIES_CARD_IMAGE_BY_ID[s.id];
  if (local) return local;
  return speciesImageUrl(s.imageSeed, w, h);
}
