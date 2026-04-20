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
  /** When set with `hero` as filename stem, monograph page hero loads `/public` asset first (see SpeciesMonographGuide). */
  heroLocalBase?: string;
  heroLocalExt?: string;
  intro: string;
  /** When set with `intro` as filename stem, overview intro figure loads `/public` asset first. */
  introLocalBase?: string;
  introLocalExt?: string;
  useIntroCardImage: boolean;
  panorama: string;
  formPrimary: string;
  /** When set with `formPrimary` as filename stem, “The ram” column figure loads `/public` asset first. */
  formPrimaryLocalBase?: string;
  formPrimaryLocalExt?: string;
  formSecondary: string;
  /** When set with `formSecondary` as filename stem, “The ewe” column figure loads `/public` asset first. */
  formSecondaryLocalBase?: string;
  formSecondaryLocalExt?: string;
  /** When set, horn strip figure uses seed `{speciesId}-horns` under this `/public` base (see SpeciesMonographGuide). */
  hornsLocalBase?: string;
  hornsLocalExt?: string;
  ecology: string;
  /** When set with `ecology` as filename stem, ecology column figure loads `/public` asset first. */
  ecologyLocalBase?: string;
  ecologyLocalExt?: string;
  feedWide: string;
  /** When set with `feedWide` as filename stem, browse-section wide banner loads `/public` asset first. */
  feedWideLocalBase?: string;
  feedWideLocalExt?: string;
  rutLeft: string;
  /** When set with `rutLeft` as filename stem, rut/social column figure loads `/public` asset first. */
  rutLeftLocalBase?: string;
  rutLeftLocalExt?: string;
  predation: string;
  /** When set with `predation` as filename stem, predation-section banner loads `/public` asset first. */
  predationLocalBase?: string;
  predationLocalExt?: string;
  hunt: string;
  /** When set with `hunt` as filename stem, hunt-section figure loads `/public` asset first. */
  huntLocalBase?: string;
  huntLocalExt?: string;
  trophy: string;
  /** When set with `trophy` as filename stem, trophy banner loads `/public` asset first. */
  trophyLocalBase?: string;
  trophyLocalExt?: string;
  rifle: string;
  /** When set with `rifle` as filename stem, rifle-section banner loads `/public` asset first. */
  rifleLocalBase?: string;
  rifleLocalExt?: string;
  meat: string;
  /** When set with `meat` as filename stem, meat-section figure loads `/public` asset first. */
  meatLocalBase?: string;
  meatLocalExt?: string;
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
  /** Optional bullets under the secondary form column (same styling as form primary). */
  formSecondaryBullets?: string[];
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
  /** Optional extra paragraphs under `huntIntro` in the hunt section text column (same row as hunt figure). */
  huntIntroParagraphs?: string[];
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
  /** Omit the two-column figure row under the form blockquote. Default: hidden (set `false` to show). */
  hideFormBlockquoteFigures?: boolean;
  /** Omit the two-column figure row under the rut paragraph. Default: hidden (set `false` to show). */
  hideRutFigures?: boolean;
  /** Omit the two-column figure row under the meat columns. Default: hidden (set `false` to show). */
  hideMeatFigures?: boolean;
  /** Omit the predation section. Default: hidden (set `false` to show). */
  hidePredationSection?: boolean;
};

export type MonographBuilder = (species: import("@/data/species").QuarrySpecies) => MonographDefinition;
