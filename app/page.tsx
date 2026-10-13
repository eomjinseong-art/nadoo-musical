import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MusicalGrid } from "@/components/MusicalCard";
import { AiFigure, Section, Wrap } from "@/components/Ui";
import { COMPOSERS, COUNTRIES, IMAGES, MUSICALS } from "@/data/musicals";
import { QUIZ } from "@/data/quiz";
import { itemListLd, jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { CHECKLIST_URL, SITE_SUB, SITE_TAGLINE } from "@/lib/site";
import { CoupangCard } from "@/components/CoupangCard";

export const metadata = pageMetadata({ title: "나두뮤지컬", description: `${SITE_TAGLINE}. ${SITE_SUB}`, path: "/" });

export default function Home() {
  const korean = MUSICALS.filter((m) => m.country === "kr");
  return (
    <Wrap>
      <JsonLd data={jsonLd([websiteLd(SITE_TAGLINE), itemListLd("뮤지컬 목록", "/musicals", MUSICALS.map((m) => ({ name: `${m.ko} (${m.en})`, path: `/musicals/${m.slug}` })))])} />
      <p className="text-xs tracking-[0.2em] text-terra">NADOO MUSICAL · 명작 뮤지컬 깊이 읽기</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">막이 오르기 전에,<br />이야기의 끝까지 먼저.</h1>
      <p className="mt-4 max-w-3xl leading-8 text-muted">{SITE_SUB}</p>
      <AiFigure {...IMAGES.hero} />
      <ul className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
        {[["작품", `${MUSICALS.length}편`, "/musicals"], ["나라", `${Object.keys(COUNTRIES).length}곳`, "/countries"], ["작곡가 묶음", `${Object.keys(COMPOSERS).length}`, "/composers"], ["퀴즈", `${QUIZ.length}문제`, "/quiz"]].map(([a, b, h]) => (
          <li key={a}><Link href={h} className="block rounded-lg border border-line bg-card p-3 hover:border-terra"><span className="block font-serif text-2xl text-terra">{b}</span><span className="text-xs text-muted">{a}</span></Link></li>
        ))}
      </ul>
      <Section title="한국 창작 뮤지컬" en="Korean originals">
        <MusicalGrid items={korean} />
      </Section>
      <CoupangCard />
      <Section title="모든 작품 (초연 순)" en="All musicals by premiere">
        <MusicalGrid items={MUSICALS} />
      </Section>
      <Section title="뮤지컬 영화 체크리스트" en="Musical films checklist">
        <p className="text-sm leading-7 text-muted">무대를 영화로 옮긴 작품들, 몇 편이나 보셨나요? 영화봇 체크리스트의 <a className="text-terra underline" href={CHECKLIST_URL}>‘뮤지컬 영화’ 목록</a>에서 체크해 보세요. 작품별 영화 정보는 <Link className="text-terra underline" href="/films">영화 페이지</Link>에 모았습니다.</p>
      </Section>
    </Wrap>
  );
}
