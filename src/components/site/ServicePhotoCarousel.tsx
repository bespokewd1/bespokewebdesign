import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import original from "@/assets/service-iron-fist-post.webp.asset.json";
import heater from "@/assets/squad-garage-heater.webp.asset.json";
import massage from "@/assets/stone-in-home-massage.webp.asset.json";
import fixtures from "@/assets/squad-fixture-installation.webp.asset.json";
import trucking from "@/assets/iron-fist-trucking.webp.asset.json";

const photos = [
  { src: original.url, alt: "Iron Fist Transport forklift delivery social media post" },
  { src: heater.url, alt: "Squad V garage heater installation social media post" },
  { src: massage.url, alt: "Stone Massage in-home massage social media post" },
  { src: fixtures.url, alt: "Squad V bathroom fixture installation social media post" },
  { src: trucking.url, alt: "Iron Fist Transport power-only trucking social media post" },
];

export function ServicePhotoCarousel() {
  const container = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false));
    if (container.current) observer.observe(container.current);
    return () => { preference.removeEventListener("change", sync); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!api) return;
    const sync = () => setSelected(api.selectedScrollSnap());
    const manual = () => setPlaying(false);
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    api.on("pointerDown", manual);
    return () => { api.off("select", sync); api.off("reInit", sync); api.off("pointerDown", manual); };
  }, [api]);

  useEffect(() => {
    if (!api || !playing || interacting || !visible || reducedMotion) return;
    const timer = window.setInterval(() => { if (!document.hidden) api.scrollNext(); }, 3000);
    return () => window.clearInterval(timer);
  }, [api, playing, interacting, visible, reducedMotion]);

  return <div ref={container} className="relative size-full" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <Carousel setApi={setApi} opts={{ loop: true, duration: reducedMotion ? 0 : 25 }} className="size-full" aria-label="Social media marketing samples" onKeyDown={() => setPlaying(false)}>
      <div className="absolute inset-x-0 top-0 bottom-11 overflow-hidden [&>div]:h-full">
        <CarouselContent className="ml-0 h-full">{photos.map((photo, index) => <CarouselItem key={photo.src} className="h-full pl-0" aria-label={`${index + 1} of ${photos.length}`}>
          <figure className="service-card-art"><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" /></figure>
        </CarouselItem>)}</CarouselContent>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-11 items-center justify-center bg-card" aria-label="Choose social media sample">
        {photos.map((photo, index) => <Button key={photo.src} variant="ghost" size="icon" className="size-11" aria-label={`Show social media sample ${index + 1}`} aria-pressed={selected === index} onClick={() => { api?.scrollTo(index); setPlaying(false); }}><span className={`size-2 rounded-full ${selected === index ? "bg-primary" : "bg-input"}`} /></Button>)}
        {!reducedMotion && <Button variant="ghost" size="icon" className="size-11" title={playing ? "Pause social media photos" : "Play social media photos"} aria-label={playing ? "Pause social media photos" : "Play social media photos"} onClick={() => setPlaying(value => !value)}>{playing ? <Pause /> : <Play />}</Button>}
      </div>
    </Carousel>
  </div>;
}