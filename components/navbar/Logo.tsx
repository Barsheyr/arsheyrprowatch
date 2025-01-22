import React from "react";
// import logo from "@/public/images/logo.jpg";
// import Image from "next/image";
import { BiSolidWatchAlt } from "react-icons/bi";

const Logo = () => {
  return (
    <div className="text-white flex items-center">
      {/* <Image src={logo} alt="hero" className="" /> */}
      <BiSolidWatchAlt size={30} />
      <p className=""> Adisa Alago </p>
    </div>
  );
};

export default Logo;
