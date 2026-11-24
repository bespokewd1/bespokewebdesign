import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, Star, Camera, Target, TrendingUp, KeyRound, ClipboardList, Paintbrush, Send, Wrench, MapPin, PhoneCall } from "lucide-react";

const STEP_ICONS = [ClipboardList, Camera, Paintbrush, Send];
const PHASE_ICONS = [Wrench, MapPin, PhoneCall];
import { PLANS, PLAN_CURRENCY, PACKAGE_DETAILS } from "@/content/site";
import { Button } from "@/components/ui/button";
import { BenefitText } from "@/components/site/BenefitText";

export function MarketingPlans() {
  return (
    <>
      <p className="mt-8 text-center text-sm text-muted-foreground md:hidden">Swipe to compare plans →</p>
      <div className="marketing-plan-grid -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-auto md:mt-10 md:grid md:max-w-5xl md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {PLANS.map((plan) => (
          <article key={plan.name} className={`blueprint-accent card-site flex w-[85%] shrink-0 snap-center flex-col shadow-lg md:w-auto md:shadow-none md:p-8 ${plan.featured ? "border-2 border-accent" : ""}`}>
            <h3 className="text-2xl font-extrabold text-navy">{plan.name}</h3>
            <p className="mt-3 min-h-12 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
            <p className="mt-6 font-sans text-4xl font-bold text-navy">${plan.monthlyPrice}<span className="text-base font-normal text-muted-foreground"> {PLAN_CURRENCY} / month</span></p>
            {plan.monthlyPrice === 245 && <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground"><Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />Best deal</p>}
            <div className="mt-8 flex-1 space-y-6 border-t pt-6">
              {plan.groups.map(group => <div key={group.title}><h4 className="text-sm font-bold text-navy">{group.title}</h4><ul className="mt-3 space-y-3">{group.items.map(item => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul></div>)}
            </div>
            <p className="mt-6 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-navy"><span className="text-accent">Best for: </span>{plan.bestFor}</p>
            {plan.googleSearchCampaigns > 0 && <p className="mt-6 text-sm font-semibold">Google Ads advertising expenditure is not included.</p>}
             <Button asChild className="btn btn-primary mt-8 h-auto whitespace-normal"><Link to="/contact" hash="review">{plan.cta}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link></Button>
          </article>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground"><p className="font-semibold">{PACKAGE_DETAILS.posts}</p><p>{PLANS.map(plan => `${plan.name}: ${plan.socialPosts} ${plan.channels === 1 ? "Facebook posts" : `posts total across ${plan.platforms.join(", ")}`}`).join(" · ")}</p><p>{PACKAGE_DETAILS.postCounting}</p></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="card-site"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent"><Camera className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-xl text-navy">{PACKAGE_DETAILS.socialTitle}</h3><p className="mt-2 text-sm text-muted-foreground">{PACKAGE_DETAILS.socialShort}</p>
          <ol className="mt-5 grid grid-cols-2 gap-3">{PACKAGE_DETAILS.socialSteps.map((step, i) => { const I = STEP_ICONS[i] ?? Check; return <li key={step.title} className="rounded-lg bg-secondary p-3"><span className="flex items-center gap-2 text-sm font-bold text-navy"><I className="h-4 w-4 text-accent" aria-hidden="true" />{i + 1}. {step.title}</span><p className="mt-1 text-xs text-muted-foreground">{step.text}</p></li>; })}</ol></div>
        <div className="card-site"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-accent"><Target className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 text-xl text-navy">{PACKAGE_DETAILS.adsTitle}</h3><p className="mt-2 text-sm text-muted-foreground"><BenefitText text={PACKAGE_DETAILS.adsShort} phrases={["Included in Growth", "no markup on your ad spend"]} /></p>
          <ul className="mt-5 space-y-3">{PACKAGE_DETAILS.adsSteps.map(step => <li key={step} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{step}</span></li>)}</ul></div>
      </div>
      <div className="card-site mt-5 border-2 border-accent">
        <div className="flex items-center gap-3"><span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground"><TrendingUp className="h-5 w-5" aria-hidden="true" /></span><h3 className="text-xl text-navy md:text-2xl">{PACKAGE_DETAILS.engineTitle}</h3></div>
        <p className="mt-3 text-sm text-muted-foreground"><BenefitText text={PACKAGE_DETAILS.engineIntro} phrases={["consistent work every month", "12-month minimum"]} /></p>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">{PACKAGE_DETAILS.phases.map((ph, i) => { const I = PHASE_ICONS[i] ?? Check; return <li key={ph.months} className="relative rounded-lg bg-secondary p-4"><div className="h-1.5 rounded-full bg-muted"><div className="h-1.5 rounded-full bg-accent" style={{ width: `${(i + 1) * 33.4}%` }} /></div><span className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent"><I className="h-4 w-4" aria-hidden="true" />{ph.months}</span><h4 className="mt-1 text-base text-navy">{ph.title}</h4><p className="mt-1 text-sm text-muted-foreground">{ph.text}</p></li>; })}</ol>
        <p className="mt-5 flex gap-2 text-sm font-semibold text-navy"><KeyRound className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />{PACKAGE_DETAILS.adsAgreement}</p>
        <p className="mt-3 text-sm font-semibold text-navy">{PACKAGE_DETAILS.adsGoal}</p>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">{PACKAGE_DETAILS.scope} {PACKAGE_DETAILS.revisions}</p>
    </>
  );
}