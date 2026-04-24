import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/content/site";

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-24 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Evidencia"
          title="Casos pensados como sistemas de negocio, no como galerias de trabajos."
          description="Cada caso se estructura en problema, sistema construido y valor comercial. La base queda lista para incorporar capturas, stack o metricas cuando se documenten en detalle."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className={`rounded-[32px] border p-8 md:p-10 ${
                study.featured
                  ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(17,17,17,0.85))]"
                  : "border-outline-variant/14 bg-surface-container-low/80"
              }`}
            >
              <div className="flex flex-col gap-4 border-b border-outline-variant/12 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {study.sector}
                  </p>
                  <h3 className="mt-3 font-headline text-3xl font-bold text-tertiary">
                    {study.name}
                  </h3>
                </div>
                {study.featured ? (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
                    Caso estrategico destacado
                  </span>
                ) : null}
              </div>

              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Problema
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary md:text-base">
                    {study.problem}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Sistema construido
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary md:text-base">
                    {study.systemBuilt}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Valor comercial
                  </p>
                  <p className="mt-3 text-sm leading-7 text-tertiary/88 md:text-base">
                    {study.commercialValue}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
