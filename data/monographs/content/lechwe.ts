import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function lechweMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Wetland royalty behind the reeds",
    heroLead:
      "Lechwe are Kobus leche, water-loving antelope with hooves and hearts tuned to floodplains. On South African game estates they are often an introduced wetland accent. That origin story belongs in the same breath as ethics, permits, and honest marketing.",
    bookCta: "Book a lechwe hunt",
    variantCallout:
      "Lechwe are not indigenous across all of South Africa. Many hunts target estate populations with documented origin and legal movement. Ask your outfitter how water, fences, and genetics are managed before you book.",
    introParagraphs: [
      "In their native range, lechwe live where water and grass trade places with the seasons. Rams carry long, lyre-shaped horns. Sexual dimorphism in coat colour can be dramatic depending on subspecies. They are grazers first, with legs and behaviour that laugh at mud that would trap other quarry.",
      "This monograph covers taxonomy at a hunter’s practical level, form and horn architecture, water-centred ecology, herd behaviour, predation in natural systems versus fenced estates, hunting craft that respects mud and distance, rifles suited to a medium antelope, trophy language, and meat notes where animals enter the legal meat chain.",
    ],
    taxonomyTitle: "Taxonomy and the lechwe cluster",
    taxonomyIntro:
      "Several lechwe taxa exist across central and southern Africa. On local estates you may meet animals marketed under colour or subspecies names. Genetics and paperwork should match the story you sell.",
    taxonomyCards: [
      {
        title: "Kobus leche",
        sub: "Lechwe group",
        body: "Wetland kob with elongated hooves and a grazing focus on floodplain grasses.",
      },
      {
        title: "South African estates",
        sub: "Introduced context",
        body: "Often wetland paddocks or lake margins. Water quality and carrying capacity matter as much as horn length.",
      },
      {
        title: "Ecology",
        sub: "Water broker",
        body: "Concentrates grazing where moisture keeps protein available longer into the dry curve.",
      },
    ],
    formTitle: "Horns, coat, and mud-country legs",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Mature rams carry long, ridged horns that sweep up and out with trophy judges looking at length, mass, and curve integrity. Body mass commonly lands in a medium antelope bracket with rams heavier than ewes. Hindquarters look powerful next to a red lechwe’s saturated coat tones where that form occurs.",
    formPrimaryBullets: [
      "Horn chips and combat scars tell stories that tape alone misses.",
      "Leg length and chest depth read condition alongside the wetland pantry.",
    ],
    formSecondaryTitle: "The ewe",
    formSecondaryBody:
      "Ewes run nursery herds and often show lighter or differently patterned coats depending on taxon, with bodies tuned to wet edges where calves learn mud footing, reed geometry, and the sound of water pumps that replace natural flood pulses on estates. Shared vigilance is not decorative: heads lift in sequence, babysitting rotates through the heat of the day, and a single alarm cough can collapse the whole string into cover you cannot glass honestly from one angle. Confirm sex and estate rules before closing the bolt, because shimmer, mud sheen, and fence panic all buy mistakes cheaper than a range card.",
    formSecondaryBullets: [
      "Compare coat tone and body line in the same herd before you trust a silhouette at distance.",
      "Assume calves behind the first reed wall until a PH clears depth and backdrop.",
      "Hybrid or colour-morph conversations do not replace quota language on the day.",
    ],
    formBlockquote:
      "Mud is not a backdrop. It is a sound engine, a scent engine, and sometimes a wall you cannot cross quietly.",
    ecologyTitle: "Water, grass, and estate engineering",
    ecologyParagraphs: [
      "Wild lechwe life orbits flood timing. On estates, pumps, dams, and grazing rotation replace the natural pulse. Poor water hygiene shows in coat and behaviour before it shows in horn.",
      "They graze lawns that would sour for less specialised species. That niche is valuable until stocking density crosses the line.",
      "Heat still matters. Expect crepuscular movement and midday shade near water unless pressure changes the script.",
    ],
    feedSectionTitle: "Green bite along the water’s edge",
    feedBody:
      "After rain or irrigation, lechwe exploit soft regrowth. If shoreline lawns look scalped and animals look ribby, the conversation is carrying capacity, not luck.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Approach from the water side only when wind and cover make it ethical. Splashing panic spreads faster than hoofbeats.",
    socialTitle: "Harems, herds, and wetland politics",
    socialIntro:
      "Rams hold ground where forage and water allow. Bachelor males rehearse shoving. Nursery herds shuffle through reeds with a vigilance network that hears clumsy boots.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Ewes and young along safe edges. Predators and clumsy approaches test the margin.",
        icon: "mountain",
      },
      {
        title: "Bachelor males",
        body: "Spar and sort rank before territory days arrive.",
        icon: "binoculars",
      },
      {
        title: "Territorial rams",
        body: "Neck thickens, space shrinks. Rut is not theatre for tourists without distance.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut timing follows nutrition and management. Expect horn fencing, urine signals, and sudden sprints through mud that ruin pretty stalk lines.",
    predationTitle: "Crocodiles, lions, and the fence difference",
    predationBody:
      "In native floodplains, crocodiles and lions matter. On estates, management and electrified wire replace parts of that story. Human hunters still owe clean shots and fast field care.",
    huntTitle: "Hunting the waterline",
    huntIntro:
      "Lechwe hunts blend open-ground glassing with wetland stalking. Mud noise, wind on water, and reeds that tangle feet are the exam.",
    huntIntroParagraphs: [
      "Red lechwe read saturn horns against reeds until legs and chest tell the truth. Wetland acoustics punish rushed feet; wind on water maps your mistake before the animal does.",
      "Your professional hunter still owns angle, sex ID, and when the herd is too deep in mud politics. Dog and fence context belong in the briefing, not in a guess.",
      "On the Iron Mountain we match lechwe hunts to census and wetland ethics. Trophy is horn and age on the right ram after glass and patience bought a clean shot.",
    ],
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Use levees and reed shadows. Plan exit routes that do not trap you in black cotton.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Known drink lines and irrigation returns. Never crowd animals against fence corners.",
        icon: "target",
      },
      {
        title: "Still-hunt",
        text: "Slow margins at first light when steam helps your scent story if wind is right.",
        icon: "flame",
      },
    ],
    trophyTitle: "Horns, colour, and disclosure",
    trophyParagraphs: [
      "Trophy lechwe marry horn length with mass and age. Colour morphs and hybrid risk belong in transparent marketing.",
      "Rowland Ward minima on a sheet are a start. Estate ethics and water health finish the paragraph.",
    ],
    rifleTitle: "Rifles, bullets, and medium-body discipline",
    rifleIntro:
      "Lechwe are not eland, but they are not springbok either. The .270 and .30 families with premium bullets cover most ethical scenarios.",
    rifleTable: [
      ["Minimum", ".270 Win", "130 to 150 gr premium for calm broadsides."],
      ["Standard", ".308 Win, .30-06", "150 to 180 gr controlled expansion."],
      ["Flat shooter", "7mm Rem Mag", "Windy pans and longer shots with practice."],
      ["Mixed bag", "7x57, .280 Rem", "Classic choices when recoil matters."],
    ],
    rifleTips: [
      { label: "Mud:", body: "Dry boots lie. Test footing before you commit to a kneel." },
      { label: "Broadside:", body: "Heart-lung centred. Water reflection can lie about line." },
      { label: "Follow-up:", body: "Assume wounded animals head for deepest cover." },
      { label: "Light:", body: "Dawn mist and steam hide brush. Check lanes twice." },
    ],
    meatTitle: "Meat, ethics, and the legal chain",
    meatLeft: [
      "Where lechwe enter the meat quota legally, venison is handled like any antelope: clean gut, fast chill, honest trim.",
      "Wetland mud on the hide is not seasoning. Strip and rinse discipline matters.",
    ],
    meatRight: [
      "Trophy narratives should not erase wastage rules. Use what the law and the estate allow.",
      "Introduced species still deserve field respect.",
    ],
    closingTitle: "Ready for the reeds?",
    closingBody:
      "Bring boots you trust, wind sense, and questions about origin and water. Lechwe hunts are habitat hunts as much as horn hunts.",
    quickFactExtraRows: [
      ["Habitat", "Wetland-centred grazer"],
      ["South Africa", "Often estate populations; verify permits and story"],
      ["Horns", "Long, ridged horns on mature rams"],
    ],
    imageSeeds: monoSeeds(s, false),
  };
}
