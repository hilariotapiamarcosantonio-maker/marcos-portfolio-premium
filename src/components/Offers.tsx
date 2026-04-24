import SectionHeading from "@/components/SectionHeading";
import { ctaLabels, offers } from "@/content/site";

export default function Offers() {
  return (
    <section
      id="offers"
      className="relative scroll-mt-24 border-t border-outline-variant/10 bg-surface-container-low py-24 md:py-28"
    >
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="content-shell">
        <SectionHeading
          eyebrow="Oferta"
          title="Tres niveles para pasar de presencia digital a infraestructura comercial."
          description="Cada oferta responde a una etapa distinta: claridad estratégica, orden comercial o ecosistema integral de alto rendimiento."
          align="center"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`panel-premium relative flex h-full flex-col overflow-hidden rounded-[30px] border p-6 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 md:p-7 ${
                offer.featured
                  ? "border-primary/30 bg-[linear-gradient(180deg,rgba(224,194,159,0.08),rgba(21,21,21,0.92))]"
                  : "border-outline-variant/14 bg-surface"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/55 to-primary/0"
              />
              <div
                aria-hidden="true"
                className={`absolute inset-x-10 top-4 h-16 rounded-full blur-3xl ${
                  offer.featured ? "bg-primary/14" : "bg-white/[0.04]"
                }`}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                    {offer.label}
                  </p>
                  {offer.featured ? (
                    <span className="rounded-full border border-primary/16 bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Recomendado
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 font-headline text-[1.55rem] font-bold leading-[1.06] text-tertiary md:text-[1.78rem]">
                  {offer.name}
                </h3>
                <p className="mt-4 text-[0.96rem] leading-6.5 text-secondary">
                  {offer.summary}
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-[20px] border border-outline-variant/12 bg-black/10 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-outline">
                      Para quién es
                    </p>
                    <p className="mt-2 text-sm leading-6.5 text-tertiary/85">
                      {offer.audience}
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-outline-variant/12 bg-black/10 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-outline">
                      Qué incluye
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6.5 text-secondary">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[20px] border border-primary/12 bg-primary/5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-outline">
                      Resultado que busca
                    </p>
                    <p className="mt-2 text-sm leading-6.5 text-tertiary/85">
                      {offer.result}
                    </p>
                  </div>
                </div>

                <a
                  href="#audit"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] transition-[transform,border-color,color,box-shadow] hover:-translate-y-0.5 ${
                    offer.featured
                      ? "bronze-glow text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)]"
                      : "border border-outline-variant/20 text-tertiary hover:border-primary/35 hover:text-primary hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                  }`}
                >
                  {ctaLabels.tertiary}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
