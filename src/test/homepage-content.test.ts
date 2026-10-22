import { describe, expect, it } from "vitest";
import { PLAN_CURRENCY, TRUSTED_CLIENTS, FEATURED_PROJECTS, SITE, REVIEW_PROOF } from "@/content/site";

describe("homepage business rules", () => {
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