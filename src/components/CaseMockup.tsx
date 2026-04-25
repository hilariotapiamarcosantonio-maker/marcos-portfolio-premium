import Image from "next/image";

type CaseMockupProps = {
  project: string;
  label: string;
  note: string;
  chips: string[];
  image?: string;
  featured?: boolean;
};

export default function CaseMockup({
  project,
  label,
  note,
  chips,
  image,
  featured = false,
}: CaseMockupProps) {
  const imageAlt = `Captura real del sistema digital de ${project}, mostrando ${label.toLowerCase()}.`;

  return (
    <div className="group relative isolate [perspective:1800px]">
      <div
        aria-hidden="true"
        className={`absolute inset-x-14 top-7 h-16 rounded-full blur-3xl ${
          featured ? "bg-primary/16" : "bg-white/[0.04]"
        }`}
      />

      <div className="relative mx-auto max-w-[700px]">
        <div
          className={`panel-premium relative overflow-hidden rounded-[24px] sm:rounded-[30px] border p-2 sm:p-3 transition-[transform,border-color,box-shadow] duration-700 group-hover:-translate-y-1 ${
            featured
              ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.1),rgba(18,18,18,0.95))]"
              : "border-outline-variant/16 bg-surface-container-lowest/92"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.12),transparent_44%)]"
          />

          <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] border border-white/8 bg-[#0c0c0c]">
            <div className="flex items-center gap-2 sm:gap-3 border-b border-white/8 bg-white/[0.03] px-3 sm:px-4 py-2 sm:py-2.5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#ff6b5a]" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#f7c948]" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#2cc36b]" />
              </div>

              <div className="flex-1 max-w-[140px] sm:max-w-none rounded-full border border-white/8 bg-black/20 px-3 sm:px-4 py-1 sm:py-1.5 text-[7.5px] sm:text-[9px] font-medium uppercase tracking-[0.2em] text-outline truncate text-center sm:text-left mx-auto sm:mx-0">
                M.System / {label}
              </div>

              <span className="hidden rounded-full border border-primary/14 bg-primary/8 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary lg:inline-flex">
                Caso de negocio
              </span>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[16/8.9] overflow-hidden p-2 sm:p-3.5 md:p-4">
              <div
                aria-hidden="true"
                className="grid-fade absolute inset-0 opacity-18"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-18 bg-gradient-to-b from-primary/10 to-transparent"
              />

              <div className="relative grid h-full gap-3 md:grid-cols-[1.8fr_0.42fr]">
                <div className="overflow-hidden rounded-[14px] sm:rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]">
                  {image ? (
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        loading="eager"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 74vw, 42vw"
                        className="object-cover object-[center_top] sm:object-center brightness-[1.12] contrast-[1.05] saturate-[1.08] transition-transform duration-700 group-hover:scale-[1.018]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02)_0%,rgba(10,10,10,0.08)_52%,rgba(10,10,10,0.58)_100%)]" />
                      <div className="hidden sm:inline-flex absolute left-3 top-3 rounded-full border border-primary/16 bg-black/32 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                        Activo digital en producción
                      </div>
                      <div className="absolute inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 sm:max-w-[72%] rounded-[14px] sm:rounded-[16px] border border-white/10 bg-black/40 sm:bg-black/32 p-2.5 sm:p-3 backdrop-blur-md">
                        <p className="text-[8.5px] sm:text-[9px] font-semibold uppercase tracking-[0.22em] text-outline">
                          Infraestructura comercial aplicada
                        </p>
                        <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-[13px] leading-snug sm:leading-6 text-tertiary/90">
                          {note}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col justify-between p-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">
                          Caso visual
                        </p>
                        <h4 className="mt-3 max-w-md font-headline text-[1.55rem] font-bold leading-[1.06] text-tertiary">
                          {project}
                        </h4>
                        <p className="mt-3 text-sm leading-6.5 text-secondary">
                          {note}
                        </p>
                      </div>

                      <div className="rounded-[16px] border border-dashed border-primary/24 bg-black/15 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-outline">
                          Vista del sistema
                        </p>
                        <p className="mt-2 text-sm leading-6.5 text-secondary">
                          La captura principal se integra aquí para reforzar la
                          lectura comercial del activo más relevante dentro del
                          caso.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="hidden sm:grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                  <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3.5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-outline">
                      Activos
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-primary/16 bg-primary/8 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-3.5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-outline">
                      Lectura
                    </p>
                    <ul className="mt-3 space-y-2.5 text-[12px] leading-5.5 text-secondary">
                      <li className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>
                          La captura muestra el frente operativo con contexto
                          comercial.
                        </span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>
                          La interfaz acompaña el caso sin desplazar la lectura
                          estratégica.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-4 w-[86%] rounded-b-[999px] border border-white/8 bg-[linear-gradient(180deg,#4a4137_0%,#191919_100%)] shadow-[0_16px_34px_rgba(0,0,0,0.26)]" />
        <div className="mx-auto h-2 w-[18%] rounded-b-[999px] bg-primary/28" />
      </div>
    </div>
  );
}
