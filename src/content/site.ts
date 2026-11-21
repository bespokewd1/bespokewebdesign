import squadWebShot from "@/assets/service-squad-website.webp.asset.json";
import glowWebShot from "@/assets/glow-relax-website.webp.asset.json";
import stoneWebShot from "@/assets/stone-massage-website.webp.asset.json";
import imassageWebShot from "@/assets/imassage-website.webp.asset.json";
import kmsWebShot from "@/assets/kms-website.webp.asset.json";
import rodsLogoShot from "@/assets/client-rods-electrical.webp.asset.json";
import ironFistShot from "@/assets/iron-fist-trucking.webp.asset.json";
// =============================================================
import type { Project } from "@/lib/portfolio";
import { featuredPortfolio } from "@/lib/portfolio";
import { GOOGLE_REVIEWS, FACEBOOK_REVIEWS } from "@/content/reviews";
// EDITABLE SITE CONTENT — update text, prices, projects, and
// contact details here. Leave a value as "" to hide it.
// =============================================================

export const SITE = {
  name: "Bespoke Web Design",
  operator: "Bespoke Marketing Ltd.",
  // TODO: replace with the real live domain (used for canonical URLs, sitemap, structured data)
  url: "https://bespokewebdesign.ca",
  location: "Edmonton, Alberta, Canada",
  city: "Edmonton",
  region: "Alberta",
  // TODO: add real contact details. Empty values show a "coming soon" placeholder.
  email: "bespokewd1@gmail.com",
  calendly: "https://calendly.com/arjiv28/30min",
  phone: "",
  // International digits only; leave empty until a verified WhatsApp business number is supplied.
  whatsappNumber: "",
  // Only add verified profile URLs.
  social: [{ label: "Facebook", href: "https://www.facebook.com/bespokewebdesignEdmonton/" }] as { label: string; href: string }[],
  description:
    "Complete digital marketing for Edmonton and Alberta trades and service businesses.\u00a0\n\n\nFrom professional websites and local SEO to Google Business Profile management, branding, and social media—we bring your online marketing together under one trusted partner.",
};

export const CTA_PRIMARY = "Get a Free Website Review";
export const CTA_SECONDARY = "See Our Work";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/digital-marketing", label: "Digital Marketing" },
  { to: "/", hash: "plans", label: "Pricing" },
  { to: "/our-work", label: "Our Work" },
  { to: "/contact", label: "About & Contact" },
] as const;

export const MOBILE_SERVICES = [
  { label: "All Services", to: "/services" },
  { label: "Custom Website Design", to: "/services", hash: "website-development" },
  { label: "Local SEO", to: "/services", hash: "seo" },
  { label: "Google Business Profile", to: "/services", hash: "google-business" },
  { label: "Social Media Marketing", to: "/services", hash: "social-media" },
  { label: "Branding & Content", to: "/services", hash: "branding" },
  { label: "Website Maintenance & Support", to: "/services", hash: "maintenance" },
  { label: "Google Ads Management", to: "/digital-marketing", hash: "google-ads" },
  { label: "AI & Automation", to: "/ai-automation" },
] as const;

export const MOBILE_NAV = [
  { label: "Our Work", to: "/our-work" },
  { label: "Pricing", to: "/", hash: "plans" },
  { label: "About Us", to: "/contact" },
  { label: "Contact", to: "/contact", hash: "review" },
] as const;

export type IconName =
  | "palette" | "monitor" | "map" | "share" | "search" | "wrench"
  | "droplet" | "zap" | "hardhat" | "hammer" | "truck" | "store";

export const HOME_SERVICES: { icon: IconName; title: string; text: string; id: string }[] = [
  { icon: "monitor", title: "Custom Website Design", id: "website-development", text: "A 100% custom-built website that clearly shows your services and makes it easy to get in touch." },
  { icon: "map", title: "Local SEO & Google Business Profile", id: "seo", text: "Help customers find and understand your business on Google Search and Maps." },
  { icon: "share", title: "Social Media Marketing", id: "social-media", text: "We keep your profiles active and professional with real project photos, so you never look closed or forgotten." },
  { icon: "palette", title: "Branding & Content", id: "branding", text: "A consistent identity, clear writing and branded graphics that make your business look professional." },
  { icon: "wrench", title: "Website Maintenance & Support", id: "maintenance", text: "Keep your website current with ongoing care and updates within your agreed services." },
];

