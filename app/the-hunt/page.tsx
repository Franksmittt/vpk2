import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import TheHuntPageBody from "@/components/the-hunt/TheHuntPageBody";

export const metadata: Metadata = {
  title: "The Hunt | Vaalpenskraal Game Reserve",
  description:
    "Fair-chase hunting on iron soil in the Waterberg: who travels, how quota works, rhythm in camp, quarry on the roster, and what to expect before you open the booking form.",
};

const TheHuntPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHero
        heroTitleId="the-hunt-hero-title"
        scrollLinkedTypography
        eyebrow="The Hunt"
        title="Hold a week on the Iron Mountain."
        subtitle="Wind before small talk. Thicket that teaches patience. Scroll through how we work, who walks with us, and what honest booking looks like. When you are ready to lock dates, the Reserve page holds the form."
        imageSeed="reservehero"
        imageSrc="/images/species/iron-mountain-quarry-hero.png"
      />

      <TheHuntPageBody />
    </div>
  );
};

export default TheHuntPage;
