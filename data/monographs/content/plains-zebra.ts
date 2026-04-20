import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function plainsZebraMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Burchell’s stripes on the open lie",
    heroLead:
      "Plains zebra are Equus quagga burchellii: social equids that turn grass into vigilance networks. They are not props behind a lion documentary. On hunting estates they are heavy animals with surprising stamina, sharp ears, and a herd brain that punishes sloppy wind.",
    bookCta: "Book a plains zebra hunt",
    introParagraphs: [
      "Zebras clip grass low, compete with wildebeest where ranges overlap, and drink on schedules lions learn faster than some clients. Trophy judgement mixes hide quality, body condition, and management goals. Some properties emphasise population control; others market stallion hides.",
      "This page covers equid taxonomy within modern quagga grouping, stallion politics, predation responses, fieldcraft on open ground and at water, rifles that match sternum depth, shot placement forward of mid-body myths, meat culture where legal and cultural rules allow, and export paperwork reality for international guests.",
    ],
    taxonomyTitle: "Taxonomy and the quagga revival",
    taxonomyIntro:
      "Molecular work folded quagga into plains zebra narrative. Burchell’s zebra is the common hunting form across much of southern Africa. Use the scientific name your outfitter places on permits. Paperwork beats bar debate.",
    taxonomyCards: [
      {
        title: "Burchell’s zebra",
        sub: "E. q. burchellii",
        body: "Broad stripes, shadow stripes often visible, strong herd behaviour.",
      },
      {
        title: "Social model",
        sub: "Harems + bachelors",
        body: "Stallions hold groups; bachelor bands rehearse fights at a distance.",
      },
      {
        title: "Management",
        sub: "Grass and teeth",
        body: "Zebras reveal carrying capacity alongside wildebeest on short lawns.",
      },
    ],
    formTitle: "Teeth, hooves, and the stallion edge",
    formPrimaryTitle: "The stallion",
    formPrimaryBody:
      "Mature plains zebra commonly run 300 kg class and upward with shoulder height near 120 to 140 cm depending on region. Neck crest, scars, and teeth tell age better than stripe width. Kicks kill. Never treat a down animal casually.",
    formPrimaryBullets: [
      "Bachelor fights slash necks and haunches; scars read like ledgers.",
      "Stripes break outline at speed; judge body line, not pattern dazzle.",
    ],
    formSecondaryTitle: "Mares and foals",
    formSecondaryBody:
      "Harem life is not a static postcard. Mares trade babysitting while foals learn the herd’s drink timetable, the lion’s patience, and the way stripes break outline at a gallop. Foals stick tight enough to vanish behind a single mare’s flank until they are old enough to rehearse kicks and spacing with bachelor bands watching from the middle distance. That nursery geometry means ethical shots are taken on confirmed individuals with a calm backdrop, not through the dust of a panic string where a foal line you never saw can absorb a mistake.",
    formSecondaryBullets: [
      "Shared ears lift in sequence; when the herd goes still, assume the wind already failed somewhere upstream.",
      "Stallion politics can hide behind mares; glass for scars, crest, and spacing before the bolt closes.",
      "Shooting through running herds is never the ethical default, whatever the hide price says in the brochure.",
    ],
    formBlockquote:
      "The herd already voted on your wind before you lifted the rifle.",
    ecologyTitle: "Grass, water, and the wildebeest dialogue",
    ecologyParagraphs: [
      "Zebras re-graze lawns and tolerate coarse fibre that would idle picky antelope. Behind fences, movement loops between water and best swards.",
      "Lions learn drink timetables. Crocodiles matter on big rivers. Human hunters should not add harassment at water.",
      "Midday heat finds shade loafing; mornings and evenings move to feed.",
    ],
    feedSectionTitle: "Grazing lawns and fence psychology",
    feedBody:
      "Short grass after fire or mowing pulls zebras early. When pans shrink, strings form to drink. Read carrying capacity in ribs, not only in horn tallies.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "When one zebra’s ears lock, the ripple travels faster than you can whisper ‘freeze.’",
    socialTitle: "Harems, bachelors, and panic geometry",
    socialIntro:
      "Stallions herd mares with teeth and posture. Bachelor bands rehearse for futures. Panic runs in streaks that confuse distance.",
    socialCards: [
      {
        title: "Harem groups",
        body: "One stallion, multiple mares, foals tight.",
        icon: "mountain",
      },
      {
        title: "Bachelors",
        body: "Sparring practice on open grass.",
        icon: "binoculars",
      },
      {
        title: "Predator wave",
        body: "Lions use string geometry; do not sprint herds for photos.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Equid breeding is blunt: biting, kicking, chasing. Give fighting stallions distance.",
    predationTitle: "Lions, dogs, crocs, and human ethics",
    predationBody:
      "Lions pull adults when ambush works. Wild dogs run heat. Crocs own certain drink approaches. Human hunters owe first-shot discipline because wounded zebra cover ground.",
    huntTitle: "Hunting stripes on open ground",
    huntIntro:
      "Wind and glass beat horsepower. Plan paths that use folds and anthills; refuse running shots unless PH and training say yes.",
    huntIntroParagraphs: [
      "Stripes break outline until the herd turns as one and sky lines you. Zebra hunts are herd discipline: pick one animal, hold for still presentation, refuse fence panic.",
      "Your professional hunter still owns target ID, angle, and when the string is too hot. Pans and firebreaks punish sprint attitudes faster than ego recovers.",
      "On the Iron Mountain we match zebra hunts to census and range ethics. Trophy is stallion age and striping truth on the right animal after patience earned the shot.",
    ],
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use terrain noise and sun angle; stalk the slow zebra, not the herd centre.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water in dry months with rested rifle and confirmed target.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Hoof round, stride long when spooked; sand tells truth.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense: hide, age, management",
    trophyParagraphs: [
      "Stallion hides, body mass, and scar character matter alongside striping. Some estates prioritise numbers; others market specific animals. Ask before you fixate.",
      "Export and import rules for zebra products vary by country; your agent owns that stack, not the estate kitchen.",
    ],
    rifleTitle: "Rifles, bullets, and forward heart",
    rifleIntro:
      "Zebra are dense. Use premium controlled bullets in .270 class minimum for adults; .30 calibres are common sense. Shot placement is forward heart-lung. Mid-body deer habits lie on equids.",
    rifleTable: [
      ["Minimum", ".270 Win", "Perfect angle, premium bonded, mature animal caution."],
      ["Standard", ".30-06, .308 Win", "150–180 gr controlled expansion."],
      ["Magnum", ".300 Win Mag", "Windy open ground and heavy stallions."],
      ["Heavy", ".375 H&H", "If estate brief or buffalo week shares the rifle."],
    ],
    rifleTips: [
      { label: "Placement:", body: "Forward shoulder line; avoid paunch-only." },
      { label: "Follow-up:", body: "Assume a wounded zebra runs straight at horizon." },
      { label: "Safety:", body: "Hooves kill at close range. Approach with PH discipline." },
      { label: "Herd:", body: "Pick one animal; never spray into moving stripes." },
    ],
    meatTitle: "Meat culture where law allows",
    meatLeft: [
      "Zebra meat is lean and dark where legal harvest for the table is welcomed. Treat like horse or eland discipline: rare to medium, sharp knives, fast chill.",
    ],
    meatRight: [
      "Many international clients focus on hide and skull; confirm import rules before promising salami stories.",
    ],
    closingTitle: "Ready for the herd line?",
    closingBody:
      "Bring real bullets and real wind checks. We align animals with census and grass truth.",
    quickFactExtraRows: [
      ["Scientific", "Equus quagga burchellii"],
      ["Mass", "Often 300+ kg for mature animals"],
      ["Shot", "Forward heart-lung preferred on equids"],
    ],
    imageSeeds: monoSeeds(s, true),
  };
}
