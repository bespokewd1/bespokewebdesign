import customWeb from "@/assets/service-custom-web.webp.asset.json";
import localSearch from "@/assets/service-local-search.webp.asset.json";
import socialContent from "@/assets/service-social-content.webp.asset.json";
import websiteSupport from "@/assets/service-website-support.webp.asset.json";
import { CLIENT_LOGOS } from "@/content/client-logos";

const SERVICE_IMAGES: Record<string, { src: string; alt: string; mockup?: boolean }> = {
  "website-development": { src: customWeb.url, alt: "Illustrative custom trades website displayed on a laptop and phone", mockup: true },
  seo: { src: localSearch.url, alt: "Illustrative local map search and business profile on a phone", mockup: true },
  "social-media": { src: socialContent.url, alt: "Illustrative Squad V branded plumbing posts on a laptop and phone, not screenshots of published posts", mockup: true },
  maintenance: { src: websiteSupport.url, alt: "Graphic illustration of a headset-wearing website support specialist" },
};
const BRAND_LOGOS = CLIENT_LOGOS.filter(logo => ["Squad V Plumbing and Heating", "Rod's Electrical", "Glow and Relax", "Stone Massage"].includes(logo.name));

export function ServiceGraphic({ id }: { id: string }) {
  if (id === "branding") return <div className="service-brand-art" role="group" aria-label="Existing client logos">
    {BRAND_LOGOS.map(logo => <div key={logo.name} className="service-brand-logo"><img src={logo.src} alt={logo.name} width={276} height={168} loading="lazy" decoding="async" /></div>)}
  </div>;
  const image = SERVICE_IMAGES[id];
  if (!image) return null;
  return <figure className="service-card-art">
    <img src={image.src} alt={image.alt} width={960} height={540} loading="lazy" decoding="async" />
    {image.mockup && <figcaption className="service-art-caption">Illustrative mockup</figcaption>}
  </figure>;
}
