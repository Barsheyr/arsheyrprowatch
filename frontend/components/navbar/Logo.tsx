import React from "react";
import Link from "next/link";
import { BiSolidWatchAlt } from "react-icons/bi";

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-white flex items-center">
        {/* <Image src={logo} alt="hero" className="" /> */}
        <BiSolidWatchAlt size={30} />
        <p className=""> Adisa Alago </p>
      </div>
    </Link>
  );
};

export default Logo;