export const SERVICES: {
  id: string; icon: IconName; title: string; what: string; why: string; help: string[];
}[] = [
  {
    id: "branding", icon: "palette", title: "Branding and Logo Design",
    what: "Your brand is how customers recognize you — your logo, colours, fonts, and the way your business looks on trucks, uniforms, quotes, and online.",
    why: "A clean, consistent look makes a business feel established and trustworthy before a customer ever picks up the phone.",
    help: ["Logo design or refresh", "Colour and font selection", "Simple brand guidelines", "Business cards and social profile graphics"],
  },
  {
    id: "website-development", icon: "monitor", title: "Custom Website Development",
    what: "A website built around your services, your area, and the way your customers actually contact you.",
    why: "Your website is often the first place a customer checks after finding you on Google. It should clearly explain what you do and make it easy to reach you.",
    help: ["Custom design (no cookie-cutter templates)", "Mobile-friendly, fast-loading pages", "Clear service pages and contact forms", "SEO-friendly structure from day one"],
  },
  {
    id: "seo", icon: "search", title: "Search Engine Optimization",
    what: "SEO is the work of helping search engines understand your website so it can show up for relevant searches.",
    why: "Organic search brings in customers who are already looking for your services — without paying for every click.",
    help: ["Keyword and competitor research", "Page titles, descriptions, and headings", "Technical fixes and site speed", "Ongoing content improvements"],
  },
  {
    id: "google-business", icon: "map", title: "Google Business Profile Management",
    what: "Your Google Business Profile is the listing that shows up on Google Maps and in local search results.",
    why: "For local trades and service businesses, this listing is often where customers decide who to call.",
    help: ["Profile setup and verification support", "Accurate services, hours, and service areas", "Photo and post updates", "Guidance on asking for reviews"],
  },
  {
    id: "social-media", icon: "share", title: "Social Media Management",
    what: "Regular, professional posts that show your work and keep your business visible.",
    why: "Active profiles show customers you're busy, reliable, and proud of your work.",
    help: ["Content planning", "Project highlight posts", "Branded graphics", "Consistent posting schedule"],
  },
  {
    id: "maintenance", icon: "wrench", title: "Website Maintenance and Ongoing Marketing",
    what: "Ongoing care for your website and online presence after launch.",
    why: "Websites need updates, security care, and fresh content to keep performing well over time.",
    help: ["Content and photo updates", "Security and software updates", "Performance checks", "Regular progress reviews"],
  },
];

export const INDUSTRIES: { id: string; icon: IconName; name: string; short: string; needs: string }[] = [
  {
    id: "plumbing", icon: "droplet", name: "Plumbing",
    short: "Get found when homeowners search for a plumber nearby.",
    needs: "Plumbing customers often search in a hurry. A clear Google Business Profile with accurate service areas and hours, a website with separate pages for services like drain cleaning or water heaters, and genuine reviews help you get the call.",
  },
  {
    id: "electrical", icon: "zap", name: "Electrical",
    short: "Show residential and commercial clients you're licensed and reliable.",
    needs: "Electrical work is about trust and safety. Clearly listing your qualifications, residential versus commercial services, and real project photos helps customers feel confident hiring you.",
  },
  {
    id: "contractors", icon: "hardhat", name: "General Contracting",
    short: "Present your projects and process professionally to win bigger jobs.",
    needs: "Contractors compete on reputation. A strong project gallery, a clear explanation of how you work, and consistent branding across your site, trucks, and Google profile help you stand out for larger projects.",
  },
  {
    id: "renovations", icon: "hammer", name: "Renovations",
    short: "Let your before-and-after photos do the selling.",
    needs: "Renovation customers want to see your work. Before-and-after project photography, service pages for kitchens, basements, or bathrooms, and regular social posts showing jobs in progress build confidence.",
  },
  {
    id: "transportation", icon: "truck", name: "Transportation & Logistics",
    short: "Look established to shippers, brokers, and drivers.",
    needs: "Trucking and logistics companies are often vetted online by shippers and potential drivers. A professional website that explains your lanes, fleet, and capabilities — plus a careers section — makes your company easier to trust.",
  },
  {
    id: "services", icon: "store", name: "Local Service Businesses",
    short: "From clinics to cleaners, a stronger local presence for your business.",
    needs: "Massage clinics, wellness businesses, and other local services rely on local search and reviews. Easy online booking or contact options, an up-to-date Google profile, and a friendly, clear website make the difference.",
  },
];

