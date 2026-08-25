import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualidad",
  description:
    "Noticias y actualidad del Club de Béisbol y Softbol Los Toros de Alicante.",

  alternates: {
    canonical: "/noticias",
  },

  openGraph: {
    type: "website",
    url: "/noticias",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Actualidad | Los Toros de Alicante",
    description:
      "Noticias, resultados y actualidad deportiva de Los Toros de Alicante.",
  },
};

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#020708] px-6 pb-24 pt-36 text-white sm:pt-44">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
          Actualidad
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-6xl">
          Noticias
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          La actualidad deportiva y las noticias de Los Toros de Alicante.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* LIGA SUPREMA 2K26 */}
<Link
  href="/noticias/toros-de-alicante-grupo-liga-suprema-2k26"
  className="group overflow-hidden rounded-3xl border border-[#30CED8]/30 bg-[#0d1314] transition duration-500 hover:-translate-y-1 hover:border-[#30CED8]/70"
>
  {/* Imagen */}
  <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#183436] via-[#101819] to-[#080b0c] p-8">

    <div
      aria-hidden="true"
      className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-[#30CED8]/10"
    />

    <div
      aria-hidden="true"
      className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#30CED8]/5 blur-3xl"
    />

    <Image
      src="/images/news/liga-suprema-alicante-2k26.png"
      alt="Liga Suprema Alicante 2K26"
      width={280}
      height={280}
      className="relative z-10 h-44 w-44 object-contain transition duration-500 group-hover:scale-105"
    />

    <span className="absolute left-6 top-6 z-20 rounded-full bg-[#30CED8] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
      Liga Suprema 2K26
    </span>
  </div>

  {/* Contenido */}
  <div className="p-7">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#30CED8]">
      25 agosto 2026
    </p>

    <h2 className="mt-3 text-2xl font-black leading-tight text-white">
      Los Toros ya conocen su grupo para la Liga Suprema Alicante 2K26
    </h2>

    <p className="mt-4 text-sm leading-7 text-gray-400">
      Gladiadores, Toros de Alicante, Marineros y Monarcas conforman
      el Grupo D. El torneo comenzará el 6 de septiembre.
    </p>

    <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-[#30CED8]">
      Leer noticia →
    </p>
  </div>
</Link>

          {/* III COPA */}
<Link
  href="/noticias/toros-de-alicante-conquistan-la-iii-copa"
  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1314] transition duration-500 hover:-translate-y-1 hover:border-[#30CED8]/50"
>
  {/* Imagen */}
  <div className="relative aspect-[16/10] overflow-hidden">
    <Image
      src="/images/news/iii-copa-2026.jpeg"
      alt="Los Toros de Alicante celebran con el trofeo de la III Copa"
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <span className="absolute left-6 top-6 rounded-full bg-[#30CED8] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
      Campeones
    </span>
  </div>

  {/* Contenido */}
  <div className="p-7">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#30CED8]">
      12 julio 2026
    </p>

    <h2 className="mt-3 text-2xl font-black leading-tight text-white">
      Los Toros conquistan la III Copa de la Liga Autonómica
    </h2>

    <p className="mt-4 text-sm leading-7 text-gray-400">
      Los Toros derrotan a Marineros por 18–11 y Óscar Ulacio es
      reconocido como MVP de la competición.
    </p>

    <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-[#30CED8]">
      Leer noticia →
    </p>
  </div>
</Link>

        </div>
      </div>
    </main>
  );
}