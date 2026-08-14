import Link from "next/link";
import {
  ArrowRight,
  Camera,
  FileText,
  Mic,
  Newspaper,
  ScrollText,
  ShieldQuestion,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/Container";
import { HeroCollage } from "@/components/site/HeroCollage";

const ENCOUNTERS = [
  { icon: Camera, label: "Photographs", desc: "Archival portraits and crowd scenes from the movement." },
  { icon: Newspaper, label: "Newspapers", desc: "Front pages and clippings from the independence-era press." },
  { icon: FileText, label: "Documents", desc: "Acts, memoranda and official papers of record." },
  { icon: Mic, label: "Speeches", desc: "Excerpts delivered from platforms, radio and the Assembly floor." },
  { icon: ScrollText, label: "Posters", desc: "Campaign posters, propaganda and popular bazaar art." },
];

const HOW_IT_WORKS = [
  {
    title: "See the artifact",
    body: "Each round shows one artifact — a photograph, poster, newspaper, speech, letter, document or propaganda piece — with no hints attached.",
  },
  {
    title: "Make your call",
    body: "Decide whether it's an authentic historical record or an AI-generated reconstruction, then lock in REAL or AI-GENERATED.",
  },
  {
    title: "Read the reveal",
    body: "Every round unpacks the true story, the tells that gave it away, and a credible source — win or lose, you leave knowing more.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium tracking-[0.14em] text-ink-soft uppercase">
              <Sparkles className="h-3.5 w-3.5 text-saffron-deep" aria-hidden="true" />
              An Independence Day exhibit
            </p>
            <h1 className="text-balance font-display text-5xl leading-[0.98] font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
              Real or AI?
            </h1>
            <p className="mt-4 text-balance font-display text-2xl leading-tight text-ink-soft italic sm:text-3xl">
              Can you tell history from hallucination?
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Test your eye against photographs, posters, speeches and documents
              from India&rsquo;s independence era — some drawn from verified
              archives, others quietly fabricated.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                render={<Link href="#how-it-works" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-auto justify-center rounded-sm border-ink/25 px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-ink uppercase hover:bg-secondary"
              >
                How It Works
              </Button>
            </div>
          </div>
          <HeroCollage />
        </Container>
      </section>

      <section className="border-t border-hairline bg-parchment-dim/60 py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What you&rsquo;ll encounter
            </h2>
            <p className="mt-3 text-ink-soft">
              Seven kinds of artifact, drawn in roughly equal measure from the
              real archival record and from careful, clearly-labelled AI
              reconstructions.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {ENCOUNTERS.map(({ icon: Icon, label, desc }) => (
              <li
                key={label}
                className="paper-grain flex flex-col gap-3 rounded-sm border border-hairline bg-card p-5"
              >
                <Icon className="h-6 w-6 text-saffron-deep" aria-hidden="true" />
                <span className="font-display text-lg font-semibold text-ink">{label}</span>
                <span className="text-sm leading-snug text-ink-faint">{desc}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="mb-12 max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How it works
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="font-display text-4xl font-semibold text-saffron-deep/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-hairline bg-navy py-16 text-parchment sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <div className="mb-3 flex items-center gap-2 text-saffron">
              <ShieldQuestion className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                Fifteen rounds. One verdict.
              </span>
            </div>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Put your eye for history to the test.
            </h2>
          </div>
          <Button
            render={<Link href="/play" />}
            nativeButton={false}
            size="lg"
            className="h-auto shrink-0 justify-center rounded-sm bg-saffron px-7 py-3.5 text-sm font-semibold tracking-[0.08em] text-ink uppercase hover:bg-saffron/90"
          >
            Start the Challenge
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Container>
      </section>
    </>
  );
}
