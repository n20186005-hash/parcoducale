'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery/images (1).jpg', alt: 'Palazzo Ducale - The magnificent Ducal Palace view from the park' },
  { src: '/gallery/images (2).jpg', alt: 'Tree-lined Avenues - Historic pathways perfect for a tranquil stroll' },
  { src: '/gallery/images (3).jpg', alt: 'Artificial Lake - The serene pond reflecting the surrounding nature' },
  { src: '/gallery/images (4).jpg', alt: 'Fontana del Trianon - The iconic fountain and its classical beauty' },
  { src: '/gallery/images (5).jpg', alt: 'Boudard Sculptures - Monumental marble vases and statues' },
  { src: '/gallery/images (6).jpg', alt: 'Palazzetto Eucherio Sanvitale - Renaissance-style architecture' },
  { src: '/gallery/images (7).jpg', alt: 'Lush Greenery - Ancient trees and broad lawns of the Oasis' },
  { src: '/gallery/images (8).jpg', alt: 'Duck Pond - A family-friendly spot to feed ducks and turtles' },
  { src: '/gallery/images (9).jpg', alt: 'Gravel Paths - Exploring the remains of the Arcadia woods' },
  { src: '/gallery/images (10).jpg', alt: 'Park Entrance - Gateway to the 16th-century Renaissance Park' },
  { src: '/gallery/images (11).jpg', alt: 'Autumn Colors - Seasonal beauty in the heart of Parma' },
  { src: '/gallery/images (12).jpg', alt: 'Sunset View - A magical atmosphere as evening approaches' },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(0);
  
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
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-all">查看原图</span>
            </div>
          </div>
        ))}
      </div>

      {/* Grid Pagination Controls */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button 
          onClick={prevPage}
          className="w-10 h-10 rounded-full border border-theme flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors shadow-sm"
          aria-label="Previous photos"
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
          aria-label="Next photos"
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
