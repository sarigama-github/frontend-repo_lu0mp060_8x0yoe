export default function Services() {
  const data = [
    {
      title: "Servicio 1",
      desc: "Describe aquí uno de tus servicios principales. Este texto es un marcador y puede reemplazarse por el contenido oficial.",
    },
    {
      title: "Servicio 2",
      desc: "Añade aquí detalles, beneficios y el valor que aportas a tus clientes.",
    },
    {
      title: "Servicio 3",
      desc: "Incluye precios, modalidades o tecnología utilizada si aplica.",
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Servicios</h2>
          <p className="mt-2 text-blue-200/80">
            Sección preparada para reemplazar con el contenido oficial. Comparte el texto de tu web y lo añadimos tal cual.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((card, i) => (
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
