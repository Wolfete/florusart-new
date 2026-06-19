/* ============================================================
   Bilingual engine — English (default) / Italian
   Walks text nodes, swaps to Italian from the IT dictionary,
   restores originals for English. Choice persists in localStorage.
   ============================================================ */
(function () {

  /* English (trimmed, single-spaced) -> Italian */
  var IT = {
    /* ---- Nav / brand / topbar ---- */
    "The Academy": "L'Accademia",
    "Method": "Metodo",
    "Programs": "Programmi",
    "Restoration": "Restauro",
    "Gallery": "Galleria",
    "Admissions": "Ammissioni",
    "Contact": "Contatti",
    "Apply": "Iscriviti",

    /* ---- Footer columns ---- */
    "Academy": "Accademia",
    "Location": "Sede",
    "Our Partners": "I nostri partner",
    "Disciplines & Method": "Discipline e metodo",
    "Bachelor's Degree": "Laurea triennale",
    "Master's Degree": "Laurea magistrale",
    "PhD Degree": "Dottorato",
    "How to Apply": "Come iscriversi",
    "Academic Calendar": "Calendario accademico",
    "Tuition & Fees": "Rette e costi",
    "Visa & Housing": "Visto e alloggio",
    "The first institution in Italy representing the Classical Renaissance traditions in figurative art.": "La prima istituzione in Italia a rappresentare le tradizioni classiche del Rinascimento nell'arte figurativa.",
    "© 2026 International Academy of Art in Florence — St. Peter's": "© 2026 Accademia Internazionale d'Arte in Firenze — San Pietro",

    /* ---- Buttons (shared) ---- */
    "Explore programs": "Scopri i programmi",
    "Discover the academy": "Scopri l'accademia",
    "Our disciplines & method": "Le nostre discipline e il metodo",
    "How to apply": "Come iscriversi",
    "Disciplines & method": "Discipline e metodo",
    "View all programs": "Tutti i programmi",
    "Admissions & tuition": "Ammissioni e rette",
    "Ask a question": "Fai una domanda",
    "Academic programs": "Programmi accademici",
    "Email the admissions office": "Scrivi all'ufficio ammissioni",
    "Contact us": "Contattaci",
    "Watch on YouTube": "Guarda su YouTube",
    "Follow on Instagram": "Segui su Instagram",
    "Read more": "Scopri di più",
    "Send your enquiry": "Invia la richiesta",
    "Send your message": "Invia il messaggio",
    "Home": "Home",

    /* ---- Form fields ---- */
    "Your name": "Il tuo nome",
    "Your e-mail": "La tua email",
    "Your name (required)": "Il tuo nome (richiesto)",
    "Your e-mail (required)": "La tua email (richiesto)",
    "Subject": "Oggetto",
    "Your message": "Il tuo messaggio",

    /* ---- Contact block (home + contact) ---- */
    "Let us get in touch": "Mettiamoci in contatto",
    "Telephone": "Telefono",
    "E-mail": "E-mail",
    "Address": "Indirizzo",
    "Hours": "Orari",
    "Monday – Friday · 09:30 – 18:00": "Lunedì – Venerdì · 09:30 – 18:00",
    "Piazza della Libertà, 2 — 50129 Firenze": "Piazza della Libertà, 2 — 50129 Firenze",
    "Contact": "Contatti",
    "details": "dettagli",
    "Contact": "Contatto",
    "We would be glad to answer any question about studying with us in Florence.": "Saremo lieti di rispondere a qualsiasi domanda sullo studio con noi a Firenze.",
    "Contacts": "Contatti",
    "Get in": "Mettiti in",
    "touch": "contatto",

    /* ============ HOME ============ */
    "International Academy of Art · Florence": "Accademia Internazionale d'Arte · Firenze",
    "Where the": "Dove il",
    "Renaissance": "Rinascimento",
    "is still taught by hand.": "si insegna ancora a mano.",
    "The first institution in Italy to carry forward the Classical Renaissance traditions in figurative art — drawing, painting and restoration, in the historic heart of Florence.": "La prima istituzione in Italia a portare avanti le tradizioni classiche del Rinascimento nell'arte figurativa — disegno, pittura e restauro, nel cuore storico di Firenze.",
    "About the school": "La scuola",
    "A harmonious method,": "Un metodo armonioso,",
    "perfected over centuries": "perfezionato nei secoli",
    "The Academy has never changed its purpose: to train talented artists. From the very beginning, the foundation of this education has been a harmonious, methodical system — one that has grown and improved to reflect the needs of each age.": "L'Accademia non ha mai cambiato il suo scopo: formare artisti di talento. Fin dall'inizio, il fondamento di questa formazione è stato un sistema armonioso e metodico — cresciuto e perfezionato per rispondere alle esigenze di ogni epoca.",
    "We give versatile, deep knowledge that enables our students to find their own artistic voice and work in every direction, from the classical to the contemporary. Our academic course in Drawing, Painting and Restoration is built upon the original program of the leading universities of Russia — recognised and esteemed worldwide.": "Offriamo una conoscenza versatile e profonda, che permette ai nostri studenti di trovare la propria voce artistica e di lavorare in ogni direzione, dal classico al contemporaneo. Il nostro corso accademico di Disegno, Pittura e Restauro si fonda sul programma originale delle principali università russe — riconosciuto e apprezzato in tutto il mondo.",
    "«The hand learns what the eye has understood»": "«La mano impara ciò che l'occhio ha compreso»",
    "Why study with us": "Perché studiare con noi",
    "The classical traditions, in the": "Le tradizioni classiche, nel",
    "centre of Florence": "centro di Firenze",
    "Accredited method": "Metodo accreditato",
    "Didactics built on the accredited Russian state program in Culture and Art, joined with a modern European academic approach.": "Una didattica basata sul programma statale russo accreditato in Cultura e Arte, unito a un moderno approccio accademico europeo.",
    "Living foundations": "Fondamenti vivi",
    "A guaranteed grounding in the fundamentals — knowledge that can be applied with confidence in modern and contemporary art.": "Una solida preparazione di base — conoscenze che possono essere applicate con sicurezza nell'arte moderna e contemporanea.",
    "The hand at work": "La mano al lavoro",
    "A great quantity of practical work and assignments — because mastery is earned at the easel, not only in theory.": "Una grande quantità di lavoro pratico ed esercitazioni — perché la maestria si conquista al cavalletto, non solo in teoria.",
    "Piazza della Libertà": "Piazza della Libertà",
    "Set at the northernmost point of Florence's historic centre, among the 19th-century Viali di Circonvallazione.": "Situata nel punto più settentrionale del centro storico di Firenze, tra i Viali di Circonvallazione dell'Ottocento.",
    "Library & studios": "Biblioteca e atelier",
    "A dedicated library and wireless connection throughout the academy's premises, open to every student.": "Una biblioteca dedicata e connessione wireless in tutti gli spazi dell'accademia, aperta a ogni studente.",
    "Care for arrivals": "Accoglienza",
    "Our staff assists with finding accommodation and provides administrative support to students from abroad.": "Il nostro personale aiuta nella ricerca dell'alloggio e offre supporto amministrativo agli studenti stranieri.",
    "Certificate programs": "Corsi e diplomi",
    "A complete academic": "Un percorso accademico",
    "path in art": "completo nell'arte",
    "From first principles of drawing to the doctoral study of restoration — a continuous, classical education.": "Dai primi principi del disegno allo studio dottorale del restauro — una formazione classica e continua.",
    "4 years · full-time": "4 anni · tempo pieno",
    "The foundational course in drawing and painting, grounded in the academic study of form, light, anatomy and composition.": "Il corso fondamentale di disegno e pittura, fondato sullo studio accademico della forma, della luce, dell'anatomia e della composizione.",
    "2 years · post-graduate": "2 anni · post-laurea",
    "A second-level program for artists ready to deepen their craft and develop a mature, personal voice.": "Un programma di secondo livello per artisti pronti ad approfondire il mestiere e a sviluppare una voce personale e matura.",
    "1 year · advanced": "1 anno · avanzato",
    "Advanced research and practice at the highest level, for those who will carry the tradition forward as masters.": "Ricerca e pratica avanzate al massimo livello, per chi porterà avanti la tradizione come maestro.",
    "«The Academy gives versatile, deep knowledge — so that each student may develop a voice of their own.»": "«L'Accademia offre una conoscenza versatile e profonda — affinché ogni studente sviluppi una voce tutta sua.»",
    "The International Academy of Art · Florence": "L'Accademia Internazionale d'Arte · Firenze",
    "Begin your study": "Inizia i tuoi studi",
    "in Florence": "a Firenze",

    /* ============ ACADEMY ============ */
    "About us": "Chi siamo",
    "The": "L'",
    "Academy": "Accademia",
    "A school devoted, from its very beginning, to a single purpose — to educate true artists in the living traditions of the Renaissance.": "Una scuola dedita, fin dall'inizio, a un unico scopo — formare veri artisti nelle tradizioni vive del Rinascimento.",
    "Our": "La nostra",
    "mission": "missione",
    "The Academy has never changed its purpose — to educate true students of art.": "L'Accademia non ha mai cambiato il suo scopo — formare veri studenti dell'arte.",
    "From the very beginning, the basis of this education has been a harmonious, methodical system. This system has changed and improved over time, reflecting the new and growing needs of each age. The Academy gives versatile, deep knowledge that enables our students to develop their own artistic voice and to work in many directions, from classical to contemporary art.": "Fin dall'inizio, la base di questa formazione è stata un sistema armonioso e metodico. Questo sistema è cambiato e migliorato nel tempo, riflettendo le nuove e crescenti esigenze di ogni epoca. L'Accademia offre una conoscenza versatile e profonda che permette ai nostri studenti di sviluppare la propria voce artistica e di lavorare in molte direzioni, dall'arte classica a quella contemporanea.",
    "Founded in Florence": "Fondata a Firenze",
    "All courses in English": "Tutti i corsi in inglese",
    "Renaissance heritage": "Eredità rinascimentale",
    "Why choose": "Perché scegliere",
    "Florence?": "Firenze?",
    "There is no language barrier — all courses are conducted in English.": "Non c'è barriera linguistica — tutti i corsi si svolgono in inglese.",
    "Italy's reputation as a cultural destination is among the highest in the world.": "La reputazione dell'Italia come meta culturale è tra le più alte al mondo.",
    "A high safety ranking and a welcoming environment for students.": "Un alto livello di sicurezza e un ambiente accogliente per gli studenti.",
    "A unique and unrivalled cultural heritage on every street.": "Un patrimonio culturale unico e impareggiabile a ogni angolo.",
    "A great variety of lifestyle and leisure opportunities.": "Una grande varietà di opportunità di svago e stile di vita.",
    "The chance to expand a professional network and open new horizons in career and personal growth.": "La possibilità di ampliare la rete professionale e aprire nuovi orizzonti di crescita personale e di carriera.",
    "Why study": "Perché studiare",
    "here?": "qui?",
    "A unique didactic program for studying the academic style in visual art.": "Un programma didattico unico per studiare lo stile accademico nelle arti visive.",
    "A teaching method based on the authentic traditions of the Renaissance.": "Un metodo d'insegnamento basato sulle autentiche tradizioni del Rinascimento.",
    "A mixture of both traditional and modern approaches to teaching.": "Un insieme di approcci tradizionali e moderni all'insegnamento.",
    "A guarantee of basic knowledge that can be successfully applied in modern art.": "La garanzia di conoscenze di base applicabili con successo nell'arte moderna.",
    "A great quantity of practical work and assignments.": "Una grande quantità di lavoro pratico ed esercitazioni.",
    "A library and wireless connection across the academy, plus help with accommodation and administration.": "Una biblioteca e connessione wireless in tutta l'accademia, oltre all'aiuto con alloggio e pratiche amministrative.",
    "«Our philosophy is simple — to give deep, versatile knowledge, so that every student may find a voice entirely their own.»": "«La nostra filosofia è semplice — offrire una conoscenza profonda e versatile, affinché ogni studente trovi una voce interamente propria.»",
    "Academy's location": "La sede dell'Accademia",
    "In the heart of": "Nel cuore della",
    "historic Florence": "Firenze storica",
    "The International Art Academy stands on": "L'Accademia Internazionale d'Arte sorge in",
    ", the northernmost point of the historic centre of Florence. The square was built in the 19th century during the works that produced the Viali di Circonvallazione around the city, and it hosts the Triumphal Arch of the Lorraine and, in winter, an ice rink for skating.": ", il punto più settentrionale del centro storico di Firenze. La piazza fu costruita nell'Ottocento durante i lavori che realizzarono i Viali di Circonvallazione attorno alla città, e ospita l'Arco di Trionfo dei Lorena e, d'inverno, una pista di pattinaggio.",
    "The Academy occupies": "L'Accademia occupa",
    ", a building with a three-axis plan, raised by the Corbinelli at the beginning of the 15th century and later passed to the Ridolfi di Piazza in 1483. At the time of Cosimo I's census in 1551 it was home to Luigi di Piero Ridolfi; its traditional name remembers Senator Cosimo Ridolfi (1794–1865), agronomist, patriot and philanthropist. Its rusticated stone ground floor, great arched openings and graffito-decorated upper floors were listed in 1901 as a monumental building of national artistic heritage.": ", un edificio a pianta su tre assi, eretto dai Corbinelli all'inizio del Quattrocento e poi passato ai Ridolfi di Piazza nel 1483. Al tempo del censimento di Cosimo I nel 1551 vi abitava Luigi di Piero Ridolfi; il suo nome tradizionale ricorda il senatore Cosimo Ridolfi (1794–1865), agronomo, patriota e filantropo. Il piano terreno in bugnato, le grandi aperture ad arco e i piani superiori decorati a graffito furono inseriti nel 1901 tra gli edifici monumentali del patrimonio artistico nazionale.",
    "Within easy reach": "A pochi passi",
    "1.36 km from the Duomo and the Cathedral of Santa Maria del Fiore": "1,36 km dal Duomo e dalla Cattedrale di Santa Maria del Fiore",
    "1.73 km from Santa Maria Novella railway station": "1,73 km dalla stazione di Santa Maria Novella",
    "1.95 km from the Uffizi Gallery": "1,95 km dalla Galleria degli Uffizi",
    "1.98 km from the Ponte Vecchio": "1,98 km dal Ponte Vecchio",
    "Palazzo Cosimo Ridolfi · Piazza della Libertà": "Palazzo Cosimo Ridolfi · Piazza della Libertà",
    "our": "i nostri",
    "partners": "partner",
    "We work alongside cultural associations, artisans and museums across Florence and beyond.": "Collaboriamo con associazioni culturali, artigiani e musei a Firenze e oltre.",
    "Come and study": "Vieni a studiare",
    "where art was reborn": "dove l'arte è rinata",
    "Discover our disciplines and method, or begin your application today.": "Scopri le nostre discipline e il metodo, o inizia oggi la tua candidatura.",

    /* ============ METHOD ============ */
    "Disciplines &": "Discipline e",
    "Following the advice of Leonardo da Vinci — perspective, proportion, light and shadow, anatomy and colour — taught the way the masters learned.": "Seguendo i consigli di Leonardo da Vinci — prospettiva, proporzione, luce e ombra, anatomia e colore — insegnati come imparavano i maestri.",
    "vision": "visione",
    "An institution in Italy that represents the academic tradition in figurative art.": "Un'istituzione in Italia che rappresenta la tradizione accademica nell'arte figurativa.",
    "The International Art Academy in Florence offers an academic course in Drawing, Painting and Restoration, based on the original program of the leading institutions — globally recognised and highly appreciated worldwide. All disciplines are taught by leading, experienced instructors from the best high schools, institutions, academies and universities specialised in figurative art.": "L'Accademia Internazionale d'Arte di Firenze offre un corso accademico di Disegno, Pittura e Restauro, basato sul programma originale delle principali istituzioni — riconosciuto e apprezzato in tutto il mondo. Tutte le discipline sono insegnate da docenti esperti e affermati, provenienti dalle migliori scuole, istituzioni, accademie e università specializzate nell'arte figurativa.",
    "A joint diploma": "Un diploma congiunto",
    "across two cultures": "tra due culture",
    "In partnership with the Institute of Arts and Restoration (Saint Petersburg, Russia), the Academy offers a joint diploma in Fine Arts and Restoration, Art Science, Cultural Studies and Socio-cultural Projects, as well as licensed programs in Psychology, Management and Pedagogical Education in the field of Art. Classes are held bilaterally in Italy (Florence) and Russia (St. Petersburg), so students may study the culture of both countries, visit their finest educational and cultural institutions, undertake practice, and determine their professional and career prospects.": "In collaborazione con l'Istituto di Arti e Restauro (San Pietroburgo, Russia), l'Accademia offre un diploma congiunto in Belle Arti e Restauro, Scienze dell'Arte, Studi Culturali e Progetti Socio-culturali, oltre a programmi accreditati in Psicologia, Management ed Educazione Pedagogica nel campo dell'Arte. Le lezioni si tengono in modo bilaterale in Italia (Firenze) e in Russia (San Pietroburgo), così gli studenti possono studiare la cultura di entrambi i Paesi, visitarne le migliori istituzioni educative e culturali, svolgere tirocini e definire le proprie prospettive professionali.",
    "In addition to painting and drawing, the program follows the advice of Leonardo da Vinci — paying close attention to perspective, atmosphere, proportion, light and shadow, anatomy, colour and overall personal development. Students learn Plastic Anatomy, Art History and the Italian Language as an essential cultural component of the Renaissance. An important part of the education is copying the masterpieces of great artists from different movements, and learning restoration techniques.": "Oltre alla pittura e al disegno, il programma segue i consigli di Leonardo da Vinci — con grande attenzione a prospettiva, atmosfera, proporzione, luce e ombra, anatomia, colore e sviluppo personale complessivo. Gli studenti studiano Anatomia Plastica, Storia dell'Arte e la Lingua Italiana come componente culturale essenziale del Rinascimento. Una parte importante della formazione è copiare i capolavori dei grandi artisti di diversi movimenti e apprendere le tecniche di restauro.",
    "Basic disciplines": "Discipline di base",
    "Drawing (portrait, nude)": "Disegno (ritratto, nudo)",
    "Copy of Academic Drawing and Painting": "Copia di Disegno e Pittura accademici",
    "Painting (portrait, nude figure)": "Pittura (ritratto, figura nuda)",
    "City landscape · short etudes": "Paesaggio urbano · studi brevi",
    "Composition": "Composizione",
    "Technique & Technology of Pictorial Materials": "Tecnica e tecnologia dei materiali pittorici",
    "Easel Painting Restoration and Conservation": "Restauro e conservazione della pittura da cavalletto",
    "Plastic Anatomy": "Anatomia plastica",
    "History of Art": "Storia dell'arte",
    "Other disciplines": "Altre discipline",
    "Italian Language": "Lingua italiana",
    "Art-world Marketing & Management for Independent Artists": "Marketing e management dell'arte per artisti indipendenti",
    "Art Philosophy": "Filosofia dell'arte",
    "Art Therapy": "Arteterapia",
    "Art Pedagogy": "Pedagogia dell'arte",
    "Museology": "Museologia",
    "Multimedia projects": "Progetti multimediali",
    "Photography": "Fotografia",
    "Full-time": "Tempo pieno",
    "6 hours daily": "6 ore al giorno",
    "Six academic hours of study per day, Monday to Friday.": "Sei ore accademiche di studio al giorno, dal lunedì al venerdì.",
    "Part-time": "Tempo parziale",
    "3 hours daily": "3 ore al giorno",
    "Three academic hours of study per day, Monday to Friday.": "Tre ore accademiche di studio al giorno, dal lunedì al venerdì.",
    "Course language": "Lingua del corso",
    "English": "Inglese",
    "No IELTS or TOEFL is required — we trust students to follow the professor with confidence.": "Non sono richiesti IELTS o TOEFL — confidiamo che gli studenti seguano il docente con sicurezza.",
    "The benefits of": "I vantaggi di",
    "studying here": "studiare qui",
    "A unique didactic program for studying the academic style in the visual arts.": "Un programma didattico unico per studiare lo stile accademico nelle arti visive.",
    "Location in the very heart of Florence — a unique Italian city of the richest traditions and cultural heritage.": "Sede nel cuore di Firenze — una città italiana unica, dalle tradizioni e dal patrimonio culturale più ricchi.",
    "A library and wireless connection across the academy's premises.": "Una biblioteca e connessione wireless in tutti gli spazi dell'accademia.",
    "Assistance from the staff in finding accommodation.": "Assistenza del personale nella ricerca dell'alloggio.",
    "Regular exhibitions, concerts, conferences and master classes — letting students feel the synthesis of all the arts and advance in their individual style.": "Mostre, concerti, conferenze e master class regolari — che permettono agli studenti di percepire la sintesi di tutte le arti e di progredire nel proprio stile.",
    "Find the program": "Trova il programma",
    "that fits you": "adatto a te",
    "From the four-year Bachelor's course to short summer immersions, there is a path for every artist.": "Dal corso triennale alle brevi immersioni estive, c'è un percorso per ogni artista.",

    /* ============ PROGRAMS ============ */
    "Academic": "Programmi",
    "A continuous path in Visual Arts and Restoration — from the four-year Bachelor's course to doctoral study, and a wealth of shorter courses besides.": "Un percorso continuo in Arti Visive e Restauro — dal corso triennale allo studio dottorale, oltre a numerosi corsi più brevi.",
    "2 years · 120 ECTS": "2 anni · 120 CFU",
    "1 year · 60 ECTS": "1 anno · 60 CFU",
    "The foundational academic course in Visual Arts and Restoration.": "Il corso accademico fondamentale in Arti Visive e Restauro.",
    "A post-graduate, second-level course concentrating on professional practice.": "Un corso post-laurea di secondo livello incentrato sulla pratica professionale.",
    "Advanced study and professional practice for the future masters of the field.": "Studio avanzato e pratica professionale per i futuri maestri del settore.",
    "Course I": "Corso I",
    "Bachelor's": "Corso di laurea",
    "Academic Course": "triennale",
    "Specialization": "Specializzazione",
    "Visual Arts and Restoration": "Arti Visive e Restauro",
    "Duration": "Durata",
    "4 years · full-time program": "4 anni · programma a tempo pieno",
    "The programme includes": "Il programma comprende",
    "Training internships, professional practice, pre-diploma internships, final state certification": "Tirocini formativi, pratica professionale, tirocini pre-diploma, certificazione finale di Stato",
    "Certification": "Certificazione",
    "Official Diploma awarded upon successful completion": "Diploma ufficiale rilasciato al completamento con successo",
    "Objective of the course": "Obiettivo del corso",
    "To form a holistic, analytically meaningful perception of objects and a professional approach to representing the student's figurative solution — mastering the tools of visual display, and studying the typologies of materials and painting techniques. Students learn to detect and attribute objects of material culture, determine their artistic and historical value and category of conservation, organise and carry out research and archive findings, select the optimal model of restoration, and prepare the scientific accounting documentation.": "Formare una percezione olistica e analiticamente consapevole degli oggetti e un approccio professionale alla resa della soluzione figurativa dello studente — padroneggiando gli strumenti della rappresentazione visiva e studiando le tipologie dei materiali e delle tecniche pittoriche. Gli studenti imparano a individuare e attribuire gli oggetti della cultura materiale, a determinarne il valore artistico e storico e la categoria di conservazione, a organizzare e svolgere ricerche d'archivio, a scegliere il modello ottimale di restauro e a preparare la documentazione scientifica.",
    "Targets of the course": "Finalità del corso",
    "Developing the student's ability of three-dimensional thinking": "Sviluppare la capacità di pensiero tridimensionale dello studente",
    "Familiarising with the methodology of realising learning assignments": "Familiarizzare con la metodologia di svolgimento delle esercitazioni",
    "Implementing the image-planning methodology": "Applicare la metodologia di progettazione dell'immagine",
    "Exploiting oil painting techniques and the expressiveness of tones": "Sfruttare le tecniche della pittura a olio e l'espressività dei toni",
    "Studying mixed technique, and the use of drawing within painting": "Studiare la tecnica mista e l'uso del disegno nella pittura",
    "Detection, attribution and conservation of objects of material culture": "Individuazione, attribuzione e conservazione degli oggetti della cultura materiale",
    "Organisation of restoration works and preparation of scientific documentation": "Organizzazione dei lavori di restauro e preparazione della documentazione scientifica",
    "Final attestation & enrollment": "Verifica finale e iscrizione",
    "The quality of practical painting and restoration assignments is assessed by examination. Enrollment for the 1st semester is open until the 15th of August; for the 2nd semester, until the 1st of December.": "La qualità delle esercitazioni pratiche di pittura e restauro è valutata mediante esame. Le iscrizioni al 1º semestre sono aperte fino al 15 agosto; al 2º semestre, fino al 1º dicembre.",
    "Career opportunities": "Sbocchi professionali",
    "Professor of Painting and Drawing, Art Director, professional freelance artist, Paintings Conservator (under a responsible institution), Graphic Designer, and collaborations with the public, magazines, newspapers, museums and galleries.": "Docente di Pittura e Disegno, Art Director, artista freelance, restauratore di dipinti (presso un'istituzione responsabile), graphic designer, e collaborazioni con enti pubblici, riviste, giornali, musei e gallerie.",
    "Course II": "Corso II",
    "Post-graduate, second-level": "Corso magistrale",
    "Master's Course": "di secondo livello",
    "2 years · full-time program": "2 anni · programma a tempo pieno",
    "Professional practice (off-site)": "Pratica professionale (esterna)",
    "Credits": "Crediti",
    "120 ECTS · 80 credit hours over 2 academic years": "120 CFU · 80 ore di credito in 2 anni accademici",
    "The choice of a precise direction for the professional career, and the beginning of working experience in that field.": "La scelta di una direzione precisa per la carriera professionale e l'inizio dell'esperienza lavorativa in quel campo.",
    "Application of knowledge by concentrating on practical focus": "Applicazione delle conoscenze con un'attenzione pratica",
    "Active participation in professional workshops, master classes and conferences": "Partecipazione attiva a workshop professionali, master class e conferenze",
    "Final attestation of practical assignments is performed by examination. Enrollment for the 1st semester is open until the 15th of August; for the 2nd semester, until the 1st of December.": "La verifica finale delle esercitazioni pratiche avviene mediante esame. Le iscrizioni al 1º semestre sono aperte fino al 15 agosto; al 2º semestre, fino al 1º dicembre.",
    "Course III": "Corso III",
    "PhD": "Dottorato",
    "Degree": "di ricerca",
    "1 year · full-time program": "1 anno · programma a tempo pieno",
    "Professional practice": "Pratica professionale",
    "60 ECTS · 40 credit hours over 1 academic year": "60 CFU · 40 ore di credito in 1 anno accademico",
    "Enrollment": "Iscrizione",
    "Open throughout the academic year": "Aperta durante tutto l'anno accademico",
    "Approach": "Approccio",
    "The course develops step-by-step, from easy to hard, with a constant focus on the analysis of the famous masters' artworks. Theoretical knowledge and methodological guidelines are tested through practical painting and restoration assignments, with midterm attestation and continuous guidance on self-directed work, before a final examination.": "Il corso si sviluppa passo dopo passo, dal facile al difficile, con una costante attenzione all'analisi delle opere dei grandi maestri. Le conoscenze teoriche e le linee guida metodologiche sono verificate attraverso esercitazioni pratiche di pittura e restauro, con verifica intermedia e guida continua sul lavoro autonomo, prima dell'esame finale.",
    "After completion of a course in Visual Arts and Restoration: professor of Painting and Drawing, Art Director, professional freelance artist, Paintings Conservator, Graphic Designer, and collaborations with museums, galleries and the press.": "Al termine di un corso in Arti Visive e Restauro: docente di Pittura e Disegno, Art Director, artista freelance, restauratore di dipinti, graphic designer, e collaborazioni con musei, gallerie e stampa.",
    "Other programs": "Altri programmi",
    "Beyond the": "Oltre i",
    "degree courses": "corsi di laurea",
    "Evening classes, short and summer courses, and master classes — all conducted in English, with a maximum of ten students per class.": "Corsi serali, corsi brevi ed estivi e master class — tutti in inglese, con un massimo di dieci studenti per classe.",
    "Evening School · 1 year": "Scuola serale · 1 anno",
    "Evening classes": "Corsi serali",
    "Additional evening classes in Painting, Drawing and other disciplines, held Monday to Friday with three academic hours of practice a day. The didactic program suits different age groups — each student receives an individual approach, with task difficulty matched to their level. Maximum enrollment ten students; an Official Certificate is awarded on completion.": "Lezioni serali aggiuntive di Pittura, Disegno e altre discipline, dal lunedì al venerdì con tre ore accademiche di pratica al giorno. Il programma didattico è adatto a diverse fasce d'età — ogni studente riceve un approccio individuale, con la difficoltà calibrata sul proprio livello. Iscrizione massima dieci studenti; al termine viene rilasciato un Certificato ufficiale.",
    "Short courses · from 1 week": "Corsi brevi · da 1 settimana",
    "Short-term study": "Studio a breve termine",
    "For students who wish to evaluate the method and quality of teaching first-hand. You are free to choose the duration — starting from one week — and the time to begin. Full-time study includes six academic hours a day. Enrollment is open throughout the academic year, and an Official Certificate is awarded on completion.": "Per gli studenti che desiderano valutare di persona il metodo e la qualità dell'insegnamento. Sei libero di scegliere la durata — a partire da una settimana — e il momento di iniziare. Lo studio a tempo pieno comprende sei ore accademiche al giorno. Le iscrizioni sono aperte tutto l'anno e al termine viene rilasciato un Certificato ufficiale.",
    "Summer courses · May – October": "Corsi estivi · maggio – ottobre",
    "Summer immersion": "Immersione estiva",
    "An intensive course of deep immersion in the cultural and historical environment of the Renaissance, teaching the fundamentals of drawing, painting, architecture, art history and philosophy. Practical classes are led by professors who graduated from the most prestigious art academies of Russia; art-history lectures and excursions are led by historians with fifteen years of experience in Italy. The week combines studio classes with guided museum visits and a day excursion to Siena.": "Un corso intensivo di profonda immersione nell'ambiente culturale e storico del Rinascimento, che insegna i fondamenti di disegno, pittura, architettura, storia dell'arte e filosofia. Le lezioni pratiche sono tenute da docenti diplomati nelle più prestigiose accademie d'arte russe; le lezioni di storia dell'arte e le escursioni sono guidate da storici con quindici anni di esperienza in Italia. La settimana unisce lezioni in atelier a visite guidate ai musei e a una gita giornaliera a Siena.",
    "Workshops & master classes · from 1 week": "Workshop e master class · da 1 settimana",
    "Workshops & master classes": "Workshop e master class",
    "Throughout the academic year the Academy organises workshops and master classes led by leading instructors from the top artistic universities of Russia, as well as world-famous artists. For the upcoming events program, please write to": "Durante tutto l'anno accademico l'Accademia organizza workshop e master class tenuti da docenti di spicco delle migliori università artistiche russe e da artisti di fama mondiale. Per il programma dei prossimi eventi, scrivi a",
    "Ready to": "Pronto a",
    "begin?": "iniziare?",
    "See requirements, tuition and the academic calendar, then send us your portfolio.": "Consulta requisiti, rette e calendario accademico, poi inviaci il tuo portfolio.",

    /* ============ RESTORATION ============ */
    "Department": "Dipartimento",
    "The art of": "L'arte del",
    "To become a true artist you must be fluent in every tool of the fine arts — the science of colour, perspective, optics and chemistry. Restoration is where they all meet.": "Per diventare un vero artista occorre padroneggiare ogni strumento delle belle arti — la scienza del colore, la prospettiva, l'ottica e la chimica. Il restauro è il luogo dove tutti si incontrano.",
    "Mastering academic art is bound to the study of the technique and technology of painting — and to the method of copying the old masters.": "Padroneggiare l'arte accademica è legato allo studio della tecnica e della tecnologia della pittura — e al metodo della copia degli antichi maestri.",
    "The old masters not only made their own paints, varnishes and materials but used them masterfully. Our students follow a complete method that teaches not only drawing, painting, composition and copying, but also the theory and practice of the full complex of restoration and conservation works. Fluency in all of these tools extends a student's professional skill and helps to determine the direction of their art in the future.": "Gli antichi maestri non solo preparavano colori, vernici e materiali, ma li usavano con maestria. I nostri studenti seguono un metodo completo che insegna non solo disegno, pittura, composizione e copia, ma anche la teoria e la pratica dell'intero complesso dei lavori di restauro e conservazione. La padronanza di tutti questi strumenti amplia le competenze professionali e aiuta a definire la direzione futura della propria arte.",
    "The Academy collaborates with restoration artists, museums and restoration centres so that students may learn the basics of restoring works of art and copying the old masters. Under the supervision of experienced restorers, students study the foundations of the profession and witness the restoration process first-hand.": "L'Accademia collabora con restauratori, musei e centri di restauro affinché gli studenti possano apprendere le basi del restauro delle opere d'arte e della copia degli antichi maestri. Sotto la guida di restauratori esperti, gli studenti studiano i fondamenti della professione e osservano in prima persona il processo di restauro.",
    "The student's field of activity includes:": "Il campo di attività dello studente comprende:",
    "Detection and attribution of objects of material culture — determining their artistic and historical value and their category of conservation": "Individuazione e attribuzione degli oggetti della cultura materiale — determinandone il valore artistico e storico e la categoria di conservazione",
    "Organisation and implementation of research and archive findings, and selection of the optimal model of restoration (conservation and reconstruction)": "Organizzazione e svolgimento di ricerche d'archivio e scelta del modello ottimale di restauro (conservazione e ricostruzione)",
    "Organisation and implementation of the complex of restoration works": "Organizzazione e realizzazione del complesso dei lavori di restauro",
    "Preparation of the scientific accounting documentation": "Preparazione della documentazione scientifica",
    "Easel paintings are the principal object of study.": "I dipinti da cavalletto sono il principale oggetto di studio.",
    "Target of the": "Finalità del",
    "course": "corso",
    "Students in the year-long course in Restoration of Easel Paintings are involved in conservation and restoration, scientific research and scientific-methodic activity, projects, and expert work. The precise specification of professional activity is chosen together with the Academy's responsible staff.": "Gli studenti del corso annuale di Restauro dei Dipinti da Cavalletto si occupano di conservazione e restauro, ricerca scientifica e attività scientifico-metodica, progetti e perizie. La precisa definizione dell'attività professionale è scelta insieme al personale responsabile dell'Accademia.",
    "Main contents of the": "Contenuti principali del",
    "Technological analysis of easel paintings": "Analisi tecnologica dei dipinti da cavalletto",
    "Basis: canvas, wood, more rarely metal, cardboard or paper": "Supporto: tela, legno, più raramente metallo, cartone o carta",
    "Stretcher: defining the type of wood, level of conservation, signs of secondary use": "Telaio: definizione del tipo di legno, stato di conservazione, segni di riutilizzo",
    "Primer: number and colour of layers, analysis to ascertain when the work was made": "Preparazione: numero e colore degli strati, analisi per accertare l'epoca dell'opera",
    "Colour layer: tones and craquelure": "Strato pittorico: toni e craquelure",
    "Varnish coating as an independent layer; texture analysis of the painting": "La vernice come strato indipendente; analisi della texture del dipinto",
    "Research laboratories": "Laboratori di ricerca",
    "Chemical technologies of restoration — synthetic adhesives and copolymer dispersions": "Tecnologie chimiche del restauro — adesivi sintetici e dispersioni di copolimeri",
    "Optical physics research": "Ricerca di fisica ottica",
    "Biological research — complex damage diagnosis of artworks": "Ricerca biologica — diagnosi complessa dei danni delle opere",
    "Chemical-physical research and the study of painting technology": "Ricerca chimico-fisica e studio della tecnologia pittorica",
    "Exploring the parameters of microclimate": "Studio dei parametri del microclima",
    "The main technological processes": "I principali processi tecnologici",
    "Preventive adhesive restoration — solid and fragmented sealing with tissue-paper": "Restauro adesivo preventivo — velinatura totale e parziale con carta velina",
    "Strengthening the colour layer by the open method": "Consolidamento dello strato pittorico con il metodo aperto",
    "Breakthrough reparation and the creation of new edges": "Riparazione delle lacerazioni e creazione di nuovi bordi",
    "Elimination of surface contamination from the varnish film": "Rimozione delle contaminazioni superficiali dalla pellicola di vernice",
    "Thinning and harmonisation of overprint varnishes, guided by UV luminescence": "Assottigliamento e armonizzazione delle vernici, guidati dalla luminescenza UV",
    "Working with restoration soil, varnishing, and the tinting of losses": "Lavorazione dello stucco di restauro, verniciatura e ritocco delle lacune",
    "Artwork reconstruction and craquelure imitation": "Ricostruzione dell'opera e imitazione del craquelure",
    "Practical assignments": "Esercitazioni pratiche",
    "Step-by-step restoration of easel paintings of varying difficulty, under a professor's control": "Restauro passo dopo passo di dipinti da cavalletto di varia difficoltà, sotto la guida del docente",
    "Autonomous development of a project-plan of conservation and restoration": "Sviluppo autonomo di un progetto di conservazione e restauro",
    "Detection of the technical analysis required to define a painting's condition": "Individuazione delle analisi tecniche necessarie a definire lo stato di un dipinto",
    "Compilation of the painting's restoration passport": "Compilazione del passaporto di restauro del dipinto",
    "Copying old masters to understand the multi-dimensional style of painting": "Copia degli antichi maestri per comprendere lo stile multidimensionale della pittura",
    "Our laboratory": "Il nostro laboratorio",
    "Works restored for": "Opere restaurate per",
    "museums & collections": "musei e collezioni",
    "Our laboratory has restored works for private collections and museums across Italy and Europe.": "Il nostro laboratorio ha restaurato opere per collezioni private e musei in Italia e in Europa.",
    "Oil on canvas. Work supervised by Stefano Garosi and Natalia Parenko. Also a 17th-century battle scene with knights, and a Madonna with Child and Saints.": "Olio su tela. Lavoro supervisionato da Stefano Garosi e Natalia Parenko. Inoltre una scena di battaglia con cavalieri del XVII secolo e una Madonna con Bambino e Santi.",
    "Restoration works": "Lavori di restauro",
    "Supervised by Stefano Garosi and Natalia Parenko.": "Supervisionato da Stefano Garosi e Natalia Parenko.",
    "Private collections": "Collezioni private",
    "Conservation and restoration of works held in private collections across Europe.": "Conservazione e restauro di opere conservate in collezioni private in tutta Europa.",
    "Learn to": "Impara a",
    "preserve the past": "preservare il passato",
    "Study restoration alongside drawing and painting in the heart of Florence.": "Studia il restauro insieme al disegno e alla pittura nel cuore di Firenze.",

    /* ============ ADMISSIONS ============ */
    "Admissions & aid": "Ammissioni e sostegno",
    "Send us the portfolio you are proudest of, complete the application form, and our professors will be in touch within seven days.": "Inviaci il portfolio di cui sei più orgoglioso, compila il modulo di iscrizione e i nostri docenti ti contatteranno entro sette giorni.",
    "The application": "I passaggi della",
    "steps": "candidatura",
    "Send the portfolio of your artworks — there are no specific standards, simply those you consider your best.": "Invia il portfolio delle tue opere — non ci sono criteri specifici, semplicemente quelle che ritieni migliori.",
    "Fill out and send the online application form with your personal data, and send a scanned copy to": "Compila e invia il modulo di iscrizione online con i tuoi dati personali, e invia una copia scansionata a",
    "Your portfolio is then shown to the professors. The Academy will let you know if you are accepted within 7 days of receiving the complete application.": "Il tuo portfolio viene poi mostrato ai docenti. L'Accademia ti comunicherà l'esito entro 7 giorni dalla ricezione della domanda completa.",
    "Once the school books have been returned, the admissions office issues your certificate of enrollment.": "Una volta restituiti i registri scolastici, l'ufficio ammissioni rilascia il certificato di iscrizione.",
    "Note: by enrolling in the Academy, the student accepts and subscribes to the general conditions of enrollment.": "Nota: iscrivendosi all'Accademia, lo studente accetta e sottoscrive le condizioni generali di iscrizione.",
    "Requested": "Documenti",
    "documents": "richiesti",
    "Annual & semester courses": "Corsi annuali e semestrali",
    "Online application form": "Modulo di iscrizione online",
    "Photocopy of passport": "Fotocopia del passaporto",
    "Copy of diploma (English or Italian)": "Copia del diploma (in inglese o italiano)",
    "One letter of recommendation, if available": "Una lettera di raccomandazione, se disponibile",
    "Master courses": "Corsi magistrali",
    "Copy of payment of registration fees": "Copia del pagamento della quota di iscrizione",
    "Copy of diploma / degree (Italian or English)": "Copia del diploma / laurea (in italiano o inglese)",
    "Copy of school or university grades and subjects attended": "Copia dei voti scolastici o universitari e delle materie frequentate",
    "Short courses": "Corsi brevi",
    "Summer courses": "Corsi estivi",
    "Tuition & fees": "Rette e costi",
    "Course": "Listino",
    "prices": "prezzi",
    "All figures in euro. Materials used individually by each student are not included in the tuition fees.": "Tutti gli importi sono in euro. I materiali usati individualmente da ciascuno studente non sono inclusi nelle rette.",
    "Semester course · 3 months": "Corso semestrale · 3 mesi",
    "Student": "Studente",
    "Reg.": "Iscr.",
    "Tuition": "Retta",
    "Equip.": "Mater.",
    "Total": "Totale",
    "Non-EU": "Extra-UE",
    "EU": "UE",
    "Academic courses": "Corsi accademici",
    "Master's · academic course": "Magistrale · corso accademico",
    "Master's · semester course": "Magistrale · corso semestrale",
    "Short course · by duration": "Corso breve · per durata",
    "1 week": "1 settimana",
    "2 weeks": "2 settimane",
    "3 weeks": "3 settimane",
    "4 weeks": "4 settimane",
    "6 weeks": "6 settimane",
    "8 weeks": "8 settimane",
    "10 weeks": "10 settimane",
    "12 weeks": "12 settimane",
    "9 weeks": "9 settimane",
    "Summer course · 1 May – 1 October": "Corso estivo · 1 maggio – 1 ottobre",
    "Traineeships & internships": "Tirocini e stage",
    "Programme": "Programma",
    "Traineeship · 6 months": "Tirocinio · 6 mesi",
    "Traineeship · 12 months": "Tirocinio · 12 mesi",
    "Internship · 6 months": "Stage · 6 mesi",
    "Internship · 12 months": "Stage · 12 mesi",
    "Payment": "Pagamento",
    "Payment of tuition must be made exclusively by bank transfer in favour of": "Il pagamento della retta deve essere effettuato esclusivamente tramite bonifico bancario a favore di",
    "If a relative or parent makes the transfer on behalf of the student, please write the student's name clearly in the subject line.": "Se un parente o un genitore effettua il bonifico per conto dello studente, si prega di indicare chiaramente il nome dello studente nella causale.",
    "Bank": "Banca",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Terms of payment — Academic courses (annual, semester, master): EU students within 30 days of the start of the course; Non-EU students within 60 days. Short courses: within 30 days of the start of the course. Formal admission and payment of fees are prerequisites for enrollment.": "Termini di pagamento — Corsi accademici (annuali, semestrali, magistrali): studenti UE entro 30 giorni dall'inizio del corso; studenti extra-UE entro 60 giorni. Corsi brevi: entro 30 giorni dall'inizio del corso. L'ammissione formale e il pagamento delle quote sono requisiti per l'iscrizione.",
    "Academic": "Calendario",
    "calendar": "accademico",
    "Fall semester": "Semestre autunnale",
    "1 October – 18 December": "1 ottobre – 18 dicembre",
    "Winter semester": "Semestre invernale",
    "11 January – 19 March": "11 gennaio – 19 marzo",
    "Spring semester": "Semestre primaverile",
    "22 March – 11 June": "22 marzo – 11 giugno",
    "Enrollment deadlines": "Scadenze di iscrizione",
    "1st semester — open until 15 August": "1º semestre — aperte fino al 15 agosto",
    "2nd semester — open until 1 December": "2º semestre — aperte fino al 1º dicembre",
    "PhD & short courses — open throughout the year": "Dottorato e corsi brevi — aperte tutto l'anno",
    "Financial": "Sostegno",
    "aid": "economico",
    "The Academy is committed to helping students.": "L'Accademia si impegna ad aiutare gli studenti.",
    "A discount of 10% is offered to people with disabilities. For any question about fees, payment plans or support, please write to": "È previsto uno sconto del 10% per le persone con disabilità. Per qualsiasi domanda su rette, piani di pagamento o sostegno, scrivi a",
    "— we are glad to help you find a way to study with us.": "— saremo lieti di aiutarti a trovare un modo per studiare con noi.",
    "Visa &": "Visto e",
    "housing": "alloggio",
    "Non-EU citizens": "Cittadini extra-UE",
    "In addition to a student visa, non-EU nationals intending to stay in Italy for more than three months must obtain a sojourn permit. On first arrival you must request the permit within 8 days; it is valid for one year and must be renewed each year (renewal requested within 60 days of expiry). The Academy's administrative staff in Florence provides all the documentation required for the visa application.": "Oltre al visto per studio, i cittadini extra-UE che intendono soggiornare in Italia per più di tre mesi devono ottenere il permesso di soggiorno. Al primo arrivo il permesso va richiesto entro 8 giorni; è valido un anno e va rinnovato ogni anno (rinnovo entro 60 giorni dalla scadenza). Il personale amministrativo dell'Accademia a Firenze fornisce tutta la documentazione necessaria per la richiesta del visto.",
    "EU citizens": "Cittadini UE",
    "EU citizens do not need a study visa or sojourn permit. For stays under three months no formal declaration is required; for longer stays you must register with the city hall of Florence (Ufficio Anagrafico of the Comune, via Baracca 150/p).": "I cittadini UE non necessitano di visto per studio né di permesso di soggiorno. Per soggiorni inferiori a tre mesi non è richiesta alcuna dichiarazione formale; per soggiorni più lunghi occorre registrarsi presso il Comune di Firenze (Ufficio Anagrafico, via Baracca 150/p).",
    "Medical insurance": "Assicurazione sanitaria",
    "Students should request the European Health Insurance Card (formerly E111) from their National Health Department.": "Gli studenti dovrebbero richiedere la Tessera Europea di Assicurazione Malattia (già E111) al proprio servizio sanitario nazionale.",
    "Housing": "Alloggio",
    "The Academy's staff offers help and guidance to students seeking housing, though students are responsible for arranging their own accommodation — ideally before leaving for Italy. Rooms in Florence start from around €300 per month, and it is wise to arrange bookings well in advance. Many rooms and apartments are advertised through local Facebook communities and rental websites such as mioaffitto.it, casa.it and trovacasa.net.": "Il personale dell'Accademia offre aiuto e orientamento agli studenti in cerca di alloggio, anche se sono gli studenti a doversi organizzare l'alloggio — preferibilmente prima di partire per l'Italia. Le stanze a Firenze partono da circa 300 € al mese, ed è bene prenotare con largo anticipo. Molte stanze e appartamenti vengono pubblicizzati tramite gruppi Facebook locali e siti di annunci come mioaffitto.it, casa.it e trovacasa.net.",
    "Send us your": "Inviaci il tuo",
    "portfolio": "portfolio",
    "Begin your application today, or write to us with any question about studying in Florence.": "Inizia oggi la tua candidatura, o scrivici per qualsiasi domanda sullo studio a Firenze.",

    /* ============ GALLERY ============ */
    "Life in the": "La vita in",
    "Studios, easels and student works from our home in the heart of Florence.": "Atelier, cavalletti e opere degli studenti dalla nostra sede nel cuore di Firenze.",
    "Life in the academy": "La vita in accademia",
    "Days at the": "Giornate al",
    "easel": "cavalletto",
    "A glimpse of studio life — these frames are ready for your own photographs.": "Uno scorcio della vita in atelier — queste cornici sono pronte per le vostre fotografie.",
    "Studio session": "Sessione in atelier",
    "Drawing from life": "Disegno dal vero",
    "Painting class": "Lezione di pittura",
    "Oil painting class": "Lezione di pittura a olio",
    "Plein air": "Plein air",
    "Plein air in Florence": "Plein air a Firenze",
    "Anatomy study": "Studio di anatomia",
    "Master class": "Master class",
    "Visiting master class": "Master class con ospiti",
    "Museum visit": "Visita al museo",
    "Art-history excursion": "Escursione di storia dell'arte",
    "Our students' works": "Le opere dei nostri studenti",
    "Works by": "Opere dei",
    "our students": "nostri studenti",
    "Drawings, studies and paintings produced during the academic year.": "Disegni, studi e dipinti realizzati durante l'anno accademico.",
    "Portrait study": "Studio di ritratto",
    "Charcoal portrait": "Ritratto a carboncino",
    "Academic figure": "Figura accademica",
    "Academic nude": "Nudo accademico",
    "Still life": "Natura morta",
    "Oil still life": "Natura morta a olio",
    "Copy of a master": "Copia di un maestro",
    "Copy after an old master": "Copia da un antico maestro",
    "City landscape": "Paesaggio urbano",
    "Florentine landscape": "Paesaggio fiorentino",
    "Composition study": "Studio di composizione",
    "Videos": "Video",
    "See the Academy": "Guarda l'Accademia",
    "in motion": "in movimento",
    "Watch lessons, master classes and student life on our official channel.": "Guarda lezioni, master class e la vita degli studenti sul nostro canale ufficiale.",
    "Your work could": "La tua opera potrebbe",
    "hang here next": "essere la prossima qui",
    "Join the Academy and study the classical traditions in the heart of Florence.": "Unisciti all'Accademia e studia le tradizioni classiche nel cuore di Firenze.",

    /* ============ CONTACT ============ */
    "We would be glad to answer any question about studying with us in Florence.": "Saremo lieti di rispondere a qualsiasi domanda sullo studio con noi a Firenze.",

    /* ---- breadcrumb separators / current labels handled by nav entries ---- */

    /* ---- CTA shared remainder ---- */
    "Come and study": "Vieni a studiare"
  };

  /* placeholders */
  var PH = {
    "Name and surname": "Nome e cognome",
    "you@example.com": "tu@esempio.com",
    "Admissions, programs, visiting…": "Ammissioni, programmi, visite…",
    "Tell us about yourself and what you wish to study.": "Parlaci di te e di cosa desideri studiare."
  };

  var originals = new Map();

  function key(s) { return s.replace(/\s+/g, ' ').trim(); }

  function eachText(fn) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode; if (!p) return NodeFilter.FILTER_REJECT;
        var t = p.nodeName;
        if (t === 'SCRIPT' || t === 'STYLE' || t === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-it]')) return NodeFilter.FILTER_REJECT;
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n; while ((n = w.nextNode())) fn(n);
  }

  function toItalian() {
    eachText(function (n) {
      var k = key(n.nodeValue);
      if (IT[k]) {
        if (!originals.has(n)) originals.set(n, n.nodeValue);
        var lead = n.nodeValue.match(/^\s*/)[0], trail = n.nodeValue.match(/\s*$/)[0];
        n.nodeValue = lead + IT[k] + trail;
      }
    });
    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var k = key(el.getAttribute('placeholder'));
      if (PH[k]) {
        if (!el.getAttribute('data-enph')) el.setAttribute('data-enph', el.getAttribute('placeholder'));
        el.setAttribute('placeholder', PH[k]);
      }
    });
    document.documentElement.lang = 'it';
  }

  function toEnglish() {
    originals.forEach(function (v, n) { n.nodeValue = v; });
    document.querySelectorAll('[data-enph]').forEach(function (el) {
      el.setAttribute('placeholder', el.getAttribute('data-enph'));
    });
    document.documentElement.lang = 'en';
  }

  function setBtn(lang) {
    document.querySelectorAll('.lang-toggle').forEach(function (b) {
      b.textContent = (lang === 'it' ? 'English' : 'Italiano');
    });
  }

  function current() { return localStorage.getItem('lang') === 'it' ? 'it' : 'en'; }

  function apply(lang) {
    if (lang === 'it') toItalian(); else toEnglish();
    setBtn(lang);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = current();
    if (lang === 'it') apply('it'); else setBtn('en');
    document.querySelectorAll('.lang-toggle').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        var nl = current() === 'it' ? 'en' : 'it';
        localStorage.setItem('lang', nl);
        apply(nl);
      });
    });
  });
})();
