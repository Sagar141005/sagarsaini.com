"use client";

import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "../ui/button";
import ChevronRightIcon from "../svg/ChevronRightIcon";
import { motion } from "motion/react";

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  image: string;
  isNew?: boolean;
};

export default function BlogList({ posts = [] }: { posts?: BlogPost[] }) {
  const visiblePosts = posts.slice(0, 4);
  const hasMorePosts = posts.length > 4;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="blogs">
      {posts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 border border-dashed border-border rounded-xl p-24 text-center"
        >
          <span className="block text-sm font-medium text-foreground">
            🚧 No blog posts yet
          </span>
          <p className="mt-1 text-muted-foreground text-sm">
            I’m currently drafting a few posts. Stay tuned!
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
            {visiblePosts.map((post) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <BlogCard key={post.slug} post={post} />
              </motion.div>
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
