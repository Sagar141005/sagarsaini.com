import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "@/types/project";

const projectDirectory = path.join(process.cwd(), "src/data/projects");

const PROJECT_SEQUENCE = [
  "code-sphere",
  "career-hunt",
  "morphly",
  "gisty",
  "hue-bit",
  "regex-lab",
];

export function getProjects(): Project[] {
  if (!fs.existsSync(projectDirectory)) return [];

  const files = fs.readdirSync(projectDirectory);

  const projects = files
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf-8");

      const { data, content } = matter(fileContent);

      return {
        slug,
        metadata: data as Project["metadata"],
        content,
      };
    });

  return projects.sort((a, b) => {
    const indexA = PROJECT_SEQUENCE.indexOf(a.slug);
    const indexB = PROJECT_SEQUENCE.indexOf(b.slug);

    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  try {
    const fullPath = path.join(projectDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      metadata: data as Project["metadata"],
      content,
    };
  } catch (error) {
    return undefined;
  }
}
