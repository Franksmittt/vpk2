import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function blesbokMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "The Highveld blaze that came back from the edge",
    heroLead:
      "Blesbok are a South African endemic story: nearly erased, then rebuilt by reserves and private wildlife economics. The white face blaze is not makeup. It is identity you can read at four hundred metres on a frosty morning.",
    bookCta: "Book a blesbok hunt",
    introParagraphs: [
      "Damaliscus pygargus phillipsi is the blesbok subspecies of the shared bontebok lineage. They are alcelaphine grazers: high shoulders, long faces, horns that rise in lyrate curves. On the Iron Mountain they are a keystone of honest grassland management because they show carrying capacity faster than spreadsheets.",
      "This page covers taxonomy and hybrid risk with bontebok, morphology in ram and ewe, seasonal grazing, herd behaviour, predation, open-ground hunting craft, rifles, trophy judgement, meat culture, and the conservation rebound that should make every South African proud.",
    ],
    taxonomyTitle: "Taxonomy and the bles / bontebok split",
    taxonomyIntro:
      "Modern treatments fold blesbok and bontebok into one species with two subspecies. They hybridise freely where managers get lazy. If your brand promises purity, your fences and records are part of the product.",
    taxonomyCards: [
      {
        title: "Blesbok",
        sub: "D. p. phillipsi",
        body: "Brown body, white blaze from forehead to muzzle, white rump saddle. Highveld grassland heartland historically.",
      },
      {
        title: "Bontebok",
        sub: "D. p. pygargus",
        body: "Darker, white facial blaze with different paint scheme. Cape Floristic story. Do not mix breeding lines casually.",
      },
      {
        title: "Conservation",
        sub: "Least Concern now",
        body: "Recovery through parks and ranches. The lesson is economics plus habitat, not guilt alone.",
      },
    ],
    formTitle: "Blaze, horns, and the alcelaphine stride",
    formEyebrow: "Proud head, honest grass eater",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Rams stand near mid-nineties centimetres at the shoulder in many field references, with mass around 70 kg and up depending on range condition. Horns sweep up and in with strong rings. The blaze catches light like a flag. In rut the neck thickens and posture stiffens.",
    formPrimaryBullets: [
      "Trophy quality mixes horn length, mass, and age. Young rams can look tall before they are done.",
      "Blesbok eyes are placed for open-country vigilance. They will pick movement on skylines.",
    ],
    formSecondaryTitle: "The ewe",
    formSecondaryBody:
      "Ewes carry horns too, slimmer. They run the herd calendar. Body condition on ewes is your early drought signal.",
    formBlockquote:
      "If you cannot explain why blesbok and bontebok should stay apart on your farm, you should not sell purity.",
    ecologyTitle: "Grass height, fire, and winter honesty",
    ecologyParagraphs: [
      "Blesbok want short to mid grass lawns. Fire and mowing mimic what historic herds maintained. Let grass go rank and numbers fall before the accountant calls.",
      "Water is needed regularly compared to extreme desert species. Distribution follows grazing quality and drink points.",
      "Cold Highveld snaps matter. Thin animals in June are a management confession.",
    ],
    feedSectionTitle: "Grazing rotation in real fences",
    feedBody:
      "On small properties, rotational resting is not optional romance. It is how you keep face blazes glossy instead of ribby.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Glass blaze before horn. In strong side light the body can look darker than it is and hide condition loss.",
    socialTitle: "Herds, hierarchy, and open-ground nerves",
    socialIntro:
      "Herds bunch and string on open ground. Dominance uses horn threats more than marathon chases. Calves hide briefly then join the group wave.",
    socialCards: [
      {
        title: "Breeding herds",
        body: "Ewes, young, and satellite rams. Movement is contagious.",
        icon: "mountain",
      },
      {
        title: "Bachelor groups",
        body: "Young males sort rank before trophy age.",
        icon: "binoculars",
      },
      {
        title: "Territorial edge",
        body: "On dense properties, overlap causes tension. Space is cheaper than vet bills.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut signs mirror other alcelaphines: chasing, horn sparring, dung rituals on territories where space allows.",
    predationTitle: "Jackal, caracal, and the big cats when they appear",
    predationBody:
      "Calves fall to small predators. Adults die to lions and cheetah where ranges overlap. Human hunters should select clean shots so follow-up does not waste meat on the pan.",
    huntTitle: "Hunting the open blaze",
    huntIntro:
      "Blesbok hunts are wind, sticks, and distance discipline. There is nowhere to hide except the lie you tell yourself about being invisible on a kopje.",
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use dead ground and low crests. Never skyline yourself for a laugh.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Water and licks in dry months. Judge calmly.",
        icon: "target",
      },
      {
        title: "Drives",
        text: "Some estates use ethical drives. Listen to briefings. Safety arcs are not optional.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on the hoof",
    trophyParagraphs: [
      "Rowland Ward on your quarry card sets a floor. Age and condition set the ethics. Heavy bases and scarred bosses often beat a long thin horn on a young ram.",
      "Colour morphs exist in the industry. Disclose genetics in marketing. Hunters deserve truth.",
    ],
    rifleTitle: "Rifles, wind, and flat trajectories",
    rifleIntro:
      "Blesbok are not eland-thick, but open shots tempt underpowered choices. A .308 with a bullet you trust beats a magnum you flinch.",
    rifleTable: [
      ["Minimum", ".243 Win", "Perfect shot, younger animals."],
      ["Standard", ".308 Win", "Works across most ethical ranges on estate."],
      ["Open ground", ".270 Win, .30-06", "Flat paths for wind and distance."],
      ["Magnum", "7mm Rem Mag", "If you hunt the same week as larger plains game."],
    ],
    rifleTips: [
      { label: "Wind:", body: "Highveld gusts move light bullets. Watch mirage." },
      { label: "Broadside:", body: "Heart-lung centred. Avoid high paunch." },
      { label: "Ewes:", body: "Confirm sex and quota with PH before closing bolt." },
      { label: "Colour morphs:", body: "Disclose genetics when selling hunts or breeding stock." },
    ],
    meatTitle: "Meat, air-dried curing, and Highveld tables",
    meatLeft: [
      "Blesbok venison is fine-grained and mild when chilled clean. It is a favourite for air-dried curing for a reason.",
      "Steaks reward medium-rare discipline. Stews forgive the shank.",
    ],
    meatRight: [
      "Serve the conservation story with the plate. This animal is proof that markets can save species when habitat stays honest.",
    ],
    closingTitle: "Ready for the blaze?",
    closingBody:
      "Bring real range data and real wind sense. Open ground punishes posing.",
    quickFactExtraRows: [
      ["Hybrid risk", "Keep blesbok and bontebok apart for pure lines"],
      ["Horns", "Both sexes; rams heavier"],
      ["Habitat", "Highveld grassland and derived pastures"],
    ],
    imageSeeds: monoSeeds(s, false, {
      panorama: "blesbok-intro-panorama",
      panoramaLocalBase: "/images/species/blesbok",
      panoramaLocalExt: "jpg",
    }),
    introPanoramaCaption: "Blesbok estate field reference below intro copy.",
  };
}
