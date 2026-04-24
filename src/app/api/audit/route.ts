import { NextResponse } from "next/server";

type AuditPayload = {
  name: string;
  business: string;
  email: string;
  phone: string;
  offerInterest: string;
  currentSituation: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<Record<keyof AuditPayload, unknown>>;

    const payload: AuditPayload = {
      name: normalizeText(data.name),
      business: normalizeText(data.business),
      email: normalizeText(data.email),
      phone: normalizeText(data.phone),
      offerInterest: normalizeText(data.offerInterest),
      currentSituation: normalizeText(data.currentSituation),
    };

    if (
      !payload.name ||
      !payload.business ||
      !payload.email ||
      !payload.offerInterest ||
      !payload.currentSituation
    ) {
      return NextResponse.json(
        { error: "Completa los campos obligatorios para solicitar la auditoria." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(payload.email)) {
      return NextResponse.json(
        { error: "Ingresa un correo valido para continuar." },
        { status: 400 },
      );
    }

    const lead = {
      ...payload,
      source: "marcos-portfolio-premium",
      receivedAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.AUDIT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          { error: "No fue posible registrar la solicitud en el webhook configurado." },
          { status: 502 },
        );
      }
    }

    console.info("Audit lead received", lead);

    return NextResponse.json(
      {
        message:
          "Solicitud recibida. Marcos revisara tu infraestructura y respondera con el siguiente paso.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Fallo en la comunicacion del sistema. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
