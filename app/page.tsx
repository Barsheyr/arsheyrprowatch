import React from "react";
import Hero from "@/components/home/Hero";
import BrandSample from "@/components/home/BrandSample";

const page = () => {
  return (
    <section>
      <div className="bg-black">
        <Hero />
      </div>
      <BrandSample />
    </section>
  );
};

export default page;
