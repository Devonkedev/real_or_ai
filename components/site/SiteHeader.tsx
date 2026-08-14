import Link from "next/link";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "/play", label: "Play" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-parchment/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          className="group flex items-baseline gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron-deep"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            Real or AI?
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.2em] text-ink-faint uppercase sm:inline">
            India&rsquo;s Independence
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron-deep sm:px-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="tricolour-rule" />
    </header>
  );
}
