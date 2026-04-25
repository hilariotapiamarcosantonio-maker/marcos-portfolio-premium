import SectionHeading from "@/components/SectionHeading";

const executionPoints = [
  {
    title: "Capta con intención",
    description:
      "La web deja de ser vitrina y se convierte en una entrada seria para prospectos con contexto, necesidad y prioridad.",
  },
  {
    title: "Ordena la conversación comercial",
    description:
      "CRM, calificación, etapas y seguimiento para no depender de memoria, chats dispersos o urgencias mal gestionadas.",
  },
  {
    title: "Automatiza sin perder criterio",
    description:
      "Recordatorios, asignaciones, formularios, respuestas y tareas conectadas para ahorrar tiempo sin deshumanizar la venta.",
  },
  {
    title: "Controla desde un dashboard",
    description:
      "Visibilidad sobre oportunidades, cuellos de botella y ritmo comercial para dirigir la operación con autoridad.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-28">
      <div className="content-shell">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-premium rounded-[32px] border border-outline-variant/18 bg-surface-container-low/85 p-5 md:p-8">
            <SectionHeading
              eyebrow="Dirección estratégica"
              title={
                <>
                  <span className="sm:hidden text-[1.6rem] leading-[1.05]">Marcos Hilario diseña el sistema que une autoridad y control comercial.</span>
                  <span className="hidden sm:inline">Marcos Hilario diseña el sistema que une autoridad digital con control comercial.</span>
                </>
              }
              description={
                <>
                  <span className="sm:hidden leading-snug">No entra a decorar presencia digital. Construye la infraestructura que conecta captación, seguimiento, automatización y operación.</span>
                  <span className="hidden sm:inline">No entra a decorar presencia digital. Entra a construir la infraestructura que conecta captación, seguimiento, automatización y operación para negocios que necesitan vender con orden.</span>
                </>
              }
              compact
            />

            <div className="mt-5 sm:mt-6 rounded-[22px] border border-primary/15 bg-primary/6 p-4 sm:p-5">
              <p className="text-[0.85rem] sm:text-sm leading-[1.4] sm:leading-6.5 text-secondary md:text-[0.98rem]">
                Cuando un negocio depende de mensajes sueltos, formularios sin
                destino, seguimiento manual y una web sin consecuencias, pierde
                velocidad, claridad y autoridad. La arquitectura correcta
                corrige eso desde la raíz.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {executionPoints.map((point, index) => (
              <article
                key={point.title}
                className="panel-premium rounded-[28px] border border-outline-variant/14 bg-surface-container-lowest/80 p-5 transition-[transform,border-color] hover:-translate-y-1 hover:border-primary/30 md:p-6"
              >
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">
                  <span className="sm:hidden">MÓDULO 0{index + 1}</span>
                  <span className="hidden sm:inline">Marcos Hilario</span>
                </p>
                <h3 className="mt-2.5 sm:mt-3 font-headline text-[1.25rem] sm:text-[1.45rem] font-bold leading-[1.1] sm:leading-[1.08] text-tertiary md:text-[1.6rem]">
                  {point.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-[0.85rem] sm:text-sm leading-[1.4] sm:leading-6.5 text-secondary">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
