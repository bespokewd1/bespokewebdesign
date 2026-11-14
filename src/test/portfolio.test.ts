import { describe, expect, it } from "vitest";
import { PORTFOLIO_PROJECTS, PROJECTS, HOME_FEATURED_PROJECTS } from "@/content/site";
import { featuredPortfolio, matchesPortfolioFilter, publishedMedia, verifiedAudit } from "@/lib/portfolio";

describe("verified client portfolio", () => {
  it("publishes the six exact supplied client names and URLs without duplicates", () => {
    expect(PORTFOLIO_PROJECTS.map(p => [p.name, p.link])).toEqual([
      ["Squad V Plumbing", "https://www.squadvplumbing.ca/"],
      ["Glow & Relax", "https://glowandrelax.ca/"],
      ["Rod's Electrical", "https://rodselectrical.com/"],
      ["Iron Fist Transport Ltd.", "https://ironfisttransport.ca/"],
      ["Stone Massage", "https://www.stonemassage.ca/"],
      ["iMassage Therapeutic", "https://imassage-therapeutic.ca/"],
    ]);
    expect(new Set(PORTFOLIO_PROJECTS.map(p => p.slug)).size).toBe(6);
  });
  it("uses only the two supplied Facebook URLs", () => {
    expect(PORTFOLIO_PROJECTS.filter(p => p.facebookUrl).map(p => [p.name, p.facebookUrl])).toEqual([
      ["Squad V Plumbing", "https://www.facebook.com/squadvplumbing"],
      ["Iron Fist Transport Ltd.", "https://www.facebook.com/ironfisttransport"],
    ]);
  });
  it("retains the previous projects without presenting owned work as a client", () => {
    expect(PROJECTS.map(p => p.name)).toContain("KMS Plumbing");
    expect(PROJECTS.find(p => p.name === "Bespoke Music App")?.ownedProject).toBe(true);
    expect(PORTFOLIO_PROJECTS.some(p => p.ownedProject)).toBe(false);
  });
  it("keeps six unpublished social slots per client and hides galleries and unverified audits", () => {
    for (const p of PORTFOLIO_PROJECTS) {
      expect(p.socialPosts).toHaveLength(6);
      expect(publishedMedia(p.socialPosts)).toEqual([]);
      expect(matchesPortfolioFilter(p, "Websites")).toBe(true);
      expect(matchesPortfolioFilter(p, "Social Media")).toBe(false);
      expect(matchesPortfolioFilter(p, "Branding")).toBe(false);
      expect(matchesPortfolioFilter(p, "SEO")).toBe(false);
    }
  });
  it("only includes real images in social and branding filters", () => {
    const original = PORTFOLIO_PROJECTS[0];
    if (!original) throw new Error("Expected the supplied client record");
    const p = { ...original, socialPosts: [{ image: "/sample.webp", alt: "Actual supplied post" }], brandingImages: [{ image: "", alt: "Logo" }] };
    expect(matchesPortfolioFilter(p, "Social Media")).toBe(true);
    expect(matchesPortfolioFilter(p, "Branding")).toBe(false);
  });
  it("requires dated report evidence and valid scores before publishing an SEO audit", () => {
    const audit = { seo: 100, performance: 95, accessibility: null, date: "2026-11-14", testedUrl: "https://www.stonemassage.ca/", screenshot: "/verified-report.webp" };
    expect(verifiedAudit(audit)).toBe(true);
    expect(verifiedAudit({ ...audit, screenshot: "" })).toBe(false);
    expect(verifiedAudit({ ...audit, date: "" })).toBe(false);
    expect(verifiedAudit({ ...audit, seo: 101 })).toBe(false);
  });
  it("keeps incomplete work off the homepage and prioritizes trades when approved images exist", () => {
    expect(HOME_FEATURED_PROJECTS).toEqual([]);
    const ready = PORTFOLIO_PROJECTS.map(p => ({ ...p, featured: true, image: "/approved.webp" }));
    expect(featuredPortfolio(ready)).toHaveLength(3);
    expect(featuredPortfolio(ready).slice(0, 2).map(p => p.category)).toEqual(["Trades", "Trades"]);
  });
  it("only attaches existing business-identified reviews with their real platform", () => {
    expect(PORTFOLIO_PROJECTS.filter(p => p.review).map(p => [p.name, p.review?.platform])).toEqual([
      ["Stone Massage", "Facebook"], ["iMassage Therapeutic", "Google"],
    ]);
    expect(PORTFOLIO_PROJECTS.every(p => !p.review || p.review.screenshot.startsWith("/__l5e/assets-v1/"))).toBe(true);
  });
});