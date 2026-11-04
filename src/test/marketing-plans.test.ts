import { describe, expect, it } from "vitest";
import { PLANS, PACKAGE_DETAILS } from "@/content/site";

describe("Monthly marketing packages", () => {
  it("provides Foundation at $245 with basic SEO and 5 Facebook posts", () => {
    expect(PLANS.find(p => p.name === "Foundation")).toMatchObject({ monthlyPrice: 245, socialPosts: 5, channels: 1, platforms: ["Facebook"], seoLevel: "basic" });
  });
  it("provides Growth at $499 with 10 total posts across Facebook and Instagram", () => {
    expect(PLANS.find(p => p.name === "Growth")).toMatchObject({ monthlyPrice: 499, socialPosts: 10, channels: 2, platforms: ["Facebook", "Instagram"], seoLevel: "basic" });
  });
  it("offers exactly Foundation and Growth, with no Advanced package", () => {
    expect(PLANS.map(p => p.name)).toEqual(["Foundation", "Growth"]);
  });
  it("excludes Google Search campaign management from Foundation", () => {
    expect(PLANS.find(p => p.name === "Foundation")?.googleSearchCampaigns).toBe(0);
  });
  it("includes exactly one Google Search campaign in Growth", () => {
    expect(PLANS.find(p => p.name === "Growth")?.googleSearchCampaigns).toBe(1);
  });
  it("keeps Google Ads spending separate from the monthly package", () => {
    expect(PACKAGE_DETAILS.adsIntro).toContain("setup and management of one Google Ads campaign");
    expect(PACKAGE_DETAILS.adsSteps).toContain("You pay Google directly. Ad spending is separate from your monthly package.");
  });
  it("states the minimum term and website ownership in the pricing note", () => {
    expect(PACKAGE_DETAILS.adsAgreement).toBe("12-month minimum agreement. After completing your agreement and payments, your website is yours, according to your contract's ownership terms.");
  });
});