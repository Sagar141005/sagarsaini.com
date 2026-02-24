import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";

const SITE_URL = "https://sagarsaini.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/components",
    "/blog",
    "/contact",
    "/resume",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = getProjects().map((project) => ({
    url: `${SITE_URL}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.date ? new Date(post.metadata.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
