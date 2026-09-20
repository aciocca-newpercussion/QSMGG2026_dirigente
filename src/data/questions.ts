import type { Quesito, QuesitoMultiplo, QuesitoAperto, Ambito } from '../types'

/**
 * Banca di 30 quesiti situazionali di livello dirigenziale per il Dipartimento
 * dell'Organizzazione Giudiziaria (DOG) - Ministero della Giustizia.
 *
 * 15 quesiti a scelta multipla (id 1-15) + 15 quesiti a risposta aperta (id 16-30),
 * distribuiti sui sei ambiti critici della dirigenza amministrativa giudiziaria.
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
  // QUESITI A RISPOSTA APERTA (id 16-30)
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
]

export const quesitiMultipli = quesiti.filter(
  (q): q is QuesitoMultiplo => q.tipo === 'multiple',
)

export const quesitiAperti = quesiti.filter(
  (q): q is QuesitoAperto => q.tipo === 'open',
)

export const elencoAmbiti: Ambito[] = Array.from(new Set(quesiti.map((q) => q.ambito)))
