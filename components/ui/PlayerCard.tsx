import Image from "next/image";

type PlayerCardProps = {
  name: string;
  number?: number;
  position?: string;
  image: string;
};

export default function PlayerCard({
  name,
  image,
}: PlayerCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080b0c] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#30CED8]/50 hover:shadow-[0_20px_60px_rgba(48,206,216,0.12)]">

      <div className="relative aspect-[4/5] overflow-hidden">

        <Image
          src={image}
          alt={`Ficha de ${name}, jugador de Los Toros de Alicante`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 opacity-0 transition duration-500 group-hover:opacity-100"
        />

      </div>

      <div className="h-1 w-0 bg-[#30CED8] transition-all duration-500 group-hover:w-full" />

    </article>
  );
}