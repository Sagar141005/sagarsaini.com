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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3 rounded-2xl transition-colors duration-300"
    >
      <div className="relative select-none overflow-hidden rounded-2xl bg-muted">
        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />

        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />

        {isNew && (
          <span className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-primary/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-primary-foreground backdrop-blur-md">
            New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 px-1.5">
        <time
          className="text-xs sm:text-sm font-light font-mono text-muted-foreground"
          dateTime={post.date}
        >
          {formattedDate}
        </time>
        <h3 className="text-lg font-semibold leading-snug underline-offset-4 text-foreground text-balance transition-colors group-hover:underline">
          {post.title}
        </h3>
      </div>
    </Link>
  );
}
