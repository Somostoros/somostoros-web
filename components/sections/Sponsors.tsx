"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sponsors = [
  {
    name: "Tu empresa",
    description: "Espacio disponible",
    featured: true,
  },
  {
    name: "Tu marca",
    description: "Espacio disponible",
    featured: false,
  },
  {
    name: "Tu empresa",
    description: "Espacio disponible",
    featured: false,
  },
  {
    name: "Tu marca",
    description: "Espacio disponible",
    featured: false,
  },
];

export default function Sponsors() {
  return (
    <section
      id="patrocinadores"
      className="relative overflow-hidden bg-[#111111] py-24 text-white sm:py-32"
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#35cad8]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#35cad8]">
            NUESTRO EQUIPO TAMBIÉN SOIS VOSOTROS
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Nuestros
            <span className="block text-[#35cad8]">
              patrocinadores
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Detrás de cada entrenamiento, cada partido y cada logro
            hay personas y empresas que creen en nuestro proyecto.
          </p>
        </motion.div>

        {/* PATROCINADORES */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {sponsors.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-3xl border ${
                sponsor.featured
                  ? "border-[#35cad8]/40 bg-[#35cad8]/5"
                  : "border-white/10 bg-white/[0.025]"
              } p-8 transition duration-500 hover:-translate-y-1 hover:border-[#35cad8]/50`}
            >
              {/* Número decorativo */}
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-8 text-[110px] font-black leading-none text-white/[0.025]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 text-center">

                {/* Espacio para logo */}
                <div
                  className={`mx-auto flex h-20 w-40 items-center justify-center rounded-xl border ${
                    sponsor.featured
                      ? "border-[#35cad8]/30 bg-[#35cad8]/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-xs font-black uppercase tracking-[0.2em] ${
                      sponsor.featured
                        ? "text-[#35cad8]"
                        : "text-white/30"
                    }`}
                  >
                    LOGO
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-black uppercase tracking-[0.15em]">
                  {sponsor.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {sponsor.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl bg-[#35cad8] p-8 text-center text-black sm:p-12"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-black/60">
            ¿QUIERES FORMAR PARTE DEL PROYECTO?
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
            Tu marca puede estar aquí
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
            Asocia tu empresa a Los Toros de Alicante y ayúdanos
            a seguir haciendo crecer el softball.
          </p>

          <Link
            href="#contacto-patrocinadores"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-black"
          >
            Quiero patrocinar a los Toros
            <span className="ml-3 text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}