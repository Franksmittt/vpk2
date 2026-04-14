import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function springbokMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Pronking punctuation on the open sheet",
    heroLead:
      "Springbok are Antidorcas marsupialis, the gazelle that named a nation and a rugby jersey. On the Iron Mountain they read like a weather gauge: when they relax, the range feels honest. When they lift into those stiff-legged bounds, something already decided the day.",
    bookCta: "Book a springbok hunt",
    introParagraphs: [
      "Springbok are not impala with a different paint job. They are arid-country specialists with a white face flash, a dorsal stripe, and a pocket of folded skin on the back that flags during display. They graze and browse with a seasonal brain that chases protein and moisture the way accountants chase margin.",
      "This monograph covers taxonomy within Antidorcas, horn and body form, desert and grassland ecology, herd behaviour and pronking, predation from cheetah to caracal, hunting craft on open ground, rifles tuned to a light animal in wind, trophy talk on horn length and mass, and meat that built South African field cuisine.",
    ],
    taxonomyTitle: "Taxonomy and the springbok line",
    taxonomyIntro:
      "Springbok sit alone in Antidorcas, related to gazelles but not interchangeable with them. Subspecies names map geography from the Karoo to Namibia. On fenced estates genetics and origin paperwork matter if you sell hunts or breeding stock.",
    taxonomyCards: [
      {
        title: "Springbok",
        sub: "A. marsupialis",
        body: "White belly, dark side stripe, horned in both sexes with male horns heavier and longer.",
      },
      {
        title: "Pronking",
        sub: "Stotting display",
        body: "Stiff-legged leaps with the dorsal fan raised. Signals fitness, confuses pursuit, or vents tension depending on who you ask.",
      },
      {
        title: "Ecology",
        sub: "Open country broker",
        body: "Survives heat and fibre better than many mixed feeders. Water-smart where drink is scarce.",
      },
    ],
    formTitle: "Horns, flash marks, and heat economy",
    formEyebrow: "Small bodies, big signal",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Rams carry lyrate horns with strong annuli, often quoted well past 30 cm for good trophies with mass that matters as much as length. Shoulder height is modest, commonly near 75 to 88 cm with mass from mid-twenties to mid-thirties kilograms in lean range conditions. The white face and rump flash are not vanity. They are semaphore for herds running at speed.",
    formPrimaryBullets: [
      "Horn bases tell age alongside body depth. Thin polish on young horns lies less than ego.",
      "Dark lateral stripe reads sharp at distance when sun is low. Use it for sexing before you trust silhouette alone.",
    ],
    formSecondaryTitle: "The ewe",
    formSecondaryBody:
      "Ewes carry horns too, usually slighter. Trophy language on many estates targets rams. Confirm sex and quota with your PH before the rifle settles.",
    formBlockquote:
      "On open ground the springbok does not owe you a standing shot. It owes you honesty about wind.",
    ecologyTitle: "Arid grass, browse, and water discipline",
    ecologyParagraphs: [
      "Springbok switch between graze and browse as moisture and protein shift. After rain they exploit green bite. In dry months they lean on deep-rooted shrubs and seed heads. That diet flexibility is why they still exist where fancier species faded.",
      "Thermoregulation is serious work. Expect dawn and dusk movement, midday shade loafing, and sudden mass shifts when a cold front lies about scent.",
      "Water dependence is real but not crude. They can travel routes you will not guess until you glass the same pan three days in a row.",
    ],
    feedSectionTitle: "Seasons and the springbok pantry",
    feedBody:
      "When managers burn or mow, springbok are early customers on the regrowth. If you see ribs on rams while ewes look round, ask about sex-biased nutrition or social stress rather than blaming the season alone.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "If one animal pronks and the herd does not follow, a predator may still be a theory. If the whole herd lifts, believe the vote.",
    socialTitle: "Herd geometry and nursery logic",
    socialIntro:
      "Springbok mix in aggregations that look chaotic from a distance. Nursery bands shuffle. Rams posture. Dominance is not always loud. Then a lion coughs a kilometre away and the sheet turns white with rumps.",
    socialCards: [
      {
        title: "Mixed herds",
        body: "Ewes, lambs, and young rams share vigilance. Edges are where cats work.",
        icon: "mountain",
      },
      {
        title: "Rams",
        body: "Posture, horn threat, and short chases. Rut is not impala theatre but it still costs calories.",
        icon: "binoculars",
      },
      {
        title: "Flight",
        body: "They run like they mean it. Mark land, not hope, when a shot fails.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut timing follows rain and latitude. Expect male tension, horn fencing, and ewes that test patience. Leopards read rut calendars better than most clients.",
    predationTitle: "Cheetah, wild dogs, and the open lie",
    predationBody:
      "Cheetah converts speed into meat on springbok ground. Wild dogs run heat into collapse. Jackal and caracal pick lambs. Human hunters who shoot on the sprint teach the herd panic. Hold for calm presentations.",
    huntTitle: "Hunting the white flash",
    huntIntro:
      "Springbok reward glass, wind discipline, and rifles you can actually hold steady on sticks. Magnification without tripod thinking is how open ground humbles people.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use folds and dead ground. The white rump betrays you if you skyline yourself.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water and feed pens in dry months. Lets you judge horn without sprinting the herd.",
        icon: "target",
      },
      {
        title: "Still-hunt",
        text: "Slow along dune or pan edges at first light. Springbok often feed in arcs you can predict after two mornings.",
        icon: "flame",
      },
    ],
    trophyTitle: "Horns, mass, and age on a small frame",
    trophyParagraphs: [
      "Rowland Ward language on your sheet is a floor. Good springbok trophies marry length with basal mass and old-animal character. Compare more than one ram when the ranch allows.",
      "Colour morphs exist in intensive systems. Disclose genetics when marketing. Integrity is a long game.",
    ],
    rifleTitle: "Rifles, wind, and light-animal precision",
    rifleIntro:
      "Springbok are not thick, but open ground and wind punish light bullets badly aimed. The .243 class is perfect when loaded with quality projectiles and shot with patience.",
    rifleTable: [
      ["Minimum", ".243 Win, 6mm Creedmoor", "95 to 105 gr premium, broadside presentations only."],
      ["Standard", ".270 Win, 7mm-08", "Flat trajectories for wind days and longer pokes."],
      ["All-rounder", ".308 Win", "If springbok is one stop on a mixed-bag week."],
      ["Plains magnum", ".300 Win Mag", "When you already carry it for larger quarry the same trip."],
    ],
    rifleTips: [
      { label: "Wind:", body: "Read mirage at the springbok, not at your face." },
      { label: "Broadside:", body: "Tight behind the shoulder. The chest is small." },
      { label: "Running:", body: "Default no unless the PH calls it and you have practiced." },
      { label: "Light:", body: "Dawn glare on pale flanks hides brush. Check lanes twice." },
    ],
    meatTitle: "Meat, curing tradition, and national flavour",
    meatLeft: [
      "Springbok venison is fine-grained and mild when handled cold-clean. It is the animal behind countless family air-dried venison recipes.",
      "Backstrap rewards quick heat. Shoulder wants slow-pot honesty.",
    ],
    meatRight: [
      "Trim and cooling matter more than calibre. Gut fast, chill fast, keep hair out of the meat.",
      "Dried sausage from springbok trim is how many families say the trip was worth it.",
    ],
    closingTitle: "Ready for the open sheet?",
    closingBody:
      "Bring a modest rifle and serious wind sense. Springbok forgive vanity even less than they forgive scent. We match animals to census and season, not to an old photo on a phone.",
    quickFactExtraRows: [
      ["Shoulder (ram)", "Often near 75 to 88 cm depending on soil and rainfall"],
      ["Mass (ram)", "Commonly mid-twenties to mid-thirties kg in lean Karoo-type rangeland"],
      ["Horns", "Both sexes horned; trophy focus usually on mature rams"],
    ],
    imageSeeds: monoSeeds(s, false),
  };
}
