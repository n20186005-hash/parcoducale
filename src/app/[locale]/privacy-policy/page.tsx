import Link from 'next/link';
import { Metadata } from 'next';

const baseUrl = 'https://www.parcoducale.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = '/privacy-policy';
  const canonicalUrl = locale === 'it' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  
  return {
    title: locale === 'zh-Hant' ? '隱私政策 | Parco Ducale' : 
           locale === 'fr' ? 'Politique de confidentialité | Parco Ducale' :
           locale === 'it' ? 'Informativa sulla privacy | Parco Ducale' : 
           'Privacy Policy | Parco Ducale',
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
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2026",
    sections: [
      { title: "1. Information Collection", text: "We are committed to protecting your privacy. This site primarily serves as an informational platform and generally does not actively collect personally identifiable information from users. However, through server logs and analytics tools, we may collect non-personally identifiable information such as browser type, access times, and page view records." },
      { title: "2. Use of Cookies", text: "To provide a better user experience and understand how the site is used, we may use cookies. These cookies are used to remember user preferences and analyze site traffic. You can adjust cookie settings in your browser." },
      { title: "3. Third-Party Links", text: "This site may contain links to third-party sites (e.g., Google Maps). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy statements of any site that collects personal information when you leave our site." },
      { title: "4. Contact Us", text: "If you have any questions or concerns about this privacy policy, please contact us." }
    ]
  },
  'zh-Hant': {
    backHome: "返回首頁",
    title: "隱私政策",
    lastUpdated: "最後更新：2026年3月",
    sections: [
      { title: "1. 資訊收集", text: "我們致力於保護您的隱私。本網站主要作為資訊平台，通常不會主動收集使用者的個人識別資訊。但是，透過伺服器日誌和分析工具，我們可能會收集非個人識別資訊，例如瀏覽器類型、造訪時間和頁面瀏覽記錄。" },
      { title: "2. Cookie 的使用", text: "為了提供更好的使用者體驗並了解網站的使用情況，我們可能會使用 cookie。這些 cookie 用於記住使用者偏好並分析網站流量。您可以在瀏覽器中調整 cookie 設定。" },
      { title: "3. 第三方連結", text: "本網站可能包含指向第三方網站（例如 Google 地圖）的連結。我們對這些外部網站的隱私慣例不承擔任何責任。當您離開我們的網站時，我們鼓勵您閱讀任何收集個人資訊的網站的隱私聲明。" },
      { title: "4. 聯絡我們", text: "如果您對本隱私政策有任何疑問或疑慮，請聯絡我們。" }
    ]
  },
  fr: {
    backHome: "Retour à l'accueil",
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : Mars 2026",
    sections: [
      { title: "1. Collecte d'informations", text: "Nous nous engageons à protéger votre vie privée. Ce site sert principalement de plateforme d'information et ne collecte généralement pas activement d'informations d'identification personnelle des utilisateurs. Cependant, par le biais des journaux de serveur et des outils d'analyse, nous pouvons collecter des informations non personnellement identifiables telles que le type de navigateur, les temps d'accès et les enregistrements de pages vues." },
      { title: "2. Utilisation des cookies", text: "Pour offrir une meilleure expérience utilisateur et comprendre comment le site est utilisé, nous pouvons utiliser des cookies. Ces cookies sont utilisés pour se souvenir des préférences des utilisateurs et analyser le trafic du site. Vous pouvez ajuster les paramètres des cookies dans votre navigateur." },
      { title: "3. Liens tiers", text: "Ce site peut contenir des liens vers des sites tiers (par exemple, Google Maps). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à lire les déclarations de confidentialité de chaque site qui collecte des informations personnelles lorsque vous quittez notre site." },
      { title: "4. Nous contacter", text: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, veuillez nous contacter." }
    ]
  },
  it: {
    backHome: "Torna alla Home",
    title: "Informativa sulla privacy",
    lastUpdated: "Ultimo aggiornamento: Marzo 2026",
    sections: [
      { title: "1. Raccolta di informazioni", text: "Ci impegniamo a proteggere la tua privacy. Questo sito funge principalmente da piattaforma informativa e generalmente non raccoglie attivamente informazioni di identificazione personale dagli utenti. Tuttavia, attraverso i log del server e gli strumenti di analisi, potremmo raccogliere informazioni non di identificazione personale come il tipo di browser, i tempi di accesso e le registrazioni delle visualizzazioni di pagina." },
      { title: "2. Uso dei cookie", text: "Per fornire una migliore esperienza utente e capire come viene utilizzato il sito, potremmo utilizzare i cookie. Questi cookie vengono utilizzati per ricordare le preferenze dell'utente e analizzare il traffico del sito. Puoi regolare le impostazioni dei cookie nel tuo browser." },
      { title: "3. Link di terze parti", text: "Questo sito potrebbe contenere link a siti di terze parti (ad es. Google Maps). Non siamo responsabili per le pratiche sulla privacy di questi siti esterni. Ti invitiamo a leggere le dichiarazioni sulla privacy di qualsiasi sito che raccoglie informazioni personali quando lasci il nostro sito." },
      { title: "4. Contattaci", text: "Se hai domande o dubbi su questa informativa sulla privacy, ti preghiamo di contattarci." }
    ]
  }
};

export default function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
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
