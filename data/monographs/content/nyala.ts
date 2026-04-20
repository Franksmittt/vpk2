import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function nyalaMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    hidePredationSection: false,
    hideMeatFigures: false,
    heroTitle: "Shale stripes and the spiral shy",
    heroLead:
      "Nyala are Tragelaphus angasii, the striped spiral-horned bridge between bushbuck density and kudu height. Rams carry yellow legs, manes, and horns that hook outward; ewes wear rusty coats with crisp stripes and no horns. They haunt ecotones where browse meets cover.",
    bookCta: "Book a nyala hunt",
    introParagraphs: [
      "Nyala want edges: riverine strips, thicket rims, acacia understory. They browse more than they graze, picking leaves, fruit, and flowers with seasonal shifts. Leopards love their habitat, which means nyala freeze hard and bolt late. Still-hunting craft matters more than magnum fever.",
      "You will read taxonomy placement in Tragelaphini, ram and ewe dimorphism, herd behaviour, predation from leopard to wild dog, stalking craft inside 100 metres more often than 300, rifles from .308 upward with premium bullets, trophy talk on horn flare and age, and meat darker than impala with honest character.",
    ],
    taxonomyTitle: "Taxonomy and the angasii line",
    taxonomyIntro:
      "Nyala sit with kudu, bushbuck, and eland in the spiral-horned tribe. They are not small kudu. Body plan, striping, and social style differ. Marketing should use the right name; export paperwork should match the animal on the hook.",
    taxonomyCards: [
      {
        title: "Nyala",
        sub: "T. angasii",
        body: "Striped ewe-like pelage in females; males gain mane, tan legs, and heavy horns with age.",
      },
      {
        title: "Bushbuck overlap",
        sub: "T. sylvaticus",
        body: "Smaller, denser cover specialist. Competition shows on small properties.",
      },
      {
        title: "Kudu scale",
        sub: "T. strepsiceros",
        body: "Kudu win height; nyala win thicket economy. Learn both silhouettes cold.",
      },
    ],
    formTitle: "Mane, horns, and the striped ewe",
    formPrimaryTitle: "The ram",
    formPrimaryBody:
      "Mature rams carry horns that flare outward then inward with length often quoted past 60 cm in excellent animals. Shoulder height near 110 cm class with mass commonly 90 to 125 kg depending on soil. The dorsal mane and yellow stockings are honest age cues alongside horn mass.",
    formPrimaryBullets: [
      "Young rams can look like large ewes until horns declare themselves. Never rush sex ID in bad light.",
      "Rut brings ground tracking, erect mane, and rude spacing between males.",
    ],
    formSecondaryTitle: "The ewe",
    formSecondaryBody:
      "Ewes are hornless with orange-brown coats and vertical white stripes: one of Africa’s most beautiful pelages, tuned for dappled light where cheek flashes and throat geometry break outline long before a client finishes a range guess. Nursery herds move like smoke through thicket, trading babysitting while calves learn which fruiting edges are worth risk and which leopard trails demand stillness. Young hornless rams can still resemble large ewes in bad light, so professional hunters insist on sex and age confirmation before anyone squeezes—misread identity in a cow-heavy string is both an ethics problem and a quota mistake.",
    formSecondaryBullets: [
      "Stripes read softer on ewes than on dark rams; use body depth and gait, not romance.",
      "Calves hide in the worst pockets of cover; assume one is tucked until a PH clears the picture.",
      "Leopard pressure rewards freeze behaviour; your next step is louder than you think.",
    ],
    formBlockquote:
      "If you see the whole nyala, it likely catalogued you first.",
    ecologyTitle: "Edges, fruit, and the leopard clock",
    ecologyParagraphs: [
      "Nyala rotate browse with rainfall: fresh leaves after rain, pods and fruit when seasons turn. Water dependence is real but not as extreme as lechwe.",
      "Leopards hunt them in their bedroom. That pressure rewards freeze behaviour. Still-hunt slowly or you push only ears.",
      "Stacked density with bushbuck on small farms changes behaviour; shy animals become nocturnal or break fences.",
    ],
    feedSectionTitle: "Browse arcs and garden risk",
    feedBody:
      "Ornamental plantings pull nyala into human edges. Electric fences and dogs create wounds. Hunting is one population tool where conflict rises.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "Listen for the sharp dog bark alarm. Freeze until the sound passes, then adjust on feet, not on knees that flash.",
    socialTitle: "Female herds, bachelor shy, rut theatre",
    socialIntro:
      "Ewes and young form loose groups. Rams appear and vanish like shadows until rut gathers tension.",
    socialCards: [
      {
        title: "Nursery herds",
        body: "Striped bodies in dappled light: glass for calves before shots.",
        icon: "mountain",
      },
      {
        title: "Solitary rams",
        body: "Older males edge habitats alone.",
        icon: "binoculars",
      },
      {
        title: "Rut fights",
        body: "Horn clashes at close range. Do not insert yourself as audience.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Rut is ground urine, mane display, and horn wrestling. Respect distance; a nyala ram is not scenery.",
    predationTitle: "Leopards first, dogs where packs run",
    predationBody:
      "Leopards ambush trails and fruiting trees. Wild dogs convert panic into heat failure. Human hunters owe clean shots because follow-up in wait-a-bit thorn is where ethics fail.",
    huntTitle: "Still-hunting the striped spiral",
    huntIntro:
      "Most ethical shots are inside comfortable stalk ranges if you stop rushing. If you need a 400-metre zero, you are often in the wrong thicket.",
    huntIntroParagraphs: [
      "Nyala reward the hunter who treats riverine cover as architecture, not wallpaper. Stripes break outline in dapple; the spiral reads late. Glass upstream of your boots, then move on a clock that assumes a leopard already drew the same map.",
      "Wind in a draw is not negotiable. Your professional hunter lives for the veto when angle, twigs, or a ewe behind the ram make the shot a lecture instead of a harvest. Thicket ethics are short-range ethics.",
      "On the Iron Mountain we match nyala hunts to census and cover, not to bravado. When the spiral fills the ocular and the chest clears at last light, that is the moment patience bought. Until then, silence is the only calibre that matters.",
    ],
    huntMethods: [
      {
        title: "Still-hunt",
        text: "Walk edges at first light; stop more than you step.",
        icon: "binoculars",
      },
      {
        title: "Ambush",
        text: "Fruit, water seeps, and garden conflict zones. Patience wins.",
        icon: "target",
      },
      {
        title: "Tracking",
        text: "Deep slots in soft sand; dew helps read urgency.",
        icon: "flame",
      },
    ],
    trophyTitle: "Trophy sense on flare and mass",
    trophyParagraphs: [
      "Horn length, flare, and basal mass beat coat gloss. Age shows in mane, body depth, and horn chips.",
      "Rowland Ward on a sheet is reference; PH judgement on density is gospel.",
    ],
    rifleTitle: "Rifles, light, and brush honesty",
    rifleIntro:
      "Nyala are not eland-thick but brush lies. Use .308 to .30-06 class with premium bullets; magnums are optional, not mandatory, unless the week includes larger quarry.",
    rifleTable: [
      ["Minimum", ".308 Win", "Premium bullet, broadside, PH-approved angles."],
      ["Standard", ".30-06, 7mm-08", "Short-range thicket workhorse."],
      ["Magnum", ".300 Win Mag", "If kudu or eland share the itinerary."],
      ["Heavy", "9.3x62", "One-rifle guests who want margin on angles."],
    ],
    rifleTips: [
      { label: "Light:", body: "Dawn in riverine gloom needs transmission." },
      { label: "Broadside:", body: "Tight heart-lung; branches lie." },
      { label: "Sex:", body: "Confirm ewe versus young ram before bolt." },
      { label: "Follow-up:", body: "Assume wounded animals head for the thickest line." },
    ],
    meatTitle: "Meat with honest colour",
    meatLeft: [
      "Nyala venison is darker and more aromatic than impala. Marinade honesty helps picky palates.",
      "Shank and neck forgive slow pots; backstrap rewards rare discipline.",
    ],
    meatRight: [
      "Field care in heat matters double; strip hide fast and chill before stories start.",
    ],
    closingTitle: "Ready for the stripes?",
    closingBody:
      "Bring slow feet and clear sex ID. We match animals to census and cover, not to ego.",
    quickFactExtraRows: [
      ["Horns", "Rams only; heavy flare with age"],
      ["Pelage", "Ewes striped; rams gain mane and tan legs"],
      ["Habitat", "Thicket edges, riverine, mixed bush"],
    ],
    imageSeeds: monoSeeds(s, true, {
      heroLocalBase: "/images/species/nyala",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/nyala",
      introLocalExt: "jpg",
      hornsLocalBase: "/images/species/nyala",
      hornsLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/nyala",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/nyala",
      formSecondaryLocalExt: "jpg",
      panoramaLocalBase: "/images/species/nyala",
      panoramaLocalExt: "jpg",
      feedWideLocalBase: "/images/species/nyala",
      feedWideLocalExt: "jpg",
      ecologyLocalBase: "/images/species/nyala",
      ecologyLocalExt: "jpg",
      predationLocalBase: "/images/species/nyala",
      predationLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/nyala",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/nyala",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/nyala",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/nyala",
      rifleLocalExt: "jpg",
      meatLocalBase: "/images/species/nyala",
      meatLocalExt: "jpg",
    }),
    introPanoramaCaption: "Hooves and sandy substrate, shallow depth of field.",
  };
}
