import SectionHeading from "@/components/SectionHeading";
import { businessModules } from "@/content/site";

export default function Manifesto() {
  return (
    <section
      id="system"
      className="scroll-mt-24 border-y border-outline-variant/10 bg-surface-container-low py-28 md:py-36"
    >
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Sistema"
          title="Esto no es una web bonita. Es una infraestructura comercial sobria."
          description="Cada módulo se construye para mover una consecuencia de negocio: captar mejor, responder más rápido, seguir con criterio y operar con visibilidad."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {businessModules.map((module) => (
            <article
              key={module.title}
              className="panel-premium rounded-[30px] border border-outline-variant/12 bg-surface px-6 py-8 transition-all hover:-translate-y-1 hover:border-primary/28"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                Módulo
              </p>
              <h3 className="mt-4 font-headline text-2xl font-bold text-tertiary">
                {module.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-secondary">
                {module.description}
              </p>
              <div className="mt-6 border-t border-outline-variant/12 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                  Impacto buscado
                </p>
                <p className="mt-3 text-sm leading-7 text-tertiary/85">
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
