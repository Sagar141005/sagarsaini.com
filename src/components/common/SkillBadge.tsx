import Image from "next/image";
import { motion } from "motion/react";
import { TECH_ICONS } from "@/data/techMap";
import { cn } from "@/lib/utils";

export default function SkillBadge({
  name,
  href,
}: {
  name: string;
  href?: string;
}) {
  const config = TECH_ICONS[name];

  if (!config) return null;

  const content = (
    <>
      {config.src && (
        <Image
          src={config.src}
          alt={name}
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
        />
      )}

      {!config.src && config.srcLight && (
        <Image
          src={config.srcLight}
          alt={name}
          width={16}
          height={16}
          className={cn("h-4 w-4 object-contain", config.srcDark && "dark:hidden")}
        />
      )}

      {!config.src && config.srcDark && (
        <Image
          src={config.srcDark}
          alt={name}
          width={16}
          height={16}
          className="hidden h-4 w-4 object-contain dark:block"
        />
      )}
      {name}
    </>
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 text-sm font-medium align-middle text-foreground bg-muted/50 border border-dashed border-border rounded-md shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-colors"
    >
      {content}
    </motion.a>
  );
}
