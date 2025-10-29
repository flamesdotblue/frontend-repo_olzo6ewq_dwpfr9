import { Layers, ListChecks, Search, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: Layers,
    title: 'Analyse & indexation',
    desc: 'Vos documents sont automatiquement lus, résumés et indexés avec des métadonnées pertinentes.'
  },
  {
    icon: ListChecks,
    title: 'Organisation intelligente',
    desc: 'Classement dynamique par thèmes, projets, équipes et niveaux de confidentialité.'
  },
  {
    icon: Search,
    title: 'Retrouver en 1 seconde',
    desc: 'Recherchez par question ou expression naturelle, obtenez des références précises et des extraits.'
  },
  {
    icon: MessagesSquare,
    title: 'Questions & réponses',
    desc: 'Discutez avec l’assistant pour comprendre un dossier, comparer des versions ou préparer un livrable.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comment ça fonctionne</h2>
          <p className="mt-4 text-slate-600">Un flux simple, une puissance maximale. Du dépôt du document à la réponse contextualisée.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-slate-50 p-3 text-slate-700 ring-1 ring-slate-200">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="ml-3 text-xs font-semibold text-slate-400">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-[1] h-40 bg-gradient-to-t from-indigo-50 to-transparent" />
    </section>
  );
}
