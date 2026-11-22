import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Star, ThumbsUp } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { FACEBOOK_REVIEWS, GOOGLE_REVIEWS, type ClientReview, type ReviewPlatform } from "@/content/reviews";
import { REVIEW_LINKS, REVIEW_PROOF } from "@/content/site";
import { PageHero, SectionHead } from "@/components/site/Layout";

export const Route = createFileRoute("/testimonials")({
  head: () => pageHead({
    path: "/testimonials", crumb: "Client Reviews",
    title: "Client Reviews & Testimonials | Bespoke Web Design Edmonton",
    description: "Read genuine Google and Facebook reviews from Bespoke Web Design clients. Discover why Edmonton businesses trust us with their websites and digital marketing.",
  }),
  component: Testimonials,
});

function ReviewCard({ review }: { review: ClientReview }) {
  return (
    <figure className="card-site flex h-full min-w-0 flex-col">
      <figcaption className="min-w-0">
        <p className="break-words font-semibold text-navy">{review.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{review.platform} {review.stars ? "review" : "recommendation"}</p>
      </figcaption>
      <div className="mt-3 flex h-5 items-center gap-1" aria-label={review.stars ? `${review.stars} out of 5 stars` : "Recommends Bespoke Web Design"}>
        {review.stars
          ? Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-4 fill-current text-review-gold" aria-hidden="true" />)
          : <ThumbsUp className="size-4 text-primary" aria-hidden="true" />}
      </div>
      <a href={review.screenshot} target="_blank" rel="noopener noreferrer" className="mt-4 block focus-visible:outline-2 focus-visible:outline-ring" aria-label={`Open the original ${review.platform} review screenshot from ${review.name}`}>
        <img src={review.screenshot} alt={`Original ${review.platform} review from ${review.name}`} loading="lazy" className="h-auto w-full rounded-md border" />
      </a>
      <div className="mt-auto border-t pt-4">
        <a href={REVIEW_LINKS[review.platform]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
          View on {review.platform} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </figure>
  );
}

function ReviewGallery({ platform, reviews }: { platform: ReviewPlatform; reviews: ClientReview[] }) {
  const shown = reviews.filter(r => r.screenshot.length > 0 && r.platform === platform);
  if (shown.length === 0) return null;
  return (
    <section className="section border-b" id={`${platform.toLowerCase()}-reviews`} aria-labelledby={`${platform.toLowerCase()}-reviews-heading`}>
      <div className="container-site">
        <SectionHead
          eyebrow={`${platform} Reviews`}
          title={platform === "Google" ? "What Our Clients Say on Google" : "What Our Clients Say on Facebook"}
          text={platform === "Google"
            ? "We're grateful for every client who takes the time to share their experience. Your feedback helps us continue improving our services."
            : "We appreciate the support and recommendations from businesses we've worked with. Every review means a lot to us."}
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map(review => <li key={review.name} className="flex"><ReviewCard review={review} /></li>)}
        </ul>
        <p className="mt-8">
          <a href={REVIEW_LINKS[platform]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
            {platform === "Google" ? "Read Our Reviews on Google" : "Visit Our Facebook Page"} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews & Testimonials"
        title="Trusted by Edmonton Businesses. Built on Real Relationships."
        intro="At Bespoke Web Design, we're proud of the businesses that trust us with their online presence. From professional websites to ongoing SEO and social media marketing, we focus on building lasting relationships through quality work, personal service, and clear communication."
      >
        <p className="mt-6 text-lg font-semibold text-navy-foreground">Don't just take our word for it. See what our clients have to say!</p>
        <p className="mt-2 text-sm uppercase tracking-wider text-accent">Real Clients. Real Reviews. Real Experiences.</p>
      </PageHero>

      <section className="border-b bg-surface py-6" aria-label="Verified review ratings">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {REVIEW_PROOF.map(r => (
            <a key={r.platform} href={REVIEW_LINKS[r.platform]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-ring">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: r.stars }, (_, i) => <Star key={i} className="size-4 fill-current text-review-gold" aria-hidden="true" />)}
              </span>
              <span className="text-sm font-semibold whitespace-nowrap text-navy">{r.stars}-Star {r.platform} Reviews</span>
            </a>
          ))}
        </div>
      </section>

      <ReviewGallery platform="Google" reviews={GOOGLE_REVIEWS} />
      <ReviewGallery platform="Facebook" reviews={FACEBOOK_REVIEWS} />

      <section className="section">
        <div className="container-site">
          <div className="rounded-3xl bg-navy px-6 py-12 text-center text-navy-foreground md:px-12 md:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">Ready to Work With a Marketing Partner You Can Trust?</h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-muted">
              Your business deserves more than just a website. At Bespoke Web Design, we bring your branding, website, SEO, Google Business Profile, and social media together under one trusted marketing partner. We handle your digital marketing so you can focus on running your business. Whether you're just getting started or ready to grow, let's talk about your goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" hash="review" className="btn btn-primary">Let's Talk About Your Business</Link>
              <Link to="/" hash="plans" className="btn btn-outline-light">Explore Our Marketing Plans</Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/our-work" className="underline underline-offset-4 hover:text-navy-foreground">Our Work</Link>
              <Link to="/digital-marketing" className="underline underline-offset-4 hover:text-navy-foreground">Digital Marketing Services</Link>
              <Link to="/contact" className="underline underline-offset-4 hover:text-navy-foreground">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
