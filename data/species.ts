export type QuarrySpecies = {
  id: string;
  name: string;
  epithet: string;
  scientific: string;
  caliber: string;
  rowlandWard: string;
  terrain: string;
  imageSeed: string;
  dangerous?: boolean;
  variant?: boolean;
};

export const QUARRY_SPECIES: QuarrySpecies[] = [
  {
    id: "greater-kudu",
    name: "Greater Kudu",
    epithet: "Iconic",
    scientific: "Tragelaphus strepsiceros",
    caliber: ".300 Win Mag / .30-06",
    rowlandWard: 'Min. 53 7/8"',
    terrain: "Mountain Thickets",
    imageSeed: "kudu",
  },
  {
    id: "blue-wildebeest",
    name: "Blue Wildebeest",
    epithet: "Tough",
    scientific: "Connochaetes taurinus",
    caliber: ".375 H&H Recommended",
    rowlandWard: 'Min. 28 1/2" (Width)',
    terrain: "Open Plains",
    imageSeed: "wildebeestblue",
  },
  {
    id: "impala",
    name: "Impala",
    epithet: "Classic",
    scientific: "Aepyceros melampus",
    caliber: ".243 / 6.5mm Creedmoor",
    rowlandWard: 'Min. 23 5/8"',
    terrain: "Bushveld Fringe",
    imageSeed: "impala",
  },
  {
    id: "gemsbok",
    name: "Gemsbok",
    epithet: "Distinct",
    scientific: "Oryx gazella",
    caliber: ".30-06 / .300 Win Mag",
    rowlandWard: 'Min. 40"',
    terrain: "Open Scrub",
    imageSeed: "gemsbok",
  },
  {
    id: "warthog",
    name: "Warthog",
    epithet: "Opportunity",
    scientific: "Phacochoerus africanus",
    caliber: "7x57 Mauser / .308",
    rowlandWard: 'Min. 13" (Tusk)',
    terrain: "Waterholes / Mud Wallows",
    imageSeed: "warthog",
  },
  {
    id: "blesbok",
    name: "Blesbok",
    epithet: "Keystone",
    scientific: "Damaliscus pygargus phillipsi",
    caliber: ".308 Win",
    rowlandWard: 'Min. 16 ½"',
    terrain: "Highveld Grasslands",
    imageSeed: "blesbok",
  },
  {
    id: "bushbuck",
    name: "Bushbuck",
    epithet: "Thickets",
    scientific: "Tragelaphus sylvaticus",
    caliber: ".308 Win",
    rowlandWard: 'Min. 15"',
    terrain: "Riverine Thickets",
    imageSeed: "bushbuck",
  },
  {
    id: "cape-buffalo",
    name: "Cape Buffalo",
    epithet: "Dangerous",
    scientific: "Syncerus caffer",
    caliber: ".375 H&H Minimum",
    rowlandWard: 'Min. 40"',
    terrain: "Dense Bushveld",
    imageSeed: "buffalo",
    dangerous: true,
  },
  {
    id: "dapple-impala",
    name: "Dapple Impala",
    epithet: "Variant",
    scientific: "Aepyceros melampus",
    caliber: ".243 / 6.5mm Creedmoor",
    rowlandWard: 'Min. 23 5/8"',
    terrain: "Bushveld Fringe",
    imageSeed: "impaladapple",
    variant: true,
  },
  {
    id: "golden-wildebeest",
    name: "Golden Wildebeest",
    epithet: "Variant",
    scientific: "Connochaetes taurinus",
    caliber: ".375 H&H Recommended",
    rowlandWard: 'Min. 28 1/2" (Width)',
    terrain: "Open Plains",
    imageSeed: "wildebeestgold",
    variant: true,
  },
  {
    id: "springbok",
    name: "Springbok",
    epithet: "Classic",
    scientific: "Antidorcas marsupialis",
    caliber: ".243 Win",
    rowlandWard: 'Min. 14"',
    terrain: "Open Plains",
    imageSeed: "springbok",
  },
  {
    id: "red-hartebeest",
    name: "Red Hartebeest",
    epithet: "Fast",
    scientific: "Alcelaphus buselaphus caama",
    caliber: ".30-06",
    rowlandWard: 'Min. 18"',
    terrain: "Open Plains",
    imageSeed: "hartebeest",
  },
  {
    id: "lechwe",
    name: "Lechwe",
    epithet: "Water",
    scientific: "Kobus leche",
    caliber: ".270 Win",
    rowlandWard: 'Min. 20"',
    terrain: "Wetlands / Water",
    imageSeed: "lechwe",
  },
  {
    id: "livingstone-eland",
    name: "Livingstone Eland",
    epithet: "Giant",
    scientific: "Taurotragus oryx livingstonei",
    caliber: ".375 H&H",
    rowlandWard: 'Min. 30"',
    terrain: "Open Bushveld",
    imageSeed: "elandlivingstone",
  },
];

export function getSpeciesBySlug(slug: string): QuarrySpecies | undefined {
  return QUARRY_SPECIES.find((s) => s.id === slug);
}
