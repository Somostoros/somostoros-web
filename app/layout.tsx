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
  metadataBase: new URL("https://www.somostoros.com"),

  title: {
    default: "Los Toros de Alicante | Club de Béisbol y Softbol",
    template: "%s | Los Toros de Alicante",
  },

  description:
    "Club de Béisbol y Softbol Los Toros de Alicante. #SomosToros. No importa quién seas. Si te gusta el softball, aquí tienes tu sitio.",

  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Los Toros de Alicante | Club de Béisbol y Softbol",
    description:
      "Club de Béisbol y Softbol Los Toros de Alicante. Noticias, competición, equipo y actualidad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}