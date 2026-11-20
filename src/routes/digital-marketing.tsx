import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Palette, Monitor, Share2, Search, Target, ChartNoAxesCombined } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { SectionHead, CtaBand } from "@/components/site/Layout";
import { MarketingPlans } from "@/components/site/MarketingPlans";
import { TechnicalSeoProof } from "@/components/site/TechnicalSeoProof";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/bespoke-worker-hero.webp.asset.json";
import marketingCycleAsset from "@/assets/marketing-growth-cycle.png.asset.json";

export const Route = createFileRoute("/digital-marketing")({
  head: () => {
    return pageHead({ path: "/digital-marketing", crumb: "Digital Marketing", title: "Digital Marketing Plans & Google Ads Edmonton | Bespoke Web Design", description: "Done-for-you branding, custom websites, social media and SEO for Edmonton businesses. Compare Foundation at $245 CAD and Growth at $499 CAD per month." });
  },
  component: DigitalMarketing,
});

const JOURNEY = [
  { icon: Palette, title: "Start with your brand", action: "Be recognized", text: "Your logo, colours and visual style give your business a consistent identity. That same identity carries through your website and social media, helping customers recognize you wherever they find you.", customer: "A customer sees your name and gets a clear first impression." },
  { icon: Monitor, title: "Build your website", action: "Turn interest into inquiries", text: "Your website explains what you do, who you serve and how to contact you. Clear service information and a straightforward contact path give interested customers somewhere to take the next step.", customer: "They check your services and decide whether you are the right fit." },
  { icon: Share2, title: "Show up on social media", action: "Build familiarity and trust", text: "Regular social content keeps your business visible. Service highlights, useful updates and real project photos give people reasons to remember your business and return to your website.", customer: "They see your work and become more familiar with your business." },
  { icon: Search, title: "Keep improving your SEO", action: "Get found over time", text: "Basic SEO sets up clear page titles, headings and website structure. Ongoing keyword research and useful content improvements help your website stay relevant. The work continues after launch, within your agreed scope.", customer: "When they search for a service, your website has a stronger foundation to be discovered." },
  { icon: Target, title: "Add Google Ads when it fits", action: "Reach people actively searching", text: "Paid search can complement your organic marketing by placing ads in front of people searching for relevant services. It works best when your website, service areas and inquiry process are ready.", customer: "They see a relevant ad, visit a service page and can request a quote." },
  { icon: ChartNoAxesCombined, title: "Review and refine", action: "Learn what matters", text: "Review website visits, inquiries and the content customers respond to. Use that information to decide what to improve next, rather than treating marketing as a one-time launch.", customer: "The path from discovering your business to contacting you becomes clearer." },
];

function DigitalMarketing() {
  return <>
    <section className="hero-photo">
      <img src={heroAsset.url} alt="" />
      <div className="container-site py-16 md:py-20">
        <span className="eyebrow">Bespoke Web Design / Edmonton</span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">Digital Marketing.<br />One connected journey.</h1>
        <p className="mt-6 max-w-2xl text-lg text-navy-muted">Branding gets you recognized. Your website gives customers a place to act. Social media builds familiarity, and SEO helps people find you. Each part supports the next.</p>
        <Button asChild className="btn btn-primary mt-8 h-auto"><Link to="/digital-marketing" hash="plans">Compare monthly plans<ArrowRight /></Link></Button>
      </div>
    </section>
    <section className="section">
      <div className="container-site">
        <SectionHead eyebrow="From first impression to first inquiry" title="How your marketing works together" text="You don't need every channel at once. Start with a strong foundation, then grow your activity around your goals." />
        <figure className="mx-auto mt-10 max-w-xl">
          <img src={marketingCycleAsset.url} alt="Marketing cycle: brand, website and Google, content and social media, visibility, leads and enquiries, customers, reviews and referrals." width={752} height={944} loading="lazy" className="h-auto w-full rounded-lg" />
          <figcaption className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">Each part supports the next. Consistent marketing helps build visibility and trust; inquiries and results vary by business.</figcaption>
        </figure>
        <ol className="mt-12">
          {JOURNEY.map((step, index) => <li key={step.title} className="grid gap-5 border-t py-9 md:grid-cols-[5rem_1fr_18rem] md:gap-10">
            <span className="font-display text-4xl font-black text-accent">0{index + 1}</span>
            <div><span className="text-xs font-semibold uppercase text-muted-foreground">{step.action}</span><h3 className="mt-2 text-2xl text-navy">{step.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{step.text}</p></div>
            <div className="border-l-2 border-accent pl-5"><step.icon className="h-6 w-6 text-accent" aria-hidden="true" /><p className="mt-4 text-sm leading-relaxed">{step.customer}</p></div>
          </li>)}
        </ol>
      </div>
    </section>
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