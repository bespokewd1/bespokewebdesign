import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HELP_OPTIONS, INDUSTRIES } from "@/content/site";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CHALLENGES, challengeMessage, inquiryRow, inquirySchema } from "@/lib/inquiry";

type Errors = Record<string, string>;
export function LeadForm({ submitLabel, kind = "review" }: { submitLabel?: string; kind?: "review" | "consultation" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [failure, setFailure] = useState("");
  const [other, setOther] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    const fd = new FormData(e.currentTarget);
    if (fd.get("company_url")) return;
    const raw: Record<string, unknown> = { ...Object.fromEntries(fd), kind };
    if (kind === "review") { raw["message"] = challengeMessage(fd.getAll("challenge").map(String), String(fd.get("other") ?? "")); delete raw["challenge"]; delete raw["other"]; }
    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach(i => { next[String(i.path[0])] = i.message; });
      setErrors(next);
      return;
    }
    setErrors({}); setFailure(""); setPending(true);
    try {
      const { error } = await supabase.from("marketing_inquiries").insert(inquiryRow(parsed.data));
      if (error) throw error;
      setDone(true);
    } catch {
      setFailure("Your request was not saved. Please try again; your details are still here.");
    } finally { setPending(false); }
  }
  if (done) return <div className="card-site text-center" role="status">
    <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
    <h3 className="mt-3 text-xl text-navy">Request received</h3>
    <p className="mt-3 text-muted-foreground">Your {kind === "review" ? "free marketing review" : "consultation"} request has been saved securely. Thank you for telling us about your business.</p>
  </div>;
  function field(name: string, label: string, maxLength: number, type = "text", optional = false, autoComplete?: string) {
    return <div><label htmlFor={`${kind}-${name}`} className="mb-1.5 block text-sm font-semibold text-navy">{label}{optional && <span className="font-normal text-muted-foreground"> (optional)</span>}</label>
      <input id={`${kind}-${name}`} name={name} type={type} maxLength={maxLength} autoComplete={autoComplete} required={!optional} className="field" aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${kind}-${name}-error` : undefined} />
      {errors[name] && <p id={`${kind}-${name}-error`} className="mt-1 text-sm text-destructive">{errors[name]}</p>}
    </div>;
  }
  const choiceName = kind === "review" ? "industry" : "services";
  return <form onSubmit={onSubmit} noValidate className="card-site grid gap-4 md:p-8" aria-label={kind === "review" ? "Free marketing review" : "Consultation request"}>
    <div className="grid gap-4 sm:grid-cols-2">
      {field("business", "Business name", 120, "text", false, "organization")}
      {field("name", kind === "review" ? "Contact name" : "Name", 100, "text", false, "name")}
      {field("email", "Email", 200, "email", false, "email")}
      {field("phone", "Phone", 30, "tel", true, "tel")}
    </div>
    {kind === "review" && <div className="grid gap-4 sm:grid-cols-2">{field("website", "Website", 200, "url", true, "url")}{field("social", "Facebook or social page", 200, "url", true)}</div>}
    <div><label htmlFor={`${kind}-${choiceName}`} className="mb-1.5 block text-sm font-semibold text-navy">{kind === "review" ? "Industry" : "Interested services"}</label>
      <select id={`${kind}-${choiceName}`} name={choiceName} className="field" defaultValue="" required aria-invalid={!!errors[choiceName]} aria-describedby={errors[choiceName] ? `${kind}-${choiceName}-error` : undefined}>
        <option value="" disabled>Choose one…</option>
        {(kind === "review" ? [...INDUSTRIES.map(i => i.name), "Other"] : [...HELP_OPTIONS, "Monthly marketing package", "Google Ads"]).map(o => <option key={o}>{o}</option>)}
      </select>
      {errors[choiceName] && <p id={`${kind}-${choiceName}-error`} className="mt-1 text-sm text-destructive">{errors[choiceName]}</p>}
    </div>
    {kind === "review" ? <fieldset aria-describedby={errors['message'] ? "review-message-error" : undefined}>
      <legend className="mb-1.5 text-sm font-semibold text-navy">What's your biggest marketing challenge? <span className="font-normal text-muted-foreground">(choose any)</span></legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {[...CHALLENGES, "Other"].map(c => <label key={c} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-md border bg-background px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <input type="checkbox" name="challenge" value={c} className="h-4 w-4 shrink-0 accent-primary" onChange={c === "Other" ? e => setOther(e.currentTarget.checked) : undefined} />{c}
        </label>)}
      </div>
      {other && <div className="mt-3"><label htmlFor="review-other" className="mb-1.5 block text-sm font-semibold text-navy">Tell us a bit more</label><textarea id="review-other" name="other" rows={2} maxLength={1200} className="field" /></div>}
      {errors['message'] && <p id="review-message-error" className="mt-1 text-sm text-destructive">{errors['message']}</p>}
    </fieldset> : <div><label htmlFor={`${kind}-message`} className="mb-1.5 block text-sm font-semibold text-navy">Message (optional)</label>
      <textarea id={`${kind}-message`} name="message" rows={3} maxLength={1500} className="field" aria-invalid={!!errors['message']} aria-describedby={errors['message'] ? `${kind}-message-error` : undefined} />
      {errors['message'] && <p id={`${kind}-message-error`} className="mt-1 text-sm text-destructive">{errors['message']}</p>}
    </div>}
    <div className="hidden" aria-hidden="true"><label>Leave empty<input name="company_url" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="text-xs text-muted-foreground">We use your details to respond to your inquiry. <Link to="/privacy" className="underline">Privacy policy</Link></p>
    {failure && <p role="alert" className="text-sm text-destructive">{failure}</p>}
    <Button type="submit" disabled={pending} className="btn btn-primary h-auto whitespace-normal w-full sm:w-auto sm:justify-self-start">{pending && <LoaderCircle className="animate-spin motion-reduce:animate-none" />}{pending ? "Submitting…" : submitLabel || (kind === "review" ? "Get a Free Marketing Review" : "Request a Consultation")}</Button>
  </form>;
}
