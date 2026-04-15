import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import HuntPlanningSections from "@/components/reserve/HuntPlanningSections";

export const metadata: Metadata = {
  title: "The Hunt | Vaalpenskraal Game Reserve",
  description:
    "Fair-chase hunting on iron soil in the Waterberg: who travels, how quota works, rhythm in camp, and what to expect before you open the booking form.",
};

const TheHuntPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="the-hunt-hero-title"
        scrollLinkedTypography
        eyebrow="The Hunt"
        title="Hold a week on the Iron Mountain."
        subtitle="Wind before small talk. Thicket that teaches patience. Read how we work, who walks with us, and what honest booking looks like. When you are ready to lock dates, use the button below to open the enquiry form."
        imageSeed="reservehero"
        imageSrc="/images/hero/wide-hunt-story.png"
      />

      <section className="border-b border-white/[0.07] bg-[#050505] py-12 md:py-16">
        <div className="editorial-container flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-sans text-sm leading-relaxed text-white/70">
            Ready for dates, party size, and species in order? That is the dedicated booking page, not this one.
          </p>
          <Link
            href="/reserve#book-hunt"
            className="focus-ring-invert inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Book your hunt
            <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
          </Link>
        </div>
      </section>

      <HuntPlanningSections />
    </div>
  );
};

export default TheHuntPage;
