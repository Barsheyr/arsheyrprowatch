import React from "react";

import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";
import Testimonial from "@/components/home/Testimonial";
import WatchCard from "@/components/WatchCard/WatchCard";
import Container from "@/components/global/Container";
import Newsletter from "@/components/home/Newsletter";

import WatchCategoryCard from "@/components/WatchCategoryCard/WatchCategoryCard";

import { getBrands, getWatches } from "../lib/api";

export default async function Home() {
  const brands = await getBrands();
  const { watches } = await getWatches();

  const isTrendingWatches = watches.filter((watch) => watch.isTrending);

  // const isTrendingWatches = watches.watches.filter(
  //   (watch: Watch) => watch.isTrending
  // );
  // const featuredWatch = watches.watches.find(
  //   (watch: Watch) => watch.isFeatured
  // );

  return (
    <section>
      <div className="bg-black">
        <Hero />
      </div>
      <BrandSample />
      <section className="py-10">
        <Container>
          <div data-aos="fade-down" className="text-center mb-20">
            <h2 className="text-5xl font-bold"> Our Latest Products </h2>
          </div>

          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {isTrendingWatches.map((watch) => (
                <WatchCard
                  key={watch._id}
                  watchName={watch.name}
                  imageUrl={watch.images[0].url}
                  slug={watch.slug.current}
                  price={watch.price}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* BRAND */}
      <section className="py-20">
        <div className="">
          <div className="text-center mx-auto max-w-5xl">
            <h2 className="text-5xl py-10 font-bold"> BRAND </h2>
            <p>
              Discover a collection of timepieces that combine classic design
              and modern functionality. Explore an array of watches, from
              elegant chronographs to minimalist styles, crafted for durability
              and precision. Make a statement with versatile designs, perfect
              for daily wear or special occasions, and experience the art of
              watchmaking that will keep you stylish and punctual.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 p-20">
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
      <Testimonial />
      <Newsletter />
    </section>
  );
}
