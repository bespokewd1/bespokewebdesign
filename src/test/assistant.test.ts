import { describe, expect, it } from "vitest";
import * as assistant from "@/lib/assistant";

describe("assistant conversation language", () => {
  it("uses English only", () => {
    expect(assistant.ASSISTANT_LANGUAGE).toBe("en");
  });
});

