import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Route-level shell: min-width discipline, canvas background, selection. Avoid overflow-x-hidden here (clips grid bleed); use min-w-0 instead.
 */
const PageShell = ({ children, className = "" }: PageShellProps) => (
  <div
    className={`min-h-screen min-w-0 bg-black text-white selection:bg-white/30 ${className}`.trim()}
  >
    {children}
  </div>
);

export default PageShell;
