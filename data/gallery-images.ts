/** Legacy hunt-week grid: `vpk-gallery-001.jpg` … (see `scripts/copy-gallery.mjs`). */
const LEGACY_GALLERY_COUNT = 52;

export type GalleryImage = { id: number; src: string; alt: string };

type GallerySource = Omit<GalleryImage, "id">;

/** Deterministic PRNG for stable gallery order between builds (SSR-safe). */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(array: readonly T[], seed: number): T[] {
  const copy = [...array];
  const rnd = mulberry32(seed >>> 0);
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = tmp;
  }
  return copy;
}

const ATMOSPHERE_IMAGES: readonly GallerySource[] = [
  {
    src: "/images/gallery/atmo-01-dung-beetle.jpg",
    alt: "Bushveld detail: dung beetle working red sand near thorn scrub, shallow depth of field.",
  },
  {
    src: "/images/gallery/atmo-02-termite-mound.jpg",
    alt: "Bushveld detail: weathered termite mound with thornveld trees, honest veld architecture.",
  },
  {
    src: "/images/gallery/atmo-03-cape-fox-distance.jpg",
    alt: "Bushveld detail: small Cape fox far out on pale grass between scrub masses, telephoto compression.",
  },
  {
    src: "/images/gallery/atmo-04-wet-ground-after-rain.jpg",
    alt: "Bushveld detail: wet red iron sand and a shallow puddle after light rain, ground-level truth.",
  },
  {
    src: "/images/gallery/atmo-05-masked-weaver-nest.jpg",
    alt: "Limpopo birdlife: Southern Masked Weaver at a grass pendant nest in a thorn tree.",
  },
  {
    src: "/images/gallery/atmo-06-quelea-flock.jpg",
    alt: "Limpopo birdlife: tight passage flock of Red-billed Quelea over an open grass gap.",
  },
  {
    src: "/images/gallery/atmo-07-sparrow-weaver-nest.jpg",
    alt: "Limpopo birdlife: White-browed Sparrow-Weaver at a messy stick nest in a thorn fork.",
  },
  {
    src: "/images/gallery/atmo-08-orb-weaver-web.jpg",
    alt: "Bushveld detail: orb web between twigs with low side light on silk, spider plausible for thornveld.",
  },
  {
    src: "/images/gallery/atmo-09-waterhole-ripples.jpg",
    alt: "Bushveld detail: still pan surface with ripples and subtle water movement, anonymous waterhole.",
  },
  {
    src: "/images/gallery/atmo-10-waxbill-finches-flock.jpg",
    alt: "Limpopo birdlife: small finches and waxbills on grass seed heads at a scrub edge.",
  },
  {
    src: "/images/gallery/atmo-11-plover-pan-edge.jpg",
    alt: "Limpopo birdlife: small plover at muddy pan edge with shallow waterline reflections.",
  },
  {
    src: "/images/gallery/atmo-12-hadeda.jpg",
    alt: "Limpopo birdlife: Hadeda ibis walking short grass or veld edge, honest bush sound made visible.",
  },
  {
    src: "/images/gallery/atmo-13-flap-neck-chameleon.jpg",
    alt: "Bushveld detail: flap-necked chameleon gripping bark, dry-season colours, slow veld clock.",
  },
  {
    src: "/images/gallery/atmo-14-ant-column.jpg",
    alt: "Bushveld detail: ant trail on red sand at twilight scale, believable density, no horror-stack swarm.",
  },
  {
    src: "/images/gallery/atmo-15-cumulus-thornveld.jpg",
    alt: "Bushveld sky: honest building cumulus over acacia canopy, weather without stock drama.",
  },
];

function legacyGallery(): GallerySource[] {
  return Array.from({ length: LEGACY_GALLERY_COUNT }, (_, i) => {
    const n = i + 1;
    return {
      src: `/images/gallery/vpk-gallery-${String(n).padStart(3, "0")}.jpg`,
      alt: `Vaalpenskraal Game Reserve photograph, estate and hunt weeks (archive frame ${n} of ${LEGACY_GALLERY_COUNT}).`,
    };
  });
}

/** Edit this seed to reshuffle atmosphere stills among legacy frames without renaming files. */
const GALLERY_MERGE_SEED = 0x5ca7b001;

const mergedSources: GallerySource[] = shuffle(
  [...legacyGallery(), ...ATMOSPHERE_IMAGES],
  GALLERY_MERGE_SEED,
);

export const galleryImages: GalleryImage[] = mergedSources.map((item, index) => ({
  id: index + 1,
  src: item.src,
  alt: item.alt,
}));

export const GALLERY_IMAGE_COUNT = galleryImages.length;
