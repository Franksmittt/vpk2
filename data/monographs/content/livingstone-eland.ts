import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function livingstoneElandMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Spiral crowns on the giant’s shoulders",
    heroLead:
      "Livingstone eland are Taurotragus oryx livingstonei, the southern form of the largest antelope most hunters will ever shoulder. On the Iron Mountain they are a walking argument for calm rifles, patient glass, and the humility heavy animals teach.",
    bookCta: "Book a Livingstone eland hunt",
    introParagraphs: [
      "Eland are not kudu with a size slider. They are mixed feeders that shift from graze to browse as fibre and moisture change, carrying mass that changes stalking math, bullet choice, and recovery logistics. Livingstone animals carry the taxonomic tag hunters expect when marketing southern genetics and estate origin.",
      "This monograph covers taxonomy at a practical level, horn spiral and body form, feeding ecology from lawn to canopy, herd behaviour, predation mainly from lions, hunting craft for an animal that vanishes surprisingly well for its bulk, rifles in the true medium and heavy plains classes, trophy talk on horn length and mass, and meat that feeds a village when handled legally.",
    ],
    taxonomyTitle: "Taxonomy and the giant kudu cousin",
    taxonomyIntro:
      "Eland sit in Taurotragus alongside the giant eland narrative. Subspecies names map geography. On fenced estates, genetics and paperwork should align with what you advertise to clients and breeders.",
    taxonomyCards: [
      {
        title: "Livingstone eland",
        sub: "T. o. livingstonei",
        body: "Southern savanna form with heavy body and tightly spiralled horns in mature bulls.",
      },
      {
        title: "Nominate form (T. oryx)",
        sub: "Species reference",
        body: "Root taxon for the eland complex; subspecies names map geography. Horn spiral, dewlap, and body mass define the silhouette.",
      },
      {
        title: "Ecology",
        sub: "Mixed-feeding bulk",
        body: "Switches graze and browse with season. Carries carrying-capacity weight on every property.",
      },
    ],
    formTitle: "Spirals, dewlap, and the silent vanish",
    formEyebrow: "Mass that rewrites distance",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls carry thick horns that spiral with age, often quoted past 60 cm for serious trophies with basal mass that judges love. Live mass can exceed half a tonne in exceptional farm condition with shoulder height commonly near 150 to 180 cm in well-fed animals. The dewlap is not decoration. It is thermoregulation and dominance hardware.",
    formPrimaryBullets: [
      "Horn wear, body sway, and neck thickness beat bragging from a single glance through heat shimmer.",
      "Eland trot like freight. Do not confuse calm movement with permission to rush the shot.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows are horned, lighter, and run the herd fabric. Trophy plans usually target bulls. Glass for sex, age, and quota before the rifle settles.",
    formBlockquote:
      "The eland you saw at two hundred metres is not the same animal after it steps into thicket. Believe the cover, not your pride.",
    ecologyTitle: "Lawns, pods, and browse ladders",
    ecologyParagraphs: [
      "Eland graze when grass is sweet and climb into browse when fibre rises. Acacia pods, forbs, and flowers rotate through the diet. That flexibility makes them durable in droughts that starve pickier grazers.",
      "Water dependence is real. Dry-season drink patterns are stalkable and ethically ambushable when done without harassment.",
      "Heat pushes shade behaviour. Mid-morning still-hunts along thicket rims can intersect animals returning from water or finishing a feed loop.",
    ],
    feedSectionTitle: "Mixed feeding and carrying capacity",
    feedBody:
      "Eland are bulk mouths. If lawns look scalped and eland look glossy while smaller species fade, ask hard questions about competitive exclusion and quota.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "When an eland herd stares without stamping, wind is often already a verdict. Reset before you advance.",
    socialTitle: "Herds, nursery bands, and bull politics",
    socialIntro:
      "Female herds shuffle young through a mix of open and edge habitat. Bulls drift in and out of dominance stories that cost calories and horn chips.",
    socialCards: [
      {
        title: "Female herds",
        body: "Loose groups with shared vigilance. Calves learn escape lanes early.",
        icon: "mountain",
      },
      {
        title: "Bachelor bulls",
        body: "Rehearse pushing matches before territory days. Good glassing school.",
        icon: "binoculars",
      },
      {
        title: "Mature bulls",
        body: "Heavy neck, worn horns, attitude. Respect distance during rut windows.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut follows nutrition. Expect urine testing, flehmen, and shoving matches that look slow until they are not.",
    predationTitle: "Lions and the weight class",
    predationBody:
      "Lions pull adult eland when ambush works. Wild dogs target calves. Human hunters add selection on horn genetics. Choose old bulls when the plan says trophy and the census agrees.",
    huntTitle: "Hunting the spiral giant",
    huntIntro:
      "Eland hunts are wind, glass, and shot discipline. You are not punching paper. You are placing a bullet through heavy muscle and bone on an animal that can run far when pushed.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use folds and thicket rims. Plan for the moment cover swallows a tonne of meat.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Dry-season water with patience. Let broadsides happen without fence panic.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Heavy hooves in soft ground tell urgency. Follow the stride story honestly.",
        icon: "flame",
      },
    ],
    trophyTitle: "Spirals, mass, and age",
    trophyParagraphs: [
      "Trophy eland marry horn length with basal mass and spiral integrity. Compare animals when the ranch allows. Rowland Ward minima are a floor, not the brief.",
      "Body condition and range health belong in the same sentence as horn tape.",
    ],
    rifleTitle: "Rifles, bullets, and heavy-antelope respect",
    rifleIntro:
      "Eland deserve premium controlled-expanding bullets in the .30 magnum class or larger when in doubt. Shot placement still beats calibre theatre.",
    rifleTable: [
      ["Minimum", ".30-06, .308 Win", "180 gr bonded class on perfect broadsides."],
      ["Standard", ".300 Win Mag, 7mm Rem Mag", "Heavy-for-calibre premium for confidence on angles."],
      ["Heavy plains", ".375 H&H, 9.3x62", "Matches estate brief and client peace of mind."],
      ["Classic", ".338 Win Mag", "Where recoil discipline and punch already live in your hands."],
    ],
    rifleTips: [
      { label: "Broadside:", body: "Heart-lung or shoulder-breaking lines per PH brief." },
      { label: "Angle:", body: "Long spirals hide presentation. Wait for truth." },
      { label: "Follow-up:", body: "Mark land. Heavy animals leave sign if you look calmly." },
      { label: "Recovery:", body: "Plan meat logistics before the shot. Respect the animal’s weight." },
    ],
    meatTitle: "Meat, community, and field care",
    meatLeft: [
      "Eland venison feeds many mouths when entered legally into the meat chain. It is lean, dark, and honest in slow cooks.",
      "Backstrap rewards respect. Overcooking insults the animal twice.",
    ],
    meatRight: [
      "Gut fast, chill fast, keep hair out of the meat. Volume magnifies mistakes.",
      "Trophy and meat narratives can coexist when law and ethics align.",
    ],
    closingTitle: "Ready for the giant?",
    closingBody:
      "Bring a rifle you can place cold from sticks. Bring patience for animals that disappear behind one false thicket. We match hunts to census and carrying capacity, not to brochure ghosts.",
    quickFactExtraRows: [
      ["Mass (bull)", "Can exceed 500 kg in exceptional farm condition"],
      ["Horns", "Spiralled in both sexes; bulls carry trophy focus"],
      ["Feeding", "Mixed grazer-browser; seasonal diet shift"],
    ],
    imageSeeds: monoSeeds(s, false, {
      predation: "livingstone-eland-predation-lions",
      heroLocalBase: "/images/species/livingstone-eland",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/livingstone-eland",
      introLocalExt: "jpg",
      hornsLocalBase: "/images/species/livingstone-eland",
      hornsLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/livingstone-eland",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/livingstone-eland",
      formSecondaryLocalExt: "jpg",
      panoramaLocalBase: "/images/species/livingstone-eland",
      panoramaLocalExt: "jpg",
      feedWideLocalBase: "/images/species/livingstone-eland",
      feedWideLocalExt: "jpg",
      ecologyLocalBase: "/images/species/livingstone-eland",
      ecologyLocalExt: "jpg",
      predationLocalBase: "/images/species/livingstone-eland",
      predationLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/livingstone-eland",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/livingstone-eland",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/livingstone-eland",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/livingstone-eland",
      rifleLocalExt: "jpg",
    }),
    introPanoramaCaption:
      "Woodland glade, grass edge, or spiral silhouette in heat shimmer.",
  };
}
