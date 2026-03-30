import { Metadata } from 'next';

const baseUrl = 'https://www.parcoducale.com';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const path = '/cookie-settings';
  const canonicalUrl = locale === 'it' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  
  return {
    title: locale === 'zh-Hant' ? 'Cookie 設定 | Parco Ducale' : 
           locale === 'fr' ? 'Paramètres des cookies | Parco Ducale' :
           locale === 'it' ? 'Impostazioni dei cookie | Parco Ducale' : 
           'Cookie Settings | Parco Ducale',
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
