import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SERVICES } from "@/content/site";
import { pageHead } from "@/lib/seo";
import ogAsset from "@/assets/service-custom-web.webp.asset.json";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { IconBadge } from "@/components/site/Icon";

export const Route = createFileRoute("/services")({
  head: () => pageHead({ image: ogAsset.url,
    path: "/services", crumb: "Services",
    title: "Digital Marketing Services Edmonton | Bespoke Web Design",
    description: "Branding, custom websites, SEO, Google Business Profile management, social media, and website maintenance for Edmonton businesses.",
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Complete Digital Marketing for Growing Businesses."
        intro="We help businesses build and maintain a professional online presence through connected digital marketing services." />
      <section className="section">
        <div className="container-site space-y-6">
          {SERVICES.map((s) => (
            <article key={s.id} id={s.id} className="card-site scroll-mt-24 grid gap-6 md:grid-cols-[auto_1fr_1fr] md:p-8">
              <IconBadge name={s.icon} />
              <div>
                <h2 className="text-2xl font-extrabold text-navy">{s.title}</h2>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">What it is</h3>
                <p className="mt-1">{s.what}</p>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Why it matters</h3>
                <p className="mt-1">{s.why}</p>
              </div>
              <div className="border-l pl-5">
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
