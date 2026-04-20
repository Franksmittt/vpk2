import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  align?: "start" | "center";
  className?: string;
};

/**
 * Reading measure for long narrative (approx. 65ch). Display serif stays on headings outside this block.
 */
const Prose = ({ children, align = "start", className = "" }: ProseProps) => (
  <div
    className={`ds-prose-measure min-w-0 w-full max-w-full font-sans leading-relaxed ${align === "center" ? "mx-auto text-center" : ""} ${className}`.trim()}
  >
    {children}
  </div>
);

export default Prose;
