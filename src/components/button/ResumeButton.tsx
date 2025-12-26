"use client";

import { useRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { ResumeIcon, ResumeIconHandle } from "../svg/animated/ResumeIcon";

export function ResumeButton({ children, ...props }: ButtonProps) {
  const iconRef = useRef<ResumeIconHandle>(null);

  return (
    <Button
      // Trigger animation on Parent Hover
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="font-normal group"
      {...props}
    >
      <span>{children}</span>
      <ResumeIcon ref={iconRef} size={90} />
    </Button>
  );
}
