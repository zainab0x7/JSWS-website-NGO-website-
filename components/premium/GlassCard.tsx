"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  dark?: boolean;
  tilt?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = false,
  dark = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl",
        dark
          ? "border-white/20 bg-white/12 text-white shadow-lg shadow-black/20 backdrop-blur-xl hover:border-white/35 hover:bg-white/18"
          : "border-gray-100 bg-white text-gray-900 shadow-lg shadow-gray-900/5 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl",
        glow && "ring-1 ring-red-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}
