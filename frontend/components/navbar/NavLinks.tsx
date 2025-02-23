import React from "react";
import { links } from "@/utils/links";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="flex items-center justify-between text-white gap-5 text-sm">
      {links.map((link) => {
        return (
          <div key={link.href}>
            <Link href={link.href} className="capitalize w-full">
              {link.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
