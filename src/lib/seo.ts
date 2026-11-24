import { SITE } from "@/content/site";
import { SOCIAL_PREVIEWS } from "@/content/social-previews";

/** Asset host that always serves CDN pointers, even before a custom domain is live. */
const ASSET_ORIGIN = "https://bespokewebdesign.lovable.app";

/** Builds per-page head() metadata with canonical URL and breadcrumb schema. */
export function pageHead(opts: { path: string; title: string; description: string; crumb?: string; image?: string }) {
  const url = `${SITE.url}${opts.path === "/" ? "" : opts.path}`;
  const social = SOCIAL_PREVIEWS[opts.path];
  const image = opts.image ?? social?.image;
  const imageUrl = image ? (image.startsWith("https://") ? image : `${ASSET_ORIGIN}${image}`) : undefined;
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
      { property: "og:title", content: social?.title ?? opts.title },
      { property: "og:description", content: social?.description ?? opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: social?.title ?? opts.title },
      { name: "twitter:description", content: social?.description ?? opts.description },
      ...(imageUrl ? [
        { property: "og:image", content: imageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:alt", content: `${SITE.name} — ${social?.title ?? opts.title}` },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:image:alt", content: `${SITE.name} — ${social?.title ?? opts.title}` },
      ] : []),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
