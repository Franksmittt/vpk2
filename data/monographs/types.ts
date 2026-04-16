export type MonographTaxonomyCard = { title: string; sub: string; body: string };

export type MonographSocialCard = {
  title: string;
  body: string;
  icon: "mountain" | "binoculars" | "crosshair";
};

export type MonographHuntMethod = {
  title: string;
  text: string;
  icon: "binoculars" | "target" | "flame";
};

export type MonographRifleTip = {
  label: string;
  body: string;
};

export type MonographImageSeeds = {
  hero: string;
  intro: string;
  useIntroCardImage: boolean;
  panorama: string;
  formPrimary: string;
  formSecondary: string;
  ecology: string;
  feedWide: string;
  rutLeft: string;
  predation: string;
  hunt: string;
  trophy: string;
  rifle: string;
  meat: string;
  /** When set with `panorama` as filename stem, intro-wide banner loads `/public` asset first (see MonographFig localBase). */
  panoramaLocalBase?: string;
  panoramaLocalExt?: string;
};

export type MonographDefinition = {
  heroTitle: string;
  heroLead: string;
  bookCta: string;
  introParagraphs: [string, string];
  variantCallout?: string;
  taxonomyTitle: string;
  taxonomyIntro: string;
  taxonomyCards: MonographTaxonomyCard[];
  formTitle: string;
  formEyebrow: string;
  formPrimaryTitle: string;
  formPrimaryBody: string;
  formPrimaryBullets: string[];
  formSecondaryTitle: string;
  formSecondaryBody: string;
  formBlockquote: string;
  ecologyTitle: string;
  ecologyParagraphs: string[];
  feedSectionTitle: string;
  feedBody: string;
  fieldNoteTitle: string;
  fieldNoteBody: string;
  socialTitle: string;
  socialIntro: string;
  socialCards: MonographSocialCard[];
  rutParagraph: string;
  predationTitle: string;
  predationBody: string;
  huntTitle: string;
  huntIntro: string;
  huntMethods: MonographHuntMethod[];
  trophyTitle: string;
  trophyParagraphs: string[];
  rifleTitle: string;
  rifleIntro: string;
  rifleTable: [string, string, string][];
  rifleTips: MonographRifleTip[];
  meatTitle: string;
  meatLeft: string[];
  meatRight: string[];
  closingTitle: string;
  closingBody: string;
  quickFactExtraRows: [string, string][];
  imageSeeds: MonographImageSeeds;
  /** Optional caption under the intro wide panorama when `panoramaLocalBase` is set. */
  introPanoramaCaption?: string;
  huntSectionEyebrow?: string;
  showTrophySection?: boolean;
};

export type MonographBuilder = (species: import("@/data/species").QuarrySpecies) => MonographDefinition;
