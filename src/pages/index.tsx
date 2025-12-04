import DefaultLayout from "@/layouts/default";
// Mengganti nama HeroSection menjadi nama yang lebih sesuai, atau biarkan jika Anda hanya ingin fokus pada perbaikan layout.
// Asumsikan HeroSection adalah komponen besar di sebelah kiri.
import HeroSection from "@/components/herosection"; 
import ProductCard from "@/components/productcart"; // Mengubah nama ProductCart menjadi ProductCard (penamaan standar)

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* 🏠 Hero / Main Section Layout */}
      <section className="flex gap-8">
        
        {/* Kolom Kiri: Hero/Main Content (misalnya, Jumbotron besar dengan teks dan CTA) */}
        <div className="w-[90%] md:w-3/4">
            <HeroSection />
          <div className="md:col-span-8 flex gap-4 mt-10">
          {/* Contoh Product Card 3 */}
          <ProductCard
            title="Listening Has Been Released"
            imageSrc="/image/GlowVera-BrightSerum.png" 
            rating={4.7}
          />
          {/* Contoh Product Card 4 */}
          <ProductCard
            title="Sequoia Pro Speakers"
            subtitle="Experience 360 sound"
            imageSrc="/image/GlowVera-BrightSerum.png"
          />
          {/* Tambahkan Product Card lainnya di sini... */}
        </div> 
        </div>
        
        {/* Kolom Kanan: Highlight Produk Populer (mirip layout vertikal gambar) */}
        <div className="w-[10%] md:w-1/4 flex flex-col gap-6"> 
            
          {/* Kartu Produk 1: Earbud (New Gen X-Bud) */}
          <ProductCard
            title="New Gen X-Bud"
            // Asumsikan imageSrc mengambil gambar earbud
            imageSrc="/image/GlowVera-BrightSerum.png" 
            isLarge={false} // Atur ukuran sesuai kebutuhan
          />

          {/* Kartu Produk 2: Headphone (Light Grey Surface Headphone) */}
          <ProductCard
            title="Light Grey Surface Headphone"
            subtitle="Boosted with bass"
            // Asumsikan imageSrc mengambil gambar headset VR/headphone besar
            imageSrc="/image/GlowVera-BrightSerum.png" 
            isLarge={true} // Atur ukuran sesuai kebutuhan
          />
        </div>
      </section>

      {/* --- Pemisah Seksion --- */}

      {/* 📦 Popular Products & Highlights Section di bawah Hero */}
      {/* Menggunakan layout grid untuk produk-produk lain */}
      <section className="mt-12 grid grid-cols-12 gap-6">
        
        {/* Kolom Kiri Bawah: Produk Lain */}
        <div className="col-span-12 md:col-span-8 flex flex-wrap gap-4">
          
          {/* Contoh Product Card 3 */}
          <ProductCard
            title="Listening Has Been Released"
            imageSrc="/image/product-placeholder-3.png" 
            rating={4.7}
          />

          {/* Contoh Product Card 4 */}
          <ProductCard
            title="Sequoia Pro Speakers"
            subtitle="Experience 360 sound"
            imageSrc="/image/product-placeholder-4.png"
          />

          {/* Tambahkan Product Card lainnya di sini... */}
        </div>

        {/* Kolom Kanan Bawah: Side Bar / Iklan / Informasi Tambahan (Opsional) */}
        <div className="col-span-12 md:col-span-4 p-4 rounded-xl bg-gray-100">
            <h3 className="font-bold text-xl mb-3">Penawaran Spesial</h3>
            <p className="text-gray-600">Dapatkan diskon 15% untuk setiap pembelian di atas 5 juta.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}