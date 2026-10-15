export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">{title}</h2>
      {children ? <div className="mt-4 text-lg leading-relaxed text-muted">{children}</div> : null}
    </div>
  );
}
