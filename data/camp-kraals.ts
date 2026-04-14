/** Guest-facing names on camp (Vaalpenskraal). */

export const CHALET_KRAALS = [
  { key: "roan", name: "Roan Kraal" },
  { key: "eland", name: "Eland Kraal" },
  { key: "gemsbok", name: "Gemsbok Kraal" },
  { key: "koedoe", name: "Koedoe Kraal" },
] as const;

export const COMMUNAL_BAR_KRAAL = "Vark Kraal";

export const CHALET_KRAALS_LINE = CHALET_KRAALS.map((k) => k.name).join(" · ");
