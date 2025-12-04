// HeroSection.tsx (Skincare, tanpa gambar)
import React from 'react';
import { Button } from '@heroui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-[35rem] bg-white rounded-3xl shadow-xl relative overflow-hidden gap-16 px-24">
      
      {/* BACKGROUND/DEKORASI */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 to-white/70"></div>
      
      {/* KONTEN TEKS (Kolom Kiri) */}
      <div className="z-10 w-full">
        <p className="text-gray-500 font-medium mb-1">✨ Natural Skincare</p>
        <h1 className="text-6xl font-extrabold leading-tight mb-4">Glow & Radiance Everyday.</h1>
        
        <div className="flex items-center gap-4 mb-8 mt-6">
          <span className="text-7xl font-light text-gray-300">01</span>
          <div>
            <h3 className="font-semibold text-lg">Hydrating Formula</h3>
            <p className="text-gray-600 max-w-xs">Keep your skin soft, smooth, and naturally radiant.</p>
          </div>
        </div>
        
        <Button 
          className="h-14 px-8 text-white bg-pink-500 hover:bg-pink-600 transition-colors"
          endContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>}
        >
          Shop Now
        </Button>
      </div>

    </div>
  );
};

export default HeroSection;
