import projects from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project/ProjectCaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectCaseStudy project={project} />;
}
