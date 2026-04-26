import Image from "next/image";

export default function ArchitectProfile() {
  return (
    <section className="relative border-b border-outline-variant/10 bg-surface py-16 md:py-20 lg:py-24">
      <div className="content-shell">
        <div className="mx-auto flex max-w-[68rem] flex-col gap-10 md:flex-row md:items-center md:gap-14 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-[42%] lg:w-[38%] shrink-0">
            <div className="panel-premium relative mx-auto aspect-[4/5] max-w-[22rem] overflow-hidden rounded-[24px] border border-outline-variant/20 bg-surface-container-low p-2 md:max-w-none md:p-2.5">
              <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-outline-variant/10 bg-surface">
                <Image
                  src="/profile/marcos-hilario.jpg"
                  alt="Marcos Hilario, arquitecto digital de alto rendimiento"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                
                {/* Overlay gradient for premium feel */}
                <div className="pointer-events-none absolute inset-0 bg-primary/5 mix-blend-overlay" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full md:w-[58%] lg:w-[62%]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">
              Perfil del Arquitecto
            </p>
            <h2 className="mt-4 font-headline text-[clamp(2rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-tight text-tertiary/95">
              Dirección estratégica para unir autoridad digital con control comercial.
            </h2>

            <div className="mt-6 flex flex-col gap-5 text-[1rem] leading-7 text-secondary/75 md:mt-8 md:text-[1.05rem] md:leading-8">
              <p>
                <strong className="font-semibold text-tertiary/90">Marcos Hilario</strong> diseña ecosistemas digitales para negocios que necesitan convertir presencia, captación y seguimiento en una operación más clara.
              </p>
              <p className="border-l border-primary/25 pl-5 text-[1.1rem] font-medium leading-relaxed text-tertiary/80 italic md:text-[1.15rem]">
                &ldquo;No entra a decorar una marca. Entra a ordenar cómo un negocio capta, responde, da seguimiento y convierte oportunidades.&rdquo;
              </p>
            </div>

            <div className="mt-9">
              <a
                href="#audit"
                className="bronze-glow inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-on-primary shadow-[0_12px_30px_rgba(224,194,159,0.12)] transition-transform hover:-translate-y-0.5"
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
