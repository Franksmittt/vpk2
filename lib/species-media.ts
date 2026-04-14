import type { QuarrySpecies } from "@/data/species";

export function speciesImageUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

/**
 * Local card / sheet / compare images for `/species`.
 * Files live at `public/images/species/cards/{id}.png`.
 */
export const SPECIES_CARD_IMAGE_BY_ID: Partial<Record<string, string>> = {
  "greater-kudu": "/images/species/cards/greater-kudu.png",
  "blue-wildebeest": "/images/species/cards/blue-wildebeest.png",
  "impala": "/images/species/cards/impala.png",
  "gemsbok": "/images/species/cards/gemsbok.png",
  "warthog": "/images/species/cards/warthog.png",
  "blesbok": "/images/species/cards/blesbok.png",
  "bushbuck": "/images/species/cards/bushbuck.png",
  "cape-buffalo": "/images/species/cards/cape-buffalo.png",
  "dapple-impala": "/images/species/cards/dapple-impala.png",
  "golden-wildebeest": "/images/species/cards/golden-wildebeest.png",
  "springbok": "/images/species/cards/springbok.png",
  "red-hartebeest": "/images/species/cards/red-hartebeest.png",
  "lechwe": "/images/species/cards/lechwe.png",
  "livingstone-eland": "/images/species/cards/livingstone-eland.png",
  "black-impala": "/images/species/cards/black-impala.png",
  "white-blesbok": "/images/species/cards/white-blesbok.png",
  "waterbuck": "/images/species/cards/waterbuck.png",
  "nyala": "/images/species/cards/nyala.png",
  "plains-zebra": "/images/species/cards/plains-zebra.png",
  "giraffe": "/images/species/cards/giraffe.png",
  "sable-antelope": "/images/species/cards/sable-antelope.png",
  "roan-antelope": "/images/species/cards/roan-antelope.png",
  "common-eland": "/images/species/cards/common-eland.png",
};

/** Full-bleed hero background on `/species` (`public/images/species/iron-mountain-quarry-hero.png`). */
export const SPECIES_PAGE_HERO_IMAGE = "/images/species/iron-mountain-quarry-hero.png";

/** Featured kudu block on `/species` (same asset as the greater-kudu card). */
export const GREATER_KUDU_QUARRY_PAGE_IMAGE = SPECIES_CARD_IMAGE_BY_ID["greater-kudu"]!;

export function quarrySpeciesImageSrc(s: QuarrySpecies, w: number, h: number): string {
  const local = SPECIES_CARD_IMAGE_BY_ID[s.id];
  if (local) return local;
  return speciesImageUrl(s.imageSeed, w, h);
}
