import { Metadata } from 'next';
import { getCanonicalUrl, getLanguageAlternates } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = '/cookie-settings';
  
  return {
    title: locale === 'zh-Hant' ? 'Cookie 設定' :
           locale === 'fr' ? 'Paramètres des cookies' :
           locale === 'it' ? 'Impostazioni dei cookie' :
           'Cookie Settings',
    alternates: {
      canonical: getCanonicalUrl(locale, path),
      languages: getLanguageAlternates(path),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
