import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function impalaMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    hidePredationSection: false,
    heroTitle: "The rooibok rhythm at the waterline",
    heroLead:
      "Impala are the metronome of southern African savanna bush. They are everywhere until they are not, and that flip from common to absent is often your first clue that a leopard has switched the room to silent mode.",
    bookCta: "Book an impala hunt",
    introParagraphs: [
      "No animal better teaches edge habitat than impala. They want grass green enough to graze, browse low enough to strip, and cover close enough to vanish. On the Iron Mountain they are not filler animals. They are the species that proves your water points, your thicket corridors, and your predator load are in balance.",
      "Here you get full monograph depth: taxonomy within Aepyceros, the ram and ewe economy, mixed feeding, rut chaos, anti-predator leaping, hunting craft from walk-and-stalk to blind work, rifles from .243 upward, trophy talk on horn length and age, and meat that rewards cold-room discipline.",
    ],
    taxonomyTitle: "Taxonomy and the impala lineage",
    taxonomyIntro:
      "Impala belong to the subfamily Aepycerotinae as a single-genus survivor of an older radiation. They are not small kudu. They are a mixed-feeding generalist that outcompetes specialists when seasons wobble. The name melampus nods to black feet and heels that flash signals when they run.",
    taxonomyCards: [
      {
        title: "Common impala",
        sub: "A. m. melampus",
        body: "The rooibok of eastern and southern Africa. Red-brown gloss, black tail stripe, lyre horns on rams, hornless ewes.",
      },
      {
        title: "Black-faced impala",
        sub: "A. m. petersi",
        body: "South-western speciality, darker face, more arid tuning. Genetics matter if you market purity.",
      },
      {
        title: "Ecological role",
        sub: "Edge broker",
        body: "Impala stitch woodland to grassland. Remove them and you change predator search images and tick loads in ways lazy census spreadsheets miss.",
      },
    ],
    formTitle: "Lyre horns, glands, and the perfect leap",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Rams carry long lyrate horns with strong ridges, often quoted in the 45 to 90 cm range for big mature animals. Shoulder height commonly lands near 75 to 92 cm with mass from mid-fifties to mid-seventies kilograms in good condition. The neck thickens in rut. Facial glands and black metatarsal tufts are not trivia. They are messaging hardware.",
    formPrimaryBullets: [
      "Territorial rams hold ground when forage allows, then abandon posts when drought forces overlap.",
      "Horn chips and combat scars tell age stories better than a quick glance through binoculars.",
    ],
    formSecondaryTitle: "The ewe and nursery herds",
    formSecondaryBody:
      "Ewes are hornless, lighter, and run the social fabric: female herds can look chaotic but they are information networks where babysitting, allomothering, and shared ears map leopard arcs long before a client finishes a wind check. Calves lie hidden in cover, then merge into the string on a rhythm only the herd fully reads—which is why bulldozed edges, loose dogs, and fence panic break recruitment faster than any horn measurement fixes. Trophy talk loves rams, yet every encounter with ewes still demands clean sex and age confirmation, because a young hornless ram can still resemble an ewe in bad light until bodies tell the truth.",
    formSecondaryBullets: [
      "Glass body depth, flank line, and gait before you trust a head-on silhouette at last light.",
      "Assume calves tucked behind the nearest thicket pocket until a PH clears the line.",
      "When density plans include ewes, estate rules and briefing still finish the sentence, not habit.",
    ],
    formBlockquote:
      "If you only look for the ram with the widest horns, you will sometimes shoot the wrong decade. Learn bodies, not egos.",
    ecologyTitle: "Edges, water, and mixed feeding",
    ecologyParagraphs: [
      "Impala graze when grass is young and browse when fibre rises. Acacia pods, forbs, and flowers rotate through the diet with season. That flexibility is why they survive droughts that starve pickier animals.",
      "Water dependence is real. Herds seldom drift far from reliable drink in dry months. That loyalty makes water blinds ethical and effective when done without harassment.",
      "Thermoregulation pushes midday rest in shade. Mid-morning still-hunting along thicket rims often intersects impala returning from water or finishing a feed loop.",
    ],
    feedSectionTitle: "Browse, graze, and the impala calendar",
    feedBody:
      "After fire or mowing, impala are first customers on the green bite. In late dry season they shift toward deep browse and pod fall. Rut usually rides the shoulder of nutrition when rams can afford to fight instead of only feed.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "When alarm barks ripple a herd, freeze before you drop a knee. Movement is what closes distance for a fleeing impala. Let the noise pass, then adjust on the plan.",
    socialTitle: "Territories, bachelor bands, and rut theatre",
    socialIntro:
      "Impala society is seasonal theatre. Bachelor herds rehearse dominance. Territorial rams herd ewes like rude ushers. Allogrooming knits alliances. Then the herd explodes into high bounds that confuse predators and photographers alike.",
    socialCards: [
      {
        title: "Female herds",
        body: "Loose groups with shared vigilance. Calves learn escape lanes by following panic waves.",
        icon: "mountain",
      },
      {
        title: "Bachelor herds",
        body: "Young rams wait their turn. Good place to learn horn shape without paying trophy fees.",
        icon: "binoculars",
      },
      {
        title: "Territorial rams",
        body: "Urine marking, chasing, horn clashes. Respect distance in rut. They are not pets.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut peaks vary by rainfall and latitude. Expect roaring contests, parallel walks, and sudden violence. Leopards and wild dogs time impala rut like accountants.",
    predationTitle: "Leopards, dogs, and the stotting question",
    predationBody:
      "Impala signal with leaps that may confuse pursuit, advertise fitness, or simply blow off tension. Lions ambush edges. Cheetah targets young. Wild dogs convert panic into heat. Human hunters who shoot running animals teach bad field habits. Hold for still broadsides.",
    huntTitle: "Hunting the edge runner",
    huntIntro:
      "Impala reward quiet feet and good wind more than magnum rifles. Most shots are inside comfortable stalk ranges if you stop rushing.",
    huntIntroParagraphs: [
      "Edges are where impala economy lives: thicket one step left, lawn one step right. The herd reads your silhouette against sky before you read their chest. Glass from cover, move on a metronome, and let the wind be the boss you cannot negotiate with.",
      "Your professional hunter earns veto rights on angle, brush, and which ram is actually legal. Rut noise is not permission to rush. When the white tail flash is the only clear read, reset and breathe.",
      "On the Iron Mountain we match rooibok hunts to census and cover. Trophy is age and horn on the right animal, not a sprint across open ground because the light looked good on camera.",
    ],
    huntMethods: [
      {
        title: "Spot and stalk",
        text: "Walk thicket rims at first light. Use terrain noise from wind in leaves to cover a footfall.",
        icon: "binoculars",
      },
      {
        title: "Blind hunting",
        text: "Water and feed pens in dry months. Lets you judge age without sprinting the herd.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Sharp neat tracks, narrow stride. Panic tracks look like a child dashed chalk.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on the hoof",
    trophyParagraphs: [
      "Horn length is obvious. Age is subtle. Heavy bases, scarred bosses, and body mass tell the story better than a single tape measure on the curl. Rowland Ward on your sheet is a reference, not the sermon.",
      "Ewes are not trophies on this estate’s model. Identify sex with glass before the safety comes off.",
    ],
    rifleTitle: "Rifles, bullets, and small-target discipline",
    rifleIntro:
      "Impala are not thick, but they are not paper either. Use quality bullets that open reliably at impact speeds you actually shoot. The .243 and 6.5 Creedmoor families are perfect when you do your part.",
    rifleTable: [
      ["Minimum", ".243 Win, 6.5 Creedmoor", "100 to 130 gr premium, broadside only."],
      ["Standard", ".270 Win, 7mm-08", "Flat shooting, forgiving in light brush."],
      ["All-rounder", ".308 Win, .30-06", "If impala is day one of a mixed-bag week."],
      ["Brush", "9.3x62", "Heavy-for-calibre if you might meet something larger the same day."],
    ],
    rifleTips: [
      { label: "Glass:", body: "8 to 10x for timber edges. More power rarely fixes bad wind." },
      { label: "Broadside:", body: "Mid-crestal line through heart-lung. Avoid paunch-only presentations." },
      { label: "Running shots:", body: "Default no unless PH calls it and you have practiced." },
      { label: "Light:", body: "Impala eyes love dawn contrast. Keep sun behind you when you can." },
    ],
    meatTitle: "Meat, mince, and honest rooibok flavour",
    meatLeft: [
      "Impala is the gateway venison for guests who fear gaminess. Handled cold-clean, it is mild and fine-grained. Overcooked impala is a crime committed in kitchens, not in the bush.",
      "Backstrap in a pan with butter and rosemary is honest. Mince stretches into meatballs that do not need hiding under sauce.",
    ],
    meatRight: [
      "Air-dried venison and dried sausage built South Africa’s road culture on animals like this. Coriander, vinegar, salt, and patience beat gimmick rubs.",
      "Field care matters more than calibre. Gut fast, chill fast, and never let a warm carcass sit in a closed pickup in the sun.",
    ],
    closingTitle: "Ready to hunt the edge?",
    closingBody:
      "Bring modest rifles and modest footsteps. Impala forgive little and teach a lot. We match animals to the census and the season, not to a wish list from three years ago.",
    quickFactExtraRows: [
      ["Shoulder (ram)", "Roughly 75 to 92 cm in most savanna populations"],
      ["Mass (ram)", "Often 53 to 76 kg in good condition"],
      ["Horns", "Lyrate, strongly ridged, length varies sharply by age and soil"],
    ],
    imageSeeds: monoSeeds(s, true, {
      heroLocalBase: "/images/species/impala",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/impala",
      introLocalExt: "jpg",
      hornsLocalBase: "/images/species/impala",
      hornsLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/impala",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/impala",
      formSecondaryLocalExt: "jpg",
      panoramaLocalBase: "/images/species/impala",
      panoramaLocalExt: "jpg",
      feedWideLocalBase: "/images/species/impala",
      feedWideLocalExt: "jpg",
      ecologyLocalBase: "/images/species/impala",
      ecologyLocalExt: "jpg",
      predationLocalBase: "/images/species/impala",
      predationLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/impala",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/impala",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/impala",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/impala",
      rifleLocalExt: "jpg",
    }),
    introPanoramaCaption: "Thicket edge: impala almost lost in dappled scrub.",
  };
}
