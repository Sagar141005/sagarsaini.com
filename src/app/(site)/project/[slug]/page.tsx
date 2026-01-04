import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { MDXContent } from "@/components/common/MDXContent";
import ArrowLeftIcon from "@/components/svg/ArrowLeftIcon";
import WebsiteIcon from "@/components/svg/WebsiteIcon";
import GithubIcon from "@/components/svg/GithubIcon";
import ProjectVisuals from "@/components/project/ProjectVisuals";
import { getProjects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.metadata.title} | Case Study`,
    description: project.metadata.description,
    openGraph: {
      images: [project.metadata.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const { title, description, image, video, highlightTech, links } =
    project.metadata;

  const MAX_TAGS = 4;
  const visibleTags = highlightTech ? highlightTech.slice(0, MAX_TAGS) : [];
  const remainingTags = highlightTech ? highlightTech.length - MAX_TAGS : 0;

  return (
    <Container className="py-16 max-w-3xl mx-auto">
      <div className="mb-8">
        <Button variant="link" size="sm" asChild className="px-0">
          <Link
            href="/projects"
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
          >
            <ArrowLeftIcon className="h-3 w-3" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="space-y-8 border-b border-border pb-12 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed text-balance">
            {description}
          </p>
        </div>

        <ProjectVisuals image={image} video={video} title={title} />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          {visibleTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {remainingTags > 0 && (
                <span
                  className="inline-flex items-center rounded-md bg-background px-2 py-1 text-xs font-medium font-mono text-muted-foreground border border-dashed border-border"
                  title={`+${remainingTags} more technologies`}
                >
                  +{remainingTags}
                </span>
              )}
            </div>
          )}

          {(links?.demo || links?.github) && (
            <div className="flex items-center gap-3 shrink-0">
              {links?.demo && (
                <Button asChild>
                  <a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <WebsiteIcon className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
              )}
              {links?.github && (
                <Button variant="outline" asChild>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-p:leading-relaxed prose-p:text-muted-foreground">
        <MDXContent source={project.content} />
      </div>

      <div className="mt-24 pt-12 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-semibold text-foreground">
              Ready for the next one?
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Explore more case studies or get in touch.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/projects">All Projects</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
