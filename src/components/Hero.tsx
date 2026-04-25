import { ctaLabels, heroHighlights } from "@/content/site";

const systemSteps = [
  {
    label: "Captación",
    value:
      "Landing premium, formularios y rutas claras para que la demanda entre con criterio.",
  },
  {
    label: "Seguimiento",
    value:
      "CRM, estados, alertas y automatizaciones para que ningún prospecto serio se enfríe.",
  },
  {
    label: "Control",
    value:
      "Dashboards y visibilidad comercial para decidir con datos y no con intuición.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden pb-10 pt-20 sm:pb-12 sm:pt-24 md:pb-16 md:pt-28 lg:pb-10 lg:pt-24 xl:pb-12 xl:pt-[6.75rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:68px_68px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.16),transparent_58%)]"
      />

      <div className="content-shell relative z-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(390px,520px)] lg:items-start lg:gap-9 xl:gap-11">
          <div className="min-w-0 max-w-[48rem]">
            <div className="flex justify-center sm:justify-start">
              <span className="inline-flex max-w-[95vw] text-center justify-center rounded-full border border-primary/20 bg-primary/8 px-3.5 sm:px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.28em] text-primary sm:text-[10px]">
                Arquitectura digital premium
              </span>
            </div>

            <h1 className="mt-5 sm:mt-4 max-w-[calc(100vw-1.5rem)] break-words font-headline text-[clamp(1.65rem,6.8vw,2.2rem)] font-extrabold leading-[1.08] tracking-normal text-tertiary sm:text-[clamp(2rem,7.2vw,2.55rem)] sm:leading-[1.04] sm:max-w-[23ch] lg:max-w-[800px] lg:text-[clamp(2.85rem,3.35vw,3.4rem)]">
              <span className="block">No construyo páginas web.</span>
              <span className="mt-2 block">
                Construyo infraestructura digital para vender con autoridad.
              </span>
            </h1>

            <p className="mt-4 max-w-[calc(100vw-1.5rem)] text-[0.95rem] leading-[1.6] text-secondary sm:max-w-[44rem] sm:text-[0.98rem] sm:leading-7 md:text-[1.04rem]">
              Diseño ecosistemas comerciales con web premium, CRM,
              automatización, dashboards y seguimiento para negocios que
              necesitan captar, organizar y convertir mejor sus oportunidades.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3.5">
              <a
                href="#audit"
                className="bronze-glow inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-center text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:text-[11px] sm:tracking-[0.24em]"
              >
                {ctaLabels.primary}
              </a>
              <a
                href="#cases"
                className="inline-flex w-full items-center justify-center rounded-full border border-outline-variant/28 px-5 py-4 text-center text-[10.5px] font-bold uppercase tracking-[0.16em] text-tertiary transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:w-auto sm:px-6 sm:text-[11px] sm:tracking-[0.22em]"
              >
                {ctaLabels.secondary}
              </a>
            </div>

            <div className="mt-6 sm:mt-5 flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2.5">
              {heroHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-outline-variant/28 bg-surface-container-low/70 px-3 py-1.5 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-[11px] font-medium text-secondary transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-primary/24 hover:text-tertiary"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-premium w-full justify-self-end rounded-[28px] border border-outline-variant/18 bg-surface-container-low/88 p-4 sm:p-5 backdrop-blur md:p-6 lg:max-w-[520px] xl:p-7">
            <div className="flex items-start justify-between gap-3 border-b border-outline-variant/12 pb-3 sm:pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Infraestructura conectada
                </p>
                <p className="mt-1.5 sm:mt-2 max-w-md text-[0.85rem] sm:text-sm leading-[1.4] sm:leading-6 text-secondary">
                  Cada capa está diseñada para sostener autoridad, ordenar
                  oportunidades y volver más predecible la operación comercial.
                </p>
              </div>
              <span className="hidden rounded-full border border-primary/16 bg-primary/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary xl:inline-flex">
                Sistema premium
              </span>
            </div>

            <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3.5">
              {systemSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex gap-3 border-b border-outline-variant/12 pb-2.5 sm:pb-3.5 transition-transform duration-500 last:border-b-0 last:pb-0 hover:translate-x-1"
                >
                  <span className="font-headline text-[1.2rem] sm:text-[1.35rem] font-bold text-primary/70">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-tertiary">
                      {step.label}
                    </h2>
                    <p className="mt-1 sm:mt-1.5 text-[0.8rem] sm:text-[0.86rem] leading-[1.4] sm:leading-6 text-secondary">
                      {step.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 hidden sm:block rounded-[20px] border border-primary/14 bg-primary/6 p-3.5">
              <p className="text-[0.86rem] leading-6 text-secondary">
                El objetivo no es parecer premium. El objetivo es que la
                presencia digital sostenga confianza, ordene el pipeline y
                permita operar con criterio ejecutivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
