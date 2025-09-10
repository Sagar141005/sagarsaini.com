import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { ChevronRight } from "lucide-react";

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image: string;
  isNew?: boolean;
};

export default function BlogSection({ posts = [] }: { posts?: BlogPost[] }) {
  const visiblePosts = posts.slice(0, 4);
  const hasMorePosts = posts.length > 4;

  return (
    <section className="mt-20 space-y-6">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Blog
      </h2>

      <p className="text-md font-light leading-relaxed text-neutral-600 dark:text-neutral-400 -mt-4">
        Thoughts on web development, software engineering, and what I’m
        learning.
      </p>

      {posts.length === 0 ? (
        <div className="mt-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-8 text-center">
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            🚧 No blog posts yet
          </span>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
            I’m currently drafting a few posts. Stay tuned!
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {visiblePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {hasMorePosts && (
            <div className="flex justify-center mt-8">
              <Link
                href="/blog"
                className="mt-6 flex items-center justify-around"
              >
                <span className="flex items-center gap-[0.5] px-4 py-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-100 dark:hover:text-white border border-zinc-300 dark:border-zinc-600 hover:border-zinc-950 dark:hover:border-zinc-400 rounded-md transition-colors group">
                  View all blogs{" "}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
}
