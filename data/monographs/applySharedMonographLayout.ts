import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition, MonographImageSeeds } from "./types";

const DEFAULT_RIFLE_TIPS_PLACEHOLDER =
  "Placeholder: vertical briefing figure for shot placement will go here once the final asset is ready.";

/** No `public/images/species/<id>/` bundle — meat strip uses remote `speciesImageUrl` from seed. */
const REMOTE_ONLY_MEAT_BANNER_IDS = new Set(["giraffe", "plains-zebra", "lechwe"]);

/** Folder that holds the wide strip asset when it is not under `/images/species/<species.id>/`. */
const MEAT_BANNER_LOCAL_BASE_BY_ID: Partial<Record<string, string>> = {
  "dapple-impala": "/images/species/impala",
  "black-impala": "/images/species/impala",
  "white-blesbok": "/images/species/blesbok",
};

/** Wide-strip filename stem (without `.jpg`) when `${imageSeed}monorifle` is wrong or missing. */
const MEAT_BANNER_STEM_BY_ID: Partial<Record<string, string>> = {
  bushbuck: "bushbuckmonotrophy",
  "golden-wildebeest": "golden-wildebeest-harvest",
  /** White morph assets live alongside brown blesbok; avoid hijacking shared `blesbokmonorifle.jpg`. */
  "white-blesbok": "blesbokwhitemonorifle",
};

function stripRifleTipsFigure(seeds: MonographImageSeeds): MonographImageSeeds {
  const { rifleTipsFigure, rifleTipsFigureLocalBase, rifleTipsFigureLocalExt, ...rest } = seeds;
  void rifleTipsFigure;
  void rifleTipsFigureLocalBase;
  void rifleTipsFigureLocalExt;
  return rest;
}

/**
 * Shared “Livingstone eland” monograph shell: no wide rifle banner under tips, dashed tips column,
 * no meat prose, wide monorifle-class strip at top of meat section.
 */
export function applySharedMonographLayout(s: QuarrySpecies, c: MonographDefinition): MonographDefinition {
  const stem = MEAT_BANNER_STEM_BY_ID[s.id] ?? `${s.imageSeed}monorifle`;
  const meatLocalBase = REMOTE_ONLY_MEAT_BANNER_IDS.has(s.id)
    ? undefined
    : (MEAT_BANNER_LOCAL_BASE_BY_ID[s.id] ?? `/images/species/${s.id}`);

  return {
    ...c,
    omitRifleSectionBanner: true,
    omitMeatSectionCopy: true,
    meatTitle: "",
    meatLeft: [],
    meatRight: [],
    rifleTipsPlaceholder: c.rifleTipsPlaceholder ?? DEFAULT_RIFLE_TIPS_PLACEHOLDER,
    imageSeeds: {
      ...stripRifleTipsFigure(c.imageSeeds),
      meatSectionBannerSeed: stem,
      meatSectionBannerLocalBase: meatLocalBase,
      meatSectionBannerLocalExt: "jpg",
    },
  };
}
