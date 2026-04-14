import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";

export const metadata: Metadata = {
  title: "Vaalpenskraal Game Reserve | Waterberg Hunting",
  description:
    "Waterberg fair chase. Four chalets on camp. Full board. Plains and dangerous game on iron soil. We hold the line on ethics and silence.",
};

const HomePage = () => <HomePageClient />;

export default HomePage;
