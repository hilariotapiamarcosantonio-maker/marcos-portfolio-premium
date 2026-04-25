import CaseMockup from "@/components/CaseMockup";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies, ctaLabels } from "@/content/site";

export default function Cases() {
  return (
    <section id="cases" className="relative scroll-mt-20 md:scroll-mt-24 lg:py-26 py-20 md:py-24">
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="content-shell">
        <SectionHeading
          eyebrow="Evidencia"
          title="Casos estructurados como sistemas de negocio, no como una galería."
          description="Cada proyecto se presenta como contexto comercial, sistema construido y valor operativo. La evidencia visual acompaña la lectura estratégica con capturas reales de activos digitales en producción."
          align="center"
          compact
          className="max-w-[54rem]"
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className={`panel-premium relative overflow-hidden rounded-[30px] border p-5 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 md:p-6 xl:p-6 ${
                study.featured
                  ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(17,17,17,0.92))]"
                  : "border-outline-variant/14 bg-surface-container-low/88"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0"
              />

              <CaseMockup
                project={study.name}
                label={study.mockupLabel}
                note={study.mockupNote}
                chips={study.mockupChips}
                image={study.image}
                featured={study.featured}
              />

              <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3 border-b border-outline-variant/12 pb-4 sm:pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
                    {study.sector}
                  </p>
                  <h3 className="mt-1.5 sm:mt-2 font-headline text-[1.3rem] sm:text-[1.45rem] font-bold leading-[1.1] sm:leading-[1.07] text-tertiary/95 md:text-[1.72rem]">
                    {study.name}
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                  {study.featured
                    ? "Caso estratégico destacado"
                    : "Caso de arquitectura aplicada"}
                </span>
              </div>

              <div className="mt-4 sm:mt-5 grid gap-2 sm:gap-3.5">
                <div className="rounded-[18px] sm:rounded-[22px] border border-outline-variant/12 bg-black/10 px-3 py-2.5 sm:p-4">
                  <p className="text-[8.5px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-outline">
                    Problema
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-[0.8rem] sm:text-sm leading-[1.25] sm:leading-6.5 text-secondary/75 md:text-[0.98rem]">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-[18px] sm:rounded-[22px] border border-outline-variant/12 bg-black/10 px-3 py-2.5 sm:p-4">
                  <p className="text-[8.5px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-outline">
                    Sistema construido
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-[0.8rem] sm:text-sm leading-[1.25] sm:leading-6.5 text-secondary/75 md:text-[0.98rem]">
                    {study.systemBuilt}
                  </p>
                </div>

                <div className="rounded-[18px] sm:rounded-[22px] border border-primary/14 bg-primary/6 px-3 py-2.5 sm:p-4">
                  <p className="text-[8.5px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-outline">
                    Valor comercial
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-[0.8rem] sm:text-sm leading-[1.25] sm:leading-6.5 text-tertiary/80 md:text-[0.98rem]">
                    {study.commercialValue}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#audit"
            className="inline-flex items-center justify-center rounded-full border border-outline-variant/20 px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-tertiary transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          >
            {ctaLabels.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}
