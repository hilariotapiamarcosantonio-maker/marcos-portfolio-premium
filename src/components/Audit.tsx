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

type OptionCardProps = {
  name: "needType" | "budgetRange";
  value: string;
  title: string;
  description: string;
  selected: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
  "panel-premium w-full rounded-[18px] border border-outline-variant/18 bg-surface/92 px-4 py-3 text-sm text-tertiary outline-none transition-[border-color,box-shadow,transform] placeholder:text-outline focus:border-primary/40 focus:shadow-[0_0_0_1px_rgba(224,194,159,0.12)]";

const needTypeDescriptions: Record<string, string> = {
  "Captación y autoridad digital": "Web comercial y entrada de demanda.",
  "CRM y seguimiento comercial": "Pipeline, trazabilidad y próximos pasos.",
  "Automatización operativa": "Procesos, alertas y reducción de fricción manual.",
  "Dashboards y control comercial": "Visibilidad ejecutiva y lectura de operación.",
  "Diagnóstico estratégico integral": "Revisión global para decidir qué corregir primero.",
};

const budgetDescriptions: Record<string, string> = {
  "US$1,500 - US$3,000": "Inversión inicial para resolver una capa crítica.",
  "US$3,000 - US$5,000": "Escenario para ordenar captación y seguimiento.",
  "US$6,000 - US$10,000": "Margen para un sistema comercial más robusto.",
  "US$10,000+": "Infraestructura de decisión ejecutiva y escalado.",
  "Aún estoy definiendo inversión":
    "Necesito calibrar alcance antes de cerrar la cifra.",
};

function OptionCard({
  name,
  value,
  title,
  description,
  selected,
  onChange,
}: OptionCardProps) {
  return (
    <label
      className={`panel-premium relative flex cursor-pointer rounded-[18px] border px-4 py-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 ${
        selected
          ? "border-primary/36 bg-primary/10 shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
          : "border-outline-variant/16 bg-surface/88 hover:border-primary/22"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full transition-colors ${
          selected ? "bg-primary" : "bg-outline-variant"
        }`}
      />
      <span className="pr-6">
        <span className="block text-sm font-semibold leading-6 text-tertiary">
          {title}
        </span>
        <span className="mt-2 block text-xs leading-6 text-secondary">
          {description}
        </span>
      </span>
    </label>
  );
}

export default function Audit() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      className="relative scroll-mt-24 border-t border-outline-variant/10 bg-surface py-24 md:py-28"
    >
      <div
        aria-hidden="true"
        className="section-divider absolute inset-x-0 top-0 h-px"
      />

      <div className="content-shell">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="panel-premium rounded-[32px] border border-outline-variant/18 bg-surface-container-low p-7 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
              Evaluación estratégica
            </p>
            <h2 className="mt-5 max-w-2xl font-headline text-[clamp(2rem,3.2vw,2.95rem)] font-bold leading-[1.03] tracking-[-0.03em] text-tertiary">
              No es un formulario de contacto. Es el filtro inicial para
              determinar si tu negocio necesita una infraestructura comercial
              más seria.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-secondary">
              Revisamos necesidad, urgencia, rango de inversión y nivel de
              complejidad para decidir si vale la pena abrir una conversación
              estratégica.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Captación", "CRM", "Automatización", "Dashboards"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/16 bg-primary/8 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            <div className="mt-8 space-y-3">
              {auditDeliverables.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-primary/12 bg-primary/5 px-4 py-3.5"
                >
                  <div className="flex gap-3.5">
                    <span className="font-headline text-lg font-bold text-primary/70">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6.5 text-secondary">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] border border-outline-variant/12 bg-black/10 p-4 text-sm leading-6.5 text-outline">
              Prioridad para proyectos donde la infraestructura impacta
              autoridad, captación, seguimiento o control operativo. La
              respuesta inicial llega en 24 horas hábiles.
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="panel-premium relative overflow-hidden rounded-[32px] border border-primary/16 bg-surface-container-high p-7 md:p-8"
          >
            <div
              aria-hidden="true"
              className="section-divider absolute inset-x-8 top-0 h-px"
            />

            <div className="mb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                Aplicación estratégica
              </p>
              <h3 className="mt-4 max-w-2xl font-headline text-[1.55rem] font-bold leading-[1.06] text-tertiary md:text-[2.05rem]">
                Cuéntame qué tipo de sistema necesitas y el rango de inversión
                con el que estás pensando resolverlo.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6.5 text-secondary">
                La idea es detectar encaje rápido y proteger el tiempo de ambos
                lados antes de abrir una conversación.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
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

            <fieldset className="mt-5">
              <legend className="text-sm text-secondary">
                Tipo de necesidad
              </legend>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {needTypes.map((need) => (
                  <OptionCard
                    key={need}
                    name="needType"
                    value={need}
                    title={need}
                    description={
                      needTypeDescriptions[need] ??
                      "Necesidad estratégica dentro del ecosistema digital."
                    }
                    selected={form.needType === need}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="text-sm text-secondary">
                Rango de inversión
              </legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {budgetRanges.map((range) => (
                  <OptionCard
                    key={range}
                    name="budgetRange"
                    value={range}
                    title={range}
                    description={
                      budgetDescriptions[range] ??
                      "Rango referencial para calibrar alcance."
                    }
                    selected={form.budgetRange === range}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </fieldset>

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
                rows={5}
                className={`${fieldClassName} resize-none`}
                placeholder="Explica qué está frenando hoy la captación, el seguimiento o la operación, y qué resultado buscas."
              />
            </label>

            <div className="mt-7 flex flex-col gap-4 border-t border-outline-variant/12 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-outline">
                  Revisión selectiva
                </p>
                <p className="mt-2 text-sm leading-6.5 text-secondary">
                  Si hay encaje, el siguiente paso será una conversación
                  estratégica con contexto previo y mayor claridad de alcance.
                </p>
              </div>

              <button
                type="submit"
                disabled={submission.status === "sending"}
                className={`bronze-glow inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-on-primary shadow-[0_18px_40px_rgba(224,194,159,0.18)] transition-transform ${
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
                className={`mt-5 rounded-[18px] border px-4 py-3 text-sm leading-6.5 ${
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
