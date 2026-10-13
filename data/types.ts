export type Film = { title: string; year: number; url: string; note?: string };
export type Musical = {
  slug: string;
  ko: string;
  en: string;
  country: CountryKey;
  city: string;
  year: number;
  premiereNote: string;
  music: string;
  lyrics: string;
  book: string;
  composers: ComposerKey[];
  tagline: string;
  plot: string[];
  numbers: string[];
  source: { kind: "소설" | "영화" | "실화" | "희곡" | "신화" | "오페라" | "시집" | "회고록" | "창작" | "전기"; title: string; note: string };
  realVsShow?: string[];
  cast: string[];
  koreanCast: string[];
  awards: string[];
  trivia: string[];
  legends?: string[];
  films: Film[];
};
export type CountryKey = "uk" | "us" | "fr" | "at" | "kr";
export type ComposerKey =
  | "lloyd-webber" | "sondheim" | "schonberg-boublil" | "kunze-levay" | "miranda" | "kander-ebb"
  | "rodgers-hammerstein" | "wildhorn" | "elton-john" | "bernstein" | "abba" | "korean" | "other";
