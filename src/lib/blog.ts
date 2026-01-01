import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const contentDirectory = path.join(process.cwd(), "src/data/blog");

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf-8");

      const { data, content } = matter(fileContent);

      return {
        slug,
        metadata: data as BlogPost["metadata"],
        content,
      };
    });

  return posts.sort((a, b) => {
    return new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as BlogPost["metadata"],
      content,
    };
  } catch (error) {
    return undefined;
  }
}
