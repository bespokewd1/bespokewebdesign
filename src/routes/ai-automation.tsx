import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PhoneMissed, CalendarCheck, MessageSquare, Star, Camera, BellRing, RefreshCw, ClipboardList, Wrench, HardHat, HeartHandshake, Ear, Lightbulb, Handshake, Rocket, Check } from "lucide-react";
import type { CSSProperties } from "react";
import { pageHead } from "@/lib/seo";
import { SectionHead } from "@/components/site/Layout";
import { useReveal } from "@/components/site/MarketingIntro";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/ai-automation")({
  head: () => pageHead({
    path: "/ai-automation", crumb: "AI & Automation",
    title: "AI Assistants & Automation for Trades and Clinics | Bespoke Web Design",
    description: "Plain-English guide to how AI assistants and simple automation can help Edmonton plumbers, contractors and massage clinics answer calls, book jobs and save admin time.",
  }),
  component: AiAutomation,
});

const BENEFITS = [
  { icon: PhoneMissed, title: "Missed-call text-back", text: "When you miss a call, a short text invites the caller to explain what they need.", benefit: "Keep the conversation going while you work." },
  { icon: MessageSquare, title: "Website chat assistant", text: "Answers approved questions about your services, hours and area, collects enquiry details and passes them to you.", benefit: "Spend less time answering the same questions." },
  { icon: Star, title: "Google review follow-up", text: "Send a polite review invitation after a completed job or appointment, without filtering customers by their feedback.", benefit: "Build trust without remembering every follow-up." },
  { icon: CalendarCheck, title: "Booking reminders", text: "Send appointment confirmations and reminders through your compatible booking system.", benefit: "Help customers remember and prepare for their visit." },
];

const NICHES = [
  { id: "plumbing", label: "Plumbing & HVAC", icon: Wrench, cases: [
    { icon: Camera, title: "Photos before a quote", text: "Request photos and job details before arranging a visit.", benefit: "Arrive better prepared and reduce unnecessary trips." },
    { icon: BellRing, title: "After-hours enquiry alerts", text: "Route urgent enquiries to your agreed on-call contact. Response times depend on your team's availability; this is not an emergency service.", benefit: "Help your team spot time-sensitive requests." },
    { icon: RefreshCw, title: "Seasonal maintenance reminders", text: "Invite opted-in past customers to book furnace, AC or plumbing maintenance at the right time of year.", benefit: "Stay in touch with customers who already know you." },
    { icon: ClipboardList, title: "Quote follow-up", text: "Send a friendly check-in after an estimate, with a simple way to ask questions or take the next step.", benefit: "Keep promising jobs from being forgotten." },
  ]},
  { id: "contracting", label: "Contracting & Renos", icon: HardHat, cases: [
    { icon: ClipboardList, title: "Project details first", text: "Collect project type, photos, timeline and budget before you arrange a quote.", benefit: "Focus your visits on work that fits your business." },
    { icon: CalendarCheck, title: "Site-visit booking", text: "Let homeowners choose from your approved available times and receive a reminder.", benefit: "Cut down on back-and-forth scheduling." },
    { icon: RefreshCw, title: "Estimate follow-up", text: "Check in on open estimates and invite customers to discuss their questions.", benefit: "Stay organised without chasing every enquiry yourself." },
    { icon: MessageSquare, title: "Job updates", text: "Send updates when your team confirms a start date or project milestone.", benefit: "Keep clients informed with fewer interruption calls." },
  ]},
  { id: "massage", label: "RMT & Massage Clinics", icon: HeartHandshake, cases: [
    { icon: MessageSquare, title: "Direct-billing questions", text: "Share your clinic's approved insurer list and billing process, without promising coverage or collecting insurance details in chat.", benefit: "Answer common questions without interrupting treatment." },
    { icon: ClipboardList, title: "Secure intake links", text: "Send a link to your clinic's secure intake system before a first appointment. Health history stays out of ordinary chat and texts.", benefit: "Help clients arrive prepared and protect treatment time." },
    { icon: RefreshCw, title: "Rebooking reminders", text: "Invite opted-in clients to book again on a schedule your clinic approves, without personal health details in the message.", benefit: "Make it easier for clients to return when they choose." },
    { icon: CalendarCheck, title: "Cancellation waitlist", text: "Notify opted-in waitlist clients about an opening and link to your booking system to confirm availability.", benefit: "Give cancelled appointment slots another chance to fill." },
  ]},
] as const;

const STEPS = [
  { icon: Ear, title: "Share your needs & goals", text: "Tell us what takes your time, what you want to improve and your budget." },
  { icon: Lightbulb, title: "Choose only what fits", text: "We check your existing tools and suggest a practical starting point." },
  { icon: Handshake, title: "Meet & plan together", text: "If it's worth doing, we sit down and plan it properly." },
  { icon: Rocket, title: "Set up, test, adjust", text: "We launch it carefully and tweak it based on real use." },
];

