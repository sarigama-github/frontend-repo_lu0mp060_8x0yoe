import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} TGA Gout — Sitio de demostración listo para reemplazar con el contenido oficial.
        </div>
      </footer>
    </div>
  )
}

export default App
