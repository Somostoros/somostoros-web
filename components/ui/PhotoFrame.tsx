import Image from "next/image";
import type { ReactNode } from "react";

type PhotoFrameProps = {
  image: string;
  alt: string;
  caption?: string;
  children?: ReactNode;
  priority?: boolean;
  imageClassName?: string;
};

/*
 * Borde ligeramente desigual.
 * No pretende simular papel completamente rasgado,
 * sino una copia fotográfica antigua y manipulada.
 */
const PAPER_SHAPE = `
  polygon(
    0.6% 0.3%,
    24% 0%,
    49% 0.5%,
    75% 0.1%,
    99.5% 0.6%,
    100% 25%,
    99.5% 50%,
    100% 75%,
    99.3% 99.5%,
    75% 100%,
    50% 99.5%,
    25% 100%,
    0.5% 99.4%,
    0% 75%,
    0.5% 50%,
    0% 25%
  )
`;

export default function PhotoFrame({
  image,
  alt,
  caption,
  children,
  priority = false,
  imageClassName = "object-center",
}: PhotoFrameProps) {
  return (
    <figure className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Sombra secundaria del papel */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          translate-x-3
          translate-y-4
          rotate-[1.2deg]
          bg-black/25
          blur-sm
        "
        style={{
          clipPath: PAPER_SHAPE,
        }}
      />

      {/* Copia fotográfica */}
      <div
        className="relative rotate-[-0.8deg]"
        style={{
          filter: "drop-shadow(0 25px 60px rgba(0, 0, 0, 0.45))",
        }}
      >
        <div
          className="
            relative
            overflow-hidden
            border
            border-[#E5DDCE]
            bg-[#FEF8DA]
            p-3
            pb-4
            sm:p-4
            sm:pb-5
          "
          style={{
            clipPath: PAPER_SHAPE,
          }}
        >
          {/* Textura sutil del papel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(96, 76, 48, 0.16) 0.6px, transparent 0.6px)",
              backgroundSize: "5px 5px",
            }}
          />

          {/* Fotografía */}
          <div
            className="
              relative
              z-10
              aspect-[4/3]
              overflow-hidden
              bg-neutral-900
            "
          >
            <Image
              src={image}
              alt={alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`
                object-cover
                contrast-[1.03]
                saturate-[0.9]
                sepia-[0.08]
                ${imageClassName}
              `}
            />

            {/* Envejecimiento muy sutil */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#7A542A]/10
                mix-blend-color
              "
            />

            {/* Luz y profundidad */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-tr
                from-black/15
                via-transparent
                to-white/10
              "
            />

            {/* Placa u otros elementos superpuestos */}
            {children}
          </div>

          {/* Pie de fotografía */}
          {caption && (
            <figcaption
              className="
                relative
                z-10
                mt-3
                px-1
                font-serif
                text-[0.68rem]
                leading-5
                tracking-[0.08em]
                text-[#51483A]
                sm:text-xs
              "
            >
              {caption}
            </figcaption>
          )}
        </div>
      </div>
    </figure>
  );
}