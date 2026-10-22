import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero, Placeholder } from "@/components/site/Layout";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({
    path: "/contact", crumb: "About & Contact",
    title: "About & Contact | Bespoke Web Design Edmonton",
    description: "Meet Bespoke Web Design, an Edmonton-based digital marketing business. Get in touch for a free website and online presence review.",
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="About us" title="Meet Bespoke Web Design" />
      <section className="section">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg">
            <p>Bespoke Web Design is an Edmonton-based digital marketing business helping local companies build a professional online presence.</p>
            <p className="text-muted-foreground">We believe business owners should be able to focus on running their operations while having a reliable partner to handle their digital marketing needs.</p>
            <p className="text-muted-foreground">From website design and branding to SEO, Google Business Profile management, and social media, our goal is to make digital marketing easier to understand and manage.</p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="card-site">
                <h2 className="text-lg font-bold text-navy">Our Mission</h2>
                <p className="mt-2 text-base text-muted-foreground">To make professional digital marketing accessible and manageable for growing businesses by bringing website development, SEO, and online marketing together under one trusted partner.</p>
              </div>
              <div className="card-site">
                <h2 className="text-lg font-bold text-navy">Our Vision</h2>
                <p className="mt-2 text-base text-muted-foreground">To become a trusted digital marketing partner for local businesses across Alberta.</p>
              </div>
            </div>
          </div>
          <Placeholder label="Photo: business owner (owner-portrait.jpg)" className="aspect-[4/5] max-h-[560px]" />
        </div>
      </section>
      <section id="review" className="section scroll-mt-16 bg-surface border-t">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl">Let's Talk About Your Business.</h2>
            <p className="mt-4 text-muted-foreground">Request a free introductory review of your website and online presence.</p>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-accent" /> Edmonton, Alberta</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-accent" />
                {SITE.email ? <a href={`mailto:${SITE.email}`} className="font-semibold text-navy">{SITE.email}</a> : <span className="text-muted-foreground">Email coming soon</span>}
              </li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-accent" />
                {SITE.phone ? <a href={`tel:${SITE.phone}`} className="font-semibold text-navy">{SITE.phone}</a> : <span className="text-muted-foreground">Phone coming soon</span>}
              </li>
            </ul>
            {SITE.social.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {SITE.social.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline !py-2 text-sm">{s.label}</a>)}
              </div>
            )}
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
