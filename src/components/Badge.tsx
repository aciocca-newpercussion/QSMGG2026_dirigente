import type { Livello } from '../types'

const STILI_LIVELLO: Record<Livello, string> = {
  Base: 'bg-slate-100 text-slate-700',
  Avanzato: 'bg-istituzionale-100 text-istituzionale-800',
  'Alta Complessità': 'bg-oro-100 text-oro-700',
}

export function BadgeLivello({ livello }: { livello: Livello }) {
  return <span className={`badge ${STILI_LIVELLO[livello]}`}>{livello}</span>
}

export function BadgeAmbito({ ambito }: { ambito: string }) {
  return (
    <span className="badge border border-istituzionale-200 bg-istituzionale-50 text-istituzionale-700">
      {ambito}
    </span>
  )
}
