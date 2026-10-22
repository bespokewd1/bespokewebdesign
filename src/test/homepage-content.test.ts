import { describe, expect, it } from "vitest";
import { PLAN_CURRENCY, TRUSTED_CLIENTS, FEATURED_PROJECTS, SITE, REVIEW_PROOF, REVIEW_LINKS } from "@/content/site";
import { CLIENT_REVIEWS } from "@/content/reviews";

describe("homepage business rules", () => {
  it("links reviews to the owner's supplied profiles", () => {
    expect(REVIEW_LINKS.Google).toBe("https://maps.app.goo.gl/KmQRwn9H6c6U74Zm7");
    expect(REVIEW_LINKS.Facebook).toBe("https://www.facebook.com/bespokewebdesignEdmonton/");
  });
  it("does not assign star ratings to Facebook recommendations", () => {
    const recommendations = CLIENT_REVIEWS.filter(review => review.platform === "Facebook");
    expect(recommendations).toHaveLength(3);
    expect(recommendations.every(review => review.stars === null)).toBe(true);
  });
  it("uses the owner-confirmed five-star reviews on both platforms", () => {
    expect(REVIEW_PROOF).toEqual([{ platform: "Google", stars: 5 }, { platform: "Facebook", stars: 5 }]);
  });
  it("prices the plans in Canadian dollars", () => {
    expect(PLAN_CURRENCY).toBe("CAD");
  });
  it("excludes the owned music app from external client proof", () => {
    expect(TRUSTED_CLIENTS.map(p => p.name)).not.toContain("Bespoke Music App");
    expect(TRUSTED_CLIENTS).toHaveLength(6);
  });
  it("features the two projects with existing verified summaries", () => {
    expect(FEATURED_PROJECTS.map(p => p.name)).toEqual(["Iron Fist Transport", "Stone Massage"]);
  });
  it("uses the supplied business operator", () => {
    expect(SITE.operator).toBe("Bespoke Marketing Ltd.");
  });
});