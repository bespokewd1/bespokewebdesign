import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/content/site";
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
      <PageHero eyebrow="Portfolio" title="Our Work — Websites & Digital Marketing Projects"
        intro="A selection of real projects for local businesses." />
      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => <ProjectCard key={p.name} p={p} detailed />)}
        </div>
      </section>
      <CtaBand title="Want Your Business Here Next?" />
    </>
  );
}
