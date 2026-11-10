import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import NearbyGuideCards from '@/components/NearbyGuideCards';
import { baseUrl, getCanonicalUrl, getLanguageAlternates, isValidLocale, locales } from '@/lib/site';
import { checkedDate, guideContent, guideMeta, guideSlugs, isGuideSlug, labels, sourceLabel } from '@/lib/nearby';

type Params = { params: Promise<{locale: string; slug: string}> };
// Keep validated routes renderable when the production adapter has no cached page.
export function generateStaticParams() { return guideSlugs.map(slug=>({slug})); }
export async function generateMetadata({params}: Params): Promise<Metadata> {
 const {locale,slug}=await params;
 if(!isValidLocale(locale)||!isGuideSlug(slug)) notFound();
 const p=guideContent[locale][slug]; const path=`/nearby/${slug}`;
 return { title:{absolute:p.title+' | Parco Ducale'}, description:p.summary,
  alternates:{canonical:getCanonicalUrl(locale,path),languages:getLanguageAlternates(path)},
  openGraph:{title:p.title,description:p.summary,url:getCanonicalUrl(locale,path),type:'article',images:[{url:baseUrl+guideMeta[slug].image,alt:p.name}]}
 };
}
function TextList({items,ordered=false}:{items:string[];ordered?:boolean}) {
 const className='mt-5 space-y-3 pl-6 text-secondary leading-relaxed';
 return ordered?<ol className={className+' list-decimal'}>{items.map(x=><li key={x}>{x}</li>)}</ol>:<ul className={className+' list-disc'}>{items.map(x=><li key={x}>{x}</li>)}</ul>;
}
export default async function NearbyGuide({params}: Params) {
 const {locale,slug}=await params;
 if(!isValidLocale(locale)||!isGuideSlug(slug)) notFound();
 const p=guideContent[locale][slug],t=labels[locale],meta=guideMeta[slug],path=`/nearby/${slug}`;
 const mapQuery=p.address+' '+(slug==='casa-natale-toscanini'?'Museo Casa Natale Arturo Toscanini':slug==='palazzo-della-pilotta'?'Palazzo della Pilotta':'Piazza Duomo');
 const maps='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(mapQuery);
 const url=getCanonicalUrl(locale,path);
 const json={'@context':'https://schema.org','@graph':[
  {'@type':'Article','@id':url+'#article',headline:p.title,description:p.summary,url,inLanguage:locale,dateModified:checkedDate,image:baseUrl+meta.image,author:{'@type':'Organization',name:t.editor},isPartOf:{'@type':'WebSite',name:'Parco Ducale',url:baseUrl}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:t.home,item:getCanonicalUrl(locale)},{'@type':'ListItem',position:2,name:p.name,item:url}]},
  {'@type':'FAQPage',mainEntity:p.faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))}
 ]};
 const toc=['intro','tips','highlights','about','facts','hours','admission','arrival','appeal','route','notices','photo','stay','faq','map','sources'] as const;
 return <main className="nearby-guide">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(json).replace(/</g,'\\u003c')}}/>
  <header className="border-b border-theme bg-primary px-4 py-5 md:px-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
   <Link href={`/${locale}`} className="font-bold tracking-widest">PARCO DUCALE</Link>
   <div className="flex flex-wrap items-center gap-4"><span className="rounded-full bg-neutral-800"><ThemeToggle label={t.theme}/></span><nav aria-label="Language" className="flex flex-wrap gap-3 text-sm">{locales.map(l=><Link key={l} href={`/${l}${path}`} hrefLang={l} aria-current={l===locale?'page':undefined} className={l===locale?'font-bold text-accent':'hover:underline'}>{l==='zh-Hant'?'繁中':l.toUpperCase()}</Link>)}</nav></div>
  </div></header>
  <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-gray-900 text-white">
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={meta.image} alt={p.name} width={1600} height={1000} fetchPriority="high" className={`absolute inset-0 h-full w-full ${slug==='casa-natale-toscanini'?'object-contain':'object-cover'}`}/>
   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"/>
   <div className="relative mx-auto w-full max-w-6xl px-4 py-12 md:px-8"><p className="text-sm uppercase tracking-wider">{t.nearby} · Parma</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{p.name}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{p.summary}</p><div className="mt-6 flex flex-wrap gap-3"><a href={maps} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 font-semibold text-black">{t.openMap} ↗</a><a href="#hours" className="rounded-full border border-white/70 px-5 py-3 font-semibold">{t.hours}</a></div></div>
  </section>
  <div className="mx-auto max-w-6xl px-4 md:px-8"><nav aria-label="Breadcrumb" className="py-6 text-sm text-secondary"><Link href={`/${locale}`} className="underline">{t.home}</Link><span aria-hidden="true"> / </span>{p.name}</nav>
   <p className="text-sm text-secondary">{t.editor} · {t.checked} <time dateTime={checkedDate}>{checkedDate}</time></p>
   <nav aria-label={t.toc} className="mt-6 rounded-2xl border border-theme bg-secondary p-5"><p className="font-semibold">{t.toc}</p><div className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm">{toc.map(k=><a key={k} href={'#'+k} className="underline underline-offset-4">{t[k]}</a>)}</div></nav>
   <section id="intro" className="guide-section"><h2 className="text-3xl font-bold">{t.intro}</h2><div className="mt-5 space-y-4 text-lg leading-relaxed text-secondary">{p.intro.map(x=><p key={x}>{x}</p>)}</div></section>
   <div className="grid gap-x-12 md:grid-cols-2"><section id="tips" className="guide-section"><h2 className="text-2xl font-bold">{t.tips}</h2><TextList items={p.tips}/></section><section id="highlights" className="guide-section"><h2 className="text-2xl font-bold">{t.highlights}</h2><TextList items={p.highlights}/></section></div>
   <section id="about" className="guide-section"><h2 className="text-3xl font-bold">{t.about}</h2><div className="mt-5 space-y-4 leading-relaxed text-secondary">{p.about.map(x=><p key={x}>{x}</p>)}</div></section>
   <section id="facts" className="guide-section"><h2 className="text-3xl font-bold">{t.facts}</h2><dl className="mt-6 grid gap-4 rounded-2xl border border-theme bg-secondary p-6 sm:grid-cols-2"><div><dt className="font-semibold">{t.address}</dt><dd className="mt-2 text-secondary">{p.address}</dd></div><div><dt className="font-semibold">{t.type}</dt><dd className="mt-2 text-secondary">{t.typeValue}</dd></div></dl></section>
   <div className="grid gap-x-12 md:grid-cols-2"><section id="hours" className="guide-section"><h2 className="text-2xl font-bold">{t.hours}</h2><p className="mt-5 leading-relaxed text-secondary">{p.hours}</p></section><section id="admission" className="guide-section"><h2 className="text-2xl font-bold">{t.admission}</h2><p className="mt-5 leading-relaxed text-secondary">{p.admission}</p></section></div>
   <section id="arrival" className="guide-section"><h2 className="text-3xl font-bold">{t.arrival}</h2><TextList items={p.arrival}/></section>
   <section id="appeal" className="guide-section"><h2 className="text-3xl font-bold">{t.appeal}</h2><TextList items={p.appeal}/></section>
   <section id="route" className="guide-section"><h2 className="text-3xl font-bold">{t.route}</h2><TextList items={p.route} ordered/></section>
   <section id="notices" className="guide-section"><h2 className="text-3xl font-bold">{t.notices}</h2><TextList items={p.notices}/></section>
   <div className="grid gap-x-12 md:grid-cols-2"><section id="photo" className="guide-section"><h2 className="text-2xl font-bold">{t.photo}</h2><p className="mt-5 leading-relaxed text-secondary">{p.photo}</p><p className="mt-4 text-sm text-secondary"><a href={meta.imageSource} target="_blank" rel="noopener noreferrer" className="underline">{meta.credit}</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a></p></section><section id="stay" className="guide-section"><h2 className="text-2xl font-bold">{t.stay}</h2><p className="mt-5 leading-relaxed text-secondary">{p.stay}</p></section></div>
   <section id="faq" className="guide-section"><h2 className="text-3xl font-bold">{t.faq}</h2><div className="mt-6 space-y-4">{p.faqs.map(f=><details key={f.question} className="rounded-2xl border border-theme bg-secondary p-5"><summary className="cursor-pointer font-semibold">{f.question}</summary><p className="mt-3 leading-relaxed text-secondary">{f.answer}</p></details>)}</div></section>
   <section className="guide-section"><h2 className="mb-6 text-3xl font-bold">{t.nearby}</h2><NearbyGuideCards locale={locale} exclude={slug}/><p className="mt-6"><Link href={`/${locale}`} className="font-semibold text-accent underline">← {t.home}</Link></p></section>
   <section id="map" className="guide-section"><h2 className="text-3xl font-bold">{t.map}</h2><p className="mt-4 text-secondary">{p.address}</p><a href={maps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-semibold text-accent underline">{t.openMap} ↗</a><iframe title={t.map+' · '+p.name} src={'https://www.google.com/maps?q='+encodeURIComponent(mapQuery)+'&output=embed'} width="100%" height="360" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-6 rounded-2xl border border-theme"/></section>
   <section id="sources" className="guide-section border-t border-theme"><h2 className="text-2xl font-bold">{t.sources}</h2><p className="mt-4 text-sm text-secondary">{t.editor} · {t.checked} {checkedDate}</p><ul className="mt-4 space-y-3">{meta.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="break-words text-accent underline">{sourceLabel(locale, s.label)} ↗</a></li>)}</ul></section>
  </div>
  <footer className="border-t border-theme bg-secondary px-4 py-10 text-center text-sm text-secondary"><Link href={`/${locale}`} className="font-semibold underline">Parco Ducale</Link><div className="mt-5 flex flex-wrap justify-center gap-6"><Link href={`/${locale}/privacy-policy`}>{t.privacy}</Link><Link href={`/${locale}/terms-of-service`}>{t.terms}</Link><Link href={`/${locale}/cookie-settings`}>{t.cookies}</Link></div><p className="mt-5">© 2026 Parco Ducale</p></footer>
 </main>;
}
