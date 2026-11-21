import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, ChevronDown, Facebook, ArrowUp, Star } from "lucide-react";
import googleG from "@/assets/google-g.png.asset.json";
import { REVIEW_LINKS, NAV, MOBILE_NAV, MOBILE_SERVICES, SITE, CTA_PRIMARY, CTA_SECONDARY } from "@/content/site";
import logoAsset from "@/assets/bespoke-reference-logo-correct.png.asset.json";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { WhatsAppContact } from "@/components/site/WhatsAppContact";
import { EdmontonWeather } from "@/components/site/EdmontonWeather";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" hash="top" resetScroll className="flex shrink-0 items-center gap-2" aria-label="Bespoke Web Design home">
      <img src={logoAsset.url} alt="" width="40" height="40" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
      <span className={`brand-name text-[19px] sm:text-[22px] ${light ? "text-navy-foreground" : "text-navy"}`}>Bespoke<span className="text-accent">Web</span>Design</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServices, setDesktopServices] = useState(false);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesOpenedByHover = useRef(false);
  const cancelServicesClose = () => {
    if (servicesCloseTimer.current !== null) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
  };
  const enterServices = () => {
    cancelServicesClose();
    servicesOpenedByHover.current = true;
    setDesktopServices(true);
  };
  const leaveServices = () => {
    cancelServicesClose();
    // The dropdown is portalled: allow the pointer to cross into it.
    servicesCloseTimer.current = setTimeout(() => setDesktopServices(false), 200);
  };
  const changeServicesOpen = (nextOpen: boolean) => {
    cancelServicesClose();
    setDesktopServices(nextOpen);
  };
  useEffect(() => () => {
    if (servicesCloseTimer.current !== null) clearTimeout(servicesCloseTimer.current);
  }, []);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/" || location.hash !== "top") return;
    const frame = requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
  const active = (to: string, hash?: string) => location.pathname === to && location.hash === (hash || "");
  const menuLinkClass = "flex min-h-11 min-w-0 items-center border-b px-3 py-3 text-base font-semibold text-navy hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring";
  return (
    <><div id="top" aria-hidden="true" /><header className="sticky top-0 z-40 border-b bg-surface/95 backdrop-blur">
      <div className="container-site grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <Logo />
        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-0 md:flex xl:gap-1">
            {NAV.map(n => { const hash = "hash" in n ? n.hash : ""; return n.to === "/services" ? <div key={n.to} onMouseEnter={enterServices} onMouseLeave={leaveServices}><DropdownMenu modal={false} open={desktopServices} onOpenChange={changeServicesOpen}><DropdownMenuTrigger asChild><Button variant="ghost" onKeyDown={() => { servicesOpenedByHover.current = false; cancelServicesClose(); }} className="h-11 gap-1 px-1.5 text-[13px] font-semibold text-navy lg:px-2.5 lg:text-sm">Services<ChevronDown className="size-3.5" /></Button></DropdownMenuTrigger><DropdownMenuContent align="start" sideOffset={0} onMouseEnter={enterServices} onMouseLeave={leaveServices} onCloseAutoFocus={event => { if (servicesOpenedByHover.current) event.preventDefault(); }} className="w-72 max-w-[calc(100vw-24px)]">{MOBILE_SERVICES.map(service => <DropdownMenuItem key={service.label} asChild className="min-h-11"><Link to={service.to} hash={"hash" in service ? service.hash : ""}>{service.label}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu></div> : <Link key={`${n.to}${hash}`} to={n.to} hash={hash} aria-current={active(n.to, hash) ? "page" : undefined} className={`whitespace-nowrap rounded px-1.5 py-2 text-[13px] font-semibold lg:px-2.5 lg:text-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-ring ${active(n.to, hash) ? "text-accent" : "text-navy"}`}>{n.label}</Link>; })}
            <Button asChild className="btn btn-primary ml-2 hidden h-auto py-2 text-sm xl:inline-flex"><Link to="/contact" hash="review">{CTA_PRIMARY}</Link></Button>
          </nav>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" className="h-11 shrink-0 gap-1.5 px-2 text-navy md:hidden" aria-label="Open menu"><Menu className="size-5" /><span>Menu</span></Button></SheetTrigger>
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
    </header></>
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
    <>
    <section aria-label="Client reviews" className="border-t border-border bg-secondary">
      <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
        <p className="text-sm font-medium text-foreground">Supporting real, growing businesses in Edmonton and area.</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["Google", "Facebook"] as const).map(p => (
            <a key={p} href={REVIEW_LINKS[p]} target="_blank" rel="noopener noreferrer" aria-label={`${p} reviews, rated 5.0 out of 5`} className="inline-flex items-center gap-3 rounded-full border border-border bg-background py-2 pl-2 pr-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
              <span className="flex size-8 items-center justify-center rounded-full bg-background ring-1 ring-border">
                {p === "Google" ? <img src={googleG.url} alt="" width={20} height={20} /> : <svg viewBox="0 0 24 24" className="size-8" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#1877F2" /><path fill="#fff" d="M15.1 12.6l.4-2.6H13V8.3c0-.7.4-1.4 1.5-1.4h1.1V4.7s-1-.2-2-.2c-2.1 0-3.4 1.2-3.4 3.5V10H8v2.6h2.2V19a8 8 0 0 0 2.8 0v-6.4z" /></svg>}
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span className="flex items-center gap-1.5"><span className="text-base font-bold text-navy">5.0</span><span className="flex text-review-gold">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />)}</span></span>
                <span className="text-xs font-medium text-muted-foreground">{p} Reviews</span>
              </span>
            </a>
          ))}
          <Link to="/testimonials" className="px-2 text-sm font-semibold text-accent hover:underline">Read all reviews</Link>
        </div>
      </div>
    </section>
    <footer className="bg-navy text-navy-muted">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
          <p className="mt-3 text-sm">Operated by {SITE.operator}.</p>
          {SITE.social.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-fit items-center gap-2 text-sm hover:text-navy-foreground">Follow us on Facebook <Facebook className="h-4 w-4" aria-hidden="true" /></a>)}
          <EdmontonWeather />
        </div>
        <FooterCol title="Services" links={[
          { label: "Digital Marketing & Plans", to: "/digital-marketing" },
          { label: "Google Ads", to: "/digital-marketing", hash: "google-ads" },
          { label: "Website Design", to: "/website-design" },
          { label: "SEO Services", to: "/seo" },
          { label: "Google Business Profile", to: "/services", hash: "google-business" },
          { label: "Social Media Marketing", to: "/services", hash: "social-media" },
          { label: "Branding", to: "/services", hash: "branding" },
          { label: "AI & Automation", to: "/ai-automation" },
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
        <p className="container-site pt-5 pb-28 text-xs lg:pb-8">© {new Date().getFullYear()} {SITE.operator.replace(/\.$/, "")}. All rights reserved.</p>
      </div>
      <BackToTop />
      <WhatsAppContact />
    </footer>
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  if (!visible) return null;

  return <Button
    variant="ghost"
    size="icon"
    className="back-to-top fixed z-30 size-11 rounded-full border border-border bg-navy text-navy-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring"
    aria-label="Back to top"
    title="Back to top"
    onClick={() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    }}
  ><ArrowUp className="size-5" aria-hidden="true" /></Button>;
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
