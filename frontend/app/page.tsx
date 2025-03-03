import React from "react";

import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";
import Testimonial from "@/components/home/Testimonial";
import WatchCard from "@/components/WatchCard/WatchCard";
import Container from "@/components/global/Container";
const Iwatch2 = "/images/iwatch2.png"; // ✅ Correct
const Iwatch = "/images/iwatch.png";
const Iwatch3 = "/images/iwatch3.png";
const Iwatch4 = "/images/iwatch4.png";
const Iwatch5 = "/images/fitbit.png";
const Iwatch6 = "/images/samsungpro.png";

import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";
import WatchCategoryCard from "@/components/WatchCategoryCard/WatchCategoryCard";

import { getBrands, getWatches } from "../lib/api";

export default async function Home() {
  const brands = await getBrands();
  const watches = await getWatches();
  const isTrendingGames = watches?.filter((watch) => watch.isTrending);
  const isFeaturedGame = watches?.find((watch) => watch.isFeatured);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //   });
  // }, []);

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
              {watches.map((game) => (
                <WatchCard
                  key={game._id}
                  watchName={game.name}
                  imageUrl={game.images[0].url}
                  slug={game.slug.current}
                  price={game.price}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* BRAND */}
      <section
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1519153017650-55aad829d4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // }}
        className="py-20"
      >
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
      <Testimonial />
      <Newsletter />
    </section>
  );
}

const watches = [
  {
    id: 1,
    price: 12,
    name: "Series 1",
    slug: "watch1",
    image: Iwatch2,
  },
  {
    id: 2,
    price: 14,
    name: "Series 2",
    slug: "watch2",
    image: Iwatch,
  },
  {
    id: 3,
    price: 42,
    name: "Series 3",
    slug: "watch3",
    image: Iwatch3,
  },
  {
    id: 4,
    price: 27,
    name: "Series 4",
    slug: "watch4",
    image: Iwatch4,
  },
  {
    id: 5,
    price: 36,
    name: "Series 6",
    slug: "watch5",
    image: Iwatch6,
  },
  {
    id: 6,
    price: 78,
    name: "Series5",
    slug: "watch6",
    image: Iwatch5,
  },
];

//   {
//     id: 1,
//     price: 12,
//     name: "Series 1",
//     slug: "watch1",
//     image: Iwatch2,
//   },
//   {
//     id: 2,
//     price: 14,
//     name: "Series 2",
//     slug: "watch2",
//     image: Iwatch,
//   },
//   {
//     id: 3,
//     price: 42,
//     name: "Series 3",
//     slug: "watch3",
//     image: Iwatch3,
//   },
//   {
//     id: 4,
//     price: 27,
//     name: "Series 4",
//     slug: "watch4",
//     image: Iwatch4,
//   },
// ];

const featuredGame = {
  name: "Richard Mille",
  description:
    "Immerse yourself in timeless elegance with the 'Eternal Domination' timepiece. This watch, crafted for those who lead with confidence, features a striking design that commands attention. With precision engineering and refined detailing, it represents the perfect blend of strength and sophistication. Each element, from the durable case to the intricately designed dial, speaks of authority and grandeur.'",
  slug: "richard mille",
  image: Iwatch2,
};
