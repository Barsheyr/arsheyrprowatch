import React from "react";
import Brand1 from "@/public/images/brand1.svg";
import Brand2 from "@/public/images/brand2.svg";
import Brand3 from "@/public/images/brand3.svg";
import HeroPic1 from "@/public/images/heropic1.jpg";
import HeroPic2 from "@/public/images/heropic2.jpg";
import HeroPic3 from "@/public/images/heropic3.jpg";
import Image from "next/image";
import Container from "../global/Container";

const BrandSample = () => {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-gray-200 p-10 flex items-center justify-between gap-10 rounded-xl shadow-md">
          <Image src={Brand1} alt="Brand1" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold"> Apple </h1>
            <p className="text-sm text-gray-400">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-10 flex items-center justify-between gap-10 rounded-xl shadow-md">
          <Image src={Brand2} alt="Brand1" />
          <div>
            <h1 className="text-2xl font-bold"> Xiaomi </h1>
            <p className="text-sm text-gray-400">
              Xiaomi smart watches are produced by MI company.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-10 flex items-center justify-between gap-10 rounded-xl shadow-md">
          <Image src={Brand3} alt="Brand1" />
          <div>
            <h1 className="text-2xl font-bold"> Fitbit </h1>
            <p className="text-sm text-gray-400">
              FitBit smart watches are best for there health and fitness
              features.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-center justify-center gap-10 py-10">
        <div className="flex -space-x-5 border-2 border-blue-200 rounded-full">
          <Image src={HeroPic1} alt="" className="mix-blend-multiply" />
          <Image src={HeroPic2} alt="" className="mix-blend-multiply" />
          <Image src={HeroPic3} alt="" className="mix-blend-multiply" />
        </div>
        <h4 className="font-semibold text-black">
          <span className="font-bold"> 430+ </span> Happy Customers
        </h4>
      </div>
    </Container>
  );
};

export default BrandSample;
