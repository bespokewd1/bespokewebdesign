import { describe, it, expect } from "vitest";
import { SITE } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";

describe("verified WhatsApp contact", () => {
  it("hides the contact link until a verified number is configured", () => {
    expect(whatsappUrl(SITE.whatsappNumber)).toBeNull();
    expect(whatsappUrl("")).toBeNull();
    expect(whatsappUrl("unverified")).toBeNull();
  });
  it("opens the supplied international number with the requested message", () => {
    const url = new URL(whatsappUrl("17805550123") || "https://invalid.local");
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/17805550123");
    expect(url.searchParams.get("text")).toBe("Hi Bespoke Web Design! I'm interested in improving my business's online presence. Can you tell me more about your services?");
  });
});