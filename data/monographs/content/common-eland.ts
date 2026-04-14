import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function commonElandMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The southern giant with dewlap gravity",
    heroLead:
      "Common eland are Taurotragus oryx: the heavy spiral-horned generalists beside the Livingstone form you may already know from Iron Mountain copy. Both sexes carry horns; bulls carry mass, dewlap, and the kind of bone that bends light.",
    bookCta: "Book a common eland hunt",
    introParagraphs: [
      "Eland graze when grass is sweet and climb into browse when fibre rises. They move in herds that look placid until something triggers a stampede that eats fence corners. On estates they are protein on the hoof and a walking test of shot placement—too far back and you will track a truck through thorn.",
      "This monograph stands beside the Livingstone page: taxonomy split, horn shape in bulls and cows, mixed feeding ecology, herd behaviour, lion predation on calves, fieldcraft for big bodies at distance, rifles in .375 H&H class with premium bullets, trophy talk on horn thickness and age, and meat that is famous when handled cold-clean.",
    ],
    taxonomyTitle: "Taxonomy: common versus Livingstone",
    taxonomyIntro:
      "Common eland and Livingstone eland are closely related narratives in Taurotragus oryx. Permits and marketing should name the form you hunt; genetics and geography matter to guests who read fine print.",
    taxonomyCards: [
      {
        title: "Common eland",
        sub: "T. oryx",
        body: "Broad distribution form; heavy bodies, both sexes horned, dewlap pronounced on bulls.",
      },
      {
        title: "Livingstone eland",
        sub: "T. o. livingstonei",
        body: "Often darker tide with regional striping emphasis; compare on-property animals.",
      },
      {
        title: "Ecology",
        sub: "Mixed feeder",
        body: "Switches graze to browse with season—drought survival specialists.",
      },
    ],
    formTitle: "Horns in both sexes, mass in the bull",
    formEyebrow: "Taurotragus scale",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls commonly run from roughly 600 kg upward in good range with shoulder height near 160 to 180 cm class. Horns are thicker and more tightly spiralled than cows; dewlap and bossing read age alongside horn chips. Never underestimate how far a wounded bull will walk.",
    formPrimaryBullets: [
      "Horn annuli help age where managers train eyes.",
      "Fighting polish on horn tips signals mature bulls.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows carry longer, tighter spirals with slimmer bases. They run nursery herds and still mass enough to break fences when spooked.",
    formBlockquote:
      "An eland is not an oversized impala. Placement is everything; excuses are nothing.",
    ecologyTitle: "Grass, browse, and drought switches",
    ecologyParagraphs: [
      "Eland shift diet with rainfall: green grass after rain, deep browse and pods when fibre rises. That flexibility is why they persist where specialists crash.",
      "Water dependence is real but less extreme than waterbuck; still, dry months concentrate movement.",
      "Lions target calves; adults are formidable at the kick.",
    ],
    feedSectionTitle: "Mixed feeding and fence stress",
    feedBody:
      "When browse thins, eland test fences and neighbours. Horn offtake should track body scores, calf ratios, and grass height.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Range twice. An eland’s brisket is deeper than your deer memory insists.",
    socialTitle: "Herd calm, stampede thunder",
    socialIntro:
      "Herd animals with nursery logic. Panic runs in dust that hides individuals—never shoot into blur.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Cows, calves, young bulls—identify before safety moves.",
        icon: "mountain",
      },
      {
        title: "Bull groups",
        body: "Older males sometimes apart; heavy bodies, heavy responsibility.",
        icon: "binoculars",
      },
      {
        title: "Predators",
        body: "Calves vulnerable; adults risky for cats.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is testing, urine tasting, and horn contact. Give bulls space; cameras are not armour.",
    predationTitle: "Lions on calves, humans on shot discipline",
    predationBody:
      "Lions ambush edges; hyena matter regionally. Human hunters owe .375-class discipline because follow-up on a gut-shot eland is a week nobody wants.",
    huntTitle: "Hunting the spiral giant",
    huntIntro:
      "Glass, wind, and rested rifles. Refuse running shots into dust strings.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use folds; eland eyes are high—skyline discipline matters.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water and feed pens in dry months with PH wind check.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Heavy cloven prints; stride tells calm versus panic.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on spiral and mass",
    trophyParagraphs: [
      "Horn length, basal mass, and spiral tightness beat coat sheen. Compare animals when the ranch allows.",
      "Rowland Ward minima are reference; PH judgement on age and genetics is final.",
    ],
    rifleTitle: "Rifles for eland bone",
    rifleIntro:
      ".375 H&H with premium controlled bullets is the honest default; .300 magnums may work with perfect angles and heavy construction—PH signs the cheque.",
    rifleTable: [
      ["Default", ".375 H&H", "Controlled-expanding premium; angle forgiveness."],
      ["Magnum", ".300 Win Mag", "Heavy premium only with PH approval on presentation."],
      ["Heavy", ".416 Rigby", "Where estate brief or client wants maximum margin."],
      ["Avoid", ".243 / .270", "Under-gunned for ethical first shots on mature bulls."],
    ],
    rifleTips: [
      { label: "Placement:", body: "Forward shoulder through heart-lung; paunch shots echo for days." },
      { label: "Distance:", body: "Verify range; eland are larger than reticles suggest." },
      { label: "Follow-up:", body: "Assume kilometres if the first shot lies." },
      { label: "Herd:", body: "Pick one spiral; never hose the dust." },
    ],
    meatTitle: "Meat, eland honesty",
    meatLeft: [
      "Eland venison is famous: lean, mild when chilled clean, superb as air-dried cure or rare steaks with discipline.",
      "Neck and shank reward slow heat; backstrap rewards respect.",
    ],
    meatRight: [
      "Field care matters—summer heat and heavy hides punish lazy gutting.",
    ],
    closingTitle: "Ready for the spiral giant?",
    closingBody:
      "Bring heavy rifles and heavier patience. We match animals to census and browse truth.",
    quickFactExtraRows: [
      ["Horns", "Both sexes; bulls far thicker"],
      ["Mass", "Bulls often 600+ kg in good range"],
      ["Calibre", ".375 H&H common baseline"],
    ],
    imageSeeds: monoSeeds(s, true),
  };
}
