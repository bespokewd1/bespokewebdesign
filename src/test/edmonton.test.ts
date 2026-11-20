import { describe, expect, it } from "vitest";
import { edmontonTime } from "@/lib/edmonton";

describe("Edmonton local time", () => {
  it("uses Edmonton winter time, not the visitor's timezone", () => {
    expect(edmontonTime(new Date("2026-11-20T18:00:00Z"))).toBe("11:00 a.m. MST");
  });
  it("automatically adjusts to Edmonton daylight saving time", () => {
    expect(edmontonTime(new Date("2026-07-20T18:00:00Z"))).toBe("12:00 p.m. MDT");
  });
});