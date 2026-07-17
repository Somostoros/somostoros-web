import {
  Heart,
  Users,
  Trophy,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión",
    text: "Vivimos el softbol con ilusión, compromiso y entrega en cada entrenamiento y partido.",
  },
  {
    icon: Users,
    title: "Familia",
    text: "Somos un grupo unido donde todos tienen un lugar, dentro y fuera del campo.",
  },
  {
    icon: Trophy,
    title: "Superación",
    text: "Competimos para crecer, aprender y dar siempre nuestra mejor versión.",
  },
  {
    icon: ShieldCheck,
    title: "Respeto",
    text: "Respetamos al rival, a los árbitros, a nuestros compañeros y al deporte.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#111111] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center uppercase tracking-[0.45em] text-[#30CED8]">
          Nuestros valores
        </p>

        <h2 className="mt-4 text-center text-5xl font-black text-white">
          Mucho más que un club
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-400">
          Creemos que el deporte transforma personas. Por eso nuestro
          compromiso va mucho más allá de ganar partidos.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-3 hover:border-[#30CED8] hover:shadow-[0_0_40px_rgba(48,206,216,0.15)]"
              >
                <Icon
                  className="mb-6 text-[#30CED8]"
                  size={42}
                />

                <h3 className="text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}