import shareHome from "@/assets/share-home.jpg.asset.json";
import shareServices from "@/assets/share-services.jpg.asset.json";
import shareDigitalMarketing from "@/assets/share-digital-marketing.jpg.asset.json";
import shareOurWork from "@/assets/share-our-work.jpg.asset.json";
import shareContact from "@/assets/share-contact.jpg.asset.json";
import shareSeo from "@/assets/share-seo.jpg.asset.json";
import shareTestimonials from "@/assets/share-testimonials.jpg.asset.json";
import shareIndustries from "@/assets/share-industries.jpg.asset.json";
import shareWebsiteDesign from "@/assets/share-website-design.jpg.asset.json";
import shareAiAutomation from "@/assets/share-ai-automation.jpg.asset.json";
import projectGlowRelax from "@/assets/share-project-glow-relax.jpg.asset.json";
import projectImassageTherapeutic from "@/assets/share-project-imassage-therapeutic.jpg.asset.json";
import projectIronFistTransport from "@/assets/share-project-iron-fist-transport.jpg.asset.json";
import projectRodsElectrical from "@/assets/share-project-rods-electrical.jpg.asset.json";
import projectSquadVPlumbing from "@/assets/share-project-squad-v-plumbing.jpg.asset.json";
import projectStoneMassage from "@/assets/share-project-stone-massage.jpg.asset.json";

export type SocialPreview = { title: string; description: string; image: string };

/** Dedicated social cards: original brand logo, page-relevant imagery, 1200 × 630. */
export const SOCIAL_PREVIEWS: Partial<Record<string, SocialPreview>> = {
  "/": { title: 'Bespoke Web Design | Marketing for Edmonton Businesses', description: 'Fully managed websites, local SEO and social media for Edmonton trades and service businesses. You run your business; we handle marketing.', image: shareHome.url },
  "/services": { title: 'Marketing Services in Edmonton | Bespoke Web Design', description: 'Explore branding, custom websites, local SEO, Google Business Profile support and social media for Edmonton trades and service businesses.', image: shareServices.url },
  "/digital-marketing": { title: 'Monthly Marketing Plans | Bespoke Web Design Edmonton', description: 'Compare Foundation at $245 CAD/month and Growth at $499 CAD/month. Done-for-you marketing, with Google advertising spend paid separately.', image: shareDigitalMarketing.url },
  "/our-work": { title: 'Real Client Projects | Bespoke Web Design Edmonton', description: 'Explore real websites and marketing work for plumbing, electrical, transportation and massage businesses. See what we build for local clients.', image: shareOurWork.url },
  "/contact": { title: 'Meet Charles & Book a Call | Bespoke Web Design', description: 'Meet your Edmonton marketing partner. Book a discovery call with Charles or request a free review of your website and online presence.', image: shareContact.url },
  "/seo": { title: 'Local SEO & Google Maps | Bespoke Web Design Edmonton', description: 'Help local customers find you with website SEO and Google Business Profile support. See a supplied Google test and learn what it measures.', image: shareSeo.url },
  "/testimonials": { title: 'Genuine Client Reviews | Bespoke Web Design Edmonton', description: 'Read genuine Google reviews and Facebook recommendations from our clients, with original screenshots and their experiences in their own words.', image: shareTestimonials.url },
  "/industries": { title: 'Marketing for Trades & Services | Bespoke Web Design', description: 'Marketing built around Edmonton plumbers, electricians, contractors, transportation companies and local services, including massage businesses.', image: shareIndustries.url },
  "/website-design": { title: 'Custom Websites in Edmonton | Bespoke Web Design', description: 'Custom, mobile-friendly websites that explain your services, build trust and make it easier for local customers to contact your business.', image: shareWebsiteDesign.url },
  "/ai-automation": { title: 'AI for Trades & Clinics | Bespoke Web Design Edmonton', description: 'Explore how AI can help answer enquiries, support bookings and reduce admin. Consult-first options, quoted separately from marketing plans.', image: shareAiAutomation.url },
};

export const PROJECT_SHARE_IMAGES: Partial<Record<string, string>> = {
  "glow-relax": projectGlowRelax.url,
  "imassage-therapeutic": projectImassageTherapeutic.url,
  "iron-fist-transport": projectIronFistTransport.url,
  "rods-electrical": projectRodsElectrical.url,
  "squad-v-plumbing": projectSquadVPlumbing.url,
  "stone-massage": projectStoneMassage.url,
};
