import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";
import { artifacts, getArtifactById } from "@/data/artifacts";
import { Container } from "@/components/site/Container";
import { ArtifactVisual } from "@/components/artifact/ArtifactVisual";
import { CategoryBadge } from "@/components/artifact/CategoryBadge";
import { VerdictBadge } from "@/components/artifact/VerdictBadge";
import { DifficultyBadge } from "@/components/artifact/DifficultyBadge";

export function generateStaticParams() {
  return artifacts.map((artifact) => ({ id: artifact.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const artifact = getArtifactById(id);
  if (!artifact) return {};
  return {
    title: artifact.title,
    description: artifact.explanation,
  };
}

export default async function ArtifactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artifact = getArtifactById(id);
  if (!artifact) notFound();

  const isReal = artifact.answer === "real";

  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <Link
        href="/archive"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Archive
      </Link>

      <div className="flex flex-col gap-7">
        <div className="flex items-center justify-between gap-2">
          <CategoryBadge type={artifact.type} />
          <div className="flex items-center gap-2">
            <DifficultyBadge difficulty={artifact.difficulty} />
            <VerdictBadge verdict={artifact.answer} />
          </div>
        </div>

        <ArtifactVisual artifact={artifact} revealed priority />

        <div className="flex flex-col gap-1">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {artifact.title}
          </h1>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-faint">
            <span>{artifact.date}</span>
            {artifact.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {artifact.location}
              </span>
            )}
          </div>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
            The Story
          </h2>
          <p className="leading-relaxed text-ink-soft">{artifact.explanation}</p>
        </section>

        {isReal ? (
          <section className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
              Why It&rsquo;s Real
            </h2>
            <p className="leading-relaxed text-ink-soft">{artifact.whyReal}</p>
          </section>
        ) : (
          <section className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
              Why It Looks Real
            </h2>
            <p className="leading-relaxed text-ink-soft">{artifact.historicalContext}</p>
            <p className="text-sm font-semibold text-ink">What gives it away:</p>
            <ul className="flex flex-col gap-2">
              {artifact.deceptionDetails.map((detail) => (
                <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ai" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-1 rounded-sm border border-ai/30 bg-ai/[0.06] px-4 py-3 text-sm font-medium text-ink">
              AI-generated reconstruction — not an authentic historical document.
            </div>
          </section>
        )}

        <section className="flex flex-col gap-2 border-t border-hairline pt-6">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-saffron-deep uppercase">
            {isReal ? "Source" : "Status"}
          </h2>
          {isReal ? (
            <a
              href={artifact.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-navy underline decoration-navy/40 underline-offset-4 hover:decoration-navy"
            >
              {artifact.sourceName}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <p className="text-sm leading-relaxed text-ink-faint">
              No historical source exists for this artifact — it was built as
              a reconstruction for this game and does not appear in any
              archive.
            </p>
          )}
        </section>
      </div>
    </Container>
  );
}
