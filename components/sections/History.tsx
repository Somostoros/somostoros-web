"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/*
 * Dos siluetas ligeramente irregulares:
 * una para el documento completo y otra para la copia fotográfica.
 */
const PAPER_SHAPE = `
  polygon(
    0.5% 1.2%,
    10% 0.4%,
    22% 0.9%,
    34% 0.2%,
    49% 0.7%,
    63% 0.1%,
    77% 0.8%,
    90% 0.3%,
    99.4% 1%,
    99.8% 17%,
    99.3% 34%,
    100% 52%,
    99.4% 70%,
    99.9% 86%,
    99.2% 99.2%,
    85% 99.7%,
    69% 99.1%,
    51% 99.8%,
    34% 99.2%,
    17% 99.7%,
    0.7% 99%,
    0.2% 82%,
    0.8% 65%,
    0.1% 48%,
    0.7% 30%
  )
`;

const PHOTO_SHAPE = `
  polygon(
    0.7% 0.9%,
    18% 0.2%,
    36% 0.8%,
    55% 0.1%,
    74% 0.7%,
    99.3% 0.4%,
    99.8% 24%,
    99.2% 49%,
    99.8% 73%,
    99.1% 99.2%,
    77% 99.8%,
    52% 99.1%,
    27% 99.7%,
    0.6% 99%,
    0.1% 74%,
    0.7% 49%,
    0.2% 25%
  )
`;

type ScrewProps = {
  className?: string;
};

