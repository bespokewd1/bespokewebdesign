import customWeb from "@/assets/service-squad-website.webp.asset.json";
import localSearch from "@/assets/service-maps-phone.webp.asset.json";
import socialContent from "@/assets/service-iron-fist-post.webp.asset.json";
import websiteSupport from "@/assets/service-website-support.webp.asset.json";
import { CLIENT_LOGOS } from "@/content/client-logos";

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "website-development": { src: customWeb.url, alt: "Squad V Plumbing and Heating website and social post displayed on a laptop and phone" },
  seo: { src: localSearch.url, alt: "Example Google local search and Edmonton map displayed on a phone" },
  "social-media": { src: socialContent.url, alt: "Iron Fist Transport branded social media post featuring forklift delivery" },
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
  </figure>;
}
