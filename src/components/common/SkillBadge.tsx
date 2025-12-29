import { motion } from "motion/react";
import TechIcon from "@/components/common/TechIcon";
import { TECH_ICONS } from "@/data/techMap";

export default function SkillBadge({
  name,
  href,
}: {
  name: string;
  href?: string;
}) {
  const config = TECH_ICONS[name];

  if (!config) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-1 text-sm font-medium align-middle
                     text-foreground bg-muted/50 
                     border border-dashed border-border rounded-md 
                     shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] 
                     transition-colors"
    >
      <TechIcon
        label={name}
        src={config.src}
        srcLight={config.srcLight}
        srcDark={config.srcDark}
        priority={config.priority}
        className="w-4 h-4"
      />
      {name}
    </motion.a>
  );
}
