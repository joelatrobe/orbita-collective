"use client";

import { useRef, useEffect, useCallback } from "react";
import { useBooking } from "./BookingProvider";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

const PARTICLE_COUNT = 160;
const MOUSE_RADIUS = 250;
const ORBIT_STRENGTH = 0.06;

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  depth: number;
  color: "coral" | "blue" | "neutral";
  baseAlpha: number;
  orbitRadius: number;
  orbitAngle: number;
  captured: boolean;
}

function createParticles(w: number, h: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const depth = 0.2 + Math.random() * 0.8;
    const colorRoll = Math.random();
    let color: Particle["color"] = "neutral";
    if (colorRoll < 0.35) color = "coral";
    else if (colorRoll < 0.65) color = "blue";

    const px = Math.random() * w;
    const py = Math.random() * h;
    particles.push({
      x: px,
      y: py,
      originX: px,
      originY: py,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: 0.4 + depth * 1.3,
      depth,
      color,
      baseAlpha: 0.25 + depth * 0.35,
      orbitRadius: 30 + Math.random() * 120,
      orbitAngle: Math.random() * Math.PI * 2,
      captured: false,
    });
  }
  return particles;
}

function getColor(color: Particle["color"]): [number, number, number] {
  switch (color) {
    case "coral": return [255, 135, 111];
    case "blue": return [141, 179, 219];
    case "neutral": return [160, 150, 140];
  }
}

function useGravitationalParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animRef = useRef<number>(0);
  const reducedMotion = useReducedMotion();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const mouseActive = mouseRef.current.active;
    const particles = particlesRef.current;

    // Find the 5 nearest particles to mouse for capture
    const MAX_CAPTURED = 5;
    let capturedIndices: Set<number> = new Set();

    if (mouseActive) {
      const withDist = particles.map((p, i) => ({
        i,
        dist: Math.sqrt((mx - p.x) ** 2 + (my - p.y) ** 2),
      }));
      withDist.sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < Math.min(MAX_CAPTURED, withDist.length); k++) {
        if (withDist[k].dist < MOUSE_RADIUS) {
          capturedIndices.add(withDist[k].i);
        }
      }
    }

    const time = Date.now() * 0.001;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.captured = capturedIndices.has(i);

      if (p.captured) {
        // Orbit the mouse
        p.orbitAngle += (0.003 + p.depth * 0.005);
        const targetX = mx + Math.cos(p.orbitAngle) * (20 + p.orbitRadius * 0.4);
        const targetY = my + Math.sin(p.orbitAngle) * (20 + p.orbitRadius * 0.4);

        p.vx += (targetX - p.x) * ORBIT_STRENGTH * 0.6;
        p.vy += (targetY - p.y) * ORBIT_STRENGTH * 0.6;
        p.vx *= 0.92;
        p.vy *= 0.92;
      } else {
        // Gentle ambient flow — always moving, never static
        // Each particle drifts in a slow unique pattern using sin/cos
        const flowX = Math.sin(time * 0.3 + p.originX * 0.01 + p.originY * 0.007) * 0.08;
        const flowY = Math.cos(time * 0.25 + p.originY * 0.01 + p.originX * 0.005) * 0.06;
        p.vx += flowX;
        p.vy += flowY;

        // Spring back toward origin (soft — lets the drift move them slightly)
        const toOriginX = p.originX - p.x;
        const toOriginY = p.originY - p.y;
        p.vx += toOriginX * 0.015;
        p.vy += toOriginY * 0.015;

        p.vx *= 0.95;
        p.vy *= 0.95;
      }

      // Velocity cap
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const maxSpeed = p.captured ? 2.5 : 0.8;
      if (speed > maxSpeed) {
        p.vx = (p.vx / speed) * maxSpeed;
        p.vy = (p.vy / speed) * maxSpeed;
      }

      p.x += p.vx;
      p.y += p.vy;
    }

    // Draw particles
    for (const p of particles) {
      const [r, g, b] = getColor(p.color);
      let alpha = p.baseAlpha;

      // Glow when captured
      if (p.captured) {
        alpha = Math.min(alpha + 0.4 * p.depth, 0.9);
      }

      // Twinkle
      const twinkle = 1 + Math.sin(Date.now() * 0.002 * p.depth + p.orbitAngle * 3) * 0.2;
      const size = p.size * twinkle;

      ctx.beginPath();
      ctx.arc(p.x * dpr, p.y * dpr, size * dpr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fill();

      // Soft glow for colored captured particles
      if (p.captured && p.color !== "neutral") {
        ctx.beginPath();
        ctx.arc(p.x * dpr, p.y * dpr, size * 4 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.06})`;
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(animate);
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      particlesRef.current = createParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reducedMotion) {
      animRef.current = requestAnimationFrame(animate);
    } else {
      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;
      if (ctx) {
        for (const p of particlesRef.current) {
          const [r, g, b] = getColor(p.color);
          ctx.beginPath();
          ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.baseAlpha})`;
          ctx.fill();
        }
      }
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };
    const handleLeave = () => { mouseRef.current = { ...mouseRef.current, active: false }; };

    container.addEventListener("mousemove", handleMouse);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouse);
      container.removeEventListener("mouseleave", handleLeave);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [canvasRef, containerRef, animate, reducedMotion]);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { open: openBooking } = useBooking();

  useGravitationalParticles(canvasRef, containerRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Animated logo — 60% of previous 650px = ~390px */}
        <motion.div
          initial={{ opacity: 0, transform: "scale(0.9)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mx-auto mb-2"
        >
          <img
            src="/logos/logo-dark.gif"
            alt="Orbita Collective"
            className="w-[300px] md:w-[390px] max-w-[80vw] mx-auto object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, transform: "translateY(30px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="font-sans font-semibold text-4xl md:text-6xl lg:text-7xl text-dark leading-[1.1] tracking-tight"
        >
          We reinvented consultancy
          <br />
          <span className="font-serif italic font-normal text-coral">
            so you could reinvent
          </span>
          <br />
          your products & services.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto font-light leading-relaxed"
        >
          Design, innovation, and customer experience consultancy.
          <br className="hidden sm:block" />
          Usable tools your teams can own from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, transform: "translateY(15px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#services" className="bg-dark text-cream px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:bg-dark/90 transition-colors duration-200">
            Explore our work
          </a>
          <button onClick={openBooking} className="border border-dark/20 text-dark px-8 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:border-dark/40 transition-colors duration-200">
            Get in touch
          </button>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-px h-12 bg-dark/25 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
