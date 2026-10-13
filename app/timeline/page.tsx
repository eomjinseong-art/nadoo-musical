import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Section, Wrap } from "@/components/Ui";
import { COUNTRIES, ERAS, MUSICALS } from "@/data/musicals";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "뮤지컬 연표", description: "황금기부터 메가 뮤지컬, 디즈니·주크박스, 해밀턴 이후 새 물결까지 시대별 뮤지컬 연표.", path: "/timeline" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="TIMELINE" title="시대별 연표" lead="초연 연도 기준. 시대 구분은 이해를 돕기 위한 대략적인 묶음입니다. 더 넓은 세계사는 나두연표에서 이어 보세요." />
      {ERAS.map((e) => (
        <Section key={e.key} id={e.key} title={`${e.ko} · ${e.from}–${e.to > 2026 ? "현재" : e.to}`} en={e.en}>
          <p className="text-sm leading-7 text-muted">{e.blurb}</p>
          <ol className="mt-3 border-l-2 border-terra/40 pl-4">
            {MUSICALS.filter((m) => m.year >= e.from && m.year <= e.to).map((m) => (
              <li key={m.slug} className="relative py-2">
                <span className="absolute -left-[23px] top-3.5 h-3 w-3 rounded-full border-2 border-terra bg-bg" />
                <span className="font-mono text-sm text-terra">{m.year}</span>{" "}
                <Link href={`/musicals/${m.slug}`} className="font-serif text-lg hover:text-terra">{m.ko}</Link>{" "}
                <span className="text-xs text-muted">{COUNTRIES[m.country].flag} {m.city} · {m.music}</span>
              </li>
            ))}
          </ol>
        </Section>
      ))}
      <p className="mt-8 text-sm"><a className="text-terra underline" href="https://nadoo-timeline.vercel.app">나두연표에서 세계사와 함께 보기 →</a></p>
    </Wrap>
  );
}
