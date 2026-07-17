"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logos/Logo1.PNG"
            alt="Los Toros de Alicante"
            width={60}
            height={60}
            priority
            style={{ width: "60px", height: "auto" }}
          />

          <span className="text-2xl font-bold tracking-wider text-white">
            TOROS
          </span>
        </div>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#" className="transition hover:text-[#30CED8]">
            Inicio
          </a>

          <a href="#" className="transition hover:text-[#30CED8]">
            Club
          </a>

          <a href="#" className="transition hover:text-[#30CED8]">
            Equipos
          </a>

          <a href="#" className="transition hover:text-[#30CED8]">
            Galería
          </a>

          <a href="#" className="transition hover:text-[#30CED8]">
            Contacto
          </a>
        </nav>

        {/* Botón */}
        <button className="rounded-full bg-[#30CED8] px-6 py-2 font-semibold text-black transition hover:scale-105 hover:bg-white">
          ÚNETE
        </button>

      </div>
    </header>
  );
}