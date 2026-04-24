type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`max-w-[58rem] ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-headline text-[clamp(2rem,3.2vw,3rem)] font-bold leading-[1.02] tracking-[-0.03em] text-tertiary ${
          centered ? "mx-auto max-w-[18ch]" : "max-w-[16ch]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-3xl text-[0.98rem] leading-7 text-secondary md:text-[1.04rem] ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
