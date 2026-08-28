import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import History from "@/components/sections/History";
import Team from "@/components/sections/Team";
import Competition from "@/components/sections/Competition";
import Palmares from "@/components/sections/Palmares";
import Invitation from "@/components/sections/Invitation";
import TeamFormation from "@/components/sections/TeamFormation";
import FanZone from "@/components/sections/FanZone";
import Sponsors from "@/components/sections/Sponsors";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="bg-[#020708]">
      <Hero />
      <News />

      <section
        aria-labelledby="club-alicante-title"
        className="mx-auto max-w-5xl px-6 py-10 text-center md:py-14"
      >
        <h2
          id="club-alicante-title"
          className="text-2xl font-bold tracking-tight text-white md:text-3xl"
        >
          Club de béisbol y softbol en Alicante
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          Los Toros de Alicante somos un club nacido en 2021 y formado por
          jugadores unidos por la pasión por el béisbol y el softbol. Competimos,
          entrenamos y trabajamos para seguir haciendo crecer estos deportes en
          Alicante.
        </p>
      </section>

      <History />
      <Team />

      <Competition />
      <Palmares />

      <Invitation />
      <Contact />

      <TeamFormation />

      <FanZone />
      <Sponsors />

      <Values />
    </main>
  );
}