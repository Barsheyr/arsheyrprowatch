import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutLink";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import NavLinks from "./NavLinks";

function LinksDropdown() {
  // const { userId } = auth();
  // const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 bg-white text-black border border-gray-300 shadow-md flex flex-col"
        align="start"
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <div className="clerk-modal-container bg-white text-black">
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {/* Mobile NavLinks (Hidden on Desktop) */}
          <div className="lg:hidden flex flex-col">
            <NavLinks />
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
