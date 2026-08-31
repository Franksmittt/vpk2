import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";
import { SITE_AVAILABLE } from "@/lib/site";

export const metadata: Metadata = SITE_AVAILABLE
  ? {
      title: "Vaalpenskraal Game Reserve | Waterberg Hunting",
      description:
        "Waterberg fair chase. Four chalets on camp. Full board. Plains and dangerous game on iron soil. We hold the line on ethics and silence.",
    }
  : {
      title: "This website is no longer available",
      description: "This website is no longer available.",
      robots: { index: false, follow: false },
    };

const HomePage = () => (SITE_AVAILABLE ? <HomePageClient /> : null);

export default HomePage;
