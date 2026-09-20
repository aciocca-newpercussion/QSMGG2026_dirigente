/**
 * Modello dati del simulatore dirigenziale QSMGG2026.
 */

export type Ambito =
  | 'Relazioni Sindacali e RSU'
  | 'Riorganizzazione Cancellerie e PNRR'
  | 'Rapporti Dirigente-Magistratura'
  | 'Digitalizzazione e Continuità Operativa (PCT/PDP)'
  | 'Gestione del Personale, Disciplina e Smart Working'
  | 'Anticorruzione e Trasparenza (L. 190/2012)'

export type Livello = 'Base' | 'Avanzato' | 'Alta Complessità'

export type ChiaveOpzione = 'A' | 'B' | 'C' | 'D'

export interface QuesitoMultiplo {
  id: number
  tipo: 'multiple'
  ambito: Ambito
  livello: Livello
  scenario: string
  opzioni: Record<ChiaveOpzione, string>
  rispostaCorretta: ChiaveOpzione
  spiegazioneDettagliata: string
}

export interface QuesitoAperto {
  id: number
  tipo: 'open'
  ambito: Ambito
  livello: Livello
  scenario: string
  rispostaModello: string
}

export type Quesito = QuesitoMultiplo | QuesitoAperto

/** Esito dell'autovalutazione dell'utente su un singolo criterio della griglia di valutazione. */
export type EsitoCriterio = 'no' | 'parziale' | 'si'

export interface RispostaMultiplaUtente {
  selezionata: ChiaveOpzione
  corretta: boolean
  rispostoIl: string
}

export interface RispostaApertaUtente {
  testo: string
  confrontata: boolean
  salvatoIl: string
  autovalutazione: Record<number, EsitoCriterio>
}

export interface ProgressoSalvato {
  multiple: Record<number, RispostaMultiplaUtente>
  aperte: Record<number, RispostaApertaUtente>
}
