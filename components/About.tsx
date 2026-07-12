import { aboutParagraphs, aboutStats } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre" className="relative bg-blueprint-darker py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="path-label mb-3">~/sobre</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Criando experiências <span className="text-cyan-signal">digitais precisas</span>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="corner-frame border border-cyan-signal/10 bg-blueprint px-5 py-6"
              >
                <p className="font-display text-3xl font-semibold text-amber-signal">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
