import data from '@/data/nearby-guides.json';
import type { SiteLocale } from '@/lib/site';
export const guideSlugs = ['palazzo-della-pilotta', 'casa-natale-toscanini', 'piazza-duomo'] as const;
export type GuideSlug = typeof guideSlugs[number];
export type GuideContent = {
  name: string; title: string; summary: string; address: string;
  intro: string[]; tips: string[]; highlights: string[]; about: string[];
  hours: string; admission: string; arrival: string[]; appeal: string[];
  route: string[]; notices: string[]; photo: string; stay: string;
  faqs: { question: string; answer: string }[];
};
export const guideContent: Record<SiteLocale, Record<GuideSlug, GuideContent>> = data;
export function isGuideSlug(slug: string): slug is GuideSlug { return guideSlugs.includes(slug as GuideSlug); }
export const checkedDate = '2026-11-10';
export const guideMeta: Record<GuideSlug, {image: string; credit: string; imageSource: string; sources: {label: string; url: string}[]}> = {
 'palazzo-della-pilotta': {
  image: '/nearby/pilotta.jpg', credit: 'Parma1983 · CC BY-SA 4.0',
  imageSource: 'https://commons.wikimedia.org/wiki/File:Palazzo_della_Pilotta_(Parma)_-_lato_ovest_2019-06-07.jpg',
  sources: [
   {label:'Complesso della Pilotta: palace and history',url:'https://complessopilotta.it/il-palazzo-della-pilotta/'},
   {label:'Opening hours',url:'https://complessopilotta.it/orari/'},
   {label:'Tickets',url:'https://complessopilotta.it/biglietti/'},
   {label:'Directions',url:'https://complessopilotta.it/dove-siamo/'},
   {label:'Ministry of Culture: museum complex',url:'https://cultura.gov.it/luogo/complesso-monumentale-della-pilotta-1'}]
 },
 'casa-natale-toscanini': {
  image: '/nearby/toscanini.jpg', credit: 'Pensierarte · CC BY-SA 4.0',
  imageSource: 'https://commons.wikimedia.org/wiki/File:Casanataletoscanini.jpg',
  sources: [
   {label:'Comune di Parma: birthplace museum',url:'https://www.comune.parma.it/it/vivere-parma/luoghi/cultura/museo-casa-natale-arturo-toscanini'},
   {label:'Museum visitor information',url:'https://www.museotoscanini.it/it-IT/Info.aspx'},
   {label:'Parma Welcome: museum',url:'https://parmawelcome.it/scheda/casa-natale-e-museo-di-arturo-toscanini/'},
   {label:'Civic-museum tickets',url:'https://www.lacasadellamusica.it/it-IT/Biglietto-unico-per-sei-musei.aspx'}]
 },
 'piazza-duomo': {
  image: '/nearby/piazza-duomo.jpg', credit: 'Zairon · CC BY-SA 4.0',
  imageSource: 'https://commons.wikimedia.org/wiki/File:Parma_Cattedrale_di_Santa_Maria_Assunta_Battistero_Esterno_1.jpg',
  sources: [
   {label:'Parma Welcome: Piazza Duomo',url:'https://parmawelcome.it/scheda/piazza-duomo/'},
   {label:'Cathedral: art and history',url:'https://www.piazzaduomoparma.com/la-piazza/cattedrale/'},
   {label:'Baptistery: art and history',url:'https://www.piazzaduomoparma.com/la-piazza/battistero/'},
   {label:'Official visiting hours and permits',url:'https://www.piazzaduomoparma.com/orari-e-permessi-di-visita/'}]
 }
};
export const labels = {
 it:{home:'Parco Ducale',nearby:'Esplora i dintorni',intro:'Scopri il luogo',tips:'Consigli di visita',highlights:'Da non perdere',about:'Storia e contesto',facts:'Informazioni di base',address:'Indirizzo',type:'Tipo di visita',typeValue:'Cultura e passeggiata urbana',hours:'Orari',admission:'Ingresso e biglietti',arrival:'Come arrivare dal parco',appeal:'Arte, architettura e cultura',route:'Percorso consigliato',notices:'Prima della visita',photo:'Spunti fotografici',stay:'Dove soggiornare',faq:'Domande frequenti',map:'Mappa e posizione',openMap:'Apri la mappa',sources:'Fonti e aggiornamento',checked:'Contenuti verificati il',editor:'Redazione Parco Ducale',read:'Leggi la guida',theme:'Cambia tema',toc:'In questa guida',privacy:'Privacy',terms:'Termini di servizio',cookies:'Impostazioni cookie'},
 en:{home:'Parco Ducale',nearby:'Explore nearby',intro:'Discover the place',tips:'Visit tips',highlights:'Highlights',about:'History and context',facts:'Basic information',address:'Address',type:'Visit type',typeValue:'Culture and city walking',hours:'Opening hours',admission:'Admission and tickets',arrival:'Getting here from the park',appeal:'Art, architecture and culture',route:'Suggested visit route',notices:'Before you visit',photo:'Photo ideas',stay:'Where to stay',faq:'Frequently asked questions',map:'Map and location',openMap:'Open the map',sources:'Sources and updates',checked:'Content checked on',editor:'Parco Ducale editorial team',read:'Read the guide',theme:'Toggle theme',toc:'In this guide',privacy:'Privacy',terms:'Terms of service',cookies:'Cookie settings'},
 fr:{home:'Parco Ducale',nearby:'Explorer les alentours',intro:'Découvrir le lieu',tips:'Conseils de visite',highlights:'Les incontournables',about:'Histoire et contexte',facts:'Informations pratiques',address:'Adresse',type:'Type de visite',typeValue:'Culture et promenade urbaine',hours:'Horaires',admission:'Entrée et billets',arrival:'Accès depuis le parc',appeal:'Art, architecture et culture',route:'Parcours conseillé',notices:'Avant la visite',photo:'Idées de photos',stay:'Où séjourner',faq:'Questions fréquentes',map:'Carte et emplacement',openMap:'Ouvrir la carte',sources:'Sources et mise à jour',checked:'Contenus vérifiés le',editor:'Rédaction Parco Ducale',read:'Lire le guide',theme:'Changer de thème',toc:'Dans ce guide',privacy:'Confidentialité',terms:'Conditions',cookies:'Paramètres des cookies'},
 'zh-Hant':{home:'Parco Ducale 公園',nearby:'探索周邊景點',intro:'認識這個地方',tips:'遊覽建議',highlights:'主要看點',about:'歷史與背景',facts:'基本資訊',address:'地址',type:'遊覽類型',typeValue:'文化景點與市區散步',hours:'開放時間',admission:'入場與票券',arrival:'從公園怎麼前往',appeal:'藝術、建築與文化',route:'建議遊覽動線',notices:'出發前須知',photo:'攝影角度',stay:'住宿區域建議',faq:'常見問題',map:'地圖與位置',openMap:'開啟地圖',sources:'資料來源與更新',checked:'內容核對日期',editor:'Parco Ducale 編輯',read:'閱讀完整指南',theme:'切換主題',toc:'本頁導覽',privacy:'隱私政策',terms:'服務條款',cookies:'Cookie 設定'}
} as const;

