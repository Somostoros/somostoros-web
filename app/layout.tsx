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
    default: "Los Toros de Alicante | Club de Béisbol y Softbol en Alicante",
    template: "%s | Los Toros de Alicante",
  },

  description:
    "Club de Béisbol y Softbol en Alicante. Conoce a Los Toros de Alicante, nuestro equipo, competiciones, resultados, noticias, palmarés y cómo unirte al club.",

  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Los Toros de Alicante | Club de Béisbol y Softbol en Alicante",
    description:
      "Club de Béisbol y Softbol en Alicante. Equipo, competiciones, resultados, noticias, palmarés y actualidad de Los Toros de Alicante",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": "https://www.somostoros.com/#organization",
  name: "Los Toros de Alicante",
  alternateName: "Toros de Alicante",
  url: "https://www.somostoros.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.somostoros.com/logos/logo-toros.png",
  },
  image: "https://www.somostoros.com/logos/logo-toros.png",
  sport: ["Béisbol", "Softbol"],
  sameAs: [
    "https://www.instagram.com/torosdealicante/",
    "https://www.facebook.com/torosdealicante",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}