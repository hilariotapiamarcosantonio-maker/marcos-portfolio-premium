type CaseMockupProps = {
  project: string;
  label: string;
  note: string;
  chips: string[];
  featured?: boolean;
};

export default function CaseMockup({
  project,
  label,
  note,
  chips,
  featured = false,
}: CaseMockupProps) {
  return (
    <div className="group relative isolate [perspective:1800px]">
      <div
        aria-hidden="true"
        className={`absolute inset-x-12 top-8 h-20 rounded-full blur-3xl ${
          featured ? "bg-primary/16" : "bg-white/[0.05]"
        }`}
      />

      <div className="relative mx-auto max-w-[720px]">
        <div
          className={`panel-premium relative overflow-hidden rounded-[34px] border p-3.5 transition-[transform,border-color,box-shadow] duration-700 group-hover:-translate-y-1.5 ${
            featured
              ? "border-primary/28 bg-[linear-gradient(180deg,rgba(224,194,159,0.1),rgba(18,18,18,0.95))]"
              : "border-outline-variant/18 bg-surface-container-lowest/92"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.14),transparent_42%)]"
          />

          <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-[#0c0c0c]">
            <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f7c948]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2cc36b]" />
              </div>

              <div className="flex-1 rounded-full border border-white/8 bg-black/20 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-outline">
                MarcosHilario.System / {label}
              </div>

              <span className="hidden rounded-full border border-primary/14 bg-primary/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary md:inline-flex">
                Caso de negocio
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden p-5 md:p-6">
              <div
                aria-hidden="true"
                className="grid-fade absolute inset-0 opacity-30"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/12 to-transparent"
              />

              <div className="relative grid h-full gap-4 md:grid-cols-[1.35fr_0.65fr]">
                <div className="overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))]">
                  <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                      Captura principal
                    </p>
                    <span className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Laptop / browser
                    </span>
                  </div>

                  <div className="flex h-[calc(100%-53px)] flex-col justify-between p-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                        Screenshot real preparado
                      </p>
                      <h4 className="mt-3 max-w-md font-headline text-2xl font-bold text-tertiary md:text-[2rem]">
                        {project}
                      </h4>
                      <p className="mt-4 text-sm leading-7 text-secondary">
                        {note}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-dashed border-primary/24 bg-black/15 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                        Inserción sugerida
                      </p>
                      <p className="mt-3 text-sm leading-7 text-secondary">
                        Landing, CRM o dashboard del activo con mayor peso
                        comercial dentro del caso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                      Activos visibles
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-primary/16 bg-primary/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                      Lectura del caso
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-secondary">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>El mockup se reserva para evidencia real del sistema.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>La pantalla principal debe mostrar contexto comercial.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>La vista acompaña al caso; no compite con él.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-4 w-[86%] rounded-b-[999px] border border-white/8 bg-[linear-gradient(180deg,#4a4137_0%,#191919_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.28)]" />
        <div className="mx-auto h-2 w-[18%] rounded-b-[999px] bg-primary/30" />
      </div>
    </div>
  );
}
