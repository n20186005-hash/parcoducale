import { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import ThemeToggle from '@/components/ThemeToggle';
import {
  SiteLocale,
  baseUrl,
  getCanonicalUrl,
  getLanguageAlternates,
  isValidLocale,
} from '@/lib/site';

type Fact = { label: string; value: string };
type Feature = { title: string; text: string };
type FAQ = { question: string; answer: string };
type NearbyPlace = { name: string; text: string };

type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSummary: string;
  heroBadge: string;
  quickFactsLabel: string;
  quickFacts: Fact[];
  introTitle: string;
  intro: string[];
  hoursTitle: string;
  seasonalHours: Fact[];
  hoursNote: string;
  admissionTitle: string;
  admissionText: string;
  thingsTitle: string;
  things: Feature[];
  gettingThereTitle: string;
  gettingThere: Feature[];
  parkingTitle: string;
  parkingText: string;
  practicalTitle: string;
  practical: Feature[];
  historyTitle: string;
  history: string[];
  updateTitle: string;
  updateText: string;
  nearbyTitle: string;
  nearby: NearbyPlace[];
  faqTitle: string;
  faqs: FAQ[];
  galleryTitle: string;
  galleryText: string;
  galleryLinkLabel: string;
  mapTitle: string;
  mapText: string;
  openMap: string;
  footerDisclaimer: string;
  footerLinks: {
    privacy: string;
    terms: string;
    cookies: string;
  };
  themeToggleLabel: string;
  mapFrameTitle: string;
};

const address = 'Largo Luca Ganzi, 3, 43126 Parma PR, Italy';
const mapsUrl = 'https://maps.app.goo.gl/RAE49mVnrSMnbSWC8';
const tourismPhone = '+39 0521 218889';
const ratingText = '4.4/5';
const reviewCountText = '5,352';

