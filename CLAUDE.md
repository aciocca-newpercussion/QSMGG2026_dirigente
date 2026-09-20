# CLAUDE.md

Guida per sessioni future di Claude Code (o altri agenti) che lavorano su questo repository.

## Cos'è questo progetto

Web app React + TypeScript + Vite + Tailwind, senza backend. Simulatore di quesiti situazionali per la preparazione al concorso di Dirigente Amministrativo del DOG (Ministero della Giustizia). Tutto lo stato applicativo vive in memoria React e viene persistito in `localStorage` tramite `src/hooks/useLocalStorage.ts`.

## Comandi utili

```bash
npm install
npm run dev        # sviluppo
npm run build      # tsc --noEmit && vite build (fallisce se ci sono errori TypeScript)
npm run preview    # serve /dist in locale
npm run typecheck  # solo controllo tipi, senza build
```

`tsconfig.json` è un unico file (include sia `src/` sia `vite.config.ts`) con `strict`, `noUnusedLocals` e `noUnusedParameters` attivi: un import o parametro inutilizzato rompe la build. Deliberatamente **non** si usa la modalità a progetti composti (`tsc -b` con `tsconfig.node.json` separato): per un'app di queste dimensioni aggiungeva solo complessità e ha causato in fase di prima stesura un errore reale (vedi `ERRORI.md`, punto 6) risolto tornando a un singolo tsconfig con `noEmit`.

## Dove vive il contenuto (dominio "quesiti")

- `src/types/index.ts` - unica fonte di verità per i tipi `Quesito` (discriminated union `QuesitoMultiplo | QuesitoAperto` su `tipo`), `Ambito`, `Livello`, `ProgressoSalvato`.
- `src/data/questions.ts` - array `quesiti: Quesito[]` con i 30 quesiti (id 1-15 scelta multipla, id 16-30 risposta aperta). Esporta anche `quesitiMultipli`, `quesitiAperti` (filtrati con type guard) ed `elencoAmbiti` (derivato, non hardcoded).
- `src/data/rubrica.ts` - i 5 criteri della griglia di valutazione mostrata nei casi studio, condivisi da tutti i quesiti aperti (non ce n'è uno diverso per quesito).

**Per aggiungere un nuovo quesito**: aggiungerlo all'array in `questions.ts` con un `id` univoco progressivo, rispettando la forma `QuesitoMultiplo` (4 opzioni A-D, `rispostaCorretta`, `spiegazioneDettagliata` che cita normativa + stile di leadership situazionale) o `QuesitoAperto` (`rispostaModello` di 6-8 righe). Nessun altro file va toccato: `quesitiMultipli`/`quesitiAperti`/`elencoAmbiti` sono derivati automaticamente. Se si aggiunge un nuovo `Ambito`, estendere l'union type in `types/index.ts`.

**Bilanciamento delle risposte corrette**: nei quesiti a scelta multipla la lettera corretta (A/B/C/D) è distribuita in modo bilanciato (attualmente A×4, B×4, C×4, D×3) per evitare pattern individuabili dall'utente. Se si aggiungono nuovi quesiti a scelta multipla, mantenere questo bilanciamento e verificare che i riferimenti alle opzioni dentro `spiegazioneDettagliata` (es. "opzione B") corrispondano davvero alla lettera assegnata a quell'opzione nell'oggetto `opzioni`.

## Architettura dei componenti

- `App.tsx` tiene lo stato di navigazione (`Vista = 'dashboard' | 'multipla' | 'aperta'`, **non** persistito) e lo stato `progresso: ProgressoSalvato` (persistito via `useLocalStorage`), passato in props a cascata. Non c'è router: la navigazione è uno `useState` semplice, intenzionale per un'app a 3 viste.
- `MultipleChoiceMode.tsx` gestisce la navigazione tra i 15 quesiti e delega il riepilogo finale a `RiepilogoMultipla.tsx`.
- `OpenCaseMode.tsx` gestisce testo utente, confronto con risposta modello e autovalutazione sulla griglia di `rubrica.ts`.
- `ProgressDots.tsx` e `Badge.tsx` sono condivisi tra le due modalità.
- Le classi utility ripetute (bottoni, card, badge) sono centralizzate in `src/index.css` sotto `@layer components` (`.btn-primary`, `.btn-secondary`, `.card`, `.badge`, ecc.) invece di essere duplicate nei componenti.

## Convenzioni

- Identificatori di dominio (variabili, funzioni, props relative ai quesiti) in italiano, coerentemente con il contenuto dell'app (`quesito`, `risposta`, `progresso`, `ambito`...). Le convenzioni React/TS standard (nomi di componenti, hook, tipi generici) restano in inglese.
- Nessun router, nessuno state manager esterno: per un'app di 3 viste con un solo oggetto di stato condiviso sarebbe over-engineering.
- Font Inter caricato da Google Fonts in `index.html` con fallback `system-ui` nello stack di `tailwind.config.js`: se Google Fonts non è raggiungibile (reti aziendali, sandbox), l'app resta pienamente funzionale con il fallback di sistema.

## Deploy

Pubblicato automaticamente su **Cloudflare Pages** (non GitHub Pages: tentativo abbandonato, vedi `ERRORI.md` punto 7) tramite `.github/workflows/deploy-cloudflare.yml`, a ogni push su `claude/keen-einstein-o6a9jd`. Richiede i repository secret `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`, impostati manualmente dal proprietario (istruzioni in `README.md`). `vite.config.ts` **non** deve avere un `base` diverso da `/`: Cloudflare Pages serve dalla radice del proprio dominio, non da un sottopercorso.

## Verifica prima di ogni modifica strutturale

1. `npm run build` deve restare pulito (zero errori TypeScript).
2. Se si modifica `MultipleChoiceMode.tsx` o `OpenCaseMode.tsx`, testare manualmente (o con Playwright, browser Chromium già presente nell'ambiente sandbox in `/opt/pw-browsers`) il flusso: Dashboard → selezione modalità → risposta → feedback/confronto → riepilogo → reload della pagina per verificare che `localStorage` mantenga i dati.
3. Vedere `ERRORI.md` per i problemi già incontrati (e come sono stati risolti) prima di ripetere lo stesso debug.
