import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import MultipleChoiceMode from './components/MultipleChoiceMode'
import OpenCaseMode from './components/OpenCaseMode'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { ProgressoSalvato } from './types'

export type Vista = 'dashboard' | 'multipla' | 'aperta'

const CHIAVE_STORAGE = 'qsmgg2026-dirigente:progresso'

const PROGRESSO_INIZIALE: ProgressoSalvato = {
  multiple: {},
  aperte: {},
}

function App() {
  const [vista, setVista] = useState<Vista>('dashboard')
  const [progresso, setProgresso] = useLocalStorage<ProgressoSalvato>(
    CHIAVE_STORAGE,
    PROGRESSO_INIZIALE,
  )

  function resetProgresso() {
    setProgresso(PROGRESSO_INIZIALE)
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header vista={vista} onNavigate={setVista} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {vista === 'dashboard' && (
          <Dashboard progresso={progresso} onNavigate={setVista} onReset={resetProgresso} />
        )}
        {vista === 'multipla' && (
          <MultipleChoiceMode
            progresso={progresso}
            setProgresso={setProgresso}
            onTornaDashboard={() => setVista('dashboard')}
          />
        )}
        {vista === 'aperta' && (
          <OpenCaseMode
            progresso={progresso}
            setProgresso={setProgresso}
            onTornaDashboard={() => setVista('dashboard')}
          />
        )}
      </main>
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        Strumento didattico di autoformazione per la preparazione dirigenziale - Dipartimento
        dell'Organizzazione Giudiziaria, Ministero della Giustizia.
        <br />
        Le risposte modello hanno finalità formativa e non costituiscono posizione ufficiale
        dell'Amministrazione né parere legale.
      </footer>
    </div>
  )
}

export default App
