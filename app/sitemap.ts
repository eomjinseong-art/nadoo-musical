import type { MetadataRoute } from "next";
import { COMPOSERS, COUNTRIES, MUSICALS } from "@/data/musicals";
import { QUIZ_SETS } from "@/data/quiz";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/musicals", ...MUSICALS.map((m) => `/musicals/${m.slug}`), "/countries", ...Object.keys(COUNTRIES).map((c) => `/countries/${c}`), "/composers", ...Object.keys(COMPOSERS).map((k) => `/composers/${k}`), "/timeline", "/films", "/quiz", ...Array.from({ length: QUIZ_SETS }, (_, i) => `/quiz/${i + 1}`), "/links", "/sources"];
  return paths.map((p) => ({ url: `${SITE_URL}${p === "/" ? "" : p}`, lastModified: new Date("2026-10-13"), priority: p === "/" ? 1 : 0.7 }));
}
