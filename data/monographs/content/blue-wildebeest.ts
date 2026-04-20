import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function blueWildebeestMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The brindled engine of the open range",
    heroLead:
      "Blue wildebeest are not background extras. They are bulk grazers that sync with rain, fence lines, and predator pressure. On the Iron Mountain they tell you when the grass is short enough, when water is drawing animals, and when the wind has already betrayed you.",
    bookCta: "Book a blue wildebeest hunt",
    introParagraphs: [
      "Across southern Africa the blue wildebeest is the gnu that built the safari economy alongside zebra and lion. They look ungainly until you watch them run: front-heavy, bearded, unstoppable in a herd pulse. For ecologists they are a grassland dial. For hunters they are a serious plains-game animal with heavy bone and a stride that eats distance.",
      "This page walks taxonomy, the wildebeest body plan, grazing ecology, herd behaviour, predation responses, fieldcraft on open ground, rifles and bullets, trophy sense on horn width and mass, meat in the curing room, and the hybridisation story that every serious rancher should understand.",
    ],
    taxonomyTitle: "Taxonomy and the wildebeest tribe",
    taxonomyIntro:
      "Blue wildebeest sit in the tribe Alcelaphini with hartebeest, tsessebe, and topi. They are not cattle. They are high-amplitude grazers tuned to fire, rainfall, and the chemistry of green bite. The scientific name Connochaetes taurinus ties them to an old Greek flavour of bull-like bulk on hoof.",
    taxonomyCards: [
      {
        title: "Blue wildebeest",
        sub: "C. taurinus",
        body: "The wide-ranging form you meet from South Africa through the greater savannas. Heavily hunted, heavily managed, still central to how tourists picture Africa.",
      },
      {
        title: "Black wildebeest",
        sub: "C. gnou",
        body: "Highveld specialist with a different social system and horn shape. Historic hybridisation with blue animals is a genetic headache where ranges were forced together behind fences.",
      },
      {
        title: "Ranch economics",
        sub: "Meat, trophy, range",
        body: "Wildebeest convert rough grass into protein and revenue. They also compete with cattle where carrying capacity is tight. Your management plan should say how many mouths the land actually holds.",
      },
    ],
    formTitle: "Beard, hump, and horn width",
    formEyebrow: "Sexual signals in a running animal",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls are slab-sided and front-heavy, often running near 250 kg in good range condition with shoulder height around 120 to 150 cm depending on nutrition. The beard is not decoration. It frames scent and status. Horns spread sideways from a heavy boss-like base and curve inward. Trophy talk often centres on width and mass, not only length, because the animal presents horns like handlebars in the field.",
    formPrimaryBullets: [
      "Horns: think width, circumference, and age rings. A young bull can look tall in the scope but still be hollow in the base.",
      "Gait: wildebeest often trot with a rocking motion, then explode. Heavy animals leave deep prints in soft ground after rain.",
    ],
    formSecondaryTitle: "The cow and the calf crop",
    formSecondaryBody:
      "Cows are lighter, finer in the neck, and run the nursery logic of the herd. Calves drop in sync with grass peaks where seasonal breeding still matters. On intensive properties breeding can look more year-round. Either way, calf survival is the silent metric that decides future trophy density.",
    formBlockquote:
      "On open ground the gnu does not need to be pretty. It needs to be gone. Your first job is to stop treating the herd like a static target.",
    ecologyTitle: "Grass, rain, and fence psychology",
    ecologyParagraphs: [
      "Blue wildebeest are bulk grazers. They want short, sweet regrowth after fire or mowing, and they will travel to water when dry-season protein thins. In vast unfenced systems they still move with rainfall memory. Behind wire, movement becomes a loop between water points and the best remaining swards.",
      "Heat hits them like every other dark-backed animal. Expect activity spikes at first light and last light, with midday loafing near shade or water if cover exists. When pressure rises, herds string out and reform like liquid. That behaviour changes stalking math: you are not cutting off one animal, you are threading moving geometry.",
      "Water is honest. In dry months wildebeest drink predictably. That pattern helps ethical ambush setups. It also concentrates predation. Lions learn the timetable faster than most clients.",
    ],
    feedSectionTitle: "Grazing and the wildebeest lawn",
    feedBody:
      "Wildebeest clip grass low when they can, competing directly with zebra in many systems. They also re-graze favourite lawns until the sward looks mown. That habit can help managers read carrying capacity: if lawns are scalped and ribs start to show on cows, you are past polite conversation about quota.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "If you watch a mixed herd of zebra and wildebeest, let the zebra set the tension. When zebra ears lock forward, wildebeest often twitch a split second later. Use that lag to adjust your freeze.",
    socialTitle: "Herd nerves, rut smoke, and hierarchy",
    socialIntro:
      "Wildebeest herds are democracies until they are not. Nursery groups shuffle. Bachelor males loaf. Rutting bulls posture, roll in mud, and fight in shoving matches that look low speed until someone catches a horn tip wrong.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Cows and young mix with zebra and other grazers on open systems. Leadership is fuzzy but movement is contagious.",
        icon: "mountain",
      },
      {
        title: "Bachelor bands",
        body: "Young males rehearse dominance without owning harems yet. Good glassing practice for judging age.",
        icon: "binoculars",
      },
      {
        title: "Rutting bulls",
        body: "Neck thickens, behaviour turns rude, and personal space shrinks. Bulls can gore seriously when people forget they are not cattle.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut timing shifts with latitude and management. Expect urine testing, flehmen, and low-speed horn wrestling. In camp stories the wildebeest is comic until a client tries to walk through a breeding herd like a petting zoo. Distance is respect.",
    predationTitle: "Lions, dogs, and the panic line",
    predationBody:
      "Lions pull adult wildebeest when ambush geometry works. Wild dogs run them to heat failure in long chases. Cheetah targets calves. Human hunters add selective pressure on horn genetics whether we admit it or not. The herd response is classic: scatter, reform, stare from 300 metres as if you are the problem.",
    huntTitle: "Hunting the brindled line",
    huntIntro:
      "Most wildebeest hunts are wind, glass, and distance management. You are not sneaking through thicket. You are using folds, anthills, and the one bush that is not actually too small.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use height early. Read the herd edge, not the centre mass. Plan a path that keeps the sun off your lens flare.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Dry-season water or a known crossing wins here. Let animals present broadside without hustling them into a fence corner.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Heart-shaped tracks versus elongated kudu spoor. Heavy bulls plough wet ground. Follow the story of urgency in the stride length.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on the hoof",
    trophyParagraphs: [
      "Wildebeest trophies live in width, mass, and age. A young bull with flashy spread can still be structurally immature. Old bulls carry facial wear, scar tissue, and a certain slump that says miles. Compare multiple animals if the ranch allows. Your PH is filtering age, genetics, and quota in real time.",
      "Rowland Ward minimums on your quarry sheet are a floor, not the brief. Ethical hunting here is condition of the animal and condition of the range, not panic over tape.",
    ],
    rifleTitle: "Rifles, bullets, and open-ground truth",
    rifleIntro:
      "Wildebeest are heavy-shouldered. They are not buffalo, but they punish soft bullets and bad angles. Use a controlled-expanding premium in the .30 calibre class or larger when in doubt. Flat trajectory helps when the only rest is a rolled jacket on an anthill.",
    rifleTable: [
      ["Minimum", ".270 Win, 7mm-08", "Young animal, perfect broadside, premium bonded bullet."],
      ["Standard", ".308 Win, .30-06", "150 to 180 gr class with partition or bonded construction."],
      ["Magnum", ".300 Win Mag, 7mm Rem Mag", "Open ground and windy days where you need punch and flat path."],
      ["Heavy plains", ".375 H&H, 9.3x62", "Matches estate brief for large-bodied bulls and client confidence."],
    ],
    rifleTips: [
      { label: "Glass:", body: "Bring a tripod mindset even if you carry sticks. Open ground lies about distance." },
      { label: "Wind:", body: "Read mirage at the trot. If grass leans, your scent already did." },
      { label: "Broadside:", body: "Mid-shoulder line into heart-lung. Avoid chasing the empty paunch." },
      { label: "Follow-up:", body: "If the herd runs, mark land, breathe, and let the PH own the next move." },
    ],
    meatTitle: "Meat, air-dried curing, and honest trim",
    meatLeft: [
      "Wildebeest venison is dark and honest. It carries more iron note than impala and takes smoke well. Treat it like serious meat: clean chill, fast bleed, and no lazy hair-on skinning in dust.",
      "Steaks from the hindquarter reward rare to medium. Shoulder and neck want slow heat. Mince stretches the animal into coarse farm sausage that tastes like the property, not the supermarket.",
    ],
    meatRight: [
      "Air-dried curing culture loves wildebeest because the muscle strips long and the salt-vinegar cure sings against the lean profile. Dried sausage from trim is how many South African families say thank you to a good animal.",
      "Hybrids with black wildebeest are not a meat story. They are a genetics story. Keep subspecies and colour lines clean if your brand promises integrity.",
    ],
    closingTitle: "Ready for the open range?",
    closingBody:
      "Bring a rifle you can actually shoot from sticks in wind. Bring patience for herds that refuse to stand still for your ego. We will match you to animals that fit the census, not yesterday’s brochure.",
    quickFactExtraRows: [
      ["Typical bull mass", "Roughly 230 to 270 kg in well-fed Lowveld / open bush systems"],
      ["Horns", "Width and mass often matter as much as length"],
      ["Hybrid risk", "Keep blue and black wildebeest apart where fertile crosses are illegal or bad marketing"],
    ],
    imageSeeds: monoSeeds(s, true, {
      heroLocalBase: "/images/species/blue-wildebeest",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/blue-wildebeest",
      introLocalExt: "jpg",
      panoramaLocalBase: "/images/species/blue-wildebeest",
      panoramaLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/blue-wildebeest",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/blue-wildebeest",
      formSecondaryLocalExt: "jpg",
      hornsLocalBase: "/images/species/blue-wildebeest",
      hornsLocalExt: "jpg",
      ecologyLocalBase: "/images/species/blue-wildebeest",
      ecologyLocalExt: "jpg",
      feedWideLocalBase: "/images/species/blue-wildebeest",
      feedWideLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/blue-wildebeest",
      rutLeftLocalExt: "jpg",
      predationLocalBase: "/images/species/blue-wildebeest",
      predationLocalExt: "jpg",
      huntLocalBase: "/images/species/blue-wildebeest",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/blue-wildebeest",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/blue-wildebeest",
      rifleLocalExt: "jpg",
    }),
  };
}
