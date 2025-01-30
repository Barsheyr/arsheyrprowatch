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
import Iwatch5 from "@/public/images/fitbit.png";
import Iwatch6 from "@/public/images/samsungpro.png";
import Newsletter from "@/components/home/Newsletter";
import Link from "next/link";
import Image from "next/image";

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

      <section className="mx-auto max-w-7xl py-20">
        <>
          <h3 className="font-semibold text-3xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
            Featured Game
          </h3>

          <section className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-5 text-black">
            <div className="mx-auto max-w-screen-xl">
              <h2 className="font-bold text-xl md:text-xl lg:text-2xl mb-4 md:mb-8 text-black text-center">
                {featuredGame.name}
              </h2>
              <p>{featuredGame.description}</p>
              <div className="flex justify-center">
                <Link href={`/games/${featuredGame.slug}`}>
                  <Image
                    src={featuredGame.image}
                    alt={featuredGame.name}
                    width={500}
                    height={500}
                    className="h-32 md:h-42 lg:h-52 w-[100%] object-cover rounded-lg flex fec4 items-center justify-center"
                  />
                </Link>
              </div>
            </div>
          </section>
        </>
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

const featuredGame = {
  name: "Richard Mille",
  description:
    "Immerse yourself in timeless elegance with the 'Eternal Domination' timepiece. This watch, crafted for those who lead with confidence, features a striking design that commands attention. With precision engineering and refined detailing, it represents the perfect blend of strength and sophistication. Each element, from the durable case to the intricately designed dial, speaks of authority and grandeur.'",
  slug: "richard mille",
  image: Iwatch2,
};
