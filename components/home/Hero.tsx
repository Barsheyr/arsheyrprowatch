import React from "react";
import Container from "../global/Container";
import HeroImg from "@/public/images/heroImg.jpg";
import HeroImg2 from "@/public/images/heroImg2.svg";
import HeroImage from "@/public/images/heroimg.svg";
import HeroSearch from "./HeroSearch";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className="py-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 text-white items-center">
        <div className="space-y-12 pr-20">
          <h1 className="text-6xl font-bold">
            Discover <br /> Most Suitable Watches
          </h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>

          <HeroSearch />
        </div>

        <Image src={HeroImage} alt="HeroImg" className="rounded-2xl" />
      </div>
    </Container>
  );
};

export default Hero;
