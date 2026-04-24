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
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-headline text-3xl font-bold leading-tight text-tertiary md:text-5xl">
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 text-secondary md:text-lg ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
