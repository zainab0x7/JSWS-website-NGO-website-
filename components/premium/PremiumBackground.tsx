"use client";

import { cn } from "@/lib/utils";

interface PremiumBackgroundProps {
  variant?: "dark" | "light" | "muted";
  className?: string;
  showParticles?: boolean;
}

export function PremiumBackground({
  variant = "light",
  className,
}: PremiumBackgroundProps) {
  const palette = {
    dark: {
      base: "from-gray-950 via-gray-950 to-gray-900",
      blob1: "bg-red-700/20",
      blob2: "bg-rose-600/10",
    },
    light: {
      base: "from-white to-white",
      blob1: "bg-red-50",
      blob2: "bg-rose-50/80",
    },
    muted: {
      base: "from-gray-50 to-gray-50/80",
      blob1: "bg-red-100/50",
      blob2: "bg-slate-100/70",
    },
  }[variant];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className={cn("absolute inset-0 bg-gradient-to-b", palette.base)} />
      <div className={cn("absolute -left-24 top-0 h-72 w-72 rounded-full blur-3xl", palette.blob1)} />
      <div className={cn("absolute -right-16 bottom-0 h-64 w-64 rounded-full blur-3xl", palette.blob2)} />
    </div>
  );
}
