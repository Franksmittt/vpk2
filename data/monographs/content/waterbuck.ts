import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function waterbuckMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The white ring and the water oath",
    heroLead:
      "Waterbuck are Kobus ellipsiprymnus: heavy-shouldered grazers that advertise water dependence with a pale rump halo. They are not marsh trivia. On the Iron Mountain they are a serious kob—thick coat, strong bone, and enough mass to punish soft bullets.",
    bookCta: "Book a waterbuck hunt",
    introParagraphs: [
      "Ellipsiprymnus names the white ring on the rump—your rangefinder cue in reeds. Rams carry lyrate horns with bold ridges; ewes are hornless. They graze lawns, crop edges, and floodplain grasses, but they seldom stray far from reliable drink for long. That habit makes them predictable on ethical ambushes and dangerous when drought stacks animals on one pan.",
      "This monograph walks taxonomy within Kobus, sexual dimorphism, grazing ecology, herd behaviour, lion and crocodile risk, fieldcraft from glassing reeds to tracking wet ground, rifles from .270 class upward with premium construction, trophy talk on horn length and mass, and venison that needs cold-room respect.",
    ],
    taxonomyTitle: "Taxonomy and the kob circle",
    taxonomyIntro:
      "Waterbuck sit in Reduncinae near lechwe and reedbuck, but body mass and horn style push them toward generalist estate herds. Defassa and common waterbuck narratives differ by geography; South African hunters usually meet the ellipsiprymnus story with the bright rump target.",
    taxonomyCards: [
      {
        title: "Common waterbuck",
        sub: "K. ellipsiprymnus",
        body: "White ring, shaggy coat, strong sexual dimorphism. Rams carry heavy horns; ewes are hornless.",
      },
      {
        title: "Defassa note",
        sub: "Regional forms",
        body: "Where ranges overlap in literature, rely on local PH wording for export and marketing.",
      },
      {
        title: "Ecological role",
        sub: "Water honest",
        body: "They reveal carrying capacity at drink points faster than spreadsheets.",
      },
    ],
    formTitle: "Horns, ring, and the wet-season body",
    formEyebrow: "Mass is the message",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Mature rams commonly run from roughly 230 kg upward in good range with shoulder height near 120 to 135 cm class depending on nutrition. Horns sweep forward and up with strong annuli; length and basal mass matter more than height alone. The neck hump thickens with age. Coat greases in rain—do not mistake shine for condition.",
    formPrimaryBullets: [
      "Combat chips and horn tip wear tell stories tape alone misses.",
      "Rams hold ground near cover when pressured; expect short explosive flight to thicket.",
    ],
    formSecondaryTitle: "The ewe and nursery herds",
    formSecondaryBody:
      "Ewes are hornless and run nursery logic with shared vigilance. Sex ID is usually obvious at ethical ranges; still confirm in reed shimmer before the bolt closes.",
    formBlockquote:
      "If you ignore the wind at water, the white ring will be the last thing you see leaving.",
    ecologyTitle: "Grass, drink, and reed geometry",
    ecologyParagraphs: [
      "Waterbuck clip green bite on lawns and floodplain regrowth. They tolerate coarse grass better than picky specialists but still rotate toward protein when seasons turn.",
      "Dry months stack animals on perennial water. That concentration feeds lions and crocs and tests fence corners. Ethical hunting avoids turning drink into a siege.",
      "Midday heat pushes shade loafing along river lines—still-hunting margins can intersect animals returning from water.",
    ],
    feedSectionTitle: "Grazing lawns and the dry-season knot",
    feedBody:
      "After fire or mowing they are early customers on the flush. When pans shrink, movement compresses. Managers read horn offtake against calf ratios and ewe condition.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Reed shimmer lies about distance. Range before you talk yourself into a hollow paunch shot.",
    socialTitle: "Herd strings, bachelor bands, rut bluntness",
    socialIntro:
      "Loose herds string along cover. Bachelor males rehearse pushing matches. Rut brings neck swelling and blunt chasing—distance still matters.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Ewes and young weave reeds with shared ears.",
        icon: "mountain",
      },
      {
        title: "Bachelor bands",
        body: "Young males in open grass—good horn school before trophy fees.",
        icon: "binoculars",
      },
      {
        title: "Drink tension",
        body: "Predators time pans. So should ethical ambushes.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is muscle and noise more than subtlety. Bulls test each other at close range; do not walk through that theatre like scenery.",
    predationTitle: "Lions, crocs, and dogs where ranges overlap",
    predationBody:
      "Lions ambush water and reed exits. Crocodiles punish sloppy drink geometry in big rivers. Wild dogs run heat where packs persist. Human hunters owe clean first shots because follow-up through wet black cotton is where animals suffer.",
    huntTitle: "Hunting the ring at the waterline",
    huntIntro:
      "Glass, wind, and patience beat sprint attitudes. Most ethical shots are not marathon stalks across open pans without cover.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use reed edges and anthills. Freeze when ears flag.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Dry-season drink with a rested rifle and PH wind check.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Wet ground prints deep; stride tells calm versus spook.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on heavy horns",
    trophyParagraphs: [
      "Length, basal mass, and age wear beat shine. Rowland Ward numbers on a sheet are a floor, not permission to ignore condition.",
      "Compare multiple rams if the property allows. PH filters quota, genetics, and drought truth in real time.",
    ],
    rifleTitle: "Rifles, construction, and wet-day penetration",
    rifleIntro:
      "Waterbuck are not buffalo, but they are dense. Use controlled-expanding premium bullets in .30 calibre class or larger when in doubt. Angled reeds lie—choose a path that still punches the forward shoulder.",
    rifleTable: [
      ["Minimum", ".270 Win", "Perfect broadside, premium bonded, close cover discipline."],
      ["Standard", ".30-06, .308 Win", "150–180 gr premium for most ethical ranges."],
      ["Magnum", ".300 Win Mag, 7mm Rem Mag", "Windy pans and heavy rams."],
      ["Heavy", ".375 H&H", "If estate brief or mixed bag demands it."],
    ],
    rifleTips: [
      { label: "Glass:", body: "Tripod mindset for shimmer and heat." },
      { label: "Broadside:", body: "Mid-shoulder line through heart-lung; avoid paunch-only." },
      { label: "Reeds:", body: "Assume a twig will lie—pick a window, not a wish." },
      { label: "Follow-up:", body: "Mark splash, breathe, let PH own the next move." },
    ],
    meatTitle: "Meat, iron, and cold-room honesty",
    meatLeft: [
      "Waterbuck venison carries more iron note than impala. Guests who want mild should plan marinades; guests who want truth should grill rare with salt.",
      "Shank and neck reward slow heat; backstrap rewards discipline on the pan.",
    ],
    meatRight: [
      "Gut fast in heat, chill fast, and keep hair out of the meat—wet hides punish lazy skinning.",
    ],
    closingTitle: "Ready for the ring?",
    closingBody:
      "Bring premium bullets and premium patience. We match animals to census and water honesty, not to a wish list from three seasons ago.",
    quickFactExtraRows: [
      ["Horns", "Rams only; lyrate with strong ridges"],
      ["ID cue", "White rump ring (ellipsiprymnus)"],
      ["Mass", "Large rams often 230+ kg in good range"],
    ],
    imageSeeds: monoSeeds(s, true),
  };
}
