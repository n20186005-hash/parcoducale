'use client';

import Link from 'next/link';
import { useState } from 'react';

const content = {
  en: {
    backHome: "Back to Home",
    title: "Cookie Settings",
    lastUpdated: "Last updated: March 2026",
    intro: "We use cookies to improve your browsing experience. You can choose to accept or decline certain types of cookies. Please note that disabling some cookies may affect the functionality of the website.",
    strictlyNecessary: {
      title: "Strictly Necessary Cookies",
      alwaysActive: "Always Active",
      desc: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or language."
    },
    analytics: {
      title: "Analytics Cookies",
      desc: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site."
    },
    marketing: {
      title: "Marketing Cookies",
      desc: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites."
    }
  },
  'zh-Hant': {
    backHome: "返回首頁",
    title: "Cookie 設定",
    lastUpdated: "最後更新：2026年3月",
    intro: "我們使用 cookie 來改善您的瀏覽體驗。您可以選擇接受或拒絕某些類型的 cookie。請注意，停用某些 cookie 可能會影響網站的功能。",
    strictlyNecessary: {
      title: "絕對必要的 Cookie",
      alwaysActive: "始終啟用",
      desc: "這些 cookie 是網站運作所必需的，無法在我們的系統中關閉。它們通常僅在您做出相當於請求服務的操作（例如設定您的隱私偏好或語言）時設定。"
    },
    analytics: {
      title: "分析 Cookie",
      desc: "這些 cookie 允許我們計算訪問量和流量來源，以便我們能夠衡量和改善我們網站的效能。它們幫助我們了解哪些頁面最受歡迎，哪些頁面最不受歡迎，並查看訪問者如何在網站上移動。"
    },
    marketing: {
      title: "行銷 Cookie",
      desc: "這些 cookie 可能由我們的廣告合作夥伴透過我們的網站設定。這些公司可能會使用它們來建立您的興趣檔案，並在其他網站上向您展示相關廣告。"
    }
  },
  fr: {
    backHome: "Retour à l'accueil",
    title: "Paramètres des cookies",
    lastUpdated: "Dernière mise à jour : Mars 2026",
    intro: "Nous utilisons des cookies pour améliorer votre expérience de navigation. Vous pouvez choisir d'accepter ou de refuser certains types de cookies. Veuillez noter que la désactivation de certains cookies peut affecter la fonctionnalité du site Web.",
    strictlyNecessary: {
      title: "Cookies strictement nécessaires",
      alwaysActive: "Toujours actifs",
      desc: "Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes. Ils ne sont généralement définis qu'en réponse à des actions effectuées par vous qui équivalent à une demande de services, telles que la définition de vos préférences de confidentialité ou de votre langue."
    },
    analytics: {
      title: "Cookies d'analyse",
      desc: "Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus populaires et comment les visiteurs se déplacent sur le site."
    },
    marketing: {
      title: "Cookies marketing",
      desc: "Ces cookies peuvent être mis en place au sein de notre site Web par nos partenaires publicitaires. Ils peuvent être utilisés par ces sociétés pour établir un profil de vos intérêts et vous proposer des publicités pertinentes sur d'autres sites Web."
    }
  },
  it: {
    backHome: "Torna alla Home",
    title: "Impostazioni dei cookie",
    lastUpdated: "Ultimo aggiornamento: Marzo 2026",
    intro: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione. Puoi scegliere di accettare o rifiutare determinati tipi di cookie. Tieni presente che la disabilitazione di alcuni cookie potrebbe influire sulla funzionalità del sito web.",
    strictlyNecessary: {
      title: "Cookie strettamente necessari",
      alwaysActive: "Sempre attivi",
      desc: "Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni da te effettuate che equivalgono a una richiesta di servizi, come l'impostazione delle preferenze sulla privacy o della lingua."
    },
    analytics: {
      title: "Cookie di analisi",
      desc: "Questi cookie ci consentono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e vedere come i visitatori si muovono nel sito."
    },
    marketing: {
      title: "Cookie di marketing",
      desc: "Questi cookie possono essere impostati tramite il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da tali società per creare un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti."
    }
  }
};

export default function CookieSettings({ params: { locale } }: { params: { locale: string } }) {
  const lang = (locale === 'zh-Hant' || locale === 'fr' || locale === 'it') ? locale : 'en';
  const t = content[lang];

  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href={`/${locale}`} className="inline-flex items-center text-accent hover:underline mb-8 font-medium">
        &larr; {t.backHome}
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-secondary mb-8">{t.lastUpdated}</p>
      
      <p className="text-secondary leading-relaxed mb-8">{t.intro}</p>

      <div className="space-y-6">
        {/* Strictly Necessary */}
        <div className="border border-theme rounded-lg p-6 bg-card">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">{t.strictlyNecessary.title}</h2>
            <span className="text-sm font-medium text-secondary bg-secondary px-3 py-1 rounded-full">
              {t.strictlyNecessary.alwaysActive}
            </span>
          </div>
          <p className="text-secondary text-sm">{t.strictlyNecessary.desc}</p>
        </div>

        {/* Analytics */}
        <div className="border border-theme rounded-lg p-6 bg-card">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">{t.analytics.title}</h2>
            <div 
              className={`toggle-switch ${analyticsEnabled ? 'active' : ''}`}
              onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
              role="switch"
              aria-checked={analyticsEnabled}
              tabIndex={0}
            />
          </div>
          <p className="text-secondary text-sm">{t.analytics.desc}</p>
        </div>

        {/* Marketing */}
        <div className="border border-theme rounded-lg p-6 bg-card">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">{t.marketing.title}</h2>
            <div 
              className={`toggle-switch ${marketingEnabled ? 'active' : ''}`}
              onClick={() => setMarketingEnabled(!marketingEnabled)}
              role="switch"
              aria-checked={marketingEnabled}
              tabIndex={0}
            />
          </div>
          <p className="text-secondary text-sm">{t.marketing.desc}</p>
        </div>
      </div>
    </div>
  );
}
