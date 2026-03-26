'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images (1).jpg', alt: 'Parco Ducale View 1' },
  { src: '/images (2).jpg', alt: 'Parco Ducale View 2' },
  { src: '/images (3).jpg', alt: 'Parco Ducale View 3' },
  { src: '/images (4).jpg', alt: 'Parco Ducale View 4' },
  { src: '/images (5).jpg', alt: 'Parco Ducale View 5' },
  { src: '/images (6).jpg', alt: 'Parco Ducale View 6' },
  { src: '/images (7).jpg', alt: 'Parco Ducale View 7' },
  { src: '/images (8).jpg', alt: 'Parco Ducale View 8' },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
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

  return (
    <div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] relative group"
            onClick={() => openLightbox(idx)}
          >
            {/* Fallback to simple img tag for local files without knowing exact dimensions */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 font-medium">查看原图</span>
            </div>
          </div>
        ))}
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
              {images[currentIndex].alt} - 图片 {currentIndex + 1} / {images.length}
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
