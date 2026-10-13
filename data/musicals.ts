import { M1 } from "./m1";
import { M2 } from "./m2";
import { M3 } from "./m3";
import type { ComposerKey, CountryKey, Musical } from "./types";

export const MUSICALS: Musical[] = [...M1, ...M2, ...M3].sort((a, b) => a.year - b.year);
export const bySlug = (s: string) => MUSICALS.find((m) => m.slug === s);

export const COUNTRIES: Record<CountryKey, { ko: string; en: string; flag: string; blurb: string }> = {
  uk: { ko: "영국 (웨스트엔드)", en: "UK · West End", flag: "🇬🇧", blurb: "1980년대 ‘메가 뮤지컬’ 시대를 연 런던. 로이드 웨버와 제작자 캐머런 매킨토시의 무대입니다." },
  us: { ko: "미국 (브로드웨이)", en: "USA · Broadway", flag: "🇺🇸", blurb: "황금기 로저스-해머스타인부터 힙합 해밀턴까지, 뮤지컬의 본고장 뉴욕." },
  fr: { ko: "프랑스", en: "France", flag: "🇫🇷", blurb: "샹송풍 선율과 성스루 구성. 레미제라블은 파리에서 먼저 태어났습니다." },
  at: { ko: "오스트리아 (빈)", en: "Austria · Vienna", flag: "🇦🇹", blurb: "쿤체·르베이 콤비의 ‘빈 뮤지컬’. 한국에서 특히 사랑받습니다." },
  kr: { ko: "한국 창작", en: "Korea · Original", flag: "🇰🇷", blurb: "1995년 명성황후부터 영웅·프랑켄슈타인까지, 한국에서 처음 만든 뮤지컬." },
};

export const COMPOSERS: Record<ComposerKey, { ko: string; en: string; blurb: string }> = {
  "lloyd-webber": { ko: "앤드루 로이드 웨버", en: "Andrew Lloyd Webber", blurb: "영국. 팀 라이스와 록 오페라를 열고, 캣츠·오페라의 유령으로 메가 뮤지컬 시대를 연 작곡가." },
  sondheim: { ko: "스티븐 손드하임", en: "Stephen Sondheim", blurb: "미국. 웨스트 사이드 스토리 작사로 데뷔해 스위니 토드·인투 더 우즈로 ‘뮤지컬의 셰익스피어’라 불립니다." },
  "schonberg-boublil": { ko: "쇤베르크 & 부브릴", en: "Schönberg & Boublil", blurb: "프랑스 콤비. 레미제라블·미스 사이공으로 성스루 대서사 뮤지컬을 세계에 알렸습니다." },
  "kunze-levay": { ko: "쿤체 & 르베이", en: "Kunze & Levay", blurb: "독일 작가 미하엘 쿤체와 헝가리 출신 작곡가 실베스터 르베이. 엘리자벳·모차르트!의 빈 뮤지컬 콤비." },
  miranda: { ko: "린마누엘 미란다", en: "Lin-Manuel Miranda", blurb: "미국. 힙합과 랩을 브로드웨이 중심으로 가져온 작곡·작사·대본·배우." },
  "kander-ebb": { ko: "캔더 & 엡", en: "Kander & Ebb", blurb: "미국 콤비. 카바레·시카고 등 냉소적인 쇼 뮤지컬의 대가." },
  "rodgers-hammerstein": { ko: "로저스 & 해머스타인", en: "Rodgers & Hammerstein", blurb: "브로드웨이 황금기를 대표하는 콤비. 노래가 이야기를 이끄는 ‘북 뮤지컬’을 완성했습니다." },
  wildhorn: { ko: "프랭크 와일드혼", en: "Frank Wildhorn", blurb: "미국. 지킬 앤 하이드로 시작해 한국에서 특히 큰 사랑을 받고, 웃는 남자를 한국에서 세계 초연했습니다." },
  "elton-john": { ko: "엘턴 존", en: "Elton John", blurb: "영국 팝스타. 라이온 킹·빌리 엘리어트의 음악을 썼습니다." },
  bernstein: { ko: "레너드 번스타인", en: "Leonard Bernstein", blurb: "미국 지휘자·작곡가. 웨스트 사이드 스토리." },
  abba: { ko: "ABBA (안데르손 & 울바에우스)", en: "Benny Andersson & Björn Ulvaeus", blurb: "스웨덴 팝 그룹 ABBA의 두 작곡가. 맘마미아!" },
  korean: { ko: "한국 창작진", en: "Korean creators", blurb: "김희갑·양인자, 민찬홍·추민주, 오상준·한아름, 이성준·왕용범 등." },
  other: { ko: "그 밖의 작곡가", en: "Others", blurb: "신디 로퍼, 스티븐 슈워츠, 조너선 라슨, 팀 민친, 아나이스 미첼, 파섹 & 폴 등." },
};

export const ERAS = [
  { key: "golden", ko: "황금기", en: "Golden Age", from: 1940, to: 1969, blurb: "로저스-해머스타인, 번스타인. 노래와 춤이 이야기를 끌고 가는 북 뮤지컬의 전성기." },
  { key: "concept", ko: "콘셉트·록의 시대", en: "Concept & Rock", from: 1970, to: 1979, blurb: "록 오페라와 실험. 코러스 라인, 시카고, 스위니 토드." },
  { key: "mega", ko: "메가 뮤지컬", en: "Megamusical", from: 1980, to: 1994, blurb: "런던발 대형 성스루. 캣츠·레미제라블·오페라의 유령·미스 사이공, 그리고 빈 뮤지컬." },
  { key: "disney", ko: "디즈니·주크박스", en: "Disney & Jukebox", from: 1995, to: 2009, blurb: "라이온 킹, 맘마미아!, 위키드. 한국 창작 뮤지컬 명성황후의 출발." },
  { key: "new", ko: "새 물결", en: "New Wave", from: 2010, to: 2030, blurb: "해밀턴, 하데스타운, 디어 에반 핸슨. 한국 창작 뮤지컬의 해외 진출." },
] as const;
export const eraOf = (y: number) => ERAS.find((e) => y >= e.from && y <= e.to)!;

/** AI 일러스트(실존 인물·배우 없음). 공연 사진이 아닙니다. */
export const IMAGES: Record<string, { src: string; alt: string }> = {
  hero: { src: "/img/hero.webp", alt: "빈 무대와 붉은 커튼, 한 줄기 조명 (AI 일러스트)" },
  chandelier: { src: "/img/chandelier.webp", alt: "오페라 극장의 샹들리에 (AI 일러스트)" },
  barricade: { src: "/img/barricade.webp", alt: "19세기 파리 바리케이드 무대 세트 (AI 일러스트)" },
  palace: { src: "/img/palace.webp", alt: "조선 궁궐 마당을 닮은 무대 세트 (AI 일러스트)" },
  marquee: { src: "/img/marquee.webp", alt: "비 오는 밤 극장 간판 (AI 일러스트)" },
  masks: { src: "/img/masks.webp", alt: "희극·비극 가면과 악보 (AI 일러스트)" },
};
export function imageFor(m: Musical) {
  if (m.slug === "phantom-of-the-opera" || m.slug === "notre-dame-de-paris") return IMAGES.chandelier;
  if (m.slug === "les-miserables" || m.slug === "miss-saigon") return IMAGES.barricade;
  if (m.country === "kr") return IMAGES.palace;
  if (m.country === "us") return IMAGES.marquee;
  return IMAGES.masks;
}
