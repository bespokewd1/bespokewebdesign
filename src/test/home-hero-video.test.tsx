import { act, cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HomeHeroVideo } from "@/components/site/HomeHeroVideo";
import desktop from "@/assets/local-services-workday.mp4.asset.json";
import mobile from "@/assets/mobile-marketing-trades.mp4.asset.json";

function setup(width: number, reduced = false) {
  vi.useFakeTimers();
  vi.spyOn(window, "matchMedia").mockImplementation(query => ({
    matches: query.includes("767px") ? width <= 767 : reduced,
    media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  }));
  vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  const result = render(<HomeHeroVideo />);
  fireEvent(window, new Event("load"));
  act(() => { vi.advanceTimersByTime(300); });
  const video = result.container.querySelector("video");
  if (!video) throw new Error("Video missing");
  return { ...result, video };
}

afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); });

describe("homepage video playback selection", () => {
  it("uses the portrait clip on phones", () => {
    const { video } = setup(390);
    expect(video.getAttribute("src")).toBe(mobile.url);
  });
  it("keeps the existing desktop clip at 845px", () => {
    const { video } = setup(845);
    expect(video.getAttribute("src")).toBe(desktop.url);
  });
  it("does not automatically request footage for reduced motion", () => {
    const { video } = setup(390, true);
    expect(video.getAttribute("src")).toBeNull();
  });
  it("allows reduced-motion visitors to explicitly play the mobile clip", () => {
    const { video, getByRole } = setup(390, true);
    fireEvent.click(getByRole("button", { name: "Play background video" }));
    expect(video.getAttribute("src")).toBe(mobile.url);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});