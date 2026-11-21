import { SITE } from "@/content/site";

/** Asset host that always serves CDN pointers, even before a custom domain is live. */
const ASSET_ORIGIN = "https://bespokewebdesign.lovable.app";

/** Builds per-page head() metadata with canonical URL and breadcrumb schema. */
export function pageHead(opts: { path: string; title: string; description: string; crumb?: string; image?: string }) {
  const url = `${SITE.url}${opts.path === "/" ? "" : opts.path}`;
  const scripts = opts.crumb
    ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: opts.crumb, item: url },
          ],
        }),
      }]
    : [];
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(opts.image ? [
        { property: "og:image", content: `${ASSET_ORIGIN}${opts.image}` },
        { name: "twitter:image", content: `${ASSET_ORIGIN}${opts.image}` },
      ] : []),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
