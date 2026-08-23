import PlayerCard from "@/components/ui/PlayerCard";

const players = [
  {
    name: "Carlos Eduardo Vásquez Falcón",
    number: 5,
    position: "SS · Capitán · Manager",
    image: "/images/team/player-01.jpg",
  },
  {
    name: "Jesús Javier Chirino Molina",
    number: 21,
    position: "Catcher · 1B · 2do Manager",
    image: "/images/team/player-02.jpg",
  },
  {
    name: "Marving Gregory Rodríguez Peña",
    number: 99,
    position: "Infielder",
    image: "/images/team/player-03.jpg",
  },
  {
    name: "Eduardo José Hernández Pacheco",
    number: 10,
    position: "Outfielder · 1B",
    image: "/images/team/player-04.jpg",
  },
  {
    name: "Deivis Javier Garabán Vargas",
    number: 24,
    position: "Outfielder · Catcher",
    image: "/images/team/player-05.jpg",
  },
  {
    name: "Argenis José Briceño Victoria",
    number: 4,
    position: "Pitcher · 2B",
    image: "/images/team/player-06.jpg",
  },
  {
    name: "Jaime Jesús Peña Peña",
    number: 29,
    position: "Pitcher · 2B",
    image: "/images/team/player-07.jpg",
  },
  {
    name: "José Luís Colmenares Vivas",
    number: 57,
    position: "Pitcher · 2B",
    image: "/images/team/player-08.jpg",
  },
  {
    name: "Juan Carlos Marrero Serrano",
    number: 18,
    position: "1B · RF",
    image: "/images/team/player-09.jpg",
  },
  {
    name: "Marco Aurelio Miccichè",
    number: 6,
    position: "1B",
    image: "/images/team/player-10.jpg",
  },
  {
    name: "Braian Anderson Bautista Zurita",
    number: 11,
    position: "3B · Outfielder",
    image: "/images/team/player-11.jpg",
  },
  {
    name: "Spencer Jesús Hernández Sandoval",
    number: 7,
    position: "Outfielder",
    image: "/images/team/player-12.jpg",
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      className="bg-[#020708] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CABECERA */}
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#30CED8]">
            El equipo
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Nuestra familia
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60 sm:text-xl">
            Los Toros somos mucho más que un equipo. Somos una familia
            unida por el softbol, dentro y fuera del campo.
          </p>
        </div>

        {/* PLANTILLA */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      </div>
    </section>
  );
}