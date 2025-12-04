// ProductCard.tsx

import React from 'react';
import { Star } from 'lucide-react'; // Menggunakan ikon bintang dari 'lucide-react' (asumsi library ikon ini tersedia)

// Mendefinisikan tipe untuk props
interface ProductCardProps {
  title: string;
  subtitle?: string; // Subtitle bersifat opsional
  imageSrc: string;
  isLarge?: boolean; // Jadikan opsional, defaultnya false
  rating?: number; // Tambahkan rating bersifat opsional
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageSrc, isLarge = false, rating }) => {
  
  // Kelas dinamis berdasarkan ukuran kartu
  const cardClasses = isLarge ? 'h-96 w-full' : 'h-64 w-full';
  const titleClasses = isLarge ? 'text-4xl' : 'text-3xl';
  const subtitleClasses = isLarge ? 'text-lg' : 'text-sm';

  // Fungsi untuk menampilkan bintang rating
  const renderRating = (rate: number) => {
    // Membuat array untuk 5 bintang
    const stars = Array.from({ length: 5 }, (_, index) => {
      // Tentukan apakah bintang harus diisi penuh atau tidak
      const isFilled = index < Math.floor(rate);
      return (
        <Star
          key={index}
          className={`w-4 h-4 ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
        />
      );
    });
    
    return (
      <div className="flex items-center gap-1 mt-1">
        {stars}
        <span className="text-xs ml-1 font-medium text-gray-200">({rate.toFixed(1)})</span>
      </div>
    );
  };
  
  return (
    <div className={`relative ${cardClasses} rounded-2xl overflow-hidden shadow-xl bg-gray-100`}>
      
      {/* Container Gambar dan Gradien */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        {/* Gradien untuk memastikan teks terlihat jelas */}
        {/* Mengubah gradien agar lebih gelap di bagian bawah untuk rating/teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> 
      </div>
      
      {/* Ikon Panah/Link (tombol expand/link) */}
      <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-white/50 transition duration-300">
        {/* Mengubah warna ikon menjadi putih/hitam agar kontras, tergantung latar belakang */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
      </div>

      {/* Konten Teks */}
      <div className={`absolute left-5 ${isLarge ? 'bottom-5' : 'bottom-4'} text-white`}>
        <h2 className={`font-light ${titleClasses}`}>{title}</h2>
        
        {/* Menampilkan Subtitle (jika ada) */}
        {subtitle && (
          <p className={`mt-1 font-extralight ${subtitleClasses} text-gray-200`}>
            {subtitle}
          </p>
        )}

        {/* Menampilkan Rating Bintang (jika ada) */}
        {rating !== undefined && rating > 0 && renderRating(rating)}
        
      </div>
    </div>
  );
};

export default ProductCard;