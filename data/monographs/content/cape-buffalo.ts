import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function capeBuffaloMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Black Death discipline on the Iron Mountain",
    heroLead:
      "Cape buffalo are not a plains-game footnote. They are Syncerus caffer, the southern buffalo that built African hunting legend on charge, follow-up, and respect.",
    bookCta: "Book a buffalo hunt",
    variantCallout:
      "Dangerous game in South Africa: legal minimum calibre is .375 (and listed equivalents). Your professional hunter’s rifle often backs yours. Ego is not part of the equipment list.",
    introParagraphs: [
      "Buffalo live in herds of cows and young, bachelor groups, and the famous dagga boys that haunt thickets alone. They smell and hear at a level that humbles casual stalkers. For ecologists they are bulk grazers that reshape grass height. For hunters they are the animal that teaches follow-up ethics.",
      "This monograph covers taxonomy within Syncerus, body and boss morphology, grazing and water patterns, herd politics, predation from lions, dangerous-game hunting culture, rifles and bullets with regulation in mind, shot placement language without replacing a PH, and meat notes where culture still uses the animal fully.",
    ],
    taxonomyTitle: "Taxonomy and the buffalo clan",
    taxonomyIntro:
      "Forest buffalo and savanna buffalo narratives split in taxonomy debates. In South African hunting you meet Cape buffalo, Syncerus caffer caffer, the heavy bossed form of legend. They are not domestic cattle. Treat distance accordingly.",
    taxonomyCards: [
      {
        title: "Cape buffalo",
        sub: "S. c. caffer",
        body: "Southern and East African savanna form. Boss development, hooked horns, herd and solitary strategies.",
      },
      {
        title: "Dagga boys",
        sub: "Old bulls",
        body: "Often mud-caked, solitary or in small male groups. Famous for cunning and charge after wound.",
      },
      {
        title: "Ecology",
        sub: "Grass and water",
        body: "Bulk grazers that need water regularly. Wallows shape wallows and bird habitat.",
      },
    ],
    formTitle: "Boss, hook, and the barrel chest",
    formEyebrow: "Mass that punishes arrogance",
    formPrimaryTitle: "The mature bull",
    formPrimaryBody:
      "Mature bulls carry massive bosses that can close across the forehead with age. Horns widen, hook, and carry battle scars. Body mass runs in the heavy hundreds of kilograms with chests like wine barrels. Eyes are small but ears and nose map your mistakes.",
    formPrimaryBullets: [
      "Age reads in boss fusion, horn wear, body sway, and attitude. Tape alone lies.",
      "Wounded buffalo rewrite distance. Treat every down animal as alive until the PH finishes the story.",
    ],
    formSecondaryTitle: "Cows and calves",
    formSecondaryBody:
      "Cow herds defend young collectively. Lions still win sometimes. Hunters do not shoot cows on typical trophy safaris unless cull plans exist. Quota language matters.",
    formBlockquote:
      "The first shot is yours. The responsibility chain belongs to the whole team.",
    ecologyTitle: "Grass, wallow, and the herd mind",
    ecologyParagraphs: [
      "Buffalo graze grass swards and will shift with fire and rainfall like other bulk feeders. They drink regularly and use mud for thermoregulation and parasite control. That habit creates hunting predictability and lion predictability at the same time.",
      "Herds move with seasonal nutrition. Bachelor males and dagga boys haunt reeds and river lines where cover forgives old age.",
      "Disease conversations exist in management. This page is not a vet manual. Your outfitter handles testing and movement law.",
    ],
    feedSectionTitle: "Grazing pressure and carrying capacity",
    feedBody:
      "Buffalo numbers swing with grass height. If you see ribs on cows while bulls look fat, ask hard questions about sex-biased nutrition or social stress.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "When buffalo feed into wind, your stalk either starts kilometres away or fails honestly.",
    socialTitle: "Herds, bonds, and solitary old men",
    socialIntro:
      "Female herds are matrilineal networks. Bachelor herds rehearse fighting. Dagga boys opt out and haunt bad country. Humans who interrupt that psychology sometimes meet horn.",
    socialCards: [
      {
        title: "Breeding herds",
        body: "Cows, calves, subadults. Lions test the edges. Hunters do not test the ethics.",
        icon: "mountain",
      },
      {
        title: "Bachelor herds",
        body: "Young males learning shove and hook. Good glassing for age class.",
        icon: "binoculars",
      },
      {
        title: "Dagga boys",
        body: "Old bulls with opinions. Often the trophy narrative. Always the safety narrative.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Buffalo rut is not impala theatre. It is heavy contact, status, and endurance. Give animals space during heightened aggression windows.",
    predationTitle: "Lions and the herd circle",
    predationBody:
      "Lions pull calves and sometimes adults in big herds. Buffalo sometimes drive cats off. Hyena matters more with calves. Human hunters are another selective pressure: choose old post-reproductive bulls when the plan says trophy.",
    huntTitle: "Dangerous-game hunting culture",
    huntIntro:
      "Buffalo hunts are short-range ethics: wind, silence, shooting sticks, and a PH who has seen ego die before.",
    huntMethods: [
      {
        title: "Tracking",
        text: "Dagga boys in thickets. Read dung freshness, hoof sink, and broken stems.",
        icon: "flame",
      },
      {
        title: "Ambush",
        text: "Water and wallow only with professional oversight and backup plans.",
        icon: "target",
      },
      {
        title: "Still-hunt",
        text: "Slow edges at first light. Buffalo ears map careless clicks.",
        icon: "binoculars",
      },
    ],
    trophyTitle: "Bulls, age, and the boss story",
    trophyParagraphs: [
      "Trophy buffalo are a book industry. Width, spread, drop, and age matter more than bragging rights. Rowland Ward numbers on your sheet are conversation starters, not replacements for PH judgement and quota.",
      "Ethical emphasis belongs on old bulls that have done reproductive work. Ask your outfitter how age is verified.",
    ],
    rifleTitle: "Rifles, bullets, and South African law",
    rifleIntro:
      "South Africa expects .375 minimum for dangerous game. Use premium softs for first shots and solids where PH directs follow-up. Practice off sticks with the load you will actually carry.",
    rifleTable: [
      ["Legal floor", ".375 H&H, equivalents", "Non-negotiable for dangerous game where listed."],
      ["Standard DG", ".375 with 300 gr", "Bonded soft or monolithic per PH preference."],
      ["Heavy", ".416 Rigby, .458 Lott", "Popular where clients want extra insurance."],
      ["Follow-up", "Solids", "PH often carries the final word on solids versus softs."],
    ],
    rifleTips: [
      { label: "Shot:", body: "Heart-lung or shoulder-breaking lines per PH brief, not internet myth." },
      { label: "Head:", body: "Not for general hunters. Bone and angle lie." },
      { label: "After:", body: "Mark time, mark place, stay ready. Silence is safety." },
      { label: "Bow:", body: "Separate legal and ethical rules. Ask the outfitter early." },
    ],
    meatTitle: "Meat, culture, and respect",
    meatLeft: [
      "Buffalo meat is eaten in many African kitchens when animals enter the meat quota legally. It is dark, dense, and slow-cook friendly.",
      "Most international trophy narratives centre experience over fillet. Still, wastage is never acceptable.",
    ],
    meatRight: [
      "Horns and boss enter craft and memory. Export and permit law still applies.",
      "This animal funds conservation when hunting is lawful, selective, and transparent.",
    ],
    closingTitle: "Ready for the black?",
    closingBody:
      "Bring humility, bring a legal rifle, bring listening skills. Buffalo finish arguments you start.",
    quickFactExtraRows: [
      ["Dangerous game", "Yes under South African definitions"],
      ["Typical approach", "Short range with PH backup"],
      ["Herd type", "Matrilineal herds plus bachelor and solitary bulls"],
    ],
    imageSeeds: monoSeeds(s, false, {
      panorama: "cape-buffalo-intro-panorama",
      panoramaLocalBase: "/images/species/cape-buffalo",
      panoramaLocalExt: "png",
    }),
    introPanoramaCaption: "Cape buffalo estate field reference below intro copy.",
  };
}
