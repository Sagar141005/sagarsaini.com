import Link from "next/link";

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const isNew = (() => {
    const now = new Date();
    const published = new Date(post.date);
    const diffInDays =
      (now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  })();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 p-2 rounded-xl transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
    >
      <div className="relative select-none overflow-hidden rounded-xl">
        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="aspect-[1200/630] object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-xl"
        />

        {/* subtle ring */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-xl" />

        {/* New badge */}
        {isNew && (
          <span className="absolute top-2 right-2 rounded-md bg-blue-600/90 px-2 py-0.5 font-mono text-xs font-semibold text-white shadow-md">
            New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 px-1.5">
        <h3 className="text-lg font-semibold leading-snug underline-offset-4 text-zinc-900 dark:text-zinc-100 text-balance transition-colors group-hover:underline">
          {post.title}
        </h3>

        <time
          dateTime={post.date}
          className="text-sm text-zinc-500 dark:text-zinc-400"
        >
          {new Date(post.date).toLocaleDateString("en-GB").replace(/\//g, ".")}
        </time>
      </div>
    </Link>
  );
}
