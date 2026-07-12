import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-signal/10 bg-blueprint-darker py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-paper">
            {profile.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {profile.role} focado(a) em criar interfaces elegantes, rápidas
            e funcionais.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-amber-signal">
            Navegação
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-cyan-signal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-amber-signal">
            Contato
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{profile.email}</li>
            <li>{profile.location}</li>
            <li>{profile.availability}</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-6 font-mono text-xs text-muted">
        © {year} {profile.name} — Todos os direitos reservados
      </p>
    </footer>
  );
}
