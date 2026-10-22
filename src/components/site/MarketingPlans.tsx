import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { PLANS, PLAN_CURRENCY, PACKAGE_DETAILS } from "@/content/site";
import { Button } from "@/components/ui/button";

export function MarketingPlans({ showDescriptions = false }: { showDescriptions?: boolean }) {
  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.name} className={`card-site flex flex-col md:p-8 ${plan.featured ? "border-2 border-accent" : ""}`}>
            <h3 className="text-2xl font-extrabold text-navy">{plan.name}</h3>
            <p className="mt-3 min-h-12 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
            <p className="mt-6 font-sans text-4xl font-bold text-navy">${plan.monthlyPrice}<span className="text-base font-normal text-muted-foreground"> {PLAN_CURRENCY} / month</span></p>
            <div className="mt-8 flex-1 space-y-6 border-t pt-6">
              {plan.groups.map(group => <div key={group.title}><h4 className="text-sm font-bold text-navy">{group.title}</h4><ul className="mt-3 space-y-3">{group.items.map(item => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><span>{item}</span></li>)}</ul></div>)}
            </div>
            {plan.googleSearchCampaigns > 0 && <p className="mt-6 text-sm font-semibold">Google Ads advertising expenditure is not included.</p>}
             <Button asChild className="btn btn-primary mt-8 h-auto whitespace-normal"><Link to="/contact" hash="consultation">{plan.cta}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link></Button>
          </article>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground"><p className="font-semibold">{PACKAGE_DETAILS.posts}</p><p>{PLANS.map(plan => `${plan.name}: ${plan.socialPosts} ${plan.channels === 1 ? "Facebook posts" : `posts total across ${plan.platforms.join(", ")}`}`).join(" · ")}</p><p>{PACKAGE_DETAILS.postCounting}</p></div>
      <div className="mt-8 border-t pt-6"><h3 className="text-xl text-navy">{PACKAGE_DETAILS.socialTitle}</h3><p className="mt-3 text-sm text-muted-foreground">{PACKAGE_DETAILS.socialIntro}</p><ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{PACKAGE_DETAILS.socialSteps.map((step, index) => <li key={step.title}><h4 className="text-sm text-navy">{index + 1}. {step.title}</h4><p className="mt-2 text-sm text-muted-foreground">{step.text}</p></li>)}</ol><p className="mt-5 text-sm text-muted-foreground">{PACKAGE_DETAILS.socialScope}</p></div>
      <div className="mt-8 border-t pt-6"><h3 className="text-xl text-navy">{PACKAGE_DETAILS.adsTitle}</h3><p className="mt-3 text-sm text-muted-foreground">{PACKAGE_DETAILS.adsIntro}</p><p className="mt-4 text-sm font-semibold">{PACKAGE_DETAILS.adsBudget}</p><p className="mt-2 text-sm text-muted-foreground">{PACKAGE_DETAILS.adsPayment}</p><p className="mt-4 text-sm text-muted-foreground">{PACKAGE_DETAILS.adsExtras}</p><p className="mt-3 text-sm text-muted-foreground">{PACKAGE_DETAILS.adsDifference}</p></div>
      <div className="mt-6 space-y-2 text-sm text-muted-foreground"><p>{PACKAGE_DETAILS.scope}</p><p>{PACKAGE_DETAILS.revisions}</p></div>
    </>
  );
}