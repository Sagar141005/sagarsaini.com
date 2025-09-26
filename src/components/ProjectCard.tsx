import React from "react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  slug: string;
  isNew?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  slug,
  isNew = false,
}) => {
  return (
    <Link
      href={`/project/${slug}`}
      className="group flex flex-col gap-2 p-2 rounded-xl transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-xl"
        />

        {/* Subtle ring */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-xl" />

        {/* Optional "New" badge */}
        {isNew && (
          <span className="absolute top-2 right-2 rounded-md bg-blue-600/90 px-2 py-0.5 font-mono text-xs font-semibold text-white shadow-md">
            New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 px-1.5">
        <h3 className="text-lg font-semibold leading-snug underline-offset-4 text-zinc-900 dark:text-zinc-100 transition-colors group-hover:underline text-balance">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
