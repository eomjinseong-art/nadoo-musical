import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Section, Wrap } from "@/components/Ui";
import { IMAGES, MUSICALS } from "@/data/musicals";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "출처와 원칙", description: "나두뮤지컬의 자료 원칙, 이미지 출처(AI 일러스트), ‘전해지는 이야기’로 표시한 항목 목록.", path: "/sources" });

export default function Page() {
  const flagged = MUSICALS.flatMap((m) => [...(m.realVsShow ?? []), ...(m.legends ?? []), ...m.trivia].filter((t) => t.includes("전해지는 이야기") || t.startsWith("논란")).map((t) => ({ m, t })));
  return (
    <Wrap>
      <PageHead kicker="SOURCES" title="출처와 원칙" lead="공연 프로그램, 공식 발표, 토니상·올리비에상 기록, 언론 보도, 원작 소설·전기를 바탕으로 정리했습니다." />
      <Section title="원칙" en="Principles">
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7">
          <li>줄거리는 결말까지 담은 우리말 요약입니다. 노래 가사는 싣지 않고 넘버 제목만 적습니다.</li>
          <li>한국 캐스트는 언론 보도·공식 발표로 확인한 경우에만 적고, 확인하지 못한 작품은 비워 둡니다.</li>
          <li>수상은 토니상·올리비에상(한국 작품은 한국뮤지컬대상 확인분) 위주입니다. 확인하지 못한 수상은 적지 않습니다.</li>
          <li>확인되지 않은 이야기는 ‘전해지는 이야기’로 표시하거나 뺍니다.</li>
          <li>공연 시연 영상이나 공연 사진은 쓰지 않습니다.</li>
        </ul>
      </Section>
      <Section title="이미지" en="Images">
        <p className="text-sm leading-7 text-muted">이 사이트의 그림은 모두 OpenAI gpt-image-1로 만든 AI 일러스트입니다. 실존 인물이나 배우를 그리지 않았고, 실제 공연 장면이 아닙니다.</p>
        <ul className="mt-2 list-disc pl-5 text-sm">{Object.values(IMAGES).map((i) => <li key={i.src}>{i.alt} — <code>{i.src}</code></li>)}</ul>
      </Section>
      <Section title="‘전해지는 이야기’·논란 표시 항목" en="Flagged items">
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7">
          {flagged.map(({ m, t }) => <li key={t}><Link href={`/musicals/${m.slug}`} className="text-terra underline">{m.ko}</Link> — {t}</li>)}
        </ul>
      </Section>
    </Wrap>
  );
}
