"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BootContext = createContext(false);

/** Returns true once the boot sequence has finished and exited the screen. */
export function useBooted() {
  return useContext(BootContext);
}

// Fase 1 — linhas de "boot" no estilo terminal.
const bootLines = [
  "> inicializando sistema...",
  "> autenticando desenvolvedor: Victor Figueira",
  "> montando componentes: Hero → About → Skills → Projects → Experience",
  "> compilando build de produção... ✓",
  "> conexão estabelecida.",
];

// Fase 2 — mensagem de boas-vindas pessoal, revelada linha a linha.
const welcomeLines = [
  { text: "Olá,", className: "text-muted" },
  { text: "bem-vindo(a) ao meu portfólio.", className: "text-paper" },
  { text: "Victor Figueira", className: "text-cyan-signal" },
  { text: "Desenvolvedor(a) Full-Stack", className: "text-amber-signal" },
];

const CHAR_DELAY = 22; // ms por caractere digitado
const LINE_PAUSE = 320; // ms entre uma linha de boot e a próxima
const POST_BOOT_PAUSE = 500; // ms de respiro antes da mensagem de boas-vindas
const WELCOME_HOLD = 2000; // ms que a mensagem de boas-vindas fica na tela
const EXIT_DURATION = 0.8; // s da animação de saída (cortina subindo)
const BOOTED_DELAY = 700; // ms após iniciar a saída até liberar as animações do resto do site

export default function BootSequence({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);
  const [booted, setBooted] = useState(false);
  const [phase, setPhase] = useState<"typing" | "welcome">("typing");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Respeita prefers-reduced-motion: pula a sequência inteira.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      setBooted(true);
    }
  }, []);

  // Fase 1: digitação das linhas de boot.
  useEffect(() => {
    if (!show || phase !== "typing") return;

    if (lineIndex >= bootLines.length) {
      const t = setTimeout(() => setPhase("welcome"), POST_BOOT_PAUSE);
      return () => clearTimeout(t);
    }
    const currentLine = bootLines[lineIndex];
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_DELAY);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [show, phase, lineIndex, charIndex]);

  // Fase 2: segura a mensagem de boas-vindas na tela e então sai.
  useEffect(() => {
    if (!show || phase !== "welcome") return;
    const t = setTimeout(() => setShow(false), WELCOME_HOLD);
    return () => clearTimeout(t);
  }, [show, phase]);

  // Trava o scroll durante o boot; libera as animações do site após a saída.
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    const t = setTimeout(() => setBooted(true), BOOTED_DELAY);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <BootContext.Provider value={booted}>
      <AnimatePresence>
        {show && (
          <motion.div
            key="boot"
            exit={{ y: "-100%" }}
            transition={{ duration: EXIT_DURATION, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-blueprint-darker"
          >
            <div className="blueprint-grid absolute inset-0 opacity-30" />

            <AnimatePresence mode="wait">
              {phase === "typing" ? (
                <motion.div
                  key="typing"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-xl px-6 font-mono text-sm"
                >
                  {bootLines.slice(0, lineIndex).map((line, i) => (
                    <div key={i} className="mb-1.5 text-muted">
                      <span className="text-amber-signal">$</span> {line}
                    </div>
                  ))}
                  {lineIndex < bootLines.length && (
                    <div className="mb-1.5 text-paper">
                      <span className="text-amber-signal">$</span>{" "}
                      {bootLines[lineIndex].slice(0, charIndex)}
                      <span className="cursor-blink">&nbsp;</span>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-xl px-6 text-center"
                >
                  <p className="path-label mb-4 justify-center">
                    ~/boas-vindas
                  </p>
                  {welcomeLines.map((line, i) => (
                    <motion.p
                      key={line.text}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`font-display text-2xl font-semibold sm:text-3xl ${line.className}`}
                    >
                      {line.text}
                    </motion.p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShow(false)}
              className="absolute bottom-6 right-6 font-mono text-xs text-muted transition-colors hover:text-cyan-signal"
            >
              pular →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </BootContext.Provider>
  );
}
