import { RoundProgress } from "./RoundProgress";

export function PlayHeader({
  index,
  total,
  score,
}: {
  index: number;
  total: number;
  score: number;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          Real or AI?
        </h1>
        <div className="flex items-center gap-4 font-mono text-sm text-ink-soft sm:gap-6 sm:text-base">
          <span aria-label={`Question ${index} of ${total}`}>
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-4 w-px bg-hairline" aria-hidden="true" />
          <span aria-label={`Score ${score}`}>
            Score <span className="font-semibold text-ink">{score}</span>
          </span>
        </div>
      </div>
      <RoundProgress current={index - 1} total={total} />
    </div>
  );
}
