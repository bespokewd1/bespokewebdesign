import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ServicePhotoCarousel } from "@/components/site/ServicePhotoCarousel";
import moffettDesktop from "@/assets/pagespeed-moffett-desktop.png.asset.json";
import moffettMobile from "@/assets/pagespeed-moffett-mobile.png.asset.json";
import stoneDesktop from "@/assets/pagespeed-stone-desktop.png.asset.json";
import spaDesktop from "@/assets/pagespeed-spa-desktop.png.asset.json";

const RESULTS = [
  { src: moffettDesktop.url, alt: "Google PageSpeed Insights desktop report for Moffett Delivery: 100 Performance, Accessibility, Best Practices and SEO" },
  { src: moffettMobile.url, alt: "Google PageSpeed Insights mobile report for Moffett Delivery: 100 Performance, Accessibility, Best Practices and SEO" },
  { src: spaDesktop.url, alt: "Google PageSpeed Insights desktop report for a massage client website: 100 in all four categories" },
  { src: stoneDesktop.url, alt: "Google PageSpeed Insights desktop report for a massage client website: 100 Performance, 96 Accessibility, 100 Best Practices, 100 SEO" },
];

const POINTS = [
  { title: "More than good looks", text: "A website should look great to people and be easy for Google and AI search tools to read, so they understand what you do and where you serve." },
  { title: "Custom code, carefully tuned", text: "We build each site by hand and take the time to optimize it for both mobile and desktop. That is how our client sites reach scores like these." },
  { title: "Hard to match with DIY", text: "Many DIY, AI-builder, Squarespace and plugin-heavy WordPress sites struggle to reach this level because of extra code they carry." },
];

export function TechnicalSeoProof() {
  return <section id="technical-seo" className="section scroll-mt-20">
    <div className="container-site grid items-center gap-10 lg:grid-cols-2">
      <div>
        <span className="eyebrow">Technical foundation</span>
        <h2 className="mt-3 text-3xl text-navy md:text-4xl">100/100 on Google's own test. A foundation for serious businesses.</h2>
        <ul className="mt-6 space-y-5">{POINTS.map(p => <li key={p.title} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" /><div><h3 className="text-lg text-navy">{p.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p></div></li>)}</ul>
        <div className="mt-8 rounded-lg border bg-surface p-5">
          <h3 className="text-lg text-navy">Test your website yourself</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">PageSpeed Insights is Google's free, official tool. Enter your website address and check both the Mobile and Desktop tabs. If your scores are low, we're happy to explain what they mean.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="btn btn-primary h-auto"><a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">Run the free Google test<ArrowUpRight /></a></Button>
            <Button asChild variant="outline" className="h-auto"><Link to="/contact" hash="review">Get a free website review<ArrowRight /></Link></Button>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Scores are real client results from Google PageSpeed Insights at the time of testing. A strong score supports SEO but does not guarantee rankings.</p>
      </div>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-card shadow-lg">
        <ServicePhotoCarousel photos={RESULTS} label="PageSpeed result" interval={4000} />
      </div>
    </div>
  </section>;
}
