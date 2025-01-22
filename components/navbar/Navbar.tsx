import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-black text-gray-300">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-5 gap-4">
        <Logo />

        <div>
          <NavLinks />
        </div>

        <div className="flex gap-4 items-center">
          <CartButton />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
