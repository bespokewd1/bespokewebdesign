import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Layers, TrendingUp, ShieldCheck } from "lucide-react";
import { CTA_PRIMARY, CTA_SECONDARY, HOME_SERVICES, PROJECTS, TESTIMONIALS } from "@/content/site";
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

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-photo overflow-hidden">
        <img src={heroAsset.url} alt="" fetchPriority="high" />
        <div className="container-site py-14 md:py-20">
          <span className="eyebrow">Bespoke Web Design / Edmonton</span>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Complete Digital Marketing.<br />One Trusted Partner.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted">We help Edmonton trades and service businesses build their brand, get found online, and turn more visitors into potential customers.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="btn btn-primary h-auto whitespace-normal"><Link to="/contact" hash="review">{CTA_PRIMARY}<ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="btn btn-outline-light h-auto whitespace-normal bg-transparent"><Link to="/our-work">{CTA_SECONDARY}</Link></Button>
          </div>
        </div>
      </section>

      <section className="border-y bg-surface py-7">
        <div className="container-site flex flex-wrap items-center justify-between gap-5">
          <p className="text-sm font-semibold text-muted-foreground">Edmonton-based. Direct communication. Real client work.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">{PROJECTS.map(p => <Link key={p.name} to="/our-work" hash={p.name.toLowerCase().replaceAll(" ", "-")} className="font-display font-bold uppercase italic text-navy">{p.name}</Link>)}</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-site">
          <SectionHead eyebrow="What we do" title="Everything Your Business Needs to Build a Stronger Online Presence."
            text="A website is just the beginning. Your branding, Google presence, social media, and SEO should work together to help customers find and trust your business." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s) => (
              <article key={s.title} className="card-site flex flex-col">
                <IconBadge name={s.icon} />
                <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-muted-foreground">{s.text}</p>
                <Button asChild variant="link" className="mt-5 h-auto justify-start self-start p-0"><Link to="/services" hash={s.id}>Explore service <ArrowRight /></Link></Button>
              </article>
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
              text="We’re an Edmonton-based agency offering personalized service and direct communication. From your first brand identity to ongoing marketing, we build long-term partnerships around your business." />
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
          <Placeholder label="Agency owner photo coming soon" className="aspect-[4/3]" />
        </div>
      </section>

      {/* PRICING */}
      <section className="section bg-surface border-y">
        <div className="container-site">
          <SectionHead eyebrow="Monthly marketing" title="Digital Marketing That Grows With Your Business." center
            text="One monthly payment keeps your marketing moving: a connected brand and website, consistent social content, and ongoing search improvements. Choose a package, then talk with us about your goals and agreed scope." />
          <MarketingPlans />
          <div className="mt-8 text-center"><Button asChild variant="link"><Link to="/digital-marketing">See how your marketing works together <ArrowRight /></Link></Button></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {TESTIMONIALS.length > 0 && <section className="section">
        <div className="container-site">
          <SectionHead title="What Our Clients Say." center />
          <div className="mt-10"><TestimonialGrid /></div>
        </div>
      </section>}

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
