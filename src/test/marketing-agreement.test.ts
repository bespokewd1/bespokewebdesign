import { describe, expect, it } from "vitest";
import { MARKETING_AGREEMENT, websiteOwnershipEligible } from "@/content/site";

describe("Applicable monthly marketing agreement conditions", () => {
  it("sets the minimum commitment to 12 months", () => {
    expect(MARKETING_AGREEMENT.minimumMonths).toBe(12);
  });

  it("requires completion of 12 months before ownership transfer", () => {
    expect(websiteOwnershipEligible(11, true)).toBe(false);
    expect(websiteOwnershipEligible(12, true)).toBe(true);
  });

  it("requires all required payments for ownership transfer", () => {
    expect(websiteOwnershipEligible(12, false)).toBe(false);
    expect(websiteOwnershipEligible(24, false)).toBe(false);
    expect(websiteOwnershipEligible(12, true)).toBe(true);
  });
});