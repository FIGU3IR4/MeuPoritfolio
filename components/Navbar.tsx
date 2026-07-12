"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-blueprint-darker/90 backdrop-blur border-b border-cyan-signal/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#topo"
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          {profile.name}
          <span className="text-amber-signal">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted transition-colors hover:text-cyan-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="hidden rounded-sm border border-cyan-signal/40 px-4 py-2 font-mono text-sm text-paper transition-colors hover:border-amber-signal hover:text-amber-signal md:inline-block"
        >
          Download CV
        </a>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-xl">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-signal/10 bg-blueprint-darker px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-muted hover:text-cyan-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                className="font-mono text-sm text-amber-signal"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
