import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { PLANS } from "@/content/site";
import { Button } from "@/components/ui/button";

export function MarketingPlans() {
  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.name} className={`card-site flex flex-col md:p-8 ${plan.featured ? "border-2 border-accent" : ""}`}>
            <h3 className="text-2xl font-extrabold text-navy">{plan.name}</h3>
            <p className="mt-3 min-h-12 text-sm text-muted-foreground">{plan.tagline}</p>
            <p className="mt-6 font-sans text-4xl font-bold text-navy">${plan.monthlyPrice}<span className="text-base font-normal text-muted-foreground"> / month</span></p>
            <ul className="mt-8 flex-1 space-y-4 border-t pt-6">
              {plan.items.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}
            </ul>
            <Button asChild className="btn btn-primary mt-8 h-auto whitespace-normal"><Link to="/contact" hash="review">{plan.cta}<ArrowUpRight className="h-4 w-4 shrink-0" /></Link></Button>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">Post counts are monthly totals across the plan's channels. Google Ads can be discussed separately; advertising spend is not included in these plans.</p>
    </>
  );
}