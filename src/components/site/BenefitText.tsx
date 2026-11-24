import { Fragment } from "react";

// Preserve shared content verbatim; emphasis is presentation only.
export function BenefitText({ text, phrases }: { text: string; phrases: string[] }) {
  const escaped = phrases.filter(Boolean).map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!escaped.length) return <>{text}</>;
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");
  return <>{text.split(pattern).map((part, index) => index % 2 === 1 ? <strong key={index} className="font-semibold text-inherit">{part}</strong> : <Fragment key={index}>{part}</Fragment>)}</>;
}