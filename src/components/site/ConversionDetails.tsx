import { MessageCircle, Search, CheckCircle2, Star } from "lucide-react";
import { REVIEW_LINKS } from "@/content/site";

export function BookingSteps({ light = false }: { light?: boolean }) {
  return <ol aria-label="What to expect from your discovery call" className={`mt-4 grid gap-2 text-xs leading-relaxed sm:grid-cols-3 sm:gap-4 ${light ? "text-navy-muted" : "text-muted-foreground"}`}>
    {[{ icon: MessageCircle, text: "Quick chat" }, { icon: Search, text: "Honest review of your Google presence" }, { icon: CheckCircle2, text: "Zero-pressure recommendation" }].map((step, index) => <li key={step.text} className="flex min-w-0 items-start gap-2"><step.icon className={`mt-0.5 size-4 shrink-0 ${light ? "text-hero-accent" : "text-primary"}`} aria-hidden="true" /><span>{index + 1}. {step.text}</span></li>)}
  </ol>;
}

export function HeroTrust() {
  return <p className="mt-4 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed text-navy-muted"><Star className="size-3.5 shrink-0 fill-current text-review-gold" aria-hidden="true" /><a href={REVIEW_LINKS.Google} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy-foreground">Five-star client reviews in Edmonton</a><span aria-hidden="true">·</span><span>Done-for-you marketing</span></p>;
}