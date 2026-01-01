export type BlogMetadata = {
  title: string;
  date: string;
  image: string;
  description: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  content: string;
};

export type BlogPreview = {
  slug: string;
  title: string;
  date: string;
  image: string;
  description: string;
};
