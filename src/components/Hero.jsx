import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Agentice — Assistant documentaire IA
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Classez, retrouvez et comprenez vos documents en un instant
            </h1>
            <p className="mt-5 text-lg leading-7 text-slate-600 md:text-xl">
              Notre assistant analyse, indexe et organise automatiquement vos fichiers. Posez une question, demandez un document précis — il s’occupe du reste.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Demander une démo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                En savoir plus
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Intégrable à vos outils (ERP, CRM, GED)
              </div>
              <div className="hidden md:block">•</div>
              <div>Gain de temps et suppression du travail répétitif</div>
            </div>
          </div>

          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200/60 shadow-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* subtle gradient glow overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />
            </div>
          </div>
        </div>
      </div>

      {/* background decorative gradient */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2 blur-3xl">
        <div className="h-64 w-[42rem] rounded-full bg-gradient-to-tr from-indigo-400/30 via-fuchsia-400/20 to-amber-300/20" />
      </div>
    </section>
  );
}
