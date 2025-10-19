import type { Metadata } from "next";
import { Open_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baianidade | A identidade cultural da Bahia",
  description: "Projeto de jornalismo da UniJorge explorando gírias, sotaque e cultura baiana através de reportagens multimídia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollTimeline: '--page-scroll block' } as React.CSSProperties}>
      <body
        className={`${openSans.variable} ${notoSans.variable} font-[var(--font-open-sans)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
