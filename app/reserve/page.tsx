import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import HuntBookingPanel from "@/components/reserve/HuntBookingPanel";
import HuntPlanningSections from "@/components/reserve/HuntPlanningSections";
import { buildReservePageJsonLd, RESERVE_PAGE_DESCRIPTION } from "@/lib/seo/reserve-json-ld";

export const metadata: Metadata = {
  title: "Book Your Hunt | Vaalpenskraal Game Reserve",
  description: RESERVE_PAGE_DESCRIPTION,
};

const ReservePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="reserve-hero-title"
        scrollLinkedTypography
        eyebrow="Book your hunt"
        title="Hold a week on the Iron Mountain."
        subtitle="Brochure stops here. Send dates, party, species in order. We reply with quota, silence where the land says no, and a stalk rhythm that fits the heat."
        imageSeed="reservehero"
        imageSrc="/images/hero/estate-bushveld-wide.png"
      />

      <section id="book-hunt" className="scroll-mt-24 border-b border-white/[0.07] bg-[#050505] py-16 md:py-24">
        <div className="editorial-container">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildReservePageJsonLd()) }}
          />
          <HuntBookingPanel />
        </div>
      </section>

      <HuntPlanningSections />
    </div>
  );
};

export default ReservePage;
