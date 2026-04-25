import SectionHeading from "@/components/SectionHeading";
import { businessModules } from "@/content/site";

export default function Manifesto() {
  return (
    <section
      id="system"
      className="relative scroll-mt-20 md:scroll-mt-24 py-20 md:py-24"
    >
      <div className="content-shell">
        <SectionHeading
          eyebrow="Sistema"
          title="Esto no es una web bonita. Es una infraestructura comercial sobria."
          description="Cada módulo se construye para mover una consecuencia de negocio: captar mejor, responder más rápido, seguir con criterio y operar con visibilidad."
          align="center"
          compact
          className="max-w-[52rem]"
        />

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {businessModules.map((module) => (
            <article
              key={module.title}
              className="panel-premium rounded-[26px] border border-outline-variant/12 bg-surface px-5 py-5 transition-all hover:-translate-y-1 hover:border-primary/28 md:px-5 md:py-6 xl:px-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
                Módulo
              </p>
              <h3 className="mt-3 font-headline text-[1.34rem] font-bold leading-[1.08] text-tertiary/95 md:text-[1.48rem]">
                {module.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-secondary/75">
                {module.description}
              </p>
              <div className="mt-4 border-t border-outline-variant/12 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-outline">
                  Impacto buscado
                </p>
                <p className="mt-2 text-sm leading-6 text-tertiary/75">
                  {module.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
