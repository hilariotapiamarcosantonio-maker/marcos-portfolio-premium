import SectionHeading from "@/components/SectionHeading";
import {
  credibilityPillars,
  credibilitySignals,
  ctaLabels,
} from "@/content/site";

export default function Credibility() {
  return (
    <section
      id="credibility"
      className="relative scroll-mt-24 border-y border-outline-variant/10 bg-surface-container-low/60 py-28 md:py-36"
    >
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Credibilidad"
          title="Señales de confianza para negocios que compran criterio, no solo diseño."
          description="La credibilidad aquí no se apoya en métricas infladas. Se apoya en el tipo de activos, sectores e infraestructura que ya se pueden mostrar y estructurar con seriedad."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {credibilitySignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-primary/16 bg-primary/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary"
            >
              {signal}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {credibilityPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="panel-premium relative overflow-hidden rounded-[32px] border border-outline-variant/14 bg-surface/92 p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-primary/28 md:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                Base de confianza
              </p>
              <h3 className="mt-4 font-headline text-[1.8rem] font-bold leading-tight text-tertiary">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-secondary">
                {pillar.description}
              </p>

              <div className="mt-6 border-t border-outline-variant/12 pt-5">
                <ul className="space-y-3 text-sm leading-7 text-tertiary/88">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="panel-premium mt-12 flex flex-col items-center gap-5 rounded-[32px] border border-primary/14 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(224,194,159,0.04))] px-6 py-8 text-center md:px-10">
          <p className="max-w-3xl text-sm leading-7 text-secondary md:text-base">
            La intención no es parecer una agencia más grande. La intención es
            proyectar una práctica seria de arquitectura digital para negocios
            que necesitan presencia premium, seguimiento comercial y control de
            operación.
          </p>
          <a
            href="#audit"
            className="bronze-glow inline-flex items-center justify-center rounded-full px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5"
          >
            {ctaLabels.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}
