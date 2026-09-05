import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Los Toros debutan ante Marineros en la Liga Suprema Alicante 2026",
  description:
    "Los Toros de Alicante debutan este domingo 6 de septiembre ante Marineros a las 09:00 en Rigas, en la primera jornada del Grupo D de la Liga Suprema Alicante 2026.",

  alternates: {
    canonical: "/noticias/toros-debut-marineros-liga-suprema-2026",
  },

  openGraph: {
    type: "article",
    url: "/noticias/toros-debut-marineros-liga-suprema-2026",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title:
      "Los Toros debutan este domingo ante Marineros en la Liga Suprema Alicante 2026",
    description:
      "Toros de Alicante vs Marineros, domingo 6 de septiembre a las 09:00 en Rigas. Primer partido del Grupo D de la Liga Suprema Alicante 2026.",
    publishedTime: "2026-09-02T18:45:00+02:00",
    images: [
      {
        url: "/images/news/liga-suprema-alicante-2k26.png",
        alt: "Liga Suprema Alicante 2026",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "@id":
    "https://www.somostoros.com/noticias/toros-debut-marineros-liga-suprema-2026#article",

  headline:
    "Los Toros debutan este domingo ante Marineros en la Liga Suprema Alicante 2026",

  description:
    "Los Toros de Alicante debutan este domingo 6 de septiembre ante Marineros a las 09:00 en Rigas, en la primera jornada del Grupo D de la Liga Suprema Alicante 2026.",

  image: [
    "https://www.somostoros.com/images/news/liga-suprema-alicante-2k26.png",
  ],

  datePublished: "2026-09-02T18:45:00+02:00",
  dateModified: "2026-09-02T18:45:00+02:00",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.somostoros.com/noticias/toros-debut-marineros-liga-suprema-2026",
  },

  author: {
    "@id": "https://www.somostoros.com/#organization",
  },

  publisher: {
    "@id": "https://www.somostoros.com/#organization",
  },

  about: {
    "@id": "https://www.somostoros.com/#organization",
  },

  inLanguage: "es",
};

const torosSchedule = [
  {
    date: "6 de septiembre",
    time: "09:00",
    field: "Rigas",
    match: "Toros vs Marineros",
    status: "Jornada 1",
  },
  {
    date: "13 de septiembre",
    time: "14:00",
    field: "Rigas",
    match: "Toros vs Gladiadores",
    status: "Jornada 2",
  },
  {
    date: "20 de septiembre",
    time: "—",
    field: "—",
    match: "Descansa Grupo D",
    status: "Descanso",
  },
  {
    date: "27 de septiembre",
    time: "11:30",
    field: "Murcia",
    match: "Toros vs Monarcas",
    status: "Jornada 4",
  },
];

export default function TorosDebutMarinerosPage() {
  return (
    <main className="min-h-screen bg-[#020708] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

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

          <p className="mt-10 text-sm font-black uppercase tracking-[0.3em] text-[#30CED8]">
            Liga Suprema Alicante 2026
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Los Toros debutan este domingo ante Marineros
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            Los Toros de Alicante comienzan su participación en la Liga
            Suprema Alicante 2026 este domingo 6 de septiembre, a las 09:00,
            frente a Marineros en el campo de Rigas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/50">
            <span>2 de septiembre de 2026</span>
            <span>·</span>
            <span>#SomosToros</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="max-w-3xl space-y-8 text-lg leading-8 text-white/75">
          <p>
            La espera termina. Los Toros de Alicante afrontan este domingo su
            primer compromiso en la Liga Suprema Alicante 2026, una competición
            que reúne a equipos de distintos puntos de la provincia y de la
            Región de Murcia.
          </p>

          <p>
            El conjunto alicantino forma parte del <strong>Grupo D</strong>,
            junto a Marineros, Gladiadores y Monarcas. El estreno será ante
            Marineros, en un partido programado para las <strong>09:00</strong>{" "}
            en <strong>Rigas</strong>.
          </p>

          <div className="rounded-3xl border border-[#30CED8]/25 bg-[#30CED8]/10 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#30CED8]">
              Próximo partido
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
              Toros vs Marineros
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-black/30 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-white/40">
                  Fecha
                </p>
                <p className="mt-1 font-black">6 de septiembre</p>
              </div>

              <div className="rounded-2xl bg-black/30 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-white/40">
                  Hora
                </p>
                <p className="mt-1 font-black">09:00</p>
              </div>

              <div className="rounded-2xl bg-black/30 p-4">
                <p className="text-xs font-black uppercase tracking-widest text-white/40">
                  Campo
                </p>
                <p className="mt-1 font-black">Rigas</p>
              </div>
            </div>
          </div>

          <p>
            Tras este debut, Los Toros volverán a jugar el domingo 13 de
            septiembre frente a Gladiadores, también en Rigas, a las 14:00. El
            Grupo D descansará el 20 de septiembre y cerrará esta primera fase
            del calendario el día 27, cuando Los Toros se enfrenten a Monarcas
            a las 11:30 en Murcia.
          </p>

          <p>
            El objetivo es comenzar la competición con buenas sensaciones y
            seguir representando al béisbol y al softbol de Alicante en una
            temporada que vuelve a reunir a clubes con ambición y ganas de
            competir.
          </p>
        </div>

        {/* CALENDARIO TOROS */}
        <section className="mt-16">
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#30CED8]">
              Calendario
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
              Partidos de Los Toros
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            {torosSchedule.map((game, index) => (
              <div
                key={`${game.date}-${game.match}`}
                className={`grid gap-4 p-6 sm:grid-cols-[1fr_1.4fr_0.7fr_0.7fr] sm:items-center ${
                  index !== torosSchedule.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#30CED8]">
                    {game.status}
                  </p>
                  <p className="mt-1 font-black">{game.date}</p>
                </div>

                <p className="text-lg font-black uppercase">{game.match}</p>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Hora
                  </p>
                  <p className="mt-1 font-bold">{game.time}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Campo
                  </p>
                  <p className="mt-1 font-bold">{game.field}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-3xl font-black uppercase text-[#30CED8] sm:text-4xl">
            #SOMOSTOROS
          </p>
        </div>
      </article>
    </main>
  );
}