import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoAsset from "@/assets/trades-workday.mp4.asset.json";
import posterAsset from "@/assets/trades-workday-poster.webp.asset.json";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => setPlaying(false));
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => preference.removeEventListener("change", applyPreference);
  }, []);
  return <>
    <video ref={videoRef} className="home-hero-video" src={videoAsset.url} poster={posterAsset.url} muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <Button variant="ghost" size="icon" className="home-hero-video-control text-navy-foreground hover:bg-navy-soft hover:text-navy-foreground" title={playing ? "Pause background video" : "Play background video"} aria-label={playing ? "Pause background video" : "Play background video"} onClick={() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) void video.play().catch(() => setPlaying(false));
      else video.pause();
    }}>{playing ? <Pause /> : <Play />}</Button>
  </>;
}