import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Species | Vaalpenskraal Game Reserve",
  description:
    "Primary quarry of the Iron Mountain: kudu, buffalo, plains game, and colour variants. Availability is census-driven, not menu-driven.",
};

export default function SpeciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
