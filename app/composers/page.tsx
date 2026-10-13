import { PageHead } from "@/components/PageHead";
import { Card, Wrap } from "@/components/Ui";
import { COMPOSERS, MUSICALS } from "@/data/musicals";
import type { ComposerKey } from "@/data/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "작곡가별 뮤지컬", description: "로이드 웨버, 손드하임, 쇤베르크·부브릴, 쿤체·르베이, 린마누엘 미란다, 캔더·엡, 와일드혼 등 작곡가·창작진별로 보기.", path: "/composers" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="BY COMPOSER" title="작곡가·창작진별로 보기" lead="한 작품에 여러 창작진이 있으면(예: 웨스트 사이드 스토리 = 번스타인 + 손드하임) 양쪽에 모두 넣었습니다." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {(Object.keys(COMPOSERS) as ComposerKey[]).map((k) => (
          <Card key={k} href={`/composers/${k}`} title={COMPOSERS[k].ko} sub={`${COMPOSERS[k].en} · ${MUSICALS.filter((m) => m.composers.includes(k)).length}편`}>{COMPOSERS[k].blurb}</Card>
        ))}
      </div>
    </Wrap>
  );
}
