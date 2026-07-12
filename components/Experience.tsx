import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="relative bg-blueprint py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="path-label mb-3">~/experiencia</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Experiência <span className="text-cyan-signal">Profissional</span>
        </h2>

        <div className="mt-12 border-l border-cyan-signal/20 pl-8">
          {experience.map((item, i) => (
            <div key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-amber-signal" />
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-paper">
                {item.role}
              </h3>
              <p className="font-mono text-sm text-cyan-signal">
                {item.company}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
