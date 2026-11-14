import { createFileRoute } from "@tanstack/react-router";
import { PORTFOLIO_PROJECTS } from "@/content/site";
import { PORTFOLIO_FILTERS, matchesPortfolioFilter } from "@/lib/portfolio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { pageHead } from "@/lib/seo";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { ProjectCard } from "@/components/site/Cards";

export const Route = createFileRoute("/our-work")({
  head: () => pageHead({
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
