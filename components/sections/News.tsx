import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function News() {
  return (
    <section
      id="actualidad"
      className="relative overflow-hidden bg-[#0b0f10] py-20 sm:py-24"
    >
      {/* Brillo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#30CED8]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <FadeIn>
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#30CED8]">
                ACTUALIDAD
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Lo último de Los Toros
              </h2>
            </div>

            <Link
              href="#noticias"
              className="group text-sm font-bold uppercase tracking-[0.15em] text-[#30CED8]"
            >
              Ver todas las noticias
              <span className="ml-2 transition group-hover:ml-3">
                →
              </span>
            </Link>
          </div>
        </FadeIn>

        {/* CONTENIDO */}
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-12">

            {/* =====================================================
                ÚLTIMO RESULTADO
            ===================================================== */}
            <article
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#30CED8]/25
                bg-gradient-to-br
                from-[#132021]
                to-[#0d1314]
                p-7
                shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                transition
                duration-500
                hover:-translate-y-1
                hover:border-[#30CED8]/60
                lg:col-span-5
              "
            >
              {/* etiqueta */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#30CED8]">
                  Último resultado
                </p>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Final
                </span>
              </div>

              {/* competición */}
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Campeonato Federado de Murcia
              </p>

              {/* marcador */}
              <div className="mt-8 flex items-center justify-between gap-5">

                {/* Toros */}
                <div className="flex-1 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#30CED8]/30 bg-black/30">
                    <span className="text-2xl font-black text-[#30CED8]">
                      T
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-black uppercase tracking-wide text-white">
                    Toros
                  </p>

                  <p className="text-xs text-gray-500">
                    Alicante
                  </p>
                </div>

                {/* Resultado */}
                <div className="shrink-0 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-6xl font-black leading-none text-white">
                      18
                    </span>

                    <span className="text-2xl font-bold text-gray-600">
                      —
                    </span>

                    <span className="text-6xl font-black leading-none text-gray-500">
                      11
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                    Resultado final
                  </p>
                </div>

                {/* Rival */}
                <div className="flex-1 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-black/30">
                    <span className="text-xl font-black text-gray-400">
                      M
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-black uppercase tracking-wide text-white">
                    Marineros
                  </p>

                  <p className="text-xs text-gray-500">
                    Benidorm
                  </p>
                </div>
              </div>

              {/* CAMPEONES */}
              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="text-2xl font-black text-[#30CED8]">
                  🏆 CAMPEONES
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Los Toros de Alicante conquistan el campeonato federado
                  de Murcia.
                </p>
              </div>

              <Link
                href="#resultado"
                className="mt-6 inline-block text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-[#30CED8]"
              >
                Ver resultado completo →
              </Link>
            </article>

            {/* =====================================================
                PRÓXIMO PARTIDO
            ===================================================== */}
            <article
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111819]
                p-7
                shadow-2xl
                transition
                duration-500
                hover:-translate-y-1
                hover:border-[#30CED8]/40
                lg:col-span-3
              "
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#30CED8]">
                  Próximo partido
                </p>

                <span className="rounded-full bg-[#30CED8] px-3 py-1 text-[10px] font-black uppercase text-black">
                  Próximo
                </span>
              </div>

              {/* Fecha */}
              <div className="mt-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Próximamente
                </p>

                <p className="mt-3 text-3xl font-black text-white">
                  VS
                </p>
              </div>

              {/* Equipos */}
              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-[#30CED8]/20 bg-[#30CED8]/5 p-4 text-center">
                  <p className="text-lg font-black uppercase text-white">
                    Toros
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Alicante
                  </p>
                </div>

                <div className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-600">
                  contra
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                  <p className="text-lg font-black uppercase text-gray-400">
                    Rival
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-600">
                    Por confirmar
                  </p>
                </div>

              </div>

              <Link
                href="#calendario"
                className="
                  mt-8
                  block
                  rounded-full
                  border
                  border-white/15
                  px-5
                  py-3
                  text-center
                  text-xs
                  font-black
                  uppercase
                  tracking-wider
                  text-white
                  transition
                  hover:border-[#30CED8]
                  hover:text-[#30CED8]
                "
              >
                Ver calendario →
              </Link>
            </article>

            {/* =====================================================
                NOTICIA DESTACADA
            ===================================================== */}
            <article
              className="
                group
                relative
                min-h-[430px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#111819]
                shadow-2xl
                transition
                duration-500
                hover:-translate-y-1
                hover:border-[#30CED8]/40
                lg:col-span-4
              "
            >

              {/* Fotografía provisional */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#182829] via-[#101718] to-[#080b0c]">

                {/* textura visual */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-[#30CED8]/20" />
                  <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full border-[40px] border-white/5" />
                </div>

              </div>

              {/* degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

              {/* contenido */}
              <div className="relative flex h-full min-h-[430px] flex-col justify-end p-7">

                <div className="mb-auto pt-7">
                  <span className="inline-flex rounded-full border border-[#30CED8]/40 bg-black/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#30CED8] backdrop-blur-sm">
                    Noticia destacada
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#30CED8]">
                    HISTORIA
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                    Los Toros hacen historia
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
                    Un nuevo capítulo en la historia deportiva del club.
                  </p>

                  <Link
                    href="#noticias"
                    className="mt-6 inline-block text-xs font-black uppercase tracking-[0.15em] text-white transition hover:text-[#30CED8]"
                  >
                    Leer noticia →
                  </Link>
                </div>

              </div>
            </article>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}