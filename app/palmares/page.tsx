import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Palmarés de Los Toros de Alicante | Títulos y campeonatos",

  description:
    "Descubre el palmarés de Los Toros de Alicante, sus campeonatos federados, títulos, historia deportiva y principales logros desde la fundación del club en 2021.",

  alternates: {
    canonical: "/palmares",
  },

  openGraph: {
    type: "website",
    url: "/palmares",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Palmarés de Los Toros de Alicante | Títulos y campeonatos",
    description:
      "Descubre los títulos, campeonatos federados, estrellas e historia deportiva de Los Toros de Alicante.",
  },
};

const federatedTitles = [
  {
    year: "2024",
    star: "★",
    title: "Primera estrella",
    competition: "Campeonato federado en Murcia",
    manager: "Luís Rodríguez",
    mvp: "Leonardo Lara",
    mvpPosition: "Pitcher",
    description:
      "La Federación de Béisbol y Softbol de la Región de Murcia abrió una nueva oportunidad al softbol alicantino. Los Toros hicieron historia conquistando su primer campeonato federado.",
    achievement:
      "Primer equipo de Alicante en conquistar una liga federada en Murcia.",
  },
  {
    year: "2026",
    star: "★★",
    title: "Segunda estrella",
    competition: "Segundo campeonato federado",
    manager: "Carlos Vásquez",
    mvp: "Óscar Ulacio",
    mvpPosition: "Pitcher",
    description:
      "Los Toros volvieron a alcanzar lo más alto y conquistaron su segundo campeonato federado, añadiendo una segunda estrella a la historia del club.",
    achievement:
      "Primer y único equipo alicantino en conquistar dos ligas federadas.",
  },
];

const otherTitles = [
  {
    year: "2021",
    month: "Junio",
    title: "Torneo Hermandad de Alicante",
    type: "No federado",
    result: "Campeones",
  },
  {
    year: "2021",
    month: "Diciembre",
    title: "Torneo Liberty Express",
    type: "No federado",
    result: "Campeones",
  },
  {
    year: "2025",
    month: "",
    title: "Liga Unión Winter",
    type: "No federada",
    result: "Campeones",
  },
];

const history = [
  {
    year: "2021",
    date: "19 de abril",
    title: "Nacen Los Toros",
    description:
      "En plena pandemia nacen Los Toros de Alicante. Ocho amigos ponen en marcha un proyecto construido alrededor del equipo, la amistad, la lealtad y la pasión por el softball.",
  },
  {
    year: "2021",
    date: "Junio",
    title: "El primer título",
    description:
      "Apenas dos meses después de nacer, Los Toros conquistan el Torneo Hermandad de Alicante y consiguen el primer trofeo de su historia.",
  },
  {
    year: "2021",
    date: "Diciembre",
    title: "Segundo título en el primer año",
    description:
      "Antes de terminar su primer año de vida, Los Toros vuelven a proclamarse campeones, esta vez en el Torneo Liberty Express.",
  },
  {
    year: "2022",
    date: "",
    title: "Un año de resistencia",
    description:
      "Los Toros atraviesan una etapa difícil al quedar fuera de la competición en Alicante por supuestos incumplimientos que el club no compartía. A pesar de las dificultades, el proyecto continúa creciendo y atrayendo jugadores que creen en una estructura firme y competitiva.",
  },
  {
    year: "2023",
    date: "",
    title: "Buscar un nuevo camino",
    description:
      "El club continúa trabajando para encontrar una vía que le permita competir de manera federada. Las condiciones económicas y las facilidades de pago disponibles en la Comunidad Valenciana no permitieron desarrollar el proyecto federativo que Los Toros necesitaban.",
  },
  {
    year: "2024",
    date: "",
    title: "Murcia abre la puerta",
    description:
      "La Federación de Béisbol y Softbol de la Región de Murcia tiende la mano al softbol alicantino. Bajo la dirección de Luís Rodríguez, Los Toros consiguen su primera estrella y su primer campeonato federado.",
  },
  {
    year: "2025",
    date: "",
    title: "Campeones de la Liga Unión Winter",
    description:
      "Los Toros continúan sumando éxitos y se proclaman campeones de la Liga Unión Winter, competición no federada.",
  },
  {
    year: "2026",
    date: "",
    title: "La segunda estrella",
    description:
      "De la mano de Carlos Vásquez, Los Toros conquistan su segundo campeonato federado. Una nueva página histórica para un proyecto que nació alrededor de una mesa apenas cinco años antes.",
  },
];

