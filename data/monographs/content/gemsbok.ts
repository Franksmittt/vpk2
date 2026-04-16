import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function gemsbokMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The Kalahari lance in living hide",
    heroLead:
      "Gemsbok are oryx built for heat, distance, and argument. Both sexes carry horns that can kill a careless hunter. They are the animal that makes you respect open ground again.",
    bookCta: "Book a gemsbok hunt",
    introParagraphs: [
      "South Africa’s gemsbok story is tied to red sand, thorn-scrub introductions, and serious plains-game culture. They are not shy background animals. They are large antelope with desert plumbing: nasal cooling, urine concentration, and a willingness to walk away from water longer than your patience.",
      "This monograph covers taxonomy within Oryx, horn truth in both sexes, grazing and browsing in hard country, herd behaviour, predators that still try, hunting craft on open scrub, rifles that match mass, trophy judgement where cows sometimes beat bulls, and meat that loves the curing hook.",
    ],
    taxonomyTitle: "Taxonomy and the oryx clan",
    taxonomyIntro:
      "Gemsbok are Oryx gazella, the flagship of southern arid adaptation. They share the genus with beisa and scimitar cousins in broader Africa. On a hunt you are not scoring a deer. You are scoring a heat-exchange specialist with spear horns.",
    taxonomyCards: [
      {
        title: "Oryx gazella",
        sub: "Gemsbok",
        body: "Large, striking face mask, black garters, rapier horns. Introduced widely beyond core Kalahari range for hunting and tourism.",
      },
      {
        title: "Horns both sexes",
        sub: "Judge carefully",
        body: "Cows often carry longer, thinner horns. Bulls show heavier bases. Mistakes at the trigger are annual industry news.",
      },
      {
        title: "Water story",
        sub: "Not magic, chemistry",
        body: "They drink when they can and mine moisture from plants when they must. That does not mean they never need water on your farm.",
      },
    ],
    formTitle: "Neck, horn, and the unicorn illusion",
    formEyebrow: "Mass and heat on hoof",
    formPrimaryTitle: "The bull",
    formPrimaryBody:
      "Mature bulls commonly run from roughly 180 up toward 240 kg in heavy Kalahari animals, with shoulder height near 1.1 to 1.2 m. The neck is horse-thick for a reason: it supports horn torque in fights and carries vascular radiators under the skin. Horns grow straight to backward with heavy basal rings.",
    formPrimaryBullets: [
      "Wounded gemsbok circle back and hook. Treat every follow-up like a dangerous-game drill without the romantic label.",
      "Judging length at distance is a skill. Compare animals in the same herd when possible.",
    ],
    formSecondaryTitle: "The cow",
    formSecondaryBody:
      "Cows are lighter but not small. Their horns can outlength bulls in trophy talk. They defend calves with commitment. Do not assume cow means safe.",
    formBlockquote:
      "Side-on, one horn can hide behind the other. That is how gemsbok earn the unicorn nickname and how hunters earn embarrassment.",
    ecologyTitle: "Arid scrub, grass, and the water lie",
    ecologyParagraphs: [
      "Gemsbok use grass when it exists and dig for roots, tubers, and succulents when it does not. Melons in the Kalahari are famous for a reason. On Highveld or Eastern Cape introductions they behave more like large mixed feeders but still carry desert kidneys.",
      "Heat shapes day: feed in cooler windows, rest in shade when shade exists. On bare pans they stand like statues until the last safe minute.",
      "Water patterns still concentrate animals in drought. Your blind ethics matter. Pressure without rest days burns sites out.",
    ],
    feedSectionTitle: "Grazing pressure and farm carrying capacity",
    feedBody:
      "Gemsbok can look pristine while the range underneath is not. Track grass height, basal cover, and lambing or calf ratios. If cows are cycling poorly, you are seeing nutrition truth before the accountant does.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "If gemsbok walk into wind while feeding, your stalk plan starts downwind even when the map says you already are.",
    socialTitle: "Herd logic and horn politics",
    socialIntro:
      "Herd size flexes with feed. Dominance uses horn display and body posture more than endless running. Bachelor groups exist. Nursery bands move like oil across scrub.",
    socialCards: [
      {
        title: "Nursery groups",
        body: "Cows and young bunch when predators press. Lions still gamble on the young.",
        icon: "mountain",
      },
      {
        title: "Bachelor males",
        body: "Sparring rehearsals. Good training for horn evaluation at safe distance.",
        icon: "binoculars",
      },
      {
        title: "Dominance",
        body: "Fights are horn fencing, not cuddling. Sound carries on still mornings.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Breeding can run year-round on good ranches with mild seasons. Rut signs include chasing, horn clashes, and subtle harem clustering. Do not insert yourself into that choreography.",
    predationTitle: "Lions, spotted hyena, and long odds",
    predationBody:
      "Adult gemsbok are risky prey. Horns injure. Still, lions and hyena pull calves and occasionally adults when ambush works. Human hunters should not pretend we are the only selective pressure on horn genetics.",
    huntTitle: "Hunting the open scrub lance",
    huntIntro:
      "Gemsbok hunts are wind, distance, and bullet honesty. You will walk more than you think. The reward is a trophy that looks like it was forged, not grown.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use every bush that is not a joke. Plan stalks in arcs, not straight lines toward the herd.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water and feed in dry months. Patience beats sprinting a pan.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Straight deep marks in sand after dew. Heavy bulls plough.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on the hoof",
    trophyParagraphs: [
      "SCI and Rowland Ward numbers are maps, not morals. Look at base mass, length, and tip integrity. Ivory wear can mean age. Polished young length can mean a mistake waiting to happen.",
      "Decide before the hunt whether cow or bull fits the quota story. Then let glass finish the argument.",
    ],
    rifleTitle: "Rifles, penetration, and calm shooting",
    rifleIntro:
      "Gemsbok deserve premium construction. Bonded, partitioned, or monolithic choices should match impact velocity. The .30-06 class is a sane floor for most adults. Magnums earn their keep on big bodies and windy pans.",
    rifleTable: [
      ["Minimum", ".270 Win", "Perfect shot, premium bullet, younger or smaller animals."],
      ["Standard", ".30-06, .308 Win", "180 gr class bonded for shoulder shots."],
      ["Magnum", ".300 Win Mag, 7mm Rem Mag", "Open ground, wind, and heavy cows."],
      ["Heavy", ".375 H&H, 9.3x62", "Matches estate dangerous-game adjacent policy and client nerves."],
    ],
    rifleTips: [
      { label: "Range:", body: "Laser rangefinder culture exists for a reason. Mirage lies." },
      { label: "Broadside:", body: "Heart-lung with room for shoulder if angle drifts." },
      { label: "Follow-up:", body: "Approach a downed gemsbok from behind horn line. PH leads." },
      { label: "Optics:", body: "High magnification helps until it shakes. Practice sticks." },
    ],
    meatTitle: "Meat, air-dried curing, and lean honesty",
    meatLeft: [
      "Gemsbok meat is dark, fine, and famously lean. It dries into cured strips that visitors dream of taking home. Treat it gently in the kitchen: rare to medium for steaks, low heat for roast.",
      "Trim silver skin with care. Impatience there makes chew where flavour should be.",
    ],
    meatRight: [
      "Culturally, oryx horns enter craft and story. Respect export rules and lodge ethics on wastage.",
      "Field photos should not outrank field care. Chill chains matter more than Instagram.",
    ],
    closingTitle: "Ready for the lance?",
    closingBody:
      "Bring real bullets and real range practice. Gemsbok forgive fantasy archers and fantasy calibres equally poorly.",
    quickFactExtraRows: [
      ["Horns", "Both sexes; cows often longer, bulls often heavier at base"],
      ["Mass", "Commonly 100 to 240 kg depending on sex and range condition"],
      ["Range in SA", "Native arid belt plus widespread introductions"],
    ],
    imageSeeds: monoSeeds(s, true, {
      panorama: "gemsbok-intro-panorama",
      panoramaLocalBase: "/images/species/gemsbok",
      panoramaLocalExt: "jpg",
    }),
    introPanoramaCaption: "Gemsbok estate field reference below intro copy.",
  };
}
