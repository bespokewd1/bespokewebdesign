import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoAsset from "@/assets/local-services-workday.mp4.asset.json";
import posterAsset from "@/assets/trades-workday-poster.webp.asset.json";
import mobileVideoAsset from "@/assets/mobile-marketing-trades.mp4.asset.json";
import mobilePosterAsset from "@/assets/mobile-marketing-trades-poster.webp.asset.json";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [source, setSource] = useState<string>();
  const [poster, setPoster] = useState<string>();
  const selectedVideo = useRef(videoAsset.url);
  const wantsPlayback = useRef(false);
  useEffect(() => {
    if (source && wantsPlayback.current) void videoRef.current?.play().catch(() => setPlaying(false));
  }, [source]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let timer: ReturnType<typeof setTimeout> | undefined;
    const selectMedia = () => {
      selectedVideo.current = mobile.matches ? mobileVideoAsset.url : videoAsset.url;
      setPoster(mobile.matches ? mobilePosterAsset.url : posterAsset.url);
      // Switch only an already requested video; reduced motion stays download-free.
      setSource(current => current ? selectedVideo.current : current);
    };
    selectMedia();
    mobile.addEventListener("change", selectMedia);
    const loadVideo = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (!preference.matches) {
          wantsPlayback.current = true;
          setSource(selectedVideo.current);
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
      mobile.removeEventListener("change", selectMedia);
    };
  }, []);
  return <>
    <picture className="home-hero-poster" aria-hidden="true"><source media="(max-width: 767px)" srcSet={mobilePosterAsset.url} /><img src={posterAsset.url} alt="" /></picture>
    <video ref={videoRef} className="home-hero-video" src={source} poster={poster} muted loop playsInline preload="none" aria-hidden="true" onCanPlay={() => { if (wantsPlayback.current) void videoRef.current?.play().catch(() => setPlaying(false)); }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <Button variant="ghost" size="icon" className="home-hero-video-control text-navy-foreground hover:bg-navy-soft hover:text-navy-foreground" title={playing ? "Pause background video" : "Play background video"} aria-label={playing ? "Pause background video" : "Play background video"} onClick={() => {
      const video = videoRef.current;
      if (!video) return;
      wantsPlayback.current = video.paused;
      if (video.paused) {
        if (!source) setSource(selectedVideo.current);
        else void video.play().catch(() => setPlaying(false));
      } else video.pause();
    }}>{playing ? <Pause /> : <Play />}</Button>
  </>;
}