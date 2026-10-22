import { describe, expect, it } from "vitest";
import { PLANS } from "@/content/site";

describe("Monthly marketing packages", () => {
  it("provides Foundation at $245 with basic SEO and 5 Facebook posts", () => {
    expect(PLANS.find(p => p.name === "Foundation")).toMatchObject({ monthlyPrice: 245, socialPosts: 5, channels: 1, platforms: ["Facebook"], seoLevel: "basic" });
  });
  it("provides Growth at $499 with 10 total posts across Facebook and Instagram", () => {
    expect(PLANS.find(p => p.name === "Growth")).toMatchObject({ monthlyPrice: 499, socialPosts: 10, channels: 2, platforms: ["Facebook", "Instagram"], seoLevel: "basic" });
  });
  it("provides Advanced at $999 with advanced SEO and 15 total posts across three platforms", () => {
    expect(PLANS.find(p => p.name === "Advanced")).toMatchObject({ monthlyPrice: 999, socialPosts: 15, channels: 3, platforms: ["Facebook", "Instagram", "TikTok"], seoLevel: "advanced" });
  });
  it("excludes Google Search campaign management from Foundation", () => {
    expect(PLANS.find(p => p.name === "Foundation")?.googleSearchCampaigns).toBe(0);
  });
  it("includes exactly one Google Search campaign in Growth", () => {
    expect(PLANS.find(p => p.name === "Growth")?.googleSearchCampaigns).toBe(1);
  });
  it("includes exactly one Google Search campaign in Advanced, not extra campaigns", () => {
    expect(PLANS.find(p => p.name === "Advanced")?.googleSearchCampaigns).toBe(1);
  });
});