export default function PalmaresPage() {
  return (
    <main className="min-h-screen bg-[#020708] text-white">

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 pb-24 pt-36 sm:pb-28 sm:pt-40 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-[#30CED8]/10 blur-[160px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-16 text-[320px] font-black leading-none text-white/[0.015]"
        >
          2
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <Link
            href="/#palmares"
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.22em] text-white/45 transition hover:text-[#30CED8]"
          >
            <span className="mr-2">←</span>
            Volver
          </Link>

          <div className="mt-14 max-w-5xl">

            <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
              Palmarés · Los Toros de Alicante
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              Dos estrellas.
              <span className="block text-[#30CED8]">
                Una historia que continúa.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55 sm:text-xl">
              De aquel 19 de abril de 2021 a conquistar dos campeonatos
              federados. Cada torneo, cada dificultad y cada título forman
              parte de lo que somos.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-[#30CED8]/25 bg-[#30CED8]/[0.06] px-6 py-5">
                <p className="text-4xl font-black text-[#30CED8]">
                  ★★
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Estrellas federadas
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
                <p className="text-4xl font-black">
                  5
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Títulos registrados
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
                <p className="text-4xl font-black">
                  2021
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Año de fundación
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DOS ESTRELLAS */}
      {/* ====================================================== */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#30CED8]">
              Campeonatos federados
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Las estrellas
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Dos campeonatos que marcaron un antes y un después en la
              historia deportiva de Los Toros.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            {federatedTitles.map((title) => (
              <article
                key={title.year}
                className="group relative overflow-hidden rounded-3xl border border-[#30CED8]/30 bg-[#30CED8]/[0.055] p-8 transition duration-500 hover:-translate-y-1 hover:border-[#30CED8]/60 sm:p-10"
              >

                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-16 text-[220px] font-black leading-none text-[#30CED8]/[0.035]"
                >
                  {title.year}
                </div>

                <div className="relative">

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <p className="text-6xl font-black tracking-tight text-[#30CED8]">
                        {title.year}
                      </p>

                      <p className="mt-2 text-xs font-black uppercase tracking-[0.25em] text-white/40">
                        Campeonato federado
                      </p>
                    </div>

                    <span className="text-4xl tracking-[0.15em] text-[#30CED8]">
                      {title.star}
                    </span>

                  </div>

                  <h3 className="mt-8 text-3xl font-black uppercase sm:text-4xl">
                    {title.title}
                  </h3>

                  <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#30CED8]">
                    {title.competition}
                  </p>

                  <p className="mt-6 leading-7 text-white/55">
                    {title.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <p className="text-sm font-semibold leading-6 text-white/70">
                      {title.achievement}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-2xl bg-black/25 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                        Manager
                      </p>

                      <p className="mt-2 font-black">
                        {title.manager}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-black/25 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                        MVP
                      </p>

                      <p className="mt-2 font-black">
                        {title.mvp}
                      </p>

                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#30CED8]">
                        {title.mvpPosition}
                      </p>
                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* OTROS TÍTULOS */}
      {/* ====================================================== */}

      <section className="border-y border-white/10 bg-[#05090A] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#30CED8]">
              Otros campeonatos
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              También levantamos estos trofeos
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {otherTitles.map((title) => (
              <article
                key={`${title.year}-${title.title}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-[#30CED8]/40 sm:p-8"
              >

                <div className="flex items-start justify-between gap-4">

                  <p className="text-4xl font-black text-[#30CED8]">
                    {title.year}
                  </p>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-white/40">
                    {title.type}
                  </span>

                </div>

                {title.month && (
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-white/35">
                    {title.month}
                  </p>
                )}

                <h3 className="mt-7 text-2xl font-black uppercase leading-tight">
                  {title.title}
                </h3>

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="text-xl">
                    🏆
                  </span>

                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#30CED8]">
                    {title.result}
                  </span>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CAMINO HASTA AQUÍ */}
      {/* ====================================================== */}

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#30CED8]">
              Nuestra historia
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              El camino hasta aquí
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              No todos los hitos son trofeos. También nos define cómo
              respondemos a las dificultades y cómo seguimos creciendo.
            </p>
          </div>

          <div className="relative mt-16">

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-[#30CED8] via-[#30CED8]/25 to-transparent sm:left-[31px]"
            />

            <div className="space-y-8">

              {history.map((item) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className="relative grid grid-cols-[48px_1fr] gap-5 sm:grid-cols-[64px_1fr] sm:gap-8"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#020708] bg-[#30CED8] text-xs font-black text-black sm:h-16 sm:w-16">
                    {item.year.slice(2)}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                      <p className="text-2xl font-black text-[#30CED8]">
                        {item.year}
                      </p>

                      {item.date && (
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/35">
                          {item.date}
                        </p>
                      )}

                    </div>

                    <h3 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-4xl leading-7 text-white/50">
                      {item.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
            #SOMOSTOROS
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            La próxima estrella
            <span className="block text-[#30CED8]">
              todavía está por escribir
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
            Seguimos compitiendo, creciendo y defendiendo los colores
            de Los Toros de Alicante.
          </p>

          <Link
            href="/#competicion"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#30CED8] px-8 text-sm font-black uppercase tracking-[0.12em] text-black transition duration-300 hover:bg-white"
          >
            Ver competición
            <span className="ml-3">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}