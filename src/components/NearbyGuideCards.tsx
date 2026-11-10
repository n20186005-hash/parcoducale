import Link from 'next/link';
import type { SiteLocale } from '@/lib/site';
import { guideContent, guideMeta, guideSlugs, labels, type GuideSlug } from '@/lib/nearby';
export default function NearbyGuideCards({locale, exclude}: {locale: SiteLocale; exclude?: GuideSlug}) {
 const t = labels[locale];
 return <div className="grid gap-6 md:grid-cols-3">{guideSlugs.filter(s=>s!==exclude).map(slug=>{
 const p=guideContent[locale][slug]; return <article key={slug} className="overflow-hidden rounded-3xl border border-theme bg-secondary">
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img src={guideMeta[slug].image} alt={p.name} width={1200} height={800} loading="lazy" className="aspect-[3/2] w-full object-cover"/>
 <div className="p-6"><h3 className="text-xl font-semibold"><Link href={`/${locale}/nearby/${slug}`} className="hover:underline">{p.name}</Link></h3><p className="mt-3 text-secondary leading-relaxed">{p.summary}</p><Link href={`/${locale}/nearby/${slug}`} className="mt-4 inline-flex font-semibold text-accent underline underline-offset-4">{t.read} →</Link></div></article>;
 })}</div>;
}
