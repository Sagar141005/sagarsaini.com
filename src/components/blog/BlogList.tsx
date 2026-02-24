"use client";

import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "../ui/button";
import ChevronRightIcon from "../svg/ChevronRightIcon";
import { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
  showAll?: boolean;
}

export default function BlogList({ posts, showAll = false }: BlogListProps) {
  const visiblePosts = showAll ? posts : posts.slice(0, 4);
  const hasMorePosts = !showAll && posts.length > 4;

  return (
    <section id="blogs">
      {posts.length === 0 ? (
        <div className="mt-6 border border-dashed border-border rounded-xl p-24 text-center">
          <span className="block text-sm font-medium text-foreground">
            🚧 No blog posts yet
          </span>
          <p className="mt-1 text-muted-foreground text-sm">
            I’m currently drafting a few posts. Stay tuned!
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
            {visiblePosts.map((post) => (
              <div key={post.slug}>
                <BlogCard
                  post={{
                    title: post.metadata.title,
                    slug: post.slug,
                    date: post.metadata.date,
                    image: post.metadata.image,
                    description: post.metadata.description,
                  }}
                />
              </div>
            ))}
          </div>

          {hasMorePosts && (
            <div className="flex justify-center mt-8">
              <Link href="/blog" className="mt-6 group">
                <Button variant="outline">
                  View all blogs <ChevronRightIcon />
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
}
