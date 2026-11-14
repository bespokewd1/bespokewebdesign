import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { publishedMedia, type ProjectMedia } from "@/lib/portfolio";

export function ProjectGallery({ media, label }: { media: ProjectMedia[]; label: string }) {
  const [expanded, setExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const images = publishedMedia(media).slice(0, 6);
  const visible = expanded ? images : images.slice(0, 3);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!api) return;
    const sync = () => setSelected(api.selectedScrollSnap());
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => { api.off("select", sync); api.off("reInit", sync); };
  }, [api]);
  if (images.length === 0) return null;
  return <div>
    <Carousel setApi={setApi} opts={{ align: "start", duration: reducedMotion ? 0 : 25 }} aria-label={label}>
      <CarouselContent>{visible.map((item, i) => <CarouselItem key={item.image} aria-label={`${i + 1} of ${visible.length}`}>
        <div className="flex aspect-square items-center justify-center bg-muted sm:aspect-[4/3]">
          <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-contain" />
        </div>
      </CarouselItem>)}</CarouselContent>
      {visible.length > 1 && <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <CarouselPrevious className="static size-11 translate-x-0 translate-y-0" aria-label={`Previous ${label} image`} />
        <div className="flex flex-wrap justify-center" aria-label="Choose image">{visible.map((item, i) => <Button key={item.image} variant="ghost" size="icon" className="size-11" aria-label={`Show ${label} image ${i + 1}`} aria-pressed={selected === i} onClick={() => api?.scrollTo(i)}><span className={`size-2 rounded-full ${selected === i ? "bg-primary" : "bg-input"}`} /></Button>)}</div>
        <CarouselNext className="static size-11 translate-x-0 translate-y-0" aria-label={`Next ${label} image`} />
      </div>}
    </Carousel>
    {!expanded && images.length > 3 && <Button variant="outline" className="mt-5 min-h-11" onClick={() => setExpanded(true)}>View all {images.length} samples</Button>}
  </div>;
}