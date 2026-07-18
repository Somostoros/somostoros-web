import Image from "next/image";

type FoundingPlaqueProps = {
  className?: string;
};

function FoundingPlaque({
  className = "",
}: FoundingPlaqueProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[24px]",
        "border border-white/20",
        "bg-[linear-gradient(145deg,#343d40_0%,#15191b_100%)]",
        "px-5 py-5 text-center text-white",
        "shadow-[0_18px_45px_rgba(0,0,0,0.48)]",
        className,
      ].join(" ")}
    >
      {/* Tornillos decorativos */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 h-3 w-3 rounded-full border border-white/50 bg-white/25 shadow-inner"
      />

      <span
        aria-hidden="true"
        className="absolute right-3 top-3 h-3 w-3 rounded-full border border-white/50 bg-white/25 shadow-inner"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-3 left-3 h-3 w-3 rounded-full border border-white/50 bg-white/25 shadow-inner"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 h-3 w-3 rounded-full border border-white/50 bg-white/25 shadow-inner"
      />

      <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/70 sm:text-xs">
        Acta fundacional
      </p>

      <p className="mt-2 text-4xl font-black leading-none text-[#35cad8] sm:text-5xl">
        2021
      </p>

      <div className="mx-auto my-4 h-px w-16 bg-white/20" />

      <p className="text-sm font-extrabold sm:text-base">
        19 de abril
      </p>

      <p className="mt-2 text-xs text-white/65 sm:text-sm">
        Guarapo Café
      </p>

      <p className="text-xs text-white/50 sm:text-sm">
        El Campello · Alicante
      </p>
    </div>
  );
}

export default function History() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-[#020708] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Decoración de fondo */}
      <div
        aria-hidden="true"
        className="absolute left-[-160px] top-24 h-80 w-80 rounded-full bg-[#35cad8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-16 right-[-180px] h-96 w-96 rounded-full bg-[#35cad8]/10 blur-3xl"
      />

      <article
        className="relative mx-auto max-w-5xl overflow-hidden bg-[#efe4ca] text-[#111111] shadow-[0_35px_100px_rgba(0,0,0,0.48)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(68, 50, 29, 0.08) 1px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      >
        {/* Borde superior irregular */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-7 bg-[#020708]"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 45%, 92% 72%, 83% 45%, 73% 76%, 63% 44%, 53% 71%, 43% 43%, 33% 75%, 23% 46%, 13% 72%, 6% 45%, 0 69%)",
          }}
        />

        {/* Borde inferior irregular */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-7 bg-[#020708]"
          style={{
            clipPath:
              "polygon(0 35%, 7% 62%, 15% 34%, 25% 68%, 35% 38%, 46% 70%, 57% 36%, 68% 66%, 79% 35%, 89% 65%, 100% 38%, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative px-4 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
          {/* Marco de la fotografía */}
          <figure className="mx-auto max-w-4xl bg-[#f7edd7] p-3 shadow-[10px_16px_0_rgba(90,70,42,0.12)] sm:p-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-black/30 bg-[#d9cfba]">
              <Image
                src="/images/history/fundacion.jpg"
                alt="Firma del acta fundacional de Los Toros de Alicante"
                fill
                sizes="(max-width: 1024px) 92vw, 896px"
                className="object-cover object-center"
              />

              {/*
                Escritorio:
                la placa queda sobre la mesa y la parte inferior,
                no sobre los rostros.
              */}
              <FoundingPlaque className="absolute bottom-6 left-1/2 hidden w-[255px] -translate-x-1/2 lg:block" />
            </div>

            {/*
              Móvil y tablet:
              la placa sale desde la zona inferior de la fotografía.
              El margen negativo es pequeño para no alcanzar las caras.
            */}
            <FoundingPlaque className="relative z-10 mx-auto -mt-10 w-[220px] sm:w-[250px] lg:hidden" />

            <figcaption className="mt-6 flex flex-col gap-2 border-t border-black/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/65 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
              <span>Archivo del club</span>
              <span>19 · 04 · 2021</span>
            </figcaption>
          </figure>

          {/* Contenido histórico */}
          <div className="mx-auto mt-14 max-w-3xl sm:mt-20">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-0.5 w-12 bg-[#159baa] sm:w-16"
              />

              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#138e9c] sm:text-sm">
                Nuestra historia
              </p>
            </div>

            <h2 className="mt-8 max-w-2xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Nacimos en
              <span className="block">plena pandemia</span>
            </h2>

            <p className="mt-8 text-2xl font-black text-[#159baa] sm:text-3xl">
              19 de abril de 2021
            </p>

            <div className="my-10 h-px bg-black/15" />

            <div className="space-y-7 text-lg leading-[1.85] text-black/80 sm:text-xl">
              <p>
                En plena pandemia, cuando todo invitaba a detenerse,{" "}
                <strong className="font-black text-black">
                  ocho amigos decidieron comenzar algo que pudiera
                  perdurar.
                </strong>{" "}
                Alrededor de una mesa nació la ilusión de construir
                un club donde el equipo estuviera siempre por encima
                de cualquier individualidad.
              </p>

              <p>
                Aquel encuentro fue mucho más que una firma. Fue el
                primer paso de una comunidad deportiva que continúa
                creciendo gracias al compromiso, la amistad, la
                lealtad y la pasión por el sóftbol.
              </p>
            </div>

            <blockquote className="relative mt-12 border-l-4 border-[#159baa] bg-black/[0.045] px-6 py-8 sm:px-9">
              <span
                aria-hidden="true"
                className="absolute left-5 top-1 text-7xl font-black leading-none text-[#159baa]/20"
              >
                “
              </span>

              <p className="relative text-xl font-black leading-relaxed sm:text-2xl">
                Los grandes clubes no nacen en un estadio. Nacen
                alrededor de una mesa.
              </p>

              <footer className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#138e9c] sm:text-sm">
                El origen de Los Toros
              </footer>
            </blockquote>
          </div>
        </div>
      </article>
    </section>
  );
}