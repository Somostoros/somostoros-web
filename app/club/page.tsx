import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club de béisbol y softbol en Alicante",
  description:
    "Conoce a Los Toros de Alicante, club de béisbol y softbol fundado en 2021. Nuestra historia, identidad, valores, competición y crecimiento deportivo en Alicante.",
  alternates: {
    canonical: "/club",
  },
  openGraph: {
    type: "website",
    url: "/club",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Club de béisbol y softbol en Alicante | Los Toros de Alicante",
    description:
      "Conoce la historia, identidad, valores y trayectoria de Los Toros de Alicante, club de béisbol y softbol fundado en 2021.",
  },
};

const clubSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  "@id": "https://www.somostoros.com/#organization",
  name: "Los Toros de Alicante",
  url: "https://www.somostoros.com",
  sport: ["Béisbol", "Softbol"],
  foundingDate: "2021-04-19",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Alicante",
  },
};

export default function ClubPage() {
  return (
    <main className="min-h-screen bg-[#020708] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clubSchema),
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

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#30CED8]">
            Los Toros de Alicante
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Club de béisbol y softbol en Alicante
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            Somos un club nacido de la pasión por el deporte, el compañerismo
            y las ganas de hacer crecer el béisbol y el softbol en Alicante.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#equipo"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#30CED8] px-7 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white"
            >
              Conoce al equipo
            </Link>

            <Link
              href="/#contacto"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
            >
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
              Nuestra identidad
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
              Un club nacido en Alicante
            </h2>

            <div className="mt-7 space-y-6 text-lg leading-8 text-white/70">
              <p>
                Los Toros de Alicante nacimos en 2021 como un proyecto deportivo
                formado por jugadores unidos por la pasión por el béisbol y el
                softbol.
              </p>

              <p>
                Desde entonces trabajamos para competir, entrenar, crecer como
                equipo y contribuir al desarrollo de estos deportes en Alicante.
              </p>

              <p>
                Nuestro club representa esfuerzo, compromiso, amistad y sentido
                de pertenencia. Cada entrenamiento y cada partido forman parte
                de una historia que seguimos construyendo juntos.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#30CED8]/20 bg-[#30CED8]/5 p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#30CED8]">
              Fundación
            </p>

            <p className="mt-4 text-6xl font-black text-white sm:text-7xl">
              2021
            </p>

            <div className="mt-7 h-px bg-white/10" />

            <p className="mt-7 text-lg font-bold text-white">
              19 de abril de 2021
            </p>

            <p className="mt-2 text-sm leading-7 text-white/50">
              Inicio de una historia deportiva que continúa creciendo en
              Alicante.
            </p>
          </div>
        </div>
      </section>

      {/* BÉISBOL Y SOFTBOL */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
              Nuestro deporte
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
              Béisbol y softbol en Alicante
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Nuestro objetivo es seguir dando visibilidad al béisbol y al
              softbol, competir con identidad propia y ayudar a que cada vez
              más personas conozcan y practiquen estos deportes en Alicante.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#30CED8]">
                Competición
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                Representar a Alicante
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Afrontamos cada competición con compromiso, responsabilidad y
                respeto por nuestros rivales.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#30CED8]">
                Equipo
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                Crecer juntos
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                El club se construye desde el trabajo colectivo, la constancia
                y el apoyo entre compañeros.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#30CED8]">
                Comunidad
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                Hacer crecer el deporte
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Queremos acercar el béisbol y el softbol a nuevas personas y
                seguir ampliando nuestra comunidad deportiva.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                Lo que nos define
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
                Más que un equipo
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/70">
              <p>
                Los Toros de Alicante somos competición, pero también somos
                convivencia, esfuerzo y familia deportiva.
              </p>

              <p>
                Nuestro crecimiento se apoya en valores que forman parte de
                nuestra identidad tanto dentro como fuera del campo.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Compromiso", "Compañerismo", "Respeto", "Superación"].map(
              (value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 text-center"
                >
                  <p className="text-lg font-black uppercase tracking-wide text-white">
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ENLACES INTERNOS */}
      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#30CED8]/25 bg-[#30CED8]/10 p-8 sm:p-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
              Sigue conociendo al club
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase sm:text-4xl">
              Descubre nuestra historia deportiva
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Consulta nuestro equipo, competiciones, títulos, noticias y toda
              la actualidad de Los Toros de Alicante.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#historia"
                className="rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-[#30CED8]"
              >
                Nuestra historia
              </Link>

              <Link
                href="/palmares"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
              >
                Palmarés
              </Link>

              <Link
                href="/noticias"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
              >
                Actualidad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}