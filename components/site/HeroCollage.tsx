import Image from "next/image";

const PIECES = [
  {
    src: "/artifacts/gandhi-portrait-1931.jpg",
    alt: "Studio portrait of Mahatma Gandhi, 1931",
    className: "left-[4%] top-[6%] w-[46%] rotate-[-4deg]",
  },
  {
    src: "/artifacts/harijan-1939.jpg",
    alt: "Front page of Harijan newspaper, 1939",
    className: "right-[2%] top-0 w-[40%] rotate-[3deg]",
  },
  {
    src: "/artifacts/gandhi-salt-march-1930.jpg",
    alt: "Mahatma Gandhi during the Salt March, 1930",
    className: "bottom-[3%] left-[10%] w-[42%] rotate-[2.5deg]",
  },
  {
    src: "/artifacts/swadeshi-poster-1930s.jpg",
    alt: "Swadeshi bazaar art poster, 1930s",
    className: "right-[6%] bottom-0 w-[38%] rotate-[-3deg]",
  },
];

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:aspect-square lg:aspect-[4/5]">
      <div className="tricolour-rule absolute -top-3 left-1/2 hidden w-24 -translate-x-1/2 sm:block" />
      {PIECES.map((piece) => (
        <figure
          key={piece.src}
          className={`paper-grain absolute rounded-sm border-4 border-card bg-card p-1 shadow-[0_18px_36px_-18px_rgba(20,15,10,0.45)] ${piece.className}`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={piece.src}
              alt={piece.alt}
              fill
              sizes="(min-width: 1024px) 280px, 45vw"
              className="object-cover"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
