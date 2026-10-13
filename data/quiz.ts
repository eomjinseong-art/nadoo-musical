import { COUNTRIES, MUSICALS } from "./musicals";

export type Q = { q: string; options: string[]; answer: number; why: string; slug?: string };

function rng(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}
const r = rng(20261013);
function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
function make(q: string, right: string, pool: string[], why: string, slug?: string): Q {
  const wrong = shuffle([...new Set(pool.filter((p) => p !== right))]).slice(0, 3);
  const options = shuffle([right, ...wrong]);
  return { q, options, answer: options.indexOf(right), why, slug };
}

const generated: Q[] = [];
for (const m of MUSICALS) {
  const others = MUSICALS.filter((o) => o.slug !== m.slug);
  generated.push(make(`«${m.ko}»의 음악(작곡)을 맡은 사람은?`, m.music, others.map((o) => o.music), `«${m.ko}» 음악: ${m.music}. 가사: ${m.lyrics}.`, m.slug));
  const yrs = shuffle([-11, -7, -4, 4, 8, 12].map((d) => String(m.year + d)));
  generated.push(make(`«${m.ko}»가 처음 무대에 오른 해는?`, String(m.year), yrs, m.premiereNote, m.slug));
  generated.push(make(`«${m.ko}»의 원작·소재는?`, m.source.title, others.map((o) => o.source.title), m.source.note, m.slug));
  const pool = others.flatMap((o) => o.numbers);
  generated.push(make(`다음 중 «${m.ko}»의 넘버(노래)는?`, m.numbers[Math.floor(r() * m.numbers.length)], pool, `«${m.ko}» 대표 넘버: ${m.numbers.slice(0, 4).join(", ")} 등.`, m.slug));
  generated.push(make(`«${m.ko}»는 어느 나라에서 만들어진 작품으로 분류될까요?`, COUNTRIES[m.country].ko, Object.values(COUNTRIES).map((c) => c.ko), `초연: ${m.city} (${m.year}).`, m.slug));
  generated.push(make(`“${m.tagline}” — 어떤 작품일까요?`, m.ko, others.map((o) => o.ko), `정답은 «${m.ko}» (${m.en}).`, m.slug));
}

