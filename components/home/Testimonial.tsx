"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";
import Container from "../global/Container";
import avatar1 from "@/public/images/avatar1.jpg";
import avatar2 from "@/public/images/avatar2.jpg";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Hamza Faizi",
    image: avatar2,
    review:
      "Don't waste time, just order! This is the best website to purchase smart watches.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar1,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar1,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar2,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar2,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar1,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 4,
  },
  {
    name: "Hafiz Huzaifa",
    image: avatar1,
    review:
      "I've been purchasing smart watches from Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <Container className="py-20">
      <section className="my-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          What People Say About Us
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Display 2 cards at a time
          pagination={{ clickable: true }}
          navigation={false} // Disable navigation arrows
          autoplay={{
            delay: 4000, // 4 seconds delay
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]} // Removed Navigation module
          breakpoints={{
            240: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktops
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  style={{ borderRadius: "50%", margin: "0 auto" }}
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-center mt-2">
                  {testimonial.review}
                </p>
                <div className="flex items-center mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
};

export default Testimonial;
