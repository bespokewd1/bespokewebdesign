import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { pageHead } from "@/lib/seo";
import ogAsset from "@/assets/marketing-growth-cycle.png.asset.json";
import { SectionHead, CtaBand } from "@/components/site/Layout";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { MarketingIntro } from "@/components/site/MarketingIntro";
import { TechnicalSeoProof } from "@/components/site/TechnicalSeoProof";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/digital-marketing-analytics.webp.asset.json";

export const Route = createFileRoute("/digital-marketing")({
  head: () => {
    return pageHead({ image: ogAsset.url, path: "/digital-marketing", crumb: "Digital Marketing", title: "Digital Marketing Plans & Google Ads Edmonton | Bespoke Web Design", description: "Done-for-you branding, custom websites, social media and SEO for Edmonton businesses. Compare Foundation at $245 CAD and Growth at $499 CAD per month." });
  },
  component: DigitalMarketing,
});

function DigitalMarketing() {
  return <>
    <section className="hero-photo digital-marketing-hero">
      <img src={heroAsset.url} alt="" width={1677} height={938} fetchPriority="high" />
      <div className="container-site py-16 md:py-20">
        <span className="eyebrow">Bespoke Web Design / Edmonton</span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">Digital Marketing.<br />One connected journey.</h1>
        <p className="mt-6 max-w-2xl text-lg text-navy-muted">Branding gets you recognized. Your website gives customers a place to act. Social media builds familiarity, and SEO helps people find you. Each part supports the next.</p>
        <Button asChild className="btn btn-primary mt-8 h-auto"><Link to="/digital-marketing" hash="plans">Compare monthly plans<ArrowRight /></Link></Button>
      </div>
    </section>
    <MarketingIntro />
    <section id="google-ads" className="section scroll-mt-20 bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 md:grid-cols-2">
        <div><span className="eyebrow">Paid search</span><h2 className="mt-3 text-4xl">Where Google Ads fits</h2><p className="mt-5 text-lg text-navy-muted">SEO builds your organic presence over time. Google Ads is paid visibility that can support a specific service, area or business goal.</p></div>
        <div className="space-y-6">
          <div><h3 className="text-xl">A clear target</h3><p className="mt-2 text-navy-muted">Choose the services, location and searches that matter to your business, then send visitors to a relevant page.</p></div>
          <div><h3 className="text-xl">A separate advertising budget</h3><p className="mt-2 text-navy-muted">Growth includes management of one Google Search campaign within the agreed scope. You choose your advertising budget and pay Google directly; ad spend is not included. Foundation campaign management and additional advertising work are quoted separately.</p></div>
          <div><h3 className="text-xl">Measure real inquiries</h3><p className="mt-2 text-navy-muted">Tracking calls and form submissions helps assess what the campaign is producing, not just how many people clicked. Costs and results vary; clicks do not guarantee customers.</p></div>
          <Button asChild variant="outline" className="btn btn-outline-light h-auto bg-transparent"><Link to="/contact" hash="review">Talk about Google Ads<ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
    <TechnicalSeoProof />
    <section id="plans" className="section scroll-mt-20 bg-surface">
      <div className="container-site"><SectionHead eyebrow="Monthly plans" title="Two simple plans" text="Both include branding, a custom website and basic SEO. Growth adds more social content and Google Ads management." center /><MarketingPlans /></div>
    </section>
    <CtaBand title="Let's connect your marketing" />
  </>;
}