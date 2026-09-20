import type { Vista } from '../App'
import type { ProgressoSalvato } from '../types'
import { elencoAmbiti, quesiti, quesitiAperti, quesitiMultipli } from '../data/questions'

interface DashboardProps {
  progresso: ProgressoSalvato
  onNavigate: (vista: Vista) => void
  onReset: () => void
}

function Dashboard({ progresso, onNavigate, onReset }: DashboardProps) {
  const multiRisposte = Object.keys(progresso.multiple).length
  const multiCorrette = Object.values(progresso.multiple).filter((r) => r.corretta).length
  const percentualeMulti =
    multiRisposte > 0 ? Math.round((multiCorrette / multiRisposte) * 100) : 0

  const apertiCompletati = Object.values(progresso.aperte).filter((r) => r.confrontata).length

  function gestisciReset() {
    if (window.confirm('Vuoi davvero azzerare tutti i progressi salvati? L\'operazione non è reversibile.')) {
      onReset()
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="card overflow-hidden bg-gradient-to-br from-istituzionale-900 via-istituzionale-800 to-istituzionale-700 p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-oro-400">
          Concorso Dirigente Amministrativo · DOG
        </p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Simulatore di quesiti situazionali dirigenziali
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
          {quesiti.length} quesiti reali sulle criticità gestionali degli uffici giudiziari:
          relazioni sindacali, riorganizzazione PNRR, rapporti con la magistratura,
          continuità operativa dei sistemi telematici, gestione del personale e prevenzione
          della corruzione.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {elencoAmbiti.map((ambito) => (
            <span
              key={ambito}
              className="badge border border-white/20 bg-white/10 text-white"
            >
              {ambito}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="card flex flex-col justify-between p-6">
          <div>
            <h3 className="text-lg font-bold text-istituzionale-900">Test a Scelta Multipla</h3>
            <p className="mt-1 text-sm text-slate-500">
              {quesitiMultipli.length} quesiti · feedback immediato con spiegazione normativa
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                <span>
                  {multiRisposte} / {quesitiMultipli.length} completati
                </span>
                {multiRisposte > 0 && (
                  <span className="text-istituzionale-700">{percentualeMulti}% corrette</span>
                )}
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-istituzionale-600 transition-all"
                  style={{ width: `${(multiRisposte / quesitiMultipli.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn-primary mt-6" onClick={() => onNavigate('multipla')}>
            {multiRisposte > 0 ? 'Continua il test' : 'Inizia il test'}
          </button>
        </div>

        <div className="card flex flex-col justify-between p-6">
          <div>
            <h3 className="text-lg font-bold text-istituzionale-900">Casi Studio a Risposta Aperta</h3>
            <p className="mt-1 text-sm text-slate-500">
              {quesitiAperti.length} scenari complessi · confronto con la risposta modello
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                <span>
                  {apertiCompletati} / {quesitiAperti.length} confrontati
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-oro-500 transition-all"
                  style={{ width: `${(apertiCompletati / quesitiAperti.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn-primary mt-6" onClick={() => onNavigate('aperta')}>
            {apertiCompletati > 0 ? 'Continua i casi studio' : 'Inizia i casi studio'}
          </button>
        </div>
      </section>

      <section className="card p-6">
        <h3 className="text-lg font-bold text-istituzionale-900">Copertura per ambito tematico</h3>
        <div className="mt-4 flex flex-col divide-y divide-slate-100">
          {elencoAmbiti.map((ambito) => {
            const domandeAmbito = quesiti.filter((q) => q.ambito === ambito)
            const risposteAmbito = domandeAmbito.filter((q) =>
              q.tipo === 'multiple' ? progresso.multiple[q.id] : progresso.aperte[q.id],
            ).length

            return (
              <div key={ambito} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-slate-700">{ambito}</span>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-istituzionale-500"
                      style={{ width: `${(risposteAmbito / domandeAmbito.length) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-xs font-semibold text-slate-500">
                    {risposteAmbito} / {domandeAmbito.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="flex justify-end">
        <button type="button" onClick={gestisciReset} className="btn-secondary text-rose-600">
          Azzera tutti i progressi
        </button>
      </div>
    </div>
  )
}

export default Dashboard
