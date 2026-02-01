import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "マリポサハウス | Mariposa House Church",
  description: "マリポサハウスはキリストにあって新しく造られる喜びを分かち合う教会です。蝶のように変容し、神の愛の中で成長する場所へようこそ。",
  keywords: ["教会", "マリポサハウス", "キリスト教", "礼拝", "Mariposa House", "Church"],
  openGraph: {
    title: "マリポサハウス | Mariposa House Church",
    description: "キリストにあって新しく造られる喜びを分かち合う教会",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