const content: Record<SiteLocale, HomeContent> = {
  it: {
    metaTitle: 'Parco Ducale Parma: Orari, Ingresso, Cosa Vedere e Mappa',
    metaDescription:
      'Guida aggiornata al Parco Ducale di Parma: orari stagionali, ingresso gratuito, Fontana del Trianon, Peschiera, mappa, parcheggio e consigli pratici per la visita.',
    heroTitle: 'Parco Ducale di Parma',
    heroSummary:
      "Il Parco Ducale è uno dei principali giardini storici di Parma, nell'Oltretorrente, a pochi minuti dal centro. L'ingresso è gratuito e la visita è adatta a passeggiate, famiglie e soste rilassanti.",
    heroBadge: 'Guida indipendente per visitatori',
    quickFactsLabel: 'Informazioni rapide',
    quickFacts: [
      { label: 'Orari', value: 'Apr-Oct 06:00-24:00 / Nov-Mar 07:00-20:00' },
      { label: 'Ingresso', value: 'Gratuito' },
      { label: 'Indirizzo', value: address },
      { label: 'Durata visita', value: '45-90 minuti' },
      { label: 'Valutazione Google', value: `${ratingText} (${reviewCountText} recensioni, verifica ottobre 2026)` },
      { label: 'Contatto turistico', value: tourismPhone },
    ],
    introTitle: 'Perché visitarlo',
    intro: [
      "Creato nel XVI secolo per la corte dei Farnese, il parco conserva viali alberati, statue classiche, specchi d'acqua e alcuni dei luoghi più riconoscibili del paesaggio storico di Parma.",
      "Oggi è uno spazio pubblico molto frequentato per passeggiare, leggere, stare con i bambini o fare una pausa tra il centro storico, il torrente Parma e i musei dell'Oltretorrente.",
    ],
    hoursTitle: 'Orari del Parco Ducale',
    seasonalHours: [
      { label: 'Aprile-Ottobre', value: '06:00-24:00' },
      { label: 'Novembre-Marzo', value: '07:00-20:00' },
    ],
    hoursNote:
      "Gli orari sono stagionali e possono cambiare in occasione di eventi o manutenzioni. Prima della visita conviene verificare eventuali avvisi del Comune di Parma.",
    admissionTitle: 'Ingresso e prezzi',
    admissionText:
      "L'accesso al parco è gratuito. Per edifici o spazi vicini, come il Palazzo del Giardino o il Palazzetto Eucherio Sanvitale, possono valere regole e aperture separate.",
    thingsTitle: 'Cosa vedere al Parco Ducale',
    things: [
      {
        title: 'Fontana del Trianon',
        text: 'Uno dei simboli del parco, al centro di recenti lavori di recupero e valorizzazione.',
      },
      {
        title: 'Peschiera',
        text: "Lo specchio d'acqua monumentale è uno degli elementi più fotografati e resta un punto centrale dell'esperienza nel parco.",
      },
      {
        title: 'Palazzo del Giardino',
        text: "Storica residenza ducale affacciata sul verde. Anche quando non è visitabile, l'esterno merita una sosta.",
      },
      {
        title: 'Palazzetto Eucherio Sanvitale',
        text: 'Piccolo edificio rinascimentale legato alla storia artistica di Parma e al contesto del parco.',
      },
      {
        title: 'Sculture di Boudard',
        text: 'Statue e vasi monumentali lungo i viali aiutano a leggere il carattere scenografico del giardino.',
      },
      {
        title: "Tempietto d'Arcadia e viali",
        text: "Passeggiare tra alberi, prospettive simmetriche e angoli ombreggiati è parte essenziale della visita.",
      },
    ],
    gettingThereTitle: 'Come arrivare',
    gettingThere: [
      {
        title: 'Dal centro di Parma',
        text: "Si raggiunge facilmente a piedi attraversando il Ponte Verdi o il Ponte di Mezzo. Dal centro storico servono in genere 10-15 minuti.",
      },
      {
        title: 'Dalla stazione di Parma',
        text: "A piedi servono circa 20-25 minuti. In alternativa si può usare il trasporto urbano verso l'Oltretorrente e proseguire per un breve tratto a piedi.",
      },
    ],
    parkingTitle: 'Parcheggio',
    parkingText:
      "Nelle strade intorno al parco si trovano parcheggi urbani e aree a pagamento. Nei giorni più affollati è più pratico arrivare a piedi dal centro o usare i parcheggi cittadini con un breve tratto finale a piedi.",
    practicalTitle: 'Servizi e consigli pratici',
    practical: [
      {
        title: 'Famiglie e bambini',
        text: 'Il parco è adatto ai bambini grazie ai percorsi ampi, alle zone ombreggiate e agli spazi per muoversi con calma.',
      },
      {
        title: 'Cani',
        text: 'I cani sono generalmente ammessi; è consigliabile tenerli al guinzaglio e rispettare le regole locali e gli altri visitatori.',
      },
      {
        title: 'Accessibilità',
        text: 'I percorsi principali sono relativamente accessibili, anche se alcune superfici possono essere in ghiaia o irregolari.',
      },
      {
        title: 'Servizi in zona',
        text: 'Nelle vicinanze si trovano bar, ristoranti e altri servizi utili nel quartiere Oltretorrente e nel centro storico.',
      },
    ],
    historyTitle: 'Storia del Parco Ducale',
    history: [
      "Il parco nacque nella seconda metà del Cinquecento come giardino di corte per i Farnese, all'interno di un più ampio progetto di rappresentanza ducale.",
      "Nel tempo l'area è stata ampliata e trasformata, incorporando elementi paesaggistici, architettonici e decorativi che oggi raccontano l'evoluzione di Parma tra età ducale e città moderna.",
    ],
    updateTitle: 'Novità 2026',
    updateText:
      "Nel 2026 continuano gli interventi pubblici legati alla Peschiera e alla Fontana del Trianon. Per questo motivo alcune aree possono presentare lavori, transenne o accessi temporaneamente modificati.",
    nearbyTitle: 'Cosa vedere vicino al parco',
    nearby: [
      { name: 'Palazzo della Pilotta', text: 'Grande complesso monumentale con musei, teatro e biblioteca, comodo da abbinare alla visita.' },
      { name: 'Centro storico di Parma', text: 'Piazza Duomo, Battistero e le vie centrali si raggiungono in pochi minuti a piedi.' },
      { name: "Oltretorrente", text: 'Quartiere vivace per aperitivi, cucina parmigiana e una lettura più autentica della città.' },
    ],
    faqTitle: 'Domande frequenti',
    faqs: [
      { question: 'Quanto costa entrare al Parco Ducale?', answer: "L'ingresso al Parco Ducale è gratuito." },
      { question: 'Quali sono gli orari del Parco Ducale?', answer: 'Da aprile a ottobre 06:00-24:00; da novembre a marzo 07:00-20:00.' },
      { question: 'Quanto tempo serve per visitarlo?', answer: 'Per una visita tranquilla bastano in genere da 45 a 90 minuti.' },
      { question: 'Il Parco Ducale è adatto ai bambini?', answer: 'Sì, è uno dei luoghi più semplici e piacevoli di Parma per una passeggiata in famiglia.' },
      { question: 'I cani sono ammessi?', answer: 'In linea generale sì, ma conviene seguire la segnaletica locale e tenere il cane al guinzaglio.' },
      { question: 'Come arrivare dalla stazione?', answer: "Si può arrivare a piedi in circa 20-25 minuti oppure usare il trasporto urbano verso l'Oltretorrente." },
    ],
    galleryTitle: 'Galleria fotografica',
    galleryText: 'Una selezione di immagini del parco per orientarsi tra viali, acqua, statue e scorci verdi.',
    galleryLinkLabel: 'Apri la scheda su Google Maps',
    mapTitle: 'Mappa e posizione',
    mapText: 'Il parco si trova nel quartiere Oltretorrente, in posizione molto comoda sia dal centro sia dalla stazione.',
    openMap: 'Apri Google Maps',
    footerDisclaimer:
      'Questo sito è una guida indipendente e non rappresenta il gestore ufficiale del Parco Ducale. Le informazioni sono raccolte da fonti pubbliche e devono essere ricontrollate prima della visita.',
    footerLinks: {
      privacy: 'Privacy Policy',
      terms: 'Termini di servizio',
      cookies: 'Impostazioni cookie',
    },
    themeToggleLabel: 'Cambia tema',
    mapFrameTitle: 'Mappa del Parco Ducale',
  },
  en: {
    metaTitle: 'Parco Ducale Parma: Hours, Free Entry, Map and Visitor Guide',
    metaDescription:
      'Updated visitor guide to Parco Ducale in Parma with seasonal opening hours, free admission, main sights, parking, directions and practical travel tips.',
    heroTitle: 'Parco Ducale Parma',
    heroSummary:
      'Parco Ducale is one of Parma’s best-known historic parks, just west of the historic center. Entry is free, and the park works well for a short walk, a family stop or a relaxed break in the city.',
    heroBadge: 'Independent visitor guide',
    quickFactsLabel: 'Quick facts',
    quickFacts: [
      { label: 'Hours', value: 'Apr-Oct 6:00 AM-12:00 AM / Nov-Mar 7:00 AM-8:00 PM' },
      { label: 'Admission', value: 'Free' },
      { label: 'Address', value: address },
      { label: 'Visit time', value: '45-90 minutes' },
      { label: 'Google rating', value: `${ratingText} (${reviewCountText} reviews, checked October 2026)` },
      { label: 'Tourism contact', value: tourismPhone },
    ],
    introTitle: 'Why visit',
    intro: [
      'Created for the Farnese court in the 16th century, the park combines tree-lined avenues, sculptures, water features and some of the most recognizable green views in Parma.',
      'Today it is a public park used for walking, reading, relaxing and spending time with children, with an easy connection to the city center and the Oltretorrente district.',
    ],
    hoursTitle: 'Opening hours',
    seasonalHours: [
      { label: 'April-October', value: '6:00 AM-12:00 AM' },
      { label: 'November-March', value: '7:00 AM-8:00 PM' },
    ],
    hoursNote:
      'Opening hours are seasonal and may change during events or maintenance periods. Check current local notices before a special visit.',
    admissionTitle: 'Entry and prices',
    admissionText:
      'Park access is free. Nearby buildings such as Palazzo del Giardino or Palazzetto Eucherio Sanvitale may follow separate opening rules.',
    thingsTitle: 'What to see',
    things: [
      { title: 'Fontana del Trianon', text: 'A landmark fountain and one of the visual anchors of the park.' },
      { title: 'Peschiera', text: 'The formal water basin is one of the park’s signature features and a key photo stop.' },
      { title: 'Palazzo del Giardino', text: 'The historic ducal residence adds context and scale to the landscape.' },
      { title: 'Palazzetto Eucherio Sanvitale', text: 'A Renaissance building linked to Parma’s artistic history.' },
      { title: 'Boudard sculptures', text: 'Classical statues and monumental vases reinforce the garden’s formal design.' },
      { title: 'Shaded avenues', text: 'Long walks beneath mature trees are one of the simplest reasons to come here.' },
    ],
    gettingThereTitle: 'How to get there',
    gettingThere: [
      { title: 'From central Parma', text: 'Walk across Ponte Verdi or Ponte di Mezzo. The park is usually 10-15 minutes on foot from the center.' },
      { title: 'From Parma station', text: 'Walking takes about 20-25 minutes. Public transport toward Oltretorrente can shorten the trip.' },
    ],
    parkingTitle: 'Parking',
    parkingText:
      'Street parking and paid urban parking areas are available around the park. On busy days, walking from central Parma is often easier.',
    practicalTitle: 'Practical visitor tips',
    practical: [
      { title: 'With children', text: 'Wide paths and open green areas make the park comfortable for families.' },
      { title: 'With dogs', text: 'Dogs are generally allowed, but a leash and local rules should be respected.' },
      { title: 'Accessibility', text: 'Main routes are relatively accessible, though some surfaces may be gravel or uneven.' },
      { title: 'Nearby services', text: 'Cafes, restaurants and city services are easy to find nearby.' },
    ],
    historyTitle: 'History',
    history: [
      'Parco Ducale began in the second half of the 16th century as a court garden for the Farnese family.',
      'Over time it developed into a public urban park that still preserves its formal structure and historic atmosphere.',
    ],
    updateTitle: '2026 update',
    updateText:
      'Public works connected to the Peschiera and Fontana del Trianon continued during 2026, so some areas may look different or have temporary access changes.',
    nearbyTitle: 'What to see nearby',
    nearby: [
      { name: 'Palazzo della Pilotta', text: 'A major museum and theatre complex within easy reach.' },
      { name: 'Historic center', text: 'Parma Cathedral, the Baptistery and central streets are all close by.' },
      { name: 'Oltretorrente', text: 'A lively district for food, local atmosphere and a broader city walk.' },
    ],
    faqTitle: 'FAQ',
    faqs: [
      { question: 'Is Parco Ducale free?', answer: 'Yes. Entry to the park is free.' },
      { question: 'What are the opening hours?', answer: 'April-October 6:00 AM-12:00 AM; November-March 7:00 AM-8:00 PM.' },
      { question: 'How long do you need?', answer: 'A relaxed visit usually takes 45-90 minutes.' },
      { question: 'Is it good for children?', answer: 'Yes. It is one of the easiest green stops in Parma for families.' },
      { question: 'Are dogs allowed?', answer: 'Generally yes, with a leash and respect for local rules.' },
      { question: 'How do you get there from the station?', answer: 'Walk for about 20-25 minutes or use local transport toward Oltretorrente.' },
    ],
    galleryTitle: 'Photo gallery',
    galleryText: 'A visual overview of paths, fountains, greenery and the historic atmosphere of the park.',
    galleryLinkLabel: 'Open the place on Google Maps',
    mapTitle: 'Map and location',
    mapText: 'The park sits in Parma’s Oltretorrente district, a short walk from the historic center.',
    openMap: 'Open Google Maps',
    footerDisclaimer:
      'This website is an independent guide and does not represent the official operator of Parco Ducale. Please recheck important details before visiting.',
    footerLinks: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Settings',
    },
    themeToggleLabel: 'Toggle theme',
    mapFrameTitle: 'Parco Ducale map',
  },
  fr: {
    metaTitle: 'Parco Ducale Parme : horaires, entrée gratuite, carte et visite',
    metaDescription:
      'Guide pratique du Parco Ducale à Parme avec horaires saisonniers, entrée gratuite, principaux points d’intérêt, accès, stationnement et conseils utiles.',
    heroTitle: 'Parco Ducale de Parme',
    heroSummary:
      'Le Parco Ducale est l’un des jardins historiques les plus connus de Parme, à quelques minutes du centre. L’entrée est gratuite et la visite convient bien à une promenade ou à une pause en famille.',
    heroBadge: 'Guide indépendant pour visiteurs',
    quickFactsLabel: 'Informations rapides',
    quickFacts: [
      { label: 'Horaires', value: 'Avr-Oct 06:00-24:00 / Nov-Mar 07:00-20:00' },
      { label: 'Entrée', value: 'Gratuite' },
      { label: 'Adresse', value: address },
      { label: 'Durée de visite', value: '45-90 minutes' },
      { label: 'Note Google', value: `${ratingText} (${reviewCountText} avis, vérifié en octobre 2026)` },
      { label: 'Contact tourisme', value: tourismPhone },
    ],
    introTitle: 'Pourquoi visiter',
    intro: [
      'Créé pour la cour des Farnèse au XVIe siècle, le parc réunit allées arborées, sculptures, eau et architecture dans un cadre très lisible.',
      'Aujourd’hui, c’est un grand espace public agréable pour marcher, se reposer ou faire une pause entre le centre historique et le quartier de l’Oltretorrente.',
    ],
    hoursTitle: 'Horaires',
    seasonalHours: [
      { label: 'Avril-Octobre', value: '06:00-24:00' },
      { label: 'Novembre-Mars', value: '07:00-20:00' },
    ],
    hoursNote:
      'Les horaires sont saisonniers et peuvent changer pendant des travaux, des événements ou des fermetures exceptionnelles.',
    admissionTitle: 'Entrée et tarifs',
    admissionText:
      'L’accès au parc est gratuit. Les bâtiments voisins peuvent avoir des horaires et des règles de visite distincts.',
    thingsTitle: 'Que voir',
    things: [
      { title: 'Fontana del Trianon', text: 'Une fontaine emblématique et un point fort visuel du parc.' },
      { title: 'Peschiera', text: 'Le bassin monumental compte parmi les vues les plus reconnaissables.' },
      { title: 'Palazzo del Giardino', text: 'L’ancienne résidence ducale donne au lieu son contexte historique.' },
      { title: 'Palazzetto Eucherio Sanvitale', text: 'Un édifice Renaissance important dans le paysage culturel de Parme.' },
      { title: 'Sculptures de Boudard', text: 'Des statues et vases monumentaux marquent les grandes perspectives du jardin.' },
      { title: 'Allées ombragées', text: 'Une simple promenade sous les arbres fait déjà partie de l’intérêt du lieu.' },
    ],
    gettingThereTitle: 'Accès',
    gettingThere: [
      { title: 'Depuis le centre', text: 'On y arrive facilement à pied en 10 à 15 minutes depuis le centre historique.' },
      { title: 'Depuis la gare', text: 'Comptez environ 20 à 25 minutes à pied, ou un trajet urbain vers l’Oltretorrente.' },
    ],
    parkingTitle: 'Stationnement',
    parkingText:
      'On trouve des places de rue et des parkings urbains autour du parc. Les jours chargés, venir à pied reste souvent la solution la plus simple.',
    practicalTitle: 'Conseils pratiques',
    practical: [
      { title: 'Avec des enfants', text: 'Les chemins larges et les zones vertes rendent la visite facile en famille.' },
      { title: 'Avec un chien', text: 'Les chiens sont en principe admis, avec laisse et respect de la signalétique locale.' },
      { title: 'Accessibilité', text: 'Les parcours principaux sont relativement accessibles, avec quelques surfaces en gravier.' },
      { title: 'Services proches', text: 'Bars, restaurants et services urbains sont disponibles à proximité.' },
    ],
    historyTitle: 'Histoire',
    history: [
      'Le parc naît dans la seconde moitié du XVIe siècle comme jardin de cour pour la famille Farnèse.',
      'Il devient ensuite un grand parc public qui conserve encore sa composition historique et son identité paysagère.',
    ],
    updateTitle: 'Mise à jour 2026',
    updateText:
      'Les interventions publiques autour de la Peschiera et de la Fontana del Trianon se sont poursuivies en 2026, avec des changements ponctuels sur certaines zones.',
    nearbyTitle: 'À voir à proximité',
    nearby: [
      { name: 'Palazzo della Pilotta', text: 'Grand complexe culturel avec musées et théâtre.' },
      { name: 'Centre historique', text: 'La cathédrale, le baptistère et les rues centrales sont tout proches.' },
      { name: 'Oltretorrente', text: 'Quartier vivant pour manger, flâner et prolonger la visite.' },
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      { question: 'L’entrée du Parco Ducale est-elle gratuite ?', answer: 'Oui, l’entrée du parc est gratuite.' },
      { question: 'Quels sont les horaires ?', answer: 'Avril-octobre 06:00-24:00 ; novembre-mars 07:00-20:00.' },
      { question: 'Combien de temps prévoir ?', answer: 'Une visite tranquille dure généralement entre 45 et 90 minutes.' },
      { question: 'Le parc convient-il aux enfants ?', answer: 'Oui, c’est une promenade facile et agréable pour les familles.' },
      { question: 'Les chiens sont-ils admis ?', answer: 'En principe oui, avec laisse et respect des règles locales.' },
      { question: 'Comment venir depuis la gare ?', answer: 'À pied en 20 à 25 minutes, ou avec un transport urbain vers l’Oltretorrente.' },
    ],
    galleryTitle: 'Galerie photos',
    galleryText: 'Quelques images pour repérer les allées, les fontaines et l’ambiance du parc.',
    galleryLinkLabel: 'Ouvrir le lieu dans Google Maps',
    mapTitle: 'Carte et emplacement',
    mapText: 'Le parc se trouve dans le quartier Oltretorrente, très proche du centre historique de Parme.',
    openMap: 'Ouvrir Google Maps',
    footerDisclaimer:
      'Ce site est un guide indépendant et ne représente pas le gestionnaire officiel du Parco Ducale. Vérifiez les informations importantes avant votre visite.',
    footerLinks: {
      privacy: 'Politique de confidentialité',
      terms: "Conditions d'utilisation",
      cookies: 'Paramètres des cookies',
    },
    themeToggleLabel: 'Changer le thème',
    mapFrameTitle: 'Carte du Parco Ducale',
  },
  'zh-Hant': {
    metaTitle: 'Parco Ducale Parma：開放時間、免費入園、地圖與參觀指南',
    metaDescription:
      'Parco Ducale 帕爾馬公爵公園最新參觀指南，包含季節開放時間、免費入園、必看景點、交通、停車與實用建議。',
    heroTitle: 'Parco Ducale 帕爾馬公爵公園',
    heroSummary:
      'Parco Ducale 是帕爾馬最重要的歷史公園之一，距離老城中心很近。公園免費開放，適合散步、家庭停留與城市中的短暫放鬆。',
    heroBadge: '獨立旅遊資訊頁',
    quickFactsLabel: '快速資訊',
    quickFacts: [
      { label: '開放時間', value: '4-10 月 06:00-24:00 / 11-3 月 07:00-20:00' },
      { label: '門票', value: '免費' },
      { label: '地址', value: address },
      { label: '建議停留', value: '45-90 分鐘' },
      { label: 'Google 評分', value: `${ratingText}（${reviewCountText} 則評論，最後核對 2026 年 10 月）` },
      { label: '旅遊聯絡', value: tourismPhone },
    ],
    introTitle: '值得去的原因',
    intro: [
      '這座公園最早為 16 世紀 Farnese 公爵家族而建，現在仍保留林蔭大道、水景、雕塑與典型的歷史花園空間感。',
      '如今它是帕爾馬市區最容易進入的綠地之一，很適合在逛完老城後順路散步、休息，或帶小孩放鬆一下。',
    ],
    hoursTitle: '開放時間',
    seasonalHours: [
      { label: '4 月-10 月', value: '06:00-24:00' },
      { label: '11 月-3 月', value: '07:00-20:00' },
    ],
    hoursNote:
      '開放時間為季節制，若遇到活動、維護或市政工程，現場動線與實際進出時間可能調整。',
    admissionTitle: '入園與費用',
    admissionText:
      '公園本身免費開放。周邊歷史建築若另有開放時段或參觀規則，通常會獨立公告。',
    thingsTitle: 'Parco Ducale 看什麼',
    things: [
      { title: 'Fontana del Trianon', text: '公園代表性噴泉，也是近年整修與更新的重點區域。' },
      { title: 'Peschiera', text: '大型水池景觀是公園最有辨識度的畫面之一。' },
      { title: 'Palazzo del Giardino', text: '昔日公爵府邸，讓整座公園更有歷史層次。' },
      { title: 'Palazzetto Eucherio Sanvitale', text: '與帕爾馬文藝復興藝術史相關的重要建築。' },
      { title: 'Boudard 雕塑', text: '園內的古典雕塑與大型裝飾花瓶很有辨識度。' },
      { title: '林蔭步道', text: '就算不特別趕景點，單純散步也是這裡最好的玩法之一。' },
    ],
    gettingThereTitle: '怎麼去',
    gettingThere: [
      { title: '從帕爾馬市中心', text: '從老城步行約 10-15 分鐘即可抵達，跨橋後就進入 Oltretorrente 區。' },
      { title: '從 Parma 車站', text: '步行約 20-25 分鐘，也可以搭市區交通先到 Oltretorrente 再步行。' },
    ],
    parkingTitle: '停車',
    parkingText:
      '公園周邊有市區路邊停車與付費停車區。若是旺季或週末，從市中心步行過來通常更省事。',
    practicalTitle: '實用建議',
    practical: [
      { title: '親子友善', text: '步道寬敞、綠地開闊，適合帶小孩散步或短暫停留。' },
      { title: '可否帶狗', text: '一般可攜犬進入，但建議牽繩並遵守現場規定。' },
      { title: '無障礙', text: '主要路線相對友善，但部分地面可能有碎石或不平整處。' },
      { title: '附近服務', text: '周邊有餐廳、咖啡館與市區日常服務，補給很方便。' },
    ],
    historyTitle: '歷史背景',
    history: [
      'Parco Ducale 建於 16 世紀後半，最初是 Farnese 公爵家族的宮廷花園。',
      '之後它逐步轉變為城市公共公園，保留了歷史園林格局，也成為現代帕爾馬的重要綠地。',
    ],
    updateTitle: '2026 最新動態',
    updateText:
      '2026 年與 Peschiera、Fontana del Trianon 相關的市政整修工程仍是重要議題，因此部分區域可能出現施工、圍欄或動線調整。',
    nearbyTitle: '附近還能看什麼',
    nearby: [
      { name: 'Palazzo della Pilotta', text: '大型文化建築群，可與公園安排成同一段散步路線。' },
      { name: '帕爾馬老城', text: '大教堂、洗禮堂與市中心街區都在不遠處。' },
      { name: 'Oltretorrente', text: '這一區很適合接著吃飯、散步，感受當地生活節奏。' },
    ],
    faqTitle: '常見問題',
    faqs: [
      { question: 'Parco Ducale 要門票嗎？', answer: '不用，公園免費入園。' },
      { question: 'Parco Ducale 幾點開？', answer: '4-10 月 06:00-24:00；11-3 月 07:00-20:00。' },
      { question: '大概要待多久？', answer: '一般輕鬆走一圈大約 45-90 分鐘。' },
      { question: '適合帶小孩嗎？', answer: '很適合，是帕爾馬市區相當容易安排的親子綠地。' },
      { question: '可以帶狗嗎？', answer: '通常可以，但建議全程牽繩並遵守現場規定。' },
      { question: '從車站怎麼去？', answer: '步行約 20-25 分鐘，或先搭市區交通到 Oltretorrente。' },
    ],
    galleryTitle: '照片集',
    galleryText: '用幾張照片先快速認識公園的水景、步道、雕塑與綠地氣氛。',
    galleryLinkLabel: '在 Google Maps 開啟地點',
    mapTitle: '地圖與位置',
    mapText: '公園位於帕爾馬 Oltretorrente 區，從老城步行就能抵達。',
    openMap: '開啟 Google Maps',
    footerDisclaimer:
      '本站為獨立旅遊資訊頁，並非 Parco Ducale 官方經營單位。出發前請再次核對重要資訊。',
    footerLinks: {
      privacy: '隱私政策',
      terms: '服務條款',
      cookies: 'Cookie 設定',
    },
    themeToggleLabel: '切換主題',
    mapFrameTitle: 'Parco Ducale 地圖',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isValidLocale(locale) ? locale : 'it';
  const page = content[safeLocale];

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: getCanonicalUrl(safeLocale),
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: getCanonicalUrl(safeLocale),
      siteName: 'Parco Ducale',
      locale: safeLocale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/gallery/images%20(1).jpg`,
          width: 1200,
          height: 800,
          alt: page.heroTitle,
        },
      ],
    },
  };
}

function FaqList({ items }: { items: FAQ[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-2xl border border-theme bg-bg-secondary p-5"
        >
          <summary className="cursor-pointer text-lg font-semibold">
            {item.question}
          </summary>
          <p className="mt-3 text-secondary leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

function InfoGrid({
  items,
  columns = 'md:grid-cols-2 lg:grid-cols-3',
}: {
  items: Feature[];
  columns?: string;
}) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-theme bg-bg-secondary p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-secondary leading-relaxed">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = isValidLocale(locale) ? locale : 'it';
  const page = content[safeLocale];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        url: baseUrl,
        name: 'Parco Ducale',
      },
      {
        '@type': 'WebPage',
        '@id': `${getCanonicalUrl(safeLocale)}#webpage`,
        url: getCanonicalUrl(safeLocale),
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: safeLocale,
        isPartOf: {
          '@id': `${baseUrl}#website`,
        },
      },
      {
        '@type': 'TouristAttraction',
        '@id': `${getCanonicalUrl(safeLocale)}#attraction`,
        name: 'Parco Ducale',
        description: page.metaDescription,
        url: getCanonicalUrl(safeLocale),
        isAccessibleForFree: true,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Largo Luca Ganzi, 3',
          postalCode: '43126',
          addressLocality: 'Parma',
          addressRegion: 'PR',
          addressCountry: 'IT',
        },
        sameAs: [mapsUrl],
      },
      {
        '@type': 'FAQPage',
        '@id': `${getCanonicalUrl(safeLocale)}#faq`,
        mainEntity: page.faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="absolute top-0 z-50 w-full px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-lg font-bold tracking-[0.2em] text-white">
            PARCO DUCALE
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle label={page.themeToggleLabel} />
            <nav className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Link href="/it" className={safeLocale === 'it' ? 'text-accent' : ''}>
                IT
              </Link>
              <Link href="/en" className={safeLocale === 'en' ? 'text-accent' : ''}>
                EN
              </Link>
              <Link href="/fr" className={safeLocale === 'fr' ? 'text-accent' : ''}>
                FR
              </Link>
              <Link
                href="/zh-Hant"
                className={safeLocale === 'zh-Hant' ? 'text-accent' : ''}
              >
                ZH
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery/images (1).jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-bg" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-32 text-white md:px-8">
          <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
            {page.heroBadge}
          </span>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            {page.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm md:text-base">
            <span className="rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
              {page.quickFacts[0].value}
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
              {page.quickFacts[1].value}
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
              {page.quickFacts[4].value}
            </span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <h2 className="text-3xl font-bold">{page.introTitle}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-secondary">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl border border-theme bg-bg-secondary p-6 shadow-sm">
            <h2 className="text-2xl font-bold">{page.quickFactsLabel}</h2>
            <dl className="mt-6 space-y-4">
              {page.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-theme/70 pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-theme bg-bg-secondary p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{page.hoursTitle}</h2>
            <div className="mt-6 space-y-4">
              {page.seasonalHours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-theme bg-primary px-5 py-4"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-secondary leading-relaxed">{page.hoursNote}</p>
          </article>

          <article className="rounded-3xl border border-theme bg-bg-secondary p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{page.admissionTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              {page.admissionText}
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold">{page.thingsTitle}</h2>
        <div className="mt-8">
          <InfoGrid items={page.things} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">{page.gettingThereTitle}</h2>
            <div className="mt-8">
              <InfoGrid items={page.gettingThere} columns="grid-cols-1" />
            </div>
          </div>
          <article className="rounded-3xl border border-theme bg-bg-secondary p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{page.parkingTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              {page.parkingText}
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold">{page.practicalTitle}</h2>
        <div className="mt-8">
          <InfoGrid items={page.practical} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-theme bg-bg-secondary p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{page.historyTitle}</h2>
            <div className="mt-6 space-y-4 text-secondary leading-relaxed">
              {page.history.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-theme bg-bg-secondary p-8 shadow-sm">
            <h2 className="text-3xl font-bold">{page.updateTitle}</h2>
            <p className="mt-6 text-secondary leading-relaxed">{page.updateText}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold">{page.nearbyTitle}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {page.nearby.map((place) => (
            <article
              key={place.name}
              className="rounded-3xl border border-theme bg-bg-secondary p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{place.name}</h3>
              <p className="mt-3 text-secondary leading-relaxed">{place.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="text-3xl font-bold">{page.faqTitle}</h2>
        <div className="mt-8">
          <FaqList items={page.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-b border-theme px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{page.galleryTitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-secondary">
            {page.galleryText}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex font-medium text-accent hover:underline"
          >
            {page.galleryLinkLabel}
          </a>
        </div>
        <div className="mt-10">
          <Gallery locale={safeLocale} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-b border-theme px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{page.mapTitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-secondary">{page.mapText}</p>
          <p className="mt-2 text-secondary">{address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex font-medium text-accent hover:underline"
          >
            {page.openMap}
          </a>
        </div>

        <div className="map-container mt-10 overflow-hidden rounded-3xl border border-theme shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.41112994661484!2d10.320092800620055!3d44.80622571704381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47806af4045a1105%3A0xd8bea4f2d738fad0!2sParco%20Ducale!5e0!3m2!1sen!2sus!4v1774520155700!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={page.mapFrameTitle}
          />
        </div>
      </section>

      <footer className="bg-bg-secondary py-12 text-center text-sm text-secondary">
        <div className="mx-auto max-w-4xl px-4">
          <p className="leading-relaxed">{page.footerDisclaimer}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 font-medium">
            <Link href={`/${safeLocale}/privacy-policy`} className="hover:text-accent">
              {page.footerLinks.privacy}
            </Link>
            <Link href={`/${safeLocale}/terms-of-service`} className="hover:text-accent">
              {page.footerLinks.terms}
            </Link>
            <Link href={`/${safeLocale}/cookie-settings`} className="hover:text-accent">
              {page.footerLinks.cookies}
            </Link>
          </div>

          <p className="mt-8 font-semibold">© 2026 Parco Ducale</p>
        </div>
      </footer>
    </main>
  );
}
