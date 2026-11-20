import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Facebook, Mail, MapPin } from "lucide-react";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";
import { FounderPhotoCarousel } from "@/components/site/FounderPhotoCarousel";
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
            <p className="text-muted-foreground">You work directly with a marketing partner who gets to know your business. We offer personalized service, straightforward communication, and long-term support so you can focus on your customers.</p>
            <p className="text-muted-foreground">From website design and branding to SEO, Google Business Profile management, and social media, our goal is to make digital marketing easier to understand and manage.</p>
          </div>
          <FounderPhotoCarousel tone="light" />
        </div>
        <div className="container-site mt-10">
          <div className="rounded-lg border-l-4 border-primary bg-surface p-6">
            <h2 className="flex items-center gap-2 text-2xl text-navy"><MapPin className="h-5 w-5 text-accent" aria-hidden="true" /> Let's Meet in Person in Edmonton</h2>
            <p className="mt-3 text-muted-foreground">Just like with all my clients, I believe the best way to understand your business is face-to-face. Phone and video calls are always welcome, but meeting in person is preferred.</p>
            <p className="mt-3 text-muted-foreground">I invest real time preparing for each meeting and getting to know your business before we sit down. Because of this, in-person consultations are reserved for business owners who are genuinely ready to invest in and grow their marketing.</p>
          </div>
        </div>
      </section>
      <section id="consultation" className="section scroll-mt-20 border-t">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div><span className="eyebrow">Consultation</span><h2 className="mt-2 text-3xl text-navy md:text-4xl">Find the Right Marketing Support.</h2><p className="mt-4 text-muted-foreground">Discuss your goals, services or a monthly marketing package with Bespoke. Tell us what you need, and we’ll take it from there.</p></div>
          <LeadForm kind="consultation" />
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
              {SITE.calendly && <li className="flex gap-3"><CalendarDays className="h-5 w-5 text-accent" /><a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy">Book a call on Calendly</a></li>}
            </ul>
            {SITE.social.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {SITE.social.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline inline-flex items-center gap-2 !py-2 text-sm">Follow us on Facebook <Facebook className="h-4 w-4" aria-hidden="true" /></a>)}
              </div>
            )}
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
