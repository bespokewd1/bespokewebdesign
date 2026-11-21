import { createFileRoute } from "@tanstack/react-router";
import { PORTFOLIO_PROJECTS } from "@/content/site";
import { PORTFOLIO_FILTERS, matchesPortfolioFilter } from "@/lib/portfolio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { pageHead } from "@/lib/seo";
import ogAsset from "@/assets/service-squad-website.webp.asset.json";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/Cards";
import { WorkGallery, type GalleryItem } from "@/components/site/WorkGallery";
import { CLIENT_LOGOS } from "@/content/client-logos";
import { SOCIAL_PHOTOS, SEO_PHOTOS } from "@/content/service-photos";

const GALLERIES: Partial<Record<string, { items: GalleryItem[]; variant: "photo" | "logo"; intro: string }>> = {
  Branding: { variant: "logo", intro: "Logos we've designed for local businesses.", items: CLIENT_LOGOS.map(l => ({ src: l.src, alt: `${l.name} logo`, caption: l.name })) },
  "Social Media": { variant: "photo", intro: "Branded social media posts we create for our clients.", items: SOCIAL_PHOTOS },
  SEO: { variant: "photo", intro: "Helping local businesses show up on Google Search and Maps.", items: SEO_PHOTOS },
};

export const Route = createFileRoute("/our-work")({
  head: () => pageHead({ image: ogAsset.url,
    path: "/our-work", crumb: "Our Work",
    title: "Our Work — Websites & Digital Marketing Projects | Bespoke Web Design",
    description: "See websites and digital marketing projects Bespoke Web Design has built for Edmonton and Alberta businesses.",
  }),
  component: OurWork,
});

function OurWork() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Real Businesses. Real Work."
        intro="Explore websites, branding, and digital marketing created for businesses we support." />
      <section className="section">
        <div className="container-site">
          <Tabs defaultValue="All Projects">
            <TabsList aria-label="Portfolio filters" className="mb-6 flex h-auto w-fit max-w-full flex-wrap justify-start gap-1">
              {PORTFOLIO_FILTERS.map(filter => <TabsTrigger key={filter} value={filter} className="min-h-11">{filter}</TabsTrigger>)}
            </TabsList>
            {PORTFOLIO_FILTERS.map(filter => {
              const gallery = GALLERIES[filter];
              if (gallery) return <TabsContent key={filter} value={filter}>
                <p className="mb-6 text-muted-foreground">{gallery.intro} Click any image to enlarge.</p>
                <WorkGallery items={gallery.items} variant={gallery.variant} />
              </TabsContent>;
              const projects = PORTFOLIO_PROJECTS.filter(project => matchesPortfolioFilter(project, filter));
              return <TabsContent key={filter} value={filter}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map(p => <ProjectCard key={p.name} p={p} />)}</div>
                {projects.length === 0 && <p role="status" className="border-y py-12 text-muted-foreground">No published {filter.toLowerCase()} samples yet.</p>}
              </TabsContent>;
            })}
          </Tabs>
        </div>
      </section>
      <CtaBand title="Want Your Business Here Next?" />
    </>
  );
}
