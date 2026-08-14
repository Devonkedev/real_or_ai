import type { Metadata } from "next";
import { artifacts } from "@/data/artifacts";
import { Container } from "@/components/site/Container";
import { ArchiveBrowser } from "@/components/archive/ArchiveBrowser";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Browse every artifact — photographs, posters, newspapers, speeches, letters and documents from India's independence era, each with full historical context and sourcing.",
};

export default function ArchivePage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-saffron-deep uppercase">
          The Archive
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Every artifact, unlocked
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          No guessing here — browse the full collection with verdicts,
          sources and historical context attached, and see exactly how each
          AI reconstruction was built to deceive.
        </p>
      </div>
      <ArchiveBrowser artifacts={artifacts} />
    </Container>
  );
}
