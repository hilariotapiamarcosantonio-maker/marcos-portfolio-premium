import { heroHighlights } from "@/content/site";

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
      className="relative scroll-mt-24 overflow-hidden pb-28 pt-32 md:pb-36 md:pt-44"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:68px_68px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.16),transparent_58%)]"
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              Arquitectura digital premium
            </span>

            <h1 className="max-w-5xl font-headline text-[2.85rem] font-extrabold leading-[1.02] text-tertiary sm:text-5xl lg:text-[5.35rem]">
              No construyo páginas web. Diseño infraestructura digital para
              negocios que necesitan captar clientes, controlar su operación y
              escalar con autoridad.
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-secondary md:text-[1.15rem]">
              Landing premium, CRM, automatizaciones, dashboards y seguimiento
              comercial conectados en un sistema serio. Menos improvisación. Más
              control sobre demanda, conversión y operación.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-outline-variant/30 bg-surface-container-low/70 px-4 py-2 text-xs font-medium text-secondary"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#audit"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-xs font-extrabold uppercase tracking-[0.25em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5 bronze-glow"
              >
                Solicitar auditoría estratégica
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center rounded-full border border-outline-variant/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-tertiary transition-colors hover:border-primary/40 hover:text-primary"
              >
                Ver casos estratégicos
              </a>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-outline">
              Para negocios que venden servicios, proyectos o tickets altos y no
              pueden seguir operando con leads dispersos, seguimiento manual o una
              presencia digital sin consecuencia comercial.
            </p>
          </div>

          <div className="panel-premium rounded-[34px] border border-outline-variant/20 bg-surface-container-low/85 p-7 backdrop-blur md:p-8 xl:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
              Infraestructura conectada
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-secondary">
              Cada capa está diseñada para sostener autoridad, ordenar
              oportunidades y volver más predecible la operación comercial.
            </p>

            <div className="mt-8 space-y-6">
              {systemSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex gap-4 border-b border-outline-variant/12 pb-6 last:border-b-0 last:pb-0"
                >
                  <span className="font-headline text-2xl font-bold text-primary/70">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary">
                      {step.label}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-secondary">
                      {step.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-primary/14 bg-primary/6 p-5">
              <p className="text-sm leading-7 text-secondary">
                El objetivo no es &quot;verse premium&quot;. El objetivo es que la
                presencia digital sostenga confianza, ordene el pipeline y permita
                operar con criterio ejecutivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
