import { describe, expect, it } from "vitest";
import { assistantLanguages } from "@/lib/assistant";

describe("assistant conversation languages", () => {
  it("defaults to English and marks unconfigured requested languages unavailable", () => {
    const languages = assistantLanguages([]);
    expect(languages.find(language => language.code === "en")?.supported).toBe(true);
    for (const code of ["fr", "es", "tl", "zh"]) {
      expect(languages.find(language => language.code === code)?.supported).toBe(false);
    }
  });
  it("enables only provider-supported overrides, including additional languages", () => {
    const languages = assistantLanguages(["fr", "es", "tl", "zh", "de"]);
    for (const code of ["fr", "es", "tl", "zh", "de"]) {
      expect(languages.find(language => language.code === code)?.supported).toBe(true);
    }
    expect(assistantLanguages(["fr"]).find(language => language.code === "es")?.supported).toBe(false);
  });
});