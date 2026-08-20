"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import type { Mesh } from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function FloatingOrb({
  position,
  color,
  scale,
  speed,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const orbs = useMemo(
    () =>
      isMobile
        ? [{ position: [0, 0, 0] as [number, number, number], color: "#B5121B", scale: 1, speed: 1 }]
        : [
            { position: [0.2, 0.15, 0] as [number, number, number], color: "#B5121B", scale: 1.15, speed: 1 },
            { position: [-1.1, -0.6, -0.8] as [number, number, number], color: "#D72638", scale: 0.55, speed: 1.2 },
            { position: [1.1, -0.8, -1] as [number, number, number], color: "#fbbf24", scale: 0.35, speed: 0.9 },
          ],
    [isMobile]
  );

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5f5" />
      <pointLight position={[-4, 2, 2]} intensity={2} color="#B5121B" />
      <pointLight position={[4, -2, 3]} intensity={1.5} color="#fbbf24" />
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} {...orb} />
      ))}
    </>
  );
}

export function HeroScene() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
