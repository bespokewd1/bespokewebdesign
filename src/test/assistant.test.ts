import { describe, expect, it } from "vitest";
import * as assistant from "@/lib/assistant";

describe("assistant conversation languages", () => {
  it("defaults to English and marks unconfigured requested languages unavailable", () => {
    const languages = assistant.assistantLanguages([]);
    expect(languages.find(language => language.code === "en")?.supported).toBe(true);
    for (const code of ["fr", "es", "tl", "zh"]) {
      expect(languages.find(language => language.code === code)?.supported).toBe(false);
    }
  });
  it("enables only provider-supported overrides, including additional languages", () => {
    const languages = assistant.assistantLanguages(["fr", "es", "tl", "zh", "de"]);
    for (const code of ["fr", "es", "tl", "zh", "de"]) {
      expect(languages.find(language => language.code === code)?.supported).toBe(true);
    }
    expect(assistant.assistantLanguages(["fr"]).find(language => language.code === "es")?.supported).toBe(false);
  });
});

describe("assistant intro content", () => {
  it("shows only the welcome line, with no pre-made question list", () => {
    expect(assistant.ASSISTANT_WELCOME).toEqual(["Hi, I’m Casey, Bespoke’s AI assistant. How can I help you today?"]);
    expect("ASSISTANT_QUESTIONS" in assistant).toBe(false);
  });
});
