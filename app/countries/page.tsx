import { PageHead } from "@/components/PageHead";
import { Card, Wrap } from "@/components/Ui";
import { COUNTRIES, MUSICALS } from "@/data/musicals";
import type { CountryKey } from "@/data/types";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "나라별 뮤지컬", description: "영국 웨스트엔드, 미국 브로드웨이, 프랑스, 오스트리아 빈, 한국 창작 뮤지컬로 나눠 보기.", path: "/countries" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="BY COUNTRY" title="나라별로 보기" lead="초연된 곳(제작 중심지) 기준입니다. 레미제라블처럼 파리에서 태어나 런던에서 다시 만든 작품은 처음 태어난 나라로 분류했습니다." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {(Object.keys(COUNTRIES) as CountryKey[]).map((k) => (
          <Card key={k} href={`/countries/${k}`} title={`${COUNTRIES[k].flag} ${COUNTRIES[k].ko}`} sub={`${COUNTRIES[k].en} · ${MUSICALS.filter((m) => m.country === k).length}편`}>{COUNTRIES[k].blurb}</Card>
        ))}
      </div>
    </Wrap>
  );
}
