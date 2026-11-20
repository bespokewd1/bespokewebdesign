import localSearch from "@/assets/service-maps-phone.webp.asset.json";
import websiteSupport from "@/assets/service-website-support.webp.asset.json";
import { CLIENT_LOGOS } from "@/content/client-logos";
import { ServicePhotoCarousel } from "@/components/site/ServicePhotoCarousel";
import { SOCIAL_PHOTOS, WEBSITE_PHOTOS } from "@/content/service-photos";

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  seo: { src: localSearch.url, alt: "Example Google local search and Edmonton map displayed on a phone" },
  maintenance: { src: websiteSupport.url, alt: "Graphic illustration of a headset-wearing website support specialist" },
};
const logoGroup = (names: string[]) => CLIENT_LOGOS.filter(logo => names.includes(logo.name));
const BRAND_SLIDES = [
  logoGroup(["Squad V Plumbing and Heating", "Rod's Electrical", "Glow and Relax", "Stone Massage"]),
  logoGroup(["Montano Plumbing & Contracting Ltd.", "Solid Concrete Coating Ltd.", "D/A Specs", "Mist'r Service, LLC"]),
].map((logos, index) => ({
  src: `brand-logos-${index + 1}`,
  alt: logos.map(logo => logo.name).join(", "),
  content: <div className="service-brand-art" role="group" aria-label={`Client logos: ${logos.map(logo => logo.name).join(", ")}`}>
    {logos.map(logo => <div key={logo.name} className="service-brand-logo"><img src={logo.src} alt={logo.name} width={276} height={168} loading="lazy" decoding="async" /></div>)}
  </div>,
}));

export function ServiceGraphic({ id }: { id: string }) {
  if (id === "social-media") return <ServicePhotoCarousel photos={SOCIAL_PHOTOS} label="Social media marketing" interval={3000} />;
  if (id === "website-development") return <ServicePhotoCarousel photos={WEBSITE_PHOTOS} label="Custom web design" interval={4000} />;
  if (id === "branding") return <ServicePhotoCarousel photos={BRAND_SLIDES} label="Branding and content" interval={4000} />;
  const image = SERVICE_IMAGES[id];
  if (!image) return null;
  return <figure className="service-card-art">
    <img src={image.src} alt={image.alt} width={960} height={540} loading="lazy" decoding="async" />
  </figure>;
}
