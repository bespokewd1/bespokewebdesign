import { describe, expect, it } from "vitest";
import { CLIENT_REVIEWS, FACEBOOK_REVIEWS, GOOGLE_REVIEWS } from "@/content/reviews";

describe("client review collections", () => {
  it("keeps the nine supplied Google reviews, all five stars", () => {
    expect(GOOGLE_REVIEWS).toHaveLength(9);
    expect(GOOGLE_REVIEWS.every(r => r.platform === "Google" && r.stars === 5)).toBe(true);
  });
  it("keeps the three supplied Facebook recommendations without star ratings", () => {
    expect(FACEBOOK_REVIEWS).toHaveLength(3);
    expect(FACEBOOK_REVIEWS.every(r => r.platform === "Facebook" && r.stars === null)).toBe(true);
  });
  it("never mixes a review into the wrong platform gallery", () => {
    expect(GOOGLE_REVIEWS.some(r => r.platform !== "Google")).toBe(false);
    expect(FACEBOOK_REVIEWS.some(r => r.platform !== "Facebook")).toBe(false);
    expect(CLIENT_REVIEWS).toHaveLength(GOOGLE_REVIEWS.length + FACEBOOK_REVIEWS.length);
  });
  it("shows only reviews that have a real screenshot and real text", () => {
    expect(CLIENT_REVIEWS.every(r => r.screenshot.startsWith("/__l5e/assets-v1/"))).toBe(true);
    expect(CLIENT_REVIEWS.every(r => r.paragraphs.length > 0 && r.paragraphs.every(p => p.trim().length > 0))).toBe(true);
    expect(CLIENT_REVIEWS.every(r => r.name.trim().length > 0)).toBe(true);
  });
  it("lists each reviewer once per platform", () => {
    const keys = CLIENT_REVIEWS.map(r => `${r.platform}:${r.name}`);
    expect(new Set(keys).size).toBe(keys.length);
  });
});
