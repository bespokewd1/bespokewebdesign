import { describe, expect, it } from "vitest";
import { PLANS } from "@/content/site";

describe("Monthly marketing packages", () => {
  it("provides Starter at $245 with branding, website, basic SEO and 5 posts", () => {
    expect(PLANS.find((p) => p.name === "Starter")).toMatchObject({ monthlyPrice: 245, socialPosts: 5, seoLevel: "basic", items: ["Branding", "Website", "Basic SEO", "5 social media posts per month"] });
  });
  it("provides Entrepreneur at $499 with 10 posts and 2 channels", () => {
    expect(PLANS.find((p) => p.name === "Entrepreneur")).toMatchObject({ monthlyPrice: 499, socialPosts: 10, channels: 2, seoLevel: "basic", items: ["Branding", "Website", "Basic SEO", "10 social media posts per month", "2 social media channels"] });
  });
  it("provides Dominate at $999 with 15 posts, 3 channels and advanced SEO", () => {
    expect(PLANS.find((p) => p.name === "Dominate")).toMatchObject({ monthlyPrice: 999, socialPosts: 15, channels: 3, seoLevel: "advanced", items: ["Branding", "Website", "Advanced SEO", "15 social media posts per month", "3 social media channels"] });
  });
});