import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mt-8 mb-6 !font-mono text-8xl font-medium">404</h1>

      <Button asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
