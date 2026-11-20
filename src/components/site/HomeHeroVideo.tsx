import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoAsset from "@/assets/local-services-workday.mp4.asset.json";
import posterAsset from "@/assets/trades-workday-poster.webp.asset.json";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [source, setSource] = useState<string>();
  const wantsPlayback = useRef(false);
  useEffect(() => {
    if (source && wantsPlayback.current) void videoRef.current?.play().catch(() => setPlaying(false));
  }, [source]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const loadVideo = () => {
      timer = setTimeout(() => {
        if (!preference.matches) {
          wantsPlayback.current = true;
          setSource(videoAsset.url);
        }
      }, 250);
    };
    const applyPreference = () => {
      wantsPlayback.current = !preference.matches;
      if (preference.matches) video.pause();
      else loadVideo();
    };
    if (document.readyState === "complete") loadVideo();
    else window.addEventListener("load", loadVideo, { once: true });
    preference.addEventListener("change", applyPreference);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("load", loadVideo);
      preference.removeEventListener("change", applyPreference);
    };
  }, []);
  return <>
    <video ref={videoRef} className="home-hero-video" src={source} poster={posterAsset.url} muted loop playsInline preload="none" aria-hidden="true" onCanPlay={() => { if (wantsPlayback.current) void videoRef.current?.play().catch(() => setPlaying(false)); }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <Button variant="ghost" size="icon" className="home-hero-video-control text-navy-foreground hover:bg-navy-soft hover:text-navy-foreground" title={playing ? "Pause background video" : "Play background video"} aria-label={playing ? "Pause background video" : "Play background video"} onClick={() => {
      const video = videoRef.current;
      if (!video) return;
      wantsPlayback.current = video.paused;
      if (video.paused) {
        if (!source) setSource(videoAsset.url);
        else void video.play().catch(() => setPlaying(false));
      } else video.pause();
    }}>{playing ? <Pause /> : <Play />}</Button>
  </>;
}