export interface CriterioValutazione {
  titolo: string
  descrizione: string
}

/**
 * Griglia di valutazione unica applicata a tutti i casi studio a risposta aperta.
 * Rappresenta i cinque assi su cui un dirigente valutatore giudicherebbe la qualità
 * di una risposta situazionale, a prescindere dallo specifico ambito del quesito.
 */
export const criteriValutazione: CriterioValutazione[] = [
  {
    titolo: `Correttezza normativa`,
    descrizione: `La strategia richiama in modo pertinente le norme di riferimento (D.Lgs. 165/2001, CCNL Funzioni Centrali, L. 190/2012, normativa di settore) senza forzature né omissioni rilevanti.`,
  },
  {
    titolo: `Tempestività e concretezza`,
    descrizione: `Le azioni proposte sono concrete, sequenziate per priorità e realizzabili nei tempi imposti dalla criticità descritta nello scenario.`,
  },
  {
    titolo: `Leadership situazionale`,
    descrizione: `Lo stile di gestione delle persone adottato è coerente con il livello di competenza e di autonomia degli interlocutori coinvolti nello scenario (personale, sindacati, magistratura).`,
  },
  {
    titolo: `Comunicazione istituzionale`,
    descrizione: `È prevista una comunicazione trasparente e proporzionata verso il personale, la magistratura, l'utenza o gli organi di controllo, a seconda dei destinatari rilevanti nel caso.`,
  },
  {
    titolo: `Visione strategica e prevenzione del rischio`,
    descrizione: `La risposta non si limita a risolvere l'emergenza contingente, ma introduce misure di monitoraggio e prevenzione idonee a evitarne la ripetizione.`,
  },
]
