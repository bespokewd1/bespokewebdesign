import { useEffect, useRef, useState } from "react";

const CATEGORIES = ["Performance", "Accessibility", "Best Practices", "SEO"];

/** Only use with a supplied report showing 100 in each of these categories. */
export function PageSpeedGauges({ source, sourceUrl }: { source: string; sourceUrl: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    let frame = 0;
    let started = false;
    setProgress(0);
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const fraction = Math.min((now - start) / 1100, 1);
        setProgress(Math.round(100 * (1 - (1 - fraction) ** 3)));
        if (fraction < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(element);
    const finish = () => {
      if (!preference.matches) return;
      cancelAnimationFrame(frame);
      observer.disconnect();
      setProgress(100);
    };
    preference.addEventListener("change", finish);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener("change", finish);
    };
  }, []);

  return <div ref={container} className="pagespeed-gauges">
    <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4" aria-label="Recorded Google PageSpeed scores">
      {CATEGORIES.map(category => <div key={category} className="min-w-0 text-center">
        <div className="pagespeed-dial" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="size-full">
            <circle className="pagespeed-track" cx="50" cy="50" r="43" />
            <circle className="pagespeed-ring" cx="50" cy="50" r="43" pathLength="100" strokeDasharray="100" strokeDashoffset={100 - progress} />
          </svg>
          <span className="absolute inset-0 grid place-items-center font-display text-2xl font-bold tabular-nums text-score">{progress}</span>
        </div>
        <p className="mt-2 text-xs font-semibold text-foreground">{category}<span className="sr-only">: 100 out of 100</span></p>
      </div>)}
    </div>
    <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground"><a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-ring">{source}</a> · Recorded test scores, not a ranking guarantee.</p>
  </div>;
}