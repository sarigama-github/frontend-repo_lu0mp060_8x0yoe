import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");
    try {
      // Placeholder: aquí integraríamos con el backend o email
      await new Promise((r) => setTimeout(r, 800));
      setStatus("ok");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white">Contacto</h2>
          <p className="mt-2 text-blue-200/80">Déjanos un mensaje y prepararemos la página con el contenido de tu URL.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Nombre</label>
            <input required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Email</label>
            <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Mensaje</label>
            <textarea rows={4} required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-blue-200/50" placeholder="Cuéntanos qué secciones quieres y adjunta la URL" />
          </div>
          <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600">Enviar</button>
          {status === "enviando" && <p className="text-blue-200">Enviando…</p>}
          {status === "ok" && <p className="text-green-300">Gracias. Te responderemos pronto.</p>}
          {status === "error" && <p className="text-red-300">Hubo un problema. Inténtalo de nuevo.</p>}
        </form>
      </div>
    </section>
  );
}
