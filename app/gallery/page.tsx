import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Gallery | Vaalpenskraal Game Reserve",
  description:
    "Photography from Vaalpenskraal Game Reserve: camp, bush, and hunt moments. High-resolution estate images will populate this grid when supplied.",
};

/** Slots for future `public/images/gallery/*` files. Drop images in and wire each slot to `src` in this file. */
const GALLERY_SLOTS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Gallery frame ${i + 1}`,
}));

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="gallery-hero-title"
        scrollLinkedTypography
        eyebrow="Gallery"
        title="The estate in still frames."
        subtitle="This grid is ready for estate photography. When you supply high-resolution files, each frame below will carry a real image and caption. Until then the layout holds the rhythm."
        imageSeed="galleryhero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section className="border-t border-white/[0.07] py-16 md:py-24">
        <div className="editorial-container">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Image grid</p>
          <h2 className="mt-4 max-w-2xl font-sans text-2xl font-semibold tracking-tight sm:text-3xl">Twelve frames reserved</h2>
          <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Empty slots keep layout and rhythm. Nothing here pretends to be a finished library yet.
          </p>

          <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GALLERY_SLOTS.map((slot) => (
              <li
                key={slot.id}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dashed border-white/[0.14] bg-white/[0.03] ring-1 ring-white/[0.04]"
              >
                <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {slot.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
