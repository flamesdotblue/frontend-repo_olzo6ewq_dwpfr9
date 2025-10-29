export default function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 p-1 shadow-xl ring-1 ring-black/5">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white/5 px-8 py-12 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Passez à une gestion documentaire augmentée par l’IA
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/80">
                Démontrez la valeur d’Agentice dans votre contexte: connectez vos outils (ERP, CRM, GED) et mesurez le gain de temps.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
                Demander une démo
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                Guide produit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
