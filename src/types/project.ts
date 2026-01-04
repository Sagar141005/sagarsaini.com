export type TechItem = {
  name: string;
  icon: React.ReactNode;
};

export type ProjectLinks = {
  demo?: string;
  github?: string;
};

export type ProjectMetadata = {
  title: string;
  description: string;
  date: string;

  image: string;
  video?: string;

  links: ProjectLinks;

  highlightTech?: string[];
};

export type Project = {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectPreview = {
  slug: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  highlightTech: string[];
  links: ProjectLinks;
};

export type ProjectStatus = "In Progress" | "Upcoming" | "Planned" | "On Hold";

export type UpcomingProjectItem = {
  title: string;
  description: string;
  status: ProjectStatus;
};
