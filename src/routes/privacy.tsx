import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ path: "/privacy", crumb: "Privacy Policy", title: "Privacy Policy | Bespoke Web Design", description: "How Bespoke Web Design collects, uses, and protects information submitted through this website." }),
  component: () => (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container-site max-w-3xl space-y-5 text-muted-foreground">
          <p><strong className="text-navy">Template notice:</strong> this policy is a starting point and should be reviewed before launch.</p>
          <h2 className="text-xl font-bold text-navy">Information we collect</h2>
          <p>When you submit a form, we collect the details you provide, such as your name, business name, email, phone number, and website address.</p>
          <h2 className="text-xl font-bold text-navy">How we use it</h2>
          <p>We use this information only to respond to your enquiry and provide requested services. We do not sell your personal information.</p>
          <h2 className="text-xl font-bold text-navy">Your choices</h2>
          <p>You may ask us to access, correct, or delete your information at any time by contacting {SITE.name}.</p>
        </div>
      </section>
    </>
  ),
});
