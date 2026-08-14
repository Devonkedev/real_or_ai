/**
 * Original newspaper front-page layouts standing in for AI-generated
 * newspaper clippings. Body copy is rendered as greeked line-blocks rather
 * than invented sentences or lorem ipsum — the masthead and headline are the
 * only "printed" text, and both are treated as data (see data/artifacts.ts).
 */
export function NewspaperIllustration({
  masthead,
  headline,
  dateline,
}: {
  variant: 1 | 2;
  masthead?: string;
  headline?: string;
  dateline?: string;
}) {
  return (
    <div className="paper-grain flex h-full w-full flex-col overflow-hidden bg-[#f2ead7] p-4 sm:p-6">
      <div className="flex items-baseline justify-between border-b-2 border-ink pb-1.5 text-[9px] tracking-[0.2em] text-ink-soft uppercase sm:text-[10px]">
        <span>{dateline}</span>
        <span>Price Two Annas</span>
      </div>
      <h3 className="border-b-4 border-double border-ink py-2 text-center font-display text-2xl leading-none font-bold tracking-tight text-ink sm:py-3 sm:text-4xl">
        {masthead}
      </h3>
      <div className="flex items-center justify-center gap-3 py-2 text-[8px] tracking-[0.3em] text-ink-faint uppercase sm:text-[9px]">
        <span className="h-px flex-1 bg-ink/30" />
        <span>Special Edition</span>
        <span className="h-px flex-1 bg-ink/30" />
      </div>
      <p className="px-1 pt-1 pb-2 text-center font-display text-base leading-snug font-semibold text-ink sm:text-xl">
        {headline}
      </p>
      <div className="grid flex-1 grid-cols-3 gap-3 border-t border-ink/25 pt-2">
        {[0, 1, 2].map((col) => (
          <div key={col} className="flex flex-col gap-1.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                className="block h-1 rounded-full bg-ink/25"
                style={{ width: `${85 - ((i * 7 + col * 5) % 35)}%` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
