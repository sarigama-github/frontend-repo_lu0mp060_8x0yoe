export default function Services() {
  const items = [
    {
      title: "Transporte terrestre personalizado",
      desc: "Cobertura nacional e internacional. Adaptamos el vehículo y la ruta al tipo de mercancía y plazo requerido.",
    },
    {
      title: "Transporte puerta a puerta y directo",
      desc: "Coordinación integral y entrega sin trasbordos para máxima seguridad y control de tiempos.",
    },
    {
      title: "Servicio de grupaje (LTL)",
      desc: "Eficiencia para cargas parciales, optimizando costes y manteniendo tiempos pactados.",
    },
    {
      title: "Especialistas en ferias, eventos y stands",
      desc: "Gestión integral de logística ferial: montaje, desmontaje y plazos ajustados.",
    },
    {
      title: "Servicio de almacenaje",
      desc: "Capacidad en el nuevo almacén para custodiar mercancía con control y seguridad.",
    },
  ]

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Servicios</h2>
          <p className="mt-2 text-blue-200/80">
            Soluciones de transporte y logística orientadas a ahorrar tiempo y garantizar plazos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
