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
      className={`max-w-4xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-headline text-[1.9rem] font-bold leading-[1.06] text-tertiary sm:text-[2.5rem] md:text-[3.15rem]">
        {title}
      </h2>
      <p
        className={`mt-5 max-w-3xl text-[1rem] leading-8 text-secondary md:text-lg ${
          centered ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
