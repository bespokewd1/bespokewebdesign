<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep grouped marketing package inclusions and supporting scope explanations in the shared content model and render them through MarketingPlans on each pricing view so prices and inclusions cannot drift.
- Use a dedicated digital-marketing content route for the customer journey, package comparison and paid advertising explanation so visitors can navigate directly to it.
- Store imported brand media as Lovable Assets pointers; derive the public favicon from the same logo so branding remains consistent.
- Reuse LeadForm with a discriminated review/consultation schema and insert-only Cloud inquiries; mirror field limits, contact formats and kind-specific payload rules in the INSERT policy so direct requests cannot bypass validation, and never allow public reads, updates or deletes of contact details.
- Keep homepage FAQ content and applicable marketing agreement conditions in the shared content model; render questions with the existing UI accordion to avoid duplicated content and controls.
- Pre-bundle React entry points, Radix accordion/dialog/tabs and Embla in Vite alongside existing dependencies; newly used interactive dependencies must join this list to prevent mid-session optimizer changes from mixing React instances.
- Derive trusted clients and featured homepage work from shared portfolio flags, and render missing homepage media conditionally; this prevents owned projects or incomplete proof from being presented as external client evidence.
- Keep supplied review transcriptions and original screenshot pointers together in the review content model, split into Google and Facebook collections rendered by the homepage carousel and the /testimonials galleries; this avoids duplicate testimonial sections and preserves source evidence.
- Keep mobile destinations in shared navigation data and use the existing modal Sheet for focus trapping, Escape/outside dismissal and scroll locking; desktop navigation stays independent.
- Gate the reusable WhatsApp contact link on a verified international number from shared site configuration; an absent or invalid number must not render a contact button.
- Scope reference-inspired homepage styling to home-specific classes and reuse existing photo, service content and review data so other pages and verified business facts remain unchanged.
- Place supplied marketing diagrams on the digital-marketing journey and performance evidence on the SEO page via asset pointers; keep the homepage concise and distinguish measured audit scores from ranking promises.
- Keep homepage getting-started steps separate from the detailed marketing journey, and require both approved imagery and a project link before featuring a portfolio item; this keeps the overview concise and evidence complete.
- Use the reusable founder photo carousel with manual controls, pausing and reduced-motion support; this preserves authentic client imagery without forcing constant motion.
- Keep second-fold Google reviews and the CSS client marquee in HomeTrust, sourcing shared verified reviews and portfolio flags; keep manual pause controls and hide duplicate marquee content from assistive technology.
- Keep portfolio records in the shared site model, distinguish published showcases from retained legacy entries, and use one parameterized detail route; evidence-based filters and hidden empty media/audits prevent invented proof.
