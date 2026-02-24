import * as React from "react";
import { cn } from "@/lib/utils";

const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-mono text-[10px] font-medium text-muted-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
Kbd.displayName = "Kbd";

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
