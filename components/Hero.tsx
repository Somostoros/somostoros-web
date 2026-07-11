import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Image
        src="/images/hero/hero.jpeg"
        alt="Equipo Los Toros"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

        <Image
          src="/logos/TorosVino.PNG"
          alt="Logo Los Toros"
          width={180}
          height={180}
        />

        <p className="mt-6 text-xl font-semibold text-red-400">
          #SomosToros
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Los Toros de Alicante
        </h1>

        <p className="mt-8 max-w-2xl text-xl md:text-2xl">
          No importa quién seas.
          <br />
          <strong>Si te gusta el softball, aquí tienes tu sitio.</strong>
        </p>

      </div>

    </section>
  );
}