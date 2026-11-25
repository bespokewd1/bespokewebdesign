import { createFileRoute } from "@tanstack/react-router";
import { SITE, MARKETING_AGREEMENT } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => pageHead({ path: "/terms", crumb: "Terms", title: "Terms of Use | Bespoke Web Design", description: "Website terms and an overview of digital marketing service conditions for Bespoke Web Design in Edmonton, Alberta." }),
  component: () => (
    <>
      <PageHero title="Terms of Use" />
      <section className="section">
        <div className="container-site max-w-3xl space-y-5 text-muted-foreground">
          <p className="text-sm">Last updated: November 22, 2026</p>
          <p>{SITE.name} is operated by {SITE.operator} in {SITE.location}. These terms cover use of this website and summarize our approach to marketing services. A written service agreement confirms the terms of any paid engagement.</p>

          <h2 className="text-xl font-bold text-navy">1. Website use and inquiries</h2>
          <p>Use this website lawfully. Do not submit misleading information, attempt to access other people’s data, interfere with the site or copy materials without permission. Website information and free reviews are general guidance, not legal, financial or professional advice. An inquiry or discovery call does not create a paid service agreement.</p>

          <h2 className="text-xl font-bold text-navy">2. Agreed services and pricing</h2>
          <p>Your written proposal or service agreement sets the scope, price, payment schedule, deliverables and approval process. Prices shown are in Canadian dollars; any applicable taxes and third-party charges will be identified in your agreement. Extra pages, major changes, additional revisions, photography, filming and other work outside the agreed scope require written agreement and may cost extra. Website and logo services do not include unlimited work.</p>

          <h2 className="text-xl font-bold text-navy">3. Monthly plans and website ownership</h2>
          <p>Applicable monthly marketing plans have a {MARKETING_AGREEMENT.minimumMonths}-month minimum commitment. Your completed custom website transfers to you after completing the {MARKETING_AGREEMENT.ownershipTransferMonths}-month agreement and all required payments, subject to the ownership terms in your contract. Third-party software, fonts, images and tools remain subject to their own licences.</p>
          <p>Renewal, cancellation, early termination, refunds, hosting, domains and maintenance are governed by your written service agreement. These website terms do not create an automatic renewal, a cancellation fee or a refund policy.</p>

          <h2 className="text-xl font-bold text-navy">4. Client responsibilities and approvals</h2>
          <p>You are responsible for providing accurate business details, necessary account access, timely feedback and approvals. You must have permission to use supplied photos, videos, logos, reviews and other materials, including permission from identifiable people where required. Do not supply confidential customer or patient information for public marketing.</p>
          <p>You are responsible for confirming that service claims, prices, promotions and industry-specific statements are accurate and lawful before publication, including any advertising requirements for your trade or regulated profession. Missing information or delayed approvals can affect delivery dates and results. Changes after approval may require a revised scope.</p>

          <h2 className="text-xl font-bold text-navy">5. Advertising and outside platforms</h2>
          <p>Google advertising spend is separate from our service fees and is paid directly to Google. Growth includes management of one active Google Search campaign within the agreed scope; other campaigns and additional work require a separate quote. We do not control Google, Meta or other providers’ charges, approvals, account restrictions, outages, policies or algorithm changes.</p>

          <h2 className="text-xl font-bold text-navy">6. No guaranteed marketing results</h2>
          <p>Marketing is ongoing work, not a guaranteed outcome. We do not promise a particular Google ranking, traffic level, number of calls, leads, bookings, sales or return on advertising spend. Results depend on factors including competition, budget, market conditions, your offer, customer follow-up and platform changes. Testimonials, examples and recorded website test scores are not promises of the same results for every client. A 12-month commitment does not guarantee success.</p>

          <h2 className="text-xl font-bold text-navy">7. Website content and responsibility</h2>
          <p>Our website’s original text, designs and graphics belong to {SITE.operator} or their respective owners. Displaying client work does not give visitors permission to reuse it. External links are provided for convenience; we are not responsible for the content or operation of those sites.</p>
          <p>We aim to keep this website accurate and available but cannot promise uninterrupted, error-free or secure access. To the extent permitted by applicable law, we exclude liability for indirect or consequential losses arising from use of this website. Liability for paid services is addressed in your written agreement. Nothing here removes rights or responsibilities that cannot legally be excluded.</p>

          <h2 className="text-xl font-bold text-navy">8. Alberta law and contact</h2>
          <p>These website terms are governed by the laws of Alberta and the applicable federal laws of Canada, subject to any mandatory laws that apply to you. Please contact us first to discuss a concern. Any dispute forum for paid services should be set out in the written agreement.</p>
          <p>Questions? Email <a href={`mailto:${SITE.email}`} className="break-words underline underline-offset-4">{SITE.email}</a>. We may update these website terms by posting a revised version and date; this does not change an existing signed agreement without the changes required by that agreement.</p>
        </div>
      </section>
    </>
  ),
});
