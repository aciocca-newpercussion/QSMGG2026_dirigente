import type { QuesitoMultiplo, RispostaMultiplaUtente } from '../types'
import { elencoAmbiti } from '../data/questions'

interface RiepilogoMultiplaProps {
  domande: QuesitoMultiplo[]
  risposte: Record<number, RispostaMultiplaUtente>
  onVaiA: (indice: number) => void
  onRicomincia: () => void
  onTornaDashboard: () => void
}

function RiepilogoMultipla({
  domande,
  risposte,
  onVaiA,
  onRicomincia,
  onTornaDashboard,
}: RiepilogoMultiplaProps) {
  const risposte_totali = Object.keys(risposte).length
  const corrette = Object.values(risposte).filter((r) => r.corretta).length
  const percentuale = risposte_totali > 0 ? Math.round((corrette / risposte_totali) * 100) : 0

  const domandeErrate = domande.filter((d) => risposte[d.id] && !risposte[d.id].corretta)

  function gestisciRicomincia() {
    if (window.confirm('Ricominciare il test da capo? Le risposte già date a questo test andranno perse.')) {
      onRicomincia()
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Riepilogo Test a Scelta Multipla
        </p>
        <p className="mt-2 text-4xl font-bold text-istituzionale-900">
          {corrette} / {domande.length}
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {risposte_totali} quesiti completati su {domande.length} · {percentuale}% di risposte corrette
        </p>
      </div>

      <div className="card p-6">
        <h3 className="text-base font-bold text-istituzionale-900">Esito per ambito tematico</h3>
        <div className="mt-4 flex flex-col divide-y divide-slate-100">
          {elencoAmbiti.map((ambito) => {
            const domandeAmbito = domande.filter((d) => d.ambito === ambito)
            if (domandeAmbito.length === 0) return null
            const corretteAmbito = domandeAmbito.filter((d) => risposte[d.id]?.corretta).length
            return (
              <div key={ambito} className="flex items-center justify-between py-2 text-sm">
                <span className="text-slate-700">{ambito}</span>
                <span className="font-semibold text-slate-600">
                  {corretteAmbito} / {domandeAmbito.length}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {domandeErrate.length > 0 && (
        <div className="card p-6">
          <h3 className="text-base font-bold text-istituzionale-900">Quesiti da rivedere</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {domandeErrate.map((domanda) => {
              const indice = domande.findIndex((d) => d.id === domanda.id)
              return (
                <li key={domanda.id}>
                  <button
                    type="button"
                    onClick={() => onVaiA(indice)}
                    className="w-full rounded-lg border border-rose-200 bg-rose-50 p-3 text-left text-sm text-rose-800 hover:bg-rose-100"
                  >
                    <span className="font-semibold">Quesito {indice + 1}</span> · {domanda.ambito}
                    <br />
                    <span className="line-clamp-2 text-rose-700/80">{domanda.scenario}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-3">
        <button type="button" className="btn-secondary" onClick={onTornaDashboard}>
          Torna alla Dashboard
        </button>
        <button type="button" className="btn-primary" onClick={gestisciRicomincia}>
          Ricomincia il test
        </button>
      </div>
    </div>
  )
}

export default RiepilogoMultipla
