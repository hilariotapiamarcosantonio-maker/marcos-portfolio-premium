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
      className="relative scroll-mt-[4.5rem] md:scroll-mt-[5.5rem] border-y border-outline-variant/10 bg-surface-container-low/60 py-16 md:py-18 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="content-shell">
        <SectionHeading
          eyebrow="Credibilidad"
          title={
            <>
              <span className="sm:hidden">Señales de confianza para negocios con criterio.</span>
              <span className="hidden sm:inline">Señales de confianza para negocios que compran criterio, no solo diseño.</span>
            </>
          }
          description={
            <>
              <span className="sm:hidden">Activos y sectores que se pueden mostrar y estructurar con seriedad.</span>
              <span className="hidden sm:inline">La credibilidad aquí no se apoya en métricas infladas. Se apoya en el tipo de activos, sectores e infraestructura que ya se pueden mostrar y estructurar con seriedad.</span>
            </>
          }
          align="center"
          compact
        />

        <div className="mt-4 sm:mt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2.5">
          {credibilitySignals.map((signal, index) => (
            <span
              key={signal}
              className={`rounded-full border border-primary/16 bg-primary/8 px-3 sm:px-3.5 py-1.5 text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-primary ${
                index === 2 ? "hidden sm:inline-flex" : ""
              }`}
            >
              {signal}
            </span>
          ))}
        </div>

        <div className="mt-6 sm:mt-7 grid gap-3 sm:gap-4 xl:grid-cols-3">
          {credibilityPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="panel-premium relative flex h-full flex-col overflow-hidden rounded-[26px] border border-outline-variant/14 bg-surface/92 px-4 py-3.5 sm:p-4 md:p-6 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-primary/28"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0"
              />

              <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                Base de confianza
              </p>
              <h3 className="mt-2.5 sm:mt-3 font-headline text-[1.25rem] sm:text-[1.42rem] font-bold leading-[1.1] sm:leading-[1.08] text-tertiary md:text-[1.52rem]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 sm:mt-3 text-[0.85rem] sm:text-sm leading-[1.4] sm:leading-6.5 text-secondary">
                {pillar.description}
              </p>

              <div className="mt-2.5 sm:mt-4 border-t border-outline-variant/12 pt-2.5 sm:pt-4">
                <ul className="space-y-1.5 sm:space-y-2.5 text-[0.85rem] sm:text-[0.92rem] leading-[1.25] sm:leading-6 text-tertiary/88">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-2.5 sm:gap-3">
                      <span className="mt-1.5 sm:mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="panel-premium mt-7 flex flex-col items-center gap-4 rounded-[26px] border border-primary/14 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(224,194,159,0.04))] px-5 py-6 text-center md:px-8">
          <p className="max-w-3xl text-sm leading-6.5 text-secondary md:text-[0.98rem]">
            La intención no es parecer una agencia más grande. La intención es
            proyectar una práctica seria de arquitectura digital para negocios
            que necesitan presencia premium, seguimiento comercial y control de
            operación.
          </p>
          <a
            href="#audit"
            className="bronze-glow inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5"
          >
            {ctaLabels.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}
