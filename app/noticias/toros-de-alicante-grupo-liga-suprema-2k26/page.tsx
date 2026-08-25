import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Los Toros ya conocen su grupo para la Liga Suprema Alicante 2K26",
  description:
    "Los Toros de Alicante competirán en el Grupo D de la Liga Suprema Alicante 2K26 junto a Gladiadores, Marineros y Monarcas. El torneo comenzará el 6 de septiembre.",

  alternates: {
    canonical: "/noticias/toros-de-alicante-grupo-liga-suprema-2k26",
  },

  openGraph: {
    type: "article",
    url: "/noticias/toros-de-alicante-grupo-liga-suprema-2k26",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title:
      "Los Toros ya conocen su Grupo D para la Liga Suprema Alicante 2K26",
    description:
      "Gladiadores, Toros de Alicante, Marineros y Monarcas forman el Grupo D. La competición comienza el 6 de septiembre.",
    publishedTime: "2026-08-25T12:00:00+02:00",
    images: [
      {
        url: "/images/news/liga-suprema-alicante-2k26.png",
        alt: "Liga Suprema Alicante 2K26",
      },
    ],
  },
};


const groups = [
  {
    name: "Grupo A",
    teams: [
      "Bravos de Murcia",
      "Caribes de Molina",
      "Cerveceros de Molina",
      "Cardenales de Molina",
    ],
  },
  {
    name: "Grupo B",
    teams: [
      "Caballeros de Ibi",
      "Santa Mónica",
      "Almoradí",
      "Azulejos",
    ],
  },
  {
    name: "Grupo C",
    teams: [
      "Asere",
      "Tigres",
      "Cerveceros de Jávea",
      "Caciques de Castalla",
    ],
  },
  {
    name: "Grupo D",
    teams: [
      "Gladiadores",
      "Toros de Alicante",
      "Marineros",
      "Monarcas",
    ],
  },
];

export default function LigaSupremaGrupoPage() {
  return (
    <main className="min-h-screen bg-[#020708] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#30CED8]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/noticias"
            className="text-xs font-black uppercase tracking-[0.2em] text-[#30CED8] transition hover:text-white"
          >
            ← Volver a noticias
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#30CED8] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-black">
              Liga Suprema Alicante 2K26
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              25 de agosto de 2026
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Los Toros ya conocen su grupo para la{" "}
            <span className="text-[#30CED8]">
              Liga Suprema Alicante 2K26
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Los Toros de Alicante competirán en el Grupo D junto a
            Gladiadores, Marineros y Monarcas. La competición comenzará
            el próximo 6 de septiembre.
          </p>
        </div>
      </section>

      {/* DATOS DESTACADOS */}
      <section className="border-b border-white/10 bg-[#080d0e] px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Inicio
            </p>

            <p className="mt-2 text-3xl font-black text-[#30CED8]">
              6 SEPT
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Domingo
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Participantes
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              16
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Equipos
            </p>
          </div>

          <div className="rounded-2xl border border-[#30CED8]/30 bg-[#30CED8]/5 p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#30CED8]">
              Los Toros
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              GRUPO D
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Liga Suprema 2K26
            </p>
          </div>

        </div>
      </section>

      {/* NOTICIA */}
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">

          <div className="mx-auto max-w-3xl">
            <p className="text-lg font-bold leading-8 text-white">
              Alicante, 25 de agosto de 2026.
            </p>

            <div className="mt-6 space-y-7 text-lg leading-9 text-gray-400">
              <p>
                Los Toros de Alicante ya conocen el camino que deberán
                recorrer en la primera fase de la{" "}
                <strong className="font-bold text-white">
                  Liga Suprema Alicante 2K26
                </strong>
                , una competición que reunirá a 16 equipos distribuidos
                en cuatro grupos.
              </p>

              <p>
                El conjunto alicantino ha quedado encuadrado en el{" "}
                <strong className="font-bold text-[#30CED8]">
                  Grupo D
                </strong>
                , donde se enfrentará a{" "}
                <strong className="font-bold text-white">
                  Gladiadores, Marineros y Monarcas
                </strong>
                .
              </p>

              <p>
                Los Toros llegan a este nuevo desafío después de una etapa
                deportiva marcada por los buenos resultados y con la
                motivación de seguir compitiendo al máximo nivel.
              </p>

              <p>
                La Liga Suprema Alicante 2K26 comenzará el próximo{" "}
                <strong className="font-bold text-[#30CED8]">
                  domingo 6 de septiembre
                </strong>
                . Durante la primera fase, los equipos buscarán avanzar
                hacia la fase eliminatoria y continuar su camino hacia
                el título.
              </p>
            </div>
          </div>

          {/* GRUPO D DESTACADO */}
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-[#30CED8]/30 bg-[#30CED8]/5">

            <div className="border-b border-[#30CED8]/20 bg-[#30CED8] px-7 py-5 text-black">
              <p className="text-xs font-black uppercase tracking-[0.25em]">
                Liga Suprema Alicante 2K26
              </p>

              <h2 className="mt-1 text-3xl font-black uppercase">
                Grupo D
              </h2>
            </div>

            <div className="divide-y divide-white/10">
              {["Gladiadores", "Toros de Alicante", "Marineros", "Monarcas"].map(
                (team) => (
                  <div
                    key={team}
                    className={`flex items-center justify-between px-7 py-5 ${
                      team === "Toros de Alicante"
                        ? "bg-[#30CED8]/10"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg font-black uppercase ${
                        team === "Toros de Alicante"
                          ? "text-[#30CED8]"
                          : "text-white"
                      }`}
                    >
                      {team}
                    </span>

                    {team === "Toros de Alicante" && (
                      <span className="rounded-full bg-[#30CED8] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                        #SOMOSTOROS
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>

          </div>

          {/* CUADRO COMPLETO */}
          <div className="mt-20">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                Cuadro oficial
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
                Los cuatro grupos
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Los 16 equipos quedan distribuidos en cuatro grupos para
                disputar la primera fase del torneo.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {groups.map((group) => {
                const isTorosGroup = group.name === "Grupo D";

                return (
                  <div
                    key={group.name}
                    className={`rounded-3xl border p-6 ${
                      isTorosGroup
                        ? "border-[#30CED8]/50 bg-[#30CED8]/5"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <p
                      className={`text-sm font-black uppercase tracking-[0.2em] ${
                        isTorosGroup
                          ? "text-[#30CED8]"
                          : "text-white/50"
                      }`}
                    >
                      {group.name}
                    </p>

                    <div className="mt-5 space-y-3">
                      {group.teams.map((team) => (
                        <p
                          key={team}
                          className={`text-sm font-bold ${
                            team === "Toros de Alicante"
                              ? "text-[#30CED8]"
                              : "text-gray-300"
                          }`}
                        >
                          {team}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-10">
            <p className="text-xl font-black uppercase leading-8 text-white">
              Un nuevo reto comienza.
              <span className="block text-[#30CED8]">
                #SOMOSTOROS
              </span>
            </p>
          </div>

        </div>
      </article>

    </main>
  );
}