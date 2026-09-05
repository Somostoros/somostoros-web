import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Únete | Juega béisbol y softbol en Alicante",
  description:
    "¿Quieres jugar béisbol o softbol en Alicante? Únete a Los Toros de Alicante, conoce nuestro club y da el primer paso para formar parte del equipo.",
  alternates: {
    canonical: "/unete",
  },
  openGraph: {
    type: "website",
    url: "/unete",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Únete | Juega béisbol y softbol en Alicante",
    description:
      "Forma parte de Los Toros de Alicante. Béisbol, softbol, equipo, compromiso y pasión por el deporte en Alicante.",
  },
};

export default function UnetePage() {
  return (
    <main className="min-h-screen bg-[#020708] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-36 sm:pb-24 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#30CED8]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#30CED8]">
            Forma parte del equipo
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Juega béisbol y softbol en Alicante
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            Si te apasiona el deporte, quieres competir, entrenar y formar parte
            de un equipo, en Los Toros de Alicante queremos conocerte.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contacto"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#30CED8] px-7 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white"
            >
              Quiero unirme
            </Link>

            <Link
              href="/club"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
            >
              Conoce el club
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                Únete a Los Toros
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
                Aquí empieza tu próxima temporada
              </h2>

              <div className="mt-7 space-y-6 text-lg leading-8 text-white/70">
                <p>
                  Los Toros de Alicante somos un club de béisbol y softbol
                  formado por jugadores unidos por la pasión por el deporte, la
                  competición y el trabajo en equipo.
                </p>

                <p>
                  Buscamos seguir creciendo con personas que quieran entrenar,
                  aprender, competir y compartir los valores que representan al
                  club.
                </p>

                <p>
                  Tanto si ya tienes experiencia como si quieres acercarte al
                  béisbol y al softbol, puedes ponerte en contacto con nosotros y
                  conocer mejor el proyecto.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#30CED8]/20 bg-[#30CED8]/5 p-8 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#30CED8]">
                Alicante
              </p>

              <p className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
                Tu lugar puede estar aquí
              </p>

              <p className="mt-6 text-base leading-7 text-white/60">
                Forma parte de un club que compite, crece y representa a
                Alicante dentro y fuera del campo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ENCONTRARÁS */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
              Lo que encontrarás
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
              Mucho más que jugar
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Ser parte de Los Toros significa entrenar, competir, mejorar y
              compartir una misma pasión con compañeros que buscan crecer como
              equipo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#30CED8]">
                Entrenamiento
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                Mejorar cada día
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Trabajo, constancia y aprendizaje para seguir evolucionando como
                jugador y como equipo.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#30CED8]">
                Competición
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase">
                Defender nuestros colores
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Afrontamos cada partido con compromiso, respeto y la ambición de
                representar al club de la mejor manera.
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
                El compañerismo, el respeto y el compromiso forman parte de
                nuestra manera de entender el deporte.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
                ¿Es para ti?
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
                Si quieres jugar, queremos conocerte
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "Quieres practicar béisbol o softbol en Alicante.",
                "Buscas un equipo donde entrenar y competir.",
                "Ya tienes experiencia y quieres seguir jugando.",
                "Quieres conocer un club y formar parte de una comunidad deportiva.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
                >
                  <p className="text-base leading-7 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[#30CED8]/25 bg-[#30CED8]/10 p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
              Da el primer paso
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
              ¿Quieres formar parte de Los Toros de Alicante?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Ponte en contacto con nosotros. Te contaremos más sobre el club,
              los entrenamientos y cómo puedes empezar.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#contacto"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-[#30CED8]"
              >
                Contactar
              </Link>

              <Link
                href="/#equipo"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
              >
                Ver el equipo
              </Link>

              <Link
                href="/noticias"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:border-[#30CED8] hover:text-[#30CED8]"
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