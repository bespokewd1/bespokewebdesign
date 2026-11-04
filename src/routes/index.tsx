import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Star, MapPin, Handshake, RefreshCw } from "lucide-react";
import { CTA_SECONDARY, HOME_SERVICES, HOME_FAQS, FEATURED_PROJECTS, MARKETING_PHASES, FOUNDER, REVIEW_PROOF, REVIEW_LINKS } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { SectionHead } from "@/components/site/Layout";
import { Icon } from "@/components/site/Icon";
import { ProjectCard } from "@/components/site/Cards";
import { ReviewCarousel } from "@/components/site/ReviewCarousel";
import { LeadForm } from "@/components/site/LeadForm";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroAsset from "@/assets/bespoke-worker-hero.webp.asset.json";
import founderPhoto1 from "@/assets/founder-client-1.jpg.asset.json";
import founderPhoto2 from "@/assets/founder-client-2.jpg.asset.json";
import founderPhoto3 from "@/assets/founder-client-3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({ path: "/", title: "Bespoke Web Design | Edmonton Digital Marketing Agency", description: "Done-for-you digital marketing for Edmonton businesses. Custom websites, local SEO, Google Business Profile management, branding, and social media." });
    return head;
  },
  component: Home,
});
function ReviewButton({ children = "Get a Free Website Review" }: { children?: React.ReactNode }) {
  return <Button asChild className="btn btn-primary h-auto whitespace-normal"><Link to="/" hash="review">{children}<ArrowRight className="shrink-0" /></Link></Button>;
}
const FOUNDER_PHOTOS = [
  { src: founderPhoto1.url, alt: "Charles meeting with a client, reviewing their new website together" },
  { src: founderPhoto2.url, alt: "Charles with a client outside their business" },
  { src: founderPhoto3.url, alt: "Charles with a client going over their new website on a laptop" },
];
function FounderPhotoCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % FOUNDER_PHOTOS.length), 3000);
    return () => window.clearInterval(timer);
  }, [paused]);
  return <div role="group" aria-roledescription="carousel" aria-label="Charles working with clients" className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    {FOUNDER_PHOTOS.map((photo, index) => <img key={photo.src} src={photo.src} alt={index === active ? photo.alt : ""} aria-hidden={index !== active} loading={index === 0 ? "eager" : "lazy"} className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`} />)}
    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
      {FOUNDER_PHOTOS.map((photo, index) => <button key={photo.src} type="button" onClick={() => setActive(index)} aria-label={`Show photo ${index + 1} of ${FOUNDER_PHOTOS.length}`} aria-current={index === active} className={`size-3 rounded-full border border-white/80 shadow-sm transition-colors ${index === active ? "bg-white" : "bg-white/40 hover:bg-white/70 focus-visible:bg-white"}`} />)}
    </div>
  </div>;
}
function Home() {
  return <div className="home-page">
    <section className="hero-photo home-hero overflow-hidden">
      <img src={heroAsset.url} alt="" fetchPriority="high" />
      <div className="container-site py-12 md:py-20">
        <span className="eyebrow">Edmonton Digital Marketing for Trades &amp; Service Businesses</span>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Get Found Online.<br />Build Trust.<br /><span className="text-hero-accent">Grow Your Business.</span></h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-muted sm:text-lg">Websites, Google and social media for trades and service businesses — done for you, in one place.</p>
        <div className="home-hero-actions mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"><ReviewButton /><Button asChild variant="outline" className="btn btn-outline-light h-auto whitespace-normal bg-transparent"><Link to="/our-work">{CTA_SECONDARY}</Link></Button></div>
        <div aria-label="Five-star customer reviews" className="mt-5 flex items-center gap-1 min-[375px]:gap-2 sm:gap-6">
          {REVIEW_PROOF.map(review => <a key={review.platform} href={REVIEW_LINKS[review.platform]} target="_blank" rel="noopener noreferrer" aria-label={`5-star reviews on ${review.platform}`} className="flex min-h-11 shrink-0 items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 hover:underline focus-visible:outline-2 focus-visible:outline-ring">
            <span aria-hidden="true" className="flex gap-px min-[375px]:gap-0.5 text-review-gold">{Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-2 fill-current min-[375px]:size-2.5 sm:size-3.5" strokeWidth={1.5} />)}</span>
            <span className="whitespace-nowrap text-[10px] font-medium text-navy-foreground min-[375px]:text-[11px] sm:text-sm">{review.platform} Reviews</span>
          </a>)}
        </div>
      </div>
    </section>

    <section className="section home-services bg-background"><div className="container-site">
      <SectionHead eyebrow="How we help" title="Everything You Need to Get Found." text="Website, Google, SEO and social media marketing— all handled for you." />
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">{HOME_SERVICES.map(s => <article key={s.id} className="card-site home-service flex min-w-0 flex-col"><Icon name={s.icon} className="size-8 text-accent" /><h3 className="mt-4 text-base leading-tight text-navy">{s.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p><Button asChild variant="link" className="mt-4 min-h-11 justify-start self-start p-0"><Link aria-label={`Learn more about ${s.title}`} to={s.id === "website-development" ? "/website-design" : s.id === "seo" ? "/seo" : s.id === "google-ads" ? "/digital-marketing" : "/services"} {...(s.id === "branding" || s.id === "social-media" || s.id === "google-ads" ? { hash: s.id } : {})}><ArrowRight /></Link></Button></article>)}</div>
      <Button asChild variant="link" className="mt-6 h-auto whitespace-normal p-0"><Link to="/digital-marketing">Explore Our Digital Marketing Services <ArrowRight /></Link></Button>
    </div></section>

    <section className="section border-y bg-surface" id="founder" aria-labelledby="founder-heading"><div className="container-site grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <FounderPhotoCarousel />
      <div><span className="eyebrow">Meet the founder</span><h2 id="founder-heading" className="mt-3 text-3xl leading-tight text-navy md:text-4xl">You Focus on Your Business. I'll Handle the Marketing.</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
          <p className="font-semibold text-navy">Hi, I'm Charles, founder of Bespoke Web Design in Edmonton, Alberta.</p>
          <p>I started Bespoke Marketing to help hardworking business owners get noticed, attract more customers, and grow without the hassle of managing their own marketing.</p>
          <p>From branding and websites to Google and social media, I take care of your online presence so you can focus on what you do best.</p>
          <p>{"\n"}</p>
          <p>When you work with Bespoke Web Design, you work directly with me. No middlemen, no confusing jargon. Just practical, all done-for-you marketing.</p>
        </div>
        <p className="mt-4 font-display text-xl italic text-navy">— Charles</p>
        <div className="mt-6"><ReviewButton>Let's Get Your Business Noticed</ReviewButton></div>
      </div>
    </div></section>

    <section className="section home-partner home-deco bg-navy text-navy-foreground" id="why-bespoke"><div className="container-site">
      <div className="max-w-2xl"><span className="eyebrow">Why businesses choose us</span><h2 className="mt-3 text-3xl leading-tight md:text-4xl">You Run the Business. We Run the Marketing.</h2><p className="mt-4 text-navy-muted">Doing it yourself works for some. If you'd rather hand it off to someone who knows it, that's us.</p></div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: MapPin, title: "Local in Edmonton", text: "We meet you and learn what your business needs." },
        { icon: Star, title: "5-Star Rated", text: "Real reviews from real local businesses." },
        { icon: Handshake, title: "One Partner, Less Stress", text: "One person to call. No juggling providers." },
        { icon: RefreshCw, title: "Always Ongoing", text: "We keep your marketing active every month." },
      ].map(b => <li key={b.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><b.icon className="size-5" aria-hidden="true" /></span><div><h3 className="text-base normal-case not-italic">{b.title}</h3><p className="mt-1 text-sm leading-relaxed text-navy-muted">{b.text}</p></div></li>)}</ul>
    </div></section>

    <section className="section home-deco-light border-b" id="our-process" aria-label="Our done-for-you marketing process"><div className="container-site">
      <SectionHead eyebrow="All-in-one. Done for you." title="How It Works: 6 Simple Steps." text="One plan, one point of contact, done for you." />
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{MARKETING_PHASES.map((phase, i) => <li key={phase.title} className="card-site flex flex-col border-t-2 border-t-primary">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span><h3 className="mt-2 text-lg leading-tight text-navy">{phase.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
      </li>)}</ol>
      <p className="mt-8 max-w-3xl font-semibold text-navy">Steps 5 and 6 repeat every month. Results build over time with consistency.</p>
      <div className="mt-6 flex flex-wrap gap-3"><ReviewButton>Get My Free Website Check</ReviewButton><Button asChild variant="outline" className="btn btn-outline h-auto"><Link to="/" hash="plans">See Monthly Plans <ArrowRight /></Link></Button></div>
    </div></section>

    <ReviewCarousel />

    <section className="section"><div className="container-site">
      <SectionHead eyebrow="Our work" title="Real Businesses. Real Projects." text="A few websites and marketing projects we've built." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">{FEATURED_PROJECTS.map(p => <ProjectCard key={p.name} p={p} hideMissingImage />)}</div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3"><Button asChild variant="outline" className="btn btn-outline h-auto"><Link to="/our-work">View All Our Work <ArrowRight /></Link></Button><Button asChild variant="link" className="h-auto p-0"><Link to="/testimonials">Read Client Reviews <ArrowRight /></Link></Button></div>
    </div></section>


    <section className="section scroll-mt-20" id="plans"><div className="container-site">
      <SectionHead eyebrow="Monthly digital marketing" title="Two Simple Monthly Plans." center text="Start with Foundation or choose Growth for more social content and Google Ads management." />
      <MarketingPlans />
      <div className="mx-auto mt-10 max-w-2xl text-center"><h3 className="text-xl text-navy">Not Sure Which Plan Is Right for Your Business?</h3><p className="mt-3 text-muted-foreground">We'll look at your business and suggest where to start.</p><div className="mt-5"><ReviewButton>Get a Free Marketing Review</ReviewButton></div></div>
    </div></section>

    <section className="section border-t" aria-labelledby="faq-heading"><div className="container-site"><div className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="text-3xl md:text-4xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mt-8 border-t">{HOME_FAQS.map((faq,index) => <AccordionItem key={faq.question} value={`faq-${index+1}`}><AccordionTrigger className="min-h-14 gap-4 py-5 text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none [&>svg]:motion-reduce:transition-none">{faq.question}</AccordionTrigger><AccordionContent className="space-y-3 pr-6 text-base leading-relaxed text-muted-foreground" style={{ animation: "none" }}>{faq.paragraphs.map(p => <p key={p}>{p}</p>)}</AccordionContent></AccordionItem>)}</Accordion>
      <div className="mt-6"><ReviewButton>Get My Free Website &amp; Marketing Review</ReviewButton></div>
    </div></div></section>

    <section className="section scroll-mt-20 bg-navy text-navy-foreground" id="review"><div className="container-site grid gap-10 lg:grid-cols-2">
      <div><span className="eyebrow">Free website &amp; marketing review</span><h2 className="mt-2 text-3xl md:text-4xl">Find Out Where Your Online Marketing Could Improve.</h2><p className="mt-4 text-navy-muted">We'll check your website and Google listing and show you simple ways to get more calls. Free, no obligation.</p></div>
      <div className="text-foreground"><LeadForm submitLabel="Request My Free Marketing Review" /></div>
    </div></section>
  </div>;
}
