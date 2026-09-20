export type StatoPallino = 'non-risposto' | 'corretto' | 'errato' | 'completato'

interface ProgressDotsProps {
  totale: number
  indiceCorrente: number
  statoPer: (indice: number) => StatoPallino
  onSeleziona: (indice: number) => void
}

const STILI: Record<StatoPallino, string> = {
  'non-risposto': 'bg-slate-200 text-slate-600 hover:bg-slate-300',
  corretto: 'bg-emerald-500 text-white',
  errato: 'bg-rose-500 text-white',
  completato: 'bg-istituzionale-600 text-white',
}

function ProgressDots({ totale, indiceCorrente, statoPer, onSeleziona }: ProgressDotsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Elenco quesiti">
      {Array.from({ length: totale }, (_, indice) => indice).map((indice) => (
        <button
          key={indice}
          type="button"
          role="tab"
          aria-selected={indice === indiceCorrente}
          aria-label={`Vai al quesito ${indice + 1}`}
          onClick={() => onSeleziona(indice)}
          className={`h-8 w-8 shrink-0 rounded-full text-xs font-bold transition-all ${STILI[statoPer(indice)]} ${
            indice === indiceCorrente ? 'ring-2 ring-istituzionale-500 ring-offset-2 scale-110' : ''
          }`}
        >
          {indice + 1}
        </button>
      ))}
    </div>
  )
}

export default ProgressDots
