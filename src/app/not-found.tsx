import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Link
        href="/"
        className="text-sm font-light bg-black dark:bg-white text-white dark:text-black flex items-center gap-1 py-2 px-4 rounded-full hover:opacity-90 transition"
      >
        Go to Home
        <ArrowRightIcon className="size-4" />
      </Link>
    </div>
  );
}
