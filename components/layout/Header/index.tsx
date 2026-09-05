"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "El Club", href: "/club" },
  { label: "Actualidad", href: "/#actualidad" },
  { label: "El Equipo", href: "/#equipo" },
  { label: "Competición", href: "/#competicion" },
  { label: "Palmarés", href: "/#palmares" },
  { label: "Fan Zone", href: "/#fan-zone" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300">

      {/* BARRA PRINCIPAL */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO + NOMBRE */}
        <a
          href="/#inicio"
          aria-label="Los Toros de Alicante - Inicio"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logos/logo-toros.png"
            alt="Logo de Los Toros de Alicante"
            width={373}
            height={476}
            priority
            unoptimized
            className="h-14 w-auto object-contain sm:h-16"
          />

          <span className="toros-font hidden text-3xl text-[#30CED8] sm:block">
            TOrOS
          </span>
        </a>

        {/* MENÚ ESCRITORIO */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold transition hover:text-[#30CED8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ACCIONES */}
        <div className="flex items-center gap-3">

          {/* BOTÓN ÚNETE */}
          <a
            href="/#invitacion"
            className="hidden rounded-full bg-[#30CED8] px-6 py-2 font-semibold text-black transition hover:scale-105 hover:bg-white sm:inline-flex"
          >
            ÚNETE
          </a>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[#30CED8]/50 hover:text-[#30CED8] md:hidden"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>

        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030708]/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-gray-300 transition hover:text-[#30CED8]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#invitacion"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#30CED8] px-6 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-white"
            >
              Únete a Los Toros
            </a>

          </nav>
        </div>
      )}

    </header>
  );
}