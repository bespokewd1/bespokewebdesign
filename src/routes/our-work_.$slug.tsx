import { createFileRoute, notFound } from "@tanstack/react-router";
import { PORTFOLIO_PROJECTS } from "@/content/site";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { pageHead } from "@/lib/seo";
import { PROJECT_SHARE_IMAGES } from "@/content/social-previews";

export const Route = createFileRoute("/our-work_/$slug")({
  beforeLoad: ({ params }) => {
    if (!PORTFOLIO_PROJECTS.some(project => project.slug === params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const project = PORTFOLIO_PROJECTS.find(p => p.slug === params.slug);
    const image = PROJECT_SHARE_IMAGES[params.slug];
    return pageHead({ path: `/our-work/${params.slug}`, crumb: project?.name ?? "Project",
      ...(image ? { image } : {}),
      title: `${project?.name ?? "Project Not Found"} — Client Portfolio | Bespoke Web Design`,
      description: project?.description ?? "Explore real client websites and digital marketing projects from Bespoke Web Design." });
  },
  component: ClientProject,
});

function ClientProject() {
  const { slug } = Route.useParams();
  const project = PORTFOLIO_PROJECTS.find(p => p.slug === slug);
  if (!project) return null;
  return <ProjectShowcase project={project} />;
}