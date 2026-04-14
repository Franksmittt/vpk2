import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function roanAntelopeMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Masked giant on the open sweep",
    heroLead:
      "Roan are Hippotragus equinus: massive hippotragines with clown-mask faces and horns that curve back like scimitars carved long. They love open woodland and grassland mosaics, run in herds that look calm until they are not, and punish weak bullets.",
    bookCta: "Book a roan hunt",
    introParagraphs: [
      "Roan graze tough grasses other antelope skip, carrying bulk that changes stalking math. Cows carry horns; bulls carry mass, scars, and attitude. On estates they are often high-value animals—quota and genetics ride in every conversation.",
      "This page walks taxonomy with sable, horn shape in both sexes, herd behaviour, lion predation on calves, fieldcraft on open ground and timber rims, rifles from .300 magnums upward with premium construction, trophy judgement on length and thickness, and meat that is dark, lean, and honest.",
    ],
    taxonomyTitle: "Taxonomy beside the sable crown",
    taxonomyIntro:
      "Roan and sable share Hippotragus DNA and attitude. Subspecies and regional names belong on permits; marketing should match science.",
    taxonomyCards: [
      {
        title: "Roan",
        sub: "H. equinus",
        body: "Heavy build, facial mask, both sexes horned; cows slimmer but armed.",
      },
      {
        title: "Sable contrast",
        sub: "H. niger",
        body: "Sable bulls black with white belly; roan carry red-brown tide and heavier frame.",
      },
      {
        title: "Ecology",
        sub: "Grass truth",
        body: "Roan read carrying capacity on coarse swards.",
      },
    ],
    formTitle: "Horns in both sexes, mass in the bull",
    formEyebrow: "Hippotragus equinus",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls often exceed 250 kg with shoulder height near 130 to 140 cm class. Horns are long, strongly ridged, and curve backward with tips that sharpen in fights. Facial stripes and mane read age alongside horn bases.",
    formPrimaryBullets: [
      "Fighting scars on neck and flanks tell stories tape misses.",
      "Approach downed animals from behind PH direction—horns swing wide.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows carry horns and mass enough to gore. Sex ID uses body depth and horn thickness—never guess at last light.",
    formBlockquote:
      "Open ground lies about distance; roan lie about how fast they cover it when wounded.",
    ecologyTitle: "Coarse grass, open timber, water honesty",
    ecologyParagraphs: [
      "Roan use open lawns and walk to water on schedules predators learn. Dry months string herds along pans.",
      "Calves hide in grass; lions target nursery edges.",
      "High fences force paths; ethical hunting avoids harassment loops.",
    ],
    feedSectionTitle: "Grazing arcs and management signals",
    feedBody:
      "When ribs show on cows while grass looks tall, you are reading quality, not quantity. Managers pair roan quota with sward chemistry.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Mirage and wind share the same lesson: verify before you celebrate.",
    socialTitle: "Harems, bachelor bands, rut bluntness",
    socialIntro:
      "Breeding herds mix cows, calves, and a bull. Bachelor males rehearse politics at a distance.",
    socialCards: [
      {
        title: "Breeding herds",
        body: "Calves low in grass—identify before bolt.",
        icon: "mountain",
      },
      {
        title: "Bachelors",
        body: "Sparring on open ground—good horn school.",
        icon: "binoculars",
      },
      {
        title: "Predators",
        body: "Lions on calves; adults when ambush aligns.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is pushing, horn fencing, and dust. Distance is respect; cameras are not shields.",
    predationTitle: "Lions, dogs, humans on first shot",
    predationBody:
      "Lions convert nursery geometry into kills. Wild dogs rare but catastrophic. Human hunters owe premium bullets because roan cover ground when poorly hit.",
    huntTitle: "Hunting the masked giant",
    huntIntro:
      "Tripods, wind, and refusal to chase hero shots across mirage pans.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use folds and dead ground; refuse skylined approaches.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water and glade throats in dry months.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Heavy hooves in soft soil; stride lengthens when spooked.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on length and mass",
    trophyParagraphs: [
      "Horn length, basal thickness, and age wear beat face paint alone. Compare animals if the property allows.",
      "Rowland Ward minima are floorboards, not ceilings on ethics.",
    ],
    rifleTitle: "Rifles for heavy bodies and open wind",
    rifleIntro:
      ".300 Win Mag with premium 180 gr class bullets is a sane baseline; .375 H&H is welcome when wind, distance, or mixed-bag weeks demand margin.",
    rifleTable: [
      ["Minimum", ".300 Win Mag", "Premium controlled bullet, calm wind."],
      ["Standard", ".30-06", "Heavy premium only with PH sign-off on angle."],
      ["Preferred", ".375 H&H", "Open ground confidence and angle forgiveness."],
      ["Brush", "9.3x62", "Heavy-for-calibre if timber rims lie."],
    ],
    rifleTips: [
      { label: "Wind:", body: "Read grass and mirage before mirage reads you." },
      { label: "Broadside:", body: "Mid-shoulder heart-lung; avoid paunch-only." },
      { label: "Follow-up:", body: "Mark land; breathe; PH owns the plan." },
      { label: "Herd:", body: "Pick one animal; never spray into strings." },
    ],
    meatTitle: "Meat, dark and serious",
    meatLeft: [
      "Roan venison is lean and iron-forward—rare steaks or slow shanks; no lazy chill room.",
    ],
    meatRight: [
      "Hide and horn often dominate export talk; confirm your agent’s stack early.",
    ],
    closingTitle: "Ready for the mask?",
    closingBody:
      "Bring magnum patience and magnum bullets. We align harvest with census and wind truth.",
    quickFactExtraRows: [
      ["Horns", "Both sexes; bulls far heavier"],
      ["Build", "Among the largest African antelope"],
      ["Calibre", ".300 Mag+ typical; .375 common"],
    ],
    imageSeeds: monoSeeds(s, true),
  };
}
