"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { auditDeliverables, offers } from "@/content/site";

type LeadForm = {
  name: string;
  business: string;
  email: string;
  phone: string;
  offerInterest: string;
  currentSituation: string;
};

type SubmissionState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialForm: LeadForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  offerInterest: "",
  currentSituation: "",
};

const fieldClassName =
  "w-full rounded-[18px] border border-outline-variant/20 bg-surface px-4 py-3 text-sm text-tertiary outline-none transition-colors placeholder:text-outline focus:border-primary/40";

export default function Audit() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmission({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(
          result.error ?? "No fue posible enviar la solicitud en este momento.",
        );
      }

      setSubmission({
        status: "success",
        message:
          result.message ??
          "Solicitud recibida. Marcos revisara tu infraestructura y respondera con el siguiente paso.",
      });
      setForm(initialForm);
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Fallo en la comunicacion del sistema. Intenta nuevamente.",
      });
    }
  };

  return (
    <section
      id="audit"
      className="scroll-mt-24 border-t border-outline-variant/10 bg-surface py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-outline-variant/18 bg-surface-container-low p-8 md:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
              Auditoria digital estrategica
            </p>
            <h2 className="mt-6 font-headline text-3xl font-bold text-tertiary md:text-5xl">
              El siguiente paso no es pedir una web. Es entender el sistema que tu
              negocio realmente necesita.
            </h2>
            <p className="mt-6 text-base leading-8 text-secondary">
              Revisamos captacion, autoridad digital, CRM, seguimiento y
              automatizacion para detectar donde se pierde dinero, tiempo o control.
              Si hay encaje, definimos el siguiente nivel de infraestructura.
            </p>

            <div className="mt-10 space-y-4">
              {auditDeliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-primary/12 bg-primary/5 px-5 py-4 text-sm leading-7 text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-outline-variant/12 pt-6 text-sm leading-7 text-outline">
              Respuesta inicial en 24 horas habiles. Tomamos proyectos donde la
              infraestructura impacta captacion, conversion u operacion.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-primary/16 bg-surface-container-high p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-secondary">
                Nombre
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="Tu nombre"
                />
              </label>

              <label className="grid gap-2 text-sm text-secondary">
                Negocio
                <input
                  required
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="Nombre del negocio"
                />
              </label>

              <label className="grid gap-2 text-sm text-secondary">
                Correo
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="correo@negocio.com"
                />
              </label>

              <label className="grid gap-2 text-sm text-secondary">
                Telefono o WhatsApp
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="+1 809 ..."
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm text-secondary">
              Que nivel de oferta te interesa
              <select
                required
                name="offerInterest"
                value={form.offerInterest}
                onChange={handleChange}
                className={fieldClassName}
              >
                <option value="">Selecciona una opcion</option>
                {offers.map((offer) => (
                  <option key={offer.name} value={offer.name}>
                    {offer.name}
                  </option>
                ))}
                <option value="Necesito claridad estrategica">
                  Necesito claridad estrategica
                </option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm text-secondary">
              Describe tu situacion actual
              <textarea
                required
                name="currentSituation"
                value={form.currentSituation}
                onChange={handleChange}
                rows={6}
                className={`${fieldClassName} resize-none`}
                placeholder="Explica como captas prospectos hoy, donde se traba el seguimiento y que resultado buscas."
              />
            </label>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={submission.status === "sending"}
                className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform ${
                  submission.status === "sending"
                    ? "cursor-wait opacity-70"
                    : "hover:-translate-y-0.5"
                } bronze-glow`}
              >
                {submission.status === "sending"
                  ? "Enviando solicitud"
                  : "Solicitar auditoria"}
              </button>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
                Compatible con Vercel y webhook externo
              </p>
            </div>

            {submission.message ? (
              <p
                className={`mt-6 rounded-[20px] border px-4 py-3 text-sm leading-7 ${
                  submission.status === "success"
                    ? "border-primary/18 bg-primary/6 text-secondary"
                    : "border-red-400/20 bg-red-500/8 text-red-200"
                }`}
              >
                {submission.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
