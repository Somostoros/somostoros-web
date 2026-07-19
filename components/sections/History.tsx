"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const DOCUMENT_SHAPE = `
  polygon(
    0.7% 0.5%,
    11% 0.1%,
    24% 0.8%,
    39% 0.2%,
    53% 0.7%,
    68% 0.1%,
    83% 0.8%,
    99.2% 0.6%,
    99.8% 15%,
    99.2% 31%,
    100% 49%,
    99.3% 67%,
    99.8% 84%,
    99.2% 99.2%,
    82% 99.8%,
    65% 99.1%,
    49% 99.8%,
    31% 99.1%,
    15% 99.8%,
    0.8% 99.1%,
    0.2% 82%,
    0.9% 64%,
    0.1% 46%,
    0.8% 28%
  )
`;

const PHOTO_SHAPE = `
  polygon(
    1.2% 1%,
    14% 0.2%,
    29% 1.1%,
    45% 0.2%,
    61% 1%,
    78% 0.2%,
    98.8% 1.1%,
    99.8% 18%,
    99.1% 35%,
    100% 53%,
    99.2% 72%,
    99.8% 98.9%,
    84% 99.8%,
    66% 99.1%,
    48% 99.8%,
    30% 99.1%,
    13% 99.8%,
    1% 99%,
    0.2% 81%,
    1% 61%,
    0.1% 42%,
    1% 22%
  )
