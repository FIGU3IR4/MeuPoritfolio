import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projetos" className="relative bg-blueprint-darker py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="path-label mb-3">~/projetos</p>
        <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Projetos em <span className="text-cyan-signal">Destaque</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="corner-frame flex flex-col justify-between border border-cyan-signal/10 bg-blueprint p-6"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-paper">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-cyan-signal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 font-mono text-sm text-amber-signal hover:underline"
              >
                {project.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
