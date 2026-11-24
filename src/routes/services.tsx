import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SERVICES } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { ServiceGraphic } from "@/components/site/ServiceGraphic";
import { BenefitText } from "@/components/site/BenefitText";

export const Route = createFileRoute("/services")({
  head: () => pageHead({
    path: "/services", crumb: "Services",
    title: "Digital Marketing Services Edmonton | Bespoke Web Design",
    description: "Branding, custom websites, SEO, Google Business Profile management, social media, and website maintenance for Edmonton businesses.",
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Complete Digital Marketing."
        intro="We help businesses build and maintain a professional online presence through connected digital marketing services." />
      <section className="section">
        <div className="container-site space-y-6">
          {SERVICES.map((s) => (
            <article key={s.id} id={s.id} className="blueprint-accent card-site scroll-mt-24 grid min-w-0 gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:p-8 xl:grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)]">
              <div className="home-service-media relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg md:row-span-2 xl:row-span-1">
                <ServiceGraphic id={s.id === "google-business" ? "seo" : s.id} />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl font-extrabold text-navy">{s.title}</h2>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">What it is</h3>
                <p className="mt-1"><BenefitText text={s.what} phrases={["your services", "Regular, professional posts", "Ongoing care", "Google Maps", "your logo"]} /></p>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Why it matters</h3>
                <p className="mt-1"><BenefitText text={s.why} phrases={["established and trustworthy", "make it easy to reach you", "already looking for your services", "who to call", "busy, reliable", "fresh content"]} /></p>
              </div>
              <div className="min-w-0 border-l pl-5 md:col-start-2 xl:col-auto">
                <h3 className="font-bold text-navy">How Bespoke can help</h3>
                <ul className="mt-3 space-y-2">
                  {s.help.map((h) => <li key={h} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{h}</li>)}
                </ul>
                <Link to="/contact" hash="review" className="mt-5 inline-block text-sm font-bold text-navy underline decoration-accent decoration-2 underline-offset-4">Get a Free Marketing Review</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Not Sure Where to Start?" text="We'll review your current online presence and recommend practical next steps — no pressure." />
    </>
  );
}