// PORTFOLIO — add more objects to this list to show more projects.
// image: path to a screenshot (e.g. "/images/projects/iron-fist.jpg"); leave "" to show a placeholder.
// Six empty social slots per client are editable here; only real images are rendered.
const emptySocialPosts = () => Array.from({ length: 6 }, (_, i) => ({ image: "", alt: `Social Post ${String(i + 1).padStart(2, "0")}` }));
export const PROJECTS: Project[] = [
  { name: "Squad V Plumbing", slug: "squad-v-plumbing", industry: "Plumbing & Gasfitting", category: "Trades", services: ["Full Digital Marketing"], description: "Website project for Squad V Plumbing, a plumbing and gasfitting business.", image: squadWebShot.url, link: "https://www.squadvplumbing.ca/", facebookUrl: "https://www.facebook.com/squadvplumbing", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "", publicationStatus: "published" },
  { name: "KMS Plumbing", industry: "Plumbing", services: ["Client project"], description: "Project details and screenshot coming soon.", image: kmsWebShot.url, link: "" },
  { name: "Glow & Relax", slug: "glow-relax", industry: "Massage & Beauty", category: "Wellness", services: ["Full Digital Marketing"], description: "Website project for Glow & Relax, a massage and beauty business.", image: glowWebShot.url, link: "https://glowandrelax.ca/", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "", publicationStatus: "published" },
  { name: "Bespoke Music App", industry: "Music App", services: ["Own project"], description: "Project details and screenshot coming soon.", image: "", link: "", ownedProject: true },
  { name: "Rod's Electrical", slug: "rods-electrical", industry: "Electrical Services", category: "Trades", services: ["Web Design & Development", "Local SEO"], description: "Website project for Rod's Electrical, an electrical services business.", image: rodsLogoShot.url, link: "https://rodselectrical.com/", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "", publicationStatus: "published" },
  {
    name: "Iron Fist Transport Ltd.", slug: "iron-fist-transport", category: "Transportation", publicationStatus: "published", featured: true,
    industry: "Transportation & Logistics",
    services: ["Website development", "SEO-focused service content", "Digital marketing foundation"],
    description: "A professional website for a transportation and logistics company, built to clearly present their services and give them a solid foundation for ongoing digital marketing.",
    image: ironFistShot.url,
    link: "https://ironfisttransport.ca/", facebookUrl: "https://www.facebook.com/ironfisttransport", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "",
  },
  {
    name: "Stone Massage",
    slug: "stone-massage", category: "Wellness", publicationStatus: "published", featured: true, industry: "Massage & Wellness",
    services: ["Website development", "Technical SEO", "Mobile optimization"],
    description: "A clean, mobile-friendly website for a massage therapy clinic, with technical SEO groundwork to help local clients find them.",
    image: stoneWebShot.url,
    link: "https://www.stonemassage.ca/", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "", review: FACEBOOK_REVIEWS.find(review => review.name === "Stone Massage"),
  },
  { name: "iMassage Therapeutic", slug: "imassage-therapeutic", industry: "Massage Therapy", category: "Wellness", services: ["Web Design & Development"], description: "Website project for iMassage Therapeutic, a massage therapy business.", image: imassageWebShot.url, link: "https://imassage-therapeutic.ca/", socialPosts: emptySocialPosts(), brandingImages: [], seoAudit: null, mobileScreenshot: "", publicationStatus: "published", review: GOOGLE_REVIEWS.find(review => review.name === "iMassage Therapeutic Clinique") },
];

export const PORTFOLIO_PROJECTS = PROJECTS.filter(project => project.publicationStatus === "published");
export const TRUSTED_CLIENTS = PORTFOLIO_PROJECTS.filter(project => !project.ownedProject);
export const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured);
// Homepage showcase stays hidden until the owner approves specific projects for it.
export const HOME_FEATURED_PROJECTS = featuredPortfolio(PROJECTS.filter(project => project.homeApproved));
export const REVIEW_LINKS = {
  Google: "https://maps.app.goo.gl/KmQRwn9H6c6U74Zm7",
  Facebook: "https://www.facebook.com/bespokewebdesignEdmonton/",
};
export const HOME_MEDIA = { ownerPhoto: "", googleReviewUrl: REVIEW_LINKS.Google, reviewScreenshots: [] as { image: string; alt: string }[] };
// Genuine five-star reviews on both platforms confirmed by the business owner.
export const REVIEW_PROOF = [
  { platform: "Google", stars: 5 },
  { platform: "Facebook", stars: 5 },
] as const;
// The single done-for-you process shown on the homepage (replaces the separate SEO steps and first-year timeline).
export const MARKETING_PHASES = [
  { title: "Assess Your Business", text: "We learn your services, customers and goals, then run a free check of your website and Google presence for you — explained in plain language, no jargon." },
  { title: "Build a 100% Custom Website", text: "A fast, mobile-first website built from scratch — no templates — structured for SEO and designed to turn visitors into calls and quote requests." },
  { title: "Optimize & Manage Your Google Business Profile", text: "We set up and manage your profile with consistent Name, Address and Phone (NAP) details so customers can find you on Google Maps." },
  { title: "Keep Your Social Media Consistent", text: "Regular, genuine posts that show customers your business is active, professional and trustworthy." },
  { title: "Update Your Site & Research Keywords", text: "We research the services and areas your customers search for, then update your pages and content to match." },
  { title: "Track, Improve & Repeat", text: "Marketing is not a one-time task. Every month we review progress, apply updates and keep improving your online presence." },
] as const;

