import { Star } from "lucide-react";
import { REVIEW_LINKS } from "@/content/site";

export function HeroTrust() {
  return <p className="mt-4 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-relaxed text-navy-muted"><Star className="size-3.5 shrink-0 fill-current text-review-gold" aria-hidden="true" /><a href={REVIEW_LINKS.Google} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy-foreground">Five-star client reviews in Edmonton</a><span aria-hidden="true">·</span><span>Done-for-you marketing</span></p>;
}