import CaseMockup from "@/components/CaseMockup";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies, ctaLabels } from "@/content/site";

export default function Cases() {
  return (
    <section id="cases" className="relative scroll-mt-24 py-32 md:py-40">
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Evidencia"
          title="Casos estructurados como sistemas de negocio, no como una galería."
          description="Cada proyecto se presenta como contexto comercial, sistema construido y valor operativo. La evidencia visual acompaña la lectura estratégica con capturas reales de activos digitales en producción."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className={`panel-premium relative overflow-hidden rounded-[36px] border p-6 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 md:p-8 ${
                study.featured
                  ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(17,17,17,0.92))]"
                  : "border-outline-variant/14 bg-surface-container-low/88"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0"
              />

              <CaseMockup
                project={study.name}
                label={study.mockupLabel}
                note={study.mockupNote}
                chips={study.mockupChips}
                image={study.image}
                featured={study.featured}
              />

              <div className="mt-8 flex flex-col gap-4 border-b border-outline-variant/12 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    {study.sector}
                  </p>
                  <h3 className="mt-3 font-headline text-[1.7rem] font-bold leading-tight text-tertiary md:text-[2.1rem]">
                    {study.name}
                  </h3>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
                  {study.featured
                    ? "Caso estratégico destacado"
                    : "Caso de arquitectura aplicada"}
                </span>
              </div>

              <div className="mt-8 grid gap-6">
                <div className="rounded-[24px] border border-outline-variant/12 bg-black/10 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-outline">
                    Problema
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary md:text-base">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[24px] border border-outline-variant/12 bg-black/10 p-5">
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

        <div className="mt-12 flex justify-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-full border border-outline-variant/20 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-tertiary transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            {ctaLabels.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}
