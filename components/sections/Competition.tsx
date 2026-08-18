"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Competition() {
  return (
    <section
      id="competicion"
      className="relative overflow-hidden bg-[#030708] py-24 text-white sm:py-32"
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(53,202,216,0.25) 0, transparent 35%), radial-gradient(circle at 80% 80%, rgba(53,202,216,0.18) 0, transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#35cad8] sm:text-base">
            COMPETICIÓN
          </p>

          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Los Toros están
            <span className="block text-[#35cad8]">
              en juego
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#35cad8]" />
        </motion.div>

        {/* ====================================================== */}
        {/* ÚLTIMO RESULTADO + PRÓXIMO PARTIDO */}
        {/* ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ÚLTIMO RESULTADO */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-10"
          >
            {/* Línea decorativa */}
            <div className="absolute left-0 top-0 h-full w-1 bg-[#35cad8]" />

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#35cad8]">
                  ÚLTIMO RESULTADO
                </p>

                <p className="mt-2 text-sm text-white/50">
                  Liga Autonómica de Softbol
                </p>
              </div>

              <span className="text-4xl">🏆</span>
            </div>

            {/* Marcador */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

              <div className="text-center">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-[#35cad8]/30 bg-black/40 p-3">
                  <span className="text-sm font-black text-[#35cad8]">
                    TOROS
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase">
                  Toros de Alicante
                </h3>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black tracking-tight sm:text-6xl">
                  18
                  <span className="mx-2 text-white/30">—</span>
                  11
                </div>

                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">
                  FINAL
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/40 p-3">
                  <span className="text-xs font-black text-white/60">
                    MARINEROS
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase">
                  Marineros
                </h3>
              </div>

            </div>

            {/* Comentario */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-center text-lg font-bold sm:text-xl">
                ¡Toros, nuevo equipo
                <span className="text-[#35cad8]">
                  {" "}Campeón Federado de Murcia!
                </span>
              </p>
            </div>

            <Link
              href="#resultados"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase tracking-wider transition hover:border-[#35cad8] hover:bg-[#35cad8] hover:text-black"
            >
              Ver resultados
              <span className="ml-3 text-lg">→</span>
            </Link>
          </motion.article>

          {/* PRÓXIMO PARTIDO */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[#35cad8] p-7 text-black sm:p-10"
          >
            {/* Decoración */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[40px] border-black/5"
            />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-black/60">
                    PRÓXIMO PARTIDO
                  </p>

                  <p className="mt-2 text-sm font-bold text-black/50">
                    Próxima jornada
                  </p>
                </div>

                <span className="text-4xl">⚾</span>
              </div>

              {/* Equipos */}
              <div className="flex items-center justify-center gap-5 text-center sm:gap-10">

                <div className="flex-1">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black/20 bg-black/10">
                    <span className="text-sm font-black">
                      TOROS
                    </span>
                  </div>

                  <p className="text-lg font-black uppercase">
                    Toros
                  </p>
                </div>

                <div className="text-2xl font-black">
                  VS
                </div>

                <div className="flex-1">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black/20 bg-black/10">
                    <span className="text-xs font-black">
                      RIVAL
                    </span>
                  </div>

                  <p className="text-lg font-black uppercase">
                    Próximo rival
                  </p>
                </div>

              </div>

              {/* Datos */}
              <div className="mt-10 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-black/10 p-4 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50">
                    FECHA
                  </p>

                  <p className="mt-1 font-black">
                    Próximamente
                  </p>
                </div>

                <div className="rounded-2xl bg-black/10 p-4 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50">
                    CAMPO
                  </p>

                  <p className="mt-1 font-black">
                    Por confirmar
                  </p>
                </div>

              </div>

              <Link
                href="#calendario"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Ver calendario
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </motion.article>
        </div>

        {/* ====================================================== */}
        {/* CLASIFICACIÓN */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm"
        >
          {/* Cabecera */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#35cad8]">
                CLASIFICACIÓN
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                Liga Autonómica
              </h3>
            </div>

            <Link
              href="#clasificacion"
              className="inline-flex items-center justify-center rounded-full border border-[#35cad8] px-6 py-3 text-sm font-black uppercase tracking-wider text-[#35cad8] transition hover:bg-[#35cad8] hover:text-black"
            >
              Clasificación completa
              <span className="ml-3">→</span>
            </Link>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto">

            <div className="min-w-[650px]">

              {/* Cabecera tabla */}
              <div className="grid grid-cols-[60px_1fr_80px_80px_80px_80px] border-b border-white/10 px-7 py-4 text-xs font-black uppercase tracking-widest text-white/40 sm:px-10">
                <span>#</span>
                <span>Equipo</span>
                <span className="text-center">PJ</span>
                <span className="text-center">PG</span>
                <span className="text-center">PP</span>
                <span className="text-center">PTS</span>
              </div>

              {/* TOROS */}
              <div className="grid grid-cols-[60px_1fr_80px_80px_80px_80px] items-center border-b border-white/5 bg-[#35cad8]/10 px-7 py-5 sm:px-10">

                <span className="text-xl font-black text-[#35cad8]">
                  1
                </span>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#35cad8] text-xs font-black text-black">
                    T
                  </div>

                  <span className="font-black uppercase">
                    Toros de Alicante
                  </span>
                </div>

                <span className="text-center font-bold">
                  —
                </span>

                <span className="text-center font-bold">
                  —
                </span>

                <span className="text-center font-bold">
                  —
                </span>

                <span className="text-center text-lg font-black text-[#35cad8]">
                  —
                </span>
              </div>

              {/* OTROS EQUIPOS */}
              {[
                "Marineros",
                "Caribes",
                "Vikingos",
                "Tigres",
              ].map((team, index) => (
                <div
                  key={team}
                  className="grid grid-cols-[60px_1fr_80px_80px_80px_80px] items-center border-b border-white/5 px-7 py-5 transition hover:bg-white/[0.03] sm:px-10"
                >
                  <span className="font-bold text-white/40">
                    {index + 2}
                  </span>

                  <span className="font-bold">
                    {team}
                  </span>

                  <span className="text-center text-white/40">
                    —
                  </span>

                  <span className="text-center text-white/40">
                    —
                  </span>

                  <span className="text-center text-white/40">
                    —
                  </span>

                  <span className="text-center font-bold text-white/40">
                    —
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}