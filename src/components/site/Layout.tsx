import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, ChevronDown, MapPin, Facebook } from "lucide-react";
import { MOBILE_NAV, MOBILE_SERVICES, SITE, CTA_PRIMARY, CTA_SECONDARY } from "@/content/site";
import logoAsset from "@/assets/bespoke-reference-logo-correct.png.asset.json";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WhatsAppContact } from "@/components/site/WhatsAppContact";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const active = (to: string, hash?: string) => location.pathname === to && location.hash === (hash || "");
  const menuLinkClass = "flex min-h-11 min-w-0 items-center border-b px-3 py-3 text-base font-semibold text-navy hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring";
  return (
    <header className="sticky top-0 z-40 border-b bg-surface/95 backdrop-blur">
      <div className="container-site grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <Logo />
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" className="h-11 shrink-0 gap-1.5 px-2 text-navy" aria-label="Open menu"><Menu className="size-5" /><span>Menu</span></Button></SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined} className="mobile-navigation flex h-dvh w-[90%] max-w-sm flex-col gap-0 bg-surface p-0 pt-16 data-[state=open]:duration-200 data-[state=closed]:duration-200 motion-reduce:animate-none motion-reduce:transition-none">
              <SheetTitle className="sr-only">Bespoke Web Design navigation</SheetTitle>
              <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-4 pb-6">
                <Link to="/" onClick={() => setOpen(false)} aria-current={active("/") ? "page" : undefined} className={`${menuLinkClass} ${active("/") ? "bg-muted text-accent" : ""}`}>Home</Link>
                <Button variant="ghost" className="h-auto min-h-11 w-full justify-between rounded-none border-b px-3 py-3 text-base font-semibold text-navy" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="mobile-services">Services<ChevronDown className={`size-5 shrink-0 transition-transform motion-reduce:transition-none ${servicesOpen ? "rotate-180" : ""}`} /></Button>
                <div id="mobile-services" hidden={!servicesOpen} className="border-l-2 border-accent pl-2">
                  {MOBILE_SERVICES.map(n => { const hash = "hash" in n ? n.hash : ""; return <Link key={n.label} to={n.to} hash={hash} onClick={() => setOpen(false)} aria-current={active(n.to, hash) ? "page" : undefined} className={`${menuLinkClass} font-normal ${active(n.to, hash) ? "bg-muted text-accent" : ""}`}>{n.label}</Link>; })}
                </div>
                {MOBILE_NAV.map(n => { const hash = "hash" in n ? n.hash : ""; return <Link key={n.label} to={n.to} hash={hash} onClick={() => setOpen(false)} aria-current={active(n.to, hash) ? "page" : undefined} className={`${menuLinkClass} ${active(n.to, hash) ? "bg-muted text-accent" : ""}`}>{n.label}</Link>; })}
                <div className="mt-6"><Button asChild className="btn btn-primary h-auto w-full whitespace-normal"><Link to="/contact" hash="review" onClick={() => setOpen(false)}>{CTA_PRIMARY}</Link></Button><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A preliminary review of your online presence. No obligation.</p></div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
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
          <p className="mt-3 text-sm">Operated by {SITE.operator}.</p>
          <p className="mt-4 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-accent" /> {SITE.location}</p>
          {SITE.social.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-navy-foreground"><Facebook className="h-4 w-4" aria-hidden="true" />{s.label}</a>)}
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
          { label: "Client Reviews", to: "/testimonials" },
          { label: "Contact", to: "/contact", hash: "review" },
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Terms", to: "/terms" },
        ]} />
      </div>
      <div className="border-t border-navy-soft">
        <p className="container-site py-5 text-xs">© {new Date().getFullYear()} {SITE.operator.replace(/\.$/, "")}. All rights reserved.</p>
      </div>
      <div className="mobile-review-bar fixed inset-x-0 bottom-0 z-30 border-t bg-surface/95 px-5 pt-2 backdrop-blur lg:flex lg:justify-center">
        <Button asChild className="btn btn-primary h-auto w-full text-sm lg:max-w-sm"><Link to="/contact" hash="review">Free Website Review</Link></Button>
      </div>
      <WhatsAppContact />
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
