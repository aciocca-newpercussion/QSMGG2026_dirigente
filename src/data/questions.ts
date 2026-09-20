import type { Quesito, QuesitoMultiplo, QuesitoAperto, Ambito } from '../types'

/**
 * Banca di 60 quesiti situazionali di livello dirigenziale per il Dipartimento
 * dell'Organizzazione Giudiziaria (DOG) - Ministero della Giustizia.
 *
 * 30 quesiti a scelta multipla (id 1-15 e 31-45) + 30 quesiti a risposta aperta
 * (id 16-30 e 46-60), distribuiti su dodici ambiti critici della dirigenza
 * amministrativa giudiziaria: sei di gestione organizzativa/relazionale (ambiti 1-6)
 * e sei di contabilità pubblica applicata agli uffici giudiziari (ambiti 7-12).
 */
export const quesiti: Quesito[] = [
  // ============================================================
  // AMBITO 1 - Relazioni Sindacali e RSU (CCNL Funzioni Centrali)
  // ============================================================
  {
    id: 1,
    tipo: 'multiple',
    ambito: 'Relazioni Sindacali e RSU',
    livello: 'Avanzato',
    scenario: `Lei è appena stato nominato Dirigente Amministrativo di un Tribunale di medie dimensioni. La RSU d'ufficio le comunica, tramite nota formale, l'intenzione di modificare unilateralmente - a partire dal mese successivo - i turni di apertura al pubblico degli sportelli di cancelleria, sostenendo che la materia rientri nella "gestione ordinaria" già concordata informalmente con il suo predecessore. Lei ritiene che la nuova turnazione proposta comprometta gli standard di servizio verso l'utenza e l'avvocatura. Come agisce?`,
    opzioni: {
      A: `Ricorda formalmente alla RSU che l'organizzazione degli uffici e la gestione dei turni rientrano nei poteri esclusivi del dirigente quale datore di lavoro pubblico (art. 5, comma 2, D.Lgs. 165/2001); attiva comunque un confronto informativo con la RSU nelle forme previste dal CCNL Funzioni Centrali prima di assumere la decisione finale, motivandola sulla base delle esigenze di servizio.`,
      B: `Accetta la proposta della RSU per mantenere buone relazioni sindacali, rinviando la valutazione degli effetti a un secondo momento.`,
      C: `Sospende ogni decisione fino a quando la questione non sarà rimessa alla valutazione del Presidente del Tribunale.`,
      D: `Rifiuta ogni interlocuzione con la RSU, comunicando la propria turnazione tramite ordine di servizio immediatamente esecutivo, senza informativa preventiva.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `L'art. 5, comma 2, del D.Lgs. 165/2001 attribuisce in via esclusiva al dirigente pubblico, quale datore di lavoro, le determinazioni per l'organizzazione degli uffici e la gestione dei rapporti di lavoro, adottate con la capacità e i poteri del privato datore di lavoro. Questo non esclude, anzi presuppone, il rispetto del sistema di relazioni sindacali previsto dal CCNL Comparto Funzioni Centrali (informazione e confronto), che tuttavia non trasforma la turnazione in materia di contrattazione integrativa vincolante: l'accordo informale del predecessore non può sostituirsi al potere organizzativo del dirigente in carica né essere invocato come diritto acquisito dalla RSU. La risposta corretta (A) coniuga legittimità e correttezza relazionale, evitando sia l'appiattimento immotivato (opzione B) sia l'inerzia decisionale che scarica la responsabilità su un soggetto privo di competenza gestionale sul personale (opzione C), sia l'autoritarismo privo di informativa preventiva (opzione D). Sul piano della leadership situazionale (modello Hersey-Blanchard), lo stile più adeguato in una fase di primo insediamento con un interlocutore sindacale strutturato è "partecipativo/di supporto": coinvolge senza abdicare alla responsabilità decisionale finale.`,
  },
  {
    id: 2,
    tipo: 'multiple',
    ambito: 'Relazioni Sindacali e RSU',
    livello: 'Avanzato',
    scenario: `In un Tribunale, la RSU proclama uno stato di agitazione del personale di cancelleria lamentando carichi di lavoro insostenibili dopo la redistribuzione delle competenze legata al nuovo Ufficio per il Processo. Alcuni dipendenti minacciano assenze collettive per malattia non certificate come sciopero. Quale approccio dovrebbe adottare il Dirigente nella fase immediata?`,
    opzioni: {
      A: `Ignorare la proclamazione, ritenendo che la materia dei carichi di lavoro non riguardi le relazioni sindacali.`,
      B: `Attivare tempestivamente il confronto con la RSU nelle forme previste dal sistema di relazioni sindacali del CCNL, disponendo nel frattempo una ricognizione oggettiva dei carichi di lavoro per sezione, e valutare eventuali misure organizzative correttive nell'ambito dei propri poteri gestionali.`,
      C: `Avviare immediatamente un procedimento disciplinare nei confronti dei firmatari della proclamazione per condotta antisindacale nei suoi confronti.`,
      D: `Delegare integralmente la gestione della vertenza al Presidente del Tribunale, in quanto capo dell'ufficio giudiziario.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `Di fronte a una tensione sindacale motivata da carichi di lavoro, il primo dovere del dirigente è istruttorio e relazionale insieme: verificare oggettivamente i dati e attivare il confronto previsto dal CCNL Funzioni Centrali, sede propria per discutere criteri generali di organizzazione del lavoro, fermo restando che le decisioni gestionali finali restano di competenza dirigenziale ex artt. 5, comma 2, e 17 D.Lgs. 165/2001. Reagire in chiave disciplinare (opzione C) sarebbe sproporzionato e rischierebbe di configurare una condotta antisindacale ex art. 28 Legge 300/1970; ignorare la protesta (A) o scaricarla sul capo dell'ufficio giudiziario, privo di competenza gestionale sul personale amministrativo ai sensi del D.Lgs. 240/2006 (D), sono altrettanto inadeguate. In termini di leadership situazionale, un gruppo che manifesta disagio ma resta professionalmente competente richiede uno stile "di supporto/partecipativo", basato sull'ascolto attivo e su decisioni condivise quanto al metodo.`,
  },
  {
    id: 3,
    tipo: 'multiple',
    ambito: 'Relazioni Sindacali e RSU',
    livello: 'Base',
    scenario: `In vista del rinnovo delle rappresentanze sindacali, insorge un contrasto tra due componenti della RSU sulla legittimità a partecipare al tavolo di contrattazione integrativa locale per la ripartizione del fondo per le risorse decentrate. Il Dirigente deve garantire la regolarità del procedimento negoziale. Qual è il comportamento più corretto?`,
    opzioni: {
      A: `Scegliere discrezionalmente quale componente della RSU invitare al tavolo, in base ai rapporti personali pregressi.`,
      B: `Sospendere sine die la contrattazione integrativa fino alla risoluzione politica del conflitto tra le sigle sindacali.`,
      C: `Verificare formalmente, sulla base della disciplina legale e contrattuale sulla composizione e rappresentatività delle RSU/RSA, chi siano i soggetti legittimati al tavolo, garantendo correttezza procedurale e parità di trattamento tra le organizzazioni sindacali, eventualmente con il supporto tecnico dell'ufficio del personale.`,
      D: `Procedere alla ripartizione del fondo senza alcun confronto sindacale, trattandosi di materia di stretta competenza dirigenziale.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `Il dirigente, nella conduzione delle relazioni sindacali, è tenuto a garantire la correttezza procedimentale e il rispetto delle regole legali (L. 300/1970) e contrattuali sulla rappresentatività sindacale, senza sostituirsi con proprie valutazioni discrezionali ai criteri legali di legittimazione (opzione A, arbitraria) né bloccare un adempimento dovuto come la contrattazione sul fondo (opzione B). La ripartizione del fondo risorse decentrate rientra tra le materie di contrattazione integrativa ai sensi dell'art. 40 D.Lgs. 165/2001 e del CCNL Funzioni Centrali, quindi non può essere definita unilateralmente omettendo il confronto negoziale (opzione D). La soluzione C è coerente con il principio di imparzialità che deve guidare l'azione del dirigente pubblico, anche alla luce del Codice di comportamento (DPR 62/2013). In chiave di leadership situazionale, il dirigente assume qui uno stile "direttivo-regolatore": non decide il merito politico-sindacale, ma dirige con fermezza il rispetto delle regole del gioco, funzione ineludibile della sua terzietà datoriale.`,
  },

  // ==================================================================
  // AMBITO 2 - Riorganizzazione Cancellerie e PNRR
  // ==================================================================
  {
    id: 4,
    tipo: 'multiple',
    ambito: 'Riorganizzazione Cancellerie e PNRR',
    livello: 'Avanzato',
    scenario: `Il Tribunale è in ritardo sul target PNRR di riduzione dell'arretrato civile (Fase 2). L'analisi dei dati mostra che due sezioni civili concentrano il 70% delle pendenze ultra-triennali, mentre altre sezioni sono sotto carico. Il Dirigente deve proporre una redistribuzione del personale di cancelleria. Qual è il criterio metodologico prioritario?`,
    opzioni: {
      A: `Redistribuire il personale in base all'anzianità di servizio, spostando prima i dipendenti più giovani.`,
      B: `Attendere le indicazioni dirette del Ministero prima di assumere qualunque iniziativa organizzativa locale.`,
      C: `Assegnare la redistribuzione esclusivamente sulla base delle richieste dirette dei singoli magistrati interessati.`,
      D: `Effettuare una ricognizione oggettiva dei carichi di lavoro e delle pendenze per sezione, anche con il supporto dei dati statistici ministeriali e dell'Ufficio per il Processo; condividere l'analisi con i presidenti di sezione nell'ambito della leale collaborazione con la magistratura, e proporre una redistribuzione temporanea e motivata, monitorandone gli effetti nel tempo.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `La riorganizzazione dei carichi di lavoro rientra nei poteri gestionali propri del dirigente amministrativo (artt. 5, comma 2, e 16 D.Lgs. 165/2001), da esercitarsi però con metodo: dati oggettivi, non criteri proxy come l'anzianità (opzione A), che non ha alcuna attinenza con il carico di lavoro effettivo. Il dirigente non può rimanere passivamente in attesa di indicazioni centrali per un problema di gestione locale (opzione B), né recepire in modo frammentato le richieste dei singoli magistrati senza una regia unitaria (opzione C), che comprometterebbe la coerenza complessiva della riorganizzazione. La soluzione D rispetta anche il riparto di competenze con la magistratura definito dal D.Lgs. 240/2006, che impone il coordinamento con i presidenti di sezione sull'organizzazione dei servizi. Il monitoraggio periodico degli effetti è essenziale per un ciclo di gestione della performance coerente con il D.Lgs. 150/2009. In chiave di leadership situazionale, il dirigente esprime qui uno stile "direttivo con alto contenuto informativo": la decisione è sua, ma va costruita su dati condivisi per essere accettata dal corpo sociale dell'ufficio.`,
  },
  {
    id: 5,
    tipo: 'multiple',
    ambito: 'Riorganizzazione Cancellerie e PNRR',
    livello: 'Base',
    scenario: `L'Ufficio per il Processo (UPP) del Tribunale è composto in gran parte da funzionari assunti a tempo determinato nell'ambito del PNRR, i cui contratti sono in scadenza nei prossimi mesi. Il Dirigente deve pianificare la continuità dei servizi e la valorizzazione delle competenze acquisite. Qual è l'approccio più corretto?`,
    opzioni: {
      A: `Avviare per tempo una ricognizione delle competenze acquisite dal personale UPP, predisporre un piano di trasferimento del know-how verso il personale di ruolo (procedure, prassi, strumenti digitali), monitorare gli sviluppi normativi su proroghe/stabilizzazioni e attivarsi presso i canali ministeriali competenti per rappresentare tempestivamente il fabbisogno dell'ufficio.`,
      B: `Non pianificare nulla in anticipo, poiché la proroga o la stabilizzazione dei contratti dipende da decisioni centrali del Ministero.`,
      C: `Assumere direttamente nuovo personale a tempo indeterminato senza attendere le procedure concorsuali ministeriali.`,
      D: `Concentrare tutte le attività critiche esclusivamente sul personale UPP fino all'ultimo giorno utile, rinviando ogni pianificazione della transizione.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `Anche quando la decisione ultima su proroghe/stabilizzazioni esula dai poteri del singolo ufficio, il dirigente ha il dovere gestionale di anticipare i rischi organizzativi (continuità del servizio, perdita di competenze) attivando per tempo strumenti di mitigazione, in coerenza con i principi di buon andamento sottesi al D.Lgs. 165/2001 (artt. 5 e 16) e con gli obiettivi di risultato del PNRR Giustizia. L'inerzia (opzione B) o il rinvio totale della pianificazione (opzione D) espongono l'ufficio a un rischio organizzativo grave e prevedibile; l'opzione C è illegittima poiché le assunzioni nella pubblica amministrazione seguono procedure concorsuali vincolate. Il trasferimento di competenze (know-how transfer) è una leva gestionale chiave nel contesto del turnover PNRR. In chiave di leadership situazionale, il dirigente adotta qui uno stile "di coaching": investe nella crescita delle competenze del personale di ruolo per rendere l'organizzazione resiliente a prescindere dagli sviluppi contrattuali del personale a tempo determinato.`,
  },

  // ==================================================================
  // AMBITO 3 - Rapporti Dirigente-Magistratura
  // ==================================================================
  {
    id: 6,
    tipo: 'multiple',
    ambito: 'Rapporti Dirigente-Magistratura',
    livello: 'Avanzato',
    scenario: `Il Presidente di una sezione civile richiede al Dirigente che un funzionario di cancelleria, formalmente assegnato al servizio centrale, risponda esclusivamente e direttamente a lui per l'organizzazione del proprio lavoro quotidiano, bypassando la linea gerarchica amministrativa. Come si comporta il Dirigente?`,
    opzioni: {
      A: `Accoglie integralmente la richiesta, ritenendo prevalente in ogni caso l'autorità del magistrato capo sezione.`,
      B: `Riconosce al Presidente di sezione un ruolo di interlocuzione sui profili organizzativi dell'attività giurisdizionale della sezione (assegnazione dei fascicoli, esigenze di udienza), ma ribadisce che la gestione del rapporto di lavoro e l'organizzazione gerarchica del personale amministrativo restano di competenza del dirigente ai sensi del D.Lgs. 165/2001 e del D.Lgs. 240/2006, proponendo un modulo di coordinamento stabile e reciprocamente rispettoso dei ruoli.`,
      C: `Rifiuta ogni forma di collaborazione diretta tra il funzionario e il Presidente di sezione, imponendo che ogni comunicazione passi esclusivamente attraverso il dirigente.`,
      D: `Rimette la decisione al Consiglio Superiore della Magistratura.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `Il D.Lgs. 240/2006 distingue con chiarezza le competenze gestionali sul personale amministrativo, riservate al dirigente (che le esercita con i poteri del privato datore di lavoro ex art. 5, comma 2, D.Lgs. 165/2001), dalle prerogative organizzative dell'attività giurisdizionale, che restano in capo al capo dell'ufficio/presidente di sezione. Una prassi che sottragga di fatto il personale alla linea gerarchica amministrativa, per quanto animata da esigenze condivisibili, non è conforme a questo riparto e rischia di generare una doppia catena di comando. La risposta corretta (B) valorizza il coordinamento istituzionale, anche attraverso la Conferenza permanente per il funzionamento degli uffici giudiziari (art. 15, D.Lgs. 240/2006), senza rinunciare alla titolarità datoriale né irrigidirsi in una chiusura comunicativa controproducente (opzione C). L'opzione A abdica indebitamente alle proprie responsabilità gestionali; l'opzione D eccede la competenza dell'organo di autogoverno per una questione di ordinaria gestione locale. In chiave di leadership situazionale, il dirigente utilizza qui uno stile "negoziale/integrativo", tipico della gestione di stakeholder con potere formale distinto ma interessi convergenti sul buon funzionamento dell'ufficio.`,
  },
  {
    id: 7,
    tipo: 'multiple',
    ambito: 'Rapporti Dirigente-Magistratura',
    livello: 'Avanzato',
    scenario: `Il Presidente del Tribunale ritiene prioritario l'acquisto di nuovi arredi per le aule di udienza, mentre il Dirigente, sulla base delle segnalazioni di rischio ricevute, ritiene urgente destinare le risorse limitate disponibili alla sostituzione di apparecchiature informatiche obsolete che compromettono la funzionalità del PCT. Come gestisce il Dirigente la divergenza?`,
    opzioni: {
      A: `Decide autonomamente e comunica la propria scelta come già definitiva, senza ulteriore confronto.`,
      B: `Si conforma comunque alla richiesta del Presidente per evitare conflitti istituzionali, anche se ciò espone l'ufficio al rischio di blocco operativo.`,
      C: `Rappresenta al Presidente, con dati e analisi di rischio a supporto, le ragioni di priorità gestionale legate alla continuità operativa dei sistemi telematici, ricerca una soluzione condivisa anche valutando una ripartizione o scaglionamento della spesa, ma nell'esercizio della propria competenza gestionale sulla spesa e sui beni strumentali assume la decisione finale motivandola.`,
      D: `Rinvia la decisione fino al successivo esercizio finanziario per evitare di scontentare una delle due parti.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `La gestione delle risorse finanziarie e dei beni strumentali rientra tra le competenze gestionali del dirigente amministrativo (artt. 4, 5 e 17 D.Lgs. 165/2001), che opera tuttavia in un contesto di leale collaborazione istituzionale con il capo dell'ufficio giudiziario, cui va comunque riconosciuto un ruolo di interlocuzione sulle esigenze legate al funzionamento dell'attività giurisdizionale. La decisione finale, se motivata su basi oggettive di rischio e continuità del servizio, spetta al dirigente, che non può abdicare alla propria responsabilità gestionale per mero quieto vivere (opzione B) né procrastinare scelte urgenti (opzione D), ma neppure imporle senza un tentativo di confronto preventivo (opzione A), che comprometterebbe inutilmente il rapporto istituzionale. La priorità sulla continuità operativa dei sistemi telematici è inoltre coerente con gli obiettivi di digitalizzazione del PNRR Giustizia. In chiave di leadership situazionale, il dirigente adotta uno stile "persuasivo": spiega e argomenta la propria decisione tecnica per ottenere condivisione, pur mantenendo la titolarità della scelta finale.`,
  },
  {
    id: 8,
    tipo: 'multiple',
    ambito: 'Rapporti Dirigente-Magistratura',
    livello: 'Base',
    scenario: `Il Presidente di una sezione lamenta con il Dirigente ripetuti errori di un cancelliere addetto alle udienze nella redazione dei verbali, chiedendo che venga immediatamente rimosso dall'incarico e sostituito con un dipendente di sua diretta scelta personale, al di fuori dei criteri di turnazione e delle competenze professionali definiti dall'ufficio. Come risponde il Dirigente?`,
    opzioni: {
      A: `Accoglie integralmente e senza verifica la richiesta del Presidente, sostituendo immediatamente il cancelliere con la persona indicata.`,
      B: `Rifiuta ogni interlocuzione, ritenendo la segnalazione del Presidente irricevibile poiché proveniente da un soggetto privo di competenza gestionale sul personale.`,
      C: `Dispone il trasferimento del cancelliere in altro ufficio giudiziario del distretto senza alcuna istruttoria.`,
      D: `Prende in carico la segnalazione come elemento informativo rilevante ai fini della valutazione professionale del dipendente, avvia i necessari accertamenti (colloquio con l'interessato, verifica oggettiva degli errori segnalati, eventuale affiancamento formativo), e decide autonomamente, sulla base di criteri professionali oggettivi e non di scelte personalistiche del magistrato, sull'eventuale ricollocazione del dipendente.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `La segnalazione del capo dell'ufficio/presidente di sezione su criticità nell'attività del personale amministrativo di udienza costituisce un input legittimo e rilevante, di cui il dirigente deve tenere conto nell'ambito della leale collaborazione istituzionale prevista dal D.Lgs. 240/2006; tuttavia la decisione gestionale relativa alla ricollocazione, formazione o eventuale responsabilità disciplinare del dipendente resta di esclusiva competenza del dirigente (artt. 5, comma 2, e 16 D.Lgs. 165/2001), da esercitarsi sulla base di un'istruttoria oggettiva e non di una scelta imposta dal magistrato secondo criteri personali. Ignorare la segnalazione (opzione B) priverebbe il dirigente di un'informazione utile alla valutazione del personale; accogliere acriticamente la richiesta (opzione A) o disporre un trasferimento sanzionatorio senza istruttoria (opzione C) violerebbero le garanzie procedurali dovute al dipendente e la titolarità datoriale del dirigente. In chiave di leadership situazionale, lo stile corretto è "analitico-mediatore": raccogliere gli elementi, valutare con metodo, restituire una decisione informata a entrambe le parti.`,
  },

  // ==================================================================
  // AMBITO 4 - Digitalizzazione e Continuità Operativa (PCT/PDP)
  // ==================================================================
  {
    id: 9,
    tipo: 'multiple',
    ambito: 'Digitalizzazione e Continuità Operativa (PCT/PDP)',
    livello: 'Alta Complessità',
    scenario: `Alle ore 9:00 di un giorno con numerosi termini perentori in scadenza (ultimo giorno utile per depositi telematici), il sistema PCT (Processo Civile Telematico) risulta inaccessibile in tutto il distretto per un malfunzionamento infrastrutturale centrale. Gli avvocati iniziano a presentarsi in cancelleria chiedendo chiarimenti. Qual è la prima azione che il Dirigente dovrebbe compiere?`,
    opzioni: {
      A: `Verificare immediatamente con i canali tecnici ministeriali (DGSIA) la natura e la durata prevista del disservizio, e contestualmente predisporre una comunicazione ufficiale e tempestiva verso l'utenza professionale sulle modalità sostitutive previste dalla normativa in caso di malfunzionamento dei sistemi telematici.`,
      B: `Attendere autonomamente il ripristino del sistema senza attivare alcuna comunicazione, per non generare allarmismo.`,
      C: `Autorizzare autonomamente e senza alcuna base normativa una proroga generalizzata di tutti i termini in scadenza quel giorno.`,
      D: `Invitare gli avvocati a depositare gli atti cartacei senza alcuna verifica delle condizioni previste dalla legge per l'attestazione del malfunzionamento.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `In presenza di un malfunzionamento dei sistemi telematici, la normativa di riferimento (art. 4, D.L. 193/2009 conv. L. 24/2010 e successive modifiche, sul deposito cartaceo in caso di malfunzionamento) richiede l'accertamento formale del disservizio, generalmente attestato dal responsabile per i sistemi informativi (DGSIA), quale presupposto per l'attivazione delle modalità sostitutive di deposito. Il dirigente deve quindi attivarsi immediatamente sul piano tecnico-istituzionale per ottenere tale attestazione e i tempi di ripristino, e parallelamente comunicare con tempestività e chiarezza all'utenza professionale, per ridurre incertezza e contenzioso. Restare inerti (opzione B) o assumere iniziative prive di base normativa come una proroga generalizzata (opzione C) espongono l'amministrazione a gravi criticità giuridiche; consentire il deposito cartaceo senza le verifiche di legge (opzione D) è procedimentalmente scorretto. In chiave di leadership situazionale, la gestione di un'emergenza richiede uno stile "direttivo": in condizioni di incertezza e urgenza, il gruppo si aspetta indicazioni chiare, rapide e coordinate da parte del dirigente, più che un ampio processo partecipativo.`,
  },
  {
    id: 10,
    tipo: 'multiple',
    ambito: 'Digitalizzazione e Continuità Operativa (PCT/PDP)',
    livello: 'Alta Complessità',
    scenario: `Il referente informatico locale segnala al Dirigente un'anomalia sospetta nei sistemi del Tribunale, con rallentamenti anomali e alcuni file che risultano cifrati senza autorizzazione: elementi compatibili con un possibile attacco ransomware. Qual è la prima azione corretta secondo un approccio di gestione della continuità operativa?`,
    opzioni: {
      A: `Continuare a utilizzare normalmente tutti i sistemi in attesa di una conferma definitiva, per non interrompere il servizio.`,
      B: `Disporre l'immediato isolamento precauzionale dei sistemi potenzialmente compromessi dalla rete, attivare la procedura di segnalazione dell'incidente informatico verso DGSIA e le autorità competenti in materia di cybersicurezza, e attivare, se previsto, il piano di continuità operativa e disaster recovery dell'ufficio.`,
      C: `Attendere le istruzioni del Presidente del Tribunale prima di intraprendere qualunque iniziativa tecnica.`,
      D: `Comunicare pubblicamente l'incidente alla stampa prima di aver completato le verifiche tecniche, per trasparenza istituzionale.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `In presenza di un sospetto incidente di sicurezza informatica, la priorità assoluta è il contenimento del danno (isolamento dei sistemi compromessi) per evitare la propagazione della minaccia, seguito dalla tempestiva segnalazione ai soggetti tecnici competenti (DGSIA quale gestore dell'infrastruttura del Ministero della Giustizia, e le autorità nazionali competenti in materia di sicurezza cibernetica secondo la normativa vigente) e dall'attivazione dei piani di continuità operativa, ove predisposti. Il dirigente esercita qui un potere-dovere di gestione del rischio operativo che rientra pienamente nelle sue competenze organizzative (art. 5, comma 2, D.Lgs. 165/2001), senza necessità di attendere autorizzazioni esterne per le misure di primissima urgenza (opzione C, che ritarderebbe pericolosamente la risposta), né tantomeno proseguendo l'uso dei sistemi compromessi (opzione A, che aggraverebbe il danno) o procedendo a comunicazioni esterne premature e non coordinate (opzione D). La leadership situazionale richiesta in un contesto di crisi tecnica ad alta incertezza è di tipo "direttivo": istruzioni chiare, immediate e verificabili.`,
  },

  // ==================================================================
  // AMBITO 5 - Gestione del Personale, Disciplina e Smart Working
  // ==================================================================
  {
    id: 11,
    tipo: 'multiple',
    ambito: 'Gestione del Personale, Disciplina e Smart Working',
    livello: 'Base',
    scenario: `Un funzionario in lavoro agile risulta ripetutamente irreperibile, senza giustificazione, durante le fasce di contattabilità concordate nell'accordo individuale di smart working, con conseguenti ritardi nelle risposte a colleghi e utenza. Qual è il primo passo corretto del Dirigente?`,
    opzioni: {
      A: `Revocare immediatamente e senza contraddittorio l'accordo di lavoro agile, disponendo il rientro in presenza a tempo indeterminato come sanzione.`,
      B: `Ignorare la situazione per evitare di appesantire i rapporti con il dipendente.`,
      C: `Contestare formalmente al dipendente, in forma scritta, le irreperibilità rilevate, richiedendo chiarimenti nel rispetto del contraddittorio, e valutare sulla base della risposta se si tratti di un problema da correggere in via organizzativa/formativa o se sussistano i presupposti per l'avvio di un procedimento disciplinare ai sensi dell'art. 55-bis D.Lgs. 165/2001, oltre a rivalutare la sostenibilità dell'accordo di lavoro agile in essere.`,
      D: `Convocare immediatamente l'Ufficio Procedimenti Disciplinari per l'irrogazione della sanzione massima prevista.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `Di fronte a condotte potenzialmente scorrette, il dirigente deve agire con gradualità e nel rispetto del contraddittorio: una contestazione scritta preliminare consente di accertare i fatti e distinguere un problema organizzativo occasionale da una condotta reiterata e colpevole, presupposto eventuale per l'attivazione del procedimento disciplinare secondo le forme e i termini dell'art. 55-bis D.Lgs. 165/2001, che comunque compete, per le sanzioni più gravi, all'Ufficio Procedimenti Disciplinari e non a un'iniziativa estemporanea del dirigente. Revocare l'accordo senza contraddittorio (opzione A) o applicare direttamente la sanzione massima (opzione D) violano i principi di proporzionalità e del giusto procedimento disciplinare; ignorare la situazione (opzione B) costituisce un'omissione di vigilanza gestionale. Il lavoro agile, ai sensi della L. 81/2017, non è un diritto assoluto e irrevocabile: il dirigente può motivatamente rivalutare la sostenibilità dell'accordo individuale se le condizioni organizzative concordate non vengono rispettate. In chiave di leadership situazionale, la prima interlocuzione richiede uno stile "direttivo ma dialogico": regole chiare, fatti circostanziati, ascolto delle giustificazioni, prima di ogni valutazione sanzionatoria.`,
  },
  {
    id: 12,
    tipo: 'multiple',
    ambito: 'Gestione del Personale, Disciplina e Smart Working',
    livello: 'Avanzato',
    scenario: `In sede di valutazione annuale della performance individuale, il Dirigente si trova a valutare un funzionario con risultati oggettivamente inferiori alla media del gruppo, ma particolarmente conflittuale e propenso a contestare qualunque osservazione, anche minacciando ricorsi. Come dovrebbe procedere il Dirigente nella valutazione?`,
    opzioni: {
      A: `Attribuire comunque una valutazione allineata alla media del gruppo per evitare contestazioni e possibili ricorsi.`,
      B: `Evitare qualunque valutazione negativa per il timore del contenzioso, rinviandola all'anno successivo.`,
      C: `Delegare la valutazione a un collega dirigente per evitare l'esposizione diretta al conflitto.`,
      D: `Condurre la valutazione sulla base di criteri oggettivi, misurabili e previamente comunicati (obiettivi assegnati, indicatori di risultato, comportamenti organizzativi), documentandola adeguatamente, comunicarla al dipendente in un colloquio strutturato con evidenza dei fatti a supporto, nel rispetto del sistema di misurazione e valutazione della performance e delle garanzie procedurali previste.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `Il sistema di misurazione e valutazione della performance, disciplinato dal D.Lgs. 150/2009 come riformato dal D.Lgs. 74/2017, impone al valutatore di fondare il giudizio su elementi oggettivi, misurabili e conosciuti ex ante dal valutato, documentandoli adeguatamente proprio per resistere a eventuali contestazioni e per garantire trasparenza e correttezza (art. 55 D.Lgs. 165/2001 e principi del Codice di comportamento). Attribuire una valutazione compiacente per evitare conflitti (opzione A) mina alla radice la credibilità del sistema di valutazione e genera diseconomie motivazionali nel resto del personale; rinviare la valutazione (opzione B) o delegarla indebitamente (opzione C, che comunque compete al dirigente responsabile della struttura) sono comportamenti elusivi della responsabilità dirigenziale ex art. 21 D.Lgs. 165/2001. Il rigore documentale e procedurale è la miglior tutela sia per il dipendente sia per l'amministrazione. In chiave di leadership situazionale, con un collaboratore poco performante ma ad alta assertività conflittuale, lo stile più efficace è "direttivo-strutturato": fatti, criteri, dati, colloquio formale, per ridurre lo spazio a dinamiche personalistiche.`,
  },

  // ==================================================================
  // AMBITO 6 - Anticorruzione e Trasparenza (L. 190/2012)
  // ==================================================================
  {
    id: 13,
    tipo: 'multiple',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Base',
    scenario: `Il Dirigente viene a conoscenza che un funzionario, responsabile del procedimento per l'affidamento di un servizio di pulizia dei locali giudiziari, ha un rapporto di parentela in linea retta con il titolare di una delle imprese partecipanti alla procedura. Qual è il primo obbligo del funzionario e la conseguente azione corretta del Dirigente?`,
    opzioni: {
      A: `Il funzionario ha l'obbligo di astenersi e di segnalare per iscritto la situazione di conflitto di interessi, anche solo potenziale, al Dirigente, il quale valuta l'astensione e individua un sostituto per la conduzione del procedimento, dandone atto agli atti della procedura.`,
      B: `Il funzionario può proseguire regolarmente l'istruttoria, essendo la parentela un fatto privato irrilevante ai fini della correttezza amministrativa.`,
      C: `Il Dirigente deve avviare immediatamente un procedimento disciplinare nei confronti del funzionario per il solo fatto di avere un parente tra i concorrenti.`,
      D: `La situazione va segnalata direttamente all'Autorità Giudiziaria, senza alcuna valutazione amministrativa preliminare.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `L'art. 6-bis della L. 241/1990 e il Codice di comportamento dei dipendenti pubblici (DPR 62/2013, artt. 6 e 7) impongono al dipendente che si trovi in una situazione di conflitto di interessi, anche solo potenziale, l'obbligo di astensione e di segnalazione al superiore gerarchico, quale presidio essenziale del sistema di prevenzione della corruzione delineato dalla L. 190/2012. Il Dirigente, ricevuta la segnalazione, ha il dovere di valutarla e di assegnare il procedimento a un diverso funzionario, documentando la sostituzione. Non si tratta, di per sé, di un illecito disciplinare del funzionario che ha correttamente segnalato la situazione (opzione C, sproporzionata) né di una questione da rimettere sic et simpliciter all'Autorità Giudiziaria in assenza di elementi di rilevanza penale (opzione D); ignorare il conflitto di interessi (opzione B) contrasta frontalmente con i presidi anticorruzione. Questa vicenda tipizza uno dei rischi mappati nel Piano Triennale di Prevenzione della Corruzione e della Trasparenza (PTPCT) per l'area "affidamenti e contratti pubblici". In chiave di leadership situazionale, il dirigente esercita qui uno stile "regolatore-garante": la correttezza procedurale non è negoziabile e va gestita con tempestività e rigore documentale.`,
  },
  {
    id: 14,
    tipo: 'multiple',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Avanzato',
    scenario: `Il Responsabile della Prevenzione della Corruzione e della Trasparenza (RPCT) dell'ufficio segnala al Dirigente un rischio di maladministration legato alla mancata rotazione, da diversi anni, del personale addetto alla gestione dei depositi giudiziari (corpi di reato, somme sequestrate). Quale azione preventiva dovrebbe assumere il Dirigente?`,
    opzioni: {
      A: `Ignorare la segnalazione, in quanto la rotazione del personale non rientra tra gli strumenti di prevenzione della corruzione previsti dalla legge.`,
      B: `Valutare, in raccordo con il RPCT, l'applicazione di una misura di rotazione ordinaria (ove organizzativamente sostenibile) o, in alternativa, l'introduzione di misure equivalenti di mitigazione del rischio (controlli incrociati, doppia sottoscrizione, verifiche periodiche a campione), aggiornando conseguentemente il Piano Triennale di Prevenzione della Corruzione e della Trasparenza (PTPCT) e monitorandone l'attuazione.`,
      C: `Disporre la rimozione immediata e senza preavviso del dipendente interessato, a prescindere da qualunque valutazione di merito o da evidenze di irregolarità.`,
      D: `Attendere l'esito di un'eventuale ispezione ministeriale prima di intervenire.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `La rotazione del personale nelle aree a rischio è una delle misure generali di prevenzione della corruzione indicate dalla L. 190/2012 e dai Piani Nazionali Anticorruzione di ANAC, da applicarsi però con criteri di ragionevolezza e sostenibilità organizzativa: quando la rotazione non sia concretamente attuabile, la stessa normativa ammette l'adozione di misure alternative equivalenti che riducano comunque il rischio individuato. Il Dirigente, quale soggetto attuatore delle misure del PTPCT nella propria struttura, deve agire in raccordo con il RPCT, senza ignorare il rischio segnalato (opzione A), senza adottare provvedimenti punitivi sproporzionati e privi di contraddittorio nei confronti del singolo dipendente in assenza di qualunque evidenza di illecito (opzione C, che confonde la misura organizzativa preventiva con una sanzione personale) e senza attendere passivamente controlli esterni anziché attivarsi proattivamente (opzione D). In chiave di leadership situazionale, la gestione del rischio corruttivo richiede uno stile "collaborativo-sistemico": il dirigente integra la prevenzione nella gestione ordinaria, senza personalizzare né drammatizzare, ma neppure minimizzare.`,
  },
  {
    id: 15,
    tipo: 'multiple',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Avanzato',
    scenario: `Il Dirigente riceve, tramite l'apposito canale riservato, una segnalazione whistleblowing anonima che denuncia presunte irregolarità in una procedura di affidamento diretto di forniture per l'ufficio. Come gestisce correttamente la segnalazione?`,
    opzioni: {
      A: `Convoca immediatamente in ufficio, alla presenza di altri colleghi, il funzionario sospettato per un confronto diretto e informale.`,
      B: `Cestina la segnalazione in quanto anonima e quindi priva di qualunque valore.`,
      C: `Trasmette la segnalazione al RPCT (o la gestisce direttamente se dirigente-RPCT), garantendo la massima riservatezza sull'identità del segnalante ove nota e sul contenuto della segnalazione ai sensi dell'art. 54-bis D.Lgs. 165/2001, come riformato dal D.Lgs. 24/2023; avvia una verifica istruttoria proporzionata e riservata dei fatti segnalati, astenendosi da ogni forma di ritorsione, diretta o indiretta, nei confronti di eventuali segnalanti identificabili.`,
      D: `Diffonde il contenuto della segnalazione tra i responsabili di settore per raccogliere informazioni utili, senza particolari cautele sulla riservatezza.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `La disciplina del whistleblowing (art. 54-bis D.Lgs. 165/2001, oggi allineata alla Direttiva UE 2019/1937 tramite il D.Lgs. 24/2023) impone rigorosi obblighi di riservatezza sull'identità del segnalante e sul contenuto della segnalazione, nonché il divieto di misure ritorsive, presidi essenziali per l'efficacia del sistema di prevenzione della corruzione ex L. 190/2012. Una segnalazione anonima non è per ciò solo priva di valore (opzione B): va comunque valutata nel merito, con un'istruttoria proporzionata alla plausibilità e concretezza degli elementi forniti. Gestire la vicenda con modalità pubbliche o informali (opzione A) o diffondere il contenuto senza cautele (opzione D) viola frontalmente gli obblighi di riservatezza e può esporre l'amministrazione a responsabilità, oltre a compromettere irrimediabilmente la fiducia del personale nel canale di segnalazione. In chiave di leadership situazionale, questo scenario richiede uno stile "riservato-metodico": la tutela della riservatezza e la correttezza procedurale prevalgono su qualunque esigenza di rapidità informale.`,
  },

  // ==================================================================
  // AMBITO 7 - Bilancio dello Stato e Programmazione della Spesa
  // ==================================================================
  {
    id: 31,
    tipo: 'multiple',
    ambito: 'Bilancio dello Stato e Programmazione della Spesa',
    livello: 'Avanzato',
    scenario: `A metà esercizio finanziario, il Dirigente rileva che, sul capitolo di bilancio destinato alle spese di funzionamento dell'ufficio, il piano gestionale "manutenzione impianti" rischia di sforare lo stanziamento assegnato, mentre il piano gestionale "cancelleria e materiali di consumo" presenta un margine residuo consistente e non necessario fino a fine anno. Come procede correttamente?`,
    opzioni: {
      A: `Lascia che il piano gestionale "manutenzione impianti" sfori lo stanziamento, confidando in una sanatoria contabile automatica a fine esercizio.`,
      B: `Dispone una variazione compensativa tra i piani gestionali dello stesso capitolo di bilancio, nei limiti e secondo le procedure previste dalla legge di contabilità e finanza pubblica (L. 196/2009) e dalle disposizioni ministeriali di attuazione (D.Lgs. 90/2016), documentandola adeguatamente nel sistema di contabilità economica e finanziaria in uso, fermo restando che gli spostamenti tra capitoli o programmi diversi richiedono livelli autorizzativi superiori.`,
      C: `Dispone in autonomia lo spostamento di somme dal bilancio del proprio ufficio a quello di un altro ufficio giudiziario del distretto, ritenendo equivalente qualunque tipo di variazione purché il totale distrettuale resti invariato.`,
      D: `Sospende tutte le attività di manutenzione fino all'anno successivo, senza valutare la disponibilità di margini compensativi su altri piani gestionali dello stesso capitolo.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `La L. 196/2009 (legge di contabilità e finanza pubblica) e il D.Lgs. 90/2016, che ha completato la riforma della struttura del bilancio dello Stato per missioni, programmi e piani gestionali, ammettono margini di flessibilità gestionale del dirigente titolare del centro di responsabilità: le variazioni compensative tra piani gestionali del medesimo capitolo, se previste e motivate, rientrano tra gli strumenti ordinari di gestione della spesa, mentre gli spostamenti tra capitoli o programmi diversi restano soggetti a procedure e livelli autorizzativi più elevati (fino, nei casi più rilevanti, a un decreto ministeriale). Consentire lo sforamento confidando in una sanatoria (opzione A) viola il principio secondo cui nessuna obbligazione può eccedere la disponibilità di bilancio; spostare fondi tra uffici diversi in autonomia (opzione C) e sospendere in modo indiscriminato le attività necessarie senza prima verificare i margini compensativi disponibili (opzione D) sono altrettanto scorrette. In chiave di leadership situazionale, la gestione di bilancio richiede uno stile "gestionale-responsabile": il dirigente esercita la flessibilità che la norma gli riconosce, ma sempre dentro binari procedurali tracciabili.`,
  },
  {
    id: 32,
    tipo: 'multiple',
    ambito: 'Bilancio dello Stato e Programmazione della Spesa',
    livello: 'Base',
    scenario: `Un funzionario propone al Dirigente di ordinare una fornitura extra non programmata, sostenendo che "il capitolo di bilancio ha sempre avuto un margine sufficiente negli anni precedenti". Come si comporta correttamente il Dirigente prima di assumere l'impegno di spesa?`,
    opzioni: {
      A: `Autorizza l'ordine confidando nella disponibilità storica del capitolo, senza alcuna verifica puntuale sull'esercizio in corso.`,
      B: `Autorizza comunque la spesa, ripromettendosi di regolarizzare la copertura contabile mancante solo alla chiusura dell'esercizio.`,
      C: `Rimette la decisione al Ministero, astenendosi da qualunque verifica di disponibilità sul proprio bilancio, trattandosi a suo dire di materia estranea alle proprie competenze gestionali.`,
      D: `Verifica preventivamente, prima di assumere formalmente l'impegno di spesa, l'effettiva disponibilità di competenza e di cassa sul capitolo/piano gestionale pertinente per l'esercizio in corso, poiché nessuna obbligazione può essere validamente assunta dall'amministrazione in assenza di copertura finanziaria certificata (principio contabile fondamentale di cui alla disciplina generale sulla contabilità dello Stato e alla L. 196/2009), autorizzando l'ordine solo in caso di esito positivo.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `Il principio cardine della contabilità pubblica, che risale alla disciplina generale sull'amministrazione del patrimonio e sulla contabilità dello Stato e trova conferma nella L. 196/2009, impone che nessun impegno di spesa possa essere assunto in assenza di previa verifica della disponibilità finanziaria sul capitolo/piano gestionale competente per l'esercizio in corso: la disponibilità storica di anni precedenti non è un dato rilevante ai fini della copertura dell'esercizio corrente. Impegnare spese senza copertura (opzioni A e B) espone l'amministrazione e il funzionario che ha assunto l'obbligazione a responsabilità amministrativo-contabile per eventuale danno erariale, mentre disinteressarsi della verifica come compito proprio (opzione C) equivale a un'abdicazione della responsabilità gestionale che la legge attribuisce al dirigente quale titolare del centro di responsabilità. In chiave di leadership situazionale, questo scenario richiede uno stile "di controllo procedurale": prima la verifica formale, poi l'autorizzazione, mai il contrario.`,
  },
  {
    id: 33,
    tipo: 'multiple',
    ambito: 'Bilancio dello Stato e Programmazione della Spesa',
    livello: 'Avanzato',
    scenario: `A dicembre, il Dirigente constata che sul capitolo destinato alla formazione del personale residuano somme non ancora impegnate. Un collaboratore suggerisce di organizzare in fretta corsi non pianificati, anche di scarsa utilità, "pur di non perdere lo stanziamento". Come valuta correttamente la situazione il Dirigente?`,
    opzioni: {
      A: `Valuta secondo un reale fabbisogno se le somme non impegnate configurino un'economia di bilancio, oppure se, per la natura della spesa e nei limiti previsti dalla disciplina di bilancio, possano essere oggetto di reiscrizione all'esercizio successivo, astenendosi in ogni caso dal disporre spese non giustificate da un'effettiva esigenza organizzativa al solo fine di "consumare" lo stanziamento residuo.`,
      B: `Segue il suggerimento e organizza comunque attività formative non necessarie, ritenendo prioritario l'utilizzo integrale dello stanziamento entro l'anno.`,
      C: `Trasferisce discrezionalmente le somme non impegnate a un capitolo diverso del proprio ufficio, senza seguire alcuna procedura di variazione di bilancio.`,
      D: `Restituisce automaticamente la somma non impegnata senza verificare se la disciplina di bilancio applicabile a quella tipologia di spesa preveda meccanismi di riporto o di reiscrizione.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `Il principio di sana gestione finanziaria e di buon andamento dell'amministrazione (art. 97 Cost.) osta a spese non necessarie disposte al solo scopo di evitare la restituzione dello stanziamento: una simile condotta espone anzi il dirigente a un possibile rilievo di danno erariale per spesa priva di reale utilità pubblica. La disciplina sul bilancio dello Stato, riformata dal D.Lgs. 90/2016 verso un bilancio prevalentemente di cassa, e le regole sull'annualità della L. 196/2009 impongono invece una valutazione puntuale, caso per caso, tra economia di bilancio da restituire e ipotesi di reiscrizione consentite per la specifica natura della spesa. Trasferire fondi tra capitoli senza procedura (opzione C) o restituire automaticamente senza verificare le regole applicabili (opzione D) sono comportamenti altrettanto scorretti, per eccesso di disinvoltura nel primo caso e per omessa istruttoria nel secondo. In chiave di leadership situazionale, lo stile corretto è "analitico-prudente": la disponibilità di bilancio non è un obiettivo di spesa in sé, ma uno strumento al servizio di un fabbisogno reale.`,
  },

  // ==================================================================
  // AMBITO 8 - Gestione del Budget degli Uffici Giudiziari
  // ==================================================================
  {
    id: 34,
    tipo: 'multiple',
    ambito: 'Gestione del Budget degli Uffici Giudiziari',
    livello: 'Avanzato',
    scenario: `Il budget annuale di funzionamento assegnato dal Ministero all'ufficio giudiziario (utenze, pulizie, manutenzione ordinaria) risulta inferiore alle necessità stimate per l'anno. Alcuni fornitori segnalano fatture pregresse non pagate e minacciano la sospensione dei servizi. Come gestisce la situazione il Dirigente?`,
    opzioni: {
      A: `Sospende indiscriminatamente il pagamento di tutti i fornitori fino a un'eventuale nuova assegnazione di fondi, senza alcuna comunicazione né priorizzazione.`,
      B: `Paga le fatture rigorosamente nell'ordine cronologico di arrivo, senza alcuna valutazione della criticità del servizio sotteso.`,
      C: `Effettua una ricognizione puntuale delle fatture scadute e delle priorità di spesa, dando precedenza alla continuità dei servizi essenziali per il funzionamento dell'ufficio (utenze, sicurezza, pulizie) nei limiti del budget assegnato, e attiva tempestivamente presso il Ministero (Dipartimento dell'Organizzazione Giudiziaria) una richiesta motivata e documentata di integrazione budgetaria.`,
      D: `Utilizza somme stanziate su un capitolo di bilancio destinato a diversa finalità per coprire il disavanzo, senza autorizzazione né variazione formale.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `A seguito della riforma introdotta con la legge di stabilità 2015 (L. 23 dicembre 2014, n. 190, art. 1, commi 526 e ss.), le competenze in materia di spese di funzionamento degli uffici giudiziari sono state trasferite dai Comuni al Ministero della Giustizia, che assegna a ciascun ufficio un budget annuale gestito dal dirigente amministrativo tramite le piattaforme ministeriali dedicate (SIAMM). In presenza di una dotazione insufficiente, il dirigente deve priorizzare i pagamenti sulla base della criticità del servizio sotteso e attivare tempestivamente l'interlocuzione istituzionale per un'integrazione, documentando le proprie scelte. Sospendere tutti i pagamenti indiscriminatamente (opzione A) rischia di compromettere anche servizi essenziali; pagare in ordine puramente cronologico (opzione B) ignora la gerarchia delle priorità organizzative; utilizzare fondi vincolati a finalità diverse (opzione D) viola il principio di destinazione degli stanziamenti (L. 196/2009) ed espone a responsabilità erariale. In chiave di leadership situazionale, lo stile richiesto è "gestionale con escalation tempestiva": priorizzare con criterio e, in parallelo, rappresentare per tempo il fabbisogno a chi ha il potere di integrarlo.`,
  },
  {
    id: 35,
    tipo: 'multiple',
    ambito: 'Gestione del Budget degli Uffici Giudiziari',
    livello: 'Base',
    scenario: `Un fornitore di servizi di pulizia dell'ufficio giudiziario propone al Dirigente il pagamento immediato "in contanti" di una fattura, offrendo in cambio uno sconto informale sull'importo dovuto. Come si comporta correttamente il Dirigente?`,
    opzioni: {
      A: `Accetta la proposta e dispone il pagamento in contanti direttamente dalla cassa dell'ufficio, per ottenere lo sconto offerto.`,
      B: `Rifiuta la proposta, poiché i pagamenti della pubblica amministrazione ai fornitori devono avvenire secondo le procedure ordinarie di contabilità pubblica (mandati di pagamento tracciabili) e nel rispetto degli obblighi di tracciabilità dei flussi finanziari previsti dalla L. 136/2010 (conto dedicato del fornitore, CIG), che non possono essere derogati da un accordo informale in contanti, anche se apparentemente vantaggioso.`,
      C: `Accetta la proposta, a condizione che il fornitore rilasci una semplice ricevuta scritta a mano a titolo di quietanza.`,
      D: `Rimette la decisione al Presidente del Tribunale per un'autorizzazione discrezionale al pagamento in contanti.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `La L. 136/2010 impone, a pena di nullità del contratto e di specifiche sanzioni, che i pagamenti relativi ad appalti pubblici transitino su conti correnti dedicati identificati dal Codice Identificativo Gara (CIG), a garanzia della tracciabilità e della legalità della spesa pubblica; i pagamenti in contanti sono incompatibili con questo sistema, indipendentemente da eventuali vantaggi economici apparenti. Le opzioni A e C, oltre a violare la disciplina sulla tracciabilità, esporrebbero il dirigente a responsabilità disciplinare ed erariale; la scelta non è inoltre nella disponibilità discrezionale del capo dell'ufficio giudiziario (opzione D), trattandosi di una regola inderogabile di contabilità pubblica che compete al dirigente amministrativo far rispettare. In chiave di leadership situazionale, lo stile corretto è "normativo-intransigente": alcune regole di legalità finanziaria non sono negoziabili, quale che sia il vantaggio contingente prospettato.`,
  },

  // ==================================================================
  // AMBITO 9 - Spese di Giustizia (T.U. DPR 115/2002)
  // ==================================================================
  {
    id: 36,
    tipo: 'multiple',
    ambito: 'Spese di Giustizia (T.U. DPR 115/2002)',
    livello: 'Avanzato',
    scenario: `Numerosi consulenti tecnici d'ufficio (CTU) lamentano ritardi di oltre un anno nella liquidazione dei compensi per le prestazioni rese in procedimenti civili e penali del Tribunale, minacciando di non accettare più incarichi. Come affronta correttamente l'arretrato il Dirigente?`,
    opzioni: {
      A: `Ritiene la questione di esclusiva competenza dei magistrati che hanno emesso i decreti di liquidazione, senza alcuna iniziativa amministrativa.`,
      B: `Sospende l'ammissione di nuovi incarichi peritali fino al completo azzeramento dell'arretrato, senza analizzarne preventivamente le cause.`,
      C: `Anticipa i pagamenti attingendo a fondi di cassa non destinati a tale scopo, senza alcuna copertura di bilancio.`,
      D: `Avvia una ricognizione sistematica dei decreti di pagamento non ancora eseguiti, individua le cause dell'arretrato (carenza di personale addetto, insufficiente capienza del capitolo "spese di giustizia", criticità procedurali) e predispone un piano di recupero per priorità e anzianità delle pratiche, nel rispetto del Testo Unico Spese di Giustizia (DPR 115/2002), segnalando tempestivamente al Ministero l'eventuale necessità di integrazione dei fondi.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `Il Testo Unico delle disposizioni in materia di spese di giustizia (DPR 115/2002) disciplina la liquidazione dei compensi ai CTU e la loro esecuzione contabile: se la quantificazione del compenso spetta al magistrato con il decreto di pagamento, l'esecuzione materiale (verifica di disponibilità, emissione del mandato) è affidata all'ufficio amministrativo, che deve gestirla con metodo per evitare arretrati che, oltre a generare interessi di mora, disincentivano i professionisti dall'accettare incarichi con ricadute dirette sulla funzionalità della giustizia. Disinteressarsi della questione (opzione A) trascura un compito gestionale proprio del dirigente; bloccare i nuovi incarichi senza analisi delle cause (opzione B) aggrava il problema anziché risolverlo; anticipare pagamenti senza copertura (opzione C) è illegittimo ed espone a responsabilità erariale. In chiave di leadership situazionale, lo stile corretto è "gestionale-proattivo": dati, cause, piano di recupero, e interlocuzione tempestiva con il livello ministeriale competente.`,
  },
  {
    id: 37,
    tipo: 'multiple',
    ambito: 'Spese di Giustizia (T.U. DPR 115/2002)',
    livello: 'Base',
    scenario: `Un cittadino ammesso al patrocinio a spese dello Stato chiede informazioni sui tempi di liquidazione del compenso spettante al proprio difensore, ma il funzionario di cancelleria non sa fornire indicazioni precise. Come interviene correttamente il Dirigente per definire una prassi adeguata?`,
    opzioni: {
      A: `Fornisce al personale indicazioni operative chiare sull'iter di liquidazione previsto dal Testo Unico Spese di Giustizia (DPR 115/2002) - decreto di pagamento del magistrato, trasmissione alla contabilità, verifica di disponibilità di bilancio, esecuzione del pagamento - chiarendo che i tempi effettivi dipendono da più fasi e soggetti, e predispone materiale informativo standardizzato per l'utenza.`,
      B: `Impone al personale di non fornire mai alcuna informazione ai cittadini su questi temi, per evitare qualunque responsabilità.`,
      C: `Assicura al cittadino un termine di pagamento certo e ravvicinato, senza verificarne la concreta fattibilità.`,
      D: `Rinvia sistematicamente il cittadino agli uffici centrali del Ministero della Giustizia per qualunque informazione sui tempi di pagamento delle spese di giustizia del proprio ufficio.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `Il patrocinio a spese dello Stato, disciplinato dal DPR 115/2002, segue un iter procedurale articolato che il personale di front-office deve conoscere per orientare correttamente l'utenza, in coerenza con i principi di trasparenza dell'azione amministrativa (D.Lgs. 33/2013): fornire linee guida operative e materiale informativo standardizzato riduce l'incertezza percepita dai cittadini senza esporre l'amministrazione a impegni che non è in grado di controllare integralmente. Negare ogni informazione (opzione B) contrasta con i doveri di trasparenza e correttezza verso l'utenza; promettere termini certi non verificabili (opzione C) espone a un affidamento poi deluso; rinviare sistematicamente al livello centrale (opzione D) scarica indebitamente una responsabilità informativa che compete all'ufficio territoriale. In chiave di leadership situazionale, lo stile corretto è "formativo-abilitante": mettere il personale di front-office in condizione di rispondere con cognizione di causa.`,
  },
  {
    id: 38,
    tipo: 'multiple',
    ambito: 'Spese di Giustizia (T.U. DPR 115/2002)',
    livello: 'Avanzato',
    scenario: `Il Dirigente rileva che alcuni decreti di pagamento per indennità di custodia di beni sequestrati risultano emessi da diversi anni senza che i beneficiari ne abbiano mai richiesto la liquidazione. Si pone quindi il tema della prescrizione del diritto al pagamento. Come procede?`,
    opzioni: {
      A: `Dispone comunque il pagamento integrale delle somme, indipendentemente dal tempo trascorso, ritenendo la prescrizione irrilevante in materia di spese di giustizia.`,
      B: `Dispone d'ufficio, senza alcuna verifica formale, la cancellazione di tutti i decreti di pagamento risalenti nel tempo.`,
      C: `Verifica, con il supporto dell'ufficio contabilità e se necessario dell'Avvocatura dello Stato, il termine di prescrizione applicabile al credito (che segue le regole generali sulla prescrizione dei crediti verso la pubblica amministrazione, salve le specifiche previsioni della disciplina di settore e le eventuali cause di interruzione o sospensione), astenendosi dal liquidare autonomamente importi per i quali risulti maturata la prescrizione senza atti interruttivi, e cura la corretta tenuta della documentazione contabile a supporto di tale valutazione.`,
      D: `Trasferisce automaticamente le somme non richieste a un fondo cassa dell'ufficio destinato ad altre finalità di spesa.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `In presenza di crediti risalenti e mai riscossi, il dirigente non può né pagare automaticamente (opzione A, che rischia di erogare somme su crediti ormai estinti) né disporne la cancellazione unilaterale senza istruttoria (opzione B, che pregiudicherebbe crediti eventualmente ancora vivi per effetto di atti interruttivi), né tantomeno destinare tali somme ad altre finalità di spesa (opzione D, in violazione del vincolo di destinazione degli stanziamenti). La soluzione corretta è una verifica puntuale, caso per caso, del termine di prescrizione applicabile e delle eventuali cause di interruzione o sospensione, avvalendosi se necessario del supporto tecnico-legale dell'Avvocatura dello Stato, con adeguata tracciabilità documentale della valutazione compiuta, a tutela sia del creditore sia dell'erario. In chiave di leadership situazionale, lo stile corretto è "istruttorio-cauto": nessun automatismo su questioni che incidono su diritti patrimoniali di terzi e sulla corretta gestione del pubblico denaro.`,
  },

  // ==================================================================
  // AMBITO 10 - Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)
  // ==================================================================
  {
    id: 39,
    tipo: 'multiple',
    ambito: 'Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)',
    livello: 'Avanzato',
    scenario: `Il Dirigente deve affidare un servizio di manutenzione degli impianti di climatizzazione dell'ufficio giudiziario, di importo rientrante tra quelli affidabili direttamente. Il responsabile tecnico propone di riaffidare l'incarico allo stesso fornitore già utilizzato in passato con soddisfazione, senza consultarne altri. Come si comporta correttamente il Dirigente quale punto ordinante/RUP?`,
    opzioni: {
      A: `Procede automaticamente con l'affidamento diretto al medesimo fornitore già utilizzato, senza alcuna ulteriore valutazione, confidando nella qualità già sperimentata del servizio.`,
      B: `Pur nell'ambito della facoltà di affidamento diretto prevista dal Codice dei contratti pubblici (D.Lgs. 36/2023) per gli importi sotto soglia, valuta l'applicazione del principio di rotazione degli affidamenti (salve le motivate deroghe consentite dal Codice), acquisisce comunque elementi di comparazione anche informale sul mercato e documenta adeguatamente le ragioni della scelta nella determina a contrarre, a garanzia di trasparenza, concorrenza ed economicità dell'azione amministrativa.`,
      C: `Avvia comunque una procedura di gara aperta di rilievo europeo, ritenendo l'affidamento diretto sempre vietato per la pubblica amministrazione, anche per importi contenuti.`,
      D: `Delega integralmente la scelta del fornitore al responsabile tecnico, senza assumersi alcuna responsabilità quale punto ordinante/RUP della procedura.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `Il D.Lgs. 36/2023 (nuovo Codice dei contratti pubblici) consente l'affidamento diretto per gli importi sotto le soglie di rilevanza europea, nel rispetto dei principi generali di economicità, efficacia, tempestività, correttezza, concorrenza e trasparenza (artt. 1 e 3, principi del risultato e della fiducia) e, per gli affidamenti ripetuti nel tempo, del principio di rotazione degli inviti e degli affidamenti, salve motivate deroghe. Il RUP - che nell'ufficio giudiziario è di regola il dirigente o un soggetto da lui nominato - resta comunque responsabile della procedura e deve adeguatamente motivare la scelta anche negli affidamenti diretti, per resistere a eventuali rilievi di Corte dei Conti o ANAC. Riaffidare automaticamente senza alcuna valutazione (opzione A) o delegare la scelta senza assumersi responsabilità (opzione D) sono condotte scorrette; imporre una gara europea anche per importi minimi (opzione C) è sproporzionato e contrario al principio di semplificazione del nuovo Codice. In chiave di leadership situazionale, lo stile corretto è "procedurale-documentale": la discrezionalità consentita dalla legge va sempre accompagnata da tracciabilità delle motivazioni.`,
  },
  {
    id: 40,
    tipo: 'multiple',
    ambito: 'Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)',
    livello: 'Base',
    scenario: `Nell'ambito di un acquisto di beni informatici per l'ufficio, il Dirigente si chiede se sia obbligatorio ricorrere alle convenzioni CONSIP o al Mercato Elettronico della Pubblica Amministrazione (MEPA) prima di procedere autonomamente sul mercato. Come si comporta correttamente?`,
    opzioni: {
      A: `Le amministrazioni statali, incluse le articolazioni del Ministero della Giustizia, sono in via generale tenute a ricorrere al MEPA o alle convenzioni CONSIP per gli acquisti di beni e servizi (L. 208/2015 e successive disposizioni), salvo le ipotesi di esclusione o di assenza di convenzioni attive per la tipologia di bene richiesta, potendo in tali casi procedere autonomamente nel rispetto dei principi del Codice dei contratti pubblici.`,
      B: `Il ricorso a CONSIP/MEPA è una mera facoltà discrezionale, priva di qualunque carattere prescrittivo per le amministrazioni statali.`,
      C: `L'obbligo di ricorso a CONSIP riguarda esclusivamente gli enti locali, mai le amministrazioni statali.`,
      D: `Il dirigente può sempre scegliere liberamente il fornitore sul mercato libero, indipendentemente dall'esistenza di convenzioni CONSIP attive, purché il prezzo pattuito risulti inferiore a quello di convenzione.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `La L. 208/2015 (legge di stabilità 2016), intervenendo sulla disciplina previgente, ha reso sostanzialmente generalizzato l'obbligo per le amministrazioni statali di ricorrere al MEPA o alle convenzioni CONSIP per gli acquisti di beni e servizi, quale strumento di aggregazione e razionalizzazione della spesa pubblica, obbligo confermato dal D.Lgs. 36/2023 nella propria disciplina sulla qualificazione delle stazioni appaltanti e sulla centralizzazione della committenza. Il mancato rispetto di tale obbligo, in assenza di una delle ipotesi di esclusione previste, può esporre il dirigente a un rilievo di danno erariale, in particolare qualora comporti il pagamento di un prezzo superiore a quello di convenzione senza adeguata giustificazione. Ritenere il ricorso a CONSIP una mera facoltà (opzione B), limitarlo agli enti locali (opzione C) o condizionarlo a una mera comparazione di prezzo operata autonomamente dal dirigente (opzione D) sono ricostruzioni normative errate.`,
  },

  // ==================================================================
  // AMBITO 11 - Agenti Contabili e Gestione dei Beni
  // ==================================================================
  {
    id: 41,
    tipo: 'multiple',
    ambito: 'Agenti Contabili e Gestione dei Beni',
    livello: 'Avanzato',
    scenario: `Il Dirigente, quale funzionario delegato per la gestione della cassa economale dell'ufficio, riceve un'anticipazione di fondi per le piccole spese di funzionamento. A fine esercizio deve rendere conto dell'utilizzo, ma alcune pezze giustificative risultano mancanti. Un collaboratore suggerisce di sanare le lacune con autocertificazioni generiche per chiudere più rapidamente la rendicontazione. Come si comporta?`,
    opzioni: {
      A: `Segue il suggerimento, ritenendo che la forma delle pezze giustificative sia irrilevante purché l'importo complessivo torni.`,
      B: `Rinuncia del tutto a rendicontare le spese di importo minore, ritenendo che sotto una certa soglia non vi sia alcun obbligo di giustificazione.`,
      C: `Delega la responsabilità della rendicontazione al collaboratore che ha formulato la proposta, ritenendo di potersi così liberare di ogni obbligo personale.`,
      D: `Rifiuta la proposta e cura che ogni spesa sostenuta con l'anticipazione sia documentata con regolare pezza giustificativa (fatture, scontrini fiscali, ricevute) coerente con la natura della spesa autorizzata, poiché il funzionario delegato è un agente contabile personalmente responsabile, anche sul piano della responsabilità amministrativo-contabile innanzi alla Corte dei Conti, della regolarità del conto reso, e non può sanare le lacune documentali con attestazioni non veritiere.`,
    },
    rispostaCorretta: 'D',
    spiegazioneDettagliata: `La disciplina generale sulla contabilità dello Stato (R.D. 2440/1923 e R.D. 827/1924) e il Codice di giustizia contabile (D.Lgs. 174/2016) impongono all'agente contabile - qui il funzionario delegato che gestisce l'anticipazione di cassa - l'obbligo di rendere un conto giudiziale veritiero e documentato, presidio della responsabilità personale e patrimoniale connessa al maneggio di denaro pubblico. Sanare lacune documentali con autocertificazioni generiche (opzione A) espone a responsabilità per falsa attestazione oltre che erariale; omettere la rendicontazione delle spese minori (opzione B) non trova alcun fondamento normativo; la responsabilità personale dell'agente contabile, inoltre, non è delegabile a un collaboratore (opzione C). In chiave di leadership situazionale, lo stile corretto è "di integrità procedurale": la responsabilità personale dell'agente contabile impone il massimo rigore documentale, indipendentemente dalla pressione a chiudere rapidamente gli adempimenti.`,
  },
  {
    id: 42,
    tipo: 'multiple',
    ambito: 'Agenti Contabili e Gestione dei Beni',
    livello: 'Base',
    scenario: `Il consegnatario dei beni mobili dell'ufficio giudiziario segnala al Dirigente la sparizione di un computer portatile in dotazione a un ufficio, senza apparenti segni di effrazione. Come si comporta correttamente il Dirigente?`,
    opzioni: {
      A: `Fa acquistare immediatamente un nuovo computer con i fondi di cassa disponibili, senza ulteriori accertamenti né aggiornamento dell'inventario.`,
      B: `Ignora la segnalazione, trattandosi di un bene di modesto valore economico.`,
      C: `Dispone che il consegnatario formalizzi la segnalazione con un verbale di accertamento del fatto, avvia gli accertamenti interni del caso (compresa un'eventuale denuncia alle autorità competenti se si sospetta un furto), valuta se sussistano profili di colpa grave nella custodia del bene ai fini di un'eventuale segnalazione alla Corte dei Conti, e cura il conseguente aggiornamento dell'inventario patrimoniale e la richiesta di discarico per il bene perduto secondo le procedure di contabilità generale dello Stato.`,
      D: `Addebita automaticamente il valore del bene smarrito al primo dipendente risultato averlo avuto in uso, senza alcuna istruttoria.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `Il consegnatario dei beni mobili è, al pari del funzionario delegato per la cassa, un agente contabile "in beni" tenuto a rendere conto della custodia del patrimonio affidatogli (R.D. 827/1924): la perdita o sottrazione di un bene richiede un verbale di accertamento, un'istruttoria interna, l'eventuale denuncia alle autorità competenti e una valutazione della sussistenza di colpa grave o dolo, presupposto di un'eventuale responsabilità erariale, prima di procedere al discarico contabile del bene dall'inventario. Sostituire il bene senza alcun accertamento (opzione A) impedisce la corretta tenuta dell'inventario e ogni valutazione di responsabilità; ignorare il fatto (opzione B) è un'omissione di vigilanza gestionale; addebitare automaticamente il valore a un dipendente senza istruttoria (opzione D) viola le più elementari garanzie procedurali. In chiave di leadership situazionale, lo stile corretto è "analitico-procedurale": accertare prima di attribuire, documentare prima di discaricare.`,
  },
  {
    id: 43,
    tipo: 'multiple',
    ambito: 'Agenti Contabili e Gestione dei Beni',
    livello: 'Avanzato',
    scenario: `In vista del giudizio di conto della Corte dei Conti relativo alla gestione della cassa economale dell'anno precedente, il Dirigente (funzionario delegato) riscontra una discrepanza di pochi euro tra il fondo cassa rilevato e le risultanze contabili, presumibilmente dovuta a un errore materiale di trascrizione. Come gestisce correttamente la situazione?`,
    opzioni: {
      A: `Documenta con trasparenza la discrepanza riscontrata, ne ricostruisce le cause con un'apposita nota esplicativa e la rappresenta correttamente nel conto giudiziale da rendere alla Corte dei Conti, provvedendo se dovuto alla reintegrazione della cassa, poiché la veridicità del conto è un presidio essenziale della responsabilità dell'agente contabile, anche a fronte di discrepanze di modesta entità.`,
      B: `Occulta la discrepanza modificando le scritture contabili per farle quadrare artificiosamente.`,
      C: `Ignora la discrepanza, ritenendo che importi di modesta entità non debbano mai essere segnalati alla Corte dei Conti.`,
      D: `Attribuisce la discrepanza a un collega senza alcuna verifica documentale, per evitare responsabilità personali.`,
    },
    rispostaCorretta: 'A',
    spiegazioneDettagliata: `Il giudizio di conto, disciplinato dal Codice di giustizia contabile (D.Lgs. 174/2016), impone all'agente contabile un obbligo di veridicità e trasparenza del conto giudiziale indipendentemente dall'entità delle somme in discussione: anche discrepanze minime vanno documentate e giustificate, poiché la Corte dei Conti valuta la diligenza e la buona fede dell'agente anche su importi contenuti. Alterare le scritture contabili per farle quadrare artificiosamente (opzione B) può integrare, oltre alla responsabilità erariale, profili di rilevanza penale (falso in atto pubblico); ignorare la discrepanza (opzione C) contrasta con l'obbligo di veridicità del conto; attribuire la responsabilità a terzi senza verifica (opzione D) viola le più elementari garanzie procedurali. In chiave di leadership situazionale, lo stile corretto è "di massima trasparenza": la credibilità dell'agente contabile si costruisce proprio nella gestione onesta delle imperfezioni, non nella loro occultazione.`,
  },

  // ==================================================================
  // AMBITO 12 - Controlli della Corte dei Conti e Responsabilità Erariale
  // ==================================================================
  {
    id: 44,
    tipo: 'multiple',
    ambito: 'Controlli della Corte dei Conti e Responsabilità Erariale',
    livello: 'Alta Complessità',
    scenario: `Il Dirigente riceve una richiesta istruttoria della Procura della Corte dei Conti nell'ambito di un'indagine su una presunta irregolarità in una procedura di affidamento gestita dal proprio ufficio due anni prima, quando era in carica un suo predecessore. Come si comporta correttamente?`,
    opzioni: {
      A: `Rifiuta di fornire qualunque documentazione, ritenendo che la responsabilità riguardi esclusivamente il predecessore e non l'ufficio attualmente diretto.`,
      B: `Collabora pienamente e tempestivamente con la Procura contabile, fornendo la documentazione richiesta nei termini indicati senza esprimere valutazioni di merito che non gli competono in questa fase istruttoria, e valuta se dagli atti emergano elementi che richiedano l'adozione di misure organizzative correttive per il futuro, indipendentemente dall'esito del procedimento a carico del predecessore.`,
      C: `Occulta o altera la documentazione richiesta per tutelare l'immagine dell'ufficio.`,
      D: `Informa immediatamente e pubblicamente il personale dei dettagli dell'indagine, prima ancora di rispondere alla Procura.`,
    },
    rispostaCorretta: 'B',
    spiegazioneDettagliata: `Il Codice di giustizia contabile (D.Lgs. 174/2016) attribuisce alla Procura della Corte dei Conti autonomi poteri istruttori (richiesta di documenti, audizioni) cui le pubbliche amministrazioni sono tenute a collaborare tempestivamente. La responsabilità amministrativo-contabile è personale e non si estende automaticamente al successore nella carica, che risponde solo per condotte proprie; ciò non esime tuttavia il dirigente in carica dal dovere di cooperare con l'autorità inquirente e dal trarre, se opportuno, insegnamenti organizzativi dall'istruttoria in corso. Rifiutare la collaborazione (opzione A), occultare o alterare documenti (opzione C, che integra ulteriori e più gravi responsabilità) o diffondere pubblicamente dettagli di un'indagine riservata (opzione D) sono condotte gravemente scorrette. In chiave di leadership situazionale, lo stile corretto è "collaborativo-riservato": piena cooperazione con l'autorità di controllo, massima discrezione verso l'esterno.`,
  },
  {
    id: 45,
    tipo: 'multiple',
    ambito: 'Controlli della Corte dei Conti e Responsabilità Erariale',
    livello: 'Avanzato',
    scenario: `Prima di dare esecuzione a un contratto di appalto di importo particolarmente rilevante per l'ufficio, ci si chiede se l'atto debba essere preventivamente sottoposto al controllo di legittimità della Corte dei Conti prima di produrre effetti. Come valuta correttamente la questione il Dirigente?`,
    opzioni: {
      A: `Nessun atto amministrativo può mai essere sottoposto al controllo preventivo della Corte dei Conti, trattandosi di un organo con sole funzioni giurisdizionali.`,
      B: `Il controllo preventivo della Corte dei Conti riguarda esclusivamente gli atti legislativi del Parlamento, mai i provvedimenti amministrativi.`,
      C: `Verifica, in base alla disciplina sul controllo preventivo di legittimità (art. 3 L. 20/1994 e successive disposizioni attuative), se l'atto rientri tra le categorie di provvedimenti sottoposti a tale controllo in ragione della natura e dell'importo, e in caso positivo lo trasmette alla Corte dei Conti, che ne verifica la legittimità prima che l'atto acquisti piena efficacia, salvo il meccanismo della registrazione con riserva.`,
      D: `Decide discrezionalmente, di volta in volta, se sottoporre o meno l'atto al controllo della Corte dei Conti, in base a una propria valutazione di opportunità.`,
    },
    rispostaCorretta: 'C',
    spiegazioneDettagliata: `L'art. 3 della L. 20/1994 individua specifiche categorie di atti dello Stato soggetti al controllo preventivo di legittimità della Corte dei Conti, distinto dal controllo successivo sulla gestione (che si conclude con un referto generale e non condiziona l'efficacia del singolo atto): l'assoggettamento o meno di un determinato atto al controllo preventivo è una verifica tecnico-normativa da compiere caso per caso, non una scelta discrezionale del dirigente (opzione D), né una funzione riservata esclusivamente agli atti legislativi (opzione B) o esclusa in radice per qualunque atto amministrativo (opzione A, che confonde le funzioni giurisdizionali della Corte con le sue distinte funzioni di controllo). In chiave di leadership situazionale, lo stile corretto è "verificativo-scrupoloso": la sussistenza di un obbligo di legge si accerta, non si valuta secondo opportunità.`,
  },

  // ==================================================================
  // QUESITI A RISPOSTA APERTA (id 16-30 e 46-60)
  // ==================================================================

  // --- Ambito 1 ---
  {
    id: 16,
    tipo: 'open',
    ambito: 'Relazioni Sindacali e RSU',
    livello: 'Alta Complessità',
    scenario: `È il mese di dicembre. Il personale amministrativo di una Corte d'Appello, aderendo a un'agitazione sindacale nazionale del comparto Giustizia, proclama uno sciopero di 24 ore per il giorno in cui sono fissate udienze con detenuti in stato di custodia cautelare prossimi alla scadenza dei termini di fase, oltre a numerose udienze civili con termini perentori. Il Dirigente Amministrativo deve garantire il rispetto della legge sullo sciopero nei servizi pubblici essenziali senza comprimere il diritto di sciopero, e al contempo assicurare la continuità delle attività indifferibili. Descriva la strategia operativa che adotterebbe nei giorni precedenti e nel giorno dello sciopero.`,
    rispostaModello: `Il dirigente attiva con congruo anticipo la procedura prevista dalla L. 146/1990 (come modificata dalla L. 83/2000) e dagli accordi/codici di autoregolamentazione di settore per il comparto Giustizia, verificando il rispetto del preavviso minimo e curando la comunicazione all'utenza e, se richiesto, alla Commissione di Garanzia. Individua con il capo dell'ufficio giudiziario, nell'ambito della leale collaborazione istituzionale prevista dal D.Lgs. 240/2006, le prestazioni indispensabili da garantire (udienze con detenuti prossimi alla scadenza dei termini di custodia cautelare, adempimenti con termini perentori non prorogabili), individuando nominativamente il personale del contingente minimo secondo criteri oggettivi e non discriminatori, comunicati con congruo anticipo agli interessati e alla RSU. Predispone un piano di comunicazione trasparente verso magistratura, avvocatura e utenza sulle udienze garantite e su quelle eventualmente da rinviare. Evita sia di comprimere indebitamente il diritto di sciopero individuando un contingente sovradimensionato, sia di lasciare sguarnite le attività indifferibili. L'errore più grave sarebbe agire in ordine sparso senza una preventiva mappatura delle scadenze indifferibili o senza formalizzare per iscritto i criteri di individuazione del personale precettato, esponendo l'amministrazione a contenzioso sindacale e, insieme, a responsabilità per pregiudizio ai diritti processuali delle parti.`,
  },
  {
    id: 17,
    tipo: 'open',
    ambito: 'Relazioni Sindacali e RSU',
    livello: 'Avanzato',
    scenario: `Il Dirigente propone un nuovo orario di apertura al pubblico degli sportelli di cancelleria, con l'obiettivo di ampliare la fascia di ricevimento per l'utenza in linea con gli obiettivi di miglioramento del servizio previsti dal PNRR. La RSU si oppone frontalmente, giudicando la proposta peggiorativa delle condizioni di lavoro e rifiutandosi di sottoscrivere qualunque accordo, minacciando di segnalare la vicenda come "comportamento antisindacale" qualora il dirigente proceda comunque. Come gestisce la situazione, e quali sono i margini per un'eventuale decisione unilaterale?`,
    rispostaModello: `Il dirigente avvia formalmente il confronto previsto dal sistema delle relazioni sindacali del CCNL Comparto Funzioni Centrali, mettendo a disposizione della RSU i dati e le motivazioni organizzative (esigenze di utenza, indicatori PNRR, comparazione con altri uffici) e ricercando, entro un termine definito, una soluzione condivisa anche mediante soluzioni intermedie (turnazione volontaria, banca ore, orario differenziato per sezioni). Qualora, esperito realmente e in buona fede il confronto, permanga il dissenso della RSU su una materia che attiene all'organizzazione degli uffici e non alla contrattazione integrativa in senso proprio, il dirigente può legittimamente assumere la decisione in via unilaterale ai sensi dell'art. 5, comma 2, D.Lgs. 165/2001, motivandola analiticamente e comunicandola con congruo preavviso, poiché il potere organizzativo datoriale non è nella disponibilità delle parti sindacali. Cura in ogni caso la tracciabilità documentale dell'iter (verbali degli incontri, note scritte) a tutela dell'amministrazione da un'eventuale azione ex art. 28 L. 300/1970, che presuppone una condotta effettivamente lesiva delle prerogative sindacali e non la mera dissenting opinion della RSU. L'errore da evitare è tanto il cedimento immotivato quanto l'imposizione senza alcun reale confronto preventivo, procedimentalmente scorretta anche se sostanzialmente legittima nel merito.`,
  },

  // --- Ambito 2 ---
  {
    id: 18,
    tipo: 'open',
    ambito: 'Riorganizzazione Cancellerie e PNRR',
    livello: 'Alta Complessità',
    scenario: `Il suo Tribunale è significativamente in ritardo sul target Cassazione Fase 2 del PNRR (riduzione dell'arretrato civile), e l'organico di cancelleria si è ridotto del 20% per pensionamenti non ancora sostituiti. Delinei un piano di riorganizzazione complessivo per recuperare il ritardo, indicando priorità, strumenti e modalità di monitoraggio.`,
    rispostaModello: `Il dirigente avvia anzitutto una mappatura analitica dei processi di cancelleria e dei carichi pendenti per sezione/materia, distinguendo attività a valore aggiunto da attività automatizzabili o eliminabili, con il supporto degli strumenti statistici ministeriali e del referente PNRR distrettuale. Predispone quindi un piano che integri: una redistribuzione temporanea e motivata del personale verso le aree più critiche, condivisa con i presidenti di sezione secondo il modello di leale collaborazione del D.Lgs. 240/2006; il pieno impiego dell'Ufficio per il Processo per le attività di supporto alla decisione e di smaltimento dell'arretrato, con priorità ai procedimenti ultra-triennali; l'informativa e il confronto con la RSU sulle ricadute organizzative, per prevenire tensioni; la richiesta formale e motivata al Ministero/Presidente della Corte d'Appello di interventi sul personale (mobilità, comando, nuove assunzioni) a copertura della carenza di organico. Il piano include indicatori di monitoraggio periodico (andamento delle pendenze, età media del contenzioso, produttività per sezione) condivisi in un cruscotto direzionale, con revisione trimestrale delle misure adottate. Gli errori da evitare: agire senza dati oggettivi, redistribuire il personale in modo permanente senza un piano di rientro, e trascurare la comunicazione trasparente con magistratura e personale, condizione essenziale per la tenuta sociale di qualunque riorganizzazione.`,
  },
  {
    id: 19,
    tipo: 'open',
    ambito: 'Riorganizzazione Cancellerie e PNRR',
    livello: 'Avanzato',
    scenario: `La digitalizzazione dei flussi tra cancelleria e Ufficio per il Processo ha determinato, nella pratica, una duplicazione di alcune attività (doppio inserimento dati su piattaforme diverse) e un diffuso senso di demotivazione tra il personale, che percepisce l'innovazione come un aggravio anziché una semplificazione. Quale strategia di reingegnerizzazione dei processi adotterebbe?`,
    rispostaModello: `Il dirigente costituisce un gruppo di lavoro misto (cancellieri, funzionari UPP, referente informatico) per mappare puntualmente il flusso "as is" e individuare i punti di duplicazione e le cause profonde (mancata integrazione applicativa, prassi difensive, formazione inadeguata). Sulla base di questa mappatura, ridisegna il flusso "to be" eliminando le attività ridondanti, definendo con chiarezza le responsabilità di inserimento dati in capo a un solo attore per fase, e attivando un'interlocuzione formale con la DGSIA per le criticità applicative non risolvibili localmente. Accompagna il cambiamento con un piano di formazione mirata e con momenti di ascolto strutturato del personale, per trasformare la resistenza al cambiamento in corresponsabilità, valorizzando le proposte di miglioramento provenienti dal basso. Comunica con trasparenza al personale le ragioni del cambiamento e i benefici attesi nel medio periodo, evitando promesse irrealistiche nel breve, e monitora gli indicatori di produttività per intervenire tempestivamente se l'arretrato cresce oltre soglie fisiologiche di transizione. L'errore da evitare è imporre il nuovo processo dall'alto senza un'analisi preventiva delle cause della duplicazione, così come sottovalutare l'impatto motivazionale di un cambiamento percepito come meramente impositivo.`,
  },

  // --- Ambito 3 ---
  {
    id: 20,
    tipo: 'open',
    ambito: 'Rapporti Dirigente-Magistratura',
    livello: 'Alta Complessità',
    scenario: `Da alcuni mesi è in atto un conflitto persistente e sempre più pubblico tra il Dirigente e il Presidente di una sezione penale riguardo alla gestione del personale di udienza (assistenti giudiziari), con reciproche rimostranze che hanno iniziato a compromettere il clima organizzativo dell'intero ufficio e a essere oggetto di commenti informali tra il personale. Come affronta la situazione?`,
    rispostaModello: `Il dirigente evita innanzitutto che il conflitto prosegua attraverso canali informali o pubblici, e ne propone la trattazione in una sede istituzionale dedicata: un incontro diretto e riservato con il Presidente di sezione, eventualmente allargato al Presidente del Tribunale, o la Conferenza permanente per il funzionamento degli uffici giudiziari ex D.Lgs. 240/2006, nella quale ricostruire in modo oggettivo i fatti e le rispettive posizioni, distinguendo ciò che attiene alla gestione del personale (di propria competenza) da ciò che attiene all'organizzazione dell'attività giurisdizionale (di competenza del Presidente). Propone regole di collaborazione scritte e condivise per il futuro (referenti, canali di comunicazione, tempi di risposta), per prevenire il ripetersi di incomprensioni. Cura con particolare attenzione la comunicazione verso il personale, evitando di coinvolgere i dipendenti nel conflitto e riaffermando con equilibrio l'autorevolezza del proprio ruolo gestionale, senza mai delegittimare pubblicamente la controparte istituzionale. Se il conflitto permane irrisolto, valuta di rappresentarlo formalmente e per iscritto al Presidente della Corte d'Appello, quale sede di garanzia superiore. L'errore da evitare è alimentare la contrapposizione pubblica o cercare il consenso del personale contro la magistratura, che comprometterebbe irreparabilmente la coesione dell'ufficio.`,
  },
  {
    id: 21,
    tipo: 'open',
    ambito: 'Rapporti Dirigente-Magistratura',
    livello: 'Alta Complessità',
    scenario: `Durante un'assemblea del personale, il Presidente di una sezione critica apertamente e in modo diretto le scelte organizzative recentemente adottate dal Dirigente in materia di redistribuzione del personale di cancelleria, mettendone in discussione pubblicamente la competenza gestionale davanti ai dipendenti. Come gestisce il Dirigente questa crisi di autorevolezza e la comunicazione conseguente?`,
    rispostaModello: `Il dirigente evita di reagire nell'immediatezza dell'assemblea con toni polemici o difensivi che amplificherebbero la contrapposizione davanti al personale, mantenendo un atteggiamento istituzionale e rinviando il confronto di merito a una sede più opportuna e riservata con il Presidente di sezione. Successivamente, richiede un incontro diretto per chiarire i fraintendimenti, ribadendo con fermezza ma senza toni polemici il perimetro delle proprie competenze gestionali (artt. 5 e 16 D.Lgs. 165/2001, D.Lgs. 240/2006) e ascoltando le ragioni di merito sollevate, che possono comunque contenere elementi utili di miglioramento della decisione organizzativa. Predispone quindi una comunicazione chiara e trasparente al personale sulle motivazioni tecniche della redistribuzione, con dati oggettivi a supporto, per ricostruire fiducia e autorevolezza senza alimentare la contrapposizione con il magistrato. Se la situazione si ripete o assume toni lesivi, la rappresenta formalmente in sede istituzionale superiore (Presidente del Tribunale/Corte d'Appello). L'errore più grave sarebbe rispondere pubblicamente nella stessa assemblea con toni polemici, così come non riaffermare in alcun modo il proprio ruolo, lasciando che l'ambiguità di competenze si consolidi agli occhi del personale.`,
  },

  // --- Ambito 4 ---
  {
    id: 22,
    tipo: 'open',
    ambito: 'Digitalizzazione e Continuità Operativa (PCT/PDP)',
    livello: 'Alta Complessità',
    scenario: `Il Portale Deposito atti Penali (PDP) rimane inutilizzabile per un guasto tecnico prolungato di 48 ore, proprio durante una fase di particolare intensità dei depositi relativi a procedimenti con termini di indagine in scadenza. Difensori e Procura segnalano il rischio di decadenze. Delinei il piano di gestione dell'emergenza che attiverebbe.`,
    rispostaModello: `Il dirigente attiva immediatamente l'interlocuzione con DGSIA per ottenere la formale attestazione del malfunzionamento, presupposto necessario per l'applicazione delle modalità sostitutive di deposito previste dalla disciplina del processo penale telematico. Nel frattempo organizza, in coordinamento con la Procura e la Presidenza, un servizio straordinario di ricezione degli atti in modalità sostitutiva (deposito cartaceo o a mezzo posta elettronica certificata, secondo quanto previsto dalla normativa e dai provvedimenti organizzativi emergenziali), assicurando la tracciabilità di ogni deposito ricevuto - protocollazione tempestiva, indicazione dell'orario esatto di ricezione - per tutelare i diritti delle parti sulla tempestività del deposito. Predispone una comunicazione ufficiale e capillare verso l'avvocatura e la Procura sulle modalità sostitutive attivate e sui relativi orari di disponibilità degli uffici. Rinforza temporaneamente il personale addetto alla ricezione, se necessario tramite riorganizzazione interna degli sportelli. Al ripristino del sistema, cura il riversamento ordinato e tracciato di tutti gli atti ricevuti in modalità sostitutiva. L'errore da evitare è affrontare l'emergenza senza una regia unica e tracciata, con il rischio concreto di contestazioni sulla tempestività dei depositi e di eventuali nullità o decadenze processuali imputabili a un disservizio non correttamente gestito sul piano amministrativo.`,
  },
  {
    id: 23,
    tipo: 'open',
    ambito: 'Digitalizzazione e Continuità Operativa (PCT/PDP)',
    livello: 'Avanzato',
    scenario: `L'introduzione di un nuovo applicativo ministeriale per la gestione documentale digitale, sostitutivo di prassi consolidate da anni, incontra una forte resistenza operativa nelle cancellerie: il personale lamenta rallentamenti, errori frequenti e una curva di apprendimento che si traduce in accumulo di arretrato nelle prime settimane. Quale strategia di change management adotterebbe per gestire la transizione?`,
    rispostaModello: `Il dirigente riconosce la resistenza al cambiamento come una reazione fisiologica e non come mero ostruzionismo, e costruisce un percorso di accompagnamento strutturato: identifica per tempo, prima o subito dopo il go-live, i "campioni del cambiamento" tra il personale più propenso, da formare in modo approfondito e da impiegare come tutor interni per i colleghi; organizza sessioni di formazione pratica mirate sui casi d'uso più frequenti e uno sportello di supporto interno nelle prime settimane critiche; raccoglie sistematicamente le segnalazioni di malfunzionamento o difficoltà d'uso, distinguendo i problemi realmente tecnici, da inoltrare a DGSIA, dalle difficoltà di apprendimento, da affrontare con formazione mirata. Comunica con trasparenza al personale le ragioni del cambiamento e i benefici attesi nel medio periodo, evitando promesse irrealistiche nel breve, e monitora gli indicatori di produttività per intervenire tempestivamente se l'arretrato cresce oltre soglie fisiologiche di transizione, eventualmente rimodulando temporaneamente i carichi di lavoro. L'errore da evitare è imporre il cambiamento senza accompagnamento e poi attribuire colposamente al personale i cali di produttività che sono, in una fase iniziale, un effetto atteso e fisiologico di qualunque transizione tecnologica.`,
  },
  {
    id: 24,
    tipo: 'open',
    ambito: 'Digitalizzazione e Continuità Operativa (PCT/PDP)',
    livello: 'Avanzato',
    scenario: `Da alcune settimane giunge una crescente mole di segnalazioni informali da parte del personale di cancelleria su un malfunzionamento ricorrente, ma non ancora ufficialmente riconosciuto da DGSIA, di una funzionalità del PCT che genera duplicazioni nei fascicoli telematici, con un impatto crescente sul lavoro quotidiano. L'assistenza di primo livello ministeriale non ha ancora fornito risposte risolutive. Come gestisce l'escalation di questa criticità tecnica non riconosciuta?`,
    rispostaModello: `Il dirigente predispone, tramite il referente informatico locale, una raccolta sistematica e documentata delle occorrenze del malfunzionamento (data, ora, fascicolo, tipologia di anomalia, riscontri tecnici disponibili), trasformando le segnalazioni informali in un dossier tecnico oggettivo e verificabile, condizione essenziale per ottenere un'effettiva presa in carico da parte dei livelli superiori di assistenza. Formalizza quindi per iscritto la segnalazione a DGSIA, richiedendo un riscontro con tempistiche definite ed eventualmente coinvolgendo, per le vie brevi, il referente distrettuale per l'innovazione. Se il problema permane irrisolto e continua a incidere sull'operatività, valuta l'adozione di soluzioni organizzative temporanee di mitigazione (prassi di verifica manuale aggiuntiva, doppio controllo) per contenere il rischio di errori nei fascicoli, comunicandole chiaramente al personale come misura transitoria e non definitiva. Tiene costantemente informato il personale sullo stato dell'escalation, per evitare che la percezione di un problema ignorato alimenti ulteriore demotivazione. L'errore da evitare è liquidare le segnalazioni come problemi isolati senza una raccolta sistematica dei dati, che è ciò che permette di trasformare un disagio percepito in un'anomalia tecnica oggettivamente dimostrabile e quindi trattabile ai livelli competenti.`,
  },

  // --- Ambito 5 ---
  {
    id: 25,
    tipo: 'open',
    ambito: 'Gestione del Personale, Disciplina e Smart Working',
    livello: 'Avanzato',
    scenario: `È necessario avviare un procedimento disciplinare nei confronti di un dipendente di cancelleria che risulta aver effettuato, senza alcuna autorizzazione né motivo di servizio, accessi ripetuti al fascicolo informatico di un procedimento riguardante una persona a lui nota. Descriva l'iter che seguirebbe come Dirigente, dalla rilevazione del fatto fino alla conclusione del procedimento.`,
    rispostaModello: `Il dirigente, appena venuto a conoscenza del fatto, ne valuta la rilevanza disciplinare e trasmette tempestivamente la segnalazione all'Ufficio Procedimenti Disciplinari (UPD), competente per le infrazioni di maggiore gravità ai sensi dell'art. 55-bis D.Lgs. 165/2001, assicurando nel frattempo, se necessario e proporzionato, misure cautelari organizzative come la sospensione temporanea dei permessi di accesso. L'UPD contesta per iscritto l'addebito al dipendente entro i termini di legge, garantendo il diritto al contraddittorio - facoltà di essere sentito con l'assistenza di un rappresentante sindacale, di presentare memorie difensive - prima di ogni decisione. Il dirigente, se richiesto, fornisce all'UPD ogni elemento istruttorio utile, mantenendo riservatezza sui dati personali coinvolti. La sanzione finale, se accertata la responsabilità, viene irrogata dall'UPD nel rispetto del principio di proporzionalità rispetto alla gravità del fatto e tenendo conto degli eventuali precedenti disciplinari. Il dirigente valuta altresì se il fatto integri profili di rilevanza per la protezione dei dati personali, con eventuale necessità di informativa al Garante Privacy in caso di data breach, e per la prevenzione della corruzione, aggiornando se necessario le misure di controllo sugli accessi. L'errore da evitare è gestire la vicenda informalmente, richiamando verbalmente il dipendente senza attivare il procedimento formale dovuto, il che espone il dirigente stesso a responsabilità per omessa vigilanza.`,
  },
  {
    id: 26,
    tipo: 'open',
    ambito: 'Gestione del Personale, Disciplina e Smart Working',
    livello: 'Avanzato',
    scenario: `Un dipendente storicamente caratterizzato da bassa produttività e scarsa motivazione richiede di essere ammesso al lavoro agile, sostenendo che le condizioni domestiche gli garantirebbero maggiore concentrazione. Altri colleghi, più performanti, osservano la situazione e si aspettano equità di trattamento. Come bilancia il Dirigente le esigenze organizzative, l'equità verso il resto del personale e l'opportunità di valorizzare/recuperare la motivazione del dipendente?`,
    rispostaModello: `Il dirigente evita sia un rifiuto automatico basato sui soli precedenti di scarso rendimento, sia una concessione automatica priva di condizioni, poiché il lavoro agile ai sensi della L. 81/2017 è subordinato a un accordo individuale che il datore di lavoro pubblico può conformare a specifiche condizioni organizzative e di verificabilità dei risultati, nel rispetto dei criteri generali definiti dal CCNL Funzioni Centrali e dalle linee guida dell'amministrazione. Valuta quindi la richiesta subordinandola alla definizione di obiettivi individuali chiari, misurabili e verificabili a breve termine - un patto di rientro sulla performance - con un periodo di prova e un monitoraggio ravvicinato degli esiti, comunicando trasparentemente al dipendente che il beneficio è condizionato al miglioramento dei risultati. Comunica altresì, in modo generale e non nominativo, i criteri di accesso al lavoro agile a tutto il personale, per garantire percezione di equità e prevenire rivendicazioni di disparità di trattamento. Se il monitoraggio evidenzia il mancato raggiungimento degli obiettivi concordati, revoca motivatamente l'accordo. L'errore da evitare è trattare il lavoro agile come una ricompensa indifferenziata o, all'opposto, come uno strumento riservato solo ai già performanti, perdendo l'occasione di utilizzarlo come leva di recupero motivazionale se ben strutturato e monitorato.`,
  },
  {
    id: 27,
    tipo: 'open',
    ambito: 'Gestione del Personale, Disciplina e Smart Working',
    livello: 'Avanzato',
    scenario: `Dopo alcuni mesi di applicazione estesa del lavoro agile, emergono criticità: calo della produttività complessiva della cancelleria, difficoltà di coordinamento tra presenza e remoto, e percezione di disparità tra chi lavora sempre in presenza (per ragioni di servizio, es. sportello) e chi beneficia di più giornate da remoto. Come ridisegna la policy di smart working dell'ufficio?`,
    rispostaModello: `Il dirigente avvia una revisione strutturata della policy di lavoro agile, partendo da un'analisi oggettiva dei dati di produttività per ufficio/mansione e da un confronto con la RSU nelle forme previste dal CCNL Funzioni Centrali, distinguendo le attività compatibili con il lavoro da remoto (studio, redazione, back-office) da quelle che richiedono necessariamente la presenza fisica (sportello, front-office, attività su archivi non digitalizzati). Ridefinisce criteri oggettivi e trasparenti di accesso e di quantificazione delle giornate di lavoro agile per mansione, introduce strumenti di verifica del lavoro per obiettivi/risultati anziché di mera presenza, e prevede meccanismi di rotazione o compensazione (es. flessibilità oraria) per il personale che, per ragioni di servizio, non può accedere al lavoro agile nella stessa misura, per attenuare la percezione di disparità. Comunica la nuova policy con chiarezza a tutto il personale, motivandola sui dati raccolti, e ne prevede una verifica periodica degli effetti su produttività e clima organizzativo, con possibilità di aggiustamenti. L'errore da evitare è sopprimere in modo generalizzato e reattivo il lavoro agile per rispondere a un problema che è, nella maggior parte dei casi, di progettazione e controllo della policy piuttosto che dello strumento in sé.`,
  },

  // --- Ambito 6 ---
  {
    id: 28,
    tipo: 'open',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Alta Complessità',
    scenario: `In vista di una verifica ANAC, il Dirigente rileva che il Piano Triennale di Prevenzione della Corruzione e della Trasparenza (PTPCT) del proprio ufficio risulta scaduto da tempo e non aggiornato rispetto alle riorganizzazioni intervenute (nuovo Ufficio per il Processo, nuovi processi digitalizzati). Delinei il piano di adeguamento urgente che attiverebbe.`,
    rispostaModello: `Il dirigente attiva immediatamente un'interlocuzione con il RPCT, distrettuale o di struttura a seconda del modello organizzativo adottato, per una ricognizione congiunta dello stato di attuazione del PTPCT vigente e delle criticità di aggiornamento, dando priorità alla mappatura dei processi e delle aree di rischio non più corrispondenti all'assetto organizzativo attuale, in particolare i nuovi flussi legati all'Ufficio per il Processo e alla digitalizzazione dei depositi. Predispone un cronoprogramma stringente per l'aggiornamento della mappatura dei rischi, l'individuazione delle misure di prevenzione specifiche - controlli, rotazione o misure equivalenti, trasparenza - e la loro assegnazione a referenti responsabili con termini certi, coinvolgendo il personale interessato nella ricognizione operativa dei processi. Cura il coordinamento con gli obblighi di trasparenza (D.Lgs. 33/2013), verificando la pubblicazione tempestiva e corretta dei dati obbligatori nella sezione "Amministrazione Trasparente". Programma un'attività formativa mirata per i referenti e per il personale sulle misure aggiornate, e definisce un sistema di monitoraggio periodico, semestrale, dello stato di attuazione, da riportare al RPCT. Documenta con cura l'intero processo di adeguamento, anche in vista della verifica ANAC. L'errore da evitare è produrre un aggiornamento meramente formale e ripetitivo del piano precedente, senza un'effettiva analisi dei rischi legati ai nuovi assetti organizzativi, il che vanificherebbe la funzione sostanziale dello strumento.`,
  },
  {
    id: 29,
    tipo: 'open',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Alta Complessità',
    scenario: `Emergono elementi che fanno sospettare un conflitto di interessi non dichiarato riguardante un funzionario di cancelleria coinvolto nell'istruttoria di un affidamento diretto di modesto importo a favore di un fornitore con cui risulta avere rapporti extra-lavorativi non resi noti. Come gestisce la situazione nel rispetto della normativa su trasparenza e anticorruzione?`,
    rispostaModello: `Il dirigente avvia una verifica preliminare riservata sugli elementi disponibili - documentazione della procedura, dichiarazioni di insussistenza di conflitti di interesse eventualmente rese o omesse, natura e rilevanza dei rapporti extra-lavorativi segnalati - evitando sia di ignorare la segnalazione sia di trarre conclusioni affrettate prima di una verifica adeguata. Coinvolge tempestivamente il RPCT per una valutazione condivisa, nel rispetto della riservatezza dovuta a tutte le parti coinvolte. Se la verifica conferma l'esistenza di un conflitto di interessi non dichiarato, dispone l'immediata sospensione dell'efficacia dell'affidamento, ove ancora possibile, o comunque la sua rivalutazione, assegna l'istruttoria a un diverso funzionario, e valuta, in raccordo con l'UPD, l'eventuale rilevanza disciplinare della omessa dichiarazione ai sensi del Codice di comportamento (DPR 62/2013) e dell'art. 55-bis D.Lgs. 165/2001, oltre a un'eventuale rilevanza penale da rimettere, se sussistente, all'Autorità Giudiziaria. Aggiorna infine le misure di controllo del PTPCT sull'area di rischio "affidamenti diretti", rafforzando gli obblighi di dichiarazione preventiva di insussistenza di conflitti di interesse per ogni procedura, anche di modesto importo. L'errore da evitare è gestire la vicenda in modo informale o protettivo verso il collega coinvolto, il che comprometterebbe la credibilità dell'intero sistema di prevenzione della corruzione dell'ufficio.`,
  },
  {
    id: 30,
    tipo: 'open',
    ambito: 'Anticorruzione e Trasparenza (L. 190/2012)',
    livello: 'Avanzato',
    scenario: `Il Dirigente intende implementare un sistema strutturato di rotazione degli incarichi per le aree a più elevato rischio di corruzione dell'ufficio (gestione dei depositi giudiziari, cassa, gestione dei reperti), senza tuttavia disorganizzare la continuità e la qualità del servizio, in un contesto di organico già limitato. Come progetta questo intervento?`,
    rispostaModello: `Il dirigente avvia anzitutto, in raccordo con il RPCT, un'analisi puntuale delle aree e delle posizioni effettivamente a rischio, distinguendo le competenze specialistiche non facilmente sostituibili nel breve periodo da quelle per cui la rotazione è concretamente sostenibile. Predispone un piano di rotazione graduale e pluriennale, anziché una rotazione traumatica e simultanea, prevedendo per ogni posizione un periodo di affiancamento e formazione tra il titolare uscente e il subentrante, per non disperdere competenze tecniche e garantire continuità operativa. Per le posizioni in cui la rotazione non risulti nell'immediato sostenibile per carenza di personale adeguatamente formato, individua misure di mitigazione equivalenti - doppia sottoscrizione, controlli incrociati periodici, verifiche a campione da parte di un soggetto terzo - da formalizzare nel PTPCT come misure transitorie, con un termine per il superamento tramite formazione mirata di nuovo personale. Comunica il piano con trasparenza al personale interessato, inquadrandolo come misura organizzativa di sistema e non come sfiducia verso i singoli dipendenti, per prevenire un impatto motivazionale negativo. Monitora periodicamente l'attuazione del piano riferendone al RPCT. L'errore da evitare è annunciare una rotazione generalizzata senza un piano di transizione delle competenze, con il rischio concreto di paralizzare temporaneamente servizi delicati come la gestione di cassa o dei reperti giudiziari.`,
  },

  // --- Ambito 7 ---
  {
    id: 46,
    tipo: 'open',
    ambito: 'Bilancio dello Stato e Programmazione della Spesa',
    livello: 'Alta Complessità',
    scenario: `Il Dirigente deve predisporre la proposta di bilancio di previsione per l'anno successivo relativa alle esigenze di funzionamento e investimento del proprio ufficio, in un contesto di risorse complessivamente in contrazione a livello di sistema giudiziario e con richieste dei responsabili di settore che eccedono ampiamente i margini realisticamente ottenibili. Descriva il metodo che adotterebbe per costruire una proposta di bilancio credibile e difendibile.`,
    rispostaModello: `Il dirigente avvia il processo di programmazione partendo da un'analisi storica della spesa effettivamente sostenuta negli ultimi esercizi per voce di bilancio, distinguendo le spese obbligatorie e ricorrenti (utenze, contratti pluriennali, spese di giustizia) da quelle discrezionali e comprimibili nel breve periodo, in coerenza con i principi di programmazione e di realismo previsionale della L. 196/2009. Richiede ai responsabili di settore proposte motivate e quantificate, corredate da indicatori di impatto sul servizio in caso di mancato finanziamento, per poter operare una selezione di priorità basata su criteri oggettivi (urgenza, obbligatorietà normativa, impatto sulla continuità del servizio e sugli obiettivi PNRR) anziché sulla forza contrattuale interna dei singoli responsabili. Costruisce così una proposta di bilancio realistica e difendibile, articolata per priorità decrescenti, da rappresentare al livello ministeriale competente con una nota esplicativa trasparente sulle scelte operate e sui rischi organizzativi delle voci non finanziate. Nel corso dell'esercizio, monitora periodicamente lo scostamento tra previsione e spesa effettiva per affinare le proposte future. L'errore da evitare è costruire la proposta come mera sommatoria acritica delle richieste di settore, senza gerarchia di priorità: un simile approccio, oltre a essere probabilmente respinto in sede di assegnazione, priva il dirigente di uno strumento di governo trasparente delle scelte allocative in corso d'anno.`,
  },
  {
    id: 47,
    tipo: 'open',
    ambito: 'Bilancio dello Stato e Programmazione della Spesa',
    livello: 'Avanzato',
    scenario: `Un controllo di gestione interno segnala al Dirigente che, negli ultimi tre esercizi, alcune voci di spesa dell'ufficio presentano scostamenti significativi e ricorrenti tra stanziamento e spesa effettiva (sia in eccesso che in difetto), senza che siano mai state analizzate le cause. Come utilizza il Dirigente questa segnalazione per migliorare la programmazione futura?`,
    rispostaModello: `Il dirigente considera la segnalazione un'occasione per introdurre un effettivo controllo di gestione sulla programmazione di bilancio: costituisce un cruscotto periodico, almeno trimestrale, di confronto tra stanziamento, impegni assunti e spesa effettiva per ciascuna voce significativa, individuando le cause ricorrenti degli scostamenti (stime previsionali non aggiornate, eventi imprevedibili, ritardi procedurali nell'assunzione degli impegni). Per le voci sistematicamente sovrastimate, propone una rimodulazione della previsione futura verso il basso, liberando margini da destinare a voci sottostimate; per le voci sistematicamente sottostimate per cause strutturali (ad esempio l'aumento delle tariffe delle utenze), propone un adeguamento motivato della richiesta di stanziamento. Condivide l'analisi con i responsabili di settore coinvolti, per responsabilizzarli sulla qualità delle proprie stime, e ne dà conto, se richiesto, in sede di rendicontazione al Ministero. L'errore da evitare è trattare lo scostamento come un dato meramente contabile da chiudere a fine esercizio, senza mai risalire alle cause: ciò perpetua nel tempo previsioni inaffidabili e riduce la credibilità delle richieste di bilancio dell'ufficio.`,
  },

  // --- Ambito 8 ---
  {
    id: 48,
    tipo: 'open',
    ambito: 'Gestione del Budget degli Uffici Giudiziari',
    livello: 'Alta Complessità',
    scenario: `Il Ministero comunica una riduzione del budget annuale di funzionamento assegnato al distretto per l'anno in corso, da ripartire tra i diversi uffici giudiziari del territorio. Il Dirigente, che partecipa anche al confronto con gli altri dirigenti del distretto in sede di tavolo tecnico permanente, deve contribuire a definire criteri di riparto equi tra uffici di dimensioni e criticità diverse. Come procede?`,
    rispostaModello: `Il dirigente propone, in sede di tavolo tecnico distrettuale, di ancorare il riparto della riduzione a criteri oggettivi e trasparenti (dimensione dell'organico e dell'utenza servita, superficie e complessità degli immobili, spesa storica sostenuta, presenza di contratti pluriennali non comprimibili nel breve periodo) piuttosto che a una riduzione lineare uniforme, che penalizzerebbe in modo sproporzionato gli uffici con costi fissi già elevati o con minori margini di flessibilità. Richiede una ricognizione preventiva, da parte di ciascun ufficio, delle spese obbligatorie non comprimibili (utenze, sicurezza, contratti di manutenzione già impegnati) da salvaguardare prioritariamente, per concentrare l'impatto della riduzione sulle voci realmente discrezionali. Cura che il criterio concordato sia formalizzato per iscritto e comunicato con trasparenza a tutti gli uffici del distretto, per prevenire contenziosi interni sulla percezione di un trattamento discriminatorio. Per il proprio ufficio, applica lo stesso metodo di analisi predisponendo un piano di contenimento della spesa che privilegi le voci meno critiche per la continuità del servizio. L'errore da evitare è affrontare la riduzione con negoziati informali basati sui rapporti personali tra dirigenti, anziché su criteri oggettivi condivisi, il che alimenterebbe sfiducia reciproca e comprometterebbe la collaborazione futura tra gli uffici del distretto.`,
  },
  {
    id: 49,
    tipo: 'open',
    ambito: 'Gestione del Budget degli Uffici Giudiziari',
    livello: 'Alta Complessità',
    scenario: `Durante il fine settimana, un guasto improvviso all'impianto idrico provoca un allagamento in un'ala dell'edificio giudiziario, danneggiando alcuni locali di cancelleria e rendendo indisponibili due aule di udienza per la settimana successiva. Il budget ordinario di manutenzione non prevede margini per un intervento di questa portata. Delinei la strategia del Dirigente nelle ore e nei giorni immediatamente successivi.`,
    rispostaModello: `Il dirigente, appena informato, dispone l'immediata messa in sicurezza dei locali (interruzione delle utenze interessate, transennamento delle aree a rischio) avvalendosi del personale tecnico reperibile, e attiva una ricognizione fotografica e documentale del danno, presupposto necessario per qualunque successiva richiesta di intervento straordinario. Valuta se ricorrano i presupposti per una procedura di somma urgenza prevista dalla disciplina dei contratti pubblici (D.Lgs. 36/2023) per l'affidamento immediato dei lavori indispensabili al ripristino della sicurezza e dell'agibilità, formalizzando comunque a posteriori, nei termini di legge, gli atti a copertura dell'intervento. Riorganizza nel frattempo il calendario delle udienze interessate, in coordinamento con la Presidenza, individuando aule alternative disponibili nell'edificio o, se necessario, rinviando le udienze non indifferibili con adeguato preavviso alle parti. Attiva contestualmente, tramite il canale ministeriale competente (SIAMM), la richiesta di un'integrazione straordinaria di budget per coprire l'intervento, documentando puntualmente costi e urgenza. Comunica con tempestività e chiarezza a magistratura, personale e utenza sull'evoluzione della situazione e sui tempi di ripristino stimati. L'errore da evitare è agire senza una regia unica e senza documentazione tempestiva del danno e dell'intervento, il che comprometterebbe sia la sicurezza delle persone sia la possibilità di ottenere un riconoscimento amministrativo-contabile regolare della spesa straordinaria sostenuta in urgenza.`,
  },
  {
    id: 50,
    tipo: 'open',
    ambito: 'Gestione del Budget degli Uffici Giudiziari',
    livello: 'Avanzato',
    scenario: `In sede di rendicontazione annuale al Ministero sull'utilizzo del budget di funzionamento assegnato all'ufficio, perviene una richiesta di chiarimenti su alcune voci di spesa che risultano superiori alla media degli uffici di dimensioni comparabili. Come predispone il Dirigente la risposta?`,
    rispostaModello: `Il dirigente ricostruisce analiticamente le voci di spesa oggetto di rilievo, distinguendo le cause strutturali (caratteristiche dell'immobile, contratti pluriennali ereditati da gestioni precedenti, condizioni di mercato locali) da eventuali inefficienze effettivamente correggibili, evitando sia di minimizzare la richiesta di chiarimenti sia di fornire una risposta difensiva priva di dati oggettivi. Predispone una relazione documentata che confronti la spesa dell'ufficio con parametri di riferimento pertinenti (superficie, organico, numero di procedimenti gestiti), spiegando in modo trasparente gli scostamenti motivati e individuando, per le voci in cui riconosce effettivi margini di efficientamento, un piano di intervento con tempi e modalità (rinegoziazione di contratti in scadenza, ricorso a convenzioni CONSIP non ancora utilizzate, interventi di efficientamento energetico). Coglie l'occasione per instaurare un dialogo costruttivo con il livello ministeriale, anche ai fini di una programmazione più accurata degli esercizi futuri. L'errore da evitare è rispondere in modo generico o giustificativo senza dati puntuali, il che alimenterebbe il sospetto di una gestione non trasparente e comprometterebbe la credibilità dell'ufficio nelle future richieste di budget.`,
  },

  // --- Ambito 9 ---
  {
    id: 51,
    tipo: 'open',
    ambito: 'Spese di Giustizia (T.U. DPR 115/2002)',
    livello: 'Alta Complessità',
    scenario: `L'ufficio presenta un consistente arretrato nella liquidazione dei compensi ai difensori ammessi al patrocinio a spese dello Stato e ai consulenti tecnici d'ufficio, con conseguenti proteste dell'ordine forense locale e crescente difficoltà a reperire professionisti disponibili ad accettare nuovi incarichi. Delinei un piano complessivo di recupero dell'arretrato e di prevenzione del suo riformarsi.`,
    rispostaModello: `Il dirigente costituisce anzitutto un quadro completo e aggiornato dell'arretrato (numero di decreti di pagamento non eseguiti, importo complessivo, anzianità delle pratiche, distribuzione per sezione/materia), avvalendosi degli strumenti informatizzati di gestione delle spese di giustizia (SIAMM) e, se necessario, di una task force temporanea dedicata allo smaltimento. Predispone un piano di recupero per priorità, dando precedenza alle pratiche più risalenti e a quelle relative a professionisti maggiormente esposti, e verifica se l'arretrato sia riconducibile a un'insufficiente capienza strutturale del capitolo di spesa, nel qual caso attiva una richiesta formale e documentata di integrazione al Ministero. Sul piano procedurale, individua le fasi del processo di liquidazione più soggette a colli di bottiglia (istruttoria, verifica di disponibilità, emissione del mandato) e ne semplifica il flusso, anche attraverso una più efficace ripartizione dei compiti tra il personale addetto. Apre un canale di interlocuzione istituzionale con l'ordine forense locale, per condividere con trasparenza lo stato dell'arretrato e il piano di recupero, riducendo così la tensione basata sulla percezione di un problema ignorato. Introduce infine un monitoraggio periodico strutturale, per evitare che l'arretrato si riformi una volta smaltito. L'errore da evitare è affrontare l'arretrato con interventi episodici e non sistemici, che producono un miglioramento solo temporaneo destinato a essere riassorbito dal flusso ordinario delle nuove liquidazioni.`,
  },
  {
    id: 52,
    tipo: 'open',
    ambito: 'Spese di Giustizia (T.U. DPR 115/2002)',
    livello: 'Avanzato',
    scenario: `Un testimone convocato a più udienze in un processo di particolare complessità segnala di non aver mai ricevuto il rimborso delle spese di trasferta sostenute, nonostante ripetute richieste, e minaccia di non presentarsi più senza un titolo esecutivo per il recupero coattivo del credito. Come gestisce la situazione il Dirigente?`,
    rispostaModello: `Il dirigente dispone una verifica immediata dello stato della pratica di liquidazione, individuando in quale fase del procedimento previsto dal Testo Unico Spese di Giustizia (DPR 115/2002) si sia arrestato l'iter (istanza mai protocollata, decreto del magistrato non ancora emesso, decreto emesso ma non eseguito per carenza di disponibilità), e adotta le misure necessarie per sbloccare tempestivamente la pratica specifica, dando conto al testimone, con un'interlocuzione diretta e rispettosa, dello stato di avanzamento e dei tempi realisticamente previsti. Valuta, se l'arretrato riguarda l'intero flusso delle indennità testimoniali e non solo il caso singolo, l'opportunità di un intervento organizzativo più ampio analogo a quello adottato per altre categorie di spese di giustizia. Tiene distinta, sul piano giuridico, la questione amministrativa del ritardo nel pagamento da quella, eventuale e successiva, dell'azione esecutiva che il creditore potrebbe intraprendere per il recupero coattivo, senza mai lasciar intendere che quest'ultima sia l'unica via per ottenere quanto dovuto. Comunica con trasparenza al testimone le ragioni tecniche dell'eventuale ritardo, senza scaricare la responsabilità su altri soggetti dell'amministrazione. L'errore da evitare è gestire il singolo caso senza chiedersi se sia sintomo di una criticità sistemica più ampia, perdendo così l'occasione di prevenire il ripetersi di situazioni analoghe con altri testimoni o professionisti.`,
  },

  // --- Ambito 10 ---
  {
    id: 53,
    tipo: 'open',
    ambito: 'Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)',
    livello: 'Alta Complessità',
    scenario: `Nell'ambito di una procedura di affidamento per un servizio di vigilanza dell'edificio giudiziario, dopo l'apertura delle offerte il Dirigente, quale RUP, scopre che uno dei due operatori economici partecipanti ha, tra i propri soci, un parente stretto del proprio funzionario incaricato dell'istruttoria tecnica delle offerte. Come gestisce la situazione per garantire la regolarità della procedura?`,
    rispostaModello: `Il dirigente, appena venuto a conoscenza dell'elemento, dispone l'immediata astensione del funzionario dall'istruttoria e dalla valutazione delle offerte, in applicazione dei principi generali sul conflitto di interessi (art. 6-bis L. 241/1990, Codice di comportamento DPR 62/2013) e delle specifiche disposizioni del Codice dei contratti pubblici (D.Lgs. 36/2023) sull'imparzialità dei soggetti coinvolti nella procedura, dandone atto formalmente agli atti della gara. Individua un sostituto per proseguire l'istruttoria tecnica, verificando se le attività già svolte dal funzionario astenutosi debbano essere in tutto o in parte ripetute per garantire la genuinità della valutazione. Valuta con attenzione se l'elemento configuri anche un potenziale vizio della procedura tale da incidere sulla par condicio tra i concorrenti, coinvolgendo se necessario un supporto legale interno o esterno prima di proseguire. Documenta con cura l'intero iter di gestione dell'incidente, a tutela della legittimità della procedura in caso di successivo ricorso o di verifica da parte degli organi di controllo (ANAC, Corte dei Conti). Comunica l'accaduto e le misure adottate al Presidente del Tribunale, per assicurare la massima trasparenza istituzionale sulla vicenda. L'errore da evitare è proseguire la procedura senza intervenire tempestivamente sul conflitto di interessi rilevato, esponendo l'intera gara al rischio di annullamento e l'amministrazione a un grave pregiudizio reputazionale.`,
  },
  {
    id: 54,
    tipo: 'open',
    ambito: 'Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)',
    livello: 'Avanzato',
    scenario: `Un guasto improvviso all'impianto elettrico di un'ala dell'ufficio giudiziario genera un rischio concreto per la sicurezza delle persone, tale da richiedere un intervento riparativo immediato, prima ancora di poter espletare una qualunque forma di consultazione di mercato. Come gestisce correttamente il Dirigente l'affidamento dei lavori in questa condizione di urgenza?`,
    rispostaModello: `Il dirigente, verificata l'effettiva sussistenza di una situazione di pericolo per la sicurezza delle persone o dei beni non altrimenti fronteggiabile, ricorre alla procedura di somma urgenza prevista dalla disciplina dei contratti pubblici (D.Lgs. 36/2023), che consente l'affidamento diretto e immediato dei lavori strettamente indispensabili a rimuovere il pericolo, anche in deroga alle ordinarie procedure di confronto concorrenziale, individuando un operatore economico qualificato disponibile a intervenire nei tempi necessari. Cura che l'affidamento sia comunque accompagnato, nei termini di legge, dalla successiva regolarizzazione formale degli atti (verbale di somma urgenza, perizia giustificativa, determina a contrarre successiva), circoscrivendo l'affidamento in somma urgenza alle sole opere strettamente necessarie a eliminare il pericolo immediato, rinviando eventuali interventi di carattere ordinario o migliorativo a una successiva procedura ordinaria con consultazione di mercato. Documenta puntualmente le ragioni dell'urgenza e la loro effettiva sussistenza, elemento essenziale per resistere a eventuali rilievi degli organi di controllo su una procedura che, in quanto derogatoria, richiede una motivazione particolarmente rigorosa. Comunica tempestivamente l'intervento al personale e, se necessario, dispone le misure organizzative temporanee per garantire la sicurezza nelle more dell'intervento. L'errore da evitare è dilatare surrettiziamente il perimetro dei lavori affidati in somma urgenza per ricomprendervi interventi non strettamente necessari a fronteggiare il pericolo, il che trasformerebbe una legittima deroga emergenziale in un'elusione ingiustificata delle ordinarie regole di concorrenza.`,
  },
  {
    id: 55,
    tipo: 'open',
    ambito: 'Contratti Pubblici e Approvvigionamenti (D.Lgs. 36/2023)',
    livello: 'Avanzato',
    scenario: `Un fornitore aggiudicatario di un appalto per la fornitura di arredi per le nuove aule dell'Ufficio per il Processo consegna beni non conformi alle specifiche tecniche del capitolato e con ritardo significativo rispetto ai termini contrattuali, compromettendo l'allestimento tempestivo degli spazi. Come gestisce il Dirigente la situazione contrattuale?`,
    rispostaModello: `Il dirigente, tramite il RUP e il direttore dell'esecuzione se distinto, formalizza tempestivamente per iscritto le difformità e i ritardi riscontrati rispetto al capitolato e al contratto, assegnando al fornitore un termine congruo per la regolarizzazione o la sostituzione dei beni non conformi, nel rispetto del principio del contraddittorio e delle clausole contrattuali in materia di contestazioni. Valuta contestualmente l'applicazione delle penali contrattualmente previste per il ritardo, documentandone puntualmente i presupposti, e verifica la sussistenza dei requisiti per l'eventuale escussione della garanzia definitiva prestata dal fornitore a tutela dell'amministrazione. Se le difformità permangono nonostante la diffida, valuta, in relazione alla gravità dell'inadempimento e nel rispetto delle previsioni del Codice dei contratti pubblici (D.Lgs. 36/2023) sulla risoluzione per inadempimento, l'opportunità di risolvere il contratto e di procedere a un nuovo affidamento per la parte di fornitura non regolarmente eseguita, tenendo conto dell'impatto organizzativo del ritardo aggiuntivo che ne deriverebbe. Comunica con trasparenza ai referenti dell'Ufficio per il Processo lo stato della vicenda contrattuale e i tempi realisticamente attesi per la soluzione, per consentire un'eventuale riorganizzazione temporanea degli spazi. L'errore da evitare è tollerare informalmente le difformità per evitare i tempi di una contestazione formale, il che priverebbe l'amministrazione degli strumenti contrattuali di tutela (penali, garanzia, risoluzione) nel momento in cui si rendessero necessari.`,
  },

  // --- Ambito 11 ---
  {
    id: 56,
    tipo: 'open',
    ambito: 'Agenti Contabili e Gestione dei Beni',
    livello: 'Alta Complessità',
    scenario: `Una verifica interna disposta dal Dirigente sui depositi giudiziari (corpi di reato, beni sequestrati) rivela discrepanze tra le risultanze del registro storico e i beni effettivamente rinvenuti in custodia, accumulate nel corso di diversi anni e diverse gestioni. Alcuni beni risultano relativi a procedimenti ancora pendenti. Delinei il piano di intervento del Dirigente.`,
    rispostaModello: `Il dirigente, resosi conto della portata sistemica del problema, evita interventi estemporanei e predispone un piano strutturato di riallineamento: costituisce un gruppo di lavoro dedicato con il consegnatario dei beni e il personale di cancelleria competente, stabilendo una metodologia uniforme di verifica (confronto sistematico tra registro e giacenze fisiche, tracciamento della catena di custodia per ogni discrepanza riscontrata) e dando priorità assoluta ai beni relativi a procedimenti ancora pendenti, per i quali un'eventuale irregolarità nella custodia potrebbe avere conseguenze dirette sul processo in corso, informandone tempestivamente l'autorità giudiziaria procedente. Per le discrepanze relative a procedimenti ormai definiti, segue le procedure di discarico contabile previste dalla disciplina generale sulla contabilità dello Stato, documentando adeguatamente cause ed eventuali responsabilità riscontrate, anche ai fini di una possibile segnalazione alla Corte dei Conti in presenza di elementi di colpa grave. Introduce, a regime, un sistema di verifica periodica programmata dei depositi giudiziari, anziché affidarsi a controlli occasionali, e valuta l'opportunità di una progressiva digitalizzazione del registro per ridurre il rischio di errori materiali futuri. Comunica l'esito della ricognizione e le misure correttive adottate al Presidente del Tribunale e, se rilevante, al RPCT, quale area di rischio sensibile ai fini della prevenzione della corruzione. L'errore da evitare è procedere a una regolarizzazione meramente contabile e retroattiva delle discrepanze senza prima verificare l'impatto sui procedimenti pendenti, il che potrebbe pregiudicare la genuinità della prova in giudizi ancora in corso.`,
  },
  {
    id: 57,
    tipo: 'open',
    ambito: 'Agenti Contabili e Gestione dei Beni',
    livello: 'Avanzato',
    scenario: `In occasione del proprio trasferimento a un altro ufficio, il Dirigente, quale funzionario delegato e agente contabile uscente, deve organizzare il passaggio di consegne al proprio successore per la gestione della cassa economale e dei beni in consegna. Come struttura questo passaggio per garantire continuità e correttezza contabile?`,
    rispostaModello: `Il dirigente predispone con congruo anticipo una situazione contabile aggiornata e documentata della cassa economale (fondo cassa, anticipazioni in essere, pezze giustificative delle spese sostenute e non ancora rendicontate) e dell'inventario dei beni in consegna, in modo da poter presentare al successore una fotografia veritiera e completa della gestione al momento del passaggio. Organizza un incontro di affiancamento diretto con il successore, in cui illustra non solo le risultanze contabili formali ma anche le prassi operative consolidate, le criticità in corso e lo stato di eventuali pratiche di rendicontazione o di discarico ancora pendenti, per assicurare continuità gestionale e prevenire vuoti di responsabilità nel periodo di transizione. Redige un verbale di consegna sottoscritto da entrambe le parti, che costituisce riferimento documentale per l'individuazione della responsabilità contabile a decorrere dalla data del passaggio, e cura che la resa del conto giudiziale relativo al periodo della propria gestione, fino al giorno del passaggio, venga comunque presentata alla Corte dei Conti nei termini di legge, indipendentemente dal trasferimento intervenuto. Non lascia questioni contabili aperte e non documentate, anche a costo di rallentare i tempi del proprio trasferimento effettivo. L'errore da evitare è un passaggio di consegne informale e non documentato, che lascerebbe entrambi gli agenti contabili, uscente ed entrante, esposti a un'incertezza sulla rispettiva responsabilità per eventuali future discrepanze riscontrate.`,
  },

  // --- Ambito 12 ---
  {
    id: 58,
    tipo: 'open',
    ambito: 'Controlli della Corte dei Conti e Responsabilità Erariale',
    livello: 'Alta Complessità',
    scenario: `A seguito di un controllo interno, il Dirigente si rende conto che una procedura di affidamento gestita l'anno precedente dal proprio ufficio presenta un vizio procedurale (mancata acquisizione di un requisito obbligatorio prima della stipula) che potrebbe, in astratto, integrare un danno erariale, sebbene il servizio sia stato regolarmente reso e nessun danno concreto sia per ora emerso. Come si comporta?`,
    rispostaModello: `Il dirigente non minimizza né occulta l'anomalia riscontrata, ma avvia una valutazione tecnico-giuridica approfondita, se necessario avvalendosi di un parere dell'Avvocatura dello Stato o degli uffici legali competenti, per accertare con precisione la natura del vizio, la sua effettiva rilevanza e le eventuali conseguenze sul piano della validità dell'atto e della responsabilità amministrativo-contabile. Valuta, sulla base di tale approfondimento, se sussistano i presupposti per una segnalazione al RPCT o, tramite le vie istituzionali proprie, alla Corte dei Conti, nell'ambito dei doveri di collaborazione e di prevenzione del rischio che gravano sul dirigente, tenendo presente che un atteggiamento trasparente e proattivo è generalmente valutato con favore rispetto a un'omissione successivamente scoperta da terzi. Indipendentemente dall'esito di tale valutazione, introduce con effetto immediato un controllo procedurale aggiuntivo (checklist di verifica dei requisiti obbligatori, doppia sottoscrizione prima della stipula) per prevenire il ripetersi dell'anomalia nelle procedure future, e ne dà comunicazione al RPCT ai fini dell'aggiornamento del PTPCT nell'area di rischio "affidamenti e contratti pubblici". Comunica l'accaduto e le misure correttive al Presidente del Tribunale, per assicurare la massima trasparenza istituzionale. L'errore da evitare è la tentazione di lasciar correre una criticità già emersa nella speranza che non venga mai rilevata da terzi: un simile atteggiamento, se scoperto successivamente, aggrava significativamente la posizione personale del dirigente rispetto a un'autonoma e tempestiva segnalazione.`,
  },
  {
    id: 59,
    tipo: 'open',
    ambito: 'Controlli della Corte dei Conti e Responsabilità Erariale',
    livello: 'Avanzato',
    scenario: `Il Dirigente intende rafforzare la cultura del controllo interno sulla contabilità pubblica tra il personale amministrativo dell'ufficio, per ridurre il rischio di errori procedurali che potrebbero esporre l'amministrazione e i singoli dipendenti a responsabilità erariale, senza tuttavia generare un clima di eccessiva ansia da controllo che scoraggi l'iniziativa del personale. Come struttura questo intervento?`,
    rispostaModello: `Il dirigente avvia un percorso formativo mirato sui principi essenziali della contabilità pubblica e della responsabilità amministrativo-contabile (nozione di agente contabile, obbligo di copertura finanziaria, tracciabilità dei flussi finanziari, elementi costitutivi del danno erariale), rivolto in particolare al personale con compiti di gestione di cassa, di beni o di procedure di affidamento, presentando i principi non come un mero adempimento burocratico ma come strumenti di tutela sia dell'interesse pubblico sia della posizione personale del dipendente che li applica correttamente. Introduce controlli interni di secondo livello proporzionati al rischio (verifiche a campione, doppia sottoscrizione sulle operazioni più delicate) senza moltiplicare adempimenti burocratici su attività a basso rischio, per non disperdere risorse e attenzione su controlli a scarso valore aggiunto. Promuove una cultura dell'errore dichiarato e tempestivamente segnalato, distinguendo con chiarezza, anche nella propria prassi valutativa, tra l'errore in buona fede prontamente segnalato e corretto e la negligenza grave o reiterata, per incoraggiare il personale a portare alla luce le criticità anziché occultarle per timore di conseguenze sproporzionate. Monitora nel tempo l'efficacia delle misure introdotte attraverso indicatori semplici (numero di anomalie rilevate e tempestivamente corrette, esito dei controlli a campione). L'errore da evitare è un approccio esclusivamente repressivo e ispettivo al controllo interno, che genera comportamenti difensivi e occultamento delle criticità anziché una reale riduzione del rischio erariale.`,
  },
  {
    id: 60,
    tipo: 'open',
    ambito: 'Controlli della Corte dei Conti e Responsabilità Erariale',
    livello: 'Alta Complessità',
    scenario: `Il Dirigente riceve un invito a dedurre da parte della Procura della Corte dei Conti, quale presunto responsabile di un danno erariale derivante da un pagamento effettuato sulla base di informazioni incomplete o non corrette fornite da un proprio subordinato, di cui il Dirigente si era fidato senza ulteriori verifiche puntuali. Come imposta la propria difesa nel procedimento, restando nei limiti di un comportamento istituzionalmente corretto?`,
    rispostaModello: `Il dirigente, ricevuto l'invito a dedurre, esercita innanzitutto con attenzione il proprio diritto di difesa nei termini e nelle forme previste dal Codice di giustizia contabile (D.Lgs. 174/2016), avvalendosi dell'assistenza legale a cui ha diritto, senza commentare pubblicamente il procedimento né tentare interlocuzioni informali con la Procura al di fuori delle sedi proprie. Ricostruisce con precisione, a supporto delle proprie deduzioni, il proprio effettivo grado di diligenza nella vicenda: le informazioni di cui disponeva al momento della decisione, i controlli che erano ragionevolmente esigibili nella sua posizione organizzativa, e l'eventuale affidamento incolpevole riposto nell'istruttoria del subordinato, elemento centrale per la valutazione dell'elemento soggettivo richiesto ai fini della responsabilità amministrativo-contabile. Evita sia di scaricare integralmente e in modo scomposto la responsabilità sul subordinato in una logica difensiva ad ogni costo, sia di ammettere responsabilità che non gli competono solo per chiudere rapidamente la vicenda, mantenendo un atteggiamento di collaborazione istituzionale con l'organo requirente. Indipendentemente dall'esito del procedimento, coglie l'occasione per rafforzare, per il futuro, i propri meccanismi di verifica sulle istruttorie dei subordinati prima di assumere decisioni con rilevanza finanziaria. L'errore da evitare è un atteggiamento reattivo e polemico verso la Procura contabile, che nulla aggiunge alla qualità della propria difesa nel merito e può risultare controproducente anche sul piano dell'immagine istituzionale.`,
  },
]

export const quesitiMultipli = quesiti.filter(
  (q): q is QuesitoMultiplo => q.tipo === 'multiple',
)

export const quesitiAperti = quesiti.filter(
  (q): q is QuesitoAperto => q.tipo === 'open',
)

export const elencoAmbiti: Ambito[] = Array.from(new Set(quesiti.map((q) => q.ambito)))
