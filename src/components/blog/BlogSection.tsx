import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "../ui/button";
import ChevronRightIcon from "../svg/ChevronRightIcon";

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
    <section id="blogs">
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
              <Link href="/blog" className="mt-6 group">
                <Button variant="outline" className="text-primary">
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
