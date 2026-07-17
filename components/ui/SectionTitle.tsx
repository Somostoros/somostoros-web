interface SectionTitleProps {
  eyebrow: string;
  title: string;
  accent?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  accent,
}: SectionTitleProps) {
  return (
    <div>
      <p className="uppercase tracking-[0.4em] text-[#30CED8] font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl lg:text-6xl font-black leading-tight text-white">
        {title}

        {accent && (
          <>
            <br />
            <span className="text-[#30CED8]">
              {accent}
            </span>
          </>
        )}
      </h2>
    </div>
  );
}