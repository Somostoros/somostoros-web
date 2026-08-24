"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Reserva el nombre",
    description:
      "Prepara al menos tres alternativas para el nombre de tu equipo y solicita previamente la reserva de denominación ante el Registro de Entidades Deportivas de la Comunitat Valenciana.",
    link: "https://presidencia.gva.es/es/web/deporte/registro",
    linkLabel: "Registro deportivo GVA",
  },
  {
    number: "02",
    title: "Elige la figura deportiva",
    description:
      "Decide si vas a constituirte como Club Deportivo, pensado para el ámbito federado, o como Grupo de Recreación Deportiva si tu actividad se desarrollará al margen de la competición federada.",
    link: "https://fbscv.com/formularis/",
    linkLabel: "Formularios FBSCV",
  },
  {
    number: "03",
    title: "Celebra la reunión fundacional",
    description:
      "Reúne como mínimo a tres socios fundadores mayores de edad. Completa el Acta de Constitución y los Estatutos y designa los cargos de presidente, vicepresidente y secretario.",
    link: "https://sede.gva.es/es/detall-tramit?id_proc=193",
    linkLabel: "Modelos y documentación GVA",
  },
  {
    number: "04",
    title: "Inscribe tu entidad en la GVA",
    description:
      "Presenta telemáticamente la documentación en el Registro de Entidades Deportivas de la Comunitat Valenciana. Para realizar el trámite electrónico necesitarás identificación o certificado digital.",
    link: "https://sede.gva.es/es/detall-tramit?id_proc=193",
    linkLabel: "Realizar trámite GVA",
  },
  {
    number: "05",
    title: "Solicita el NIF",
    description:
      "Una vez constituida la entidad, solicita su Número de Identificación Fiscal ante la Agencia Tributaria mediante el modelo 036 y aporta la documentación correspondiente.",
    link: "https://sede.agenciatributaria.gob.es/Sede/censos-nif-domicilio-fiscal/solicitar-nif.html",
    linkLabel: "Solicitar NIF · AEAT",
  },
  {
    number: "06",
    title: "Prepárate para competir",
    description:
      "Si quieres competir federadamente, completa la adscripción y los trámites correspondientes con la federación. Después podrás organizar licencias, jugadores, instalaciones, material y competición.",
    link: "https://fbscv.com/formularis/",
    linkLabel: "Federación · Formularios",
  },
];

const resources = [
  {
    icon: "🏷️",
    title: "Reserva de nombre",
    description:
      "Información del Registro de Entidades Deportivas para comenzar el proceso.",
    label: "GVA",
    href: "https://presidencia.gva.es/es/web/deporte/registro",
  },
  {
    icon: "📄",
    title: "Acta y Estatutos",
    description:
      "Consulta los modelos y documentación necesarios para constituir la entidad.",
    label: "GVA",
    href: "https://sede.gva.es/es/detall-tramit?id_proc=193",
  },
  {
    icon: "⚾",
    title: "Formularios federativos",
    description:
      "Documentación y formularios de la Federación de Béisbol y Softbol de la Comunitat Valenciana.",
    label: "FBSCV",
    href: "https://fbscv.com/formularis/",
  },
  {
    icon: "🏛️",
    title: "Inscripción de la entidad",
    description:
      "Accede al procedimiento oficial de inscripción deportiva de la Generalitat Valenciana.",
    label: "GVA",
    href: "https://sede.gva.es/es/detall-tramit?id_proc=193",
  },
  {
    icon: "🧾",
    title: "Solicitar el NIF",
    description:
      "Información oficial de la Agencia Tributaria para solicitar el NIF mediante el modelo 036.",
    label: "AEAT",
    href: "https://sede.agenciatributaria.gob.es/Sede/censos-nif-domicilio-fiscal/solicitar-nif.html",
  },
  {
    icon: "✅",
    title: "Checklist Toros",
    description:
      "Una lista práctica para comprobar que tienes preparados todos los pasos y documentos.",
    label: "PRÓXIMAMENTE",
    href: null,
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
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#30CED8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
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
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
            HACEMOS CRECER EL SOFTBALL
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Te ayudamos a
            <span className="block text-[#30CED8]">
              formar tu equipo
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            ¿Tienes un grupo de jugadores y quieres dar el siguiente paso?
            Te acompañamos para que puedas convertir una idea en un equipo
            preparado para competir.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#30CED8]" />
        </motion.div>

        {/* PASOS */}
        <div className="relative mt-20">

          {/* Línea */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#30CED8] via-[#30CED8]/30 to-transparent md:block"
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
                <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-[#30CED8]/40 bg-[#111111] text-xs font-black text-[#30CED8] md:flex">
                  {step.number}
                </div>

                <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#30CED8]/40 hover:bg-white/[0.05] sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="shrink-0">
                      <span className="text-4xl font-black text-white/10 sm:hidden">
                        {step.number}
                      </span>

                      <span className="hidden text-5xl font-black text-[#30CED8]/20 sm:block">
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
                      <a
                       href={step.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="mt-4 inline-flex items-center text-xs font-black uppercase tracking-[0.15em] text-[#30CED8] transition hover:text-white"
                      >
                       {step.linkLabel}
                       <span className="ml-2">↗</span>
                      </a>
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
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#30CED8]">
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
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-[#30CED8]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-3xl">
                    {resource.icon}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white/40">
                   {resource.label}
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-black uppercase">
                  {resource.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {resource.description}
                </p>

                {resource.href ? (
                <a
                   href={resource.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.15em] text-[#30CED8] transition hover:text-white"
                >
                   Abrir recurso
                   <span className="ml-2">↗</span>
                 </a>
              ) : (
                 <span className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.15em] text-white/30">
                   Próximamente
                </span>
                )}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-black/20 px-6 py-5">
            <p className="text-sm leading-6 text-white/45">
            <strong className="font-bold text-white/70">
             Importante:
            </strong>{" "}
             esta guía tiene carácter orientativo. Los procedimientos, requisitos y
             tasas pueden cambiar. Antes de presentar cualquier documentación,
             comprueba siempre la información vigente en los organismos oficiales
             enlazados.
            </p>
          </div>
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 overflow-hidden rounded-3xl border border-[#30CED8]/20 bg-[#30CED8] p-8 text-center text-black sm:p-12"
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
            Habla con los Toros
            <span className="ml-3 text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}