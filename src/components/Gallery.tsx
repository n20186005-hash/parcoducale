'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/gallery/images%20(1).jpg', alt: 'Palazzo Ducale - The magnificent Ducal Palace view from the park' },
  { src: '/gallery/images%20(2).jpg', alt: 'Tree-lined Avenues - Historic pathways perfect for a tranquil stroll' },
  { src: '/gallery/images%20(3).jpg', alt: 'Artificial Lake - The serene pond reflecting the surrounding nature' },
  { src: '/gallery/images%20(4).jpg', alt: 'Fontana del Trianon - The iconic fountain and its classical beauty' },
  { src: '/gallery/images%20(5).jpg', alt: 'Boudard Sculptures - Monumental marble vases and statues' },
  { src: '/gallery/images%20(6).jpg', alt: 'Palazzetto Eucherio Sanvitale - Renaissance-style architecture' },
  { src: '/gallery/images%20(7).jpg', alt: 'Lush Greenery - Ancient trees and broad lawns of the Oasis' },
  { src: '/gallery/images%20(8).jpg', alt: 'Duck Pond - A family-friendly spot to feed ducks and turtles' },
  { src: '/gallery/images%20(9).jpg', alt: 'Gravel Paths - Exploring the remains of the Arcadia woods' },
  { src: '/gallery/images%20(10).jpg', alt: 'Park Entrance - Gateway to the 16th-century Renaissance Park' },
  { src: '/gallery/images%20(11).jpg', alt: 'Autumn Colors - Seasonal beauty in the heart of Parma' },
  { src: '/gallery/images%20(12).jpg', alt: 'Sunset View - A magical atmosphere as evening approaches' },
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
      {/* Thumbnail Grid - Only show first 6 images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, 6).map((img, idx) => (
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
