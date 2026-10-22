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

- Keep marketing package data in the shared content model and render it through MarketingPlans on each pricing view so prices and inclusions cannot drift.
- Use a dedicated digital-marketing content route for the customer journey, package comparison and paid advertising explanation so visitors can navigate directly to it.
- Store imported brand media as Lovable Assets pointers; derive the public favicon from the same logo so branding remains consistent.
- Reuse LeadForm with a discriminated review/consultation schema and insert-only Cloud inquiries; public visitors must never read, update or delete submitted contact details.
