import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Mail, MapPin } from "lucide-react";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";
import { FounderPhotoCarousel } from "@/components/site/FounderPhotoCarousel";
import { LeadForm } from "@/components/site/LeadForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => pageHead({
    path: "/contact", crumb: "About & Contact",
    title: "About & Contact | Bespoke Web Design Edmonton",
    description: "Meet Charles, founder of Bespoke Web Design in Edmonton. Book a discovery call or request a free marketing review.",
  }),
  component: Contact,
});

const EXPECT = [
  "A quick look at your website, Google ranking and local competition.",
  "An honest view of what is holding your leads back.",
  "No sales pitch or jargon, just clear advice and straightforward pricing.",
];

function Contact() {
  return (
    <>
      <PageHero eyebrow="About us" title="Meet Bespoke Web Design" />
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg">
            <p>Hi, I'm Charles, founder of Bespoke Web Design.</p>
            <p className="font-semibold text-navy">You focus on running your business—we handle your marketing on autopilot.</p>
            <p className="text-muted-foreground">With our fully managed, done-for-you service, you never have to stress about marketing, websites, Google or online growth. We get your goals, put together the work, you approve it, and we keep it running.</p>
            <p className="text-muted-foreground">Consider me your long-term in-house marketing partner in Edmonton, always one direct call away. Trusted by businesses across Edmonton.</p>
            <div><p className="font-semibold text-navy">— Charles</p><p className="text-sm text-muted-foreground">Founder, Bespoke Marketing LTD.</p></div>
          </div>
          <FounderPhotoCarousel tone="light" />
        </div>
      </section>
      <section id="review" className="section relative scroll-mt-16 bg-surface border-t">
        <span id="consultation" className="absolute top-0 scroll-mt-16" aria-hidden="true" />
        <div className="container-site">
          <div className="text-center">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy md:text-4xl">Choose How You'd Like to Start</h2>
          </div>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            <div className="card-site border-2 border-primary md:p-8">
              <span className="eyebrow">Fastest way to get clarity</span>
              <h3 className="mt-2 flex items-center gap-2 text-2xl text-navy"><MapPin className="h-5 w-5 text-accent" aria-hidden="true" /> Meet in Person or on a Call</h3>
              <p className="mt-3 text-muted-foreground">Face to face in Edmonton, or by phone or video, whichever suits your schedule. In-person is preferred.</p>
              <ul className="mt-5 space-y-3">
                {EXPECT.map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}
              </ul>
              {SITE.calendly && <Button asChild className="btn btn-primary mt-6 h-auto min-h-11 max-w-full whitespace-normal"><a href={SITE.calendly} target="_blank" rel="noopener noreferrer"><CalendarDays className="h-5 w-5" aria-hidden="true" />Book a Discovery Call</a></Button>}
              <p className="mt-4 text-sm text-muted-foreground">I prepare for every meeting, so these are reserved for business owners ready to invest in their marketing.</p>
              {SITE.email && <p className="mt-6 flex items-center gap-2 border-t pt-4 text-sm"><Mail className="h-4 w-4 text-accent" aria-hidden="true" /><a href={`mailto:${SITE.email}`} className="font-semibold text-navy">{SITE.email}</a></p>}
            </div>
            <div>
              <h3 className="text-2xl text-navy">Prefer a Written Review First?</h3>
              <p className="mt-2 mb-5 text-muted-foreground">Send your details and Charles will personally review your website and online presence.</p>
              <LeadForm submitLabel="Get My Free Marketing Review" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
