"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FanZone() {
  return (
    <section
      id="fan-zone"
      className="relative overflow-hidden bg-[#030708] py-24 text-white sm:py-32"
    >
      {/* Fondos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#35cad8]/5 blur-3xl"
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
            PARA LOS QUE SOMOS TOROS
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
            FAN
            <span className="text-[#35cad8]"> ZONE</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Todo lo que necesitas para vivir Los Toros también fuera
            del terreno de juego.
          </p>
        </motion.div>

        {/* MOSAICO */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12">

          {/* TIENDA */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-8 lg:col-span-7 lg:min-h-[360px] lg:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute -right-5 -top-12 text-[190px] font-black leading-none text-white/[0.025]"
            >
              01
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#35cad8]/10 text-3xl">
                    🛍️
                  </div>

                  <span className="rounded-full border border-[#35cad8]/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#35cad8]">
                    Próximamente
                  </span>
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#35cad8]">
                  VISTE LOS COLORES
                </p>

                <h3 className="mt-2 text-4xl font-black uppercase sm:text-5xl">
                  TIENDA
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                  Camisetas, gorras y merchandising para llevar
                  el espíritu de Los Toros contigo.
                </p>
              </div>

              <Link
                href="#tienda"
                className="mt-8 inline-flex w-fit items-center rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-[0.15em] text-white transition duration-300 hover:border-[#35cad8] hover:bg-[#35cad8] hover:text-black"
              >
                Entrar en la tienda
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </motion.article>

          {/* FOTOS */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-8 lg:col-span-5 lg:min-h-[360px]"
          >
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                📸
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-[#35cad8]">
                VIVE LOS MOMENTOS
              </p>

              <h3 className="mt-2 text-3xl font-black uppercase">
                FOTOS
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Los mejores momentos del equipo dentro y fuera
                del campo.
              </p>

              <Link
                href="#galeria"
                className="mt-7 inline-flex items-center text-xs font-black uppercase tracking-[0.15em] text-[#35cad8] transition hover:text-white"
              >
                Ver galería
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>

            <span
              aria-hidden="true"
              className="absolute -bottom-10 -right-5 text-[150px] font-black leading-none text-white/[0.025]"
            >
              02
            </span>
          </motion.article>

          {/* VÍDEOS */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] p-8 lg:col-span-5 lg:min-h-[300px]"
          >
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                🎥
              </div>

              <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-[#35cad8]">
                SIENTE EL JUEGO
              </p>

              <h3 className="mt-2 text-3xl font-black uppercase">
                VÍDEOS
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Partidos, jugadas, celebraciones y mucho más.
              </p>

              <Link
                href="#videos"
                className="mt-7 inline-flex items-center text-xs font-black uppercase tracking-[0.15em] text-[#35cad8] transition hover:text-white"
              >
                Ver vídeos
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>

            <span
              aria-hidden="true"
              className="absolute -bottom-8 -right-4 text-[130px] font-black leading-none text-white/[0.025]"
            >
              03
            </span>
          </motion.article>

          {/* REDES SOCIALES */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-[#35cad8] p-8 text-black lg:col-span-7 lg:min-h-[300px] lg:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute -right-6 -top-14 text-[190px] font-black leading-none text-black/[0.05]"
            >
              04
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/10 text-2xl">
                  📱
                </div>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-black/60">
                  SIGUE A LOS TOROS
                </p>

                <h3 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                  REDES SOCIALES
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-black/60">
                  No te pierdas ninguna noticia, partido o momento
                  del equipo.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/torosdealicante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Los Toros de Alicante"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.75a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Z" />
                  </svg>

                  Instagram
                </a>

                <a
                  href="https://www.facebook.com/torosdealicante/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Los Toros de Alicante"
                  className="inline-flex items-center gap-2 rounded-full bg-black/10 px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-black transition hover:bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M13.5 22v-8h2.75l.41-3H13.5V9.08c0-.87.24-1.46 1.53-1.46h1.63V4.94c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.43-3.96 4.07V11H7.66v3h2.66v8h3.18Z" />
                  </svg>

                  Facebook
                </a>
              </div>
            </div>
          </motion.article>

        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            El partido termina.
            <span className="text-[#35cad8]"> La pasión no.</span>
          </p>

          <p className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-white/25">
            #SOMOSTOROS
          </p>
        </motion.div>

      </div>
    </section>
  );
}