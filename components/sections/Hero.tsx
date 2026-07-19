import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Club", href: "#historia" },
  { label: "Equipos", href: "#equipos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-svh overflow-hidden bg-[#030708] text-white"
    >
      {/* Fotografía de fondo */}
      <Image
        src="/images/hero/hero.jpeg"
        alt="Equipo de Los Toros de Alicante"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_center]"
      />

      {/* Capas oscuras para mejorar la lectura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/80"
      />

      {/* Cabecera */}
      <header className="relative z-30 border-b border-white/10 bg-[#071012]/70 backdrop-blur-md">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-4 px-4 sm:min-h-[96px] sm:px-6 lg:px-8">
          <Link
            href="#inicio"
            aria-label="Ir al inicio"
            className="flex min-w-0 items-center gap-4"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/30 bg-black/20 p-1.5 sm:h-16 sm:w-16">
              {/*
                unoptimized evita que el logo pase por /_next/image.
                Es especialmente útil para estos PNG pequeños.
              */}
              <Image
                src="/logos/logo-toros.png"
                alt="Los Toros de Alicante"
                width={373}
                height={476}
                priority
                unoptimized
                className="h-auto w-32 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] sm:w-40 md:w-48 lg:w-52"
              />
            </span>

            <span className="truncate text-2xl font-black tracking-[0.08em] sm:text-3xl">
              TOROS
            </span>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-[0.08em] text-white/80 transition hover:text-[#35cad8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contacto"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#35cad8] px-7 text-base font-black text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35cad8] sm:min-h-14 sm:px-9 sm:text-lg"
          >
            ÚNETE
          </Link>
        </div>
      </header>

      {/* Contenido central */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[calc(100svh-96px)] sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          {/* Logo principal del Hero */}
          <div className="mx-auto mb-7 flex justify-center sm:mb-9 animate-bounce">
            <Image
              src="/logos/logo-toros.png"
              alt="Logotipo de Los Toros de Alicante"
              width={373}
              height={476}
              priority
              unoptimized
              className="h-auto w-28 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] sm:w-36 md:w-44 lg:w-48"
            />
          </div>

          {/* Etiqueta */}
          <div className="mb-7 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#35cad8] sm:w-16"
            />

            <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#35cad8] sm:text-lg">
              #SOMOSTOROS
            </p>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#35cad8] sm:w-16"
            />
          </div>

          {/* Título */}
          <h1 className="text-[clamp(3.2rem,12vw,7rem)] font-black leading-[0.88] tracking-[-0.055em]">
            <span className="block">Los Toros</span>
            <span className="mt-2 block text-[#35cad8]">
              de Alicante
            </span>
          </h1>

          {/* Descripción */}
          <div className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">
            <p>No importa quién seas.</p>

            <p className="mt-2 font-extrabold">
              Donde la pasión por el softball se convierte en familia.
            </p>
          </div>

          {/* Botones */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              href="#historia"
              className="inline-flex min-h-16 w-full items-center justify-center rounded-full bg-[#35cad8] px-8 text-lg font-black uppercase tracking-[0.02em] text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35cad8] sm:w-auto sm:min-w-[250px]"
            >
              Conoce el club
            </Link>

            <Link
              href="#contacto"
              className="inline-flex min-h-16 w-full items-center justify-center rounded-full border-2 border-[#35cad8] bg-black/35 px-8 text-lg font-black uppercase tracking-[0.02em] text-[#35cad8] backdrop-blur-sm transition hover:bg-[#35cad8] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35cad8] sm:w-auto sm:min-w-[250px]"
            >
              Únete al club
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}