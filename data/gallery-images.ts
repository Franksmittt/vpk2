/** Must match filenames produced by `scripts/copy-gallery.mjs` (`vpk-gallery-001.jpg`, …). */
export const GALLERY_IMAGE_COUNT = 52;

export type GalleryImage = { id: number; src: string; alt: string };

export const galleryImages: GalleryImage[] = Array.from({ length: GALLERY_IMAGE_COUNT }, (_, i) => {
  const id = i + 1;
  return {
    id,
    src: `/images/gallery/vpk-gallery-${String(id).padStart(3, "0")}.jpg`,
    alt: `Vaalpenskraal Game Reserve estate photograph ${id} of ${GALLERY_IMAGE_COUNT}.`,
  };
});
