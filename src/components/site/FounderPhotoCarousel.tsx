import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import photo1 from "@/assets/founder-client-1.jpg.asset.json";
import photo2 from "@/assets/founder-client-2.jpg.asset.json";
import photo3 from "@/assets/founder-client-3.jpg.asset.json";

const photos = [
  { src: photo1.url, alt: "Charles reviewing a website with clients at a kitchen table" },
  { src: photo2.url, alt: "Charles and a client giving a thumbs up outdoors" },
  { src: photo3.url, alt: "Charles and a client reviewing an electrical website on a laptop" },
];

export function FounderPhotoCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!playing || interacting || reducedMotion) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % photos.length), 3000);
    return () => window.clearInterval(timer);
  }, [playing, interacting, reducedMotion]);
  return <figure className="home-founder-photos" role="group" aria-roledescription="carousel" aria-label="Charles working with clients" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <div className="relative aspect-[4/3] overflow-hidden rounded-md">
      {photos.map((photo, index) => <img key={photo.src} src={photo.src} alt={index === active ? photo.alt : ""} aria-hidden={index !== active} loading="lazy" width="1200" height="900" className={`absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`} />)}
    </div>
    <figcaption className="mt-3 flex items-center justify-between gap-2">
      <span className="text-xs text-navy-muted">Charles with Bespoke clients</span>
      <div className="flex items-center">
        {photos.map((photo, index) => <Button key={photo.src} variant="ghost" size="icon" className="size-11 text-navy-foreground hover:bg-navy-soft" aria-label={`Show photo ${index + 1} of ${photos.length}`} aria-current={active === index} onClick={() => { setActive(index); setPlaying(false); }}><span className={`size-2.5 rounded-full ${active === index ? "bg-navy-foreground" : "bg-navy-muted/40"}`} /></Button>)}
        {!reducedMotion && <Button variant="ghost" size="icon" className="size-11 text-navy-foreground hover:bg-navy-soft" title={playing ? "Pause photos" : "Play photos"} aria-label={playing ? "Pause photos" : "Play photos"} onClick={() => setPlaying(current => !current)}>{playing ? <Pause /> : <Play />}</Button>}
      </div>
    </figcaption>
  </figure>;
}