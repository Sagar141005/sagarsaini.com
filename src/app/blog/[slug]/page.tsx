import { notFound } from "next/navigation";
import blogPosts, { BlogPost } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16">
      <article className="space-y-6">
        <Link
          href="/blog"
          className="inline-flex gap-1 items-center text-sm font-medium hover:underline font-mono text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Blog
        </Link>

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.date}>
            {new Date(post.date)
              .toLocaleDateString("en-GB")
              .replace(/\//g, ".")}
          </time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 rounded-xl border border-zinc-200 dark:border-zinc-800"
        />
        <div
          className="prose prose-lg max-w-none text-lg leading-relaxed dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
