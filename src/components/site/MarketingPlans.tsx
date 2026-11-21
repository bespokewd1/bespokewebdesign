import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, Star } from "lucide-react";
import { PLANS, PLAN_CURRENCY, PACKAGE_DETAILS } from "@/content/site";
import { Button } from "@/components/ui/button";

export function MarketingPlans() {
  return (
    <>
      <p className="mt-8 text-center text-sm text-muted-foreground md:hidden">Swipe to compare plans →</p>
      <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-auto md:mt-10 md:grid md:max-w-5xl md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {PLANS.map((plan) => (
          <article key={plan.name} className={`card-site flex w-[85%] shrink-0 snap-center flex-col shadow-lg md:w-auto md:shadow-none md:p-8 ${plan.featured ? "border-2 border-accent" : ""}`}>
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
             <Button asChild className="btn btn-primary mt-8 h-auto whitespace-normal"><Link to="/contact" hash="consultation">{plan.cta}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link></Button>
          </article>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground"><p className="font-semibold">{PACKAGE_DETAILS.posts}</p><p>{PLANS.map(plan => `${plan.name}: ${plan.socialPosts} ${plan.channels === 1 ? "Facebook posts" : `posts total across ${plan.platforms.join(", ")}`}`).join(" · ")}</p><p>{PACKAGE_DETAILS.postCounting}</p></div>
      <div className="mt-8 border-t pt-6"><h3 className="text-xl text-navy">{PACKAGE_DETAILS.socialTitle}</h3><p className="mt-3 text-sm text-muted-foreground">{PACKAGE_DETAILS.socialIntro}</p><ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{PACKAGE_DETAILS.socialSteps.map((step, index) => <li key={step.title}><h4 className="text-sm text-navy">{index + 1}. {step.title}</h4><p className="mt-2 text-sm text-muted-foreground">{step.text}</p></li>)}</ol><p className="mt-5 text-sm text-muted-foreground">{PACKAGE_DETAILS.socialScope}</p></div>
      <div className="mt-8 border-t pt-6"><h3 className="text-xl text-navy">{PACKAGE_DETAILS.adsTitle}</h3><p className="mt-2 text-base font-semibold text-navy">{PACKAGE_DETAILS.adsSubtitle}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{PACKAGE_DETAILS.adsIntro}</p><p className="mt-6 text-sm font-bold text-navy">{PACKAGE_DETAILS.adsStepsTitle}</p><ul className="mt-3 grid gap-3 sm:grid-cols-2">{PACKAGE_DETAILS.adsSteps.map(step => <li key={step} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{step}</span></li>)}</ul><h4 className="mt-7 text-lg text-navy">{PACKAGE_DETAILS.adsPricingTitle}</h4><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{PACKAGE_DETAILS.adsPricing}</p><p className="mt-4 text-sm font-semibold">{PACKAGE_DETAILS.adsAgreement}</p><p className="mt-5 text-sm font-semibold text-navy">{PACKAGE_DETAILS.adsGoal}</p></div>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground"><p>{PACKAGE_DETAILS.scope}</p><p>{PACKAGE_DETAILS.revisions}</p></div>
    </>
  );
}