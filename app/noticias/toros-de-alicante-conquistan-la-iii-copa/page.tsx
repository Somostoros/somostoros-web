import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: "Los Toros de Alicante | Club de Béisbol y Softbol",
    template: "%s | Los Toros de Alicante",
  },
  description:
    "Club de Béisbol y Softbol Los Toros de Alicante. #SomosToros. No importa quién seas. Si te gusta el softball, aquí tienes tu sitio.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Los Toros de Alicante",
    title: "Los Toros de Alicante | Club de Béisbol y Softbol",
    description:
      "Club de Béisbol y Softbol Los Toros de Alicante. Noticias, competición, equipo y actualidad.",
  },
};

export default function CopaLigaAutonomicaPage() {
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
            href="/#actualidad"
            className="text-xs font-black uppercase tracking-[0.2em] text-[#30CED8] transition hover:text-white"
          >
            ← Volver a actualidad
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#30CED8] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-black">
              Campeones
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              12 de julio de 2026
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Los Toros de Alicante conquistan la{" "}
            <span className="text-[#30CED8]">
              III Copa de la Liga Autonómica
            </span>{" "}
            de Softbol Masculino
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            Dos victorias, una ofensiva imparable y una actuación decisiva
            de Óscar Ulacio llevaron a Los Toros a conquistar un nuevo título.
          </p>
        </div>
      </section>

      {/* DATOS DESTACADOS */}
      <section className="border-b border-white/10 bg-[#080d0e] px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Final
            </p>
            <p className="mt-2 text-3xl font-black text-[#30CED8]">
              18 — 11
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Toros vs. Marineros
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              MVP
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              Óscar Ulacio
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Lanzador
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
              Sede
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              San Vicente
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Estadio del Rigas
            </p>
          </div>

        </div>
      </section>

      {/* NOTICIA */}
      <article className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">

          <p className="text-lg font-bold leading-8 text-white">
            San Vicente del Raspeig, 12 de julio de 2026.
          </p>

          <div className="mt-6 space-y-7 text-lg leading-9 text-gray-400">
            <p>
              Los Toros de Alicante se proclamaron campeones de la{" "}
              <strong className="font-bold text-white">
                III Copa de la Liga Autonómica de Softbol Masculino de la
                Región de Murcia
              </strong>
              , tras conseguir dos importantes victorias en la jornada
              disputada este domingo en el Estadio del Rigas, en San Vicente
              del Raspeig.
            </p>

            <p>
              El conjunto alicantino abrió la competición imponiéndose a los
              Gladiadores de San Vicente en un sólido encuentro que les
              permitió avanzar con confianza hacia la gran final.
              Posteriormente, los Toros confirmaron su gran momento deportivo
              al derrotar a los Marineros de Benidorm por un contundente{" "}
              <strong className="font-bold text-[#30CED8]">
                18 carreras por 11
              </strong>
              , en un partido donde la ofensiva taurina mostró todo su
              potencial.
            </p>

            <p>
              Tras un inicio equilibrado, los bates de los Toros despertaron
              con fuerza. Los imparables comenzaron a llegar de manera
              consecutiva, acompañados de oportunos jonrones que ampliaron la
              ventaja en el marcador y terminaron por inclinar definitivamente
              el encuentro a favor del conjunto alicantino.
            </p>

            <div className="my-12 border-l-4 border-[#30CED8] bg-[#30CED8]/5 px-7 py-6">
              <p className="text-xl font-black leading-8 text-white">
                Óscar Ulacio se adjudicó la victoria en ambos compromisos y
                fue reconocido como Jugador Más Valioso de la Copa.
              </p>
            </div>

            <p>
              Uno de los grandes protagonistas de la jornada fue el lanzador{" "}
              <strong className="font-bold text-white">
                Óscar Ulacio
              </strong>
              , quien se adjudicó la victoria en ambos compromisos,
              convirtiéndose en una pieza fundamental para la conquista del
              título. Su destacada actuación sobre el montículo le valió el
              reconocimiento como{" "}
              <strong className="font-bold text-[#30CED8]">
                Jugador Más Valioso (MVP)
              </strong>{" "}
              de la Copa.
            </p>

            <p>
              Con este nuevo éxito, los Toros de Alicante continúan
              consolidándose como uno de los equipos más competitivos del
              softbol masculino en el ámbito autonómico, reafirmando el
              trabajo, el compromiso y el espíritu de equipo que los ha
              caracterizado.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <Link
              href="/palmares"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#30CED8] px-8 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-white"
            >
              Ver palmarés de Los Toros
              <span className="ml-3">→</span>
            </Link>
          </div>

        </div>
      </article>

    </main>
  );
}