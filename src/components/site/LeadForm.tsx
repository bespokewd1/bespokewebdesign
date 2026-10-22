import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { HELP_OPTIONS, SITE } from "@/content/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  business: z.string().trim().min(2, "Please enter your business name").max(120),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(30).regex(/^[0-9+()\-.\s]*$/, "Please enter a valid phone number").optional().or(z.literal("")),
  help: z.string().min(1, "Please choose an option"),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function LeadForm({ submitLabel = "Request My Free Review" }: { submitLabel?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("company_url")) return; // honeypot: bots fill hidden fields
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    if (SITE.email) {
      const body = `Name: ${d.name}\nBusiness: ${d.business}\nWebsite: ${d.website || "-"}\nEmail: ${d.email}\nPhone: ${d.phone || "-"}\nNeeds help with: ${d.help}\n\n${d.message || ""}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Free website review request — " + d.business)}&body=${encodeURIComponent(body)}`;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="card-site text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
        <h3 className="mt-3 text-xl font-bold text-navy">Thanks — almost there!</h3>
        <p className="mt-2 text-muted-foreground">
          {SITE.email
            ? "Your email app should have opened with your details filled in. Press send and we'll get back to you."
            : "Online form delivery is still being set up, so your request was not sent yet. Please check back soon."}
        </p>
      </div>
    );
  }

  const F = ({ name, label, type = "text", optional = false, auto }: { name: keyof Errors; label: string; type?: string; optional?: boolean; auto?: string }) => (
    <div>
      <label htmlFor={`lf-${name}`} className="mb-1.5 block text-sm font-semibold text-navy">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      <input id={`lf-${name}`} name={name} type={type} autoComplete={auto} className="field"
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `lf-${name}-err` : undefined} />
      {errors[name] && <p id={`lf-${name}-err`} className="mt-1 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card-site grid gap-4 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {F({name: "name", label: "Full Name", auto: "name",})}
        {F({name: "business", label: "Business Name", auto: "organization",})}
        {F({name: "email", label: "Email", type: "email", auto: "email",})}
        {F({name: "phone", label: "Phone", type: "tel", optional: true, auto: "tel",})}
      </div>
      {F({name: "website", label: "Website URL", optional: true, auto: "url",})}
      <div>
        <label htmlFor="lf-help" className="mb-1.5 block text-sm font-semibold text-navy">What do you need help with?</label>
        <select id="lf-help" name="help" className="field" defaultValue="" aria-invalid={!!errors.help}>
          <option value="" disabled>Choose one…</option>
          {HELP_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.help && <p className="mt-1 text-sm text-destructive">{errors.help}</p>}
      </div>
      <div>
        <label htmlFor="lf-message" className="mb-1.5 block text-sm font-semibold text-navy">
          Anything else? <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea id="lf-message" name="message" rows={3} className="field" />
      </div>
      <div className="hidden" aria-hidden="true">
        <label>Leave empty<input name="company_url" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto sm:justify-self-start">{submitLabel}</button>
    </form>
  );
}
