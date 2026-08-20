"use client";

import { useEffect, useRef } from "react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scale = useRef(1);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    document.body.classList.add("premium-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest(
        "a, button, [data-cursor='pointer'], [data-cursor='card'], input, textarea, select"
      );
      if (!interactive) {
        scale.current = 1;
        return;
      }
      scale.current = interactive.matches("[data-cursor='card']") ? 2.2 : 1.6;
    };

    let frame: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current})`;
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current * 1.4})`;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    frame = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("premium-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, [isTouch, prefersReducedMotion]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="premium-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-red-400/40 bg-red-500/5 mix-blend-screen"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="premium-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]"
        aria-hidden
      />
    </>
  );
}
