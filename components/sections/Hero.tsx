"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "../animations/FadeIn";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Degradado */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/70
          via-black/55
          to-black/80
        "
      />

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-6
          py-28
          text-center
          text-white
        "
      >
        {/* Logotipo */}
        <FadeIn delay={0}>
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Image
              src="/logos/Logo3.PNG"
              alt="Logotipo de Los Toros de Alicante"
              width={200}
              height={200}
              priority
              className="h-auto w-40 drop-shadow-2xl sm:w-48 md:w-52"
            />
          </motion.div>
        </FadeIn>

        {/* Etiqueta */}
        <FadeIn delay={0.2}>
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#30CED8]/60 sm:w-12"
            />

            <p
              className="
                text-xs
                font-light
                uppercase
                italic
                tracking-[0.3em]
                text-[#30CED8]
                sm:text-sm
                sm:tracking-[0.55em]
                md:text-base
              "
            >
              #SOMOSTOROS
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#30CED8]/60 sm:w-12"
            />
          </div>
        </FadeIn>

        {/* Título */}
        <FadeIn delay={0.4}>
          <h1
            className="
              mt-3
              text-5xl
              font-black
              leading-none
              tracking-tight
              drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]
              sm:text-6xl
              md:text-8xl
            "
          >
            <span className="block">Los Toros</span>

            <span className="-mt-1 block text-[#30CED8] sm:-mt-2">
              de Alicante
            </span>
          </h1>
        </FadeIn>

        {/* Descripción */}
        <FadeIn delay={0.6}>
          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/90
              sm:text-xl
              md:text-2xl
            "
          >
            No importa quién seas.
            <br />

            <span className="font-bold text-white">
              Donde la pasión por el softball se convierte en familia.
            </span>
          </p>
        </FadeIn>

        {/* Acciones */}
        <FadeIn delay={0.8}>
          <div
            className="
              mt-12
              flex
              w-full
              max-w-md
              flex-col
              gap-4
              sm:w-auto
              sm:max-w-none
              sm:flex-row
            "
          >
            <Link
              href="#historia"
              className="
                rounded-full
                bg-[#30CED8]
                px-8
                py-4
                text-center
                font-bold
                text-black
                shadow-[0_0_35px_rgba(48,206,216,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(48,206,216,0.55)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#30CED8]
              "
            >
              CONOCE EL CLUB
            </Link>

            <Link
              href="#contacto"
              className="
                rounded-full
                border
                border-[#30CED8]
                bg-black/20
                px-8
                py-4
                text-center
                font-bold
                text-[#30CED8]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#30CED8]
                hover:text-black
                hover:shadow-[0_0_30px_rgba(48,206,216,0.35)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#30CED8]
              "
            >
              ÚNETE AL CLUB
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}