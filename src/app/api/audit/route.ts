import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Aquí es donde Antigravity o n8n recibirán el Webhook
    // Por ahora, simulamos la recepción exitosa
    console.log("Datos de Auditoría Recibidos:", data);

    // TODO: Configurar aquí tu URL de Webhook de n8n
    // await fetch('TU_WEBHOOK_N8N', { method: 'POST', body: JSON.stringify(data) });

    return NextResponse.json({ message: "Protocolo de Auditoría Iniciado" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Fallo en la comunicación del sistema" }, { status: 500 });
  }
}
