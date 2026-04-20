import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function sableAntelopeMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    hidePredationSection: false,
    hideMeatFigures: false,
    heroTitle: "Black cape, scimitar, iron nerve",
    heroLead:
      "Sable are Hippotragus niger: one of Africa’s most beautiful antelope and one of the most dangerous at close quarters. Rams carry backward-sweeping scimitar horns with razor attitude; cows carry slimmer horns and serious temper when cornered.",
    bookCta: "Book a sable hunt",
    introParagraphs: [
      "Sable graze and browse in woodland mosaics, often at the edge of open glades where light deceives range. They are herd animals with stallion-like bull posturing. Clashes are violent, short, and loud. On well-managed estates they signal genetics and carrying capacity; on crowded ground they break fences and gore each other.",
      "This monograph covers Hippotragus taxonomy beside roan, horn architecture and sexual dimorphism, mixed feeding, herd behaviour, lion predation where cats persist, fieldcraft for shot discipline inside timber, rifles from .300 magnums upward with premium controlled bullets, trophy talk on horn length and curvature, and meat that rewards cold handling.",
    ],
    taxonomyTitle: "Taxonomy and the hippotragine crown",
    taxonomyIntro:
      "Sable and roan share the Hippotragus genus. Both carry horse-like manes and serious horns. Subspecies narratives exist; your permit text should match what you shoot.",
    taxonomyCards: [
      {
        title: "Sable",
        sub: "H. niger",
        body: "Black mature males with white face and belly; cows chestnut with scimitars.",
      },
      {
        title: "Roan cousin",
        sub: "H. equinus",
        body: "Roan carry heavier build and facial masks; do not confuse at speed.",
      },
      {
        title: "Ecology",
        sub: "Woodland edge",
        body: "Signals browse-grass balance on the property.",
      },
    ],
    formTitle: "Scimitar, mane, and the cow’s temper",
    formEyebrow: "Hippotragus truth",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls commonly run 220 to 270 kg class with shoulder height near 120 to 140 cm depending on soil. Horns sweep back in long curves with length often quoted past a metre in exceptional animals. The neck mane and facial mask read age alongside horn chips.",
    formPrimaryBullets: [
      "Ground fighting sharpens horn tips. Respect approach on a down bull.",
      "Black pelage can hide muscle seams in shadow; glass body depth.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows carry horns and attitude. Never assume ‘smaller means safe’ inside a boma or capture pen.",
    formBlockquote:
      "A sable that turns broadside at forty metres still owns forty metres of kill radius if you botch the first shot.",
    ecologyTitle: "Woodland glades and the grass beneath",
    ecologyParagraphs: [
      "Sable mix graze and browse, shifting with season. They like edges where sunlight hits grass under tree cover.",
      "Lions pull adults where ambush geometry works; calves vanish fast in herds.",
      "High-value genetics can crowd small properties. Density is not kindness.",
    ],
    feedSectionTitle: "Mixed feeding and fence stress",
    feedBody:
      "When browse thins, sable test fences and neighbours. Managers read horn offtake against body scores.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Listen for horn clash percussion. It travels farther than hoof noise.",
    socialTitle: "Herd strings, bull duels, dominance bluntness",
    socialIntro:
      "Females and young string through timber. Bulls posture, chase, and fight with shocking violence for their grace.",
    socialCards: [
      {
        title: "Female herds",
        body: "Shared ears along glade edges.",
        icon: "mountain",
      },
      {
        title: "Bull politics",
        body: "Clashes at close range. Never walk through the theatre.",
        icon: "binoculars",
      },
      {
        title: "Predators",
        body: "Lions ambush glades; dogs rare but catastrophic.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is pushing, horn fencing, and rude spacing. Give bulls room; cameras are not armour.",
    predationTitle: "Lions in timber, humans on shot discipline",
    predationBody:
      "Lions use light lines at glade throats. Human hunters owe premium bullets and calm breathing because follow-up inside sickle bush is where ethics die.",
    huntTitle: "Hunting the scimitar in cover",
    huntIntro:
      "Glass, wind, and shot windows beat rushing for hero photos. If you cannot see legs, you do not have a shot.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use sun patches to read bodies; freeze when ears lock.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Glades and water lines in dry months.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Sharp slots; stride shortens when browsing, lengthens when spooked.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on curve and mass",
    trophyParagraphs: [
      "Horn length, basal mass, and curve integrity beat black gloss. Compare animals when the ranch allows.",
      "Rowland Ward minima are reference; PH judgement on age and genetics is final.",
    ],
    rifleTitle: "Rifles, penetration, and timber lies",
    rifleIntro:
      "Treat sable like serious antelope: .300 Win Mag class with premium controlled bullets is common sense; .375 H&H is welcome when angles stink or mixed dangerous game shares the week.",
    rifleTable: [
      ["Minimum", ".300 Win Mag", "180 gr premium, broadside discipline."],
      ["Standard", ".30-06", "Only with perfect angles and heavy bullets. PH sign-off."],
      ["Preferred", ".375 H&H", "Angles, timber, and client confidence."],
      ["Note", "Construction", "Bonded or monolithic if brush lies."],
    ],
    rifleTips: [
      { label: "Broadside:", body: "Forward shoulder line; heart-lung first." },
      { label: "Brush:", body: "Assume a twig; pick a window." },
      { label: "Follow-up:", body: "Assume a wounded sable runs at you, not away." },
      { label: "Approach:", body: "Horns move faster than you think when down is not dead." },
    ],
    meatTitle: "Meat, dark and honest",
    meatLeft: [
      "Sable venison is dark and fine-grained when chilled clean. Rare to medium for steaks, slow for shank.",
    ],
    meatRight: [
      "Field care matters; summer heat turns heavy hides into bacterial parties.",
    ],
    closingTitle: "Ready for the scimitar?",
    closingBody:
      "Bring heavy bullets and humble feet. We match animals to genetics and grass, not to bravado.",
    quickFactExtraRows: [
      ["Horns", "Both sexes; bull scimitars massive"],
      ["Danger", "Close-quarters goring risk. PH discipline"],
      ["Calibre", ".300 Mag+ common; .375 welcomed"],
    ],
    imageSeeds: monoSeeds(s, true, {
      heroLocalBase: "/images/species/sable-antelope",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/sable-antelope",
      introLocalExt: "jpg",
      hornsLocalBase: "/images/species/sable-antelope",
      hornsLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/sable-antelope",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/sable-antelope",
      formSecondaryLocalExt: "jpg",
      panoramaLocalBase: "/images/species/sable-antelope",
      panoramaLocalExt: "jpg",
      feedWideLocalBase: "/images/species/sable-antelope",
      feedWideLocalExt: "jpg",
      ecologyLocalBase: "/images/species/sable-antelope",
      ecologyLocalExt: "jpg",
      predationLocalBase: "/images/species/sable-antelope",
      predationLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/sable-antelope",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/sable-antelope",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/sable-antelope",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/sable-antelope",
      rifleLocalExt: "jpg",
    }),
    introPanoramaCaption: "Thicket edge, horn curve, or white mask flash in the bokeh.",
  };
}
