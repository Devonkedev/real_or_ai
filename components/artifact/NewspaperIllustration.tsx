/**
 * Original newspaper front-page layouts standing in for AI-generated
 * newspaper clippings. Body copy is rendered as greeked line-blocks rather
 * than invented sentences or lorem ipsum — the masthead and headline are the
 * only "printed" text, and both are treated as data (see data/artifacts.ts).
 * The page sits inside the same "photographed, not exported" treatment as
 * the poster illustrations: a slight camera skew, foxing stains, uneven
 * lighting and deckled edges, so it reads as a photograph of an aged
 * newspaper rather than a clean digital layout.
 */
export function NewspaperIllustration({
  variant,
  masthead,
  headline,
  dateline,
}: {
  variant: 1 | 2;
  masthead?: string;
  headline?: string;
  dateline?: string;
}) {
  const rotation = variant === 1 ? -1.2 : 0.9;
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#57554e]">
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(108deg, rgba(255,250,240,0.13) 0%, rgba(255,250,240,0.02) 32%, rgba(10,10,8,0.05) 62%, rgba(10,10,8,0.18) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: "radial-gradient(ellipse at 50% 108%, rgba(8,8,6,0.3), transparent 58%)" }}
      />

      <div
        className="paper-grain absolute inset-[1.5%] flex flex-col overflow-hidden p-4 shadow-[0_10px_24px_-8px_rgba(10,8,4,0.5)] sm:p-6"
        style={{
          transform: `rotate(${rotation}deg) scale(1.03)`,
          backgroundColor: "#e6ddc6",
          backgroundImage:
            "radial-gradient(circle at 10% 12%, rgba(90,78,54,0.12), transparent 36%), radial-gradient(circle at 92% 82%, rgba(80,68,46,0.13), transparent 32%), radial-gradient(circle at 70% 95%, rgba(60,52,36,0.08), transparent 28%)",
          clipPath:
            "polygon(0.4% 2%, 2.8% 0.4%, 97.4% 0.9%, 99.6% 2.8%, 99.1% 97.2%, 96.8% 99.5%, 2.2% 99.2%, 0.2% 96.6%)",
        }}
      >
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
                  style={{
                    width: `${85 - ((i * 7 + col * 5) % 35)}%`,
                    opacity: 0.7 + ((i + col) % 3) * 0.1,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
