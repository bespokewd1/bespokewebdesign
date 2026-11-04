import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Star, Phone, Users, ExternalLink, MapPin, Handshake, RefreshCw } from "lucide-react";
import { CTA_SECONDARY, HOME_SERVICES, HOME_FAQS, TRUSTED_CLIENTS, FEATURED_PROJECTS, MARKETING_PHASES, FOUNDER, REVIEW_PROOF, REVIEW_LINKS } from "@/content/site";
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

    <section className="home-benefits border-b bg-surface" aria-label="Your marketing priorities"><div className="container-site grid grid-cols-3 py-5 md:py-7">
      {[{ icon: TrendingUp, title: "More Visibility", text: "Help local customers find your business." }, { icon: Phone, title: "Better Connections", text: "Make it easier for customers to get in touch." }, { icon: Users, title: "Less Stress", text: "One partner to coordinate your marketing." }].map(benefit => <div key={benefit.title} className="home-benefit min-w-0 px-2 md:px-6"><benefit.icon className="mb-2 size-6 text-accent md:size-8" aria-hidden="true" /><div className="min-w-0"><p className="text-sm font-bold text-navy md:text-base">{benefit.title}</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">{benefit.text}</p></div></div>)}
    </div></section>

    <section className="section home-services bg-background"><div className="container-site">
      <SectionHead eyebrow="How we help" title="Everything You Need to Get Found." text="Website, Google, SEO and social media — all handled for you." />
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">{HOME_SERVICES.map(s => <article key={s.id} className="card-site home-service flex min-w-0 flex-col"><Icon name={s.icon} className="size-8 text-accent" /><h3 className="mt-4 text-base leading-tight text-navy">{s.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p><Button asChild variant="link" className="mt-4 min-h-11 justify-start self-start p-0"><Link aria-label={`Learn more about ${s.title}`} to={s.id === "website-development" ? "/website-design" : s.id === "seo" ? "/seo" : s.id === "google-ads" ? "/digital-marketing" : "/services"} {...(s.id === "branding" || s.id === "social-media" || s.id === "google-ads" ? { hash: s.id } : {})}><ArrowRight /></Link></Button></article>)}</div>
      <Button asChild variant="link" className="mt-6 h-auto whitespace-normal p-0"><Link to="/digital-marketing">Explore Our Digital Marketing Services <ArrowRight /></Link></Button>
    </div></section>

    <section className="section home-partner home-deco bg-navy text-navy-foreground" id="why-bespoke"><div className="container-site">
      <div className="max-w-2xl"><span className="eyebrow">Why businesses choose us</span><h2 className="mt-3 text-3xl leading-tight md:text-4xl">You Run the Business. We Run the Marketing.</h2><p className="mt-4 text-navy-muted">Doing it yourself works for some. If you'd rather hand it off to someone who knows it, that's us.</p></div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: MapPin, title: "Local in Edmonton", text: "We meet you and learn what your business needs." },
        { icon: Star, title: "5-Star Rated", text: "Real reviews from real local businesses." },
        { icon: Handshake, title: "One Partner", text: "One person to call. No juggling providers." },
        { icon: RefreshCw, title: "Always Ongoing", text: "We keep your marketing active every month." },
      ].map(b => <li key={b.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3"><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><b.icon className="size-5" aria-hidden="true" /></span><div><h3 className="text-base normal-case not-italic">{b.title}</h3><p className="mt-1 text-sm leading-relaxed text-navy-muted">{b.text}</p></div></li>)}</ul>
    </div></section>

    <section className="section border-b" id="founder" aria-labelledby="founder-heading"><div className="container-site grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      {FOUNDER.photo ? <img src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.title} of Bespoke Web Design`} loading="lazy" className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover" />
        : <div className="flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-lg border border-dashed bg-muted text-center text-sm text-muted-foreground"><span className="flex flex-col items-center gap-2"><Users className="size-8" aria-hidden="true" />Founder photo coming soon</span></div>}
      <div><span className="eyebrow">Meet the {FOUNDER.title.toLowerCase()}</span><h2 id="founder-heading" className="mt-3 text-3xl leading-tight text-navy md:text-4xl">Put Your Marketing on Autopilot.</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">You started your business to do great work, not to become a full-time marketer. When you partner with Bespoke, marketing stops being another headache on your to-do list.{"\n\n\n"}When you hire a marketing agency, you usually get sold by the owner and then handed off to a junior coordinator. At Bespoke Web Design, you work directly with me.{"\n\n"}My job is simple: take marketing completely off your plate, give you clear advice without jargon, and keep your business visible while you focus on jobs.</p>
        <p className="mt-4 font-display text-xl italic text-navy">— Charles</p>
        <div className="mt-6"><ReviewButton>Talk to Me About Your Business</ReviewButton></div>
      </div>
    </div></section>


    <ReviewCarousel />

    <section className="section border-b bg-surface" aria-labelledby="real-business-heading"><div className="container-site">
      <SectionHead eyebrow="Real people. Real partnerships." title="Supporting Real Businesses. Growing Together." text="Local businesses we work with, face to face." />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{TRUSTED_CLIENTS.map(c => <li key={c.name} className="card-site flex flex-col p-0 overflow-hidden">
        <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed bg-muted text-center text-sm text-muted-foreground"><span className="flex flex-col items-center gap-2"><Users className="size-8" aria-hidden="true" />Photo with {c.name} coming soon</span></div>
        <div className="p-5"><p className="font-display text-lg font-bold uppercase italic text-navy">{c.name}</p><p className="text-sm text-muted-foreground">{c.industry} · Alberta</p></div>
      </li>)}</ul>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3"><Button asChild variant="link" className="h-auto p-0"><Link to="/our-work">View Client Projects <ArrowRight /></Link></Button><Button asChild variant="link" className="h-auto p-0"><Link to="/testimonials">Read Client Reviews <ArrowRight /></Link></Button></div>
    </div></section>

    <section className="section home-deco-light border-b" id="our-process" aria-label="Our done-for-you marketing process"><div className="container-site">
      <SectionHead eyebrow="All-in-one. Done for you." title="How It Works: 6 Simple Steps." text="One plan, one point of contact, done for you." />
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{MARKETING_PHASES.map((phase, i) => <li key={phase.title} className="card-site flex flex-col border-t-2 border-t-primary">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span><h3 className="mt-2 text-lg leading-tight text-navy">{phase.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
        {"tool" in phase && <Button asChild className="btn btn-primary mt-5 h-auto whitespace-normal"><a href={phase.tool.href} target="_blank" rel="noopener noreferrer">{phase.tool.label} <ExternalLink className="shrink-0" /></a></Button>}
      </li>)}</ol>
      <p className="mt-8 max-w-3xl font-semibold text-navy">Steps 5 and 6 repeat every month. Results build over time with consistency.</p>
      <Button asChild variant="outline" className="btn btn-outline mt-6 h-auto"><Link to="/" hash="plans">Explore Our Monthly Plans <ArrowRight /></Link></Button>
    </div></section>

    <section className="section"><div className="container-site">
      <SectionHead eyebrow="Our work" title="Real Businesses. Real Projects." text="A few websites and marketing projects we've built." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">{FEATURED_PROJECTS.map(p => <ProjectCard key={p.name} p={p} hideMissingImage />)}</div>
      <div className="mt-8"><Button asChild variant="outline" className="btn btn-outline h-auto"><Link to="/our-work">View All Our Work <ArrowRight /></Link></Button></div>
    </div></section>


    <section className="section scroll-mt-20" id="plans"><div className="container-site">
      <SectionHead eyebrow="Monthly digital marketing" title="Simple Monthly Plans." center text="Your website and ongoing marketing in one monthly price." />
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
