import type { ReactNode } from "react";

export type SectionVariant = "default" | "flush-top" | "flush-bottom";

type SectionProps = {
  children: ReactNode;
  /** Vertical rhythm: fluid clamp by default; flush trims one block edge for butt-joins. */
  variant?: SectionVariant;
  /** Tight band for secondary breaks (manifesto-adjacent blocks). */
  density?: "default" | "tight";
  /** Skip fluid block padding (use when inner ContentTrack controls vertical rhythm). */
  padding?: "default" | "none";
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

const paddingByVariant = (variant: SectionVariant, density: "default" | "tight", padding: "default" | "none") => {
  if (padding === "none") return "";
  const base = density === "tight" ? "ds-section-y-tight" : "ds-section-y";
  if (variant === "flush-top") return `${base} pt-0`;
  if (variant === "flush-bottom") return `${base} pb-0`;
  return base;
};

/**
 * Full-width thematic band: fluid vertical padding, backgrounds span edge to edge.
 */
const Section = ({
  children,
  variant = "default",
  density = "default",
  padding = "default",
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={ariaLabelledBy}
    className={`${paddingByVariant(variant, density, padding)} ${className}`.trim()}
  >
    {children}
  </section>
);

export default Section;
