"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Invitation() {
  return (
    <section
      id="invitacion"
      className="relative overflow-hidden bg-[#030708] py-24 text-white sm:py-32"
    >
      {/* Fondos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#35cad8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#35cad8]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#35cad8]">
            FORMA PARTE DE LA HISTORIA
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Tú también puedes
            <span className="block text-[#35cad8]">
              ser parte de Los Toros
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            El club crece gracias a las personas que creen en él.
            Hay muchas formas de formar parte de nuestra familia.
          </p>
        </motion.div>

        {/* DOS LLAMADAS A LA ACCIÓN */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* ================= JUGAR ================= */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition duration-500 hover:border-[#35cad8]/50 sm:p-10 lg:p-12"
          >
            {/* Número */}
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-12 text-[180px] font-black leading-none text-white/[0.025]"
            >
              01
            </div>

            <div className="relative z-10">

              {/* Icono */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#35cad8]/30 bg-[#35cad8]/10 text-3xl">
                ⚾
              </div>

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#35cad8]">
                PARA JUGADORES
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
                ¿Quieres jugar
                <span className="block text-[#35cad8]">
                  con los Toros?
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
                Si te gusta el softball, quieres competir y buscas
                un equipo donde la familia está por encima de todo,
                este puede ser tu sitio.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-[#35cad8]">✓</span>
                  Entrena y compite con nosotros
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-[#35cad8]">✓</span>
                  Conoce a nuestra familia
                </li>

                <li className="flex items-center gap-3">
                  <span className="text-[#35cad8]">✓</span>
                  Vive el softball desde dentro
                </li>
              </ul>

              <Link
                href="#contacto-jugadores"
                className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#35cad8] px-8 text-sm font-black uppercase tracking-[0.1em] text-black transition duration-300 hover:bg-white"
              >
                Quiero jugar con los Toros
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </motion.article>

          {/* ================= PATROCINAR ================= */}
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-[#35cad8]/20 bg-[#35cad8] p-8 text-black transition duration-500 hover:shadow-[0_20px_80px_rgba(53,202,216,0.15)] sm:p-10 lg:p-12"
          >
            {/* Número */}
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-12 text-[180px] font-black leading-none text-black/[0.06]"
            >
              02
            </div>

            <div className="relative z-10">

              {/* Icono */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/20 bg-black/10 text-3xl">
                🤝
              </div>

              <p className="text-xs font-black uppercase tracking-[0.3em] text-black/60">
                PARA EMPRESAS Y MARCAS
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
                ¿Quieres patrocinar
                <span className="block">
                  a los Toros?
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
                Asocia tu marca a un club deportivo en crecimiento
                y forma parte de un proyecto que apuesta por el
                deporte, la comunidad y los valores de equipo.
              </p>

              <ul className="mt-7 space-y-3 text-sm font-semibold text-black/70">
                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Visibilidad para tu marca
                </li>

                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Presencia junto a Los Toros
                </li>

                <li className="flex items-center gap-3">
                  <span>✓</span>
                  Forma parte de nuestro crecimiento
                </li>
              </ul>

              <Link
                href="#contacto-patrocinadores"
                className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-white hover:text-black"
              >
                Quiero patrocinar a los Toros
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </motion.article>

        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/30">
            #SOMOSTOROS
          </p>
        </motion.div>

      </div>
    </section>
  );
}