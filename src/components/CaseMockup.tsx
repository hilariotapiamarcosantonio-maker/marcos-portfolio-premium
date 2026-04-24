type CaseMockupProps = {
  project: string;
  label: string;
  note: string;
  featured?: boolean;
};

export default function CaseMockup({
  project,
  label,
  note,
  featured = false,
}: CaseMockupProps) {
  return (
    <div
      className={`panel-premium relative overflow-hidden rounded-[28px] border p-5 md:p-6 ${
        featured
          ? "border-primary/30 bg-[linear-gradient(180deg,rgba(224,194,159,0.12),rgba(22,22,22,0.9))]"
          : "border-outline-variant/16 bg-surface-container-lowest/80"
      }`}
    >
      <div
        aria-hidden="true"
        className="grid-fade absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-primary/0 via-primary/45 to-primary/0"
      />

      <div className="relative aspect-[16/10] rounded-[22px] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.14),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 md:p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
              {label}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
              Espacio listo para mockup
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
              {project}
            </p>
            <h4 className="max-w-lg font-headline text-2xl font-bold text-tertiary md:text-[2rem]">
              Captura principal del sistema
            </h4>
            <p className="max-w-xl text-sm leading-7 text-secondary md:text-base">
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
