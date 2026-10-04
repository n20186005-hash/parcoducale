import { MetadataRoute } from 'next';
import { getLanguageAlternates, getCanonicalUrl, locales } from '@/lib/site';

const staticPaths = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: getCanonicalUrl(locale, path),
      lastModified,
      alternates: {
        languages: getLanguageAlternates(path),
      },
    })),
  );
}
