import { ImageResponse } from "next/og";

export const alt = "나두뮤지컬 · 명작 뮤지컬 깊이 읽기";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const title = "나두뮤지컬";
  const sub = "명작 뮤지컬을 깊이 읽는 한국어 가이드";
  const font = await loadFont(`${title}${sub}NADOO MUSICAL 줄거리 넘버 원작 캐스트 수상 퀴즈`);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f3eee6",
          color: "#241c16",
          padding: "72px",
          borderTop: "18px solid #9b2335",
          borderBottom: "18px solid #9b2335",
          fontFamily: font ? "NotoSerifKR" : "serif",
        }}
      >
        <div style={{ color: "#9b2335", fontSize: 28, letterSpacing: 8 }}>NADOO MUSICAL</div>
        <div style={{ marginTop: 20, fontSize: 92 }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 34, color: "#6e6258" }}>{sub}</div>
        <div style={{ marginTop: 36, fontSize: 26, color: "#2f4a3c" }}>줄거리 · 넘버 · 원작 · 캐스트 · 수상 · 퀴즈</div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "NotoSerifKR", data: font, weight: 700 as const, style: "normal" as const }] } : {}),
    },
  );
}
