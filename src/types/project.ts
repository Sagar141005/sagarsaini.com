export type TechItem = {
  name: string;
  icon: React.ReactNode;
};

export type ProjectLinks = {
  demo?: string;
  github?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;

  image: string;
  video?: string;

  overview: string;
  problem: string;
  goals: string[];

  techStack: {
    layer: string;
    tools: string;
  }[];

  highlightTech: string[];

  features: {
    title: string;
    description: string;
  }[];

  challenges: {
    challenge: string;
    solution: string;
  }[];

  upcomingFeatures?: string[];
  results?: string;

  links: ProjectLinks;
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
