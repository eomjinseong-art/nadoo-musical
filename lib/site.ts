export const SITE_NAME = "나두뮤지컬";
export const SITE_NAME_EN = "Nadoo Musical";
export const SITE_TAGLINE = "명작 뮤지컬을 깊이 읽는 한국어 가이드";
export const SITE_SUB = "줄거리(스포일러), 대표 넘버, 원작과 실화 비교, 작곡·작사·대본, 초연, 캐스트, 수상, 논란과 비하인드까지. 확인되지 않은 이야기는 ‘전해지는 이야기’로 표시합니다. Famous musicals, in depth — Korean first.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-musical.vercel.app";
export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";
export const CHECKLIST_URL = "https://movie-checklist-sigma.vercel.app/?list=musical";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/musicals", label: "작품" },
  { href: "/countries", label: "나라별" },
  { href: "/composers", label: "작곡가별" },
  { href: "/timeline", label: "연표" },
  { href: "/films", label: "영화" },
  { href: "/quiz", label: "퀴즈" },
  { href: "/links", label: "함께 보기" },
  { href: "/sources", label: "출처" },
] as const;

export const SISTER_SITES = [
  { href: "https://nadoo-arts.vercel.app/music", label: "나두예술 음악관" },
  { href: "https://nadoo-people.vercel.app", label: "나두인물" },
  { href: "https://nadoo-timeline.vercel.app", label: "나두연표" },
  { href: CHECKLIST_URL, label: "영화봇 체크리스트 · 뮤지컬 영화" },
  { href: "https://nadoo-world.vercel.app", label: "나두세계" },
  { href: "https://tinalinkeom.vercel.app", label: "나두 허브" },
] as const;
