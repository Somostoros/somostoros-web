"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const milestones = [
  {
    year: "2021",
    title: "Nace Los Toros",
    description:
      "El 19 de abril de 2021, ocho amigos firman el Acta de Constitución y comienza la historia de Los Toros de Alicante.",
    tag: "EL COMIENZO",
  },
  {
    year: "2022",
    title: "Primeros pasos",
    description:
      "El equipo comienza a crecer, competir y construir una identidad basada en la amistad, el compromiso y la pasión por el softball.",
    tag: "CRECIMIENTO",
  },
  {
    year: "2024",
    title: "Un club en crecimiento",
    description:
      "Los Toros continúan consolidándose dentro del softball y ampliando su presencia deportiva.",
    tag: "EVOLUCIÓN",
  },
  {
    year: "2025",
    title: "Campeones",
    description:
      "Los Toros de Alicante se proclaman campeones de la III Copa de la Liga Autonómica de Softbol Masculino.",
    tag: "CAMPEONES",
    featured: true,
  },
];

export default function Palmares() {
  return (
    <section
      id="palmares"
      className="relative overflow-hidden bg-[#0b0f10] py-24 text-white sm:py-32"
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#30CED8]/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
            PALMARÉS
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Hitos del club
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            La historia deportiva de Los Toros de Alicante,
            construida partido a partido.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#30CED8]" />
        </motion.div>

        {/* LÍNEA TEMPORAL */}
        <div className="relative">

          {/* Línea central — escritorio */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#30CED8]/50 to-transparent lg:block"
          />

          <div className="space-y-12 lg:space-y-0">

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className={`relative lg:flex lg:min-h-[260px] lg:items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >

                  {/* TARJETA */}
                  <div
                    className={`
                      w-full
                      lg:w-[44%]
                      ${
                        milestone.featured
                          ? "border-[#30CED8]/50 bg-[#30CED8]/10"
                          : "border-white/10 bg-white/[0.04]"
                      }
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      p-7
                      backdrop-blur-sm
                      transition
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#30CED8]/50
                      sm:p-9
                    `}
                  >

                    {/* Año */}
                    <div className="flex items-start justify-between gap-4">

                      <span
                        className={`text-5xl font-black sm:text-6xl ${
                          milestone.featured
                            ? "text-[#30CED8]"
                            : "text-white/15"
                        }`}
                      >
                        {milestone.year}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                          milestone.featured
                            ? "bg-[#30CED8] text-black"
                            : "border border-white/10 text-white/40"
                        }`}
                      >
                        {milestone.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-black uppercase sm:text-3xl">
                      {milestone.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-gray-400">
                      {milestone.description}
                    </p>

                    {milestone.featured && (
                      <div className="mt-7 flex items-center gap-3">
                        <span className="text-2xl">🏆</span>

                        <span className="text-sm font-black uppercase tracking-wider text-[#30CED8]">
                          Campeones
                        </span>
                      </div>
                    )}
                  </div>

                  {/* PUNTO DE LA LÍNEA */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#0b0f10] bg-[#30CED8] shadow-[0_0_20px_rgba(48,206,216,0.5)] lg:block"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTÓN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/palmares"
            className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#30CED8] px-8 text-sm font-black uppercase tracking-[0.12em] text-[#30CED8] transition duration-300 hover:bg-[#30CED8] hover:text-black"
          >
            Ver palmarés completo
            <span className="ml-3 text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}