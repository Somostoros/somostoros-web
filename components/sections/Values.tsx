import {
  Users,
  ShieldCheck,
  HeartHandshake,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Equipo",
    text: "Nadie gana solo. Somos una familia dentro y fuera del campo y amamos este deporte.",
  },
  {
    icon: ShieldCheck,
    title: "Respeto",
    text: "Por nuestros compañeros, nuestros rivales, los árbitros, el deporte organizado y el país.",
  },
  {
    icon: HeartHandshake,
    title: "Lealtad",
    text: "Nadie está por encima del club. Somos uno, somos Toros. Aceptamos el error, damos segundas oportunidades y valoramos la humildad de quien vuelve. Porque nuestro núcleo no deja de crecer.",
  },
  {
    icon: HandHeart,
    title: "Comunidad",
    text: "Somos parte de España y queremos devolver a nuestra comunidad lo que el deporte nos ha dado. Tendemos la mano a quien quiera organizarse, crecer y hacer crecer el softball.",
  },
];

export default function Values() {
  return (
    <section
      id="valores"
      className="bg-[#111111] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* CABECERA */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-black uppercase tracking-[0.45em] text-[#30CED8]">
            Nuestros valores
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mucho más que un club
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Los Toros no se construyen solo sobre el terreno de juego.
            Nuestra forma de entender el deporte define quiénes somos,
            cómo competimos y cómo queremos crecer.
          </p>

        </div>

        {/* VALORES */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#30CED8]/60 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(48,206,216,0.12)]"
              >

                {/* ICONO */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#30CED8]/20 bg-[#30CED8]/10 transition duration-500 group-hover:border-[#30CED8]/50 group-hover:bg-[#30CED8]/20">
                  <Icon
                    size={30}
                    strokeWidth={2}
                    className="text-[#30CED8]"
                  />
                </div>

                {/* TÍTULO */}
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  {value.title}
                </h3>

                {/* TEXTO */}
                <p className="mt-5 text-[15px] leading-7 text-gray-400">
                  {value.text}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}