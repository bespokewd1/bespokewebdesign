import { describe, expect, it } from "vitest";
import { mobileReviewIndices } from "@/lib/review-pagination";

describe("mobile review pagination", () => {
  it("limits mobile navigation to four dots", () => {
    for (let active = 0; active < 10; active++) {
      const indices = mobileReviewIndices(10, active);
      expect(indices).toHaveLength(4);
      expect(indices).toContain(active);
    }
  });
  it("keeps every review available as the carousel rotates", () => {
    const reachable = new Set(Array.from({ length: 10 }, (_, active) => mobileReviewIndices(10, active)).flat());
    expect([...reachable].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mobileReviewIndices(10, 9)).toEqual([6, 7, 8, 9]);
  });
  it("does not invent dots when fewer reviews exist", () => {
    expect(mobileReviewIndices(2, 0)).toEqual([0, 1]);
    expect(mobileReviewIndices(0, 0)).toEqual([]);
  });
});