import Link from "next/link";
import { Wrap } from "@/components/Ui";
export default function NotFound() {
  return <Wrap><h1 className="mt-10 font-serif text-3xl">막이 내린 페이지예요</h1><p className="mt-3 text-muted"><Link href="/" className="underline">홈으로 돌아가기</Link></p></Wrap>;
}
