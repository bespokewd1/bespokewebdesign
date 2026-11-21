import { createFileRoute } from "@tanstack/react-router";
import { SITE, PORTFOLIO_PROJECTS } from "@/content/site";

const PATHS = ["/", "/services", "/digital-marketing", "/ai-automation", "/website-design", "/seo", "/industries", "/our-work", "/testimonials", "/contact", "/privacy", "/terms"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [...PATHS, ...PORTFOLIO_PROJECTS.filter(p => p.slug).map(p => `/our-work/${p.slug}`)];
        const urls = paths.map((p) => `<url><loc>${SITE.url}${p === "/" ? "/" : p}</loc></url>`).join("");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
