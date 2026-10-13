import { PageHead } from "@/components/PageHead";
import { Card, Wrap } from "@/components/Ui";
import { pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL } from "@/lib/site";

export const metadata = pageMetadata({ title: "함께 보기", description: "나두예술 음악관, 나두인물, 나두연표, 영화봇 뮤지컬 영화 체크리스트로 이어 보기.", path: "/links" });

const LINKS = [
  { href: "https://nadoo-arts.vercel.app/music", title: "나두예술 · 음악관", sub: "Nadoo Arts · Music hall", body: "모차르트·베르디·푸치니 등 유럽 음악가. «모차르트!», «미스 사이공»(나비부인), «렌트»(라 보엠)의 뿌리를 찾아가 보세요." },
  { href: "https://nadoo-people.vercel.app", title: "나두인물", sub: "Nadoo People", body: "영화로 만나는 실존 인물. 실화 바탕 작품의 ‘영화 vs 실제’를 같은 방식으로 비교합니다." },
  { href: "https://nadoo-timeline.vercel.app", title: "나두연표", sub: "Nadoo Timeline", body: "1832년 6월 봉기, 을미사변, 하얼빈 의거… 뮤지컬 속 사건을 세계사 연표에서 확인하세요." },
  { href: CHECKLIST_URL, title: "영화봇 · 뮤지컬 영화 체크리스트", sub: "Movie checklist · Musical films", body: "레미제라블, 시카고, 위키드, 영웅까지. 본 영화를 체크하고 기기 간 동기화하세요." },
];

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="SISTER SITES" title="함께 보기" lead="나두 사이트들과 이어 봅니다." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="block rounded-lg border border-line bg-card p-4 hover:border-terra">
            <p className="font-serif text-lg">{l.title}</p>
            <p className="text-xs text-terra">{l.sub}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{l.body}</p>
          </a>
        ))}
      </div>
      <div className="mt-6"><Card title="나두 허브" sub="tinalinkeom">나두 패밀리 전체 링크는 <a className="underline" href="https://tinalinkeom.vercel.app">나두 허브</a>에서.</Card></div>
    </Wrap>
  );
}
