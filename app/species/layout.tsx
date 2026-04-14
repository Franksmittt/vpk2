import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Species | Vaalpenskraal Game Reserve",
  description:
    "Primary quarry of the Iron Mountain: kudu, buffalo, plains game, and colour variants. Availability is census-driven, not menu-driven.",
};

type SpeciesLayoutProps = {
  children: ReactNode;
};

const SpeciesLayout = ({ children }: Readonly<SpeciesLayoutProps>) => children;

export default SpeciesLayout;
