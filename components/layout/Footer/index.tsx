import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "El Club", href: "/club" },
  { label: "Únete", href: "/unete" },
  { label: "Actualidad", href: "/#actualidad" },
  { label: "El Equipo", href: "/#equipo" },
  { label: "Competición", href: "/#competicion" },
  { label: "Palmarés", href: "/#palmares" },
  { label: "Fan Zone", href: "/#fan-zone" },
];

const clubLinks = [
  { label: "El Club", href: "/club" },
  { label: "Únete", href: "/unete" },
  { label: "Nuestra historia", href: "/#historia" },
  { label: "Plantilla", href: "/#equipo" },
  { label: "Formar un equipo", href: "/#formar-equipo" },
  { label: "Patrocinadores", href: "/#patrocinadores" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#030708] text-white">

      {/* ================= CTA FINAL ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

          <div className="relative overflow-hidden rounded-3xl bg-[#30CED8] px-8 py-14 text-center text-black sm:px-12 lg:px-20">

            {/* Decoración */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 text-[280px] font-black leading-none text-black/[0.05]"
            >
              T
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-16 text-[280px] font-black leading-none text-black/[0.05]"
            >
              T
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">

              <p className="text-xs font-black uppercase tracking-[0.4em] text-black/60">
                #SOMOSTOROS
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
                El softbol nos une
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/65">
                Una pasión, un equipo y una familia que sigue creciendo.
                ¿Te unes a nosotros?
              </p>

              <Link
                href="/#contacto"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-white hover:text-black"
              >
                Contacta con los Toros
                <span className="ml-3 text-lg">→</span>
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER PRINCIPAL ================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-12">

            {/* IDENTIDAD */}
            <div className="lg:col-span-4">

              <Link
                href="/#inicio"
                aria-label="Volver al inicio"
                className="inline-flex items-center gap-4"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <Image
                    src="/logos/logo-toros.png"
                    alt="Los Toros de Alicante"
                    width={373}
                    height={476}
                    unoptimized
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div>
                  <p className="toros-font text-2xl font-black tracking-[0.08em]">
                    TOrOS
                  </p>

                  <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#30CED8]">
                     de Alicante
                  </p>
                </div>
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-gray-500">
                Los Toros de Alicante. Un equipo de softbol nacido
                de la pasión, la amistad y las ganas de hacer crecer
                nuestro deporte.
              </p>

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-white/30">
                #SOMOSTOROS
              </p>

            </div>

            {/* NAVEGACIÓN */}
            <div className="lg:col-span-3">

              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                Navegación
              </h3>

              <nav className="mt-6 flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm font-semibold text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

            </div>

            {/* CLUB */}
            <div className="lg:col-span-3">

              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                El club
              </h3>

              <nav className="mt-6 flex flex-col gap-3">
                {clubLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm font-semibold text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

            </div>

            {/* REDES */}
<div className="relative z-20 lg:col-span-2">

  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
    Síguenos
  </h3>

  <div className="relative z-20 mt-6 flex flex-wrap gap-3">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/torosdealicante/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram de Los Toros de Alicante"
      title="Instagram"
      className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#30CED8]/30 bg-[#30CED8]/5 text-[#30CED8] transition-all duration-300 hover:scale-110 hover:border-[#30CED8] hover:bg-[#30CED8] hover:text-black"
    >
      <FaInstagram
        aria-hidden="true"
        className="h-5 w-5"
      />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/torosdealicante"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook de Los Toros de Alicante"
      title="Facebook"
      className="group flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#30CED8]/30 bg-[#30CED8]/5 text-[#30CED8] transition-all duration-300 hover:scale-110 hover:border-[#30CED8] hover:bg-[#30CED8] hover:text-black"
    >
      <FaFacebookF
        aria-hidden="true"
        className="h-5 w-5"
      />
    </a>

  </div>

</div>
          </div>

          {/* SEPARADOR */}
          <div className="my-12 h-px bg-white/10" />

          {/* BARRA INFERIOR */}
          <div className="flex flex-col gap-5 text-xs text-gray-600 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Los Toros de Alicante.
              Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="#aviso-legal"
                className="transition hover:text-white"
              >
                Aviso legal
              </Link>

              <Link
                href="#privacidad"
                className="transition hover:text-white"
              >
                Política de privacidad
              </Link>

              <Link
                href="#cookies"
                className="transition hover:text-white"
              >
                Política de cookies
              </Link>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}