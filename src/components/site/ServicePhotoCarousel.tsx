import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

export function ServicePhotoCarousel({ photos, label, interval }: { photos: { src: string; alt: string; content?: ReactNode }[]; label: string; interval: number }) {
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
    const timer = window.setInterval(() => { if (!document.hidden) api.scrollNext(); }, interval);
    return () => window.clearInterval(timer);
  }, [api, playing, interacting, visible, reducedMotion, interval]);

  return <div ref={container} className="relative size-full" onFocus={() => setInteracting(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <Carousel setApi={setApi} opts={{ loop: true, duration: reducedMotion ? 0 : 25 }} className="size-full" aria-label={`${label} samples`} onKeyDown={() => setPlaying(false)}>
      <div className="absolute inset-x-0 top-0 bottom-11 overflow-hidden [&>div]:h-full">
        <CarouselContent className="ml-0 h-full">{photos.map((photo, index) => <CarouselItem key={photo.src} className="h-full pl-0" aria-label={`${index + 1} of ${photos.length}`}>
          {photo.content ?? <figure className="service-card-art"><img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" /></figure>}
        </CarouselItem>)}</CarouselContent>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-11 items-center justify-center bg-card" aria-label={`Choose ${label} sample`}>
        <Button variant="ghost" size="icon" className="h-11 w-8 shrink-0" title={`Previous ${label} photo`} aria-label={`Previous ${label} photo`} onClick={() => { api?.scrollPrev(); setPlaying(false); }}><ChevronLeft /></Button>
        {photos.map((photo, index) => <Button key={photo.src} variant="ghost" size="icon" className="h-11 w-7 shrink-0" aria-label={`Show ${label} sample ${index + 1}`} aria-pressed={selected === index} onClick={() => { api?.scrollTo(index); setPlaying(false); }}><span className={`size-2.5 rounded-full ${selected === index ? "bg-primary" : "bg-muted-foreground/50"}`} /></Button>)}
        <Button variant="ghost" size="icon" className="h-11 w-8 shrink-0" title={`Next ${label} photo`} aria-label={`Next ${label} photo`} onClick={() => { api?.scrollNext(); setPlaying(false); }}><ChevronRight /></Button>
        {!reducedMotion && <Button variant="ghost" size="icon" className="h-11 w-8 shrink-0" title={playing ? `Pause ${label} photos` : `Play ${label} photos`} aria-label={playing ? `Pause ${label} photos` : `Play ${label} photos`} onClick={() => setPlaying(value => !value)}>{playing ? <Pause /> : <Play />}</Button>}
      </div>
    </Carousel>
  </div>;
}