import type { ReactNode } from "react";

const gapClass = {
  "3xs": "gap-ds-3xs",
  "2xs": "gap-ds-2xs",
  xs: "gap-ds-xs",
  sm: "gap-ds-sm",
  md: "gap-ds-md",
  lg: "gap-ds-lg",
  xl: "gap-ds-xl",
  "2xl": "gap-ds-2xl",
} as const;

export type StackGap = keyof typeof gapClass;

type StackProps = {
  children: ReactNode;
  gap?: StackGap;
  className?: string;
  as?: "div" | "article" | "header" | "footer";
};

/**
 * Vertical stack: spacing between children via gap only (no leaf margins).
 */
const Stack = ({ children, gap = "md", className = "", as: Tag = "div" }: StackProps) => (
  <Tag className={`flex flex-col ${gapClass[gap]} ${className}`.trim()}>{children}</Tag>
);

export default Stack;
