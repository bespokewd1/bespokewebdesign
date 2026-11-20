import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { IconName } from "@/content/site";
import { Button } from "@/components/ui/button";
import { ServiceGraphic } from "@/components/site/ServiceGraphic";

type HomeServiceCardProps = {
  service: { id: string; icon: IconName; title: string; text: string };
  imageSrc?: string;
  imageAlt?: string;
};

export function HomeServiceCard({ service, imageSrc, imageAlt = "" }: HomeServiceCardProps) {
  return <article className="home-service flex min-w-0 flex-col overflow-hidden rounded-lg border bg-card">
    <div className="home-service-media aspect-[4/3] w-full shrink-0 overflow-hidden bg-secondary">
      {imageSrc ? <img src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="size-full object-contain" /> : <ServiceGraphic id={service.id} />}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-base leading-tight text-navy">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
      <Button asChild variant="link" className="mt-4 min-h-11 justify-start self-start p-0"><Link aria-label={`Learn more about ${service.title}`} to={service.id === "website-development" ? "/website-design" : service.id === "seo" ? "/seo" : service.id === "google-ads" ? "/digital-marketing" : "/services"} {...(service.id === "branding" || service.id === "social-media" || service.id === "maintenance" ? { hash: service.id } : {})}><ArrowRight /></Link></Button>
    </div>
  </article>;
}