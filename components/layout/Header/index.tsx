"use client";

import Image from "next/image";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Actualidad", href: "/#actualidad" },
  { label: "El Equipo", href: "/#equipo" },
  { label: "Competición", href: "/#competicion" },
  { label: "Palmarés", href: "/#palmares" },
  { label: "Fan Zone", href: "/#fan-zone" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO + NOMBRE */}
        <a
          href="/#inicio"
          aria-label="Los Toros de Alicante - Inicio"
          className="flex items-center gap-3"
        >
          <Image
            src="/logos/logo-toros.png"
            alt="Logo de Los Toros de Alicante"
            width={373}
            height={476}
            priority
            unoptimized
            className="h-16 w-auto object-contain"
          />

          <span className="toros-font text-3xl text-[#30CED8]">
            TOrOS
          </span>
        </a>

        {/* MENÚ */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#30CED8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* BOTÓN ÚNETE */}
        <a
          href="/#invitacion"
          className="rounded-full bg-[#30CED8] px-6 py-2 font-semibold text-black transition hover:scale-105 hover:bg-white"
        >
          ÚNETE
        </a>

      </div>
    </header>
  );
}