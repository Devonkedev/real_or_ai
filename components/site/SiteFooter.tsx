import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="tricolour-rule" />
      <Container className="flex flex-col gap-4 py-10 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md leading-relaxed">
          A media-literacy exhibit for India&rsquo;s independence era. Every real
          artifact is sourced; every AI artifact is labelled the moment you ask.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/play" className="hover:text-ink">
            Play
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
