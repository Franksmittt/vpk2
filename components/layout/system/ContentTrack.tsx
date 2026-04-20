import type { ReactNode } from "react";

type ContentTrackProps = {
  children: ReactNode;
  /** Extra classes (e.g. relative z-10). */
  className?: string;
};

/**
 * Constrained horizontal track: same gutters as editorial-container, max width 90rem (doc: ultra-wide cap).
 */
const ContentTrack = ({ children, className = "" }: ContentTrackProps) => (
  <div
    className={`mx-auto min-w-0 w-full max-w-[min(90rem,100%)] px-4 sm:px-6 md:px-12 ${className}`.trim()}
  >
    {children}
  </div>
);

export default ContentTrack;
