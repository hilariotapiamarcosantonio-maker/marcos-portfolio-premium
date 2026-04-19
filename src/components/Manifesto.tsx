export default function Manifesto() {
  const pillars = [
    { title: "Web Premium", icon: "diamond", desc: "Interfaces diseñadas para la conversión ejecutiva." },
    { title: "Concierge IA", icon: "auto_awesome", desc: "Agentes que cualifican prospectos 24/7." },
    { title: "Flujos n8n", icon: "hub", desc: "Automatización profunda de infraestructuras." },
    { title: "Soberanía", icon: "shield", desc: "Propiedad absoluta de tus datos y sistemas." }
  ];

  return (
    <section id="manifesto" className="py-32 bg-surface-container-low border-y border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase block mb-4">Filosofía</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-tertiary mb-8">El Manifiesto de Soberanía Comercial.</h2>
          <p className="text-secondary text-lg font-light leading-relaxed">No se trata de estar en internet, se trata de poseer el ecosistema donde ocurre la transacción.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <div key={i} className="bg-surface p-8 border border-outline-variant/10 hover:border-primary/30 transition-all group">
              <h3 className="text-tertiary font-bold uppercase text-xs tracking-widest mb-4 group-hover:text-primary">{p.title}</h3>
              <p className="text-secondary text-sm font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
