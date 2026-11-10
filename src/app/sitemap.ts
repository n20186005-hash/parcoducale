export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { guideSlugs } from '@/lib/nearby';
import { getLanguageAlternates, getCanonicalUrl, locales } from '@/lib/site';

const staticPaths = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings', ...guideSlugs.map(slug => `/nearby/${slug}`)];

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
