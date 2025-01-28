import React from "react";
import Container from "../global/Container";
import { FiSearch } from "react-icons/fi";
import newsleteter from "@/public/images/newsletter.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-row items-center justify-between py-10 px-20 bg-gray-100">
        <div>
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold">Subscribe To Newsletter</h1>
            <p className="text-gray-400">
              Get free guide about smart watches daily
            </p>
          </div>

          <div className="flex items-center text-white mt-5">
            <div className="flex items-center bg-white rounded-full shadow-md w-[400px] p-2">
              <FiSearch className="text-gray-400 ml-3" size={20} />
              <input
                type="text"
                placeholder="Find the best brands"
                className="flex-1 bg-transparent focus:outline-none px-3 text-gray-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          <div></div>
        </div>

        <Image src={newsleteter} alt="newsletter-pic" />
      </div>
    </Container>
  );
};

export default Newsletter;
