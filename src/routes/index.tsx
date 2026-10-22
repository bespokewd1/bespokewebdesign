import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Layers, TrendingUp, ShieldCheck, Star } from "lucide-react";
import { CTA_SECONDARY, HOME_SERVICES, HOME_FAQS, TRUSTED_CLIENTS, FEATURED_PROJECTS, HOME_MEDIA, FIRST_YEAR, SITE, REVIEW_PROOF } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { SectionHead } from "@/components/site/Layout";
import { IconBadge } from "@/components/site/Icon";
import { ProjectCard } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroAsset from "@/assets/bespoke-worker-hero.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({ path: "/", title: "Bespoke Web Design | Edmonton Digital Marketing Agency", description: "Done-for-you digital marketing for Edmonton businesses. Custom websites, local SEO, Google Business Profile management, branding, and social media." });
    return { ...head, meta: [...head.meta, { property: "og:image", content: heroAsset.url }, { name: "twitter:image", content: heroAsset.url }] };
  },
  component: Home,
});
const WHY = [
  { icon: MessageCircle, title: "One Point of Contact", text: "Work directly with someone familiar with your business, goals, and marketing activities." },
  { icon: Layers, title: "Everything in One Place", text: "Your website, SEO, Google Business Profile, branding, and social media through one coordinated relationship." },
  { icon: TrendingUp, title: "Ongoing Support", text: "We don't simply launch a website and walk away. We provide the ongoing services included in your chosen plan." },
  { icon: ShieldCheck, title: "Straightforward Communication", text: "Clear recommendations, realistic expectations, and marketing explanations without unnecessary jargon." },
];
function ReviewButton({ children = "Get a Free Website & Marketing Review" }: { children?: React.ReactNode }) {
  return <Button asChild className="btn btn-primary h-auto whitespace-normal"><Link to="/" hash="review">{children}<ArrowRight className="shrink-0" /></Link></Button>;
}
function Home() {
  return <>
    <section className="hero-photo overflow-hidden">
      <img src={heroAsset.url} alt="" fetchPriority="high" />
      <div className="container-site py-14 md:py-20">
        <span className="eyebrow">Edmonton Digital Marketing for Trades &amp; Service Businesses</span>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Complete Digital Marketing.<br />One Trusted Partner.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">We help Edmonton trades and service businesses build a professional online presence through custom websites, local SEO, Google Business Profile management, branding, and social media—all handled by one trusted marketing partner.</p>
        <p className="mt-4 font-semibold">We handle your marketing. You focus on running your business.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ReviewButton /><Button asChild variant="outline" className="btn btn-outline-light h-auto whitespace-normal bg-transparent"><Link to="/our-work">{CTA_SECONDARY}</Link></Button></div>
        <div aria-label="Five-star customer reviews" className="mt-5 flex items-center gap-1 min-[375px]:gap-2 sm:gap-6">
          {REVIEW_PROOF.map(review => <div key={review.platform} aria-label={`5-star reviews on ${review.platform}`} className="flex shrink-0 items-center gap-1 min-[375px]:gap-1.5 sm:gap-2">
            <span aria-hidden="true" className="flex gap-px min-[375px]:gap-0.5 text-review-gold">{Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-2 fill-current min-[375px]:size-2.5 sm:size-3.5" strokeWidth={1.5} />)}</span>
            <span className="whitespace-nowrap text-[10px] font-medium text-navy-foreground min-[375px]:text-[11px] sm:text-sm">{review.platform} Reviews</span>
          </div>)}
        </div>
        <p className="mt-5 text-sm text-navy-muted">Edmonton-based. Personal service. Real client work.</p>
      </div>
    </section>

    <section className="border-y bg-surface py-8" aria-labelledby="trusted-heading">
      <div className="container-site">
        <h2 id="trusted-heading" className="text-xl text-navy">Trusted by Local Businesses</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Proud to work with businesses across Edmonton and Alberta, helping them build a professional and consistent online presence.</p>
        <ul aria-label="Client businesses" tabIndex={0} className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 focus-visible:outline-2 focus-visible:outline-ring">
          {TRUSTED_CLIENTS.map(p => <li key={p.name} className="flex w-[calc((100%-1rem)/2)] shrink-0 snap-start items-center justify-center border-y py-4 text-center font-display font-bold uppercase italic text-navy sm:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-5rem)/6)]">
            {p.link ? <Link to="/our-work" hash={p.name.toLowerCase().replaceAll(" ", "-")}>{p.logo && <img src={p.logo} alt="" loading="lazy" className="mx-auto mb-2 h-12 w-24 object-contain" />}{p.name}</Link> : <span>{p.logo && <img src={p.logo} alt="" loading="lazy" className="mx-auto mb-2 h-12 w-24 object-contain" />}{p.name}</span>}
          </li>)}
        </ul>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button asChild variant="link" className="h-auto p-0"><Link to="/our-work">View Our Client Projects <ArrowRight /></Link></Button>
          {HOME_MEDIA.googleReviewUrl && <a href={HOME_MEDIA.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline">Read Our Google Reviews</a>}
          {SITE.social.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline">Visit Our {s.label} Page</a>)}
        </div>
        {HOME_MEDIA.reviewScreenshots.length > 0 && <div className="mt-6 grid gap-4 sm:grid-cols-2">{HOME_MEDIA.reviewScreenshots.map(r => <img key={r.image} src={r.image} alt={r.alt} loading="lazy" className="aspect-[4/3] w-full object-contain" />)}</div>}
      </div>
    </section>

    <section className="section"><div className="container-site">
      <SectionHead eyebrow="Our work" title="Real Businesses. Real Projects." text="Every business has different goals. Take a look at how we help clients establish a professional online presence through thoughtful website development and digital marketing." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">{FEATURED_PROJECTS.map(p => <ProjectCard key={p.name} p={p} hideMissingImage />)}</div>
      <div className="mt-8"><Button asChild variant="outline" className="btn btn-outline h-auto"><Link to="/our-work">View All Our Work <ArrowRight /></Link></Button></div>
    </div></section>

    <section className="section border-y bg-surface"><div className="container-site">
      <SectionHead eyebrow="Everything done for you" title="Everything Your Business Needs to Build a Stronger Online Presence." text="Your website, branding, Google presence, SEO, and social media shouldn't operate separately. At Bespoke, we bring your digital marketing together under one coordinated strategy, helping you stay consistent while you focus on your customers and daily operations." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{HOME_SERVICES.map(s => <article key={s.id} className="card-site flex flex-col"><IconBadge name={s.icon} /><h3 className="mt-4 text-lg text-navy">{s.title}</h3><p className="mt-2 flex-1 text-muted-foreground">{s.text}</p><Button asChild variant="link" className="mt-5 h-auto justify-start self-start p-0"><Link to={s.id === "website-development" ? "/website-design" : s.id === "seo" || s.id === "google-business" ? "/seo" : "/services"} {...(s.id === "branding" || s.id === "social-media" ? { hash: s.id } : {})}>Explore service <ArrowRight /></Link></Button></article>)}</div>
      <h3 className="mt-8 text-xl text-navy">One Partner. One Connected Marketing Strategy.</h3><p className="mt-3 max-w-3xl text-muted-foreground">Instead of managing separate providers, you have one team coordinating your online marketing around your business goals.</p>
      <Button asChild variant="link" className="mt-4 h-auto whitespace-normal p-0"><Link to="/digital-marketing">Explore Our Digital Marketing Services <ArrowRight /></Link></Button>
    </div></section>

    <section className="section"><div className={`container-site grid items-center gap-12 ${HOME_MEDIA.ownerPhoto ? "lg:grid-cols-2" : ""}`}>
      <div><SectionHead eyebrow="Why Bespoke" title="A Local Marketing Partner You Can Actually Talk To." text="We're an Edmonton-based digital marketing business focused on building long-term relationships with trades and service companies. We combine practical marketing solutions with personal support, straightforward communication, and an understanding of what small businesses need." />
        <div className={`mt-8 grid gap-6 sm:grid-cols-2 ${HOME_MEDIA.ownerPhoto ? "" : "lg:grid-cols-4"}`}>{WHY.map(w => <div key={w.title}><w.icon className="h-6 w-6 text-accent" aria-hidden="true" /><h3 className="mt-2 text-navy">{w.title}</h3><p className="mt-2 text-sm text-muted-foreground">{w.text}</p></div>)}</div>
      </div>
      {HOME_MEDIA.ownerPhoto && <img src={HOME_MEDIA.ownerPhoto} alt="Bespoke Web Design owner" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />}
    </div></section>

    <section className="section border-y bg-surface"><div className="container-site">
      <SectionHead eyebrow="What your first year looks like" title="A Great Website Is Just the Beginning." text="Building a professional online presence is an ongoing process. Your website needs attention, your content should remain relevant, and your business needs consistent marketing activity. Our monthly plans help bring these efforts together so your marketing can develop alongside your business." />
      <ol className="mt-10 grid gap-6 lg:grid-cols-4">{FIRST_YEAR.map(step => <li key={step.period} className="border-l-2 border-accent pl-5 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-5"><span className="eyebrow">{step.period}</span><h3 className="mt-2 text-lg text-navy">{step.title}</h3><p className="mt-3 text-sm text-muted-foreground">{step.text}</p></li>)}</ol>
      <p className="mt-6 text-sm text-muted-foreground">Illustrative timeline only. Deliverables and schedules depend on your selected plan and agreed scope; rankings and lead improvements are not guaranteed.</p>
      <Button asChild variant="outline" className="btn btn-outline mt-6 h-auto"><Link to="/" hash="plans">Explore Our Monthly Plans <ArrowRight /></Link></Button>
    </div></section>

    <section className="section scroll-mt-20" id="plans"><div className="container-site">
      <SectionHead eyebrow="Monthly digital marketing" title="Complete Marketing Support. One Manageable Monthly Investment." center text="Every business has different needs and budgets. Our monthly marketing plans bring together website development and ongoing digital marketing services, making it easier to build and maintain your online presence." />
      <MarketingPlans />
      <div className="mx-auto mt-10 max-w-2xl text-center"><h3 className="text-xl text-navy">Not Sure Which Plan Is Right for Your Business?</h3><p className="mt-3 text-muted-foreground">Let's take a look at your current online presence, business goals, and budget. We'll help you understand where to start and which services make sense for you.</p><div className="mt-5"><ReviewButton>Get a Free Marketing Review</ReviewButton></div></div>
    </div></section>

    <section className="section border-t" aria-labelledby="faq-heading"><div className="container-site"><div className="mx-auto max-w-3xl">
      <h2 id="faq-heading" className="text-3xl md:text-4xl">Frequently Asked Questions</h2><p className="mt-4 text-muted-foreground">Answers to common questions about our services, monthly plans, and working with Bespoke.</p>
      <Accordion type="single" collapsible className="mt-8 border-t">{HOME_FAQS.map((faq,index) => <AccordionItem key={faq.question} value={`faq-${index+1}`}><AccordionTrigger className="min-h-14 gap-4 py-5 text-base font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:transition-none [&>svg]:motion-reduce:transition-none">{faq.question}</AccordionTrigger><AccordionContent className="space-y-3 pr-6 text-base leading-relaxed text-muted-foreground" style={{ animation: "none" }}>{faq.paragraphs.map(p => <p key={p}>{p}</p>)}</AccordionContent></AccordionItem>)}</Accordion>
      <div className="mt-6"><ReviewButton>Get My Free Website &amp; Marketing Review</ReviewButton></div>
    </div></div></section>

    <section className="section scroll-mt-20 bg-navy text-navy-foreground" id="review"><div className="container-site grid gap-10 lg:grid-cols-2">
      <div><span className="eyebrow">Free website &amp; marketing review</span><h2 className="mt-2 text-3xl md:text-4xl">Find Out Where Your Online Marketing Could Improve.</h2><p className="mt-4 text-lg text-navy-muted">Not sure how your website and online presence are performing?</p><p className="mt-3 text-navy-muted">Request a free introductory review. We'll look at your website and available online business information, identify practical opportunities, and discuss where you could improve.</p></div>
      <div className="text-foreground"><LeadForm submitLabel="Request My Free Marketing Review" /><p className="mt-4 text-sm text-navy-muted">No obligation. Let's start by understanding your business.</p></div>
    </div></section>
  </>;
}