function MetalScrew({ className = "" }: ScrewProps) {
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
        border-white/60
        ${className}
      `}
      style={{
        background:
          "radial-gradient(circle at 35% 28%, #ffffff 0%, #d4d4d8 25%, #71717a 65%, #27272a 100%)",
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
        bottom-3
        left-3
        z-30
        w-[46%]
        min-w-[9.5rem]
        max-w-[13rem]
        sm:bottom-5
        sm:left-5
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          border
          border-white/30
          bg-[#061418]/75
          px-4
          py-4
          text-center
          shadow-[0_18px_42px_rgba(0,0,0,0.65)]
          backdrop-blur-md
          sm:px-5
          sm:py-5
        "
      >
        {/* Reflejo del metacrilato */}
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
            -top-14
            h-28
            w-10
            rotate-[28deg]
            bg-white/[0.08]
            blur-sm
          "
        />

        {/* Tornillos */}
        <MetalScrew className="left-2 top-2" />
        <MetalScrew className="right-2 top-2" />
        <MetalScrew className="bottom-2 left-2" />
        <MetalScrew className="bottom-2 right-2" />

        <div className="relative px-1">
          <p
            className="
              text-[0.55rem]
              font-bold
              uppercase
              tracking-[0.22em]
              text-white/60
              sm:text-[0.62rem]
            "
          >
            Acta fundacional
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
              via-white/35
              to-transparent
            "
          />

          <time
            dateTime="2021-04-19"
            className="block text-[0.68rem] font-semibold text-white sm:text-xs"
          >
            19 de abril
          </time>

          <p className="mt-2 text-[0.62rem] text-white/75 sm:text-[0.7rem]">
            Guarapo Café
          </p>

          <p className="mt-0.5 text-[0.58rem] text-white/50 sm:text-[0.66rem]">
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
      {/* Fondo ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-56
            top-1/3
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

        <p
          className="
            absolute
            bottom-0
            right-0
            hidden
            select-none
            text-[16vw]
            font-black
            leading-none
            tracking-[-0.08em]
            text-white/[0.018]
            lg:block
          "
        >
          2021
        </p>
      </div>

      <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8">
        <motion.article
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 45,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            ease: EASE,
          }}
          className="relative mx-auto"
        >
          {/* Sombra profunda del documento */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              translate-x-2
              translate-y-8
              rotate-[0.4deg]
              bg-black/70
              blur-md
            "
            style={{
              clipPath: PAPER_SHAPE,
            }}
          />

          {/* Documento de papel */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              border
              border-[#D6C3A1]
              bg-[#EFE2C8]
            "
            style={{
              clipPath: PAPER_SHAPE,
            }}
          />

          {/* Textura del documento */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-60
            "
            style={{
              clipPath: PAPER_SHAPE,
              backgroundImage: `
                radial-gradient(
                  rgba(91, 65, 31, 0.18) 0.55px,
                  transparent 0.7px
                ),
                radial-gradient(
                  circle at 12% 18%,
                  rgba(130, 87, 36, 0.12),
                  transparent 19%
                ),
                radial-gradient(
                  circle at 87% 82%,
                  rgba(118, 77, 30, 0.1),
                  transparent 22%
                ),
                linear-gradient(
                  105deg,
                  rgba(255,255,255,0.22),
                  transparent 35%,
                  rgba(91,65,31,0.05)
                )
              `,
              backgroundSize: "5px 5px, 100% 100%, 100% 100%, 100% 100%",
            }}
          />

          {/* Número de archivo decorativo */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-8
              top-5
              hidden
              select-none
              font-black
              text-[8rem]
              leading-none
              text-[#167E84]/[0.055]
              lg:block
            "
          >
            01
          </div>

          {/* Composición única */}
          <div
            className="
              relative
              z-10
              grid
              min-h-[620px]
              items-center
              lg:grid-cols-[1.25fr_0.88fr]
            "
          >
            {/* ================= FOTOGRAFÍA ================= */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 70,
                      rotate: -3,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1.35,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                delay: reduceMotion ? 0 : 0.1,
                ease: EASE,
              }}
              className="
                relative
                z-20
                px-6
                pb-4
                pt-10
                sm:px-10
                sm:pt-14
                lg:-ml-10
                lg:px-0
                lg:py-16
                lg:pr-8
              "
              style={{
                transformOrigin: "50% 100%",
              }}
            >
              <figure
                className="relative"
                style={{
                  filter:
                    "drop-shadow(0 22px 38px rgba(22, 14, 5, 0.38))",
                }}
              >
                {/* Segunda hoja desplazada */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    translate-x-3
                    translate-y-4
                    rotate-[1deg]
                    bg-[#B6A281]/45
                  "
                  style={{
                    clipPath: PHOTO_SHAPE,
                  }}
                />

                {/* Papel fotográfico */}
                <div
                  className="
                    relative
                    bg-[#F4E7CE]
                    p-3
                    pb-10
                    sm:p-4
                    sm:pb-12
                  "
                  style={{
                    clipPath: PHOTO_SHAPE,
                  }}
                >
                  {/* Manchas y textura del marco */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-70
                    "
                    style={{
                      backgroundImage: `
                        radial-gradient(
                          circle at 8% 10%,
                          rgba(103,68,28,0.22),
                          transparent 17%
                        ),
                        radial-gradient(
                          circle at 92% 88%,
                          rgba(95,59,25,0.16),
                          transparent 19%
                        ),
                        radial-gradient(
                          rgba(91,65,31,0.16) 0.5px,
                          transparent 0.7px
                        )
                      `,
                      backgroundSize: "100% 100%, 100% 100%, 5px 5px",
                    }}
                  />

                  {/* Imagen */}
                  <div
                    className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      border
                      border-black/25
                      bg-neutral-900
                    "
                  >
                    <Image
                      src="/images/history/fundacion.jpg"
                      alt="Firma del Acta Fundacional de Los Toros de Alicante"
                      fill
                      priority
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="
                        object-cover
                        object-[center_42%]
                        contrast-[1.05]
                        saturate-[0.88]
                        sepia-[0.08]
                      "
                    />

                    {/* Tratamiento fotográfico */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[#8A5A2B]/10
                        mix-blend-color
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-black/25
                        via-transparent
                        to-white/10
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        shadow-[inset_0_0_70px_rgba(0,0,0,0.24)]
                      "
                    />

                    <FoundationPlaque />
                  </div>

                  <figcaption
                    className="
                      absolute
                      bottom-3
                      left-4
                      right-4
                      flex
                      items-center
                      justify-between
                      font-serif
                      text-[0.58rem]
                      uppercase
                      tracking-[0.13em]
                      text-[#514737]
                      sm:bottom-4
                      sm:text-[0.68rem]
                    "
                  >
                    <span>Archivo del Club</span>
                    <span>19 · 04 · 2021</span>
                  </figcaption>
                </div>
              </figure>
            </motion.div>

            {/* ================= RELATO ================= */}
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 35,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.32,
                ease: EASE,
              }}
              className="
                relative
                px-7
                pb-14
                pt-7
                sm:px-12
                sm:pb-16
                lg:px-0
                lg:py-16
                lg:pl-7
                lg:pr-16
              "
            >
              {/* Cabecera editorial */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#139DA7]"
                />

                <p
                  className="
                    text-[0.65rem]
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-[#137F88]
                    sm:text-xs
                  "
                >
                  Nuestra historia
                </p>
              </div>

              <h2
                className="
                  mt-5
                  max-w-[10ch]
                  text-4xl
                  font-black
                  leading-[0.94]
                  tracking-[-0.045em]
                  text-[#111111]
                  sm:text-5xl
                  lg:text-[3.5rem]
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
                  text-[#119DA8]
                  sm:text-xl
                "
              >
                19 de abril de 2021
              </time>

              <div className="mt-7 h-px w-full bg-[#493D2C]/15" />

              <p
                className="
                  mt-7
                  text-[0.98rem]
                  leading-7
                  text-[#3D352B]
                "
              >
                En plena pandemia, cuando todo invitaba a detenerse,{" "}
                <strong className="font-bold text-[#151515]">
                  ocho amigos decidieron comenzar algo que pudiera perdurar.
                </strong>{" "}
                Alrededor de una mesa nació la ilusión de construir un club
                donde el equipo estuviera siempre por encima de cualquier
                individualidad.
              </p>

              <p
                className="
                  mt-5
                  text-[0.98rem]
                  leading-7
                  text-[#3D352B]
                "
              >
                Aquel encuentro fue mucho más que una firma. Fue el primer
                paso de una comunidad deportiva que continúa creciendo gracias
                al compromiso, la amistad, la lealtad y la pasión por el
                sóftbol.
              </p>

              <blockquote
                className="
                  relative
                  mt-9
                  border-l-[3px]
                  border-[#17A4AE]
                  pl-5
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
                    text-[#181512]
                    sm:text-xl
                  "
                >
                  Los grandes clubes no nacen en un estadio. Nacen alrededor
                  de una mesa.
                </p>

                <footer
                  className="
                    mt-4
                    text-[0.6rem]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#137F88]
                  "
                >
                  El origen de Los Toros
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}