'use client';

import { useState } from 'react';
import { SiteLocale } from '@/lib/site';

const galleryText = {
  en: {
    alts: [
      'View of the park entrance and historic greenery',
      'Tree-lined avenue inside Parco Ducale',
      'Water feature and quiet walking area',
      'Fontana del Trianon in the park',
      'Classical sculpture details in the gardens',
      'Palazzetto Eucherio Sanvitale near the park',
      'Wide lawn shaded by mature trees',
      'Family-friendly pond area',
      'Pathways for walking and relaxing',
      'Entrance route toward the main park area',
      'Autumn foliage in Parco Ducale',
      'Evening light across the gardens',
    ],
    previousPhotos: 'Previous photos',
    nextPhotos: 'Next photos',
    close: 'Close gallery',
    imageLabel: 'Image',
  },
  fr: {
    alts: [
      "Vue de l'entrée du parc et de sa verdure historique",
      "Allée bordée d'arbres dans le Parco Ducale",
      "Plan d'eau et zone calme pour la promenade",
      'Fontaine du Trianon dans le parc',
      'Détails de sculptures classiques dans les jardins',
      'Palazzetto Eucherio Sanvitale près du parc',
      "Grande pelouse à l'ombre d'arbres anciens",
      'Zone de bassin adaptée aux familles',
      'Allées pour marcher et se détendre',
      "Accès vers la partie principale du parc",
      "Couleurs d'automne au Parco Ducale",
      'Lumière du soir sur les jardins',
    ],
    previousPhotos: 'Photos précédentes',
    nextPhotos: 'Photos suivantes',
    close: 'Fermer la galerie',
    imageLabel: 'Image',
  },
  it: {
    alts: [
      "Ingresso del parco e verde storico",
      'Viale alberato del Parco Ducale',
      "Specchio d'acqua e area tranquilla per passeggiare",
      'Fontana del Trianon nel parco',
      'Dettagli delle sculture classiche nei giardini',
      'Palazzetto Eucherio Sanvitale vicino al parco',
      'Grande prato ombreggiato da alberi maturi',
      'Area della peschiera adatta alle famiglie',
      'Percorsi per camminare e rilassarsi',
      "Accesso alla zona principale del parco",
      "Colori autunnali nel Parco Ducale",
      'Luce serale sui giardini',
    ],
    previousPhotos: 'Foto precedenti',
    nextPhotos: 'Foto successive',
    close: 'Chiudi la galleria',
    imageLabel: 'Immagine',
  },
  'zh-Hant': {
    alts: [
      '公園入口與歷史綠地景觀',
      'Parco Ducale 的林蔭步道',
      '水景與安靜散步區',
      '公園內的 Trianon 噴泉',
      '花園中的古典雕塑細節',
      '公園附近的 Eucherio Sanvitale 小宮殿',
      '被高大樹木遮蔭的大草坪',
      '適合家庭停留的水池區',
      '適合散步與放鬆的小徑',
      '通往公園主要區域的入口路線',
      'Parco Ducale 的秋季景色',
      '花園傍晚光影',
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
