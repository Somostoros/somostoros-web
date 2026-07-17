export default function About() {
  return (
    <section className="bg-[#0d0d0d] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Texto */}

          <div>

            <p className="uppercase tracking-[0.35em] text-[#30CED8]">
              Mucho más que un equipo
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Aquí comienza
              <br />
              tu historia.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Los Toros de Alicante nacen para que cualquier persona,
              tenga o no experiencia, pueda descubrir el softball,
              competir, aprender y formar parte de una gran familia.
            </p>

          </div>

          {/* Imagen */}

          <div className="h-[500px] rounded-3xl bg-neutral-800"></div>

        </div>

      </div>
    </section>
  );
}