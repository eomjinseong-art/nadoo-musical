import { MusicalGrid } from "@/components/MusicalCard";
import { PageHead } from "@/components/PageHead";
import { Wrap } from "@/components/Ui";
import { MUSICALS } from "@/data/musicals";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "작품 목록", description: `명작 뮤지컬 ${MUSICALS.length}편을 초연 순으로. 줄거리·넘버·원작·캐스트·수상까지.`, path: "/musicals" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="MUSICALS" title={`작품 ${MUSICALS.length}편`} lead="초연 연도 순입니다. 각 작품 페이지에는 결말까지 담은 줄거리가 있으니 스포일러에 주의하세요." />
      <MusicalGrid items={MUSICALS} />
    </Wrap>
  );
}
