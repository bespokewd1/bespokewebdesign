import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PhoneMissed, Clock, CalendarCheck, MessageSquare, Star, ClipboardList, Wrench, HardHat, HeartHandshake, Ear, Lightbulb, Handshake, Rocket, Check } from "lucide-react";
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
  { icon: PhoneMissed, title: "Fewer missed customers", text: "Questions get answered even when you're under a sink or in a session." },
  { icon: Clock, title: "Less time on admin", text: "Stop repeating the same answers about prices, hours and service areas." },
  { icon: CalendarCheck, title: "Fewer no-shows", text: "Automatic reminders so people remember their appointment." },
  { icon: Star, title: "More reviews", text: "A polite follow-up asks happy customers to leave a review." },
];

const NICHES = [
  { id: "plumbing", label: "Plumbing & HVAC", icon: Wrench, cases: [
    ["After-hours calls", "A customer has a leak at 9 PM. The assistant takes their address and details and texts you right away."],
    ["\"Do you service my area?\"", "Answers service-area and call-out fee questions instantly, so you don't have to."],
    ["Review follow-up", "A few hours after a job, a friendly text asks the customer how it went."],
  ]},
  { id: "contracting", label: "Contracting & Renos", icon: HardHat, cases: [
    ["Project questions first", "Collects project type, size, timeline and budget before you drive out to quote."],
    ["Estimate booking", "Qualified homeowners book a site visit into your open calendar slots."],
    ["Job updates", "Simple automatic texts to keep clients informed about start dates and progress."],
  ]},
  { id: "massage", label: "RMT & Massage Clinics", icon: HeartHandshake, cases: [
    ["Direct-billing questions", "Answers \"Do you direct bill my insurance?\" without interrupting a treatment."],
    ["Booking while you work", "Clients can book or reschedule any time, even mid-session."],
    ["Intake & rebooking", "Sends intake forms before the first visit and a gentle rebook reminder after a few weeks."],
  ]},
] as const;

const STEPS = [
  { icon: Ear, title: "Tell us your goals & problems", text: "What eats your time? Where do customers slip away?" },
  { icon: Lightbulb, title: "We suggest what fits", text: "Only what makes sense. Maybe one small thing, maybe nothing yet." },
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
          <span className="eyebrow">AI & Automation</span>
          <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Let simple AI handle the busywork.</h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted">You're on the tools or with a client. AI can answer common questions, take bookings and send reminders in the meantime, so fewer customers go elsewhere.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="btn btn-primary h-auto"><Link to="/contact" hash="review">Tell us your goals<ArrowRight /></Link></Button>
          </div>
        </div>
        <div className="ai-chat-demo" aria-hidden="true">
          <div className="ai-bubble ai-bubble-in" style={{ "--i": 0 } as CSSProperties}>Hi, my basement's flooding. Can someone come tonight?</div>
          <div className="ai-bubble ai-bubble-out" style={{ "--i": 1 } as CSSProperties}>Sorry to hear that. What's your address? I'll alert our on-call plumber now.</div>
          <div className="ai-bubble ai-bubble-in" style={{ "--i": 2 } as CSSProperties}>123 Main St, Sherwood Park.</div>
          <div className="ai-bubble ai-bubble-note" style={{ "--i": 3 } as CSSProperties}><MessageSquare className="size-4" /> Text sent to the plumber on call</div>
        </div>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-site">
        <SectionHead eyebrow="What you get" title="What it actually does for you" text="No tech talk. Here's what you'd notice day to day." center />
        <div ref={benefits} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => <div key={b.title} className="dm-piece text-left" style={{ "--i": i } as CSSProperties}>
            <span className="dm-piece-icon"><b.icon aria-hidden="true" /></span>
            <h3 className="mt-3 text-base font-bold text-navy">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
          </div>)}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">Want to see it? Tap <strong className="text-navy">Casey</strong>, the assistant in the corner of this page, and ask anything.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-site">
        <SectionHead eyebrow="Real examples" title="What it could look like for your business" center />
        <Tabs defaultValue="plumbing" className="mt-10">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap">
            {NICHES.map(n => <TabsTrigger key={n.id} value={n.id} className="min-h-11 flex-1 gap-2"><n.icon className="size-4" aria-hidden="true" />{n.label}</TabsTrigger>)}
          </TabsList>
          {NICHES.map(n => <TabsContent key={n.id} value={n.id} className="mt-8">
            <div className="grid gap-4 md:grid-cols-3">
              {n.cases.map(([title, text]) => <article key={title} className="card-site">
                <ClipboardList className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </article>)}
            </div>
          </TabsContent>)}
        </Tabs>
      </div>
    </section>

    <section className="section bg-surface">
      <div className="container-site grid gap-10 md:grid-cols-2">
        <div>
          <span className="eyebrow">An honest note</span>
          <h2 className="mt-3 text-3xl leading-tight text-navy md:text-4xl">This isn't part of our plans, and you don't need all of it.</h2>
          <p className="mt-5 text-lg text-muted-foreground">AI isn't for every business, and I won't push it on you. Most owners only need one or two small things, and some need nothing yet.</p>
          <p className="mt-4 text-lg text-muted-foreground">Tell me your goals and what's frustrating you. I'll be straight about whether automation would help. If it makes sense, we meet and plan it together, priced separately from your marketing plan.</p>
          <p className="mt-5 font-bold text-navy">— Charles</p>
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

    <section className="section">
      <div className="container-site">
        <div className="rounded-3xl bg-navy px-6 py-12 text-center text-navy-foreground md:px-12 md:py-16">
          <h2 className="text-3xl md:text-4xl">Curious if AI could help you?</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">Share your goals and biggest headaches. No sales pitch, just an honest answer.</p>
          <Button asChild className="btn btn-primary mt-8 h-auto"><Link to="/contact" hash="review">Tell us your goals<ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  </>;
}
