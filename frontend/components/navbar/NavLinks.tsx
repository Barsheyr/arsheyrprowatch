import React from "react";
import { links } from "@/utils/links";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const NavLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-3 text-black lg:text-white text-sm">
      {links.map((link) => {
        if (link.label === "cart") {
          return (
            <SignedIn key={link.href}>
              <Link href={link.href} className="capitalize w-full">
                {link.label}
              </Link>
            </SignedIn>
          );
        }

        // Render all other links normally
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
