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
  // Only add verified profile URLs.
  social: [{ label: "Facebook", href: "https://www.facebook.com/bespokewebdesignEdmonton/" }] as { label: string; href: string }[],
  description:
    "Complete digital marketing for Edmonton and Alberta trades and service businesses. From professional websites and local SEO to Google Business Profile management, branding, and social media—we bring your online marketing together under one trusted partner.",
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

export type IconName =
  | "palette" | "monitor" | "map" | "share" | "search" | "wrench"
  | "droplet" | "zap" | "hardhat" | "hammer" | "truck" | "store";

export const HOME_SERVICES: { icon: IconName; title: string; text: string; id: string }[] = [
  { icon: "palette", title: "Branding & Identity", id: "branding", text: "Build a professional, consistent business identity that customers recognize and remember." },
  { icon: "monitor", title: "Website Design & Development", id: "website-development", text: "Mobile-friendly websites that explain your services clearly, establish credibility, and make contacting your business easy." },
  { icon: "map", title: "Google Business Profile & Local SEO", id: "google-business", text: "Improve your local business information and online presence so potential customers can find and learn about your services." },
  { icon: "search", title: "SEO & Content Marketing", id: "seo", text: "Strengthen your website through technical improvements, relevant content, and ongoing optimization." },
  { icon: "share", title: "Social Media Marketing", id: "social-media", text: "Keep your business active online with professional content that showcases your work and reinforces customer trust." },
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
export const HOME_MEDIA = { ownerPhoto: "", googleReviewUrl: "", reviewScreenshots: [] as { image: string; alt: string }[] };
export const FIRST_YEAR = [
  { period: "Month 1", title: "Build Your Foundation", text: "Learn about your business, define marketing priorities, plan the website and branding, and begin agreed setup activities." },
  { period: "Months 2–3", title: "Launch & Optimize", text: "Continue agreed website development, SEO setup, content improvements, and social media activity." },
  { period: "Months 4–6", title: "Build Your Presence", text: "Continue monthly marketing deliverables, maintain consistency, and review available performance information." },
  { period: "Months 7–12", title: "Improve & Refine", text: "Improve agreed marketing activities, evaluate progress, and adjust priorities based on business needs." },
];

// TESTIMONIALS — add only genuine reviews. Empty list shows placeholders.
export const TESTIMONIALS: { name: string; business: string; review: string; photo?: string }[] = [];

// PRICING — edit names, prices, and inclusions here.
export const PLANS = [
  {
    name: "Starter", price: "$245/month", monthlyPrice: 245, socialPosts: 5, channels: null, seoLevel: "basic", tagline: "Build your business's online foundation.",
    items: ["Branding", "Website", "Basic SEO", "5 social media posts per month"],
    description: "Designed for newer businesses looking to establish a professional website and essential marketing presence.", cta: "Get Started", featured: false,
  },
  {
    name: "Entrepreneur", price: "$499/month", monthlyPrice: 499, socialPosts: 10, channels: 2, seoLevel: "basic", tagline: "Keep your business active across two channels.",
    items: ["Branding", "Website", "Basic SEO", "10 social media posts per month", "2 social media channels"],
    description: "For businesses ready to invest in more regular marketing content and a stronger presence across multiple channels.", cta: "Choose Entrepreneur", featured: true,
  },
  {
    name: "Dominate", price: "$999/month", monthlyPrice: 999, socialPosts: 15, channels: 3, seoLevel: "advanced", tagline: "Expand your reach with more content and advanced SEO.",
    items: ["Branding", "Website", "Advanced SEO", "15 social media posts per month", "3 social media channels"],
    description: "For businesses seeking a broader marketing strategy, more content, and advanced SEO support.", cta: "Choose Dominate", featured: false,
  },
];

export const PLAN_CURRENCY = "CAD";

export const HELP_OPTIONS = [
  "New website", "Website redesign", "SEO", "Google Business Profile",
  "Social media", "Branding / logo", "Not sure yet",
];

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

export const HOME_FAQS = [
  {
    question: "Why choose an all-in-one digital marketing agency?",
    paragraphs: [
      "Running a business is already a full-time job. Managing different providers for your website, SEO, Google Business Profile, and social media can make things complicated.",
      "With Bespoke, everything works together under one marketing partner. Your branding stays consistent, your website supports your SEO, and your social media helps reinforce your online presence.",
      "You have one point of contact, one coordinated strategy, and more time to focus on running your business.",
    ],
  },
  {
    question: "What makes Bespoke Web Design different?",
    paragraphs: [
      "We're an Edmonton-based marketing business focused on practical, affordable, and personalized digital marketing for trades and service companies.",
      "Rather than simply building a website and walking away, we offer ongoing support to help maintain and improve your online presence.",
      "Our approach combines personal service, clear communication, and multiple marketing services under one roof.",
    ],
  },
  {
    question: "What's included in my monthly marketing plan?",
    paragraphs: [
      "Depending on your chosen package, your plan may include professional website development, branding, search engine optimization (SEO), Google Business Profile management, social media content, and ongoing website improvements.",
      "Instead of paying a large upfront amount for multiple separate services, you can invest in an agreed package through manageable monthly payments.",
      "Each package clearly outlines what's included, so you know what you're paying for.",
    ],
  },
  {
    question: "Why do you focus on organic SEO instead of Google Ads?",
    paragraphs: [
      "We believe a strong online foundation is a valuable place to start.",
      "Our priority is to build a professional, SEO-friendly website, improve your Google Business Profile, and develop useful content that supports your long-term visibility.",
      "Unlike paid ads, which require an ongoing advertising budget to keep running, organic SEO focuses on improving your website's presence in unpaid search results over time.",
      "Google Ads can still be a useful option, especially for businesses that need more immediate visibility.",
      "When appropriate, paid advertising can complement your organic marketing strategy.",
      "Google Ads expenditure is separate from our monthly organic marketing packages. Any optional advertising services or management fees must be separately agreed upon.",
    ],
  },
  {
    question: "How long does SEO take to show results?",
    paragraphs: [
      "SEO takes time, and every business is different.",
      "Results depend on your industry, competition, location, website condition, and ongoing improvements.",
      "During the first year, we focus on strengthening your website's technical foundation, improving content, supporting local visibility, and monitoring progress.",
      "Our goal is to help your online presence become stronger over time, but no agency can guarantee specific Google rankings, traffic levels, or leads.",
    ],
  },
  {
    question: `Why is there a ${MARKETING_AGREEMENT.minimumMonths}-month minimum commitment?`,
    paragraphs: [
      "Building a professional online presence takes more than launching a website.",
      `Our ${MARKETING_AGREEMENT.minimumMonths}-month minimum allows us to develop your website and carry out the ongoing marketing work included in your plan, such as SEO improvements, content updates, Google Business Profile management, and social media activity.`,
      "Instead of paying a large upfront amount for individual services, you receive an agreed package through manageable monthly payments.",
      "We see this as a long-term partnership focused on building and improving your business's online foundation.",
    ],
    note: `The ${MARKETING_AGREEMENT.minimumMonths}-month minimum applies to the applicable monthly marketing agreements. Specific inclusions depend on the selected package.`,
  },
  {
    question: `Will I own my website after ${MARKETING_AGREEMENT.ownershipTransferMonths} months?`,
    paragraphs: [
      `Yes. Under our website ownership policy, once you've completed your ${MARKETING_AGREEMENT.ownershipTransferMonths}-month agreement and all required payments, the completed website becomes yours.`,
      "Our goal is to help you build a professional online presence that adds lasting value to your business.",
      "Website ownership and transfer details, including hosting, domains, third-party services, and ongoing maintenance, are outlined in your service agreement.",
      "You can discuss continued marketing and website management with Bespoke after your initial term.",
    ],
  },
  {
    question: "What happens after my first year?",
    paragraphs: [
      "Your website is only one part of your online presence.",
      "After completing your initial agreement, you can discuss continuing with Bespoke for ongoing SEO, website updates, Google Business Profile management, social media, and other marketing services.",
      "Continuing allows your marketing to adapt as your business grows, your services change, and new opportunities develop.",
      "We want to build long-term relationships by providing ongoing value, not simply creating websites.",
      "Any renewal, cancellation, or continued-service terms will follow your agreement.",
    ],
  },
  {
    question: "Do you only work with Edmonton businesses?",
    paragraphs: [
      "We're proudly based in Edmonton, Alberta, and our primary focus is helping local trades and service businesses.",
      "We also work with businesses throughout Alberta and can develop websites and digital marketing projects for clients across Canada and beyond.",
      "While we're growing our Edmonton presence, our services aren't limited by geography.",
    ],
  },
  {
    question: "How do we get started?",
    paragraphs: [
      "Start by requesting a free website and marketing review.",
      "We'll learn about your business, take a look at your existing online presence, and discuss your goals and budget.",
      "From there, we can recommend a practical marketing plan based on what your business actually needs.",
      "No pressure, no complicated jargon—just a conversation about your business.",
    ],
  },
];
