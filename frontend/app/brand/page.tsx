import React from "react";
import { getBrands } from "../../lib/api";
import WatchCategoryCard from "@/components/WatchCategoryCard/WatchCategoryCard";

export default async function Home() {
  const brands = await getBrands();

  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519153017650-55aad829d4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      <div className="text-white">
        <div className="text-center mx-auto max-w-5xl">
          <h2 className="text-5xl py-10"> BRAND </h2>
          <p>
            Discover a collection of timepieces that combine classic design and
            modern functionality. Explore an array of watches, from elegant
            chronographs to minimalist styles, crafted for durability and
            precision. Make a statement with versatile designs, perfect for
            daily wear or special occasions, and experience the art of
            watchmaking that will keep you stylish and punctual.
          </p>
        </div>

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
    </section>
  );
}
