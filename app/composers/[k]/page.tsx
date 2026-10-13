import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MusicalGrid } from "@/components/MusicalCard";
import { PageHead } from "@/components/PageHead";
import { Wrap } from "@/components/Ui";
import { COMPOSERS, MUSICALS } from "@/data/musicals";
import type { ComposerKey } from "@/data/types";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(COMPOSERS).map((k) => ({ k }));
}
export async function generateMetadata({ params }: { params: Promise<{ k: string }> }) {
  const k = (await params).k;
  const c = COMPOSERS[k as ComposerKey];
  return pageMetadata({ title: `${c.ko} 뮤지컬`, description: `${c.ko}(${c.en})의 뮤지컬. ${c.blurb}`, path: `/composers/${k}` });
}
export default async function Page({ params }: { params: Promise<{ k: string }> }) {
  const k = (await params).k as ComposerKey;
  const c = COMPOSERS[k];
  return (
    <Wrap>
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/composers", label: "작곡가별" }, { label: c.ko }]} />
      <PageHead kicker={c.en} title={c.ko} lead={c.blurb} />
      <MusicalGrid items={MUSICALS.filter((m) => m.composers.includes(k))} />
    </Wrap>
  );
}
