"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      "Don't waste time, just order! This is the best website to purchase top quality watches.",
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Container className="py-20">
      <section className="my-8">
        <h2
          data-aos="fade-down"
          className="text-center text-5xl font-bold mb-10"
        >
          What People Say About Us
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={2} // Display 2 cards at a time
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={false} // Disable navigation arrows
          autoplay={{
            delay: 4000, // 4 seconds delay
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]} // Removed Navigation module
          breakpoints={{
            240: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 2 }, // Desktops
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 items-center p-6 bg-gray-100 rounded-2xl">
                <Image src={testimonial.image} alt={testimonial.name} />

                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.review}</p>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4 flex justify-center"></div>
      </section>
    </Container>
  );
};

export default Testimonial;
