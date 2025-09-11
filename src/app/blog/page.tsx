import BlogCard from "@/components/BlogCard";
import blogPosts from "@/data/blogPosts"; // Update the path as needed

export default function BlogPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-16">
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>

        <p className="text-base sm:text-lg font-light text-neutral-600 dark:text-neutral-400 max-w-2xl">
          Thoughts, tutorials, and technical breakdowns on building apps, design
          systems, AI tools, and more.
        </p>

        {blogPosts.length === 0 ? (
          <div className="mt-6 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-8 text-center">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              🚧 No blog posts yet
            </span>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm">
              I’m currently drafting a few posts. Stay tuned!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
