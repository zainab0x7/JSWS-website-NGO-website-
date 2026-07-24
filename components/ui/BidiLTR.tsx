import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BidiLTRProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const BidiLTR = forwardRef<HTMLElement, BidiLTRProps>(
  ({ children, className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        dir="ltr"
        className={cn("inline-block bidi-ltr [direction:ltr] [unicode-bidi:isolate]", className)}
        style={{ direction: "ltr", unicodeBidi: "isolate" }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

BidiLTR.displayName = "BidiLTR";
