"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Audit() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleAuditRequest = async () => {
    setStatus("sending");
    // Simulación de envío al backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
  };

  return (
    <section id="audit" className="py-40 bg-surface border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-surface-container-high p-12 md:p-24 text-center border border-primary/10 relative overflow-hidden"
        >
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-tertiary mb-8">
            {status === "success" ? "Protocolo Iniciado" : "¿Está su negocio listo para la soberanía?"}
          </h2>
          <p className="text-secondary font-light text-lg mb-12 max-w-2xl mx-auto">
            {status === "success" 
              ? "Hemos recibido su señal. Un Arquitecto Digital analizará su infraestructura en las próximas 24 horas." 
              : "Evaluamos su infraestructura actual y diseñamos una ruta crítica para la digitalización de alto nivel."}
          </p>
          
          <div className="flex flex-col items-center">
            <button 
              onClick={handleAuditRequest}
              disabled={status !== "idle"}
              className={`px-12 py-6 font-bold text-kern-wide uppercase text-sm bronze-glow transition-all mb-8 shadow-[0_0_30px_rgba(224,194,159,0.2)] ${status === "sending" ? "opacity-50 cursor-wait" : "hover:brightness-110 active:scale-95"}`}
            >
              {status === "idle" && "Solicitar Auditoría de Sistema"}
              {status === "sending" && "Cifrando Datos..."}
              {status === "success" && "Solicitud Enviada"}
            </button>
            <p className="text-outline text-[10px] uppercase tracking-[0.3em] font-bold">
              Protocolo de Seguridad de Grado Industrial Activo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
