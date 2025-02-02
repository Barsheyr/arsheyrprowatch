"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="py-20 overflow-hidden">
      <div data-aos="fade-up">
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
          ADISA
          <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
            ALAGO
          </span>
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground lg:px-0 px-10">
          Welcome to Adisa Alago, where timeless craftsmanship meets
          contemporary style. At WatchPro, we believe a watch is more than just
          a timekeeping device—it’s a statement of individuality, an embodiment
          of personal milestones, and a celebration of the art of precision. Our
          mission is to provide watch enthusiasts and fashion-forward
          individuals with a curated collection of premium timepieces that
          seamlessly blend functionality, design, and sophistication.
        </p>
      </div>
      <div data-aos="fade-right">
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl mt-20">
          What we offer
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground lg:px-0 px-10">
          Our online store features an extensive selection of watches for men,
          women, and children, catering to a wide range of preferences and
          lifestyles. Whether you’re looking for: Luxury watches for special
          occasions Smartwatches to keep up with modern technology Sporty
          designs for active lifestyles Classic timepieces for everyday elegance
          We’ve got you covered. Our collection also includes eco-friendly and
          sustainable options for those who prioritize ethical shopping without
          compromising on style.
        </p>
      </div>
      <div data-aos="fade-left">
        <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl mt-20">
          Our Vision
        </h1>
        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground lg:px-0 px-10">
          At Adisa Alago, we are more than just a retailer; we are a community
          of watch lovers who value craftsmanship, innovation, and personal
          expression. As we continue to grow, our vision remains clear: to be a
          global leader in the e-commerce watch industry, providing our
          customers with unparalleled quality, choice, and service. Thank you
          for choosing WatchPro Store. Let’s celebrate every moment, one
          timeless piece at a time.
        </p>
      </div>
    </section>
  );
}
export default AboutPage;