export const HOME_START_STEPS = [
  { title: "Tell Us About Your Business", text: "Share your current website, services, and goals." },
  { title: "We Build Your Online Presence", text: "We prepare the agreed website and marketing work for your review and approval." },
  { title: "We Manage & Improve", text: "We provide the ongoing services and updates included in your chosen plan." },
] as const;

// Founder section — photo and bio are placeholders until the owner supplies them.
export const FOUNDER = { name: "", title: "Founder", photo: "" };

// TESTIMONIALS — add only genuine reviews. Empty list shows placeholders.
export const TESTIMONIALS: { name: string; business: string; review: string; photo?: string }[] = [];

// PRICING — edit names, prices, and inclusions here.
const PLAN_BRANDING = { title: "Branding", items: ["Custom logo design", "Branded social media themes"] };
const PLAN_WEBSITE = { title: "Professional Website", items: ["100% custom-built professional website", "Mobile-friendly design", "Basic SEO setup"] };
const CAMPAIGN_ITEMS = ["Setup and management of one active Google Search campaign", "One primary business service and agreed target area", "Basic keyword and negative keyword review", "Ad copy and budget-setting optimization", "Regular monitoring and a concise monthly performance summary"];
export const PLANS = [
  {
    name: "Foundation", price: "$245/month", monthlyPrice: 245, socialPosts: 5, channels: 1, platforms: ["Facebook"], seoLevel: "basic", googleSearchCampaigns: 0, tagline: "Build Your Online Foundation",
    groups: [PLAN_BRANDING, PLAN_WEBSITE, { title: "Social Media Management", items: ["5 Facebook posts per month", "Basic content planning", "Branded captions and graphics", "Scheduled publishing"] }, { title: "Monthly Reporting", items: ["Basic monthly summary of your website visitors", "Facebook post reach and engagement at a glance", "Simple, plain-English results you can read in minutes"] }, { title: "Google Ads", items: ["Not included — available as a separately quoted service"] }],
    description: "Ideal for businesses looking to establish a professional online presence.", bestFor: "Great for new and emerging entrepreneurs ready to look professional online and start getting found.", cta: "Request a Quote", featured: false,
  },
  {
    name: "Growth", price: "$499/month", monthlyPrice: 499, socialPosts: 10, channels: 2, platforms: ["Facebook", "Instagram"], seoLevel: "advanced", googleSearchCampaigns: 1, tagline: "Grow Your Online Presence",
    groups: [PLAN_BRANDING, PLAN_WEBSITE, { title: "Social Media Management", items: ["10 total posts per month across Facebook and Instagram", "Personalized monthly content plan", "Branded captions and graphics", "Scheduled publishing", "Client project and promotional content"] }, { title: "Advanced SEO", items: ["Advanced local SEO and ongoing keyword targeting", "Regular on-page updates so Google understands your services and area", "Ongoing speed and search-ranking improvements"] }, { title: "Advanced Reporting & Tracking", items: ["Google Analytics (GA4) setup — see how many people visit, call, or request a quote", "Live Google Looker Studio dashboard — your website, calls and ad results in one easy screen, anytime", "In-depth monthly report in plain English: traffic, rankings, ad results and what we'll improve next"] }, { title: "Google Ads Management", items: CAMPAIGN_ITEMS }],
    description: "Ideal for businesses looking for consistent marketing across multiple channels, plus a focused Google Ads campaign.", bestFor: "Great for businesses ready for aggressive marketing, with a clear strategy and the numbers to prove it.", cta: "Request a Quote", featured: true,
  },
];

export const PLAN_CURRENCY = "CAD";

// Applies only to applicable monthly agreements; detailed terms stay in the service agreement.
export const MARKETING_AGREEMENT = {
  minimumMonths: 12,
  ownershipTransferMonths: 12,
  ownershipRequiresAllPayments: true,
};

export function websiteOwnershipEligible(completedMonths: number, allRequiredPaymentsComplete: boolean) {
  return completedMonths >= MARKETING_AGREEMENT.ownershipTransferMonths
    && (!MARKETING_AGREEMENT.ownershipRequiresAllPayments || allRequiredPaymentsComplete);
}

