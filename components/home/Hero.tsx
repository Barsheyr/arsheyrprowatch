import React from "react";
import Container from "../global/Container";
import HeroImage from "@/public/images/heroimg.svg";
import HeroSearch from "./HeroSearch";
import Image from "next/image";
import Badge from "./Badge";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownLine,
} from "react-icons/ri";

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
        <div className="hidden xl:flex relative">
          {/* badge 1*/}
          <Badge
            containerStyles="absolute top-[24%] -left-[5rem]"
            icon={<RiBriefcase4Fill />}
            endCountNum={3}
            badgeText="rd Best Seller"
          />
          {/* badge 2 */}
          <Badge
            containerStyles="absolute top-[80%] -left-[1rem]"
            icon={<RiTodoFill />}
            endCountNum={6}
            endCountText="k"
            badgeText="Watch Sold"
          />
          {/* badge 3 */}
          <Badge
            containerStyles="absolute top-[45%] -right-[1rem]"
            icon={<RiTeamFill />}
            endCountNum={2}
            endCountText="k"
            badgeText="Happy Clients"
          />
          <Image src={HeroImage} alt="HeroImg" className="rounded-2xl" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