const hand: Q[] = [
  { q: "브로드웨이 최장기 공연 기록을 세운 뒤 2023년 4월 폐막한 작품은?", options: ["캣츠", "오페라의 유령", "시카고", "라이온 킹"], answer: 1, why: "1988년 개막해 2023년 4월 폐막했습니다." },
  { q: "토니상 단일 작품 최다 수상(12개) 기록을 가진 작품은?", options: ["해밀턴", "프로듀서스", "빌리 엘리어트", "북 오브 몰몬"], answer: 1, why: "2001년 프로듀서스가 12개를 받았습니다. 해밀턴은 최다 후보(16개)." },
  { q: "토니상 역대 최다 후보(16개)에 오른 작품은?", options: ["해밀턴", "위키드", "물랑루즈!", "하데스타운"], answer: 0, why: "해밀턴은 16개 후보, 11개 수상." },
  { q: "줄리 테이머가 여성 최초로 토니상 연출상을 받은 작품은?", options: ["라이온 킹", "맘마미아!", "위키드", "마틸다"], answer: 0, why: "1998년 라이온 킹." },
  { q: "렌트의 작가 조너선 라슨은 언제 세상을 떠났나요?", options: ["초연 10년 뒤", "첫 프리뷰 전날", "토니상 시상식 날", "브로드웨이 개막 날"], answer: 1, why: "1996년 1월 25일, 오프브로드웨이 첫 프리뷰 전날입니다." },
  { q: "킹키부츠의 바탕이 된 실제 구두 공장이 있던 지역은?", options: ["스코틀랜드 글래스고", "잉글랜드 노샘프턴셔", "웨일스 카디프", "아일랜드 더블린"], answer: 1, why: "노샘프턴셔 어얼스 바턴의 W.J. Brooks 공장 이야기입니다." },
  { q: "오페라의 유령의 샹들리에 장면에 영감을 준 실제 사건이 일어난 해는?", options: ["1862", "1896", "1910", "1921"], answer: 1, why: "1896년 가르니에 극장 샹들리에 평형추 추락 사고." },
  { q: "사운드 오브 뮤직의 실제 트랩 가족은 어떻게 오스트리아를 떠났나요?", options: ["산을 넘어 스위스로", "기차로 이탈리아로", "배로 영국으로", "비행기로 미국으로"], answer: 1, why: "실제로는 기차로 이탈리아를 거쳐 떠났습니다." },
  { q: "‘에델바이스’에 대한 설명으로 맞는 것은?", options: ["오스트리아 국가", "전통 민요", "뮤지컬을 위해 새로 쓴 곡", "모차르트 작품"], answer: 2, why: "로저스와 해머스타인이 이 작품을 위해 썼습니다." },
  { q: "엘리자벳에서 황후를 사랑하는 의인화된 존재는?", options: ["운명", "죽음(토드)", "시간", "바람"], answer: 1, why: "독일어 Tod = 죽음." },
  { q: "모차르트!에서 빨간 코트를 입은 아이 ‘아마데’는 무엇을 상징하나요?", options: ["모차르트의 아들", "모차르트의 재능", "살리에리", "어린 시절 친구"], answer: 1, why: "재능 그 자체를 형상화한 존재입니다." },
  { q: "명성황후가 1997년 공연한 뉴욕의 장소는?", options: ["카네기 홀", "링컨센터 뉴욕 주립 극장", "매디슨 스퀘어 가든", "라디오 시티"], answer: 1, why: "링컨센터 뉴욕 주립 극장(New York State Theater)." },
  { q: "영웅에서 안중근이 이토 히로부미를 저격한 날짜는?", options: ["1909년 10월 26일", "1910년 3월 26일", "1919년 3월 1일", "1895년 10월 8일"], answer: 0, why: "1910년 3월 26일은 사형 집행일입니다." },
  { q: "흔히 ‘빨래방’으로 잘못 부르기도 하는 한국 창작 뮤지컬의 정확한 제목은?", options: ["빨래", "세탁소", "옥탑방", "서울살이"], answer: 0, why: "추민주 작·민찬홍 작곡 «빨래»." },
  { q: "프랑켄슈타인(한국 창작)에서 원작에 없는 핵심 인물은?", options: ["엘렌", "앙리 뒤프레", "줄리아", "룽게"], answer: 1, why: "빅터의 친구 앙리 뒤프레가 극의 중심입니다." },
  { q: "웃는 남자의 주인공 이름은?", options: ["그윈플렌", "그랭구아르", "가브로슈", "그리자벨라"], answer: 0, why: "우르수스가 키운 그윈플렌." },
  { q: "노트르담 드 파리 한국어판(2007)의 의미로 맞는 것은?", options: ["세계 초연", "아시아 첫 현지어 버전", "영어판 번역", "콘서트 버전"], answer: 1, why: "아시아 최초의 로컬(현지어) 버전이었습니다." },
  { q: "미스 사이공의 원형이 된 푸치니 오페라는?", options: ["라 보엠", "토스카", "나비부인", "투란도트"], answer: 2, why: "렌트는 라 보엠이 원형입니다." },
  { q: "캣츠에서 헤비사이드 레이어로 올라가는 고양이는?", options: ["맥캐버티", "그리자벨라", "럼 텀 터거", "미스토펠리스"], answer: 1, why: "‘Memory’를 부르는 그리자벨라." },
  { q: "코러스 라인이 끝날 때 없는 것은?", options: ["피날레 곡", "금빛 의상", "전통적 커튼콜", "춤"], answer: 2, why: "‘One’으로 끝나며 전통적인 커튼콜이 없습니다." },
  { q: "하데스타운의 이야기 해설자는?", options: ["하데스", "헤르메스", "제우스", "페르세포네"], answer: 1, why: "전령 신 헤르메스." },
  { q: "빌리 엘리어트의 배경이 된 실제 사건은?", options: ["1984–85 영국 광부 파업", "1926 총파업", "포클랜드 전쟁", "브렉시트"], answer: 0, why: "대처 정부 시절 광부 대파업." },
];

export const QUIZ: Q[] = [...generated, ...hand];
export const QUIZ_SET_SIZE = 20;
export const QUIZ_SETS = Math.ceil(QUIZ.length / QUIZ_SET_SIZE);
const MIXED = shuffle(QUIZ);
export const quizSet = (n: number) => MIXED.slice((n - 1) * QUIZ_SET_SIZE, n * QUIZ_SET_SIZE);
