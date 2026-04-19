import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function bushbuckMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Spiral horns in the riverine dark",
    heroLead:
      "Bushbuck are not a plains-game afterthought. They are the smallest spiral-horned antelope most hunters meet, and they haunt thick cover like they invented it.",
    bookCta: "Book a bushbuck hunt",
    introParagraphs: [
      "Tragelaphus sylvaticus, the southern or Cape bushbuck, is widespread in South African thickets, forest edges, and riverine strips. Rams carry sharp spiral horns. Ewes are hornless and easy to misidentify in bad light. On properties with dense cover they are a walking test of still-hunting skill.",
      "You will read taxonomy notes on splits from northern bushbuck, morphology and spotting patterns, browse-heavy diets, solitary habits, leopard-heavy predation, ethical still-hunting, rifles suited to short ranges, trophy judgement, and meat that carries more character than impala.",
    ],
    taxonomyTitle: "Taxonomy and the bushbuck map",
    taxonomyIntro:
      "Molecular work split southern and northern bushbuck narratives. For South African hunters the relevant animal is the thick-cover browser with white spots and geometric flashes. Check SANBI assessments for wording you like in marketing footers.",
    taxonomyCards: [
      {
        title: "Southern bushbuck",
        sub: "T. sylvaticus",
        body: "From Cape fynbos edges through eastern savanna thickets. Variable spotting, often fewer stripes than West African forms in field guides.",
      },
      {
        title: "Nyala overlap",
        sub: "Tragelaphus angasii",
        body: "Nyala win body size. Bushbuck win density in tight cover. Competition happens on small properties.",
      },
      {
        title: "Tragelaphini kin",
        sub: "Spiral tribe",
        body: "Kudu, nyala, sitatunga sit further out on the body-size branch. Bushbuck teach thicket craft that scales upward.",
      },
    ],
    formTitle: "Spots, horns, and the riverine walk",
    formEyebrow: "Camouflage is behaviour",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Rams carry horns with a strong spiral, often quoted around half a metre in big animals. Shoulder height near 90 cm class with mass from 45 toward 80 kg depending on region. White spots and throat patches break outline in dappled light. Facial glands mark routes.",
    formPrimaryBullets: [
      "Horns grow with age but shape varies individually. Width of spiral matters to some PHs.",
      "Rams are territorial and can be surprisingly aggressive in rut.",
    ],
    formSecondaryTitle: "The ewe",
    formSecondaryBody:
      "Ewes are clearly smaller and more gracile than mature rams, with no horn pedicles at all. Their coat stays in the warm russet-to-chestnut range, and the white throat band, flank spots, and leg flashes read softer and less graphic than on a dark ram, which helps them melt into dry leaf litter and shaded understory. In poor light or at a sharp angle, a young hornless ram can still resemble an ewe, so professional hunters insist on sex and age confirmation before anyone squeezes. Nursing cows carry calves hidden in the thickest pockets of cover; their behaviour is secretive, and misreading sex in that context is both an ethics problem and a quota mistake.",
    formBlockquote:
      "If you can see the whole bushbuck, it already saw you first.",
    ecologyTitle: "Thickets, fruit, and the leopard clock",
    ecologyParagraphs: [
      "Bushbuck browse leaves, fruit, and flowers. They favour riverine corridors and dense regeneration. Water is close in habitat preference even if they are not marsh specialists.",
      "Leopards hunt them hard. That pressure shaped freeze-and-bolt behaviour. Midday heat often finds them standing in shade like statues.",
      "Small properties with stacked nyala and bushbuck sometimes see behavioural suppression. Density is not kindness.",
    ],
    feedSectionTitle: "Browse selection and garden conflict",
    feedBody:
      "Fruit from sausage trees and garden ornamentals pulls bushbuck into human edges. Electric fences and dogs create wounds. Hunting plans should include humane population tools where conflict rises.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Listen for the soft cough and hoof click on gravel. Ears forward in cover mean you are already in the trial.",
    socialTitle: "Solitude, pairs, and nursery secrets",
    socialIntro:
      "Bushbuck are often solitary or in pairs. Mothers hide calves. Dominance between rams uses horn thrusts at close quarters.",
    socialCards: [
      {
        title: "Solitary life",
        body: "Territories along river lines. Scent marking ties the network.",
        icon: "mountain",
      },
      {
        title: "Pairs",
        body: "Breeding associations can look casual until rut sharpens edges.",
        icon: "binoculars",
      },
      {
        title: "Calves",
        body: "Hidden for days. Dogs that roam free break that strategy.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut brings vocal tension and short violent fights. Respect distance. A bushbuck ram is not a petting-zoo prop.",
    predationTitle: "Leopards first, dogs second, humans last",
    predationBody:
      "Leopards pull adults where cover allows. Wild dogs and hyena matter regionally. Human hunters owe clean shots because follow-up in thorn is where animals suffer and people bleed.",
    huntTitle: "Still-hunting the spiral ghost",
    huntIntro:
      "Bushbuck hunting is slow feet, low optics, and wind drilled into habit. If you need a 300-metre zero, you are probably in the wrong thicket.",
    huntMethods: [
      {
        title: "Still-hunt",
        text: "Walk edges at first light. Stop more than you step.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Fruiting trees and water seeps. Patience beats pacing.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Sharp slots in soft sand along rivers. Dew helps.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on the hoof",
    trophyParagraphs: [
      "Trophy bushbuck talk is horn length, spiral depth, and age. Body mass and scars matter. Rowland Ward on your sheet is a guide, not a replacement for PH judgement on density.",
      "Consider removing inferior young rams where overpopulation shows. Ethics are management, not only tape.",
    ],
    rifleTitle: "Rifles, light, and short tubes",
    rifleIntro:
      "A .308 with a low-power optic is classic. Magnums are not needed for body size but sometimes match mixed-bag weeks. Bullet construction should still be premium to punch light brush without grenading.",
    rifleTable: [
      ["Minimum", ".243 Win", "Only with perfect shot angles and PH sign-off."],
      ["Standard", ".308 Win, 7mm-08", "Short-range thicket workhorse."],
      ["All-rounder", ".30-06", "If eland or kudu share the week."],
      ["Brush", "9.3x62", "Heavy slow if you want one rifle for everything legal."],
    ],
    rifleTips: [
      { label: "Light:", body: "Dawn in riverine gloom needs transmission, not just magnification." },
      { label: "Broadside:", body: "Tight heart-lung. Branches lie." },
      { label: "Angle:", body: "Quartering toward shots are often no-go in thicket." },
      { label: "Follow-up:", body: "Assume wounded animals head for water or the thickest wait-a-bit." },
    ],
    meatTitle: "Meat with character",
    meatLeft: [
      "Bushbuck venison is darker and more aromatic than impala. Some guests love it, some need marinade honesty.",
      "Slow cook with red wine and mushroom respects the shank.",
    ],
    meatRight: [
      "Field care matters double in heat. Get skin off and meat cooling before the barbecue stories start.",
    ],
    closingTitle: "Ready for the thicket?",
    closingBody:
      "Leave the sprint attitude at home. Bushbuck reward the slow hunter.",
    quickFactExtraRows: [
      ["Horns", "Rams only; spiral profile"],
      ["Habitat", "Riverine thickets, forest edges, dense bush"],
      ["Predators", "Leopard primary where cats persist"],
    ],
    hideFormBlockquoteFigures: true,
    hideRutFigures: true,
    hideMeatFigures: true,
    hidePredationSection: true,
    imageSeeds: monoSeeds(s, false, {
      hero: "bushbuck-monograph-hero",
      heroLocalBase: "/images/species/bushbuck",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/bushbuck",
      introLocalExt: "jpg",
      panoramaLocalBase: "/images/species/bushbuck",
      panoramaLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/bushbuck",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/bushbuck",
      formSecondaryLocalExt: "jpg",
      hornsLocalBase: "/images/species/bushbuck",
      hornsLocalExt: "jpg",
      ecologyLocalBase: "/images/species/bushbuck",
      ecologyLocalExt: "jpg",
      feedWideLocalBase: "/images/species/bushbuck",
      feedWideLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/bushbuck",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/bushbuck",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/bushbuck",
      trophyLocalExt: "jpg",
    }),
  };
}
