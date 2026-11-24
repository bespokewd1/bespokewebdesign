import { ExternalLink, Quote } from "lucide-react";
import { PROJECTS, TESTIMONIALS } from "@/content/site";
import { Placeholder } from "./Layout";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type Project = (typeof PROJECTS)[number];

export function ProjectCard({ p, detailed = false, hideMissingImage = false }: { p: Project; detailed?: boolean; hideMissingImage?: boolean }) {
  return (
    <article id={p.name.toLowerCase().replaceAll(" ", "-")} className={`card-site scroll-mt-24 flex flex-col !p-0 overflow-hidden ${p.slug ? "portfolio-card" : ""}`}>
      {p.image ? (
        <img src={p.image} alt={`${p.name} website screenshot`} loading="lazy" className="aspect-[16/10] w-full bg-muted object-contain" />
      ) : !hideMissingImage ? (
        <Placeholder label={`Website screenshot — ${p.name}`} className="aspect-[16/10] !rounded-none !border-0 !border-b" />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{p.industry}</span>
        <h3 className="mt-1 text-xl font-bold text-navy">{p.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
        {hideMissingImage && <h4 className="mt-5 text-sm text-navy">What We Delivered</h4>}
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.services.map((s) => (
            <li key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-navy">{s}</li>
          ))}
        </ul>
        {detailed && p.testimonial && (
          <blockquote className="mt-5 border-l-4 border-accent pl-4 text-sm italic">{p.testimonial}</blockquote>
        )}
        {detailed && p.outcomes && p.outcomes.length > 0 && (
          <ul className="mt-4 list-disc pl-5 text-sm">{p.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
        )}
        <Button asChild variant="outline" className="btn btn-outline mt-6 h-auto self-start">
          {p.slug ? <Link to="/our-work/$slug" params={{ slug: p.slug }} aria-label={`View ${p.name} project`}>View Project <ExternalLink /></Link>
            : p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">View Project <ExternalLink /></a>
            : <Link to="/our-work" hash={p.name.toLowerCase().replaceAll(" ", "-")}>View Project <ExternalLink /></Link>}
        </Button>
        {detailed && !p.link && <p className="mt-3 text-xs text-muted-foreground">Live website link not yet provided.</p>}
      </div>
    </article>
  );
}

export function TestimonialGrid() {
  if (TESTIMONIALS.length === 0) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {["Google", "Facebook"].map((src) => (
          <div key={src}>
            <h3 className="font-display text-lg font-bold uppercase italic text-navy">{src} Reviews</h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <Placeholder key={i} label={`${src} review screenshot — upload coming soon`} className="min-h-44" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name + t.business} className="card-site">
          <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
          <blockquote className="mt-3 text-foreground">{t.review}</blockquote>
          <figcaption className="mt-5 flex items-center gap-3">
            {t.photo && <img src={t.photo} alt={t.business} className="h-10 w-10 rounded-full object-cover" loading="lazy" />}
            <span>
              <span className="block font-bold text-navy">{t.name}</span>
              <span className="text-sm text-muted-foreground">{t.business}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
