import { SITE } from "@/content/site";

/** Builds per-page head() metadata with canonical URL and breadcrumb schema. */
export function pageHead(opts: { path: string; title: string; description: string; crumb?: string }) {
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
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
