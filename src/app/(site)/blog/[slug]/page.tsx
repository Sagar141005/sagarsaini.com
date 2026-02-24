import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";
import { MDXContent } from "@/components/common/MDXContent";
import { getPostBySlug, getBlogPosts } from "@/lib/blog";
import CalendarIcon from "@/components/svg/CalendarIcon";
import { ShareButton } from "@/components/button/ShareButton";
import ArrowLeftIcon from "@/components/svg/ArrowLeftIcon";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.metadata.date,
      images: [post.metadata.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <Container className="py-16">
      <article className="space-y-8">
        <div className="mb-8">
          <Button variant="link" size="sm" asChild className="px-0">
            <Link
              href="/blog"
              className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
            >
              <ArrowLeftIcon className="h-3 w-3" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="space-y-4 border-b border-border pb-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {post.metadata.title}
            </h1>
            <h3 className="text-xl text-muted-foreground leading-relaxed text-balance font-light">
              {post.metadata.description}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-mono text-muted-foreground">
            <CalendarIcon className="size-4" />
            <time dateTime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          {post.metadata.image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-baseline sm:items-end justify-between gap-2">
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium font-mono capitalize text-muted-foreground border border-dashed border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3">
              <ShareButton title={post.metadata.title} slug={slug} />
            </div>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent source={post.content} />
        </div>

        <div className="mt-20 pt-10 border-t border-border flex justify-between items-center">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground">
              Enjoyed this post?
            </h4>
            <p className="text-sm text-muted-foreground">
              Check out my other articles.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">View all posts</Link>
          </Button>
        </div>
      </article>
    </Container>
  );
}
