import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Edilitalia.css";

const Edilitalia = () => {
  return (
    <div className="edilitalia-container">
      <NavLink to={"/"}>
        <img src="home.svg" />
      </NavLink>

      <h1>{"Edilitalia  project".toUpperCase()}</h1>

      <p className="case-history edilitalia-border">
        Case History: Edilitalia – Innovazione e Semplificazione dei Sistemi di
        Comunicazione
      </p>

      <div className="edilitalia-section edilitalia-border">
        <h2 className="edilitalia-name">Introduzione</h2>
        <p className="edilitalia-content">
          Edilitalia, azienda leader nel settore dei serramenti con sede a
          Brescia, ha affrontato una fase di crescita che ha richiesto una
          revisione completa dei sistemi di comunicazione. L’apertura di una
          nuova sede in Via Orzinuovi ha rappresentato l’occasione ideale per
          aggiornare l’infrastruttura, massimizzare l’efficienza e migliorare
          l’esperienza dei clienti.
        </p>
      </div>

      <div className="edilitalia-section edilitalia-border">
        <h2 className="edilitalia-name">Il Mio Intervento</h2>
        <p className="edilitalia-content">
          Mi sono occupato personalmente di ogni fase del progetto, dalla
          definizione dell’offerta fino alla messa in opera, prestando
          particolare attenzione alle esigenze specifiche di Edilitalia.
          <ul>
            <li>Analisi delle Esigenze e Definizione dei Contratti</li>
            <li>
              Ho gestito direttamente i rapporti commerciali e il pricing,
              assicurando che le soluzioni proposte rispondessero perfettamente
              alle necessità operative e di budget di Edilitalia
            </li>
            <li>Implementazione del Centralino PBX in VoIP</li>
            <li>
              Eliminazione dei telefoni fissi a favore di dispositivi mobili
              dotati di app VoIP.
            </li>
            <li>
              Integrazione con la rete Vianova, che ha garantito stabilità di
              connessione e servizi di comunicazione avanzati.
            </li>
            <li>Sviluppo di un Risponditore Automatico (IVR) basato su AI</li>
            <li>
              Creazione di un sistema di smistamento intelligente delle
              chiamate.
            </li>
            <li>
              Adozione di un editor audio per aggiornamenti rapidi e
              personalizzati del messaggio di benvenuto e dei percorsi IVR.
            </li>
            <li>Soluzioni di Rete Avanzate</li>
            <li>
              Connessione FTTH (Fiber to the Home) per una banda ultralarga e
              stabile, indispensabile per supportare il flusso di chiamate e
              dati.
            </li>
            <li>
              Installazione di Access Point di Ultima Generazione, ottimizzando
              copertura e qualità del segnale.
            </li>
            <li>Vendita e Configurazione di Smartphone Aziendali</li>
            <li>
              Fornitura di 8 smartphone collegati direttamente al centralino via
              app VoIP, consentendo al personale di gestire le chiamate come se
              fossero cordless.
            </li>
            <li>Formazione del Personale</li>
            <li>
              Sessioni di training personalizzate per garantire l’uso ottimale
              delle nuove tecnologie
            </li>
            <li>
              Standardizzazione dei protocolli di risposta per rendere più
              efficiente lo smistamento delle chiamate e migliorare la
              comunicazione interna.
            </li>
          </ul>
        </p>
      </div>
      <div className="edilitalia-section edilitalia-border">
        <h2>Risultati Principali</h2>
        <p className="edilitalia-content">
          <ol>
            <li>
              <p className="p-name">Maggiore Efficienza Operativa</p>
              <p className="p-content">
                Riduzione dei tempi di attesa e instradamento automatico delle
                chiamate ai reparti di competenza.
              </p>
            </li>
            <li>
              <p className="p-name">Riduzione di Conflitti e Sovraccarichi</p>
              <p className="p-content">
                Il nuovo flusso di comunicazione ha migliorato il clima interno,
                evitando errori di assegnazione e gestendo in modo più equo il
                carico di lavoro.
              </p>
            </li>
            <li>
              <p className="p-name">Flessibilità e Scalabilità</p>
              <p className="p-content">
                Grazie al VoIP, la sede può facilmente aggiungere nuove
                postazioni senza costi infrastrutturali elevati.
              </p>
            </li>
            <li>
              <p className="p-name">Modello Replicabile</p>
              <p className="p-content">
                L’esperienza con Edilitalia dimostra come una PMI possa
                realizzare un’efficace trasformazione digitale, beneficiando di
                tecnologie avanzate e di un approccio mirato
              </p>
            </li>
          </ol>
        </p>
      </div>
      <div className="edilitalia-section edilitalia-border">
        <h2>Conclusioni</h2>
        <p className="edilitalia-content">
          Questo progetto rappresenta un chiaro esempio di come la
          trasformazione digitale possa diventare un motore di crescita per le
          aziende, anche in settori tradizionalmente legati a infrastrutture
          fisiche. L’implementazione di un sistema VoIP integrato, di un IVR
          intelligente e di una rete ad alte prestazioni ha permesso a
          Edilitalia di ottimizzare la gestione delle chiamate e migliorare il
          servizio clienti, contribuendo alla crescita e all’efficienza
          dell’impresa. In linea con la mia visione di Innovacrum, questo case
          history testimonia quanto l’innovazione, abbinata a una strategia di
          cambiamento ben strutturata, possa offrire vantaggi competitivi
          tangibili e duraturi.
        </p>
      </div>
    </div>
  );
};

export default Edilitalia;
