import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Wrap } from "@/components/Ui";
import { QUIZ, QUIZ_SET_SIZE, QUIZ_SETS } from "@/data/quiz";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: `뮤지컬 퀴즈 ${QUIZ.length}문제`, description: `작곡가, 초연 연도, 원작, 넘버, 실화까지 뮤지컬 퀴즈 ${QUIZ.length}문제를 ${QUIZ_SET_SIZE}문제씩 ${QUIZ_SETS}세트로.`, path: "/quiz" });

export default function Page() {
  return (
    <Wrap>
      <PageHead kicker="QUIZ" title={`뮤지컬 퀴즈 ${QUIZ.length}문제`} lead={`${QUIZ_SET_SIZE}문제씩 ${QUIZ_SETS}개 세트입니다. 정답을 고르면 바로 해설이 나와요.`} />
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: QUIZ_SETS }, (_, i) => (
          <li key={i}><Link href={`/quiz/${i + 1}`} className="block rounded-lg border border-line bg-card p-4 text-center hover:border-terra"><span className="block font-serif text-2xl text-terra">{i + 1}막</span><span className="text-xs text-muted">Set {i + 1}</span></Link></li>
        ))}
      </ul>
    </Wrap>
  );
}
