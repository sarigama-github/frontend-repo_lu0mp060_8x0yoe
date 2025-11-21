import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${baseUrl}/api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Error de envío");
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="presupuesto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Solicitud de presupuesto</h2>
          <p className="mt-2 text-blue-200/80">Cuéntanos tu necesidad y te responderemos con una propuesta a medida.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Nombre</label>
              <input name="nombre" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Empresa</label>
              <input name="empresa" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Teléfono</label>
              <input name="telefono" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Origen</label>
              <input name="origen" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Destino</label>
              <input name="destino" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Tipo de mercancía</label>
              <input name="tipo_mercancia" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Peso/Volumen</label>
              <input name="peso_volumen" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Comentarios</label>
            <textarea name="comentarios" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" />
          </div>

          <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600">
            Enviar solicitud
          </button>

          {status === "enviando" && <p className="text-blue-200">Enviando…</p>}
          {status === "ok" && <p className="text-green-300">Gracias. Hemos recibido tu solicitud.</p>}
          {status === "error" && <p className="text-red-300">Hubo un problema. Inténtalo de nuevo.</p>}
        </form>
      </div>
    </section>
  );
}
