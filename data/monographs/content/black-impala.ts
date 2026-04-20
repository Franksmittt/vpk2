import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { impalaMonograph } from "./impala";

export function blackImpalaMonograph(s: QuarrySpecies): MonographDefinition {
  const base = impalaMonograph(s);
  return {
    ...base,
    heroTitle: "Melanistic rooibok: the black impala story",
    heroLead:
      "Black impala are still Aepyceros melampus. The coat is a melanistic morph selected and stabilised on private estates. Ecology, rut, and fieldcraft mirror common impala. What changes is disclosure: guests should know they are hunting a colour line, not a different species.",
    bookCta: "Book a black impala hunt",
    variantCallout:
      "Melanistic animals are a ranch product. Marketing should state genetics and origin clearly. Your PH still judges age, horn, and wind the same way as on any rooibok.",
    introParagraphs: [
      "Every paragraph in the impala monograph about mixed feeding, water loyalty, edge habitat, alarm barks, and leopard silence still applies. Black coats absorb heat differently and can read as a flat silhouette in certain light. Use glass on horn lines and gait, not only body gloss.",
      "This page keeps full impala depth while foregrounding morph ethics: parentage records, why colour sells, and why fair-chase rules do not relax because the hide is unusual.",
    ],
    taxonomyTitle: base.taxonomyTitle,
    taxonomyIntro:
      "Species and subspecies labels stay with Aepyceros melampus. Melanism is a phenotype, not a Latin name. Keep that distinction crisp when you compare quotes or export paperwork.",
    taxonomyCards: [
      {
        title: "Black morph",
        sub: "A. melampus",
        body: "Dark pigmentation selected on fenced properties. Horns and body plan remain impala.",
      },
      {
        title: "Common impala",
        sub: "A. m. melampus",
        body: "Baseline ecology: woodland–grassland edges, mixed feeders, strong water ties.",
      },
      {
        title: "Integrity",
        sub: "Disclosure",
        body: "Say what was selected, how, and whether the line is closed to outcrossing.",
      },
    ],
    formTitle: base.formTitle,
    formEyebrow: base.formEyebrow,
    formPrimaryTitle: base.formPrimaryTitle,
    formPrimaryBody:
      "Rams carry lyrate horns with strong annuli. Dark coats can hide neck seams in shadow; spend extra seconds confirming sex and age against the sun angle. Mass and rut swelling still read like any impala once you force the glass to slow down.",
    formPrimaryBullets: base.formPrimaryBullets,
    formSecondaryTitle: base.formSecondaryTitle,
    formSecondaryBody: base.formSecondaryBody,
    formBlockquote:
      "Black hide does not mean black-and-white ethics. Identify, judge, then shoot.",
    ecologyTitle: base.ecologyTitle,
    ecologyParagraphs: base.ecologyParagraphs,
    feedSectionTitle: base.feedSectionTitle,
    feedBody: base.feedBody,
    fieldNoteTitle: base.fieldNoteTitle,
    fieldNoteBody:
      "In harsh side-light a black ram can look like a hole in the thicket. Pick up the white tail flash or horn curve before you commit.",
    socialTitle: base.socialTitle,
    socialIntro: base.socialIntro,
    socialCards: base.socialCards,
    rutParagraph: base.rutParagraph,
    predationTitle: base.predationTitle,
    predationBody: base.predationBody,
    huntTitle: "Hunting the melanistic edge runner",
    huntIntro:
      "Same quiet feet, same wind obsession. Refuse the shortcut of chasing a dark shape without horn confirmation.",
    huntIntroParagraphs: [
      "Melanistic coats flatten outline in side light. Spend extra seconds on horn keel, tail flash, and gait before the safety moves. A dark blob in the thicket is not a sex or age decision.",
      "Your PH still owns angle, backdrop, and herd confusion when ewes or young rams sit behind the target ram. Morph marketing does not relax field standards.",
      "On the Iron Mountain we align black impala harvest with census and disclosure. The story at the skinning rack should match the genetics on paper and the patience you showed on the stalk.",
    ],
    huntMethods: base.huntMethods,
    trophyTitle: "Trophy sense and morph honesty",
    trophyParagraphs: [
      "Horn length, base mass, and age trump coat colour. Rowland Ward minima apply to the species, not to fashion.",
      "If a guest asks whether the animal is wild-type, answer with breeding history, not bravado.",
    ],
    rifleTitle: base.rifleTitle,
    rifleIntro: base.rifleIntro,
    rifleTable: base.rifleTable,
    rifleTips: base.rifleTips,
    meatTitle: base.meatTitle,
    meatLeft: base.meatLeft,
    meatRight: base.meatRight,
    closingTitle: "Ready for the black rooibok?",
    closingBody:
      "Bring impala discipline and transparent storytelling. We align harvest with census and season; your story home should match the skinning rack.",
    quickFactExtraRows: [
      ["Morph", "Melanistic colour line of Aepyceros melampus"],
      ["Species", "Impala: same rifles, same shot placement"],
      ["Ethics", "Disclose selection history like any other variant"],
    ],
    imageSeeds: base.imageSeeds,
  };
}
