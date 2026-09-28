import Link from 'next/link';
import { Metadata } from 'next';

const baseUrl = 'https://www.parcoducale.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = '/terms-of-service';
  const canonicalUrl = locale === 'it' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  
  return {
    title: locale === 'zh-Hant' ? '服務條款 | Parco Ducale' : 
           locale === 'fr' ? 'Conditions d\'utilisation | Parco Ducale' :
           locale === 'it' ? 'Termini di servizio | Parco Ducale' : 
           'Terms of Service | Parco Ducale',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en${path}`,
        'zh-Hant': `${baseUrl}/zh-Hant${path}`,
        'fr': `${baseUrl}/fr${path}`,
        'it': `${baseUrl}${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
  };
}

const content = {
  en: {
    backHome: "Back to Home",
    title: "Terms of Service",
    lastUpdated: "Last updated: March 2026",
    sections: [
      { title: "1. Acceptance of Terms", text: "By accessing and using this website, you accept and agree to be bound by these terms of service. If you do not agree to any part of these terms, please do not use our website." },
      { title: "2. Use of Content", text: "The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information." },
      { title: "3. Intellectual Property", text: "Unless otherwise noted, all content on this site (including text, images, logos) is protected by copyright. No reproduction, distribution, or commercial use is permitted without explicit authorization. Photo credits may include royalty-free resources from platforms like Unsplash or contributors on Google Maps." },
      { title: "4. Limitation of Liability", text: "To the fullest extent permitted by law, this site and its owners shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this site. When visiting natural sites, please always prioritize safety." }
    ]
  },
  'zh-Hant': {
    backHome: "返回首頁",
    title: "服務條款",
    lastUpdated: "最後更新：2026年3月",
    sections: [
      { title: "1. 接受條款", text: "透過存取和使用本網站，您接受並同意受這些服務條款的約束。如果您不同意這些條款的任何部分，請不要使用我們的網站。" },
      { title: "2. 內容的使用", text: "本網站提供的資訊僅供一般參考之用。雖然我們努力保持資訊的準確性和最新性，但我們對資訊的完整性、準確性、可靠性或適用性不作任何形式的明示或暗示的陳述或保證。" },
      { title: "3. 智慧財產權", text: "除非另有說明，本網站上的所有內容（包括文字、圖片、標誌）均受版權保護。未經明確授權，不得進行複製、分發或商業使用。照片來源可能包括來自 Unsplash 等平台的免版稅資源或 Google 地圖上的貢獻者。" },
      { title: "4. 責任限制", text: "在法律允許的最大範圍內，本網站及其所有者對因使用或無法使用本網站而引起的任何直接、間接、附帶或後果性損害不承擔任何責任。在參觀自然景點時，請始終將安全放在首位。" }
    ]
  },
  fr: {
    backHome: "Retour à l'accueil",
    title: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : Mars 2026",
    sections: [
      { title: "1. Acceptation des conditions", text: "En accédant et en utilisant ce site Web, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas une partie quelconque de ces conditions, veuillez ne pas utiliser notre site." },
      { title: "2. Utilisation du contenu", text: "Les informations fournies sur ce site Web sont à des fins d'information générale uniquement. Bien que nous nous efforcions de maintenir les informations exactes et à jour, nous ne faisons aucune représentation ou garantie d'aucune sorte, expresse ou implicite, quant à l'exhaustivité, l'exactitude, la fiabilité ou l'adéquation des informations." },
      { title: "3. Propriété intellectuelle", text: "Sauf indication contraire, tout le contenu de ce site (y compris les textes, images, logos) est protégé par le droit d'auteur. Aucune reproduction, distribution ou utilisation commerciale n'est autorisée sans autorisation explicite. Les crédits photos peuvent inclure des ressources libres de droits provenant de plateformes telles que Unsplash ou de contributeurs sur Google Maps." },
      { title: "4. Limitation de responsabilité", text: "Dans toute la mesure permise par la loi, ce site et ses propriétaires ne seront pas responsables des dommages directs, indirects, accessoires ou consécutifs découlant de l'utilisation ou de l'incapacité d'utiliser ce site. Lors de la visite de sites naturels, veuillez toujours donner la priorité à la sécurité." }
    ]
  },
  it: {
    backHome: "Torna alla Home",
    title: "Termini di servizio",
    lastUpdated: "Ultimo aggiornamento: Marzo 2026",
    sections: [
      { title: "1. Accettazione dei termini", text: "Accedendo e utilizzando questo sito web, accetti e accetti di essere vincolato da questi termini di servizio. Se non accetti alcuna parte di questi termini, ti preghiamo di non utilizzare il nostro sito web." },
      { title: "2. Uso del contenuto", text: "Le informazioni fornite su questo sito web sono solo a scopo informativo generale. Sebbene ci sforziamo di mantenere le informazioni accurate e aggiornate, non rilasciamo alcuna dichiarazione o garanzia di alcun tipo, esplicita o implicita, in merito alla completezza, accuratezza, affidabilità o idoneità delle informazioni." },
      { title: "3. Proprietà intellettuale", text: "Salvo diversa indicazione, tutto il contenuto di questo sito (inclusi testi, immagini, loghi) è protetto da copyright. Nessuna riproduzione, distribuzione o uso commerciale è consentito senza esplicita autorizzazione. I crediti fotografici possono includere risorse esenti da royalty da piattaforme come Unsplash o contributori su Google Maps." },
      { title: "4. Limitazione di responsabilità", text: "Nella misura massima consentita dalla legge, questo sito e i suoi proprietari non saranno responsabili per eventuali danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare questo sito. Quando visiti siti naturali, ti preghiamo di dare sempre la priorità alla sicurezza." }
    ]
  }
};

export default async function TermsOfService({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = (locale === 'zh-Hant' || locale === 'fr' || locale === 'it') ? locale : 'en';
  const t = content[lang];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href={`/${locale}`} className="inline-flex items-center text-accent hover:underline mb-8 font-medium">
        &larr; {t.backHome}
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-secondary mb-8">{t.lastUpdated}</p>
      
      <div className="space-y-8">
        {t.sections.map((section, idx) => (
          <section key={idx} className="p-0 m-0">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="text-secondary leading-relaxed">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
