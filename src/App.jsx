import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/40">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-500" />
            <span className="text-lg font-extrabold tracking-tight text-slate-900">Agentice</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Valeur</a>
            <a href="#" className="hover:text-slate-900">Intégrations</a>
            <a href="#" className="hover:text-slate-900">Tarifs</a>
            <a href="#cta" className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800">Demander une démo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Agentice. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">Confidentialité</a>
            <a href="#" className="hover:text-slate-900">Sécurité</a>
            <a href="#" className="hover:text-slate-900">Nous contacter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
