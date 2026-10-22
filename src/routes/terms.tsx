import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ path: "/terms", crumb: "Terms", title: "Terms of Use | Bespoke Web Design", description: "Terms of use for the Bespoke Web Design website." }),
  component: () => (
    <>
      <PageHero title="Terms of Use" />
      <section className="section">
        <div className="container-site max-w-3xl space-y-5 text-muted-foreground">
          <p><strong className="text-navy">Template notice:</strong> these terms are a starting point and should be reviewed before launch.</p>
          <p>The content on this website is provided for general information about the services offered by {SITE.name}. Pricing shown is indicative; final scope and pricing are confirmed in writing for each client.</p>
          <p>Search engine rankings and marketing results cannot be guaranteed. All content on this site is the property of {SITE.name} unless otherwise noted.</p>
        </div>
      </section>
    </>
  ),
});
