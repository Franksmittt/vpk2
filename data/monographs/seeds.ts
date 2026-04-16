import type { QuarrySpecies } from "@/data/species";
import type { MonographImageSeeds } from "./types";

export function monoSeeds(
  s: QuarrySpecies,
  useIntroCard: boolean,
  keys: Partial<MonographImageSeeds> = {},
): MonographImageSeeds {
  const p = s.imageSeed;
  return {
    hero: keys.hero ?? `${p}monohero`,
    heroLocalBase: keys.heroLocalBase,
    heroLocalExt: keys.heroLocalExt,
    intro: keys.intro ?? `${p}monintro`,
    useIntroCardImage: keys.useIntroCardImage ?? useIntroCard,
    panorama: keys.panorama ?? `${p}monopan`,
    formPrimary: keys.formPrimary ?? `${p}monoforma`,
    formSecondary: keys.formSecondary ?? `${p}monoformb`,
    ecology: keys.ecology ?? `${p}monoeco`,
    feedWide: keys.feedWide ?? `${p}monofeed`,
    rutLeft: keys.rutLeft ?? `${p}monorut`,
    predation: keys.predation ?? `${p}monopred`,
    predationLocalBase: keys.predationLocalBase,
    predationLocalExt: keys.predationLocalExt,
    hunt: keys.hunt ?? `${p}monohunt`,
    trophy: keys.trophy ?? `${p}monotrophy`,
    rifle: keys.rifle ?? `${p}monorifle`,
    meat: keys.meat ?? `${p}monomeat`,
    panoramaLocalBase: keys.panoramaLocalBase,
    panoramaLocalExt: keys.panoramaLocalExt,
  };
}
