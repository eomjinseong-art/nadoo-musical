import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MusicalGrid } from "@/components/MusicalCard";
import { PageHead } from "@/components/PageHead";
import { Wrap } from "@/components/Ui";
import { COUNTRIES, MUSICALS } from "@/data/musicals";
import type { CountryKey } from "@/data/types";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(COUNTRIES).map((c) => ({ c }));
}
export async function generateMetadata({ params }: { params: Promise<{ c: string }> }) {
  const c = COUNTRIES[(await params).c as CountryKey];
  return pageMetadata({ title: `${c.ko} 뮤지컬`, description: `${c.ko}(${c.en}) 뮤지컬 모아 보기. ${c.blurb}`, path: `/countries/${(await params).c}` });
}
export default async function Page({ params }: { params: Promise<{ c: string }> }) {
  const k = (await params).c as CountryKey;
  const c = COUNTRIES[k];
  return (
    <Wrap>
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/countries", label: "나라별" }, { label: c.ko }]} />
      <PageHead kicker={c.en} title={`${c.flag} ${c.ko}`} lead={c.blurb} />
      <MusicalGrid items={MUSICALS.filter((m) => m.country === k)} />
    </Wrap>
  );
}
