import "./App.css";
import Home from "./components/home/Home";
import Manifesto from "./components/manifesto/Manifesto";
import Edilitalia from "./components/edilitalia/Edilitalia";
import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        about: "About me",
        portfolio: "Portfolio",
        contacts: "Contacts",
        phone:'Phone:',
        email:'Email:',
        hi: "HI, I'M MATTEO",
        projectManager: "PROJECT MANAGER",
        bio: "My mission is to unite teams, optimize processes, and ensure the timely implementation of ideas that bring results.",
        sendMessage: "Send Message",
        aboutMe:
          "I combine a background in computer science and sociology to bring a balanced approach to innovation, uniting technical expertise with a deep understanding of societal dynamics. My unique perspective allows me to craft solutions that are both technologically advanced and human-centered. I apply my Narrative - Vision - Solution framework to every project: identifying the core challenges (Clima), crafting a clear and inspiring vision, and delivering impactful, tailored solutions. This methodology enables me to bridge the gap between technology and people, ensuring every innovation serves both functionality and purpose. Passionate about driving meaningful change, I thrive on transforming complex challenges into opportunities, shaping innovative strategies that foster growth and progress.",
        experience: "Experience",
        experienceInfo1:
          "With years of experience in innovation, I have developed a unique blend of technical expertise and strategic vision that enables me to drive impactful projects.",
        experienceInfo2:
          "IT Consultant: Successfully implemented advanced IT systems, including VoIP PBX networks, optimizing communication and efficiency for businesses.",
        experienceInfo3:
          "Software Developer: Designed and developed tailored solutions, ensuring seamless functionality and high-quality results.",
        experienceInfo4:
          "ICT Account Manager: Managed client relationships and projects, driving business growth through strategic partnerships.",
        experienceInfo5:
          "Innovation Projects: Applied creative methodologies like the Eureka method to deliver forward-thinking solutions for organizations.",
        experienceInfo6:
          "Business Development: Identified and cultivated opportunities that align with long-term goals, focusing on innovation and transformation.",
        experienceInfo7:
          "This diverse background allows me to craft solutions that bridge technology and human-centered approaches, delivering meaningful and lasting change.",
        softSkills: "Soft Skills",
        softSkillsInfo:
          "I excel in Strategic Thinking, turning complex challenges into clear, actionable plans. With strong Problem-Solving skills, I approach obstacles creatively and effectively. My ability to communicate with empathy fosters trust and collaboration, while my Leadership inspires teams to achieve their best. Adaptability allows me to thrive in dynamic environments, and Resilience keeps me focused under pressure. Creativity drives my innovative approach, and my Proactive mindset ensures I stay one step ahead, delivering meaningful and impactful results.",
        hardSkills: "Hard Skills",
        hardSkillsInfo1:
          "Project Management",
        hardSkillsInfo2:
          "Stakeholder Engagement",
        hardSkillsInfo3:
          "Innovation Strategy",
        hardSkillsInfo4:
          "Research and Data Analysis",
        hardSkillsInfo5:
          "IT System Implementation",
        hardSkillsInfo6:
          "Business Development",
        hardSkillsInfo7:
          "Digital Tools for Project Management",
        hardSkillsInfo8:
          "Training and Facilitation",
        hardSkillsInfo9:
          "Process Optimization",
        hardSkillsInfo10:
          "Storytelling and Content Creation",
        followMe: "Follow me:",
        manifesto: "INNOVACRUM MANIFESTO",
        manifestoBriefDesc: "Toward a New Authentic Meaning of Innovation",
        manifestoTitle1:'Beyond Reflection, Toward Authenticity',
        manifestoDesc1:'Our contemporary world is inundated with “mirrors” and representations that often lose their connection to reality. At Innovacrum, we believe that innovation should not be confined to a play of reflections or mere self-referential simulacra. Instead, it must serve to break these mirrors and reconnect with the most profound human needs.',
        manifestoTitle2:'Acknowledging the Power of the Simulacrum',
        manifestoDesc2:'We recognize that, today, signs seem to have a life of their own, generating hyperreality in which it becomes difficult to distinguish between what is real and what is not. Innovacrum embraces this awareness not to surrender but to use it as a springboard for (re)discovery: harnessing the power of simulacra to create something truly new, invested with a higher sense of purpose.',
        manifestoTitle3:'Innovation as a Cultural Act',
        manifestoDesc3:'For us, innovation is not merely about technology; it is living culture. It is the ability to unite vision and understanding to drive tangible transformations in our habits, behaviors, and institutions. To innovate means to grasp the present and to imagine the future, without losing sight of human dignity and of the essential needs of those who will follow us.',
        manifestoTitle4:'Breaking Mirrors as a Creative Act',
        manifestoDesc4:'Breaking mirrors does not mean destroying the world of images but rather redefining it. It means going beyond the simple fascination with hyperreality to bring forth signs that reflect a deep, genuine, and collective need. This is an act of courage that entails responsibility and care for one another.',
        manifestoTitle5:'A New Order of Signs',
        manifestoDesc5:'Innovacrum aspires to build a new symbolic framework where the pursuit of meaning is paramount. Our aim is to develop products, services, experiences, and narratives that are not empty aesthetic exercises but forms of language capable of meeting—and even anticipating—the real needs of individuals and communities.',
        manifestoTitle6:'Ethics and Social Responsibility',
        manifestoDesc6:'Innovation must take responsibility for its consequences. We believe that this “new order of signs” can only emerge if we consider collective well-being, environmental protection, and the promotion of an inclusive culture. Every innovative step must be contemplated in terms of impact and shared value.',
        manifestoTitle7:'Knowledge as a Means to Create',
        manifestoDesc7:'Innovacrum is grounded in active knowledge: studying, observing, and engaging with those who already experiment with new forms of innovation; but also putting bold ideas into practice, prototyping them, and sharing the results. Knowledge is not a sterile accumulation but a tool for generating new worlds, new “thinking rooms” where we can collectively envision solutions.',
        manifestoTitle8:'From Hyperreality to the Truth of Humanity',
        manifestoDesc8:'Our objective is not to stage a more captivating or seductive “hyperreality,” but to restore depth to what is real by delving into the essential needs of the human being—such as empathy, respect, cultural growth, and communal well-being. In this way, innovation ceases to be a detached dream and becomes a path of human evolution.',
        manifestoTitle9:'Collaboration and Co-Creation',
        manifestoDesc9:'We invite anyone who shares this quest for meaning to join us. Innovacrum is open, inclusive, and strongly believes in teamwork: together, we can develop practices, languages, tools, and methodologies that bring us closer to this “new authentic,” surpassing the barriers of fragmentation and fruitless competition.',
        manifestoTitle10:'Toward a Future of Meaning',
        manifestoDesc10:'The future we envision is not merely a more “comfortable” world in material terms but one in which innovation is synonymous with cultural responsibility, where people feel like protagonists of change rather than mere onlookers. Breaking mirrors also means having the courage to look beyond illusions, recognizing within ourselves the power to make a difference.',
        conclusion:'With Innovacrum, we assert our right (and duty) to shape a reality that does not simply reproduce old models but dares to create new meanings, new languages, and a new shared ethic. For an innovation that, beyond being “new,” is both true and human.',
      },
    },
    it: {
      translation: {
        about: "Su di me",
        portfolio: "Portafoglio",
        contacts: "Contatti",
        welcome: "Contatti",
        phone:'Telefono:',
        email:'Email:',
        hi: "CIAO SONO MATTEO",
        projectManager: "PROJECT MANAGER",
        bio: "La mia missione è unire i team, ottimizzare i processi e garantire l'implementazione tempestiva di idee che portino risultati",
        sendMessage: "Inviare un Messaggio",
        aboutMe:
          "Unisco competenze informatiche e conoscenze sociologiche per affrontare l’innovazione da una prospettiva sia tecnica che umana. Con un background in informatica e sociologia, eccello nel colmare il divario tra tecnologia e persone, sviluppando soluzioni che siano al tempo stesso innovative e di impatto. La mia capacità di analizzare sistemi complessi e comprendere le dinamiche sociali mi consente di guidare cambiamenti significativi, sia attraverso la gestione strategica dei progetti che con lo sviluppo del business o la risoluzione creativa dei problemi. L’innovazione è la mia passione, e trasformo le sfide in opportunità di crescita e progresso.",
        experience: "Experience",
        experienceInfo1:
          "Con anni di esperienza nel campo dell'innovazione, ho sviluppato una miscela unica di competenze tecniche e visione strategica che mi permette di guidare progetti di grande impatto.",
        experienceInfo2:
          "Consulente IT: ha implementato con successo sistemi IT avanzati, tra cui reti PBX VoIP, ottimizzando la comunicazione e l'efficienza delle aziende.",
        experienceInfo3:
          "Sviluppatore software: Ha progettato e sviluppato soluzioni su misura, garantendo una funzionalità perfetta e risultati di alta qualità.",
        experienceInfo4:
          "Account Manager ICT: Ha gestito relazioni e progetti con i clienti, guidando la crescita del business attraverso partnership strategiche.",
        experienceInfo5:
          "Progetti di innovazione: Ha applicato metodologie creative come il metodo Eureka per fornire soluzioni lungimiranti alle organizzazioni.",
        experienceInfo6:
          "Sviluppo del business: Ha individuato e coltivato opportunità in linea con gli obiettivi a lungo termine, concentrandosi su innovazione e trasformazione.",
        experienceInfo7:
          "Questo background diversificato mi permette di creare soluzioni che uniscono tecnologia e approcci incentrati sull'uomo, producendo cambiamenti significativi e duraturi.",
        softSkills: "Soft Skills",
        softSkillsInfo:
          "Sono esperto nel pensiero strategico, capace di trasformare sfide complesse in soluzioni chiare e realizzabili. Affronto ogni ostacolo con un approccio creativo e orientato al risultato, grazie a solide capacità di problem-solving. La mia comunicazione empatica costruisce fiducia e promuove la collaborazione, mentre la leadership che esercito motiva i team a dare il meglio. Adattabilità e resilienza mi permettono di eccellere in ambienti dinamici, mantenendo sempre il focus anche sotto pressione. La creatività alimenta il mio pensiero innovativo, mentre il mio spirito proattivo mi consente di anticipare le esigenze e di offrire risultati concreti e di valore.",
        hardSkills: "Hard Skills",
        hardSkillsInfo1:
          "Project Management",
        hardSkillsInfo2:
          "Stakeholder Engagement",
        hardSkillsInfo3:
          "Innovation Strategy",
        hardSkillsInfo4:
          "Research and Data Analysis",
        hardSkillsInfo5:
          "IT System Implementation",
        hardSkillsInfo6:
          "Business Development",
        hardSkillsInfo7:
          "Digital Tools for Project Management",
        hardSkillsInfo8:
          "Training and Facilitation",
        hardSkillsInfo9:
          "Process Optimization",
        hardSkillsInfo10:
          "Storytelling and Content Creation",
        followMe: "Seguimi:",
        manifesto: "MANIFESTO DI INNOVACRUM",
        manifestoBriefDesc: "Per un nuovo senso autentico dell’innovazione",
        manifestoTitle1:'Oltre il riflesso, verso l’autenticità',
        manifestoDesc1:'Il mondo contemporaneo è saturo di “specchi” e rappresentazioni che spesso perdono contatto con la realtà. Noi di Innovacrum crediamo che l’innovazione non debba ridursi a un gioco di riflessi o a meri simulacri autoreferenziali, ma debba servire a rompere questi specchi, riconnettendosi ai bisogni più profondi dell’essere umano.',
        manifestoTitle2:'Riconoscere il potere del Simulacrum',
        manifestoDesc2:'Sappiamo che i segni, oggi, sembrano vivere di vita propria, generando iperrealtà in cui è difficile distinguere tra vero e falso. Innovacrum accoglie questa consapevolezza non per rassegnarsi, ma per trasformarla in un trampolino di (ri)scoperta: usiamo la forza del simulacro per creare qualcosa di nuovo, dotato di un senso più alto.',
        manifestoTitle3:'Innovazione come atto di cultura',
        manifestoDesc3:'Per noi, l’innovazione non è soltanto tecnologia, ma cultura viva. È la capacità di unire visione e consapevolezza per generare trasformazioni concrete nelle nostre abitudini, nei nostri comportamenti e nelle nostre istituzioni. Innovare significa comprendere il presente per immaginare il futuro, senza perdere di vista la dignità umana e le necessità fondamentali di chi verrà dopo di noi.',
        manifestoTitle4:'La rottura degli specchi come gesto creativo',
        manifestoDesc4:'Rompere gli specchi non vuol dire distruggere il mondo dell’immagine, bensì risignificarlo. Significa superare il semplice fascino dell’iperrealtà per dare vita a segni che riflettano un bisogno profondo, autentico e condiviso. È un atto di coraggio che implica responsabilità e cura verso l’alterità.',
        manifestoTitle5:'Un nuovo ordine di segni',
        manifestoDesc5:'Innovacrum mira a costruire un nuovo sistema simbolico, in cui la ricerca di senso abbia un ruolo centrale. Desideriamo dare vita a prodotti, servizi, esperienze e narrazioni che non siano sterili giochi di stile, ma forme di linguaggio capaci di rispondere — e possibilmente anticipare — i bisogni reali delle persone e delle comunità.',
        manifestoTitle6:'Etica e responsabilità sociale',
        manifestoDesc6:'L’innovazione deve farsi carico delle conseguenze che genera. Siamo convinti che il “nuovo ordine di segni” non possa nascere se non prendiamo in considerazione il benessere collettivo, la salvaguardia dell’ambiente e la promozione di una cultura inclusiva. Ogni gesto innovativo deve essere pensato in termini di impatto e di valore condiviso.',
        manifestoTitle7:'Conoscere per creare',
        manifestoDesc7:'Innovacrum è un progetto basato sulla conoscenza attiva: studiare, osservare, dialogare con chi già sperimenta forme di innovazione; ma anche mettere in pratica idee coraggiose, prototiparle e condividerle. La conoscenza non è un accumulo sterile, ma uno strumento per generare nuovi mondi, nuove “stanze del pensiero” in cui possiamo immaginare soluzioni comuni.',
        manifestoTitle8:'Dall’iperreale alla verità dell’umano',
        manifestoDesc8:'Il nostro obiettivo non è mettere in scena un “iperreale” più accattivante o più seducente: vogliamo piuttosto ridare spessore al reale, andando in profondità nei bisogni essenziali della persona — come l’empatia, il rispetto, la crescita culturale e la felicità condivisa. In questo modo, l’innovazione non diventa un sogno distaccato, ma un percorso di evoluzione umana.',
        manifestoTitle9:'Collaborazione e co-creazione',
        manifestoDesc9:'Invitiamo chiunque senta questa urgenza di significato a unirsi a noi. Innovacrum è aperto, inclusivo, e crede fortemente nel lavoro di squadra: insieme possiamo sviluppare pratiche, linguaggi, strumenti e metodologie che ci avvicinino a un “nuovo autentico”, superando le barriere della frammentazione e della competizione sterile.',
        manifestoTitle10:'Verso un futuro di senso',
        manifestoDesc10:'Il futuro che immaginiamo non è un mondo più “confortevole” solo in termini materiali, ma un mondo in cui l’innovazione è sinonimo di responsabilità culturale, in cui le persone si sentano protagoniste del cambiamento e non semplici spettatrici. Rompere gli specchi significa anche assumerci il rischio di guardare oltre le illusioni, per riconoscere in noi stessi la forza di fare la differenza.',
        conclusion:'Con Innovacrum, rivendichiamo il diritto (e il dovere) di plasmare una realtà che non si limiti a riprodurre vecchi schemi, ma che sappia osare nuovi sensi, nuovi linguaggi e una nuova etica condivisa. Per un’innovazione che, oltre ad essere “nuova”, sia anche vera e umana.',
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/edilitalia" element={<Edilitalia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
