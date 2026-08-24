"use client";

import type { FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34628066568";
const EMAIL = "torosdealicante@gmail.com";

type ContactFormProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  intent: "Jugador" | "Patrocinador";
};

function ContactForm({
  id,
  eyebrow,
  title,
  description,
  intent,
}: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      `Hola, me pongo en contacto con Los Toros de Alicante.`,
      ``,
      `Motivo: ${intent}`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Email: ${email}`,
      message ? `Mensaje: ${message}` : "",
      ``,
      `He autorizado a la Directiva de Los Toros de Alicante a ponerse en contacto conmigo utilizando los datos facilitados.`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9 lg:p-10"
    >
      <div className="max-w-xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#30CED8]">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 leading-7 text-white/50">
          {description}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-9 grid gap-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${id}-name`}
              className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/55"
            >
              Nombre *
            </label>

            <input
              id={`${id}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              className="min-h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#30CED8]/70"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label
              htmlFor={`${id}-phone`}
              className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/55"
            >
              Teléfono de contacto *
            </label>

            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="min-h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#30CED8]/70"
              placeholder="Tu teléfono"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${id}-email`}
            className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/55"
          >
            Email *
          </label>

          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="min-h-14 w-full rounded-2xl border border-white/10 bg-black/30 px-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#30CED8]/70"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-message`}
            className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/55"
          >
            Breve mensaje
          </label>

          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#30CED8]/70"
            placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-[#30CED8]"
          />

          <span className="text-sm leading-6 text-white/55">
            Autorizo a la Directiva de Los Toros de Alicante a ponerse en
            contacto conmigo utilizando los datos facilitados en este
            formulario.
          </span>
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#30CED8] px-8 text-sm font-black uppercase tracking-[0.1em] text-black transition duration-300 hover:bg-white sm:w-fit"
        >
          Enviar por WhatsApp
          <span className="ml-3 text-lg">→</span>
        </button>
      </form>
    </article>
  );
}

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[#020708] py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#30CED8]/[0.06] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-[#30CED8]">
            Contacto
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            Hablemos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Si quieres jugar, colaborar o hacer crecer este proyecto junto
            a nosotros, estaremos encantados de escucharte.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-4 text-sm text-white/50 sm:flex-row sm:gap-8">

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar con Los Toros de Alicante por WhatsApp"
            className="group inline-flex items-center gap-3 font-bold transition hover:text-[#30CED8]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-[#30CED8]/50 group-hover:bg-[#30CED8]/10">
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5"
              />
            </span>

            <span>628 066 568</span>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar un correo electrónico a Los Toros de Alicante"
            className="group inline-flex items-center gap-3 font-bold transition hover:text-[#30CED8]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-[#30CED8]/50 group-hover:bg-[#30CED8]/10">
              <Mail
                aria-hidden="true"
                className="h-5 w-5"
                />
            </span>

            <span>{EMAIL}</span>
          </a>

        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">

          <ContactForm
            id="contacto-jugadores"
            eyebrow="Quiero jugar"
            title="Únete a Los Toros"
            description="Cuéntanos quién eres y cómo podemos contactar contigo. La Directiva del club se pondrá en contacto contigo."
            intent="Jugador"
          />

          <ContactForm
            id="contacto-patrocinadores"
            eyebrow="Quiero colaborar"
            title="Patrocina a Los Toros"
            description="Si representas a una empresa, marca o proyecto interesado en colaborar con el club, déjanos tus datos."
            intent="Patrocinador"
          />

        </div>
      </div>
    </section>
  );
}