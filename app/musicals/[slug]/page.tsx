import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { AiFigure, Section, SpoilerNote, Wrap } from "@/components/Ui";
import { bySlug, COMPOSERS, COUNTRIES, eraOf, imageFor, MUSICALS } from "@/data/musicals";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL } from "@/lib/site";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return MUSICALS.map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const m = bySlug((await params).slug)!;
  return pageMetadata({ title: `${m.ko} (${m.en}) 줄거리·넘버·원작`, description: `${m.tagline}. ${m.year}년 ${m.city} 초연, 음악 ${m.music}. 결말 포함 줄거리, 대표 넘버, 원작·실화 비교, 캐스트, 수상, 비하인드.`, path: `/musicals/${m.slug}`, type: "article" });
}

function Dl({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="grid gap-x-4 gap-y-2 rounded-lg border border-line bg-card p-4 text-sm sm:grid-cols-[8rem_1fr]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents"><dt className="text-muted">{k}</dt><dd className="text-ink">{v}</dd></div>
      ))}
    </dl>
  );
}
function List({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-1.5 pl-5 text-sm leading-7 text-ink">{items.map((t) => <li key={t}>{t.startsWith("전해지는 이야기") ? <><span className="mr-1 rounded bg-stone px-1.5 py-0.5 text-[11px] text-muted">전해지는 이야기</span>{t.replace(/^전해지는 이야기:\s*/, "")}</> : t}</li>)}</ul>;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const m = bySlug((await params).slug);
  if (!m) notFound();
  const i = MUSICALS.indexOf(m);
  const prev = MUSICALS[i - 1];
  const next = MUSICALS[i + 1];
  const era = eraOf(m.year);
  const path = `/musicals/${m.slug}`;
  return (
    <Wrap>
      <JsonLd data={jsonLd([articleLd({ headline: `${m.ko} (${m.en})`, description: m.tagline, path, about: [m.en, m.ko, m.source.title] }), breadcrumbLd([{ name: "홈", path: "/" }, { name: "작품", path: "/musicals" }, { name: m.ko, path }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/musicals", label: "작품" }, { label: m.ko }]} />
      <PageHead kicker={`${COUNTRIES[m.country].flag} ${m.year} · ${m.en}`} title={m.ko} lead={m.tagline} />
      <AiFigure {...imageFor(m)} />
      <Section title="기본 정보" en="Facts">
        <Dl rows={[
          ["음악 Music", m.music], ["가사 Lyrics", m.lyrics], ["대본 Book", m.book],
          ["초연 Premiere", `${m.year}년 · ${m.city} · ${COUNTRIES[m.country].ko}`], ["초연 메모", m.premiereNote],
          ["시대", `${era.ko} (${era.en})`],
        ]} />
        <p className="mt-2 flex flex-wrap gap-2 text-xs">
          <Link href={`/countries/${m.country}`} className="rounded-full border border-line px-2 py-1 hover:border-terra">{COUNTRIES[m.country].ko}</Link>
          {m.composers.map((c) => <Link key={c} href={`/composers/${c}`} className="rounded-full border border-line px-2 py-1 hover:border-terra">{COMPOSERS[c].ko}</Link>)}
          <Link href={`/timeline#${era.key}`} className="rounded-full border border-line px-2 py-1 hover:border-terra">연표: {era.ko}</Link>
        </p>
      </Section>
      <Section title="줄거리" en="Plot (spoilers)">
        <SpoilerNote />
        <div className="mt-3 space-y-3 leading-8">{m.plot.map((p) => <p key={p}>{p}</p>)}</div>
      </Section>
      <Section title="대표 넘버" en="Main numbers">
        <p className="mb-2 text-xs text-muted">저작권 보호를 위해 제목만 적고 가사는 싣지 않습니다. Titles only — no lyrics.</p>
        <ol className="grid list-decimal gap-1 pl-5 text-sm sm:grid-cols-2">{m.numbers.map((n) => <li key={n}>{n}</li>)}</ol>
      </Section>
      <Section title="원작과 소재" en="Source material">
        <p className="text-sm"><span className="mr-2 rounded bg-terra/10 px-2 py-0.5 text-xs text-terra">{m.source.kind}</span>{m.source.title}</p>
        <p className="mt-2 text-sm leading-7 text-muted">{m.source.note}</p>
        {m.related ? <p className="mt-3 rounded-md border border-terra/40 bg-terra/5 px-3 py-2 text-sm">👤 실제 이야기 더 보기: <a className="text-terra underline" href={m.related.href}>{m.related.label}</a></p> : null}
        {m.realVsShow?.length ? <div className="mt-3"><p className="mb-1 font-semibold">실제 vs 무대 <span className="text-xs font-normal text-muted">Real vs show</span></p><List items={m.realVsShow} /></div> : null}
      </Section>
      <CoupangCard />
      <Section title="캐스트" en="Cast">
        <p className="mb-1 font-semibold">초연·오리지널 캐스트</p>
        {m.cast.length ? <List items={m.cast} /> : <p className="text-sm text-muted">확인된 자료로 정리 중입니다.</p>}
        <p className="mb-1 mt-4 font-semibold">한국 공연 주요 캐스트 <span className="text-xs font-normal text-muted">Korean cast (verified only)</span></p>
        {m.koreanCast.length ? <List items={m.koreanCast} /> : <p className="text-sm text-muted">언론 보도 등으로 확인한 자료가 없어서 비워 두었습니다. 추측으로 채우지 않습니다.</p>}
      </Section>
      <Section title="수상" en="Awards (Tony · Olivier)">
        {m.awards.length ? <List items={m.awards} /> : <p className="text-sm text-muted">토니상·올리비에상 주요 수상 기록이 없거나 해당 시상식 대상이 아닌 작품입니다.</p>}
      </Section>
      <Section title="기록 · 논란 · 비하인드" en="Records, issues & trivia">
        <List items={[...m.trivia, ...(m.legends ?? [])]} />
      </Section>
      <Section title="영화로 보기" en="Film adaptations">
        {m.films.length ? (
          <ul className="space-y-1 text-sm">{m.films.map((f) => <li key={f.url}><a href={f.url} target="_blank" rel="noopener noreferrer" className="text-terra underline">{f.title}</a> <span className="text-muted">({f.year}, 위키백과)</span></li>)}</ul>
        ) : <p className="text-sm text-muted">극장 개봉 영화화 작품이 없습니다.</p>}
        <p className="mt-2 text-xs text-muted">본 영화는 <a className="underline" href={CHECKLIST_URL}>영화봇 ‘뮤지컬 영화’ 체크리스트</a>에 체크해 두세요.</p>
      </Section>
      <nav className="mt-10 flex justify-between gap-3 text-sm">
        {prev ? <Link href={`/musicals/${prev.slug}`} className="hover:text-terra">← {prev.ko} ({prev.year})</Link> : <span />}
        {next ? <Link href={`/musicals/${next.slug}`} className="hover:text-terra">{next.ko} ({next.year}) →</Link> : <span />}
      </nav>
    </Wrap>
  );
}
