import { FolderSearch, Clock, Bot, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: FolderSearch,
    title: 'Recherche instantanée',
    desc: 'Retrouvez n’importe quel document par mots-clés, idées, sujets ou questions en langage naturel.'
  },
  {
    icon: Bot,
    title: 'Compréhension contextuelle',
    desc: 'L’IA comprend le contenu, le ton et l’intention pour fournir des réponses utiles et fiables.'
  },
  {
    icon: Clock,
    title: 'Automatisation',
    desc: 'Analyse, indexation et organisation automatiques pour éliminer le travail répétitif.'
  },
  {
    icon: Shield,
    title: 'Sécurité & gouvernance',
    desc: 'Contrôle des accès et traçabilité pour une adoption sereine en entreprise.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
            <Sparkles className="h-3.5 w-3.5" />
            Valeur apportée
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Le moteur documentaire qui accélère vos équipes
          </h2>
          <p className="mt-4 text-slate-600">
            Une meilleure organisation, un accès immédiat à l’information et des réponses exploitables, partout où vous travaillez.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600 ring-1 ring-indigo-100">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-40 bg-gradient-to-b from-indigo-50 to-transparent" />
    </section>
  );
}
