import DefaultLayout from "@/layouts/default";
import HeroSection from "@/components/herosection"; 
import ProductCard from "@/components/productcart";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex gap-8">
        <div className="w-[90%] md:w-3/4">
          <HeroSection />
          <div className="md:col-span-8 flex gap-4 mt-10">
            <ProductCard
              title="Listening Has Been Released"
              imageSrc="/image/GlowVera-BrightSerum.png" 
              rating={4.7}
            />
            <ProductCard
              title="Sequoia Pro Speakers"
              subtitle="Experience 360 sound"
              imageSrc="/image/GlowVera-BrightSerum.png"
            />
          </div> 
        </div>
        
        <div className="w-[10%] md:w-1/4 flex flex-col gap-6"> 
          <ProductCard
            title="New Gen X-Bud"
            imageSrc="/image/GlowVera-BrightSerum.png" 
            isLarge={false}
          />
          <ProductCard
            title="Light Grey Surface Headphone"
            subtitle="Boosted with bass"
            imageSrc="/image/GlowVera-BrightSerum.png" 
            isLarge={true}
          />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 flex flex-wrap gap-4">
          <ProductCard
            title="Listening Has Been Released"
            imageSrc="/image/product-placeholder-3.png" 
            rating={4.7}
          />
          <ProductCard
            title="Sequoia Pro Speakers"
            subtitle="Experience 360 sound"
            imageSrc="/image/product-placeholder-4.png"
          />
        </div>

        <div className="col-span-12 md:col-span-4 p-4 rounded-xl bg-gray-100">
          <h3 className="font-bold text-xl mb-3">Penawaran Spesial</h3>
          <p className="text-gray-600">Dapatkan diskon 15% untuk setiap pembelian di atas 5 juta.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
