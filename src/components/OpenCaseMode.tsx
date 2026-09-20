import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { quesitiAperti } from '../data/questions'
import { criteriValutazione } from '../data/rubrica'
import type { EsitoCriterio, ProgressoSalvato } from '../types'
import { BadgeAmbito, BadgeLivello } from './Badge'
import ProgressDots, { type StatoPallino } from './ProgressDots'

interface OpenCaseModeProps {
  progresso: ProgressoSalvato
  setProgresso: Dispatch<SetStateAction<ProgressoSalvato>>
  onTornaDashboard: () => void
}

const ESITI: { chiave: EsitoCriterio; etichetta: string; classi: string }[] = [
  { chiave: 'no', etichetta: 'No', classi: 'bg-rose-100 text-rose-700 border-rose-300' },
  { chiave: 'parziale', etichetta: 'Parziale', classi: 'bg-oro-100 text-oro-700 border-oro-300' },
  { chiave: 'si', etichetta: 'Sì', classi: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
]

function OpenCaseMode({ progresso, setProgresso, onTornaDashboard }: OpenCaseModeProps) {
  const [indice, setIndice] = useState(0)
  const caso = quesitiAperti[indice]
  const salvato = progresso.aperte[caso.id]

  const [testo, setTesto] = useState(salvato?.testo ?? '')
  const [mostraConfronto, setMostraConfronto] = useState(salvato?.confrontata ?? false)

  useEffect(() => {
    setTesto(progresso.aperte[caso.id]?.testo ?? '')
    setMostraConfronto(progresso.aperte[caso.id]?.confrontata ?? false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caso.id])

  function aggiornaTesto(nuovoTesto: string) {
    setTesto(nuovoTesto)
    setProgresso((prev) => ({
      ...prev,
      aperte: {
        ...prev.aperte,
        [caso.id]: {
          testo: nuovoTesto,
          confrontata: prev.aperte[caso.id]?.confrontata ?? false,
          salvatoIl: new Date().toISOString(),
          autovalutazione: prev.aperte[caso.id]?.autovalutazione ?? {},
        },
      },
    }))
  }

  function inviaEConfronta() {
    setMostraConfronto(true)
    setProgresso((prev) => ({
      ...prev,
      aperte: {
        ...prev.aperte,
        [caso.id]: {
          testo,
          confrontata: true,
          salvatoIl: new Date().toISOString(),
          autovalutazione: prev.aperte[caso.id]?.autovalutazione ?? {},
        },
      },
    }))
  }

  function impostaAutovalutazione(indiceCriterio: number, esito: EsitoCriterio) {
    setProgresso((prev) => ({
      ...prev,
      aperte: {
        ...prev.aperte,
        [caso.id]: {
          testo: prev.aperte[caso.id]?.testo ?? testo,
          confrontata: true,
          salvatoIl: new Date().toISOString(),
          autovalutazione: {
            ...(prev.aperte[caso.id]?.autovalutazione ?? {}),
            [indiceCriterio]: esito,
          },
        },
      },
    }))
  }

  function statoPallino(i: number): StatoPallino {
    const risposta = progresso.aperte[quesitiAperti[i].id]
    return risposta?.confrontata ? 'completato' : 'non-risposto'
  }

  const autovalutazioneCorrente = progresso.aperte[caso.id]?.autovalutazione ?? {}

  return (
    <div className="flex flex-col gap-6">
      <ProgressDots
        totale={quesitiAperti.length}
        indiceCorrente={indice}
        statoPer={statoPallino}
        onSeleziona={setIndice}
      />

      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <BadgeAmbito ambito={caso.ambito} />
          <BadgeLivello livello={caso.livello} />
          <span className="ml-auto text-sm font-semibold text-slate-400">
            Caso {indice + 1} di {quesitiAperti.length}
          </span>
        </div>

        <p className="mt-5 text-base leading-relaxed text-slate-800">{caso.scenario}</p>

        <label htmlFor="risposta-utente" className="mt-6 block text-sm font-semibold text-slate-600">
          La sua strategia da Dirigente
        </label>
        <textarea
          id="risposta-utente"
          value={testo}
          onChange={(e) => aggiornaTesto(e.target.value)}
          rows={8}
          placeholder="Descriva qui, in modo strutturato, le azioni che intraprenderebbe, i riferimenti normativi richiamati e la sequenza delle priorità..."
          className="mt-2 w-full rounded-xl border border-slate-200 p-4 text-sm leading-relaxed text-slate-800 focus:border-istituzionale-400 focus:outline-none focus:ring-2 focus:ring-istituzionale-200"
        />
        <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
          <span>{testo.trim().length} caratteri</span>
        </div>

        <button
          type="button"
          className="btn-primary mt-4"
          disabled={testo.trim().length < 20}
          onClick={inviaEConfronta}
        >
          Invia e Confronta con la Risposta Modello
        </button>

        {mostraConfronto && (
          <div className="mt-8 flex flex-col gap-6 border-t border-slate-100 pt-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Risposta Modello del Dirigente Ideale
              </h3>
              <p className="mt-3 rounded-xl border border-oro-200 bg-oro-50 p-4 text-sm leading-relaxed text-slate-800">
                {caso.rispostaModello}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Griglia di valutazione del dirigente ideale
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Confronti la propria risposta con ciascun criterio e si autovaluti onestamente.
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {criteriValutazione.map((criterio, i) => (
                  <div key={criterio.titolo} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{criterio.titolo}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {criterio.descrizione}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        {ESITI.map((esito) => (
                          <button
                            key={esito.chiave}
                            type="button"
                            onClick={() => impostaAutovalutazione(i, esito.chiave)}
                            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                              autovalutazioneCorrente[i] === esito.chiave
                                ? esito.classi
                                : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50'
                            }`}
                          >
                            {esito.etichetta}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-between gap-3">
        <button
          type="button"
          className="btn-secondary"
          disabled={indice === 0}
          onClick={() => setIndice((i) => Math.max(0, i - 1))}
        >
          Precedente
        </button>
        <button type="button" className="btn-secondary" onClick={onTornaDashboard}>
          Torna alla Dashboard
        </button>
        <button
          type="button"
          className="btn-primary"
          disabled={indice === quesitiAperti.length - 1}
          onClick={() => setIndice((i) => Math.min(quesitiAperti.length - 1, i + 1))}
        >
          Successivo
        </button>
      </div>
    </div>
  )
}

export default OpenCaseMode
