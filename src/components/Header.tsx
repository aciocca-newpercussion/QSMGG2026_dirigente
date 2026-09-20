import type { Vista } from '../App'

interface HeaderProps {
  vista: Vista
  onNavigate: (vista: Vista) => void
}

const VOCI_NAV: { chiave: Vista; etichetta: string }[] = [
  { chiave: 'dashboard', etichetta: 'Dashboard' },
  { chiave: 'multipla', etichetta: 'Scelta Multipla' },
  { chiave: 'aperta', etichetta: 'Casi Studio' },
]

function Header({ vista, onNavigate }: HeaderProps) {
  return (
    <header className="bg-istituzionale-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <button type="button" onClick={() => onNavigate('dashboard')} className="text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-oro-400">
            QSMGG2026 · Ministero della Giustizia
          </p>
          <h1 className="text-xl font-bold leading-tight sm:text-2xl">Simulatore Dirigenziale DOG</h1>
        </button>
        <nav className="flex flex-wrap gap-2">
          {VOCI_NAV.map((voce) => (
            <button
              key={voce.chiave}
              type="button"
              onClick={() => onNavigate(voce.chiave)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                vista === voce.chiave
                  ? 'bg-white text-istituzionale-900'
                  : 'text-slate-200 hover:bg-istituzionale-800'
              }`}
            >
              {voce.etichetta}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
