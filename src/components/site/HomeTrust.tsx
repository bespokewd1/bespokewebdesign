import { useEffect, useRef, useState } from "react";
import { Pause, Play, Star } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/content/reviews";
import { REVIEW_LINKS, TRUSTED_CLIENTS } from "@/content/site";
import googleG from "@/assets/google-g.png.asset.json";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

export function HomeTrust() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [brandsPaused, setBrandsPaused] = useState(false);
  const viewport = useRef<HTMLDivElement>(null);
  const [reviewHeight, setReviewHeight] = useState<number>();
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!api) return;
    const select = () => setActive(api.selectedScrollSnap());
    const pause = () => setPlaying(false);
    select();
    api.on("select", select).on("reInit", select).on("pointerDown", pause);
    return () => { api.off("select", select).off("reInit", select).off("pointerDown", pause); };
  }, [api]);
  useEffect(() => {
    if (!api || reduced || !playing || interacting) return;
    const timer = window.setInterval(() => api.scrollNext(), 5500);
    return () => window.clearInterval(timer);
  }, [api, reduced, playing, interacting]);
  useEffect(() => {
    const figure = viewport.current?.querySelectorAll("figure")[active];
    if (!figure) return;
    const resize = new ResizeObserver(() => setReviewHeight(figure.getBoundingClientRect().height));
    setReviewHeight(figure.getBoundingClientRect().height);
    resize.observe(figure);
    return () => resize.disconnect();
  }, [active]);
  return <>
    <section className="section home-google-trust border-b bg-surface" aria-labelledby="google-trust-heading">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><h2 id="google-trust-heading" className="text-3xl leading-tight text-navy md:text-4xl">Trusted by Local Businesses</h2><p className="mt-3 text-muted-foreground">See what our clients have to say.</p></div><Button asChild variant="link" className="min-h-11 h-auto p-0"><a href={REVIEW_LINKS.Google} target="_blank" rel="noopener noreferrer"><img src={googleG.url} alt="" width="20" height="20" />Google Reviews</a></Button></div>
        <Carousel setApi={setApi} opts={{ loop: true, duration: reduced ? 0 : 25 }} aria-label="Verified Google reviews" className="mx-auto mt-7 max-w-4xl" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }} onPointerDownCapture={() => setPlaying(false)} onKeyDownCapture={() => setPlaying(false)}>
          <div ref={viewport} className="overflow-hidden" style={{ height: reviewHeight }}><CarouselContent className="items-start">
            {GOOGLE_REVIEWS.map((review, index) => <CarouselItem key={review.name} aria-label={`Review ${index + 1} of ${GOOGLE_REVIEWS.length}: ${review.name}`} aria-hidden={index !== active}>
              <figure className="home-google-review border-l-2 border-primary bg-background p-5 sm:p-7">
                <div className="flex items-center gap-1 text-review-gold" aria-label={`${review.stars} out of 5 stars`}>{Array.from({ length: review.stars ?? 0 }, (_, i) => <Star key={i} className="size-4 fill-current" aria-hidden="true" />)}</div>
                <blockquote className="mt-4 space-y-3 text-sm leading-relaxed text-foreground sm:text-base">{review.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</blockquote>
                <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3"><span className="font-semibold text-navy">{review.name}</span><span className="flex items-center gap-2 text-xs text-muted-foreground"><img src={googleG.url} alt="" width="18" height="18" />Google review</span></figcaption>
              </figure>
            </CarouselItem>)}
          </CarouselContent></div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-1 max-md:hidden"><CarouselPrevious className="static size-11 translate-y-0 rounded-md" /><CarouselNext className="static size-11 translate-y-0 rounded-md" /></div>
            <div className="flex flex-wrap justify-center" aria-label="Choose a Google review">{GOOGLE_REVIEWS.map((review, index) => <Button key={review.name} variant="ghost" size="icon" className="size-11" aria-label={`Show Google review ${index + 1}`} aria-current={active === index} onClick={() => { api?.scrollTo(index); setPlaying(false); }}><span className={`size-2 rounded-full ${active === index ? "bg-primary" : "bg-muted-foreground/40"}`} /></Button>)}</div>
            {!reduced && <Button variant="ghost" size="icon" className="size-11" title={playing ? "Pause Google reviews" : "Play Google reviews"} aria-label={playing ? "Pause Google reviews" : "Play Google reviews"} onClick={() => setPlaying(current => !current)}>{playing ? <Pause /> : <Play />}</Button>}
          </div>
        </Carousel>
      </div>
    </section>
    <section className="home-brand-showcase border-b bg-background py-8" aria-labelledby="brand-showcase-heading">
      <div className="container-site flex items-center justify-between gap-4"><h2 id="brand-showcase-heading" className="text-xl text-navy">Businesses We Support</h2>{!reduced && <Button variant="ghost" size="icon" className="size-11" aria-label={brandsPaused ? "Play client names" : "Pause client names"} title={brandsPaused ? "Play client names" : "Pause client names"} onClick={() => setBrandsPaused(current => !current)}>{brandsPaused ? <Play /> : <Pause />}</Button>}</div>
      <div className={`home-brand-window mt-6 ${brandsPaused ? "is-paused" : ""}`} tabIndex={0} aria-label="Client businesses"><div className="home-brand-track">{[false, true].map(duplicate => <ul key={String(duplicate)} className="home-brand-group" aria-hidden={duplicate || undefined}>{TRUSTED_CLIENTS.map(client => <li key={client.name} className="home-brand-item font-display text-lg font-bold text-navy">{client.logo ? <img src={client.logo} alt={client.name} width="160" height="48" loading="lazy" className="h-12 w-40 object-contain" /> : client.name}</li>)}</ul>)}</div></div>
    </section>
  </>;
}