function AiAutomation() {
  const benefits = useReveal<HTMLDivElement>();
  const steps = useReveal<HTMLOListElement>();
  return <>
    <section className="section bg-navy text-navy-foreground">
      <div className="container-site grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="eyebrow">AI & Automation · Optional add-ons</span>
          <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Let simple AI handle the busywork.</h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted">You're on the tools or with a client. AI can answer common questions, take bookings and send reminders in the meantime, so fewer customers go elsewhere.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="btn btn-primary h-auto"><Link to="/contact" hash="review">Tell us your goals<ArrowRight /></Link></Button>
          </div>
        </div>
        <div className="ai-chat-demo" aria-hidden="true">
          <p className="text-xs font-semibold uppercase text-navy-muted">Example: missed-call text-back</p>
          <div className="ai-bubble ai-bubble-note" style={{ "--i": 0 } as CSSProperties}><PhoneMissed className="size-4 shrink-0" /> Missed call while you're on a job</div>
          <div className="ai-bubble ai-bubble-out" style={{ "--i": 1 } as CSSProperties}>Thanks for calling! We're on a job right now. What can we help you with?</div>
          <div className="ai-bubble ai-bubble-in" style={{ "--i": 2 } as CSSProperties}>I'd like a quote for a new water heater.</div>
          <div className="ai-bubble ai-bubble-note" style={{ "--i": 3 } as CSSProperties}><MessageSquare className="size-4 shrink-0" /> Enquiry ready for your follow-up</div>
        </div>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-site">
        <SectionHead eyebrow="Less admin. More time for your work." title="Small tools. Practical benefits." text="Choose individual add-ons to support your business—not a bundle you have to buy, and not included in your marketing plan." center />
        <div ref={benefits} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => <div key={b.title} className="dm-piece text-left" style={{ "--i": i } as CSSProperties}>
            <span className="dm-piece-icon"><b.icon aria-hidden="true" /></span>
            <h3 className="mt-3 text-base font-bold text-navy">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
            <p className="mt-4 border-t pt-3 text-sm font-semibold text-navy">{b.benefit}</p>
          </div>)}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">Want to see it? Tap <strong className="text-navy">Casey</strong>, the assistant in the corner of this page, and ask anything.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHead eyebrow="Tools for your kind of business" title="What could save you time?" center />
        <Tabs defaultValue="plumbing" className="mt-10">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap">
            {NICHES.map(n => <TabsTrigger key={n.id} value={n.id} className="min-h-12 flex-1 gap-2 whitespace-normal"><n.icon className="size-4 shrink-0" aria-hidden="true" />{n.label}</TabsTrigger>)}
          </TabsList>
          {NICHES.map(n => <TabsContent key={n.id} value={n.id} className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {n.cases.map(tool => <article key={tool.title} className="card-site">
                <tool.icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold text-navy">{tool.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tool.text}</p>
                <p className="mt-4 flex gap-2 border-t pt-3 text-sm font-semibold text-navy"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{tool.benefit}</p>
              </article>)}
            </div>
          </TabsContent>)}
        </Tabs>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">Available connections depend on your phone, calendar and booking tools. We agree consent, unsubscribe options, privacy safeguards and human hand-off before launch. Assistants use your approved information—not medical advice or guaranteed emergency responses.</p>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-site grid gap-10 md:grid-cols-2">
        <div>
          <span className="eyebrow">An honest note</span>
          <h2 className="mt-3 text-3xl leading-tight text-navy md:text-4xl">Your marketing brings attention. These tools help you follow up.</h2>
          <p className="mt-5 text-lg text-muted-foreground">AI isn't for every business, and I won't push it on you. Most owners only need one or two small things, and some need nothing yet.</p>
          <p className="mt-4 text-lg text-muted-foreground">These are optional tools that can be added alongside your marketing, not part of Foundation or Growth. Tell me your needs, goals and budget. I'll help you decide what is worth adding—and what isn't.</p>
          <p className="mt-5 font-bold text-navy">— Charles</p><p className="text-sm text-muted-foreground">Founder, Bespoke Marketing LTD.</p>
        </div>
        <ul className="card-site space-y-3 self-start">
          {["No obligation to add anything", "Start small and only expand if it works", "Separate from Foundation and Growth plans", "You approve everything before it goes live"].map(t => <li key={t} className="flex gap-2"><Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />{t}</li>)}
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHead eyebrow="How it works" title="Problem first. Tools second." center />
        <ol ref={steps} className="dm-pieces mt-12 md:!grid-cols-4">
          {STEPS.map((s, i) => <li key={s.title} className="dm-piece" style={{ "--i": i } as CSSProperties}>
            <span className="dm-piece-icon"><s.icon aria-hidden="true" /></span>
            <h3 className="mt-3 text-base font-bold text-navy">{i + 1}. {s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="section bg-navy text-navy-foreground">
      <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl">Let's talk about what you need.</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">Share your needs, goals and budget. We'll suggest only the tools that make sense for your business, with no obligation to add anything.</p>
          <Button asChild className="btn btn-primary mt-8 h-auto min-h-12 whitespace-normal"><Link to="/contact" hash="review">Let's discuss your business<ArrowRight className="shrink-0" /></Link></Button>
      </div>
    </section>
  </>;
}
