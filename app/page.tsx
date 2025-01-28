"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";

import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";
import Testimonial from "@/components/home/Testimonial";
import WatchCard from "@/components/WatchCard/WatchCard";
import Container from "@/components/global/Container";
import Iwatch2 from "@/public/images/iwatch2.png";
import Iwatch from "@/public/images/iwatch.png";
import Iwatch3 from "@/public/images/iwatch3.png";
import Iwatch4 from "@/public/images/iwatch4.png";
import Newsletter from "@/components/home/Newsletter";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="bg-black">
        <Hero />
      </div>
      <BrandSample />

      <section className="py-20">
        <Container>
          <div data-aos="fade-down" className="text-center mb-20">
            <h2 className="text-5xl font-bold"> Our Latest Products </h2>
          </div>

          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {watches.map((game) => (
                <WatchCard
                  key={game.id}
                  watchName={game.name}
                  imageUrl={game.image}
                  slug={game.slug}
                  price={game.price}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Testimonial />
      <Newsletter />
    </section>
  );
};

export default page;

const watches = [
  {
    id: 1,
    price: 12,
    name: "Watch1",
    slug: "watch1",
    image: Iwatch2,
  },
  {
    id: 2,
    price: 14,
    name: "Watch2",
    slug: "watch2",
    image: Iwatch,
  },
  {
    id: 3,
    price: 42,
    name: "Watch3 ",
    slug: "watch3",
    image: Iwatch3,
  },
  {
    id: 4,
    price: 27,
    name: "Watch4",
    slug: "watch4",
    image: Iwatch4,
  },
  {
    id: 5,
    price: 36,
    name: "Watch5",
    slug: "watch5",
    image: Iwatch2,
  },
  {
    id: 6,
    price: 78,
    name: "Watch6",
    slug: "watch6",
    image: Iwatch,
  },
];
