import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parco Ducale | Guida Indipendente',
  description: 'Guida indipendente per i visitatori del Parco Ducale di Parma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
