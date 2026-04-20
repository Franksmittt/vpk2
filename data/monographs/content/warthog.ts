import type { QuarrySpecies } from "@/data/species";
import type { MonographDefinition } from "../types";
import { monoSeeds } from "../seeds";

export function warthogMonograph(s: QuarrySpecies): MonographDefinition {
  return {
    heroTitle: "Vlakvark attitude in a serious package",
    heroLead:
      "Warthogs are not comic relief. They are grazing pigs that kneel to eat, vanish into aardvark holes tail-first, and cut humans who forget the lower tusks are razors.",
    bookCta: "Book a warthog hunt",
    introParagraphs: [
      "Phacochoerus africanus is the common warthog of savanna and open woodland across southern Africa. They are diurnal, water-loving when it is hot, and surprisingly fast when dogs or lions apply pressure. On game farms they are opportunity animals with real tusk trophies and excellent meat if you respect the carcass.",
      "You will read taxonomy notes, tusk mechanics, sounder structure, burrow strategy, predation from big cats and dogs, hunting approaches from still-hunting to blinds, rifles from 7×57 class up, shot placement that respects the compact body, and kitchen uses from the grill to a slow pot.",
    ],
    taxonomyTitle: "Taxonomy and the Suidae edge",
    taxonomyIntro:
      "Warthogs are true pigs adapted to sun and lion pressure. Subspecies names shift in literature, but southern animals are the ones you meet in South African hunting camps. They are not bushpigs. Different genus, different night, different trouble.",
    taxonomyCards: [
      {
        title: "Common warthog",
        sub: "P. africanus",
        body: "Warts, tusks, dorsal mane, tail antenna. Grazes short grass on calloused wrists.",
      },
      {
        title: "Desert warthog",
        sub: "P. aethiopicus",
        body: "Horn of Africa speciality. Keep names clean in copy if you ever compare ranges.",
      },
      {
        title: "Ecology",
        sub: "Soil turnover",
        body: "Rooting and wallow use shape insect communities and waterhole edges. They are small engineers with big attitude.",
      },
    ],
    formTitle: "Tusks, warts, and the kneeling grazer",
    formEyebrow: "Sexual armour, not jokes",
    formPrimaryTitle: "The boar",
    formPrimaryBody:
      "Boars carry two pairs of warts and impressive upper canines that curve like scimitars. Lower canines hone on uppers every time the mouth opens. Shoulder height often lands near 63 to 85 cm with mass from 60 kg toward 150 kg in big coastal or lush animals. The tail stands like an antenna when they trot.",
    formPrimaryBullets: [
      "Tusks are weapons and status. Length and wear tell age and fighting history.",
      "Boars join sounders for oestrus, otherwise roam or bachelor in smaller groups.",
    ],
    formSecondaryTitle: "The sow and piglets",
    formSecondaryBody:
      "Sows run sounders with stripy piglets. A sow with young is a different legal and ethical conversation than a lone boar. She will fight dogs and humans with commitment.",
    formBlockquote:
      "Never crawl toward a hole mouth-first. Warthogs designed that mistake for hyenas, not photographers.",
    ecologyTitle: "Grass, roots, and the waterhole social club",
    ecologyParagraphs: [
      "Warthogs graze short grass on bent wrists, then root for rhizomes and tubers when protein calls. They visit water predictably in heat and wallow to shed parasites. That routine makes ethical blinds possible and lions predictable.",
      "Burrows matter. They use aardvark tunnels, widen them, and back in so teeth face the door. That habit also means wounded animals head for holes and complicate recovery.",
      "Heat shuts down midday activity except near water. Plan stalks for morning and late afternoon edges.",
    ],
    feedSectionTitle: "Omnivory rumours and mineral truth",
    feedBody:
      "Warthogs are primarily plant eaters but field guides document occasional protein grabs. More practically on farms they eat bone fragments and soil for minerals. Provide ethical licks rather than letting them raid rubbish pits.",
    fieldNoteTitle: "Field note",
    fieldNoteBody:
      "If you hear grass tearing in short sward, look low. Warthogs feed at a height humans forget to scan.",
    socialTitle: "Sounders, bachelors, and lone boars",
    socialIntro:
      "Sounders are female-led family groups. Bachelor males cluster. Big boars cruise alone with chipped tusks and opinions. Social scent marking around beds and water is constant.",
    socialCards: [
      {
        title: "Sounders",
        body: "Piglets learn bolt timing from adults. Dogs that rush sounders create chaos.",
        icon: "mountain",
      },
      {
        title: "Bachelor groups",
        body: "Young males practise pushing. Good tusks sometimes appear early.",
        icon: "binoculars",
      },
      {
        title: "Solitary boars",
        body: "Often the trophy conversation. Also often the most committed fighter when wounded.",
        icon: "crosshair",
      },
    ],
    rutParagraph:
      "Breeding peaks vary. Boars track oestrus with persistence. Fights can be bloody. Give rutting animals the same space you would give any large mammal with knives on its face.",
    predationTitle: "Lions, leopards, dogs, and the bolt",
    predationBody:
      "Lions and leopards eat warthogs regularly. Wild dogs pull piglets and sometimes adults. Crocodiles lie at water. Warthogs bolt for holes or open sprint. Human hunters should avoid shooting on the run into thickets where recovery goes dark.",
    huntTitle: "Hunting the kneeling razor",
    huntIntro:
      "Warthog hunting rewards patience and close ranges. This is not a 400-metre culture unless you are paper punching. Stalking short grass and still-hunting water is the soul of it.",
    huntMethods: [
      {
        title: "Still-hunt",
        text: "Walk water margins and wallows at first light. Freeze when tails go stiff.",
        icon: "binoculars",
      },
      {
        title: "Blind",
        text: "Dry-season water ethics apply. Judge tusks without sprinting sounders.",
        icon: "target",
      },
      {
        title: "Spot and stalk",
        text: "Use anthills and termitaria in open savanna. Wind is everything.",
        icon: "flame",
      },
    ],
    trophyTitle: "Tusks, age, and the ruler",
    trophyParagraphs: [
      "Trophy talk focuses on length, circumference, and shape. Some hunters want heavy lowers for display, others want upper curve. Age connects to chips and wear. PH judgement prevents shooting immature boars with pretty profiles.",
      "Sows are not the tusk trophy target. Sex identification with glass is basic professionalism.",
    ],
    rifleTitle: "Rifles, bullets, and short-range honesty",
    rifleIntro:
      "Warthogs are dense. A .375 is legal for dangerous game elsewhere but overkill is not the issue on a pig: shot placement is. The 7×57 and .308 class with tough bullets anchor most ethical work.",
    rifleTable: [
      ["Minimum", ".243 Win", "Young animals, perfect neck or heart shots only with PH approval."],
      ["Standard", "7×57, .308 Win", "150 to 165 gr bonded for shoulder or heart-lung."],
      ["All-rounder", ".30-06", "If warthog is part of a mixed bag with larger antelope."],
      ["Heavy", "9.3x62, .375 H&H", "When estate policy or same-day buffalo context applies."],
    ],
    rifleTips: [
      { label: "Broadside:", body: "Low on shoulder into heart-lung. Compact target." },
      { label: "Head shots:", body: "PH decision only. Tusks and bone deflect." },
      { label: "Follow-up:", body: "Assume the boar is alive until the PH says otherwise." },
      { label: "Dogs:", body: "If bay dogs are used, human safety lines change. Listen." },
    ],
    meatTitle: "Pork from the bush, fire, and slow pot",
    meatLeft: [
      "Warthog meat is pale, lean, and honest. It takes smoke and spice like domestic pork wishes it could. Shoulder wants low heat. Loin wants quick heat.",
      "Remove glands carefully during skinning. Taint is a handling story, not a species story.",
    ],
    meatRight: [
      "South African kitchen culture already wrote the cookbook. Fire bread, chutney, and warthog stew are national comfort.",
      "Export and donation rules still apply. Poaching is not this page. Lawful hunting is.",
    ],
    closingTitle: "Ready for vlakvark?",
    closingBody:
      "Bring close-range skill and respect for holes. Warthogs reward humility.",
    quickFactExtraRows: [
      ["Tusks", "Uppers curve; lowers hone like blades"],
      ["Mass", "Roughly 45 to 150 kg depending on sex and range condition"],
      ["Burrows", "Often aardvark origin, warthog modified"],
    ],
    imageSeeds: monoSeeds(s, true, {
      heroLocalBase: "/images/species/warthog",
      heroLocalExt: "jpg",
      introLocalBase: "/images/species/warthog",
      introLocalExt: "jpg",
      hornsLocalBase: "/images/species/warthog",
      hornsLocalExt: "jpg",
      formPrimaryLocalBase: "/images/species/warthog",
      formPrimaryLocalExt: "jpg",
      formSecondaryLocalBase: "/images/species/warthog",
      formSecondaryLocalExt: "jpg",
      panoramaLocalBase: "/images/species/warthog",
      panoramaLocalExt: "jpg",
      feedWideLocalBase: "/images/species/warthog",
      feedWideLocalExt: "jpg",
      ecologyLocalBase: "/images/species/warthog",
      ecologyLocalExt: "jpg",
      predationLocalBase: "/images/species/warthog",
      predationLocalExt: "jpg",
      rutLeftLocalBase: "/images/species/warthog",
      rutLeftLocalExt: "jpg",
      huntLocalBase: "/images/species/warthog",
      huntLocalExt: "jpg",
      trophyLocalBase: "/images/species/warthog",
      trophyLocalExt: "jpg",
      rifleLocalBase: "/images/species/warthog",
      rifleLocalExt: "jpg",
    }),
    introPanoramaCaption: "Warthog estate field reference below intro copy.",
  };
}
