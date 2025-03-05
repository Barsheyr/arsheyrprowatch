import React from "react";
import { getBrands } from "../../lib/api";
import WatchCategoryCard from "@/components/WatchCategoryCard/WatchCategoryCard";

export default async function Home() {
  const brands = await getBrands();

  return (
    <section>
      <div className="py-20">
        <div className="text-center mx-auto max-w-5xl">
          <h2 className="text-5xl py-10 font-bold"> BRANDS </h2>
          <p>
            Discover a collection of timepieces that combine classic design and
            modern functionality. Explore an array of watches, from elegant
            chronographs to minimalist styles, crafted for durability and
            precision. Make a statement with versatile designs, perfect for
            daily wear or special occasions, and experience the art of
            watchmaking that will keep you stylish and punctual.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 p-20">
            {brands.map((brand) => (
              <WatchCategoryCard
                key={brand._id}
                categoryImage={brand.image}
                categoryName={brand.name}
                slug={brand.slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
