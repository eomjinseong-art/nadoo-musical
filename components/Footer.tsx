import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { BRAND_LINE, NAV, SISTER_SITES, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-stone/70">
      <CoupangBanner />
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mt-3 max-w-3xl">
          줄거리는 우리말로 다시 쓴 요약이며, 노래 가사는 저작권 보호를 위해 싣지 않고 넘버 제목만 적습니다. 확인되지 않은 이야기는 ‘전해지는 이야기’로 적습니다. 작품 제목과 상표는 각 권리자의 것입니다. 공연 사진은 쓰지 않으며, 그림은 실존 인물·배우를 그리지 않은 AI 일러스트로 따로 표시했습니다.
        </p>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="underline decoration-line hover:text-terra">{i.label}</Link>
          ))}
        </nav>
        <p className="mt-4 text-xs">나두 사이트</p>
        <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {SISTER_SITES.map((s) => (
            <li key={s.href}><a href={s.href} className="underline decoration-line hover:text-terra">{s.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
