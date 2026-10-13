import Link from "next/link";

export function Section({ title, en, children, id }: { title: string; en?: string; children: React.ReactNode; id?: string }) {
  return (
    <section className="mt-10" id={id}>
      <h2 className="font-serif text-2xl text-ink">
        {title} {en ? <span className="ml-1 text-sm font-normal text-muted">{en}</span> : null}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Card({ href, title, sub, children }: { href?: string; title: string; sub?: string; children?: React.ReactNode }) {
  const inner = (
    <>
      <p className="font-serif text-lg text-ink">{title}</p>
      {sub ? <p className="text-xs text-terra">{sub}</p> : null}
      {children ? <div className="mt-2 text-sm leading-7 text-muted">{children}</div> : null}
    </>
  );
  const cls = "block rounded-lg border border-line bg-card p-4";
  return href ? <Link href={href} className={`${cls} hover:border-terra`}>{inner}</Link> : <div className={cls}>{inner}</div>;
}

export function Wrap({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-5xl px-4 py-6">{children}</div>;
}

export function SpoilerNote() {
  return <p className="mt-4 rounded-md border border-terra/40 bg-terra/5 px-3 py-2 text-sm text-terra">⚠ 스포일러 주의 · 결말까지 모두 나옵니다. 줄거리는 우리말로 다시 쓴 요약입니다.</p>;
}

export function AiFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mt-5 overflow-hidden rounded-lg border border-line bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1200} height={800} className="h-56 w-full object-cover sm:h-72" loading="lazy" />
      <figcaption className="px-3 py-1.5 text-[11px] text-muted">🎨 AI 일러스트 (gpt-image-1로 생성 · 실제 공연·배우 사진이 아님) · AI-generated illustration</figcaption>
    </figure>
  );
}
