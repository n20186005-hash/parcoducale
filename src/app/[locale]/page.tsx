import { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

const baseUrl = 'https://www.parcoducale.com';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const path = '';
  const isDefault = locale === 'it';
  
  return {
    title: locale === 'zh-Hant' ? '首頁 | Parco Ducale' : 
           locale === 'fr' ? 'Accueil | Parco Ducale' :
           locale === 'en' ? 'Home | Parco Ducale' : 
           'Home | Parco Ducale',
    alternates: {
      canonical: isDefault ? baseUrl : `${baseUrl}/${locale}`,
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

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const isZh = locale === 'zh-Hant';
  const isEn = locale === 'en';
  const isFr = locale === 'fr';
  const isIt = locale === 'it';

  return (
    <main>
      {/* 首页首屏背景图 */}
      <section 
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery/images (1).jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Parco Ducale</h1>
          <p className="text-xl md:text-2xl">Benvenuti / Welcome / 歡迎 / Bienvenue</p>
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
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Galleria / Gallery</h2>
          <p className="text-secondary mb-2">
            {isZh ? '照片集說明來自 Google Maps，最近更新於 2026 年。' : 
             isFr ? 'Les descriptions de la galerie de photos proviennent de Google Maps, dernière mise à jour en 2026.' : 
             isIt ? 'Le descrizioni della galleria fotografica provengono da Google Maps, ultimo aggiornamento nel 2026.' : 
             'Photo gallery descriptions are from Google Maps, last updated in 2026.'}
          </p>
          <a 
            href="https://maps.app.goo.gl/rgXRvr9ynZBVajFfA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-2"
          >
            {isZh ? '如需查看所有圖片，請點擊此處跳轉連結' : 
             isFr ? 'Pour voir toutes les images, veuillez cliquer ici pour suivre le lien' : 
             isIt ? 'Per visualizzare tutte le immagini, fai clic qui per seguire il link' : 
             'To view all images, please click here to follow the link'} &rarr;
          </a>
        </div>
        
        <Gallery />
      </section>

      {/* Footer Links */}
      <footer className="py-8 border-t border-theme text-center text-sm text-secondary">
        <div className="flex justify-center gap-6 mb-4">
          <Link href={`/${locale}/privacy-policy`} className="hover:text-accent">Privacy Policy</Link>
          <Link href={`/${locale}/terms-of-service`} className="hover:text-accent">Terms of Service</Link>
          <Link href={`/${locale}/cookie-settings`} className="hover:text-accent">Cookie Settings</Link>
        </div>
        <p>&copy; 2026 Parco Ducale.</p>
      </footer>
    </main>
  );
}