const translatedSources: Record<Exclude<SiteLocale, 'en'>, Record<string, string>> = {
 it: {
  'Complesso della Pilotta: palace and history':'Complesso della Pilotta: palazzo e storia',
  'Opening hours':'Orari di apertura','Tickets':'Biglietti','Directions':'Come arrivare',
  'Ministry of Culture: museum complex':'Ministero della Cultura: complesso museale',
  'Comune di Parma: birthplace museum':'Comune di Parma: museo della casa natale',
  'Museum visitor information':'Museo: informazioni di visita',
  'Parma Welcome: museum':'Parma Welcome: museo',
  'Civic-museum tickets':'Biglietti dei Musei Civici',
  'Parma Welcome: Piazza Duomo':'Parma Welcome: Piazza Duomo',
  'Cathedral: art and history':'Cattedrale: arte e storia',
  'Baptistery: art and history':'Battistero: arte e storia',
  'Official visiting hours and permits':'Orari e permessi di visita ufficiali'
 },
 fr: {
  'Complesso della Pilotta: palace and history':'Complesso della Pilotta : palais et histoire',
  'Opening hours':'Horaires d’ouverture','Tickets':'Billets','Directions':'Accès',
  'Ministry of Culture: museum complex':'Ministère de la Culture : complexe muséal',
  'Comune di Parma: birthplace museum':'Comune di Parma : musée de la maison natale',
  'Museum visitor information':'Musée : informations de visite',
  'Parma Welcome: museum':'Parma Welcome : musée',
  'Civic-museum tickets':'Billets des musées municipaux',
  'Parma Welcome: Piazza Duomo':'Parma Welcome : Piazza Duomo',
  'Cathedral: art and history':'Cathédrale : art et histoire',
  'Baptistery: art and history':'Baptistère : art et histoire',
  'Official visiting hours and permits':'Horaires et permis de visite officiels'
 },
 'zh-Hant': {
  'Complesso della Pilotta: palace and history':'皮洛塔宮：建築與歷史',
  'Opening hours':'官方開放時間','Tickets':'官方票券資訊','Directions':'官方交通指引',
  'Ministry of Culture: museum complex':'義大利文化部：博物館群',
  'Comune di Parma: birthplace museum':'帕爾馬市政府：出生故居博物館',
  'Museum visitor information':'館方參觀資訊',
  'Parma Welcome: museum':'Parma Welcome：博物館介紹',
  'Civic-museum tickets':'市立博物館票券',
  'Parma Welcome: Piazza Duomo':'Parma Welcome：主教座堂廣場',
  'Cathedral: art and history':'主教座堂：藝術與歷史',
  'Baptistery: art and history':'洗禮堂：藝術與歷史',
  'Official visiting hours and permits':'官方參觀時間與入場許可'
 }
};
export function sourceLabel(locale: SiteLocale, label: string) {
 return locale === 'en' ? label : translatedSources[locale][label] ?? label;
}
