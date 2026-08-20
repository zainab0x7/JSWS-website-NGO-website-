"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export function AnimatedText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const units = text.replace(/\n/g, " ").trim().split(/\s+/);

  if (prefersReducedMotion) {
    return <Tag className={className}>{text.replace(/\n/g, " ").trim()}</Tag>;
  }

  return (
    <Tag className={cn(className)} aria-label={text.replace(/\n/g, " ").trim()}>
      {units.map((unit, i) => (
        <motion.span
          key={`${unit}-${i}`}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {unit}
        </motion.span>
      ))}
    </Tag>
  );
}
