import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function History() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* ================= FOTO ================= */}
            <div className="lg:col-span-5">

              <div
                className="
                  relative
                  rounded-2xl
                  bg-[#F5F1E8]
                  p-3
                  shadow-[0_20px_50px_rgba(0,0,0,.45)]
                  rotate-[-1.5deg]
                  transition-all
                  duration-500
                  hover:rotate-0
                  hover:scale-[1.02]
                "
              >
                <Image
                  src="/images/history/fundacion.jpg"
                  alt="Firma del Acta de Constitución de Los Toros de Alicante"
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[460px]
                    rounded-lg
                    object-cover
                    object-center
                    sepia-[0.08]
                    contrast-105
                    brightness-95
                  "
                />

                {/* Placa */}
                <div
                  className="
                    absolute
                    top-6
                    left-6
                    w-56
                    rounded-2xl
                    border
                    border-white/20
                    bg-black/45
                    backdrop-blur-md
                    p-5
                    shadow-xl
                  "
                >
                  <p className="text-4xl font-black text-[#30CED8]">
                    2021
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white">
                    Acta de Constitución
                  </p>

                  <div className="my-4 h-px bg-white/20" />

                  <p className="text-sm font-semibold text-white">
                    19 de abril de 2021
                  </p>

                  <p className="mt-2 text-sm text-gray-200">
                    Guarapo Café
                  </p>

                  <p className="text-sm text-gray-300">
                    El Campello · Alicante
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-sm italic text-gray-400">
                Fotografía tomada durante la firma del Acta de Constitución del Club.
              </p>

            </div>

            {/* ================= TEXTO ================= */}
            <div className="lg:col-span-7">

              <p className="font-semibold uppercase tracking-[0.4em] text-[#30CED8]">
                NUESTRA HISTORIA
              </p>

              <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight text-white">
                Nacimos en plena pandemia
              </h2>

              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.25em] text-[#30CED8]">
                19 de abril de 2021
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                En plena pandemia, cuando todo invitaba a detenerse, ocho amigos
                decidieron hacer exactamente lo contrario: comenzar algo que
                perdurara. Así nació <strong className="text-white">Los Toros de Alicante</strong>,
                alrededor de una mesa, una conversación y la ilusión de construir un club
                donde el equipo siempre estuviera por encima de cualquier
                individualidad.
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                Aquel encuentro fue mucho más que una firma. Fue el primer paso
                de una comunidad deportiva que sigue creciendo gracias al
                compromiso, la amistad, la lealtad y la pasión por el softball.
              </p>

              <div className="mt-14 border-l-4 border-[#30CED8] pl-6">
                <p className="text-2xl italic leading-relaxed text-white">
                  “Los grandes clubes no nacen en un estadio.
                  <br />
                  Nacen alrededor de una mesa.”
                </p>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}