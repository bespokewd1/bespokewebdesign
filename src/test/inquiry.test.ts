import { describe, expect, it } from "vitest";
import { inquiryRow, inquirySchema } from "@/lib/inquiry";

const review = { kind: "review", business: "Edmonton Test Plumbing", name: "Test Contact", email: "phase1@example.com", phone: "", website: "", industry: "Plumbing", message: "Need more qualified website inquiries" };
describe("Phase 1 inquiry rules", () => {
  it("accepts a review without a website", () => { expect(inquirySchema.safeParse(review).success).toBe(true); });
  it("accepts an optional phone", () => { expect(inquirySchema.safeParse(review).success).toBe(true); expect(inquirySchema.safeParse({ ...review, phone: "not-a-phone" }).success).toBe(false); });
  it("requires the review industry", () => { expect(inquirySchema.safeParse({ ...review, industry: "" }).success).toBe(false); });
  it("requires a marketing challenge", () => { expect(inquirySchema.safeParse({ ...review, message: "" }).success).toBe(false); });
  it("rejects unsafe website schemes", () => { expect(inquirySchema.safeParse({ ...review, website: "javascript:alert(1)" }).success).toBe(false); });
  it("requires interested services for consultations", () => { expect(inquirySchema.safeParse({ ...review, kind: "consultation", services: "" }).success).toBe(false); });
  it("maps validated inquiry fields for secure storage", () => { const data = inquirySchema.parse(review); expect(inquiryRow(data)).toEqual({kind: "review", business: "Edmonton Test Plumbing", contact_name: "Test Contact", email: "phase1@example.com", phone: "", website: "", industry: "Plumbing", services: "", message: "Need more qualified website inquiries"}); });
});