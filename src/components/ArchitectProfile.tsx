import Image from "next/image";

export default function ArchitectProfile() {
  return (
    <section className="relative border-b border-outline-variant/10 bg-surface py-16 md:py-24">
      <div className="content-shell">
        <div className="mx-auto flex max-w-[68rem] flex-col gap-10 md:flex-row md:items-center md:gap-16 lg:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-[45%] lg:w-[42%] shrink-0">
            <div className="panel-premium relative mx-auto aspect-[4/5] max-w-[24rem] overflow-hidden rounded-[24px] border border-outline-variant/20 bg-surface-container-low p-2 md:max-w-none md:p-2.5">
              <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-outline-variant/10 bg-surface">
                <Image
                  src="/profile/marcos-hilario.jpg"
                  alt="Marcos Hilario, arquitecto digital de alto rendimiento"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                
                {/* Overlay gradient for premium feel */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full md:w-[55%] lg:w-[58%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              Dirección Estratégica
            </p>
            <h2 className="mt-4 font-headline text-[clamp(2rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-tertiary">
              El arquitecto detrás del sistema
            </h2>

            <div className="mt-6 flex flex-col gap-5 text-[1rem] leading-7 text-secondary md:mt-8 md:text-[1.05rem] md:leading-8">
              <p>
                <strong className="font-semibold text-tertiary">Marcos Hilario</strong> diseña ecosistemas digitales para negocios que necesitan más que presencia online.
              </p>
              <p>
                Su enfoque une web premium, captación, CRM, automatización y dashboards para convertir proyectos dispersos en infraestructura comercial clara.
              </p>
              <p className="border-l border-primary/30 pl-5 text-[1.1rem] font-medium leading-relaxed text-tertiary/90 italic md:text-[1.15rem]">
                &ldquo;No entra a decorar una marca. Entra a ordenar cómo un negocio capta, responde, da seguimiento y convierte oportunidades.&rdquo;
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#audit"
                className="bronze-glow inline-flex items-center justify-center rounded-full px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.22em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar Evaluación Estratégica
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
