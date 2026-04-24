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
    <section id="about" className="scroll-mt-24 py-28 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-premium rounded-[34px] border border-outline-variant/18 bg-surface-container-low/85 p-8 md:p-10">
            <SectionHeading
              eyebrow="Dirección estratégica"
              title="Marcos Hilario diseña el sistema que une autoridad digital con control comercial."
              description="No entra a decorar presencia digital. Entra a construir la infraestructura que conecta captación, seguimiento, automatización y operación para negocios que necesitan vender con orden."
            />

            <div className="mt-8 rounded-[24px] border border-primary/15 bg-primary/6 p-6">
              <p className="text-sm leading-7 text-secondary md:text-base">
                Cuando un negocio depende de mensajes sueltos, formularios sin
                destino, seguimiento manual y una web sin consecuencias, pierde
                velocidad, claridad y autoridad. La arquitectura correcta corrige
                eso desde la raíz.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {executionPoints.map((point) => (
              <article
                key={point.title}
                className="panel-premium rounded-[30px] border border-outline-variant/14 bg-surface-container-lowest/80 p-6 transition-colors hover:border-primary/30"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                  Marcos Hilario
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-tertiary">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-secondary">
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
