/** A moving four-dot window keeps every review reachable without mobile clutter. */
export function mobileReviewIndices(total: number, active: number): number[] {
  const count = Math.min(4, Math.max(0, total));
  const start = Math.max(0, Math.min(active - 1, total - count));
  return Array.from({ length: count }, (_, offset) => start + offset);
}