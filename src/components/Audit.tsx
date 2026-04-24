"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
  auditDeliverables,
  budgetRanges,
  ctaLabels,
  needTypes,
} from "@/content/site";

type LeadForm = {
  name: string;
  company: string;
  needType: string;
  budgetRange: string;
  contact: string;
  message: string;
};

type SubmissionState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialForm: LeadForm = {
  name: "",
  company: "",
  needType: "",
  budgetRange: "",
  contact: "",
  message: "",
};

const fieldClassName =
  "panel-premium w-full rounded-[20px] border border-outline-variant/18 bg-surface/92 px-4 py-3.5 text-sm text-tertiary outline-none transition-[border-color,box-shadow,transform] placeholder:text-outline focus:border-primary/40 focus:shadow-[0_0_0_1px_rgba(224,194,159,0.12)]";

export default function Audit() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

      const result = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error ?? "No fue posible enviar la solicitud en este momento.",
        );
      }

      setSubmission({
        status: "success",
        message:
          result.message ??
          "Aplicación recibida. Si hay encaje estratégico, Marcos responderá con el siguiente paso.",
      });
      setForm(initialForm);
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Falló la comunicación del sistema. Intenta nuevamente.",
      });
    }
  };

  return (
    <section
      id="audit"
      className="relative scroll-mt-24 border-t border-outline-variant/10 bg-surface py-32 md:py-40"
    >
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="panel-premium rounded-[34px] border border-outline-variant/18 bg-surface-container-low p-8 md:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary">
              Evaluación estratégica
            </p>
            <h2 className="mt-6 max-w-2xl font-headline text-[2rem] font-bold leading-tight text-tertiary md:text-[3.15rem]">
              No es un formulario de contacto. Es el filtro inicial para
              determinar si tu negocio necesita una infraestructura comercial
              más seria.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-secondary">
              Revisamos necesidad, urgencia, rango de inversión y nivel de
              complejidad para decidir si vale la pena abrir una conversación
              estratégica.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Captación", "CRM", "Automatización", "Dashboards"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/16 bg-primary/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 space-y-4">
              {auditDeliverables.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-primary/12 bg-primary/5 px-5 py-4"
                >
                  <div className="flex gap-4">
                    <span className="font-headline text-xl font-bold text-primary/70">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-secondary">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[24px] border border-outline-variant/12 bg-black/10 p-5 text-sm leading-7 text-outline">
              Prioridad para proyectos donde la infraestructura impacta
              autoridad, captación, seguimiento o control operativo. La
              respuesta inicial llega en 24 horas hábiles.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="panel-premium relative overflow-hidden rounded-[34px] border border-primary/16 bg-surface-container-high p-8 md:p-10"
          >
            <div
              aria-hidden="true"
              className="section-divider absolute inset-x-8 top-0 h-px"
            />

            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                Aplicación estratégica
              </p>
              <h3 className="mt-4 max-w-2xl font-headline text-[1.65rem] font-bold leading-tight text-tertiary md:text-[2.25rem]">
                Cuéntame qué tipo de sistema necesitas y el rango de inversión
                con el que estás pensando resolverlo.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary">
                La idea es detectar encaje rápido y proteger el tiempo de ambos
                lados antes de abrir una conversación.
              </p>
            </div>

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
                Empresa / proyecto
                <input
                  required
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className={fieldClassName}
                  placeholder="Nombre del negocio o proyecto"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-secondary">
                Tipo de necesidad
                <select
                  required
                  name="needType"
                  value={form.needType}
                  onChange={handleChange}
                  className={fieldClassName}
                >
                  <option value="">Selecciona una opción</option>
                  {needTypes.map((need) => (
                    <option key={need} value={need}>
                      {need}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm text-secondary">
                Presupuesto estimado o rango de inversión
                <select
                  required
                  name="budgetRange"
                  value={form.budgetRange}
                  onChange={handleChange}
                  className={fieldClassName}
                >
                  <option value="">Selecciona un rango</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm text-secondary">
              WhatsApp / email
              <input
                required
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="+1 809... o correo@negocio.com"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm text-secondary">
              Mensaje
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className={`${fieldClassName} resize-none`}
                placeholder="Explica qué está frenando hoy la captación, el seguimiento o la operación, y qué resultado buscas."
              />
            </label>

            <div className="mt-8 flex flex-col gap-5 border-t border-outline-variant/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-outline">
                  Revisión selectiva
                </p>
                <p className="mt-3 text-sm leading-7 text-secondary">
                  Si hay encaje, el siguiente paso será una conversación
                  estratégica con contexto previo y mayor claridad de alcance.
                </p>
              </div>

              <button
                type="submit"
                disabled={submission.status === "sending"}
                className={`bronze-glow inline-flex items-center justify-center rounded-full px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform ${
                  submission.status === "sending"
                    ? "cursor-wait opacity-70"
                    : "hover:-translate-y-0.5"
                }`}
              >
                {submission.status === "sending"
                  ? "Enviando aplicación"
                  : ctaLabels.primary}
              </button>
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
