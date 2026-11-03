import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Quote, Star, ThumbsUp } from "lucide-react";
import { CLIENT_REVIEWS } from "@/content/reviews";
import { REVIEW_LINKS } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ReviewCarousel() {
  return <section className="section border-b" aria-labelledby="client-reviews-heading" id="client-reviews">
    <div className="container-site">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow">Client reviews</span>
          <h2 id="client-reviews-heading" className="mt-2 text-3xl md:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn btn-primary h-auto"><a href={REVIEW_LINKS.Google} target="_blank" rel="noopener noreferrer">Google Reviews <ExternalLink /></a></Button>
          <Button asChild variant="outline" className="btn btn-outline h-auto"><a href={REVIEW_LINKS.Facebook} target="_blank" rel="noopener noreferrer">Facebook Reviews <ExternalLink /></a></Button>
        </div>
      </div>
      <Carousel opts={{ align: "start" }} className="mt-8" aria-label="Client reviews">
        <CarouselContent>
          {CLIENT_REVIEWS.map((review, index) => <CarouselItem key={`${review.platform}-${review.name}`} className="md:basis-1/2 lg:basis-1/3" aria-label={`${index + 1} of ${CLIENT_REVIEWS.length}: ${review.name}`}>
            <figure className="card-site flex h-full min-w-0 flex-col">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-5 items-center gap-1" aria-label={review.stars ? "5 out of 5 stars" : "Recommends Bespoke Web Design"}>
                  {review.stars ? Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-4 fill-current text-review-gold" aria-hidden="true" />) : <><ThumbsUp className="size-4 text-primary" aria-hidden="true" /><span className="text-xs font-semibold text-primary">Recommends</span></>}
                </div>
                <Quote className="size-6 text-muted-foreground/40" aria-hidden="true" />
              </div>
              <blockquote className="mt-4 line-clamp-[8] flex-1 space-y-3 text-base leading-relaxed text-foreground">{review.paragraphs.map(p => <p key={p}>{p}</p>)}</blockquote>
              <figcaption className="mt-5 border-t pt-4">
                <p className="break-words font-semibold text-navy">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.platform} {review.stars ? "review" : "recommendation"}</p>
              </figcaption>
            </figure>
          </CarouselItem>)}
        </CarouselContent>
        <div className="mt-5 flex items-center justify-between gap-4">
          <Button asChild variant="link" className="h-auto p-0"><Link to="/testimonials">Read all reviews <ArrowRight /></Link></Button>
          <div className="flex gap-2"><CarouselPrevious className="static size-11 translate-x-0 translate-y-0 rounded-md" title="Previous reviews" /><CarouselNext className="static size-11 translate-x-0 translate-y-0 rounded-md" title="Next reviews" /></div>
        </div>
      </Carousel>
    </div>
  </section>;
}