export const PACKAGE_DETAILS = {
  posts: "Monthly social media posts are the total number of published posts across the platforms included in your package.",
  postCounting: "For clarity, publishing the same content separately to Facebook and Instagram counts as two published posts.",
  socialTitle: "Your Business. Your Photos. Your Story.",
  socialIntro: "Your business has a story worth sharing. We create a personalized content plan around your services, completed projects, promotions, and upcoming events. Share photos or videos of your work, and we'll turn them into professional branded content that showcases your business and builds customer trust.",
  socialSteps: [
    { title: "We Plan", text: "A simple content plan based on your services, goals, and seasonal opportunities." },
    { title: "You Share", text: "Photos or videos of your projects, team, products, events, or promotions, plus accurate business details." },
    { title: "We Create", text: "Branded content, captions, and graphics using your materials." },
    { title: "We Publish", text: "Scheduled posts on the platforms included in your package." },
  ],
  socialScope: "Promotions, seasonal services, company announcements, completed projects, events, and new products or services count toward your existing monthly allowance. We can help identify content ideas using supplied materials. On-site photography, filming, advanced video production, and event attendance are not included unless separately agreed. Extra content requires a separate quote.",
  adsTitle: "Google Ads Management — Without the Confusion",
  adsSubtitle: "We Handle It for You!",
  adsIntro: "Our Growth plan includes the setup and management of one Google Ads campaign to help your business reach potential customers searching for your services.",
  adsStepsTitle: "How it works:",
  adsSteps: [
    "We create, manage, and improve your ads.",
    "You choose your advertising budget.",
    "You pay Google directly. Ad spending is separate from your monthly package.",
    "Need more campaigns? We can provide a custom quote.",
  ],
  adsPricingTitle: "Clear Pricing. No Surprises.",
  adsPricing: "Your monthly plan covers the services included in your package. Additional work, such as extra website pages, major changes, or professional photography, can be quoted separately.",
  adsAgreement: `${MARKETING_AGREEMENT.minimumMonths}-month minimum agreement. After completing your agreement and payments, your website is yours, according to your contract's ownership terms.`,
  adsGoal: "Our goal is simple: You focus on running your business. We handle your marketing.",
  scope: "Every business is different. Your package includes an agreed scope of website development and monthly marketing services. Major website changes, additional campaigns, professional photo or video shoots, and work beyond the package are quoted separately.",
  revisions: "Custom-built websites and logo design do not include unlimited pages or creative revisions. Deliverables and revisions are defined in your agreed scope; monthly post counts are fixed by your selected package.",
};

export const HELP_OPTIONS = [
  "New website", "Website redesign", "SEO", "Google Business Profile",
  "Social media", "Branding / logo", "Not sure yet",
];


export const HOME_FAQS = [
  { question: "How much of my time does this take each month?", paragraphs: ["Less time managing marketing, more time running your business. Share real photos of your work, accurate business details, and quick updates or approvals. We handle the planning, writing, design, and publishing included in your package.", "There's some time together at the start to understand your business. After that, you have one person to contact—not a list of marketing tasks to figure out on your own."] },
  { question: "Will I own my website?", paragraphs: [`Yes. After completing the ${MARKETING_AGREEMENT.ownershipTransferMonths}-month agreement and all required payments, your completed custom-built website becomes yours under your contract's ownership terms. Hosting, maintenance, domains, and transferable assets are governed by the agreement.`] },
  { question: "Why choose done-for-you marketing instead of doing it myself?", paragraphs: ["You don't have to spend your evenings learning website tools, writing posts, or coordinating different providers. Charles brings your website, branding, and agreed marketing services together so your business looks consistent and is easier for customers to understand.", "You set the direction. We handle the agreed work, with one point of contact and fewer decisions on your plate."] },
  { question: "Can we meet in person in Edmonton?", paragraphs: ["Yes. You work directly with Charles, right here in Edmonton. Meeting in person helps us understand your business and goals; phone or video calls work too.", "We put time into preparing for each meeting, so in-person consultations are reserved for business owners ready to invest in their marketing."] },
  { question: `Why a ${MARKETING_AGREEMENT.minimumMonths}-month agreement, and what happens after year one?`, paragraphs: ["Your website and online presence are business assets that need care—not a one-time task. The agreement gives us time to build your custom website and deliver your selected marketing services through predictable monthly payments.", `After completing the ${MARKETING_AGREEMENT.ownershipTransferMonths} months and all required payments, the website is yours under your contract. You can discuss continued marketing support; renewal, cancellation, hosting, and maintenance follow your agreement's terms.`] },
];
