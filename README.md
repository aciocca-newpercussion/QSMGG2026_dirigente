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

## Deploy su Cloudflare Pages

Il repository include `.github/workflows/deploy-cloudflare.yml`: a ogni push sul branch `claude/keen-einstein-o6a9jd` builda l'app e la pubblica su Cloudflare Pages (progetto `qsmgg2026-dirigente`) tramite `wrangler pages deploy`.

Perché funzioni serve **una sola configurazione manuale**, da fare una volta sola su GitHub (nessun'altra azione richiesta in seguito):

1. Crea un token API su Cloudflare: [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens) → **Create Token** → template **"Edit Cloudflare Pages"** (permesso minimo necessario, non serve un token con accesso completo all'account).
2. Recupera il tuo **Account ID** Cloudflare (visibile nella sidebar destra di qualunque pagina del dashboard, sezione del dominio/account).
3. Su GitHub, nel repository: **Settings → Secrets and variables → Actions → New repository secret**, aggiungi:
   - `CLOUDFLARE_API_TOKEN` → il token creato al punto 1
   - `CLOUDFLARE_ACCOUNT_ID` → l'Account ID del punto 2

Al primo deploy `wrangler` crea automaticamente il progetto Pages `qsmgg2026-dirigente` se non esiste già. Il sito sarà raggiungibile su `https://qsmgg2026-dirigente.pages.dev/` (o su un dominio personalizzato, se ne colleghi uno dal dashboard Cloudflare Pages).

Per rilanciare il deploy senza un nuovo push: **Actions → Deploy su Cloudflare Pages → Run workflow**.

> Nota: in precedenza si era tentato un deploy su GitHub Pages (workflow poi rimosso), fallito perché il token di GitHub Actions non ha il permesso di amministrazione necessario per abilitare Pages per la prima volta su un repository. Cloudflare Pages non ha questo problema perché l'autenticazione è indipendente dai permessi di GitHub. Dettagli in `ERRORI.md`.

## Funzionalità principali

- **Dashboard**: panoramica progressi, punteggio scelta multipla, casi studio completati, copertura per ambito tematico, reset dei progressi.
- **Test a Scelta Multipla**: navigazione libera tra i 15 quesiti tramite indicatori di stato (non risposto / corretto / errato), feedback e spiegazione immediati dopo la selezione, riepilogo finale con punteggio per ambito e link diretto ai quesiti da rivedere.
- **Casi Studio**: textarea per la propria strategia, pulsante "Invia e Confronta con la Risposta Modello" che rivela la risposta modello e una griglia di valutazione a 5 criteri (correttezza normativa, tempestività, leadership situazionale, comunicazione istituzionale, visione strategica), con autovalutazione No/Parziale/Sì per criterio.
- **Persistenza locale**: ogni risposta, testo scritto e autovalutazione resta salvata nel browser tra una sessione e l'altra.

## Note e limiti

Questo è uno strumento didattico di autoformazione. Le risposte modello e le spiegazioni riflettono un'interpretazione ragionata della normativa vigente (D.Lgs. 165/2001, D.Lgs. 240/2006, L. 190/2012 e altre fonti citate nei singoli quesiti) a scopo di allenamento alla prova concorsuale, e **non costituiscono parere legale né posizione ufficiale del Ministero della Giustizia**. Si raccomanda di verificare sempre i riferimenti normativi sulle fonti ufficiali aggiornate.
