import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, RefreshCw, MessageCircle, HardHat } from "lucide-react";
import { HOME_SERVICES, HOME_FAQS, HOME_FEATURED_PROJECTS, HOME_START_STEPS } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { SectionHead } from "@/components/site/Layout";
import { HomeServiceCard } from "@/components/site/HomeServiceCard";
import { ProjectCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroAsset from "@/assets/bespoke-worker-hero.webp.asset.json";
import { FounderPhotoCarousel } from "@/components/site/FounderPhotoCarousel";
import { HomeTrust } from "@/components/site/HomeTrust";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({ path: "/", title: "Bespoke Web Design | Edmonton Digital Marketing Agency", description: "Done-for-you digital marketing for Edmonton businesses. Custom websites, local SEO, Google Business Profile management, branding, and social media." });
    return { ...head, meta: [...head.meta, { property: "og:image", content: `https://bespokewebdesign.lovable.app${heroAsset.url}` }, { name: "twitter:image", content: `https://bespokewebdesign.lovable.app${heroAsset.url}` }] };
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
      <div className="container-site py-10 md:py-14">
        <span className="eyebrow home-enter">Edmonton Digital Marketing for Trades &amp; Service Businesses</span>
        <h1 className="home-enter mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Complete Digital Marketing. <span className="text-hero-accent md:block">One Trusted Partner.</span></h1>
        <p className="home-hero-benefit home-enter home-enter-delayed mt-5 max-w-xl text-base font-medium leading-relaxed text-navy-foreground sm:text-lg">Get found by more local customers, build trust online, and turn more visitors into enquiries.</p>
        <p className="home-hero-description home-enter home-enter-delayed mt-3 max-w-xl text-sm leading-relaxed text-navy-muted sm:text-base">From custom websites and local SEO to social media marketing, we manage your online presence so you can focus on running your business.</p>
        <div className="home-hero-actions home-enter home-enter-late mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"><ReviewButton>Get a Free Marketing Review</ReviewButton><Button asChild variant="outline" className="btn btn-outline-light h-auto whitespace-normal bg-transparent"><Link to="/our-work">View Our Work</Link></Button></div>
      </div>
    </section>

    <HomeTrust />

    {HOME_FEATURED_PROJECTS.length > 0 && <section className="section home-projects" aria-label="Featured projects"><div className="container-site"><SectionHead eyebrow="Our work" title="Real Projects. Built for Real Businesses." text="Explore websites, branding, and digital marketing created for businesses like yours." /><div className="mt-8 grid gap-6 md:grid-cols-2">{HOME_FEATURED_PROJECTS.slice(0, 3).map(project => <ProjectCard key={project.name} p={project} hideMissingImage />)}</div></div></section>}

    <section className="section home-services bg-background"><div className="container-site">
      <SectionHead eyebrow="How we help" title="Everything Your Business Needs Online." text="From your website to your Google presence and social media, we take care of the details that help customers find and trust your business." />
      <div className="home-service-grid mt-8 grid gap-6">{HOME_SERVICES.map(service => <HomeServiceCard key={service.id} service={service} />)}</div>
      <Button asChild variant="link" className="mt-6 h-auto whitespace-normal p-0"><Link to="/digital-marketing">Explore Our Digital Marketing Services <ArrowRight /></Link></Button>
    </div></section>

    <section className="section home-partner bg-navy text-navy-foreground" id="why-bespoke" aria-labelledby="partner-heading"><div className="container-site">
      <div className="max-w-3xl"><span className="eyebrow">Why Bespoke</span><h2 id="partner-heading" className="mt-3 text-3xl leading-tight md:text-4xl">Your Business Comes First. We Handle the Marketing.</h2><p className="mt-4 text-navy-muted">One partner, one point of contact, and ongoing support for your website and online presence.</p></div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: Handshake, title: "One Point of Contact", text: "Work directly with Charles. No juggling providers." },
        { icon: RefreshCw, title: "Fully Managed Marketing", text: "Less on your plate. We handle the agreed work." },
        { icon: HardHat, title: "Built for Local Service Businesses", text: "A clear online presence built around your services." },
        { icon: MessageCircle, title: "Clear Communication & Ongoing Support", text: "Practical advice and updates, without the jargon." },
      ].map(b => <li key={b.title} className="border-t border-navy-muted/30 pt-5"><b.icon className="size-6 text-hero-accent" aria-hidden="true" /><h3 className="mt-3 text-base normal-case not-italic">{b.title}</h3><p className="mt-2 text-sm leading-relaxed text-navy-muted">{b.text}</p></li>)}</ul>
      <div id="founder" className="mt-12 grid items-center gap-8 border-t border-navy-muted/30 pt-10 md:grid-cols-2">
        <FounderPhotoCarousel />
        <div><span className="eyebrow">Meet the founder</span><h2 className="mt-3 text-2xl leading-tight md:text-3xl">You Focus on Your Business. I'll Handle the Marketing.</h2><p className="mt-4 leading-relaxed text-navy-muted">Hi, I'm Charles, founder of Bespoke Web Design in Edmonton. I started Bespoke Marketing to take online marketing off busy business owners' plates.</p><p className="mt-4 leading-relaxed text-navy-muted">You work directly with me. No middlemen, no confusing jargon. Just practical, done-for-you marketing.</p><p className="mt-4 font-display text-xl italic">— Charles</p><div className="mt-6"><ReviewButton>Let's Get Your Business Noticed</ReviewButton></div></div>
      </div>
    </div></section>

    <section className="section border-b bg-surface" id="our-process" aria-label="Our done-for-you marketing process"><div className="container-site">
      <SectionHead eyebrow="All-in-one. Done for you." title="Getting Started Is Simple." />
      <ol className="mt-8 grid gap-8 md:grid-cols-3">{HOME_START_STEPS.map((step, i) => <li key={step.title} className="border-t-2 border-primary pt-5"><span className="font-display text-3xl font-bold text-primary">0{i + 1}</span><h3 className="mt-4 text-xl leading-tight text-navy">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></li>)}</ol>
      <div className="mt-6"><Button asChild variant="link" className="min-h-11 h-auto whitespace-normal p-0"><Link to="/digital-marketing">See how your marketing works together <ArrowRight /></Link></Button></div>
    </div></section>

    <section className="section scroll-mt-20" id="plans"><div className="container-site">
      <SectionHead eyebrow="Monthly digital marketing" title="Two Simple Monthly Plans." center text="Start with Foundation or choose Growth for more social content and Google Ads management." />
      <MarketingPlans />
      <div className="mx-auto mt-10 max-w-2xl text-center"><h3 className="text-xl text-navy">Not Sure Which Plan Is Right for Your Business?</h3><p className="mt-3 text-muted-foreground">We'll look at your business and suggest where to start.</p><div className="mt-5"><ReviewButton>Get a Free Marketing Review</ReviewButton></div></div>
    </div></section>

    <section className="section bg-surface border-b" aria-labelledby="industries-heading"><div className="container-site"><h2 id="industries-heading" className="max-w-3xl text-3xl leading-tight text-navy md:text-4xl">Built for Businesses That Keep Things Moving.</h2><ul className="mt-7 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{[
      { name: "Plumbing", hash: "plumbing" }, { name: "Electrical", hash: "electrical" }, { name: "HVAC", hash: "services" }, { name: "General Contractors", hash: "contractors" }, { name: "Transportation & Logistics", hash: "transportation" }, { name: "Other Local Service Businesses", hash: "services" },
    ].map(industry => <li key={industry.name} className="border-b"><Button asChild variant="link" className="h-auto min-h-14 w-full justify-between whitespace-normal py-3 text-left text-navy"><Link to="/industries" hash={industry.hash}>{industry.name}<ArrowRight /></Link></Button></li>)}</ul></div></section>

    <section className="section border-t" aria-labelledby="faq-heading"><div className="container-site"><div className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="text-3xl md:text-4xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mt-8 border-t">{HOME_FAQS.map((faq,index) => <AccordionItem key={faq.question} value={`faq-${index+1}`}><AccordionTrigger className="min-h-14 gap-4 py-5 text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none [&>svg]:motion-reduce:transition-none">{faq.question}</AccordionTrigger><AccordionContent className="space-y-3 pr-6 text-base leading-relaxed text-muted-foreground" style={{ animation: "none" }}>{faq.paragraphs.map(p => <p key={p}>{p}</p>)}</AccordionContent></AccordionItem>)}</Accordion>
      <div className="mt-6"><ReviewButton>Get My Free Website &amp; Marketing Review</ReviewButton></div>
    </div></div></section>

    <section className="section scroll-mt-20 bg-navy text-navy-foreground" id="review"><div className="container-site grid gap-10 lg:grid-cols-2">
      <div><span className="eyebrow">Free website &amp; marketing review</span><h2 className="mt-2 text-3xl md:text-4xl">Ready to Put Your Marketing in Good Hands?</h2><p className="mt-4 text-navy-muted">Tell us about your business. We'll help you explore the right website and marketing support for your goals. Free, no obligation.</p></div>
      <div className="text-foreground"><LeadForm submitLabel="Get a Free Website Review" /></div>
    </div></section>
  </div>;
}
