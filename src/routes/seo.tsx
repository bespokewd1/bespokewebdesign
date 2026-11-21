import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { pageHead } from "@/lib/seo";
import ogAsset from "@/assets/desktop-pagespeed-result.png.asset.json";
import { PageHero, CtaBand } from "@/components/site/Layout";
import pagespeedAsset from "@/assets/desktop-pagespeed-result.png.asset.json";

export const Route = createFileRoute("/seo")({
  head: () => pageHead({ image: ogAsset.url,
    path: "/seo", crumb: "SEO & Google Marketing",
    title: "SEO & Google Business Marketing Edmonton | Bespoke Web Design",
    description: "Local SEO, Google Business Profile optimization, technical SEO, and ongoing content for Edmonton businesses — explained in plain language.",
  }),
  component: Seo,
});

const TOPICS = [
  { title: "What Is SEO?", text: "SEO (search engine optimization) helps search engines understand your website and can improve your ability to appear in relevant searches. When someone in Edmonton searches for the services you offer, SEO is what helps your business be part of the results." },
  { title: "Local SEO", text: "Improve the relevance and consistency of your website and business information for local searches — so your name, service areas, and contact details line up everywhere customers might look." },
  { title: "Google Business Profile Optimization", text: "Manage your business information, services, photos, and profile updates so your listing on Google Search and Maps is complete, accurate, and active." },
  { title: "Technical SEO", text: "Improve crawlability, metadata, website structure, and performance — the behind-the-scenes work that makes it easier for search engines to read your site." },
  { title: "Content & Ongoing SEO", text: "Research useful topics, improve service descriptions, and publish relevant website content that answers your customers' questions." },
];

function Seo() {
  return (
    <>
      <PageHero eyebrow="SEO & Google" title="SEO & Google Business Marketing in Edmonton"
        intro="Help more local customers find your business through Google — without relying entirely on paid ads." />
      <section className="section border-b bg-surface" aria-labelledby="seo-foundation-heading">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Built right from the start</span>
            <h2 id="seo-foundation-heading" className="mt-3 text-3xl text-navy">100/100 SEO. A Strong Foundation.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">A custom-built website gives us control over its structure, page titles, mobile layout and loading speed. We build these foundations into your site instead of treating SEO as an afterthought.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">The supplied desktop Google PageSpeed Insights report shows 100/100 for SEO, performance, accessibility and best practices.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The SEO score checks basic search-readiness, not every aspect of technical SEO. This is one test result—not a guaranteed score or Google ranking. Keywords, useful content, accurate Google Maps details and consistent updates still matter.</p>
          </div>
          <figure className="min-w-0">
            <a href={pagespeedAsset.url} target="_blank" rel="noopener noreferrer" aria-label="View the full desktop PageSpeed report screenshot" className="block rounded-lg border focus-visible:outline-2 focus-visible:outline-ring">
              <img src={pagespeedAsset.url} alt="Supplied desktop PageSpeed Insights report showing scores of 100 for performance, accessibility, best practices and SEO." width={1210} height={1204} loading="lazy" className="h-auto w-full rounded-lg" />
            </a>
            <figcaption className="mt-3 text-sm text-muted-foreground">Supplied desktop test, October 19, 2026. Scores can vary by page, device and test conditions.</figcaption>
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {TOPICS.map((t, i) => (
            <article key={t.title} className={`card-site md:p-8 ${i === 0 ? "md:col-span-2" : ""}`}>
              <h2 className="text-2xl font-extrabold text-navy">{t.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.text}</p>
            </article>
          ))}
          <aside className="md:col-span-2 flex gap-4 rounded-2xl border-2 border-accent bg-surface p-6">
            <Info className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h2 className="font-bold text-navy">An honest note about SEO</h2>
              <p className="mt-1 text-muted-foreground">SEO takes time. Results usually build gradually over months, and no one can guarantee specific rankings on Google. What we can promise is consistent, sensible work that gives your business the best foundation possible.</p>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand title="Let's Review Your Google Presence" button="Let's Review Your Google Presence" />
    </>
  );
}
