'use client';

import { useState } from 'react';
import { SiteLocale } from '@/lib/site';

const galleryText = {
  en: {
    alts: [
      "Palazzo del Giardino seen from the park",
      "Autumn colours along a tree-lined avenue",
      "Sculptures beside a columned garden pavilion",
      "Formal lawn, ornamental vases and tree-lined paths",
      "Pond reflections among the trees",
      "Circular columned pavilion in the greenery",
      "Historic brick building in the urban surroundings",
      "Broad gravel paths between lawns and sculptures",
      "Water lilies and leaves on the water",
      "Ornamental vase with a white pavilion in the background",
      "Palazzo del Giardino façade beyond the lawn",
      "Ornamental vase beside a shaded avenue"
],
    previousPhotos: 'Previous photos',
    nextPhotos: 'Next photos',
    close: 'Close gallery',
    imageLabel: 'Image',
  },
  fr: {
    alts: [
      "Palazzo del Giardino vu depuis le parc",
      "Couleurs d’automne dans une allée arborée",
      "Sculptures près d’un pavillon à colonnes",
      "Pelouse, vases ornementaux et allées arborées",
      "Reflets des arbres dans le bassin",
      "Pavillon circulaire à colonnes dans la verdure",
      "Édifice historique en brique dans le contexte urbain",
      "Larges chemins de gravier entre pelouses et sculptures",
      "Nénuphars et feuilles sur l’eau",
      "Vase ornemental devant un pavillon blanc",
      "Façade du Palazzo del Giardino au-delà de la pelouse",
      "Vase ornemental près d’une allée ombragée"
],
    previousPhotos: 'Photos précédentes',
    nextPhotos: 'Photos suivantes',
    close: 'Fermer la galerie',
    imageLabel: 'Image',
  },
  it: {
    alts: [
      "Palazzo del Giardino visto dal parco",
      "Colori autunnali lungo un viale alberato",
      "Sculture accanto a un padiglione con colonne",
      "Prato, vasi ornamentali e viali alberati",
      "Riflessi degli alberi nella peschiera",
      "Padiglione circolare con colonne nel verde",
      "Edificio storico in mattoni nel contesto urbano",
      "Ampi percorsi in ghiaia fra prati e sculture",
      "Ninfee e foglie sulla superficie dell’acqua",
      "Vaso ornamentale con un padiglione bianco sullo sfondo",
      "Facciata del Palazzo del Giardino oltre il prato",
      "Vaso ornamentale accanto a un viale ombreggiato"
],
    previousPhotos: 'Foto precedenti',
    nextPhotos: 'Foto successive',
    close: 'Chiudi la galleria',
    imageLabel: 'Immagine',
  },
  'zh-Hant': {
    alts: [
      "從公園眺望 Palazzo del Giardino 宮殿",
      "林蔭大道的秋季色彩",
      "柱廊涼亭旁的雕塑群",
      "草坪、裝飾花瓶與林蔭步道",
      "池塘中的樹影倒映",
      "綠意中的圓形柱廊亭閣",
      "周邊市區的歷史磚造建築",
      "草坪與雕塑之間的寬闊碎石步道",
      "水面上的睡蓮與葉片",
      "裝飾花瓶與後方白色亭閣",
      "草坪後方 Palazzo del Giardino 的正面",
      "林蔭步道旁的裝飾花瓶"
],
    previousPhotos: '上一組照片',
    nextPhotos: '下一組照片',
    close: '關閉相簿',
    imageLabel: '圖片',
  },
} satisfies Record<SiteLocale, {
  alts: string[];
  previousPhotos: string;
  nextPhotos: string;
  close: string;
  imageLabel: string;
}>;

const imageSources = [
  '/gallery/images (1).jpg',
  '/gallery/images (2).jpg',
  '/gallery/images (3).jpg',
  '/gallery/images (4).jpg',
  '/gallery/images (5).jpg',
  '/gallery/images (6).jpg',
  '/gallery/images (7).jpg',
  '/gallery/images (8).jpg',
  '/gallery/images (9).jpg',
  '/gallery/images (10).jpg',
  '/gallery/images (11).jpg',
  '/gallery/images (12).jpg',
];

export default function Gallery({ locale }: { locale: SiteLocale }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(0);
  const text = galleryText[locale];
  const images = imageSources.map((src, index) => ({
    src,
    alt: text.alts[index],
  }));
  
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const openLightbox = (index: number) => {
    // Calculate absolute index based on current page
    setCurrentIndex(page * imagesPerPage + index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Get current page images
  const currentImages = images.slice(page * imagesPerPage, (page + 1) * imagesPerPage);

  return (
    <div className="relative">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((img, idx) => (
          <div 
            key={idx} 
            className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] relative group shadow-sm border border-theme/50"
            onClick={() => openLightbox(idx)}
          >
            {/* Fallback to simple img tag for local files without knowing exact dimensions */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
        ))}
      </div>

      {/* Grid Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button 
          onClick={prevPage}
          className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
          aria-label={text.previousPhotos}
        >
          &#8249;
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${page === i ? 'bg-accent w-6' : 'bg-theme/50 hover:bg-theme'}`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={nextPage}
          className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
          aria-label={text.nextPhotos}
        >
          &#8250;
        </button>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-50 w-12 h-12 flex items-center justify-center"
            onClick={closeLightbox}
            aria-label={text.close}
          >
            &times;
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute left-4 text-white text-5xl hover:text-gray-300 z-50 w-12 h-12 flex items-center justify-center"
            onClick={prevImage}
          >
            &#8249;
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-[80vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
            />
            <p className="text-center text-white mt-4 text-sm">
              {images[currentIndex].alt} - {text.imageLabel} {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 text-white text-5xl hover:text-gray-300 z-50 w-12 h-12 flex items-center justify-center"
            onClick={nextImage}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
