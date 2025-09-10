import React from "react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  link: string;
  reverse?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  link,
  reverse = false,
}) => {
  return (
    <Link href={link}>
      <div className="block">
        <div
          className={`flex flex-col md:flex-row ${
            reverse ? "md:flex-row-reverse" : ""
          } items-center gap-6 md:gap-12 py-6 px-4 md:px-0 rounded-xl transition`}
        >
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-sm group">
            <img
              src={image}
              alt={title}
              className="w-full max-h-48 object-contain transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div
            className={`w-full md:w-1/2 text-center ${
              reverse ? "md:text-right" : "md:text-left"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
