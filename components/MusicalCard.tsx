import Link from "next/link";
import { COUNTRIES } from "@/data/musicals";
import type { Musical } from "@/data/types";

export function MusicalCard({ m }: { m: Musical }) {
  return (
    <Link href={`/musicals/${m.slug}`} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-terra">
      <p className="text-xs text-terra">{COUNTRIES[m.country].flag} {m.year} · {m.city}</p>
      <p className="mt-1 font-serif text-xl text-ink">{m.ko}</p>
      <p className="text-xs text-muted">{m.en}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{m.tagline}</p>
      <p className="mt-2 text-xs text-muted">🎼 {m.music}</p>
    </Link>
  );
}

export function MusicalGrid({ items }: { items: Musical[] }) {
  return (
    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <li key={m.slug}><MusicalCard m={m} /></li>
      ))}
    </ul>
  );
}
