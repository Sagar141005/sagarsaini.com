"use client";

import { useRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  ChevronToArrowRightIcon,
  ChevronToArrowRightIconHandle,
} from "../svg/animated/ChevronToArrow";

export function ArrowButton({ children, ...props }: ButtonProps) {
  const iconRef = useRef<ChevronToArrowRightIconHandle>(null);

  return (
    <Button
      // Trigger animation on Parent Hover
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="font-normal group"
      {...props}
    >
      <span>{children}</span>
      <ChevronToArrowRightIcon ref={iconRef} size={18} />
    </Button>
  );
}
