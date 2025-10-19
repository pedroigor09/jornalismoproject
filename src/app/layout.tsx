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
  title: "Jornalismo UniJorge | Histórias que transformam",
  description: "Portal de notícias e reportagens produzidas pelos estudantes de Jornalismo da UniJorge",
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
