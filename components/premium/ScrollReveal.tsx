"use client";

import { Children, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealVariant = "fade-up" | "fade-in" | "scale" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  stagger?: number;
}

function offsetFor(variant: RevealVariant) {
  switch (variant) {
    case "scale":
      return { x: 0, y: 0, scale: 0.97 };
    case "slide-left":
      return { x: -28, y: 0, scale: 1 };
    case "slide-right":
      return { x: 28, y: 0, scale: 1 };
    case "fade-in":
      return { x: 0, y: 0, scale: 1 };
    default:
      return { x: 0, y: 20, scale: 1 };
  }
}

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  stagger = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = offsetFor(variant);
  const items = Children.toArray(children);

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  if (stagger > 0 && items.length > 1) {
    return (
      <div className={cn(className)}>
        {items.map((child, index) => (
          <motion.div
            key={index}
            className="h-full"
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration, delay: delay + index * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
