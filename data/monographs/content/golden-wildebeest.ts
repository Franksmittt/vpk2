import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { blueWildebeestMonograph } from "./blue-wildebeest";

export function goldenWildebeestMonograph(s: QuarrySpecies): MonographDefinition {
  const base = blueWildebeestMonograph(s);
  return {
    ...base,
    heroTitle: "Sunlit gnu: the golden morph",
    heroLead:
      "Golden wildebeest are still Connochaetes taurinus on the species line. The coat colour is a ranch-selected morph. Grazing, herd panic, horn width, and open-ground fieldcraft remain blue wildebeest truth wearing a different sun angle.",
    bookCta: "Book a golden wildebeest hunt",
    variantCallout:
      "Colour morphs should ship with transparent genetics and management context. Hybrid risk with black wildebeest is still a ranch problem even when the hide looks like sunrise.",
    introParagraphs: [
      "Every paragraph in the blue wildebeest story about grass height, water loops, zebra tension, and lion timetables still applies. The golden coat changes marketing and sometimes price. It does not change bullet construction or wind.",
      "This page keeps full gnu depth while stressing integrity: what guests are buying, what record books measure, and why your PH still scans herd edges instead of coat gloss.",
    ],
    taxonomyTitle: base.taxonomyTitle,
    taxonomyIntro:
      "Subspecies and colour morph are different files. Keep both clear when animals move between properties or enter breeding sales.",
    taxonomyCards: [
      {
        title: "Golden morph",
        sub: "C. taurinus",
        body: "Selected pale coat on fenced estates. Horns and body plan remain gnu.",
      },
      {
        title: "Blue wildebeest",
        sub: "C. taurinus",
        body: "Baseline brindled grazer ecology: lawns, water, herd nerves, predator pressure.",
      },
      {
        title: "Hybrid vigilance",
        sub: "Black gnu",
        body: "Keep fertile blue and black animals apart where crosses are illegal or bad branding.",
      },
    ],
    formTitle: base.formTitle,
    formEyebrow: base.formEyebrow,
    formPrimaryTitle: base.formPrimaryTitle,
    formPrimaryBody:
      "Bulls still carry sideways-sweeping horns that trophy judges read for width and mass. Pale coats can glare in midday sun and complicate rangefinding composure. Judge boss development, facial wear, and herd status the same way you would on a classic brindled bull.",
    formPrimaryBullets: base.formPrimaryBullets,
    formSecondaryTitle: base.formSecondaryTitle,
    formSecondaryBody: base.formSecondaryBody,
    formBlockquote:
      "Sunlight on a golden bull is not a substitute for mirage reading. Open ground punishes lazy wind checks.",
    ecologyTitle: base.ecologyTitle,
    ecologyParagraphs: base.ecologyParagraphs,
    feedSectionTitle: base.feedSectionTitle,
    feedBody: base.feedBody,
    fieldNoteTitle: base.fieldNoteTitle,
    fieldNoteBody:
      "Pale animals silhouette earlier and later than brindled animals. Adjust stalk timing before you adjust calibre.",
    socialTitle: base.socialTitle,
    socialIntro: base.socialIntro,
    socialCards: base.socialCards,
    rutParagraph: base.rutParagraph,
    predationTitle: base.predationTitle,
    predationBody: base.predationBody,
    huntTitle: "Hunting the pale gnu",
    huntIntro:
      "Stalk as you would any wildebeest: glass, wind, distance management, and refusal to sprint the herd into fence stress.",
    huntMethods: base.huntMethods,
    trophyTitle: "Trophy sense beyond colour",
    trophyParagraphs: [
      "Width, mass, and age still define the gnu story. Coat colour is not a horn substitute.",
      "Disclose morph history when clients compare prices. Integrity ages better than hype.",
    ],
    rifleTitle: base.rifleTitle,
    rifleIntro: base.rifleIntro,
    rifleTable: base.rifleTable,
    rifleTips: base.rifleTips,
    meatTitle: base.meatTitle,
    meatLeft: base.meatLeft,
    meatRight: base.meatRight,
    closingTitle: "Ready for the golden line?",
    closingBody:
      "Bring plains-game rifles and plains-game patience. We match animals to census and veld condition, and we expect the story you tell to match the genetics on paper.",
    quickFactExtraRows: [
      ["Morph", "Colour variant of blue wildebeest"],
      ["Species", "Connochaetes taurinus"],
      ["Hybrid note", "Keep blue and black wildebeest management honest"],
    ],
    imageSeeds: base.imageSeeds,
  };
}
