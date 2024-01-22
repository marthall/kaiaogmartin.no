import { Link } from "preact-router";

export function Nav({ includeBack }: { includeBack: boolean }) {
  return (
    <nav>
      {includeBack ? (
        <Link style={{ span: 2 }} href="/">
          Tilbake
        </Link>
      ) : (
        <span></span>
      )}

      <div>
        <Link href="/program">Program</Link>
        <Link href="/info">Praktisk info</Link>
        <Link href="/onskeliste">Ønskeliste</Link>
      </div>
    </nav>
  );
}
