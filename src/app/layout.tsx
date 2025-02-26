import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

const raleway = Raleway({
  weight: ["300", "400", "600"],
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
});

const michelin = localFont({
  src: [
    {
      weight: "700",
      path: "../fonts/Michelin-Bold.woff2",
    },
  ],
  variable: "--font-michelin",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${raleway.variable} ${michelin.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1 pt-[82px] tabxl:pt-[124px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
