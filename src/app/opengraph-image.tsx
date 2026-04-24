import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, rgba(14,14,14,1) 0%, rgba(31,31,31,1) 65%, rgba(70,56,39,1) 100%)",
          color: "#f7f4ef",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(224,194,159,0.28)",
            borderRadius: "999px",
            color: "#e0c29f",
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.32em",
            padding: "14px 22px",
            textTransform: "uppercase",
            width: "auto",
          }}
        >
          Arquitectura digital premium
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "980px",
            }}
          >
            Marcos Hilario
          </div>
          <div
            style={{
              color: "#f7f4ef",
              display: "flex",
              fontSize: 38,
              lineHeight: 1.2,
              maxWidth: "980px",
            }}
          >
            Infraestructura digital para captar clientes, organizar ventas y
            operar con autoridad.
          </div>
        </div>

        <div
          style={{
            color: "#b9b1a6",
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          CRM / automatización / dashboards / conversión high-ticket
        </div>
      </div>
    ),
    size,
  );
}
