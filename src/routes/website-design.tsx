import { createFileRoute } from "@tanstack/react-router";
import { Code2, Smartphone, Gauge, FileText, Search, MousePointerClick, Wrench } from "lucide-react";
import { PROJECTS } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero, CtaBand, SectionHead } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/Cards";

export const Route = createFileRoute("/website-design")({
  head: () => pageHead({
    path: "/website-design", crumb: "Website Design",
    title: "Website Design Edmonton | Custom Websites | Bespoke Web Design",
    description: "Custom, mobile-friendly, fast-loading websites for Edmonton trades and service businesses — built with SEO-friendly structure and clear calls to action.",
  }),
  component: WebsiteDesign,
});

const FEATURES = [
  { icon: Code2, title: "Custom Website Development", text: "Designed around your business, services, and customers — not a generic template." },
  { icon: Smartphone, title: "Mobile-Responsive Design", text: "Most customers find you on their phone. Your site will look and work great on every screen." },
  { icon: Gauge, title: "Fast-Loading Pages", text: "Lightweight pages that load quickly, so visitors don't give up and call someone else." },
  { icon: FileText, title: "Clear Service Descriptions", text: "Plain-language pages that explain exactly what you do and where you work." },
  { icon: Search, title: "SEO-Friendly Structure", text: "Proper headings, page titles, and structure that help search engines understand your site." },
  { icon: MousePointerClick, title: "Conversion-Focused Calls to Action", text: "Clear buttons and simple forms that make it easy for customers to reach you." },
  { icon: Wrench, title: "Ongoing Maintenance Options", text: "We can keep your website updated, secure, and improving after launch." },
];

function WebsiteDesign() {
  return (
    <>
      <PageHero eyebrow="Website Design" title="Website Design in Edmonton for Growing Businesses"
        intro="Your website should clearly explain what you do, build trust, and make it easy for customers to contact you. We build websites that do exactly that." />
      <section className="section">
        <div className="container-site">
          <SectionHead title="What's Included in Every Website" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-site">
                <f.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-surface border-y">
        <div className="container-site">
          <SectionHead title="Recent Website Projects" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => <ProjectCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>
      <CtaBand title="Is Your Website Working for You?" />
    </>
  );
}
