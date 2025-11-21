export default function Logistics() {
  return (
    <section id="logistica" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white">Logística y gestión</h2>
          <p className="mt-3 text-blue-200/80">
            Gestionamos cada envío de principio a fin con un enfoque proactivo: planificación, seguimiento y
            comunicación constante. Nuestro objetivo es que ahorres tiempo y tengas visibilidad en todo momento.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-slate-800/50 p-5">
              <h3 className="text-white font-semibold">Proceso</h3>
              <ul className="mt-2 text-blue-200/80 space-y-1 text-sm list-disc pl-5">
                <li>Análisis de requisitos y planificación</li>
                <li>Asignación del vehículo y la ruta óptima</li>
                <li>Seguimiento y comunicación durante el transporte</li>
                <li>Entrega y confirmación</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800/50 p-5">
              <h3 className="text-white font-semibold">Garantías</h3>
              <ul className="mt-2 text-blue-200/80 space-y-1 text-sm list-disc pl-5">
                <li>Mercancía siempre asegurada</li>
                <li>Compromiso de cumplimiento de plazos</li>
                <li>Protocolos de seguridad y revisión</li>
                <li>Transparencia en costes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
