/**
 * Canonical outlook-point photography for Vaalpenskraal web.
 * Use only these paths anywhere the estate means the elevated outlook (not pool lapa grids, etc.).
 */
export const OUTLOOK_POINT_IMAGES = {
  am946: "/images/outlook/outlook-point-946.jpg",
  am949: "/images/outlook/outlook-point-949.jpg",
  am952: "/images/outlook/outlook-point-952.jpg",
  am1007: "/images/outlook/outlook-point-1007.jpg",
  am1015: "/images/outlook/outlook-point-1015.jpg",
} as const;

export type OutlookPointImageKey = keyof typeof OUTLOOK_POINT_IMAGES;
