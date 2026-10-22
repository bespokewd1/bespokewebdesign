import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/content/site";

const PATHS = ["/", "/services", "/digital-marketing", "/website-design", "/seo", "/industries", "/our-work", "/testimonials", "/contact", "/privacy", "/terms"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = PATHS.map((p) => `<url><loc>${SITE.url}${p === "/" ? "/" : p}</loc></url>`).join("");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
