import Hero from "@/components/sections/Hero";
import History from "@/components/sections/History";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";


export default function HomePage() {
  return (
    <main className="bg-[#020708]">
      <Hero />
      <History />
      <About />
      <Values />
    </main>
  );
}