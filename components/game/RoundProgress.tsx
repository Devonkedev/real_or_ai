export function RoundProgress({ current, total }: { current: number; total: number }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`Round ${current} of ${total}`}
      className="h-1 w-full overflow-hidden rounded-full bg-hairline"
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-saffron via-saffron-deep to-flag-green transition-[width] duration-500 ease-out motion-reduce:transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
