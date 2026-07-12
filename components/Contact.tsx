import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="relative bg-blueprint py-24">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="path-label mb-3 justify-center">~/contato</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Vamos <span className="text-cyan-signal">trabalhar juntos?</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Estou disponível para oportunidades de emprego, projetos freelance
          e colaborações. Se você tem um projeto interessante ou uma vaga que
          combina com meu perfil, me chame.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="corner-frame w-full border border-cyan-signal/20 px-6 py-4 font-mono text-sm text-paper transition-colors hover:border-amber-signal sm:w-auto"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="corner-frame w-full border border-cyan-signal/20 px-6 py-4 font-mono text-sm text-paper transition-colors hover:border-amber-signal sm:w-auto"
          >
            LinkedIn
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="corner-frame w-full border border-cyan-signal/20 px-6 py-4 font-mono text-sm text-paper transition-colors hover:border-amber-signal sm:w-auto"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
