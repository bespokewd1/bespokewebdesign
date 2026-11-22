import { createFileRoute } from "@tanstack/react-router";
import { Camera, FileText, MapPin, Star } from "lucide-react";
import { INDUSTRIES } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero, CtaBand, SectionHead } from "@/components/site/Layout";
import { IconBadge } from "@/components/site/Icon";

export const Route = createFileRoute("/industries")({
  head: () => pageHead({
    path: "/industries", crumb: "Industries",
    title: "Digital Marketing for Trades & Service Businesses | Bespoke Web Design",
    description: "Websites, SEO, and Google Business marketing for Edmonton plumbers, electricians, contractors, renovators, transportation companies, and local services.",
  }),
  component: Industries,
});

const TRUST = [
  { icon: Camera, title: "Project photography", text: "Real photos of your work and team build more trust than any stock image." },
  { icon: FileText, title: "Service pages", text: "Dedicated pages for each service help customers — and Google — understand what you do." },
  { icon: MapPin, title: "Google Business Profile", text: "An accurate, active profile helps you show up on Maps when locals search." },
  { icon: Star, title: "Customer reviews", text: "Genuine reviews are often the deciding factor when customers compare businesses." },
];

function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Digital Marketing for Edmonton Trades & Service Businesses"
        intro="Every industry gets found and chosen differently. Here's how we approach the businesses we work with most." />
      <section className="section">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((i) => (
            <article key={i.id} id={i.id} className="card-site scroll-mt-24 md:p-8">
              <IconBadge name={i.icon} />
              <h2 className="mt-4 text-2xl font-extrabold text-navy">{i.name}</h2>
              <p className="mt-3 text-muted-foreground">{i.needs}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-surface border-y">
        <div className="container-site">
          <SectionHead title="What Builds Trust Online" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.title} className="text-center">
                <t.icon className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-bold text-navy">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Let's Grow Your Online Presence" button="Let's Grow Your Online Presence" />
    </>
  );
}
