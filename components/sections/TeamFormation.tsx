"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Reúne tu equipo",
    description:
      "Encuentra personas con ganas de jugar, entrenar y compartir la pasión por el softball.",
  },
  {
    number: "02",
    title: "Define tu club",
    description:
      "Elige el nombre de tu equipo, crea tu identidad y organiza la estructura básica del club.",
  },
  {
    number: "03",
    title: "Formaliza el club",
    description:
      "Prepara la documentación necesaria para constituir y organizar formalmente tu equipo.",
  },
  {
    number: "04",
    title: "Regístrate",
    description:
      "Te mostramos los pasos necesarios para completar los trámites y comenzar tu actividad deportiva.",
  },
  {
    number: "05",
    title: "Prepárate para competir",
    description:
      "Organiza jugadores, licencias, equipación, campo, material y todo lo necesario para competir.",
  },
  {
    number: "06",
    title: "¡A jugar!",
    description:
      "Ya tienes tu equipo preparado. Ahora toca disfrutar del softball y empezar a escribir vuestra propia historia.",
  },
];

const resources = [
  {
    icon: "📕",
    title: "Guía para crear un equipo",
    description: "Una guía paso a paso para comenzar desde cero.",
  },
  {
    icon: "📄",
    title: "Acta fundacional",
    description: "Modelo de documento para formalizar la constitución.",
  },
  {
    icon: "📄",
    title: "Estatutos",
    description: "Modelo orientativo para organizar el club.",
  },
  {
    icon: "📋",
    title: "Documentación de inscripción",
    description: "Documentos y requisitos que deberás preparar.",
  },
  {
    icon: "📕",
    title: "Guía de trámites",
    description: "Te ayudamos a entender el proceso administrativo.",
  },
  {
    icon: "✅",
    title: "Checklist",
    description: "Comprueba que no te falta ningún paso antes de empezar.",
  },
];

export default function TeamFormation() {
  return (
    <section
      id="formar-equipo"
      className="relative overflow-hidden bg-[#111111] py-24 text-white sm:py-32"
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#35cad8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#35cad8]/5 blur-3xl"
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
            HACEMOS CRECER EL SOFTBALL
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Te ayudamos a
            <span className="block text-[#35cad8]">
              formar tu equipo
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            ¿Tienes un grupo de jugadores y quieres dar el siguiente paso?
            Te acompañamos para que puedas convertir una idea en un equipo
            preparado para competir.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#35cad8]" />
        </motion.div>

        {/* PASOS */}
        <div className="relative mt-20">

          {/* Línea */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#35cad8] via-[#35cad8]/30 to-transparent md:block"
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="relative md:pl-16"
              >
                {/* Punto */}
                <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-[#35cad8]/40 bg-[#111111] text-xs font-black text-[#35cad8] md:flex">
                  {step.number}
                </div>

                <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#35cad8]/40 hover:bg-white/[0.05] sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="shrink-0">
                      <span className="text-4xl font-black text-white/10 sm:hidden">
                        {step.number}
                      </span>

                      <span className="hidden text-5xl font-black text-[#35cad8]/20 sm:block">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black uppercase sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-3xl text-base leading-7 text-gray-400">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RECURSOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#35cad8]">
              RECURSOS
            </p>

            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Documentación para crear tu club
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Aquí encontrarás modelos y documentos que te ayudarán
              durante el proceso.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-[#35cad8]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl">
                    {resource.icon}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white/40">
                    PDF
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-black uppercase">
                  {resource.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {resource.description}
                </p>

                <button
                  type="button"
                  className="mt-5 text-xs font-black uppercase tracking-[0.15em] text-[#35cad8] transition hover:text-white"
                >
                  Próximamente →
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-3xl border border-[#35cad8]/20 bg-[#35cad8] p-8 text-center text-black sm:p-12"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-black/60">
            ¿NO SABES POR DÓNDE EMPEZAR?
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Nosotros te ayudamos
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-black/65">
            Si tienes un grupo de jugadores y quieres crear un equipo,
            ponte en contacto con nosotros y te orientaremos en los
            primeros pasos.
          </p>

          <Link
            href="#contacto"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-black"
          >
            Quiero formar un equipo
            <span className="ml-3 text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}