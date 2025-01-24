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
    rating: 5,
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
    <div>
      <Container className="py-20">
        <div>
          <div className="text-center">
            <h2> Here are some of our best clients </h2>
            <h1 className="text-4xl"> What People Say About Us </h1>
          </div>

          <section className="my-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={2} // Display 2 cards at a time
              pagination={{ clickable: true }}
              //   navigation={true}
              autoplay={{
                delay: 4000, // 4 seconds delay
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-xl flex flex-row justify-between gap-10 items-center">
                    <Image
                      src={testimonial.image}
                      alt="avatar"
                      className="rounded-2xl"
                    />

                    <div>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 mt-2">{testimonial.review}</p>
                      <div className="mt-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
