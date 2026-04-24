import CaseMockup from "@/components/CaseMockup";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/content/site";

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-24 py-28 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Evidencia"
          title="Casos pensados como sistemas de negocio, no como galerías de trabajos."
          description="Cada caso se estructura en problema, sistema construido y valor comercial. La base queda lista para incorporar capturas, stack o métricas cuando se documenten en detalle."
        />

        <div className="mt-14 grid gap-7 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className={`panel-premium rounded-[34px] border p-6 md:p-8 ${
                study.featured
                  ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(17,17,17,0.9))]"
                  : "border-outline-variant/14 bg-surface-container-low/85"
              }`}
            >
              <CaseMockup
                project={study.name}
                label={study.mockupLabel}
                note={study.mockupNote}
                featured={study.featured}
              />

              <div className="mt-8 flex flex-col gap-4 border-b border-outline-variant/12 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {study.sector}
                  </p>
                  <h3 className="mt-3 font-headline text-[1.85rem] font-bold leading-tight text-tertiary md:text-[2.15rem]">
                    {study.name}
                  </h3>
                </div>
                {study.featured ? (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
                    Caso estratégico destacado
                  </span>
                ) : null}
              </div>

              <div className="mt-8 grid gap-6">
                <div className="rounded-[24px] border border-outline-variant/12 bg-black/8 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Problema
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary md:text-base">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[24px] border border-outline-variant/12 bg-black/8 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Sistema construido
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary md:text-base">
                    {study.systemBuilt}
                  </p>
                </div>

                <div className="rounded-[24px] border border-primary/14 bg-primary/6 p-5">
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
