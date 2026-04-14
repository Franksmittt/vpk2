import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function redHartebeestMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The red rocket with a preacher’s face",
    heroLead:
      "Red hartebeest are Alcelaphus buselaphus caama, the long-faced alcelaphine that runs like gravity owed it money. On open plains they are a test of range estimation, wind, and the moment you admit your first guess was wrong.",
    bookCta: "Book a red hartebeest hunt",
    introParagraphs: [
      "Hartebeest look awkward until you watch them eat. The elongated face is a grazing tool that reaches quality leaf lower than short-necked competitors. They are bulk grazers in the same tribe as wildebeest and tsessebe, tuned to grass height, fire, and the politics of water.",
      "This page covers taxonomy, horn architecture and sexual dimorphism, grazing ecology on sweet and sour grassland, herd behaviour, predation from lions to dogs, hunting craft on open ground, rifles and bullets for a runner’s body, trophy sense on horn length and hooks, and meat that carries honest iron note.",
    ],
    taxonomyTitle: "Taxonomy and the hartebeest map",
    taxonomyIntro:
      "Hartebeest species and subspecies names shift in literature. In South African hunting you meet the red or Cape form, caama, as a wide-ranging plains animal. Keep import, movement, and genetics paperwork clean if you trade animals between properties.",
    taxonomyCards: [
      {
        title: "Red hartebeest",
        sub: "A. b. caama",
        body: "Rich red coat, black markings on face and legs, heavily ringed horns on both sexes with male horns heavier.",
      },
      {
        title: "Alcelaphini",
        sub: "Tribe mates",
        body: "Shares ancestry with wildebeest and tsessebe. Grazing specialisation and herd panic rhyme across the tribe.",
      },
      {
        title: "Ecology",
        sub: "Grass height dial",
        body: "Selects sward height and green bite. Competes with zebra and wildebeest where lawns overlap.",
      },
    ],
    formTitle: "Horns, withers, and the high backline",
    formEyebrow: "Sexual honesty in profile",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls carry heavily ridged horns that rise, then hook forward with character that tape measures alone miss. Shoulder height commonly lands near 120 to 140 cm with mass often quoted from about 120 to 160 kg depending on range condition. The withers peak above the rump: that silhouette is your rangefinder trap.",
    formPrimaryBullets: [
      "Horn bases and pedicle scars tell age alongside neck thickness. Young bulls can look tall and hollow.",
      "Gait is efficient at trot and terrifying at gallop. Heavy animals plough wet soil after rain.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows are horned, lighter, and run nursery herds. Trophy plans usually target bulls. Glass for sex before the safety moves.",
    formBlockquote:
      "If you trust the first range guess on a hartebeest, you are volunteering for a story you will not like.",
    ecologyTitle: "Grass, fire, and fence loops",
    ecologyParagraphs: [
      "Red hartebeest clip grass and shift with regrowth after burn or mowing. Behind wire, movement becomes honest loops between water and the best remaining swards. Read ribs on cows as a carrying-capacity letter.",
      "Heat pushes midday shade behaviour. Dawn and dusk feed arcs are stalkable if wind behaves.",
      "Mixed herds with zebra and wildebeest are common. Use the nervous species as an early-warning net.",
    ],
    feedSectionTitle: "Sweet bite and sour season",
    feedBody:
      "After rain they exploit green flush. In dry months they lean toward residual protein in standing hay. Managers who ignore grass height see hartebeest fade before kudu complain.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "When zebra lock ears forward, hartebeest often twitch a heartbeat later. Freeze on the first signal, not the second.",
    socialTitle: "Herd nerves and bachelor rehearsal",
    socialIntro:
      "Female herds shuffle young through open country. Bachelor males rehearse dominance in shoving matches that look slow until horn tips connect wrong.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Cows and calves with shared vigilance. Lions work the edge geometry.",
        icon: "mountain",
      },
      {
        title: "Bachelor groups",
        body: "Young bulls learning horn language. Good training for age classing.",
        icon: "binoculars",
      },
      {
        title: "Rut tension",
        body: "Necks thicken, space shrinks. Treat bulls like animals that gore, not like scenery.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut rides nutrition. Expect urine testing, horn fencing, and sudden sprints that ruin stalks built on hope.",
    predationTitle: "Lions, dogs, and the red line",
    predationBody:
      "Lions ambush water and lawn edges. Wild dogs convert panic into heat. Cheetah is less central on heavy adults but not absent. Human hunters who shoot running animals add selection for paranoia.",
    huntTitle: "Hunting the long face",
    huntIntro:
      "Most hartebeest hunts are glass, wind, and honest distance. Tripods and bipods earn their keep on open ground.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Plan oblique approaches. The high withers lie about line of sight.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Dry-season water and known crossing lines. Let animals present without hustling them into fence stress.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Hoof and stride tell urgency. Heavy bulls sink deeper in soft ground.",
        icon: "flame",
      },
    ],
    trophyTitle: "Horns, hooks, and age",
    trophyParagraphs: [
      "Trophy talk centres on horn length, mass, and the forward hook. Compare animals when the ranch allows. Rowland Ward minima are a reference, not the sermon.",
      "Body condition and range health belong in the same sentence as horn tape.",
    ],
    rifleTitle: "Rifles, bullets, and plains truth",
    rifleIntro:
      "Hartebeest are lean but long-bodied. Use controlled-expanding premium bullets in the .270 and .30 classes for confidence on angled shots.",
    rifleTable: [
      ["Minimum", ".270 Win, 7mm-08", "130 to 140 gr premium on perfect broadsides."],
      ["Standard", ".308 Win, .30-06", "150 to 180 gr bonded or partition class."],
      ["Magnum", ".300 Win Mag, 7mm Rem Mag", "Windy open days and heavy bulls."],
      ["Heavy plains", ".375 H&H, 9.3x62", "When the estate brief asks for large-body insurance."],
    ],
    rifleTips: [
      { label: "Range:", body: "Laser twice. The backline tricks parallax." },
      { label: "Broadside:", body: "Mid-crestal heart-lung. Avoid paunch-only lines." },
      { label: "Quartering:", body: "Let the PH own the call. Long faces hide angles." },
      { label: "Follow-up:", body: "Mark land, breathe, hand the drama to experience." },
    ],
    meatTitle: "Meat, trim, and deep flavour",
    meatLeft: [
      "Hartebeest venison is lean and dark with an honest note. It takes smoke and slow heat without apology.",
      "Steaks from the strip and hindquarter reward rare to medium if you respect the grain.",
    ],
    meatRight: [
      "Air-dried strips run long if you chill and slice with discipline.",
      "Field care beats calibre. Dust and hair in the meat insult the animal.",
    ],
    closingTitle: "Ready for the red line?",
    closingBody:
      "Bring glassing patience and a rifle you can shoot cold from sticks. Hartebeest do not forgive wind or ego. We match hunts to census and season.",
    quickFactExtraRows: [
      ["Typical bull mass", "Often near 120 to 160 kg depending on rainfall and soil"],
      ["Horns", "Ridged, both sexes horned; bulls carry the trophy narrative"],
      ["Silhouette", "High withers, sloping back: mind range estimation"],
    ],
    imageSeeds: monoSeeds(s, false),
  };
}
