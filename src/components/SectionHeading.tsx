type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  compact?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  compact = false,
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleSize = compact
    ? "text-[clamp(1.85rem,2.75vw,2.6rem)] leading-[1.04] tracking-normal"
    : "text-[clamp(2rem,3.2vw,3rem)] leading-[1.02] tracking-[-0.03em]";
  const titleWidth = centered
    ? compact
      ? "mx-auto max-w-[23ch]"
      : "mx-auto max-w-[18ch]"
    : "max-w-[16ch]";
  const descriptionSize = compact
    ? "mt-3 text-[0.95rem] leading-6.5 md:text-[0.98rem]"
    : "mt-4 text-[0.98rem] leading-7 md:text-[1.04rem]";

  return (
    <div
      className={`max-w-[58rem] ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-headline font-bold text-tertiary ${titleSize} ${
          titleWidth
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-3xl text-secondary ${descriptionSize} ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