`;

type MetalScrewProps = {
  className: string;
};

function MetalScrew({ className }: MetalScrewProps) {
  return (
    <span
      aria-hidden="true"
      className={`
        absolute
        z-30
        h-2.5
        w-2.5
        rounded-full
        border
        border-white/70
        ${className}
      `}
      style={{
        background:
          "radial-gradient(circle at 35% 28%, #ffffff 0%, #d4d4d8 25%, #71717a 64%, #27272a 100%)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.85), inset 0 1px 1px rgba(255,255,255,0.9)",
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          rounded-full
          bg-black/50
        "
      />
    </span>
  );
}

function FoundationPlaque() {
  return (
    <div
      className="
        absolute
        bottom-[2.5%]
        left-1/2
        z-40
        w-[52%]
        min-w-[10rem]
        max-w-[15rem]
        -translate-x-1/2
        sm:bottom-[3%]
        sm:w-[42%]
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[1rem]
          border
          border-white/30
          bg-[#07161B]/80
          px-4
          py-4
          shadow-[0_16px_36px_rgba(0,0,0,0.62)]
          backdrop-blur-[10px]
          sm:px-5
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/80
            to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-5
            -top-12
            h-28
            w-10
            rotate-[28deg]
            bg-white/[0.08]
            blur-sm
          "
        />

        <MetalScrew className="left-2 top-2" />
        <MetalScrew className="right-2 top-2" />
        <MetalScrew className="bottom-2 left-2" />
        <MetalScrew className="bottom-2 right-2" />

        <div className="relative text-center">
          <p
            className="
              text-[0.52rem]
              font-bold
              uppercase
              tracking-[0.22em]
              text-white/60
              sm:text-[0.6rem]
            "
          >
            Acta de Constitución
          </p>

          <p
            className="
              mt-1
              text-3xl
              font-black
              leading-none
              text-[#30CED8]
              drop-shadow-[0_0_12px_rgba(48,206,216,0.35)]
              sm:text-4xl
            "
          >
            2021
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              my-3
              h-px
              w-4/5
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
          />

          <time
            dateTime="2021-04-19"
            className="block text-[0.68rem] font-bold text-white sm:text-xs"
          >
            19 de abril
          </time>

          <p className="mt-2 text-[0.62rem] text-white/75 sm:text-[0.7rem]">
            Guarapo Café
          </p>

          <p className="mt-0.5 text-[0.56rem] text-white/55 sm:text-[0.65rem]">
            El Campello · Alicante
          </p>
        </div>
      </div>
    </div>
  );
}

export default function History() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="historia"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#050606]
        py-24
        sm:py-32
        lg:py-40
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-56
            top-1/4
            h-[34rem]
            w-[34rem]
            rounded-full
            bg-[#30CED8]/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-96
            w-96
            rounded-full
            bg-white/[0.04]
            blur-[140px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
        <article className="relative isolate">
          {/* sombra documento */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              translate-x-2
              translate-y-8
              rotate-[0.35deg]
              bg-black/65
              blur-md
            "
            style={{ clipPath: DOCUMENT_SHAPE }}
          />

          {/* hoja secundaria */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              translate-x-1.5
              translate-y-2
              rotate-[-0.2deg]
              bg-[#C5B18A]
            "
            style={{ clipPath: DOCUMENT_SHAPE }}
          />

          {/* hoja principal */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              border
              border-[#D3C19D]
              bg-[#EFE1C4]
            "
            style={{ clipPath: DOCUMENT_SHAPE }}
          />

          {/* textura documento */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              clipPath: DOCUMENT_SHAPE,
              backgroundImage: `
                radial-gradient(rgba(101,70,31,0.18) 0.55px, transparent 0.75px),
                radial-gradient(circle at 10% 15%, rgba(124,83,35,0.14), transparent 18%),
                radial-gradient(circle at 90% 86%, rgba(101,68,29,0.12), transparent 22%),
                linear-gradient(105deg, rgba(255,255,255,0.24), transparent 35%, rgba(83,54,22,0.05))
              `,
              backgroundSize: "5px 5px, 100% 100%, 100% 100%, 100% 100%",
              boxShadow: "inset 0 0 130px rgba(89,56,22,0.13)",
            }}
          />

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-11
              px-6
              pb-10
              pt-12
              sm:px-10
              sm:pb-14
              sm:pt-16
              lg:grid-cols-[1.3fr_0.82fr]
              lg:gap-12
              lg:px-14
              lg:pb-12
              lg:pt-16
            "
          >
            {/* FOTO */}
            <motion.figure
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, rotate: 2 }
                  : { opacity: 0, y: 65, rotate: 0 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.08,
                ease: EASE,
              }}
              className="
                relative
                z-20
                mx-auto
                w-full
                max-w-[760px]
                will-change-transform
                lg:-ml-16
                lg:max-w-none
              "
              style={{ transformOrigin: "50% 70%" }}
            >
              {/* hoja inferior de apoyo */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  translate-x-3
                  translate-y-4
                  rotate-[-1deg]
                  bg-[#A88F66]/45
                  blur-[0.5px]
                "
                style={{ clipPath: PHOTO_SHAPE }}
              />

              {/* foto/papel */}
              <div
                className="
                  relative
                  bg-[#F5E9D3]
                  p-3
                  pb-10
                  sm:p-4
                  sm:pb-12
                "
                style={{
                  clipPath: PHOTO_SHAPE,
                  filter: "drop-shadow(0 24px 42px rgba(34,20,7,0.38))",
                }}
              >
                {/* desgaste del borde */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-85"
                  style={{
                    backgroundImage: `
                      radial-gradient(rgba(104,70,29,0.18) 0.55px, transparent 0.75px),
                      radial-gradient(circle at 6% 8%, rgba(119,76,30,0.22), transparent 15%),
                      radial-gradient(circle at 95% 92%, rgba(94,61,24,0.18), transparent 18%),
                      radial-gradient(circle at 72% 2%, rgba(126,83,33,0.13), transparent 11%)
                    `,
                    backgroundSize: "5px 5px, 100% 100%, 100% 100%, 100% 100%",
                    boxShadow: "inset 0 0 55px rgba(104,69,28,0.14)",
                  }}
                />

                <div
                  className="
                    relative
                    z-10
                    aspect-[4/3]
                    overflow-hidden
                    border
                    border-[#59452C]/35
                    bg-neutral-900
                  "
                >
                  <Image
                    src="/images/history/fundacion.jpg"
                    alt="Fundadores de Los Toros de Alicante durante la firma del Acta de Constitución"
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 59vw, 100vw"
                    className="
                      object-cover
                      object-center
                      contrast-[1.06]
                      saturate-[0.82]
                      sepia-[0.14]
                      brightness-[0.96]
                    "
                  />

                  {/* tono envejecido */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      bg-[#9A6932]/12
                      mix-blend-color
                    "
                  />

                  {/* manchas / arañazos / suciedad */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      opacity-70
                      mix-blend-multiply
                    "
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 8% 12%, rgba(90,57,20,0.24) 0 1px, transparent 1.8px),
                        radial-gradient(circle at 76% 8%, rgba(91,57,19,0.18) 0 1.2px, transparent 2px),
                        radial-gradient(circle at 92% 73%, rgba(88,55,18,0.2) 0 1px, transparent 1.7px),
                        radial-gradient(circle at 22% 91%, rgba(80,49,16,0.16) 0 1.2px, transparent 2px),
                        linear-gradient(102deg, transparent 0 37%, rgba(255,248,220,0.1) 37.2% 37.4%, transparent 37.6%),
                        linear-gradient(87deg, transparent 0 78%, rgba(49,29,10,0.08) 78.2% 78.35%, transparent 78.55%)
                      `,
                    }}
                  />

                  {/* arañazos visibles */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[24%]
                      top-[8%]
                      z-20
                      h-[29%]
                      w-px
                      rotate-[1deg]
                      bg-white/10
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-[17%]
                      top-[43%]
                      z-20
                      h-[22%]
                      w-px
                      rotate-[-2deg]
                      bg-black/[0.07]
                    "
                  />

                  {/* viñeta */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      shadow-[inset_0_0_95px_rgba(30,14,0,0.36)]
                    "
                  />

                  {/* placa: centrada y abajo */}
                  <FoundationPlaque />
                </div>

                <figcaption
                  className="
                    absolute
                    bottom-3
                    left-4
                    right-4
                    z-10
                    flex
                    items-center
                    justify-between
                    gap-4
                    font-serif
                    text-[0.56rem]
                    uppercase
                    tracking-[0.14em]
                    text-[#514533]
                    sm:bottom-4
                    sm:text-[0.68rem]
                  "
                >
                  <span>Archivo del Club</span>
                  <span>19 · 04 · 2021</span>
                </figcaption>
              </div>
            </motion.figure>

            {/* TEXTO */}
            <motion.div
              initial={
                reduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 35 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.28,
                ease: EASE,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-2xl
                lg:mx-0
                lg:pr-4
              "
            >
              <h2
                className="
                  mt-5
                  max-w-[10ch]
                  text-4xl
                  font-black
                  leading-[0.94]
                  tracking-[-0.045em]
                  text-[#15120E]
                  sm:text-5xl
                  lg:text-[3.55rem]
                "
              >
                Nacimos en plena pandemia
              </h2>

              <time
                dateTime="2021-04-19"
                className="
                  mt-5
                  block
                  text-lg
                  font-black
                  text-[#118F99]
                  sm:text-xl
                "
              >
                19 de abril de 2021
              </time>

              <div
                aria-hidden="true"
                className="mt-7 h-px w-full bg-[#493A27]/15"
              />

              <p className="mt-7 text-lg leading-8 text-[#3F3529]">
                En plena pandemia, cuando todo invitaba a detenerse,{" "}
                <strong className="font-bold text-[#17130F]">
                  ocho amigos decidieron comenzar algo que pudiera perdurar.
                </strong>{" "}
                Alrededor de una mesa nació la ilusión de construir un club
                donde el equipo estuviera siempre por encima de cualquier
                individualidad.
              </p>

              <p className="mt-6 text-base leading-8 text-[#4A3F31]">
                Aquella firma fue mucho más que un inicio. Fue el primer paso
                de una comunidad deportiva construida sobre el compromiso, la
                amistad, la lealtad y la pasión por el softball.
              </p>

              <blockquote
                className="
                  relative
                  mt-9
                  border-l-[3px]
                  border-[#1599A2]
                  py-1
                  pl-5
                  sm:pl-6
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -left-1
                    -top-8
                    font-serif
                    text-7xl
                    leading-none
                    text-[#1597A0]/15
                  "
                >
                  “
                </span>

                <p
                  className="
                    relative
                    text-lg
                    font-bold
                    italic
                    leading-7
                    text-[#181410]
                    sm:text-xl
                    sm:leading-8
                  "
                >
                  Los grandes clubes no nacen en un estadio. Nacen alrededor de
                  una mesa.
                </p>

                <footer
                  className="
                    mt-4
                    text-[0.6rem]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#137E87]
                  "
                >
                  El origen de Los Toros de Alicante
                </footer>
              </blockquote>
            </motion.div>
          </div>

          {/* TRANSICIÓN */}
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.38,
              ease: EASE,
            }}
            className="
              relative
              z-10
              mx-6
              border-t
              border-[#493A27]/20
              px-1
              pb-8
              pt-7
              sm:mx-10
              sm:pb-10
              lg:mx-14
              lg:grid
              lg:grid-cols-[0.7fr_1.35fr_auto]
              lg:items-end
              lg:gap-8
            "
          >
            <p
              className="
                text-[0.62rem]
                font-black
                uppercase
                tracking-[0.25em]
                text-[#137E87]
              "
            >
              La historia continúa
            </p>

            <p
              className="
                mt-3
                max-w-2xl
                text-base
                font-semibold
                leading-7
                text-[#282119]
                lg:mt-0
              "
            >
              Aquel primer encuentro abrió el camino a las noticias, los hitos
              deportivos y los títulos que hoy forman parte de nuestro
              palmarés.
            </p>

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-[0.62rem]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#137E87]
                lg:mt-0
                lg:justify-end
              "
            >
              <span>Noticias</span>
              <span aria-hidden="true" className="text-[#493A27]/30">·</span>
              <span>Hitos</span>
              <span aria-hidden="true" className="text-[#493A27]/30">·</span>
              <span>Palmarés</span>
              <span aria-hidden="true" className="text-base">→</span>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
}