import { NextResponse } from "next/server";

type AuditPayload = {
  name: string;
  company: string;
  needType: string;
  budgetRange: string;
  contact: string;
  message: string;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<
      Record<keyof AuditPayload, unknown>
    >;

    const payload: AuditPayload = {
      name: normalizeText(data.name),
      company: normalizeText(data.company),
      needType: normalizeText(data.needType),
      budgetRange: normalizeText(data.budgetRange),
      contact: normalizeText(data.contact),
      message: normalizeText(data.message),
    };

    if (
      !payload.name ||
      !payload.company ||
      !payload.needType ||
      !payload.budgetRange ||
      !payload.contact ||
      !payload.message
    ) {
      return NextResponse.json(
        {
          error:
            "Completa los campos clave para evaluar el encaje del proyecto.",
        },
        { status: 400 },
      );
    }

    if (payload.contact.length < 5) {
      return NextResponse.json(
        { error: "Ingresa un WhatsApp o email válido para continuar." },
        { status: 400 },
      );
    }

    if (payload.message.length < 20) {
      return NextResponse.json(
        {
          error:
            "Describe brevemente el contexto y el objetivo comercial para evaluar el encaje.",
        },
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
          {
            error:
              "No fue posible registrar la solicitud en el webhook configurado.",
          },
          { status: 502 },
        );
      }
    }

    console.info("Audit lead received", lead);

    return NextResponse.json(
      {
        message:
          "Aplicación recibida. Si hay encaje estratégico, Marcos responderá con el siguiente paso.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Falló la comunicación del sistema. Intenta nuevamente." },
      { status: 500 },
    );
  }
}
