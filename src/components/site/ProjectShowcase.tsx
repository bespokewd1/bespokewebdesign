import { ArrowLeft, ArrowRight, ExternalLink, Star, ThumbsUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Placeholder } from "./Layout";
import { ProjectGallery } from "./ProjectGallery";
import { publishedMedia, verifiedAudit, type Project } from "@/lib/portfolio";
import { REVIEW_LINKS } from "@/content/site";
import googleIcon from "@/assets/google-g.png.asset.json";

export function ProjectShowcase({ project }: { project: Project }) {
  const audit = verifiedAudit(project.seoAudit) ? project.seoAudit : null;
  const social = publishedMedia(project.socialPosts);
  const branding = publishedMedia(project.brandingImages);
  const review = project.review?.paragraphs.length && project.review.screenshot ? project.review : null;
  return <>
    <PageHero eyebrow={project.industry} title={project.name} intro={project.description}>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild className="btn btn-primary h-auto"><a href={project.link} target="_blank" rel="noopener noreferrer">Visit Website <ExternalLink /></a></Button>
        {project.facebookUrl && <Button asChild variant="outline" className="btn btn-outline h-auto"><a href={project.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook <ExternalLink /></a></Button>}
      </div>
    </PageHero>
    <section className="section"><div className="container-site">
      <Button asChild variant="link" className="mb-6 min-h-11 p-0"><Link to="/our-work"><ArrowLeft /> All Projects</Link></Button>
      {project.services.length > 0 && <ul className="mb-8 flex flex-wrap gap-2" aria-label="Verified services delivered">{project.services.map(service => <li key={service} className="rounded bg-muted px-3 py-2 text-sm font-medium text-navy">{service}</li>)}</ul>}
      <h2 className="text-2xl text-navy md:text-3xl">Website Showcase</h2>
      <div className={`mt-6 grid items-start gap-6 ${project.mobileScreenshot ? "lg:grid-cols-[3fr_1fr]" : ""}`}>
        {project.image ? <img src={project.image} alt={`${project.name} desktop website screenshot`} loading="lazy" className="h-auto w-full rounded border" /> : <Placeholder label={`Website screenshot — ${project.name}`} className="aspect-[16/10] w-full" />}
        {project.mobileScreenshot && <img src={project.mobileScreenshot} alt={`${project.name} mobile website screenshot`} loading="lazy" className="mx-auto h-auto w-full max-w-xs rounded border" />}
      </div>
      <Button asChild variant="link" className="mt-4 min-h-11 h-auto whitespace-normal p-0"><a href={project.link} target="_blank" rel="noopener noreferrer">View Live Website <ExternalLink /></a></Button>
      {project.outcomes && project.outcomes.length > 0 && <ul className="mt-6 list-disc space-y-2 pl-5">{project.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>}
    </div></section>
    {social.length > 0 && <section className="section border-t bg-surface"><div className="container-site max-w-4xl"><h2 className="mb-6 text-2xl text-navy md:text-3xl">Social Media &amp; Content</h2><ProjectGallery media={social} label={`${project.name} social media`} /></div></section>}
    {branding.length > 0 && <section className="section border-t"><div className="container-site max-w-4xl"><h2 className="mb-6 text-2xl text-navy md:text-3xl">Branding</h2><ProjectGallery media={branding} label={`${project.name} branding`} /></div></section>}
    {audit && <section className="section border-t bg-surface"><div className="container-site">
      <h2 className="text-2xl text-navy md:text-3xl">Website Quality &amp; Technical Performance</h2>
      <dl className="mt-6 grid gap-6 sm:grid-cols-3">{([
        ["Google Lighthouse SEO Score", audit.seo], ["Performance", audit.performance], ["Accessibility", audit.accessibility],
      ] as const).filter(([, score]) => score !== null).map(([label, score]) => <div key={label}><dt className="text-sm text-muted-foreground">{label}</dt><dd className="mt-2 font-display text-3xl font-bold text-navy">{score}/100</dd></div>)}</dl>
      <p className="mt-6 text-sm text-muted-foreground">Audited {audit.date} · <a className="underline" href={audit.testedUrl} target="_blank" rel="noopener noreferrer">{audit.testedUrl}</a></p>
      <p className="mt-3 text-sm text-muted-foreground">A technical test result, not a guarantee of Google rankings or future scores.</p>
      <img src={audit.screenshot} alt={`${project.name} Google Lighthouse audit report from ${audit.date}`} loading="lazy" className="mt-6 h-auto w-full rounded border" />
    </div></section>}
    {review && <section className="section border-t"><div className="container-site max-w-4xl">
      <h2 className="text-2xl text-navy md:text-3xl">What Our Client Says</h2>
      <figure className="mt-6 border-l-4 border-primary pl-6">
        <div className="flex items-center gap-3">{review.platform === "Google" ? <img src={googleIcon.url} alt="Google" width={24} height={24} /> : <ThumbsUp aria-label="Facebook recommendation" className="size-6 text-primary" />}
          {review.stars !== null && <span className="flex" aria-label={`${review.stars} out of 5 stars`}>{Array.from({ length: review.stars }, (_, i) => <Star key={i} className="size-4 fill-review-gold text-review-gold" aria-hidden="true" />)}</span>}
        </div>
        <blockquote className="mt-5 space-y-4 leading-relaxed">{review.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</blockquote>
        <figcaption className="mt-5 font-semibold text-navy">{review.name} · {review.platform}{review.platform === "Facebook" ? " recommendation" : " review"}</figcaption>
        <Button asChild variant="link" className="mt-3 min-h-11 p-0"><a href={REVIEW_LINKS[review.platform]} target="_blank" rel="noopener noreferrer">Read {review.platform} Reviews <ExternalLink /></a></Button>
      </figure>
    </div></section>}
    <section className="section bg-navy text-navy-foreground"><div className="container-site">
      <h2 className="max-w-2xl text-3xl md:text-4xl">Let's Build Your Online Presence.</h2>
      <p className="mt-4 max-w-2xl text-navy-muted">From websites to local SEO and social media, we help businesses build a professional online presence with ongoing support.</p>
      <Button asChild className="btn btn-primary mt-6 h-auto whitespace-normal"><Link to="/contact" hash="review">Get a Free Marketing Review <ArrowRight /></Link></Button>
    </div></section>
  </>;
}