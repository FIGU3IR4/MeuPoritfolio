"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile } from "@/lib/data";
import { useBooted } from "@/components/BootSequence";

const codeLines = [
  `const developer = {`,
  `  nome: "${profile.name}",`,
  `  cargo: "${profile.role}",`,
  `  stack: [${profile.stackHighlight
    .split(" · ")
    .map((s) => `"${s}"`)
    .join(", ")}],`,
  `  status: "${profile.availability}",`,
  `};`,
];

/** Typewriter that only starts once the boot sequence has handed off. */
function useTypewriter(active: boolean) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    if (visibleLines >= codeLines.length) {
      setDone(true);
      return;
    }
    const currentLine = codeLines[visibleLines];
    if (visibleChars < currentLine.length) {
      const t = setTimeout(() => setVisibleChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((l) => l + 1);
      setVisibleChars(0);
    }, 220);
    return () => clearTimeout(t);
  }, [active, visibleChars, visibleLines]);

  return { visibleLines, visibleChars, done };
}

/** Wraps children in a mouse-reactive 3D tilt (perspective rotateX/rotateY). */
function TiltCard({
  children,
  className = "",
  strength = 10,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springPx = useSpring(px, { stiffness: 150, damping: 18 });
  const springPy = useSpring(py, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(springPy, [0, 1], [strength, -strength]);
  const rotateY = useTransform(springPx, [0, 1], [-strength, strength]);
  const glowX = useTransform(springPx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springPy, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      <motion.div
        aria-hidden
        style={{
          background: `radial-gradient(240px circle at ${glowX} ${glowY}, rgba(94,200,216,0.16), transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0 z-10"
      />
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const booted = useBooted();
  const { visibleLines, visibleChars, done } = useTypewriter(booted);

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden bg-blueprint pt-24"
      style={{ perspective: 1200 }}
    >
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-blueprint/40 via-blueprint to-blueprint" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={booted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="path-label mb-4">~/inicio</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-paper sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-cyan-signal sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-3 max-w-md font-mono text-sm text-muted">
            {profile.stackHighlight}
          </p>
          <p className="mt-1 max-w-md font-mono text-sm text-muted">
            {profile.secondaryStack}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-sm bg-amber-signal px-6 py-3 font-mono text-sm font-medium text-blueprint-darker transition-transform hover:scale-[1.02]"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-sm border border-cyan-signal/40 px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-cyan-signal hover:text-cyan-signal"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>

        {/* Visual composition: photo + floating terminal card */}
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <TiltCard
            strength={8}
            className="corner-frame relative aspect-[4/5] w-full overflow-hidden border border-cyan-signal/25 bg-blueprint-darker shadow-2xl shadow-black/50"
          >
            <PhotoReveal />
          </TiltCard>

          {/* Floating terminal card overlapping the photo */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={
              booted
                ? { opacity: 1, y: 0, x: 0 }
                : { opacity: 0, y: 20, x: -10 }
            }
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -left-6 w-[92%] max-w-[280px] sm:-left-10"
          >
            <TiltCard
              strength={5}
              className="corner-frame overflow-hidden rounded-sm border border-cyan-signal/20 bg-blueprint-darker/95 shadow-xl shadow-black/40 backdrop-blur"
            >
              <div className="flex items-center gap-2 border-b border-cyan-signal/10 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-cyan-signal/30" />
                <span className="h-2 w-2 rounded-full bg-cyan-signal/30" />
                <span className="h-2 w-2 rounded-full bg-cyan-signal/30" />
                <span className="ml-1 font-mono text-[11px] text-muted">
                  perfil.ts
                </span>
              </div>
              <pre className="min-h-[150px] px-4 py-4 font-mono text-[11px] leading-6 text-paper">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                {!done && (
                  <div>
                    {codeLines[visibleLines]?.slice(0, visibleChars)}
                    <span className="cursor-blink">&nbsp;</span>
                  </div>
                )}
                {done && (
                  <div>
                    <span className="cursor-blink">&nbsp;</span>
                  </div>
                )}
              </pre>
            </TiltCard>
          </motion.div>

          {/* Floating tech chips for extra depth */}
          <FloatingChip
            label="TypeScript"
            className="right-2 top-6 hidden lg:flex"
            delay={0.7}
          />
          <FloatingChip
            label="Next.js"
            className="-right-8 top-1/3 hidden lg:flex"
            delay={0.85}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Progressive "rendering" reveal for the profile photo:
 * 1) the image itself sharpens from a heavy blur/desaturated state
 * 2) alternating horizontal strips wipe away like blinds, left/right,
 *    staggered top to bottom — mimicking a screen drawing line by line
 * 3) a glowing scan line sweeps down in sync with the strips
 */
function PhotoReveal() {
  const booted = useBooted();
  const [revealed, setRevealed] = useState(false);
  const stripCount = 12;

  useEffect(() => {
    if (!booted) return;
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, [booted]);

  return (
    <div className="relative h-full w-full">
      {/* Base placeholder (shows if no real photo has been added yet) */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blueprint-darker via-blueprint to-blueprint-darker">
        <span className="font-mono text-xs text-muted">
          coloque sua foto em /public/foto.jpg
        </span>
      </div>

      <motion.div
        initial={{ filter: "blur(24px) saturate(0.3)", opacity: 0, scale: 1.08 }}
        animate={
          revealed
            ? { filter: "blur(0px) saturate(1)", opacity: 1, scale: 1 }
            : {}
        }
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover grayscale-[15%]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.opacity = "0";
          }}
        />
      </motion.div>

      {/* Line-by-line "render" strips */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col">
        {Array.from({ length: stripCount }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 1 }}
            animate={revealed ? { scaleX: 0 } : {}}
            transition={{
              duration: 0.45,
              delay: 0.2 + i * 0.055,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              transformOrigin: i % 2 === 0 ? "left" : "right",
              height: `${100 / stripCount}%`,
            }}
            className="w-full bg-blueprint-darker"
          />
        ))}
      </div>

      {/* Scan line sweeping down as the strips clear */}
      <motion.div
        initial={{ top: "0%", opacity: 0 }}
        animate={
          revealed ? { top: "100%", opacity: [0, 1, 1, 0] } : { opacity: 0 }
        }
        transition={{ duration: 1.05, delay: 0.2, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 z-30 h-[2px] bg-cyan-signal shadow-[0_0_16px_3px_rgba(94,200,216,0.7)]"
      />

      {/* Corner readout, puramente decorativo — reforça o motivo blueprint */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-10 font-mono text-[10px] text-cyan-signal/70">
        FIG. 01 — PERFIL
      </div>
    </div>
  );
}

function FloatingChip({
  label,
  className = "",
  delay = 0,
}: {
  label: string;
  className?: string;
  delay?: number;
}) {
  const booted = useBooted();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        booted
          ? { opacity: 1, scale: 1, y: [0, -8, 0] }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: booted
          ? { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
          : { duration: 0 },
      }}
      className={`absolute z-20 items-center rounded-sm border border-cyan-signal/25 bg-blueprint-darker/90 px-3 py-1.5 font-mono text-[11px] text-cyan-signal shadow-lg shadow-black/30 backdrop-blur ${className}`}
    >
      {label}
    </motion.div>
  );
}
