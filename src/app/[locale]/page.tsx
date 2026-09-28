import { Metadata } from 'next';
import Gallery from '../../components/Gallery';
import ThemeToggle from '../../components/ThemeToggle';
import Link from 'next/link';

const baseUrl = 'https://www.parcoducale.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = '';
  const canonicalUrl = locale === 'it' ? baseUrl : `${baseUrl}/${locale}`;
  
  return {
    title: locale === 'zh-Hant' ? '首頁 | Parco Ducale' : 
           locale === 'fr' ? 'Accueil | Parco Ducale' :
           locale === 'en' ? 'Home | Parco Ducale' : 
           'Home | Parco Ducale',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'zh-Hant': `${baseUrl}/zh-Hant`,
        'fr': `${baseUrl}/fr`,
        'it': `${baseUrl}`,
        'x-default': `${baseUrl}`,
      },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh-Hant';
  const isEn = locale === 'en';
  const isFr = locale === 'fr';
  const isIt = locale === 'it';

  // 多语言文本配置
  const t = {
    heroTitle: 'Parco Ducale',
    heroSubtitle: isZh ? '綠樹成蔭的林蔭大道、鴨塘和可追溯至 16 世紀的雕塑，構成了一片綠地。' : 
                  isFr ? 'Des avenues bordées d\'arbres, une mare aux canards et des sculptures datant du 16ème siècle composent cet espace vert.' :
                  isIt ? 'Viali alberati, un laghetto con anatre e sculture del XVI secolo compongono questo spazio verde.' :
                  'Tree-lined avenues, a duck pond, and sculptures dating back to the 16th century make up this green space.',
    rating: '4.4/5 (5,219 avis)',
    openHours: isZh ? '開放時間: 7AM–8PM' : isFr ? 'Ouvert: 7AM–8PM' : isIt ? 'Aperto: 7AM–8PM' : 'Open: 7AM–8PM',
    googleMapsLink: 'https://maps.app.goo.gl/RAE49mVnrSMnbSWC8',
    
    // 设施亮点
    amenitiesTitle: isZh ? '設施與亮點' : isFr ? 'Équipements et Points Forts' : isIt ? 'Servizi e Punti Salienti' : 'Amenities & Highlights',
    accessibility: isZh ? '♿ 無障礙設施：輪椅無障礙入口、輪椅無障礙停車場' : isFr ? '♿ Accessibilité : Entrée et parking accessibles aux fauteuils roulants' : isIt ? '♿ Accessibilità: Ingresso e parcheggio accessibili in sedia a rotelle' : '♿ Accessibility: Wheelchair accessible entrance & parking',
    activities: isZh ? '🧺 精彩活動：野餐、自行車道' : isFr ? '🧺 Activités : Pique-nique, pistes cyclables' : isIt ? '🧺 Attività: Picnic, piste ciclabili' : '🧺 Activities: Picnics, bike paths',
    facilities: isZh ? '🚻 便利設施：公共洗手間' : isFr ? '🚻 Installations : Toilettes publiques' : isIt ? '🚻 Strutture: Bagni pubblici' : '🚻 Facilities: Public restrooms',
    family: isZh ? '👨‍👩‍👧‍👦 家庭友好：適合孩子、設有操場' : isFr ? '👨‍👩‍👧‍👦 Famille : Adapté aux enfants, aire de jeux' : isIt ? '👨‍👩‍👧‍👦 Famiglia: Adatto ai bambini, parco giochi' : '👨‍👩‍👧‍👦 Family-friendly: Good for kids, playground',
    pets: isZh ? '🐕 寵物：狗公園、允許攜帶犬隻' : isFr ? '🐕 Animaux : Parc à chiens, chiens autorisés' : isIt ? '🐕 Animali: Parco per cani, cani ammessi' : '🐕 Pets: Dog park, dogs allowed',
    
    // 开放时间
    hoursTitle: isZh ? '開放時間' : isFr ? 'Heures d\'ouverture' : isIt ? 'Orari di apertura' : 'Opening Hours',
    hoursInfo: isZh ? '週一至週日：7:00 AM – 8:00 PM（歐洲的公園往往有柵欄和嚴格的開關門時間，請注意安排行程。）' : 
               isFr ? 'Lundi - Dimanche : 7h00 – 20h00 (Les parcs européens ont souvent des grilles et des heures de fermeture strictes.)' : 
               isIt ? 'Lunedì - Domenica: 7:00 – 20:00 (I parchi europei hanno spesso cancelli e orari di chiusura rigidi.)' : 
               'Monday - Sunday: 7:00 AM – 8:00 PM (European parks often have gates and strict closing times.)',

    // 游客评价
    reviewsTitle: isZh ? '真實遊客評價' : isFr ? 'Avis de vrais visiteurs' : isIt ? 'Recensioni di veri visitatori' : 'Real Visitor Reviews',
    reviewsDisclaimer: isZh ? '評分和評價來自 Google 地圖（最後更新：2026年）。我們僅展示經過驗證的精選高分評價。如需查看所有完整和最新評價，請點擊下方連結。' :
                       isFr ? 'Évaluations et avis provenant de Google Maps (dernière mise à jour : 2026). Nous ne montrons qu\'une sélection d\'avis hautement notés vérifiés. Pour voir tous les avis complets et les plus récents, cliquez sur le lien ci-dessous.' :
                       isIt ? 'Valutazioni e recensioni da Google Maps (ultimo aggiornamento: 2026). Mostriamo solo una selezione di recensioni verificate con punteggi alti. Per vedere tutte le recensioni complete e più recenti, clicca sul link sottostante.' :
                       'Ratings and reviews from Google Maps (last updated: 2026). We only show a selection of verified high-rated reviews. To view all complete and latest reviews, please click the link below.',
    
    // 地图与位置
    mapTitle: isZh ? '地圖與位置' : isFr ? 'Carte et Emplacement' : isIt ? 'Mappa e Posizione' : 'Map & Location',
    address: 'Largo Luca Ganzi, 3, 43126 Parma PR, Italy (R849+FW Parma, Province of Parma, Italy)',
    openMap: isZh ? '在 Google Maps 中打開' : isFr ? 'Ouvrir Google Maps' : isIt ? 'Apri in Google Maps' : 'Open in Google Maps',

    // Footer
    disclaimer: isZh ? '本站為獨立的第三方旅遊科普資訊站，旨在提供客觀的廣場周邊遊覽建議。信息提取自公共資源（旅遊局和維基百科），並結合了谷歌地圖的基本信息。' :
                isFr ? 'Ce site est un portail d\'information touristique tiers indépendant, visant à fournir des suggestions de visites objectives. Les informations sont extraites de ressources publiques (offices de tourisme et Wikipedia), combinées avec les informations de base de Google Maps.' :
                isIt ? 'Questo sito è un portale di informazione turistica di terze parti indipendente, che mira a fornire suggerimenti oggettivi per i tour. Le informazioni sono estratte da risorse pubbliche (uffici turistici e Wikipedia), combinate con le informazioni di base di Google Maps.' :
                'This site is an independent third-party tourism information portal, aiming to provide objective tour suggestions. Information is extracted from public resources (tourist boards and Wikipedia), combined with basic Google Maps information.',
    support: isZh ? '如需本網站的技術支持，請聯繫：claritleonelmnicol@gmail.com' :
             isFr ? 'Pour le support technique de ce site, veuillez contacter : claritleonelmnicol@gmail.com' :
             isIt ? 'Per supporto tecnico su questo sito web, contattare: claritleonelmnicol@gmail.com' :
             'For technical support of this website, please contact: claritleonelmnicol@gmail.com',
    copyright: `© 2026 Parco Ducale · ${isZh ? '版權所有' : isFr ? 'Tous droits réservés' : isIt ? 'Tutti i diritti riservati' : 'All rights reserved'}.`
  };

  const reviews = [
    { name: "Marco Rossi", date: "2026-02", rating: 5, text: isZh ? "非常美麗的公園，適合散步和放鬆。" : "Parc très beau, parfait pour se promener et se détendre." },
    { name: "Sophie Laurent", date: "2026-01", rating: 5, text: isZh ? "雕塑和噴泉令人驚嘆，強烈推薦！" : "Les sculptures et les fontaines sont magnifiques, je recommande vivement !" },
    { name: "Giulia Bianchi", date: "2025-11", rating: 5, text: isZh ? "帶孩子來這裡玩得很開心，有很好的遊樂設施。" : "Super endroit pour les enfants, avec de bonnes aires de jeux." },
    { name: "Thomas Müller", date: "2025-10", rating: 5, text: isZh ? "寧靜的綠洲，是在城市中休息的好地方。" : "Une oasis de tranquillité, un endroit idéal pour se reposer en ville." },
    { name: "Elena Ferrari", date: "2025-09", rating: 4, text: isZh ? "風景優美，但週末人比較多。" : "Beau paysage, mais un peu bondé le week-end." },
    { name: "David Smith", date: "2025-08", rating: 5, text: isZh ? "非常適合遛狗，狗狗玩得很開心。" : "Parfait pour promener son chien, il s'est bien amusé." },
    { name: "Laura Conti", date: "2025-07", rating: 5, text: isZh ? "歷史悠久的建築和自然景觀的完美結合。" : "Un mélange parfait de bâtiments historiques et de paysages naturels." },
    { name: "Pierre Dubois", date: "2025-06", rating: 5, text: isZh ? "乾淨整潔，設施齊全，是野餐的好選擇。" : "Propre et bien équipé, un excellent choix pour un pique-nique." }
  ];

  return (
    <main>
      {/* 语言切换 Header */}
      <header className="absolute top-0 w-full z-50 p-6 flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wider shadow-sm">
          PARCO DUCALE
        </div>
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <div className="bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 flex gap-4 backdrop-blur-md border border-white/20 transition-all text-sm font-medium">
            <Link href="/it" className={`hover:text-accent transition-colors ${isIt ? 'text-accent' : ''}`}>IT</Link>
            <Link href="/en" className={`hover:text-accent transition-colors ${isEn ? 'text-accent' : ''}`}>EN</Link>
            <Link href="/fr" className={`hover:text-accent transition-colors ${isFr ? 'text-accent' : ''}`}>FR</Link>
            <Link href="/zh-Hant" className={`hover:text-accent transition-colors ${isZh ? 'text-accent' : ''}`}>ZH</Link>
          </div>
        </div>
      </header>

      {/* 首页首屏背景图 (Hero) */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery/images (1).jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-bg"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl pt-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed font-light drop-shadow-md opacity-90">{t.heroSubtitle}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base mb-10 font-medium">
            <span className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
              <span className="text-yellow-400">★</span> {t.rating}
            </span>
            <span className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 transition-all">
              🕒 {t.openHours}
            </span>
            <a 
              href={t.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg font-bold"
            >
              📍 Google Maps &rarr;
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors">Farnese Ducal Garden</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors">16th-century Renaissance Park</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors">Oasis in Parma</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors">Tree-lined Avenues</span>
          </div>
        </div>
        
        <div className="absolute bottom-8 animate-bounce text-white/70">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 简介与设施区块 */}
      <section className="py-20 px-4 max-w-5xl mx-auto bg-primary">
        <div className="grid md:grid-cols-2 gap-16">
          {/* 左侧：设施亮点 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 relative inline-block">
                {t.amenitiesTitle}
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-accent rounded-full"></div>
              </h2>
            </div>
            <ul className="space-y-5 text-secondary">
              <li className="flex items-start bg-bg-secondary p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-theme/50">
                <span className="text-lg leading-relaxed">{t.accessibility}</span>
              </li>
              <li className="flex items-start bg-bg-secondary p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-theme/50">
                <span className="text-lg leading-relaxed">{t.activities}</span>
              </li>
              <li className="flex items-start bg-bg-secondary p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-theme/50">
                <span className="text-lg leading-relaxed">{t.facilities}</span>
              </li>
              <li className="flex items-start bg-bg-secondary p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-theme/50">
                <span className="text-lg leading-relaxed">{t.family}</span>
              </li>
              <li className="flex items-start bg-bg-secondary p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-theme/50">
                <span className="text-lg leading-relaxed">{t.pets}</span>
              </li>
            </ul>
          </div>
          
          {/* 右侧：开放时间 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 relative inline-block">
                {t.hoursTitle}
                <div className="absolute -bottom-3 left-0 w-12 h-1 bg-accent rounded-full"></div>
              </h2>
            </div>
            <div className="bg-bg-secondary p-8 rounded-2xl shadow-md border border-theme">
              <p className="text-secondary leading-relaxed font-medium mb-6 text-lg">
                {t.hoursInfo}
              </p>
              <ul className="space-y-4 text-base text-secondary">
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Monday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Tuesday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Wednesday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Thursday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Friday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-theme/50 pb-3">
                  <span className="font-medium">Saturday</span>
                  <span className="bg-black/5 dark:bg-white/10 px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium text-accent">Sunday</span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-md text-sm font-semibold">7AM–8PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 景点科普介绍 */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-primary">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isZh ? '關於帕爾馬公爵公園' : isFr ? 'À propos du Parco Ducale' : isIt ? 'Informazioni sul Parco Ducale' : 'About Parco Ducale'}
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="tag">Farnese Ducal Garden</span>
            <span className="tag">16th-century Renaissance Park</span>
            <span className="tag">Oasis in Parma / Urban Green Lung</span>
            <span className="tag">Tree-lined Avenues & Classical Statues</span>
            <span className="tag">Artificial Lake & Fountains</span>
            <span className="tag">Vignola Design / Boudard Sculptures</span>
            <span className="tag">Tranquil Retreat / Perfect for Strolls & Picnics</span>
            <span className="tag">Blend of History and Nature</span>
          </div>
        </div>

        <div className="space-y-6 text-lg text-secondary leading-relaxed">
          {isZh ? (
            <>
              <p>
                <strong>Parco Ducale（帕爾馬公爵公園，也稱 Ducal Park 或公爵花園）</strong>是義大利北部城市帕爾馬（Parma）市中心的一座歷史悠久的公共公園，位於帕爾馬河（Parma River）西岸的 Oltretorrente 街區，緊鄰歷史中心，是當地人休閒和遊客放鬆的<strong className="text-fg">城市綠肺（Urban Green Lung）</strong>與綠洲。
              </p>
              <p>
                從貴族私園到市民綠肺，這座<strong className="text-fg">16世紀文藝復興園林（16th-century Renaissance Park）</strong>始建於16世紀中葉（約1561年）。它最初是<strong className="text-fg">法爾內塞公爵花園（Farnese Ducal Garden）</strong>，作為家族的私人狩獵保留地，由著名建築師 Jacopo Barozzi（<strong>Vignola 設計</strong>）精心打造。後來在18世紀擴展，並融入了法國式園林風格。公園面積約21公頃，佔據了帕爾馬歷史中心相當大一部分。
              </p>
              <h3 className="text-2xl font-semibold text-fg mt-8 mb-4">公園主要特色與亮點</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Ducal Palace（公爵宮）：</strong>法爾內塞家族改造的宏偉建築（現為警察局，外部可觀賞）。</li>
                <li><strong>Palazzetto Eucherio Sanvitale：</strong>建於1520年的文藝復興風格小宮殿，內部珍藏著帕爾米賈尼諾（Parmigianino）的壁畫等藝術品。</li>
                <li><strong>人工湖與噴泉（Artificial Lake & Fountains）：</strong>帶有小島的人工湖，以及著名的 Fontana del Trianon 和帕爾馬河噴泉。</li>
                <li><strong>林蔭大道與古典雕像（Tree-lined Avenues & Classical Statues）：</strong>漫步於長長的林蔭大道，欣賞由法國雕塑家 Jean-Baptiste Boudard 創作的大理石紀念花瓶與雕塑（<strong>Boudard Sculptures</strong>）。</li>
                <li><strong>其他特色：</strong>Arcadia 樹林遺跡（18世紀阿卡迪亞學院聚會地）、古樹、寬闊草坪和碎石小徑。</li>
              </ul>
              <p className="mt-6">
                如今，Parco Ducale 完美展現了<strong className="text-fg">歷史與自然融合（Blend of History and Nature）</strong>的魅力。它不僅代表了帕爾馬作為「美食之都與音樂之城」的優雅一面，更是一個<strong className="text-fg">寧靜散步勝地（Tranquil Retreat / Perfect for Strolls & Picnics）</strong>。遊客常在這裡散步、騎自行車、野餐、餵鴨子或烏龜，享受樹蔭和清新空氣。公園免費開放，是逃離城市喧囂的理想去處，非常適合家庭和情侶遊覽。
              </p>
            </>
          ) : isIt ? (
            <>
              <p>
                Il <strong>Parco Ducale</strong> (noto anche come Giardino Ducale) è uno storico parco pubblico situato nel cuore di Parma, nel quartiere Oltretorrente sulla riva ovest del torrente Parma. A due passi dal centro storico, rappresenta un'<strong>Oasi a Parma / Polmone verde urbano (Oasis in Parma / Urban Green Lung)</strong> per i residenti e un luogo di relax per i turisti.
              </p>
              <p>
                Da riserva di caccia privata a parco cittadino, questo <strong>Parco Rinascimentale del XVI secolo (16th-century Renaissance Park)</strong> fu fondato intorno al 1561. Inizialmente noto come <strong>Giardino Ducale Farnesiano (Farnese Ducal Garden)</strong>, fu progettato dal celebre architetto Jacopo Barozzi (<strong>Vignola Design</strong>). Successivamente ampliato nel XVIII secolo con influenze dei giardini alla francese, il parco si estende oggi per circa 21 ettari.
              </p>
              <h3 className="text-2xl font-semibold text-fg mt-8 mb-4">Punti di Interesse</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Palazzo Ducale:</strong> Il magnifico edificio ristrutturato dalla famiglia Farnese (oggi sede del Comando Provinciale dei Carabinieri, ammirabile dall'esterno).</li>
                <li><strong>Palazzetto Eucherio Sanvitale:</strong> Un piccolo palazzo in stile rinascimentale (costruito nel 1520) che ospita affreschi del Parmigianino.</li>
                <li><strong>Lago Artificiale e Fontane (Artificial Lake & Fountains):</strong> Un lago con un'isoletta, insieme alla famosa Fontana del Trianon.</li>
                <li><strong>Viali Alberati e Statue Classiche (Tree-lined Avenues & Classical Statues):</strong> Lunghe passeggiate adornate da vasi monumentali in marmo e opere dello scultore francese Jean-Baptiste Boudard (<strong>Boudard Sculptures</strong>).</li>
              </ul>
              <p className="mt-6">
                Oggi, il parco offre una perfetta <strong>Miscelea di Storia e Natura (Blend of History and Nature)</strong>, rendendolo un <strong>Rifugio Tranquillo / Ideale per Passeggiate e Picnic (Tranquil Retreat / Perfect for Strolls & Picnics)</strong>. È il luogo ideale per sfuggire al trambusto della città, ad ingresso gratuito e perfetto per famiglie e coppie.
              </p>
            </>
          ) : isFr ? (
            <>
              <p>
                Le <strong>Parco Ducale</strong> (Parc Ducal ou Jardin Ducal) est un parc public historique situé au cœur de Parme, dans le quartier de l'Oltretorrente sur la rive ouest de la rivière Parme. À proximité du centre historique, il sert de véritable <strong>Oasis à Parme / Poumon vert urbain (Oasis in Parma / Urban Green Lung)</strong>.
              </p>
              <p>
                De réserve de chasse privée à poumon vert de la ville, ce <strong>Parc Renaissance du XVIe siècle (16th-century Renaissance Park)</strong> a été fondé vers 1561. Initialement connu sous le nom de <strong>Jardin Ducal Farnèse (Farnese Ducal Garden)</strong>, il a été conçu par le célèbre architecte Jacopo Barozzi (<strong>Vignola Design</strong>). Agrandie au XVIIIe siècle avec des influences de jardins à la française, la zone couvre aujourd'hui environ 21 hectares.
              </p>
              <h3 className="text-2xl font-semibold text-fg mt-8 mb-4">Points Forts du Parc</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Palais Ducal :</strong> Le magnifique bâtiment transformé par la famille Farnèse.</li>
                <li><strong>Palazzetto Eucherio Sanvitale :</strong> Un petit palais de style Renaissance (construit en 1520) abritant des fresques de Parmigianino.</li>
                <li><strong>Lac Artificiel et Fontaines (Artificial Lake & Fountains) :</strong> Un lac avec un îlot et la célèbre fontaine du Trianon.</li>
                <li><strong>Avenues Bordées d'Arbres et Statues Classiques (Tree-lined Avenues & Classical Statues) :</strong> Ornées de sculptures en marbre de l'artiste français Jean-Baptiste Boudard (<strong>Boudard Sculptures</strong>).</li>
              </ul>
              <p className="mt-6">
                Aujourd'hui, le parc offre un parfait <strong>Mélange d'Histoire et de Nature (Blend of History and Nature)</strong>, ce qui en fait une <strong>Retraite Tranquille / Parfaite pour les Promenades et les Pique-niques (Tranquil Retreat / Perfect for Strolls & Picnics)</strong> pour tous les visiteurs.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Parco Ducale (Ducal Park or Ducal Garden)</strong> is a historic public park located in the heart of Parma, in the Oltretorrente district on the west bank of the Parma River. Adjacent to the historical center, it serves as an <strong>Oasis in Parma / Urban Green Lung</strong> for locals and a relaxing spot for tourists.
              </p>
              <p>
                From a noble private estate to a public green space, this <strong>16th-century Renaissance Park</strong> was established around 1561. Originally the <strong>Farnese Ducal Garden</strong>, it served as a private hunting reserve for the Farnese family, designed by the renowned architect Jacopo Barozzi (<strong>Vignola Design</strong>). Later expanded in the 18th century with French garden influences, the park spans about 21 hectares.
              </p>
              <h3 className="text-2xl font-semibold text-fg mt-8 mb-4">Park Features & Highlights</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Ducal Palace:</strong> The magnificent building remodeled by the Farnese family (now a police headquarters, viewable from the outside).</li>
                <li><strong>Palazzetto Eucherio Sanvitale:</strong> A Renaissance-style small palace (built in 1520) featuring frescoes by Parmigianino.</li>
                <li><strong>Artificial Lake & Fountains:</strong> Featuring a small island, the famous Fontana del Trianon, and the Parma River fountain.</li>
                <li><strong>Tree-lined Avenues & Classical Statues:</strong> Stroll along the long avenues adorned with monumental marble vases and sculptures by French sculptor Jean-Baptiste Boudard (<strong>Boudard Sculptures</strong>).</li>
                <li><strong>Other Features:</strong> Remains of the Arcadia woods (an 18th-century meeting place for the Arcadia Academy), ancient trees, broad lawns, and gravel paths.</li>
              </ul>
              <p className="mt-6">
                Today, Parco Ducale showcases a perfect <strong>Blend of History and Nature</strong>. It reflects the elegant side of Parma as a "City of Gastronomy and Music" and serves as a <strong>Tranquil Retreat / Perfect for Strolls & Picnics</strong>. Visitors often come here to walk, cycle, picnic, feed ducks and turtles, or simply relax. The park is free to enter and ideal for families and couples looking to escape the city bustle.
              </p>
            </>
          )}
        </div>
      </section>

      {/* 攝影相簿 */}
      <section className="py-20 px-4 max-w-6xl mx-auto border-b border-theme">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Galleria / Gallery
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full"></div>
          </h2>
          <p className="text-secondary mb-4 text-lg">
            {isZh ? '照片集說明來自 Google Maps，最近更新於 2026 年。' : 
             isFr ? 'Les descriptions de la galerie de photos proviennent de Google Maps, dernière mise à jour en 2026.' : 
             isIt ? 'Le descrizioni della galleria fotografica provengono da Google Maps, ultimo aggiornamento nel 2026.' : 
             'Photo gallery descriptions are from Google Maps, last updated in 2026.'}
          </p>
          <a 
            href="https://maps.app.goo.gl/rgXRvr9ynZBVajFfA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-2 font-medium text-lg"
          >
            {isZh ? '如需查看所有圖片，請點擊箭頭跳轉連結' : 
             isFr ? 'Pour voir toutes les images, veuillez cliquer sur la flèche pour suivre le lien' : 
             isIt ? 'Per visualizzare tutte le immagini, fai clic sulla freccia per seguire il link' : 
             'To view all images, please click the arrow to follow the link'} &rarr;
          </a>
        </div>
        
        <Gallery />
      </section>

      {/* 游客评价区块 */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-primary border-b border-theme">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t.reviewsTitle}</h2>
          <p className="text-secondary max-w-3xl mx-auto text-sm italic">
            {t.reviewsDisclaimer}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">{review.name}</span>
                <span className="text-xs text-secondary">{review.date}</span>
              </div>
              <div className="stars mb-3">
                {'★'.repeat(review.rating)}
              </div>
              <p className="text-sm text-secondary leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={t.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-bg-secondary hover:bg-accent hover:text-white transition-colors text-xl border border-theme"
            title="Voir plus d'avis sur Google Maps"
          >
            &rarr;
          </a>
        </div>
      </section>

      {/* 地图与位置区块 */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-b border-theme">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{t.mapTitle}</h2>
          <p className="text-secondary mb-4">{t.address}</p>
          <a 
            href={t.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-2 font-medium"
          >
            {t.openMap} &rarr;
          </a>
        </div>
        
        <div className="map-container shadow-lg rounded-xl overflow-hidden border border-theme">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.41112994661484!2d10.320092800620055!3d44.80622571704381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47806af4045a1105%3A0xd8bea4f2d738fad0!2sParco%20Ducale!5e0!3m2!1sen!2sus!4v1774520155700!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location of Parco Ducale"
          ></iframe>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="py-12 border-t border-theme text-center text-sm text-secondary bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-6 leading-relaxed italic">{t.disclaimer}</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 font-medium">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href={`/${locale}/terms-of-service`} className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href={`/${locale}/cookie-settings`} className="hover:text-accent transition-colors">Cookie Settings</Link>
          </div>
          
          <p className="mb-2">{t.support}</p>
          <p className="font-semibold">{t.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
