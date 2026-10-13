import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHead } from "@/components/PageHead";
import { Quiz } from "@/components/Quiz";
import { Wrap } from "@/components/Ui";
import { QUIZ_SETS, quizSet } from "@/data/quiz";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return Array.from({ length: QUIZ_SETS }, (_, i) => ({ n: String(i + 1) }));
}
export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const n = (await params).n;
  return pageMetadata({ title: `뮤지컬 퀴즈 ${n}막`, description: `나두뮤지컬 퀴즈 세트 ${n}. 작곡가·초연·원작·넘버 문제.`, path: `/quiz/${n}` });
}
export default async function Page({ params }: { params: Promise<{ n: string }> }) {
  const n = Number((await params).n);
  return (
    <Wrap>
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/quiz", label: "퀴즈" }, { label: `${n}막` }]} />
      <PageHead kicker={`QUIZ · SET ${n}/${QUIZ_SETS}`} title={`퀴즈 ${n}막`} />
      <Quiz key={n} items={quizSet(n)} />
      <nav className="mt-6 flex justify-between text-sm">
        {n > 1 ? <Link href={`/quiz/${n - 1}`}>← {n - 1}막</Link> : <span />}
        {n < QUIZ_SETS ? <Link href={`/quiz/${n + 1}`}>{n + 1}막 →</Link> : <Link href="/quiz">세트 목록</Link>}
      </nav>
    </Wrap>
  );
}
