import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Los Toros de Alicante | Club de Béisbol y Softbol",
  description:
    "Club de Béisbol y Softbol Los Toros de Alicante. #SomosToros. No importa quién seas. Si te gusta el softball, aquí tienes tu sitio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
  <Header />
  <main className="flex-1">
    {children}
  </main>
  <Footer />
</body>
    </html>
  );
}
