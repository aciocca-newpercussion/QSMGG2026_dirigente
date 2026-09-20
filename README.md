# QSMGG2026_dirigente

Simulatore interattivo di quesiti situazionali di livello dirigenziale per la preparazione al concorso di **Dirigente Amministrativo** del **Dipartimento dell'Organizzazione Giudiziaria (DOG)** - Ministero della Giustizia.

L'applicazione propone 30 casi realistici sulle criticità gestionali tipiche di un ufficio giudiziario italiano, in due formati:

- **15 quesiti a scelta multipla** (A/B/C/D), con feedback immediato e spiegazione normativa dettagliata.
- **15 casi studio a risposta aperta**, con textarea per la propria strategia, confronto con una risposta modello e griglia di autovalutazione su 5 criteri.

I progressi (risposte, testi scritti, autovalutazioni) sono salvati in `localStorage`: restano sul dispositivo dell'utente, non vengono inviati ad alcun server.

## Ambiti tematici coperti

1. Relazioni Sindacali e RSU (CCNL Comparto Funzioni Centrali)
2. Riorganizzazione Cancellerie e PNRR Giustizia
3. Rapporti Dirigente-Magistratura (D.Lgs. 240/2006)
4. Digitalizzazione e Continuità Operativa (PCT/PDP)
5. Gestione del Personale, Disciplina e Smart Working
6. Anticorruzione e Trasparenza (L. 190/2012)

Ogni quesito richiama normativa reale (D.Lgs. 165/2001, D.Lgs. 240/2006, L. 190/2012, D.Lgs. 150/2009, L. 81/2017, CCNL Funzioni Centrali, ecc.) e, per i quesiti a scelta multipla, un riferimento al modello di leadership situazionale più coerente con lo scenario.

## Stack tecnico

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** come build tool
- **Tailwind CSS 3** per lo stile (palette istituzionale navy/oro)
- Nessuna dipendenza da backend: stato applicativo in React, persistenza in `localStorage`

## Struttura del progetto

```
QSMGG2026_dirigente/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/       # Componenti React (Dashboard, quiz, casi studio, UI condivisa)
│   ├── data/
│   │   ├── questions.ts  # Banca dei 30 quesiti (fonte di verità dei contenuti)
│   │   └── rubrica.ts    # Griglia di valutazione per i casi studio
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── index.ts      # Modello dati (Quesito, ProgressoSalvato, ecc.)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Avvio in locale

Richiede Node.js 18+ (verificato con Node 22).

```bash
npm install
npm run dev        # ambiente di sviluppo su http://localhost:5173
```

## Build di produzione

```bash
npm run build      # tsc --noEmit && vite build → genera /dist
npm run preview     # serve la build di produzione in locale
```

## Funzionalità principali

- **Dashboard**: panoramica progressi, punteggio scelta multipla, casi studio completati, copertura per ambito tematico, reset dei progressi.
- **Test a Scelta Multipla**: navigazione libera tra i 15 quesiti tramite indicatori di stato (non risposto / corretto / errato), feedback e spiegazione immediati dopo la selezione, riepilogo finale con punteggio per ambito e link diretto ai quesiti da rivedere.
- **Casi Studio**: textarea per la propria strategia, pulsante "Invia e Confronta con la Risposta Modello" che rivela la risposta modello e una griglia di valutazione a 5 criteri (correttezza normativa, tempestività, leadership situazionale, comunicazione istituzionale, visione strategica), con autovalutazione No/Parziale/Sì per criterio.
- **Persistenza locale**: ogni risposta, testo scritto e autovalutazione resta salvata nel browser tra una sessione e l'altra.

## Note e limiti

Questo è uno strumento didattico di autoformazione. Le risposte modello e le spiegazioni riflettono un'interpretazione ragionata della normativa vigente (D.Lgs. 165/2001, D.Lgs. 240/2006, L. 190/2012 e altre fonti citate nei singoli quesiti) a scopo di allenamento alla prova concorsuale, e **non costituiscono parere legale né posizione ufficiale del Ministero della Giustizia**. Si raccomanda di verificare sempre i riferimenti normativi sulle fonti ufficiali aggiornate.
