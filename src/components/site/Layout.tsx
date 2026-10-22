import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { NAV, SITE, CTA_PRIMARY, CTA_SECONDARY } from "@/content/site";
import logoAsset from "@/assets/bespoke-reference-logo-correct.png.asset.json";
import { Button } from "@/components/ui/button";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Bespoke Web Design home">
      <img src={logoAsset.url} alt="" width="40" height="40" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
      <span className={`brand-name text-[19px] sm:text-[22px] ${light ? "text-navy-foreground" : "text-navy"}`}>Bespoke<span className="text-accent">Web</span>Design</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-surface/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="whitespace-nowrap text-sm font-semibold text-foreground hover:text-navy"
              activeProps={{ className: "text-navy underline decoration-accent decoration-2 underline-offset-8" }}
              activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="btn btn-primary hidden h-auto !px-4 !py-2.5 text-sm xl:inline-flex"><Link to="/contact" hash="review">{CTA_PRIMARY}</Link></Button>
          <Button variant="ghost" size="icon" className="text-navy lg:hidden" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-surface lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 font-semibold text-navy last:border-0">
                {n.label}
              </Link>
            ))}
            <Link to="/website-design" onClick={() => setOpen(false)} className="border-b py-3 font-semibold text-navy">Website Design</Link>
            <Link to="/seo" onClick={() => setOpen(false)} className="py-3 font-semibold text-navy">SEO & Google Marketing</Link>
            <Link to="/contact" hash="review" onClick={() => setOpen(false)} className="btn btn-primary mt-3">{CTA_PRIMARY}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string; hash?: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-navy-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} {...(l.hash ? { hash: l.hash } : {})} className="text-sm text-navy-muted hover:text-navy-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
          <p className="mt-4 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-accent" /> {SITE.location}</p>
        </div>
        <FooterCol title="Services" links={[
          { label: "Digital Marketing & Plans", to: "/digital-marketing" },
          { label: "Google Ads", to: "/digital-marketing", hash: "google-ads" },
          { label: "Website Design", to: "/website-design" },
          { label: "SEO Services", to: "/seo" },
          { label: "Google Business Profile", to: "/services", hash: "google-business" },
          { label: "Social Media Marketing", to: "/services", hash: "social-media" },
          { label: "Branding", to: "/services", hash: "branding" },
        ]} />
        <FooterCol title="Industries" links={[
          { label: "Plumbing", to: "/industries", hash: "plumbing" },
          { label: "Electrical", to: "/industries", hash: "electrical" },
          { label: "Contractors", to: "/industries", hash: "contractors" },
          { label: "Transportation", to: "/industries", hash: "transportation" },
          { label: "Service Businesses", to: "/industries", hash: "services" },
        ]} />
        <FooterCol title="Company" links={[
          { label: "About", to: "/contact" },
          { label: "Our Work", to: "/our-work" },
          { label: "Contact", to: "/contact", hash: "review" },
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Terms", to: "/terms" },
        ]} />
      </div>
      <div className="border-t border-navy-soft">
        <p className="container-site py-5 text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-site py-16 md:py-24">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-navy-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center = false }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function CtaBand({ title = "Let's Talk About Your Business.", text = "Book a free, no-pressure review of your website and online presence.", button = CTA_PRIMARY }: { title?: string; text?: string; button?: string }) {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-3xl bg-navy px-6 py-12 text-center text-navy-foreground md:px-12 md:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" hash="review" className="btn btn-primary">{button}</Link>
            <Link to="/our-work" className="btn btn-outline-light">{CTA_SECONDARY}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder-box ${className}`} role="img" aria-label={`Placeholder: ${label}`}>{label}</div>;
}
