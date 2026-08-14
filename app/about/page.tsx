import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Real or AI? exists: as generative AI makes convincing historical fakes trivial to produce, media literacy and historical verification matter more than ever.",
};

export default function AboutPage() {
  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-saffron-deep uppercase">
        About
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Why this exists
      </h1>

      <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-ink-soft">
        <p>
          Generative AI can now produce images, documents and voices that look
          convincingly historical — a studio portrait in the style of 1930,
          a newspaper front page with a period-accurate masthead, a speech in
          the cadence of a leader who never said it. None of that required
          expert forgery skill. It required a prompt.
        </p>
        <p className="font-display text-2xl leading-snug text-ink italic">
          That creates an unusual problem: how do we distinguish historical
          evidence from something that merely looks historical?
        </p>
        <p>
          <strong className="font-semibold text-ink">Real or AI?</strong> is
          built around that question, set against India&rsquo;s independence
          movement — a period rich enough in genuine photographs, posters,
          newspapers, speeches and documents that a fabrication can sit
          comfortably alongside the real archive, and dangerous enough a
          period, if the fabrications go unlabelled, that getting the
          distinction wrong actually matters.
        </p>
        <p>
          Every artifact marked <strong className="font-semibold text-ink">real</strong>{" "}
          in this project is backed by a verifiable source — Wikimedia
          Commons, Wikisource, the Imperial War Museums, the National
          Archives of the UK, and similar institutional or academically
          credited collections — linked directly from its reveal. Nothing is
          invented and presented as fact. Every artifact marked{" "}
          <strong className="font-semibold text-ink">AI-generated</strong> is
          clearly disclosed as a reconstruction the moment you ask, alongside
          the specific historical or visual detail that gives it away.
        </p>
        <p>
          The project sits at the intersection of a few disciplines: Indian
          history, media literacy, generative AI, visual verification, and
          plain historical research. None of them alone is enough anymore —
          reading history now means reading it a little like a forensic
          document, checking the seams as much as the story.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-8 sm:flex-row">
        <Button
          render={<Link href="/play" />}
          nativeButton={false}
          size="lg"
          className="h-auto justify-center rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-parchment uppercase hover:bg-navy-soft"
        >
          Start the Challenge
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <Button
          render={<Link href="/archive" />}
          nativeButton={false}
          variant="outline"
          size="lg"
          className="h-auto justify-center rounded-sm border-ink/25 px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-ink uppercase hover:bg-secondary"
        >
          Explore the Archive
        </Button>
      </div>
    </Container>
  );
}
