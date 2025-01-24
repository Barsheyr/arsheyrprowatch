import React from "react";
import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";
import Testimonial from "@/components/home/Testimonial";

const page = () => {
  return (
    <section>
      <div className="bg-black">
        <Hero />
      </div>
      <BrandSample />
      <Testimonial />
    </section>
  );
};

export default page;
