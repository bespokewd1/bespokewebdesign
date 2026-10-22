import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Layers, TrendingUp, ShieldCheck } from "lucide-react";
import { CTA_PRIMARY, CTA_SECONDARY, HOME_SERVICES, INDUSTRIES, PROJECTS } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { SectionHead, Placeholder } from "@/components/site/Layout";
import { IconBadge } from "@/components/site/Icon";
import { ProjectCard, TestimonialGrid } from "@/components/site/Cards";
import { LeadForm } from "@/components/site/LeadForm";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/bespoke-worker-hero.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => pageHead({
    path: "/",
    title: "Digital Marketing & Web Design Edmonton | Bespoke Web Design",
    description: "Grow your Edmonton business with professional websites, SEO, Google Business Profile optimization, and social media marketing from Bespoke Web Design.",
  }),
  component: Home,
});

const WHY = [
  { icon: MessageCircle, title: "One Point of Contact", text: "Communicate directly with someone who understands your business." },
  { icon: Layers, title: "Everything in One Place", text: "Website development, SEO, Google Business, branding, and social media." },
  { icon: TrendingUp, title: "Long-Term Focus", text: "Build a foundation designed for ongoing improvement and organic visibility." },
  { icon: ShieldCheck, title: "Straightforward Communication", text: "Clear explanations, practical recommendations, and no unnecessary jargon." },
];

const STEPS = [
  { title: "Let's Talk", text: "Tell us about your business, your goals, and your current online presence." },
  { title: "Build Your Foundation", text: "We create or improve the branding, website, and online profiles your business needs." },
  { title: "Manage Your Marketing", text: "We handle the agreed ongoing SEO, website updates, Google Business management, and social media content." },
  { title: "Review and Improve", text: "We review progress and identify opportunities to improve your online presence." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-photo overflow-hidden">
        <img src={heroAsset.url} alt="" fetchPriority="high" />
        <div className="container-site py-14 md:py-20">
          <span className="eyebrow">Bespoke Web Design / Edmonton</span>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Websites &amp; Marketing<br />for Edmonton Trades.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">Starting a business or replacing an outdated site? Connect your branding, website, social media and SEO with one marketing partner. Monthly plans start at <strong className="text-navy-foreground">$245/month</strong>.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="btn btn-primary h-auto whitespace-normal"><Link to="/contact" hash="review">{CTA_PRIMARY}<ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="btn btn-outline-light h-auto whitespace-normal bg-transparent"><Link to="/digital-marketing" hash="plans">Compare Monthly Plans</Link></Button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y bg-surface py-12">
        <div className="container-site">
          <h2 className="text-center text-2xl font-extrabold text-navy md:text-3xl">Local Businesses. Real Projects. Personal Service.</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {PROJECTS.map((p) => (
              <div key={p.name} className="flex h-20 items-center justify-center rounded-xl border bg-background px-3 text-center font-display font-bold text-navy">{p.name}</div>
            ))}
            <Placeholder label="Client logo" className="h-20" />
            <Placeholder label="Google reviews" className="h-20" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-site">
          <SectionHead eyebrow="What we do" title="Everything Your Business Needs to Build a Stronger Online Presence."
            text="A website is just the beginning. Your branding, Google presence, social media, and SEO should work together to help customers find and trust your business." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s) => (
              <div key={s.title} className="card-site">
                <IconBadge name={s.icon} />
                <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
            <Link to="/services" className="card-site flex flex-col justify-center bg-navy text-navy-foreground hover:bg-navy-soft">
              <span className="text-lg font-bold">Explore Our Services</span>
              <span className="mt-2 inline-flex items-center gap-1 text-accent">See everything we offer <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section bg-navy text-navy-foreground">
        <div className="container-site">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold md:text-4xl">Digital Marketing Built for Businesses That Get Things Done.</h2>
          <p className="mt-4 max-w-2xl text-lg text-navy-muted">We work with Edmonton trades and service businesses that want a professional online presence without managing every part of their marketing themselves.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i) => (
              <Link key={i.id} to="/industries" hash={i.id} className="group rounded-2xl border border-navy-soft bg-navy-soft/50 p-6 hover:border-accent">
                <IconBadge name={i.icon} />
                <h3 className="mt-4 text-lg font-bold">{i.name}</h3>
                <p className="mt-2 text-sm text-navy-muted">{i.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section">
        <div className="container-site">
          <SectionHead eyebrow="Our work" title="Real Projects. Built for Real Businesses."
            text="Take a look at some of the businesses we've worked with and how we've helped strengthen their online presence." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.slice(0, 2).map((p) => <ProjectCard key={p.name} p={p} />)}
          </div>
          <Link to="/our-work" className="btn btn-outline mt-8">View Our Work <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-surface border-y">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Why Bespoke" title="One Partner for Your Digital Marketing."
              text="Running a business already takes enough time. We help simplify your digital marketing by keeping your website, SEO, Google presence, and social media connected." />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title}>
                  <w.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-2 font-bold text-navy">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Placeholder label="Photo: owner working with a client (owner-with-client.jpg)" className="aspect-[4/3]" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-site">
          <SectionHead eyebrow="How we work" title="Getting Started Is Simple." center />
          <p className="mt-5 text-center"><Link to="/digital-marketing" className="inline-flex items-center gap-2 font-semibold text-accent">Explore the full marketing journey <ArrowRight className="h-4 w-4" /></Link></p>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="card-site">
                <span className="font-display text-3xl font-extrabold text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link to="/contact" hash="review" className="btn btn-primary">Let's Talk About Your Business</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-surface border-y">
        <div className="container-site">
          <SectionHead eyebrow="Monthly marketing" title="Digital Marketing That Grows With Your Business." center
            text="Whether you're starting from scratch or improving an existing business, we offer ongoing digital marketing support suited to your goals and budget." />
          <MarketingPlans />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-site">
          <SectionHead title="What Our Clients Say." center />
          <div className="mt-10"><TestimonialGrid /></div>
        </div>
      </section>

      {/* LEAD */}
      <section className="section bg-navy text-navy-foreground" id="review">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Free review</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">How Strong Is Your Business's Online Presence?</h2>
            <p className="mt-4 text-lg text-navy-muted">Not sure if your website and Google presence are working as well as they could? Let's take a look.</p>
            <p className="mt-3 text-navy-muted">Request a free introductory review of your website and online presence.</p>
          </div>
          <div className="text-foreground"><LeadForm /></div>
        </div>
      </section>
    </>
  );
}
