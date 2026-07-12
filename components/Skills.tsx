import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="habilidades" className="relative bg-blueprint py-24">
      <div className="blueprint-grid-fine absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="path-label mb-3">~/habilidades</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Habilidades <span className="text-cyan-signal">Técnicas</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="corner-frame border border-cyan-signal/10 bg-blueprint-darker/60 p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber-signal">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-cyan-signal/20 px-3 py-1 font-mono text-xs text-paper"
                  >
                    {item}
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
