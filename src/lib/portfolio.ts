import type { ClientReview } from "@/content/reviews";

export type PortfolioFilter = "All Projects" | "Websites" | "Social Media" | "Branding" | "SEO";
export const PORTFOLIO_FILTERS: PortfolioFilter[] = ["All Projects", "Websites", "Social Media", "Branding", "SEO"];
export type ProjectMedia = { image: string; alt: string };
export type SeoAudit = {
  seo: number | null; performance: number | null; accessibility: number | null;
  date: string; testedUrl: string; screenshot: string;
};
export type Project = {
  name: string; industry: string; services: string[]; description: string;
  image: string; link: string; logo?: string; ownedProject?: boolean; featured?: boolean; homeApproved?: boolean;
  testimonial?: string; outcomes?: string[];
  slug?: string; category?: "Trades" | "Transportation" | "Wellness";
  facebookUrl?: string; mobileScreenshot?: string;
  socialPosts?: ProjectMedia[]; brandingImages?: ProjectMedia[];
  seoAudit?: SeoAudit | null; review?: ClientReview | undefined;
  publicationStatus?: "published" | "legacy";
};

export function publishedMedia(media: ProjectMedia[] = []) {
  return media.filter(item => item.image.trim() && item.alt.trim());
}
export function verifiedAudit(audit: SeoAudit | null | undefined): audit is SeoAudit {
  return Boolean(audit && audit.screenshot && /^https:\/\//.test(audit.testedUrl)
    && /^\d{4}-\d{2}-\d{2}$/.test(audit.date)
    && [audit.seo, audit.performance, audit.accessibility].some(score => score !== null)
    && [audit.seo, audit.performance, audit.accessibility].every(score => score === null || (Number.isFinite(score) && score >= 0 && score <= 100)));
}
export function matchesPortfolioFilter(project: Project, filter: PortfolioFilter) {
  switch (filter) {
    case "All Projects": return true;
    case "Websites": return Boolean(project.link);
    case "Social Media": return publishedMedia(project.socialPosts).length > 0;
    case "Branding": return publishedMedia(project.brandingImages).length > 0;
    case "SEO": return verifiedAudit(project.seoAudit);
  }
}
export function featuredPortfolio(projects: Project[]) {
  return projects.filter(p => p.featured && p.image && p.link && p.publicationStatus === "published")
    .sort((a, b) => Number(b.category === "Trades") - Number(a.category === "Trades")).slice(0, 3);
}