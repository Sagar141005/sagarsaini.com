import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TechIconProps = {
  label: string;
  src?: string;
  srcLight?: string;
  srcDark?: string;
};

export default function TechStack() {
  return (
    <div className="mt-16 space-y-6">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Toolkit
      </h2>
      <p className="text-md font-light leading-relaxed text-neutral-600 dark:text-neutral-400 -mt-4">
        The tools and technologies I work with regularly.
      </p>

      <TooltipProvider delayDuration={0}>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 mt-4 items-center justify-items-center text-zinc-600 dark:text-zinc-300">
          {/* === Frontend === */}
          <TechIcon label="React" src="/react.svg" />
          <TechIcon
            label="Next.js"
            srcLight="/nextjs2-light.svg"
            srcDark="/nextjs2-dark.svg"
          />
          <TechIcon label="JavaScript" src="/js.svg" />
          <TechIcon label="TypeScript" src="/typescript.svg" />
          <TechIcon label="Tailwind CSS" src="/tailwindcss.svg" />
          <TechIcon
            label="shadcn/ui"
            srcLight="/shadcn-ui-light.svg"
            srcDark="/shadcn-ui-dark.svg"
          />
          <TechIcon label="Redux" src="/redux.svg" />

          {/* === Backend === */}
          <TechIcon label="Node.js" src="/nodejs.svg" />
          <TechIcon
            label="Express"
            srcLight="/express-dark.svg"
            srcDark="/express-light.svg"
          />
          <TechIcon label="MongoDB" src="/mongodb.svg" />
          <TechIcon label="PostgreSQL" src="/postgres.svg" />
          <TechIcon
            label="Prisma"
            srcLight="/prisma-dark.svg"
            srcDark="/prisma-light.svg"
          />
          <TechIcon label="MySQL" src="/mysql.svg" />
          <TechIcon label="Supabase" src="/supabase.svg" />
          <TechIcon label="Firebase" src="/firebase.svg" />
          <TechIcon label="Redis" src="/redis.svg" />

          {/* === DevOps / Tools === */}
          <TechIcon
            label="Vercel"
            srcLight="/vercel-dark.svg"
            srcDark="/vercel-light.svg"
          />
          <TechIcon label="Docker" src="/docker.svg" />
          <TechIcon label="Git" src="/git.svg" />
          <TechIcon
            label="ChatGPT"
            srcLight="/chatgpt-light.svg"
            srcDark="/chatgpt-dark.svg"
          />
        </div>
      </TooltipProvider>
    </div>
  );
}

function TechIcon({ label, src, srcLight, srcDark }: TechIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="relative group cursor-default">
          {srcLight && srcDark ? (
            <>
              <img
                src={srcLight}
                alt={label}
                className="w-8 h-8 dark:hidden"
                loading="lazy"
              />
              <img
                src={srcDark}
                alt={label}
                className="w-8 h-8 hidden dark:block"
                loading="lazy"
              />
            </>
          ) : (
            <img src={src} alt={label} className="w-8 h-8" loading="lazy" />
          )}
        </div>
      </TooltipTrigger>

      <TooltipContent
        side="top"
        className="bg-zinc-900 text-white px-6 py-2 mb-0.5 text-sm rounded-lg shadow-sm dark:bg-zinc-800"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
