import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import '../../globals.css';
import { baseUrl, isValidLocale, locales } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Parco Ducale Parma',
    template: '%s | Parco Ducale',
  },
  description: 'Guida indipendente e multilingue per visitare il Parco Ducale di Parma.',
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
