import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Logistics from './components/Logistics'
import About from './components/About'
import QuoteForm from './components/QuoteForm'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Legal from './components/Legal'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Logistics />
        <About />
        <QuoteForm />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-white/10">
        <Legal />
      </footer>
    </div>
  )
}

export default App
