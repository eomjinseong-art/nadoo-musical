import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700"] });
const serif = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-noto-serif", weight: ["400", "600", "700"] });
const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} · 명작 뮤지컬 깊이 읽기`, template: `%s · ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  keywords: ["나두뮤지컬", "Nadoo Musical", "뮤지컬 줄거리", "뮤지컬 넘버", "레미제라블", "오페라의 유령", "해밀턴", "엘리자벳", "한국 창작 뮤지컬", "토니상"],
  alternates: { canonical: SITE_URL },
  openGraph: { type: "website", locale: "ko_KR", url: SITE_URL, siteName: SITE_NAME, title: `${SITE_NAME} · 명작 뮤지컬 깊이 읽기`, description, images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: [OG_IMAGE.url] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-bg font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
