import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import PlayerCard from "@/components/ui/PlayerCard";

const players = [
  {
    name: "Nombre Jugador",
    number: 1,
    position: "Pitcher",
    image: "/images/team/player-01.jpg",
  },
  {
    name: "Nombre Jugador",
    number: 7,
    position: "Catcher",
    image: "/images/team/player-02.jpg",
  },
  {
    name: "Nombre Jugador",
    number: 12,
    position: "Infielder",
    image: "/images/team/player-03.jpg",
  },
  {
    name: "Nombre Jugador",
    number: 23,
    position: "Outfielder",
    image: "/images/team/player-04.jpg",
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      className="relative overflow-hidden bg-[#0b0f10] py-24 sm:py-28"
    >
      {/* Brillos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#30CED8]/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#30CED8]">
                EL EQUIPO
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Nuestra familia
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                Más que un equipo. Personas unidas por la amistad,
                la competición y la pasión por el softball.
              </p>
            </div>

            <Link
              href="#historia"
              className="group inline-flex shrink-0 items-center text-sm font-black uppercase tracking-[0.15em] text-[#30CED8]"
            >
              Nuestra historia
              <span className="ml-2 transition group-hover:ml-3">
                →
              </span>
            </Link>

          </div>
        </FadeIn>

        {/* LÍNEA DECORATIVA */}
        <FadeIn>
          <div className="my-12 h-px bg-gradient-to-r from-[#30CED8]/60 via-white/10 to-transparent" />
        </FadeIn>

        {/* PLANTILLA */}
        <FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {players.map((player) => (
              <PlayerCard
                key={player.number}
                name={player.name}
                number={player.number}
                position={player.position}
                image={player.image}
              />
            ))}

          </div>
        </FadeIn>

        {/* BOTÓN PLANTILLA COMPLETA */}
        <FadeIn>
          <div className="mt-14 flex justify-center">

            <Link
              href="#plantilla"
              className="
                inline-flex
                min-h-14
                items-center
                justify-center
                rounded-full
                border-2
                border-[#30CED8]
                px-8
                text-sm
                font-black
                uppercase
                tracking-[0.12em]
                text-[#30CED8]
                transition
                duration-300
                hover:bg-[#30CED8]
                hover:text-black
              "
            >
              Ver plantilla completa
              <span className="ml-3">
                →
              </span>
            </Link>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}