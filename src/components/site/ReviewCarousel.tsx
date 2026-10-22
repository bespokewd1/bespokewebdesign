import { useState } from "react";
import { ExternalLink, FileText, Image, Star, ThumbsUp } from "lucide-react";
import { CLIENT_REVIEWS } from "@/content/reviews";
import { REVIEW_LINKS } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ReviewCarousel() {
  const [format, setFormat] = useState<"text" | "screenshots">("text");
  return <section className="section border-b" aria-labelledby="client-reviews-heading" id="client-reviews">
    <div className="container-site">
      <span className="eyebrow">Client reviews</span>
      <h2 id="client-reviews-heading" className="mt-2 text-3xl md:text-4xl">What Our Clients Say</h2>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Review format">
        <Button variant={format === "text" ? "secondary" : "outline"} aria-pressed={format === "text"} onClick={() => setFormat("text")}><FileText />Text reviews</Button>
        <Button variant={format === "screenshots" ? "secondary" : "outline"} aria-pressed={format === "screenshots"} onClick={() => setFormat("screenshots")}><Image />Screenshots</Button>
      </div>
      <Carousel opts={{ align: "start" }} className="mt-6" aria-label="Client reviews" tabIndex={0}>
        <CarouselContent>
          {CLIENT_REVIEWS.map((review, index) => <CarouselItem key={review.name} className="md:basis-1/2" aria-label={`${index + 1} of ${CLIENT_REVIEWS.length}: ${review.name}`}>
            <figure className="card-site flex h-full min-w-0 flex-col">
              <figcaption className="min-w-0">
                <p className="break-words font-semibold text-navy">{review.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{review.platform} {review.stars ? "review" : "recommendation"}</p>
              </figcaption>
              <div className="mt-3 flex h-5 items-center gap-1" aria-label={review.stars ? "5 out of 5 stars" : "Recommends Bespoke Webdesign Edmonton"}>
                {review.stars ? Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-4 fill-current text-review-gold" aria-hidden="true" />) : <ThumbsUp className="size-4 text-primary" aria-hidden="true" />}
              </div>
              {format === "text" ? <blockquote tabIndex={0} aria-label={`Full review from ${review.name}`} className="mt-5 h-80 space-y-4 overflow-y-auto pr-2 text-base leading-relaxed focus-visible:outline-2 focus-visible:outline-ring">{review.paragraphs.map(p => <p key={p}>{p}</p>)}</blockquote>
                : <a href={review.screenshot} target="_blank" rel="noopener noreferrer" className="mt-5 block focus-visible:outline-2 focus-visible:outline-ring" aria-label={`Open original ${review.platform} review screenshot from ${review.name}`}><img src={review.screenshot} alt={`Original ${review.platform} review screenshot from ${review.name}`} loading="lazy" className="h-80 w-full object-contain" /></a>}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t pt-4">
                <Button asChild variant="link" className="h-auto whitespace-normal p-0 text-left"><a href={REVIEW_LINKS[review.platform]} target="_blank" rel="noopener noreferrer">Visit {review.platform}<ExternalLink /></a></Button>
                <Button asChild variant="link" className="h-auto whitespace-normal p-0 text-left"><a href={review.screenshot} target="_blank" rel="noopener noreferrer">Original screenshot<ExternalLink /></a></Button>
              </div>
            </figure>
          </CarouselItem>)}
        </CarouselContent>
        <div className="mt-5 flex justify-end gap-2"><CarouselPrevious className="static size-11 translate-x-0 translate-y-0 rounded-md" title="Previous reviews" /><CarouselNext className="static size-11 translate-x-0 translate-y-0 rounded-md" title="Next reviews" /></div>
      </Carousel>
    </div>
  </section>;
}