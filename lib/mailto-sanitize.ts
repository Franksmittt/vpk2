/** Strips C0/C1 controls and DEL for single-line mailto fields (also removes newlines). */
const SINGLE_LINE_CTRL = /[\x00-\x1F\x7F-\x9F]/g;

/** Strips C0/C1 except common whitespace (tab, LF, CR) for multiline notes. */
const MULTILINE_CTRL = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g;

export function sanitizeSingleLineForMailto(value: string): string {
  return value.replace(SINGLE_LINE_CTRL, "");
}

export function sanitizeMultilineForMailto(value: string): string {
  return value.replace(MULTILINE_CTRL, "");
}
