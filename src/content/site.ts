// =============================================================
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
  email: "",
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
  { to: "/industries", label: "Industries" },
  { to: "/our-work", label: "Our Work" },
  { to: "/contact", label: "About & Contact" },
] as const;

export const MOBILE_SERVICES = [
  { label: "All Services", to: "/services" },
  { label: "Website Design", to: "/website-design" },
  { label: "Google & SEO", to: "/seo" },
  { label: "Social Media Marketing", to: "/services", hash: "social-media" },
  { label: "Branding & Design", to: "/services", hash: "branding" },
  { label: "Google Ads Management", to: "/digital-marketing", hash: "google-ads" },
] as const;

export const MOBILE_NAV = [
  { label: "Our Work", to: "/our-work" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/", hash: "plans" },
  { label: "About Us", to: "/contact" },
  { label: "Contact", to: "/contact", hash: "review" },
] as const;

export type IconName =
  | "palette" | "monitor" | "map" | "share" | "search" | "wrench"
  | "droplet" | "zap" | "hardhat" | "hammer" | "truck" | "store";

export const HOME_SERVICES: { icon: IconName; title: string; text: string; id: string }[] = [
  { icon: "monitor", title: "Website Design", id: "website-development", text: "Professional, mobile-friendly websites that make it easy for customers to trust and contact your business." },
  { icon: "map", title: "Google & SEO", id: "seo", text: "Help potential customers discover your business through Google Search and Google Maps." },
  { icon: "share", title: "Social Media Marketing", id: "social-media", text: "Stay visible, share your work, and build relationships with customers through consistent social media content." },
  { icon: "palette", title: "Branding & Design", id: "branding", text: "Create a professional, recognizable business identity across your website and marketing materials." },
  { icon: "search", title: "Google Ads Management", id: "google-ads", text: "Reach potential customers actively searching for your services with professionally managed advertising campaigns." },
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
export const PROJECTS: {
  name: string; industry: string; services: string[]; description: string;
  image: string; link: string; logo?: string; ownedProject?: boolean; featured?: boolean; testimonial?: string; outcomes?: string[];
}[] = [
  { name: "Squad V Plumbing", industry: "Plumbing", services: ["Client project"], description: "Project details and screenshot coming soon.", image: "", link: "" },
  { name: "KMS Plumbing", industry: "Plumbing", services: ["Client project"], description: "Project details and screenshot coming soon.", image: "", link: "" },
  { name: "Glow And Relax", industry: "Wellness", services: ["Client project"], description: "Project details and screenshot coming soon.", image: "", link: "" },
  { name: "Bespoke Music App", industry: "Music App", services: ["Own project"], description: "Project details and screenshot coming soon.", image: "", link: "", ownedProject: true },
  { name: "Rod's Electrical", industry: "Electrical", services: ["Client project"], description: "Project details and screenshot coming soon.", image: "", link: "" },
  {
    name: "Iron Fist Transport",
    featured: true,
    industry: "Transportation & Logistics",
    services: ["Website development", "SEO-focused service content", "Digital marketing foundation"],
    description: "A professional website for a transportation and logistics company, built to clearly present their services and give them a solid foundation for ongoing digital marketing.",
    image: "",
    link: "",
  },
  {
    name: "Stone Massage",
    featured: true,
    industry: "Massage Therapy",
    services: ["Website development", "Technical SEO", "Mobile optimization"],
    description: "A clean, mobile-friendly website for a massage therapy clinic, with technical SEO groundwork to help local clients find them.",
    image: "",
    link: "",
  },
];

export const TRUSTED_CLIENTS = PROJECTS.filter(project => !project.ownedProject);
export const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured);
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
  { title: "Assess Your Business", text: "We learn your services, customers and goals, review your current online presence and local competitors, and test your site's speed with Google's free tool.", tool: { label: "Test Your Site with Google PageSpeed", href: "https://pagespeed.web.dev/" } },
  { title: "Build a 100% Custom Website", text: "A fast, mobile-first website built from scratch — no templates — structured for SEO and designed to turn visitors into calls and quote requests." },
  { title: "Optimize & Manage Your Google Business Profile", text: "We set up and manage your profile with consistent Name, Address and Phone (NAP) details so customers can find you on Google Maps." },
  { title: "Keep Your Social Media Consistent", text: "Regular, genuine posts that show customers your business is active, professional and trustworthy." },
  { title: "Update Your Site & Research Keywords", text: "We research the services and areas your customers search for, then update your pages and content to match." },
  { title: "Track, Improve & Repeat", text: "Marketing is not a one-time task. Every month we review progress, apply updates and keep improving your online presence." },
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
    groups: [PLAN_BRANDING, PLAN_WEBSITE, { title: "Social Media Management", items: ["5 Facebook posts per month", "Basic content planning", "Branded captions and graphics", "Scheduled publishing"] }, { title: "Google Ads", items: ["Not included — available as a separately quoted service"] }],
    description: "Ideal for businesses looking to establish a professional online presence.", cta: "Request a Quote", featured: false,
  },
  {
    name: "Growth", price: "$499/month", monthlyPrice: 499, socialPosts: 10, channels: 2, platforms: ["Facebook", "Instagram"], seoLevel: "basic", googleSearchCampaigns: 1, tagline: "Grow Your Online Presence",
    groups: [PLAN_BRANDING, PLAN_WEBSITE, { title: "Social Media Management", items: ["10 total posts per month across Facebook and Instagram", "Personalized monthly content plan", "Branded captions and graphics", "Scheduled publishing", "Client project and promotional content"] }, { title: "Google Ads Management", items: CAMPAIGN_ITEMS }],
    description: "Ideal for businesses looking for consistent marketing across multiple channels, plus a focused Google Ads campaign.", cta: "Request a Quote", featured: true,
  },
  {
    name: "Advanced", price: "$999/month", monthlyPrice: 999, socialPosts: 15, channels: 3, platforms: ["Facebook", "Instagram", "TikTok"], seoLevel: "advanced", googleSearchCampaigns: 1, tagline: "Expand Your Marketing Reach",
    groups: [PLAN_BRANDING, { title: "Professional Website", items: ["100% custom-built professional website", "Mobile-friendly design"] }, { title: "Advanced SEO", items: ["More comprehensive website SEO improvements", "Technical SEO and content optimization within the agreed scope", "Ongoing SEO strategy and recommendations"] }, { title: "Social Media Management", items: ["15 total posts per month across Facebook, Instagram, and TikTok", "Personalized monthly content plan", "Branded captions and graphics", "Scheduled publishing", "Client project highlights, promotions, and events", "Content tailored to the relevant platforms"] }, { title: "Google Ads Management", items: CAMPAIGN_ITEMS.map(item => item === "Basic keyword and negative keyword review" ? "Keyword and negative keyword review" : item) }],
    description: "Ideal for businesses investing in more comprehensive SEO and wider digital marketing coverage.", cta: "Request a Quote", featured: false,
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
  socialScope: "Promotions, seasonal services, company announcements, completed projects, events, and new products or services count toward your existing monthly allowance. We can help identify content ideas using supplied materials. TikTok depends on suitable client-supplied photos or videos. On-site photography, filming, advanced video production, and event attendance are not included unless separately agreed. Extra content requires a separate quote.",
  adsTitle: "Google Ads Management — Without the Confusion",
  adsSubtitle: "We Handle It for You!",
  adsIntro: "Our Growth and Advanced plans include the setup and management of one Google Ads campaign to help your business reach potential customers searching for your services.",
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
  { question: "Why choose an all-in-one digital marketing agency?", paragraphs: ["Your website, SEO, Google Business Profile, and social media work best when they support a coordinated strategy. With Bespoke, you have one marketing partner, consistent branding, and less time spent managing different providers."] },
  { question: "What makes Bespoke different?", paragraphs: ["We're an Edmonton-based business offering personal service, direct communication, and practical digital marketing for trades and service companies. We focus on long-term relationships rather than simply building a website and moving on."] },
  { question: "What's included in my monthly marketing plan?", paragraphs: ["All packages include a 100% custom-built professional website, branding, SEO, and social media content.", "Growth adds broader social media coverage and one managed Google Search campaign. Advanced includes more comprehensive SEO, additional social media content, and one managed Google Search campaign.", "Each package has clearly defined services and deliverables, so you know what's included in your monthly investment."] },
  { question: "Why focus on organic SEO instead of Google Ads?", paragraphs: ["We prioritize building a strong website and improving organic online visibility over time. Google Ads can provide additional paid visibility, but the advertising budget is separate. Both approaches can complement each other when appropriate."] },
  { question: "Is Google Ads advertising spend included?", paragraphs: ["No. Growth and Advanced include management of one Google Search campaign, but advertising expenditure is separate.", "You control your advertising budget and pay Google directly. We handle the agreed campaign management and optimization."] },
  { question: "Do I need to provide photos for social media?", paragraphs: ["We recommend sharing real photos or videos of your business, services, projects, and events.", "This helps us create more authentic, personalized content rather than relying on generic graphics.", "We handle the content planning and preparation within your package, using the materials you provide."] },
  { question: "How long does SEO take to show results?", paragraphs: ["SEO is an ongoing process, and results vary based on your industry, competition, and website condition. We focus on consistent improvements rather than promising specific rankings or timelines."] },
  { question: `Why is there a ${MARKETING_AGREEMENT.minimumMonths}-month minimum agreement?`, paragraphs: ["Building and maintaining an online presence takes ongoing work. The agreement provides time to establish your website and deliver the marketing services included in your selected package through manageable monthly payments."] },
  { question: `Will I own my website after ${MARKETING_AGREEMENT.ownershipTransferMonths} months?`, paragraphs: [`Yes. Once you complete the ${MARKETING_AGREEMENT.ownershipTransferMonths}-month agreement and all required payments, the completed website becomes yours under the ownership terms of your contract. Hosting, maintenance, domains, and transferable assets are governed by the agreement.`] },
  { question: "What happens after the first year?", paragraphs: ["You can discuss continuing with Bespoke for ongoing SEO, website maintenance, Google Business Profile management, and social media support. Continued services, renewal, and cancellation follow the terms of your agreement."] },
  { question: "Do you only work with Edmonton businesses?", paragraphs: ["We're proudly based in Edmonton and focus primarily on Alberta businesses, but we can work with clients across Canada and beyond."] },
  { question: "How do we get started?", paragraphs: ["Request a free website and marketing review. We'll learn about your business, review your current online presence, and discuss practical marketing options based on your goals and budget."] },
];
