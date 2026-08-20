import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BidiLTRProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export const BidiLTR = forwardRef<HTMLSpanElement, BidiLTRProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        dir="ltr"
        className={cn("inline-block bidi-ltr [direction:ltr] [unicode-bidi:isolate]", className)}
        style={{ direction: "ltr", unicodeBidi: "isolate" }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

BidiLTR.displayName = "BidiLTR";
