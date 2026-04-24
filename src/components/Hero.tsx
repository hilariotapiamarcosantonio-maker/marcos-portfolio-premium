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
      className="relative scroll-mt-24 overflow-hidden pb-20 pt-24 md:pb-24 md:pt-32 xl:pb-24 xl:pt-36"
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)] lg:items-center xl:gap-12">
          <div className="max-w-[54rem]">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              Arquitectura digital premium
            </span>

            <h1 className="mt-5 max-w-[15.4ch] font-headline text-[clamp(2.65rem,6.1vw,4.35rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-tertiary">
              <span className="block">No construyo páginas web.</span>
              <span className="mt-3 block max-w-[17.2ch]">
                Diseño infraestructura digital para negocios que necesitan
                captar clientes, controlar su operación y escalar con
                autoridad.
              </span>
            </h1>

            <p className="mt-6 max-w-[42rem] text-[0.98rem] leading-7 text-secondary md:text-[1.05rem]">
              Web comercial, CRM, automatizaciones, dashboards y seguimiento
              conectados en un sistema serio. Menos improvisación. Más control
              sobre demanda, conversión y operación.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {heroHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-outline-variant/28 bg-surface-container-low/70 px-3.5 py-1.5 text-[11px] font-medium text-secondary transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-primary/24 hover:text-tertiary"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="#audit"
                className="bronze-glow inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5"
              >
                {ctaLabels.primary}
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center rounded-full border border-outline-variant/28 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-tertiary transition-[transform,border-color,color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              >
                {ctaLabels.secondary}
              </a>
            </div>

            <p className="mt-5 max-w-[38rem] text-sm leading-6.5 text-outline">
              Para negocios que venden servicios, proyectos o tickets altos y
              no pueden seguir operando con leads dispersos, seguimiento manual
              o una presencia digital sin consecuencia comercial.
            </p>
          </div>

          <div className="panel-premium rounded-[32px] border border-outline-variant/18 bg-surface-container-low/88 p-6 backdrop-blur md:p-7 xl:p-8">
            <div className="flex items-start justify-between gap-3 border-b border-outline-variant/12 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Infraestructura conectada
                </p>
                <p className="mt-3 max-w-md text-sm leading-6.5 text-secondary">
                  Cada capa está diseñada para sostener autoridad, ordenar
                  oportunidades y volver más predecible la operación comercial.
                </p>
              </div>
              <span className="hidden rounded-full border border-primary/16 bg-primary/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary md:inline-flex">
                Sistema premium
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {systemSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex gap-3.5 border-b border-outline-variant/12 pb-4 transition-transform duration-500 last:border-b-0 last:pb-0 hover:translate-x-1"
                >
                  <span className="font-headline text-[1.6rem] font-bold text-primary/70">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-tertiary">
                      {step.label}
                    </h2>
                    <p className="mt-2 text-sm leading-6.5 text-secondary">
                      {step.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[22px] border border-primary/14 bg-primary/6 p-4">
              <p className="text-sm leading-6.5 text-secondary">
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
