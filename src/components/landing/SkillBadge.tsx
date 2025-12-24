import { motion } from "motion/react";

export default function SkillBadge({
  name,
  href,
  img,
}: {
  name: string;
  href: string;
  img: string;
}) {
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
      <img src={img} alt="" className="size-3.5 object-contain" />
      {name}
    </motion.a>
  );
}
