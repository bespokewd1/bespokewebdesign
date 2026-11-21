import { useEffect, useRef, type CSSProperties } from "react";
import { Palette, Monitor, MapPin, Share2, ChartNoAxesCombined, Target, Hammer, CheckCircle2, RefreshCw } from "lucide-react";

const PIECES = [
  { icon: Palette, title: "Brand", text: "A professional first impression." },
  { icon: Monitor, title: "Custom website", text: "Fast, clear and built to get calls." },
  { icon: MapPin, title: "Google & local SEO", text: "Found when locals need you now." },
  { icon: Share2, title: "Social media", text: "Proof of real jobs and happy clients." },
  { icon: ChartNoAxesCombined, title: "Data", text: "Shows what brings in calls." },
];
const LOOP = [
  { icon: Target, title: "We get your goals", text: "Your most profitable jobs and service areas." },
  { icon: Hammer, title: "We build it", text: "Website, SEO, social and local visibility — handled." },
  { icon: CheckCircle2, title: "You approve", text: "Full control, none of the heavy lifting." },
  { icon: RefreshCw, title: "We track & repeat", text: "Monthly review of the data, then improve." },
];

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("dm-reveal-ready");
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("dm-in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function MarketingIntro() {
  const pieces = useReveal<HTMLDivElement>();
  const loop = useReveal<HTMLOListElement>();
  return <section className="section bg-surface">
    <div className="container-site">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">What digital marketing actually means</span>
        <h2 className="mt-3 text-3xl leading-tight text-navy md:text-5xl">It's not just posting on social media. It's one connected growth engine.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">"Charles, we posted on Facebook for two months and nothing happened." I hear this a lot. Random posts aren't a strategy. Real marketing is a system where every piece does its job.</p>
      </div>
      <div ref={pieces} className="dm-pieces mt-12">
        {PIECES.map((p, i) => <div key={p.title} className="dm-piece" style={{ "--i": i } as CSSProperties}>
          <span className="dm-piece-icon"><p.icon aria-hidden="true" /></span>
          <h3 className="mt-3 text-base font-bold text-navy">{p.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
        </div>)}
      </div>
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h3 className="text-2xl text-navy md:text-3xl">Marketing is never a one-time project.</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Google changes, competitors advertise and customers expect fast answers. It takes consistency and data-driven updates. If you're running crews and quoting jobs all day, you don't have 15 hours a week for marketing. That's where we step in.</p>
          <p className="mt-5 font-semibold text-navy">You focus on running your business. We handle your marketing.</p>
          <p className="mt-2 font-display font-bold italic text-accent">— Charles, Founder</p>
        </div>
        <ol ref={loop} className="dm-loop" aria-label="How we work, step by step">
          {LOOP.map((s, i) => <li key={s.title} className="dm-loop-step" style={{ "--i": i } as CSSProperties}>
            <span className="dm-loop-num">{i + 1}</span>
            <s.icon className="h-6 w-6 text-accent" aria-hidden="true" />
            <h4 className="mt-3 font-bold text-navy">{s.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </li>)}
        </ol>
      </div>
    </div>
  </section>;
}
