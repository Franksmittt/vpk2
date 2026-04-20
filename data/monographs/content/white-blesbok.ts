import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { blesbokMonograph } from "./blesbok";

export function whiteBlesbokMonograph(s: QuarrySpecies): MonographDefinition {
  const base = blesbokMonograph(s);
  return {
    ...base,
    heroTitle: "Snow on the Highveld lawn: white blesbok",
    heroLead:
      "White blesbok are Damaliscus pygargus phillipsi wearing a pale colour morph. Horns, grazing habits, and open-ground hunting rhyme with classic blesbok. The extra conversation is genetics: guests should understand they are harvesting a managed colour line, not a separate species.",
    bookCta: "Book a white blesbok hunt",
    variantCallout:
      "Colour morphs belong in honest marketing. Disclose breeding, hybrid vigilance with bontebok lines, and how the estate maintains purity.",
    introParagraphs: [
      "Everything in the blesbok monograph about hybrid risk, alcelaphine grazing, herd bunching on short grass, and wind-aware shooting still applies. Pale coats can flare in midday sun and disappear in frost. Plan glassing angles accordingly.",
      "We keep full blesbok biology here while stressing integrity: why white animals exist on ranches, how they fit carrying capacity, and why trophy talk still centres on horn and age.",
    ],
    taxonomyTitle: base.taxonomyTitle,
    taxonomyIntro:
      "Taxonomy stays blesbok. White is phenotype. Keep both sentences in brochures and booking emails so international agents file paperwork against the right species name.",
    taxonomyCards: [
      {
        title: "White morph",
        sub: "D. p. phillipsi",
        body: "Pale coat selected on estates. Horns remain lyrate; both sexes carry horn in blesbok rules.",
      },
      {
        title: "Classic blesbok",
        sub: "Brown blaze form",
        body: "Same grazing engine, darker pelage. Often run alongside morphs for comparison.",
      },
      {
        title: "Bontebok firewall",
        sub: "Hybrid risk",
        body: "Keep breeding records straight where bontebok contact is possible.",
      },
    ],
    formTitle: base.formTitle,
    formPrimaryTitle: base.formPrimaryTitle,
    formPrimaryBody:
      "Rams carry lyrate horns with strong rings; ewes carry lighter horns. White pelage can wash out shoulder definition in photos. Judge mass and belly depth through the scope, not through phone zoom after the fact.",
    formPrimaryBullets: base.formPrimaryBullets,
    formSecondaryTitle: base.formSecondaryTitle,
    formSecondaryBody: base.formSecondaryBody,
    formBlockquote:
      "A white hide does not earn a sloppy wind check. Open ground still tells the truth.",
    ecologyTitle: base.ecologyTitle,
    ecologyParagraphs: base.ecologyParagraphs,
    feedSectionTitle: base.feedSectionTitle,
    feedBody: base.feedBody,
    fieldNoteTitle: base.fieldNoteTitle,
    fieldNoteBody:
      "Frost and dew make pale animals glow. Midday glare can erase outline. Use background contrast when you pick your shot window.",
    socialTitle: base.socialTitle,
    socialIntro: base.socialIntro,
    socialCards: base.socialCards,
    rutParagraph: base.rutParagraph,
    predationTitle: base.predationTitle,
    predationBody: base.predationBody,
    huntTitle: "Hunting the pale alcelaphine",
    huntIntro:
      "Spot-and-stalk and ambush at water still dominate. Magnify patience, not calibre.",
    huntIntroParagraphs: [
      "Pale animals glow in frost and wash out in glare. Plan glassing so shoulder depth and horn mass read true, not only coat contrast against the veld.",
      "Wind on open ground still decides the day. Your PH still refuses brush shots, fence panic, and the wrong animal in a tight bunch. Morph honesty does not buy sloppy fieldcraft.",
      "On the Iron Mountain we match white blesbok harvest to census and breeding disclosure. Compare rams in the herd before you fixate on colour alone.",
    ],
    huntMethods: base.huntMethods,
    trophyTitle: "Trophy sense on white pelage",
    trophyParagraphs: [
      "Horn length, mass, and age classes matter more than coat shade. Rowland Ward references still describe blesbok, not fashion.",
      "Where brown and white animals share a herd, compare multiple rams before you fixate on colour.",
    ],
    rifleTitle: base.rifleTitle,
    rifleIntro: base.rifleIntro,
    rifleTable: base.rifleTable,
    rifleTips: base.rifleTips,
    meatTitle: base.meatTitle,
    meatLeft: base.meatLeft,
    meatRight: base.meatRight,
    closingTitle: "Ready for the white blaze herd?",
    closingBody:
      "Bring wind sense and variant transparency. We match animals to quota and grass height, not to yesterday’s brochure photo.",
    quickFactExtraRows: [
      ["Morph", "Pale colour line of blesbok"],
      ["Species", "Damaliscus pygargus phillipsi"],
      ["Fieldcraft", "Same open-ground craft as classic blesbok"],
    ],
    imageSeeds: base.imageSeeds,
  };
}
