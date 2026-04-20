import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function giraffeMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The tower that rewires distance",
    heroLead:
      "Giraffe are Giraffa camelopardalis giraffa in much of South Africa: the tallest ruminant on Earth, browsing above competition, seeing your mistake before you finish it. Hunts are regulated, specialised, and never casual. Shot placement is not deer geometry copied tall.",
    bookCta: "Book a giraffe hunt",
    introParagraphs: [
      "Giraffe eat canopy that kudu cannot reach, shaping woodland structure. Bulls clash in slow, heavy fights that sound like distant thunder. Calves vanish in nursery groups while cows run collective vigilance. On estates, harvest is usually selective: old bulls, problem animals, or quota lines your PH explains in plain language.",
      "You will read taxonomy notes within Giraffa, bull versus cow mass and skin cues, browse ecology, lion and hyena risk to calves, fieldcraft that respects their horizon, rifles in .375 H&H class and upward with solid or controlled bullets per PH brief, welfare-first shot angles, meat as niche where used, and the paperwork stack international guests must own with their agents.",
    ],
    taxonomyTitle: "Taxonomy and the long-necked lineage",
    taxonomyIntro:
      "Giraffe taxonomy has been revised; use the name your permit carries. For marketing, clarity beats Latin flex. State subspecies or regional form as your outfitter requires.",
    taxonomyCards: [
      {
        title: "Southern giraffe",
        sub: "G. c. giraffa",
        body: "Common in much of SA estate discourse; confirm on your hunt paperwork.",
      },
      {
        title: "Ecology",
        sub: "Browser dial",
        body: "Shapes acacia canopies and visibility lines for other species.",
      },
      {
        title: "Welfare",
        sub: "First shot",
        body: "Poor placement means long suffering; PH judgement is non-optional.",
      },
    ],
    formTitle: "Ossicones, neck, and the bull slab",
    formEyebrow: "Mass at height",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls carry heavy ossicones often bald on top from combat, thick necks, and masses that can exceed a ton in big animals. Cows are lighter with finer tufted ossicones. Sexing at distance uses silhouette and behaviour. Never guess from neck alone in bad light.",
    formPrimaryBullets: [
      "Fighting wounds on neck and body read like ledgers.",
      "Kicks have range; never stand under a nervous giraffe.",
    ],
    formSecondaryTitle: "Cows and calves",
    formSecondaryBody:
      "Nursery groups move with coordinated heads. Calves are vulnerable to lions; human hunters must not add chaos to nursery strings.",
    formBlockquote:
      "If you treat height like a gimmick, the first shot will teach you otherwise.",
    ecologyTitle: "Canopy, thorns, and the water paradox",
    ecologyParagraphs: [
      "Giraffe spread browse pressure vertically, pruning trees other animals cannot reach. Water is drunk awkwardly and exposes animals. Lions occasionally exploit that vulnerability.",
      "Fence lines force repeated paths; ethical hunting avoids turning those into siege lines.",
      "Heat pushes shade loafing; mornings see movement to fresh browse.",
    ],
    feedSectionTitle: "Browse arcs and woodland architecture",
    feedBody:
      "Acacia flowers, pods, and tender tips rotate seasonally. Managers read giraffe density against tree damage and regeneration rates.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Range twice. A giraffe’s chest is higher than your deer intuition insists.",
    socialTitle: "Tower herds, bull duels, spacing",
    socialIntro:
      "Loose herds flow across visibility lines. Bulls fight with neck swings that sound like distant gunfire.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Cows and young: extra care before any shot.",
        icon: "mountain",
      },
      {
        title: "Bulls",
        body: "Solitary or in male groups; heavy bodies, heavy responsibility.",
        icon: "binoculars",
      },
      {
        title: "Predators",
        body: "Calves targeted; adults rarely unless desperate cats.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is blunt pushing, tasting urine, and violent neck clashes. Distance is respect.",
    predationTitle: "Lions on calves, humans on judgement",
    predationBody:
      "Calves fall to lions and hyena where packs work. Human hunters must place shots for immediate incapacitation; follow-up plans assume long legs still move.",
    huntTitle: "Hunting with welfare first",
    huntIntro:
      "Only proceed under PH direction with confirmed target identity and a rifle–bullet pair matched to the brief. This is not a backstop for under-gunned guests.",
    huntIntroParagraphs: [
      "Giraffe hunts are veterinary and welfare conversations first, fieldcraft second. Target identity, bullet construction, and follow-up logistics must be settled before anyone talks about hero angles.",
      "Neck length and brush change the geometry most guests imagine. Your PH owns the veto when presentation, backdrop, or animal condition fails the brief. No social media clock drives the shot.",
      "On the Iron Mountain we align giraffe harvest with law, welfare, and census. The rifle and bullet pair on the day must match paperwork and professional judgement, not curiosity.",
    ],
    huntMethods: [
      {
        title: "Stalk to position",
        text: "Use folds and tree lines; refuse rushed angles.",
        icon: "binoculars",
      },
      {
        title: "Rest discipline",
        text: "Tripods, sticks, or vehicle rests per estate rules. No macho off-hand.",
        icon: "target",
      },
      {
        title: "Follow-up plan",
        text: "Mark, breathe, and execute the PH’s sequence if movement remains.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense and selective harvest",
    trophyParagraphs: [
      "Ossicones, skin colour, and age class matter. Many estates target specific bulls for management; ask why before you celebrate.",
      "International shipment of parts is an agent problem, not an estate promise.",
    ],
    rifleTitle: "Rifles, solids, and PH authority",
    rifleIntro:
      "Expect .375 H&H class and upward with bullets chosen for deep penetration and controlled behaviour. Your PH owns final say; argue with your ego, not with them.",
    rifleTable: [
      ["Standard", ".375 H&H", "Controlled-expanding premium; common estate baseline."],
      ["Heavy", ".416 Rigby, .458 Win Mag", "Where brief or animal size demands."],
      ["Not here", ".243 / .270", "Under-giraffe for ethical first shots."],
      ["Note", "PH sign-off", "Always: placement matters more than brand flex."],
    ],
    rifleTips: [
      { label: "Angle:", body: "PH will describe chest line in your scope language." },
      { label: "Nerve:", body: "Assume adrenaline; breathe before the press." },
      { label: "Safety:", body: "Feet and legs have enormous reach." },
      { label: "Paperwork:", body: "Trophies and meat rules vary; ask early." },
    ],
    meatTitle: "Meat: niche, lean, respectful",
    meatLeft: [
      "Where giraffe meat enters the kitchen, treat it like lean eland: fast chill, sharp knives, rare to medium for steaks.",
    ],
    meatRight: [
      "Many hunts prioritise management and hide; do not promise steak nights without local law and camp culture checked.",
    ],
    closingTitle: "Ready for the tower?",
    closingBody:
      "Bring humility and heavy rifles. We harvest with welfare and quota in the same sentence.",
    quickFactExtraRows: [
      ["Animal", "Tallest ruminant; specialised browse"],
      ["Calibre", "Typically .375+ per estate brief"],
      ["Ethics", "First-shot placement is everything"],
    ],
    imageSeeds: monoSeeds(s, true),
  };
}
