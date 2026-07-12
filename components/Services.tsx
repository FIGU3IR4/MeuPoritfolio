import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="relative bg-blueprint-darker py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="path-label mb-3">~/servicos</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Soluções para cada <span className="text-cyan-signal">etapa do seu negócio</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="corner-frame flex flex-col border border-cyan-signal/10 bg-blueprint p-6"
            >
              <h3 className="font-display text-lg font-semibold text-paper">
                {service.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-amber-signal">
                {service.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-paper"
                  >
                    <span className="mt-1 text-cyan-signal">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-cyan-signal/10 pt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-cyan-signal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
