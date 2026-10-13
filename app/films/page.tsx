import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Wrap } from "@/components/Ui";
import { MUSICALS } from "@/data/musicals";
import { pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL } from "@/lib/site";

export const metadata = pageMetadata({ title: "뮤지컬 영화", description: "무대 뮤지컬과 연결된 영화 모음. 뮤지컬 영화판과 원작 영화, 위키백과 링크.", path: "/films" });

export default function Page() {
  const rows = MUSICALS.flatMap((m) => m.films.map((f) => ({ m, f }))).sort((a, b) => a.f.year - b.f.year);
  return (
    <Wrap>
      <PageHead kicker="FILMS" title={`뮤지컬과 영화 ${rows.length}편`} lead="뮤지컬 영화판, 그리고 뮤지컬의 원작이 된 영화를 함께 모았습니다. ‘뮤지컬 아님’ 표시는 같은 원작을 다룬 일반 영화입니다. 링크는 위키백과로 이어집니다." />
      <p className="mt-4 rounded-md border border-terra/40 bg-terra/5 px-3 py-2 text-sm">🎬 본 영화는 <a className="text-terra underline" href={CHECKLIST_URL}>영화봇 ‘뮤지컬 영화’ 체크리스트</a>에서 체크하세요.</p>
      <ul className="mt-6 divide-y divide-line rounded-lg border border-line bg-card">
        {rows.map(({ m, f }) => (
          <li key={f.url} className="flex flex-wrap items-baseline gap-x-3 px-4 py-2 text-sm">
            <span className="font-mono text-terra">{f.year}</span>
            <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline">{f.title}</a>
            <Link href={`/musicals/${m.slug}`} className="text-xs text-muted hover:text-terra">← {m.ko}</Link>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}
