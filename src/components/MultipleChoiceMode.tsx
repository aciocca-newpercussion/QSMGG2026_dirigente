import { useState, type Dispatch, type SetStateAction } from 'react'
import { quesitiMultipli } from '../data/questions'
import type { ChiaveOpzione, ProgressoSalvato } from '../types'
import { BadgeAmbito, BadgeLivello } from './Badge'
import ProgressDots, { type StatoPallino } from './ProgressDots'
import RiepilogoMultipla from './RiepilogoMultipla'

interface MultipleChoiceModeProps {
  progresso: ProgressoSalvato
  setProgresso: Dispatch<SetStateAction<ProgressoSalvato>>
  onTornaDashboard: () => void
}

const CHIAVI_OPZIONI: ChiaveOpzione[] = ['A', 'B', 'C', 'D']

function MultipleChoiceMode({ progresso, setProgresso, onTornaDashboard }: MultipleChoiceModeProps) {
  const [indice, setIndice] = useState(0)
  const [modalita, setModalita] = useState<'quiz' | 'riepilogo'>('quiz')

  const domanda = quesitiMultipli[indice]
  const rispostaSalvata = progresso.multiple[domanda.id]

  function selezionaOpzione(chiave: ChiaveOpzione) {
    if (rispostaSalvata) return
    const corretta = chiave === domanda.rispostaCorretta
    setProgresso((prev) => ({
      ...prev,
      multiple: {
        ...prev.multiple,
        [domanda.id]: { selezionata: chiave, corretta, rispostoIl: new Date().toISOString() },
      },
    }))
  }

  function statoPallino(i: number): StatoPallino {
    const risposta = progresso.multiple[quesitiMultipli[i].id]
    if (!risposta) return 'non-risposto'
    return risposta.corretta ? 'corretto' : 'errato'
  }

  function ricomincia() {
    setProgresso((prev) => {
      const multipleAggiornate = { ...prev.multiple }
      for (const q of quesitiMultipli) {
        delete multipleAggiornate[q.id]
      }
      return { ...prev, multiple: multipleAggiornate }
    })
    setIndice(0)
    setModalita('quiz')
  }

  if (modalita === 'riepilogo') {
    return (
      <RiepilogoMultipla
        domande={quesitiMultipli}
        risposte={progresso.multiple}
        onVaiA={(i) => {
          setIndice(i)
          setModalita('quiz')
        }}
        onRicomincia={ricomincia}
        onTornaDashboard={onTornaDashboard}
      />
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ProgressDots
          totale={quesitiMultipli.length}
          indiceCorrente={indice}
          statoPer={statoPallino}
          onSeleziona={setIndice}
        />
        <button type="button" className="btn-secondary" onClick={() => setModalita('riepilogo')}>
          Vai al riepilogo
        </button>
      </div>

      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <BadgeAmbito ambito={domanda.ambito} />
          <BadgeLivello livello={domanda.livello} />
          <span className="ml-auto text-sm font-semibold text-slate-400">
            Quesito {indice + 1} di {quesitiMultipli.length}
          </span>
        </div>

        <p className="mt-5 text-base leading-relaxed text-slate-800">{domanda.scenario}</p>

        <div className="mt-6 flex flex-col gap-3">
          {CHIAVI_OPZIONI.map((chiave) => {
            const isSelezionata = rispostaSalvata?.selezionata === chiave
            const isCorretta = chiave === domanda.rispostaCorretta
            const mostraEsito = Boolean(rispostaSalvata)

            let classiOpzione =
              'border-slate-200 bg-white hover:border-istituzionale-300 hover:bg-istituzionale-50'
            if (mostraEsito && isCorretta) {
              classiOpzione = 'border-emerald-400 bg-emerald-50'
            } else if (mostraEsito && isSelezionata && !isCorretta) {
              classiOpzione = 'border-rose-400 bg-rose-50'
            }

            return (
              <button
                key={chiave}
                type="button"
                onClick={() => selezionaOpzione(chiave)}
                disabled={mostraEsito}
                className={`flex items-start gap-3 rounded-xl border-2 p-4 text-left text-sm transition-colors disabled:cursor-default ${classiOpzione}`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                  {chiave}
                </span>
                <span className="text-slate-700">{domanda.opzioni[chiave]}</span>
              </button>
            )
          })}
        </div>

        {rispostaSalvata && (
          <div
            className={`mt-6 rounded-xl border p-4 text-sm leading-relaxed ${
              rispostaSalvata.corretta
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-rose-200 bg-rose-50 text-rose-900'
            }`}
          >
            <p className="mb-2 font-bold">
              {rispostaSalvata.corretta ? 'Risposta corretta.' : 'Risposta non corretta.'} Spiegazione:
            </p>
            <p>{domanda.spiegazioneDettagliata}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          className="btn-secondary"
          disabled={indice === 0}
          onClick={() => setIndice((i) => Math.max(0, i - 1))}
        >
          Precedente
        </button>
        <button
          type="button"
          className="btn-primary"
          disabled={indice === quesitiMultipli.length - 1}
          onClick={() => setIndice((i) => Math.min(quesitiMultipli.length - 1, i + 1))}
        >
          Successivo
        </button>
      </div>
    </div>
  )
}

export default MultipleChoiceMode
