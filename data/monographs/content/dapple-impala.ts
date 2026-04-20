import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { impalaMonograph } from "./impala";

export function dappleImpalaMonograph(s: QuarrySpecies): MonographDefinition {
  const base = impalaMonograph(s);
  return {
    ...base,
    heroTitle: "Rooibok canvas: the dapple morph",
    heroLead:
      "Dapple impala are still Aepyceros melampus at the species level. The coat is a colour and pattern morph selected on intensive properties. Biology rhymes with common impala. Marketing must rhyme with honesty about genetics, disclosure, and what guests are actually buying.",
    bookCta: "Book a dapple impala hunt",
    variantCallout:
      "Colour morphs are estate products. Trophy and breeding narratives should disclose parentage and management. Treat the hunt as impala fieldcraft with an extra conversation about integrity.",
    introParagraphs: [
      "Everything in the impala monograph about edges, mixed feeding, rut theatre, and leopard silence still applies. Dapple animals simply wear a different map on the hide. Horn shape, body mass, and behaviour remain the animal you stalk, not the Instagram filter.",
      "This page reuses deep impala biology while foregrounding variant ethics: how morphs are produced, why record books and guests ask different questions, and why your PH still cares more about wind than about coat gloss.",
    ],
    taxonomyTitle: base.taxonomyTitle,
    taxonomyIntro:
      "Taxonomy does not change because melanin and white spotting shift. Subspecies and morph are different sentences. Keep both clear when you sell hunts or breeding stock.",
    taxonomyCards: [
      {
        title: "Dapple morph",
        sub: "A. melampus",
        body: "Selected coat pattern on fenced estates. Horn and body still read like impala.",
      },
      {
        title: "Common impala",
        sub: "A. m. melampus",
        body: "Baseline rooibok ecology: edges, water, mixed feeding, predator pressure.",
      },
      {
        title: "Marketing ethics",
        sub: "Disclosure",
        body: "Say what the animal is, where it came from, and how it is managed.",
      },
    ],
    formTitle: base.formTitle,
    formEyebrow: base.formEyebrow,
    formPrimaryTitle: base.formPrimaryTitle,
    formPrimaryBody:
      "Rams still carry lyrate horns with strong ridges. Dapple coats can make horn bases harder to read in dappled light, which is irony you do not need on a stalk. Judge mass, neck thickness, and combat scars the same way you would on a classic rooibok.",
    formPrimaryBullets: base.formPrimaryBullets,
    formSecondaryTitle: base.formSecondaryTitle,
    formSecondaryBody: base.formSecondaryBody,
    formBlockquote:
      "The dapple hide is not a substitute for wind discipline. Leopards do not care about your colour preference.",
    ecologyTitle: base.ecologyTitle,
    ecologyParagraphs: base.ecologyParagraphs,
    feedSectionTitle: base.feedSectionTitle,
    feedBody: base.feedBody,
    fieldNoteTitle: base.fieldNoteTitle,
    fieldNoteBody:
      "Pattern-breaking sunlight through leaves can hide an entire ram. Glass the horn line, not only the body patch.",
    socialTitle: base.socialTitle,
    socialIntro: base.socialIntro,
    socialCards: base.socialCards,
    rutParagraph: base.rutParagraph,
    predationTitle: base.predationTitle,
    predationBody: base.predationBody,
    huntTitle: "Hunting the patterned rooibok",
    huntIntro:
      "Stalk as you would any impala: quiet feet, obsessive wind, and refusal to treat a pretty coat like an easy target.",
    huntIntroParagraphs: [
      "Dappled light on a dappled hide is a cruel joke. Glass the horn line and neck seam, not the spot map. Pretty coats do not widen ethical shot windows.",
      "Wind and herd geometry still decide the day. Your PH still vetoes brush, fence panic, and the wrong ram in a string. Pattern morphs do not buy extra metres.",
      "On the Iron Mountain we match variant hunts to census and honest guest briefings. Trophy is horn and age on the right animal, with paperwork that matches what you advertised.",
    ],
    huntMethods: base.huntMethods,
    trophyTitle: "Trophy sense and morph honesty",
    trophyParagraphs: [
      "Horn length and age still matter more than spot symmetry. Rowland Ward minima on a quarry sheet do not excuse poor field care or vague marketing.",
      "If guests ask whether the animal is natural, answer with paperwork and history, not swagger.",
    ],
    rifleTitle: base.rifleTitle,
    rifleIntro: base.rifleIntro,
    rifleTable: base.rifleTable,
    rifleTips: base.rifleTips,
    meatTitle: base.meatTitle,
    meatLeft: base.meatLeft,
    meatRight: base.meatRight,
    closingTitle: "Ready for the dapple edge?",
    closingBody:
      "Bring impala patience and variant transparency. We match animals to census and season, and we expect the story you take home to match the animal on the skinning rack.",
    quickFactExtraRows: [
      ["Morph", "Colour pattern variant of common impala"],
      ["Species", "Aepyceros melampus"],
      ["Fieldcraft", "Same edge habitat and wind rules as classic impala"],
    ],
    imageSeeds: base.imageSeeds,
  };
}
