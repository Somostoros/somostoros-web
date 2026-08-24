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