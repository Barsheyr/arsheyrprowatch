"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { RootState } from "../../redux/store";

function CartButton() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const { isSignedIn } = useAuth();

  // State to hold cart count after mount
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  useEffect(() => {
    // Update cart count after client mount
    setTotalItemsInCart(
      cartItems.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartItems]);

  return isSignedIn ? (
    <Button asChild variant="outline" size="icon" className="relative">
      <Link href="/cart">
        <div className="relative flex items-center justify-center">
          <LuShoppingCart />
          {totalItemsInCart > 0 && (
            <div className="absolute -top-3 -right-3 bg-primary text-black rounded-full h-6 w-6 flex items-center justify-center text-md bg-white">
              {totalItemsInCart}
            </div>
          )}
        </div>
      </Link>
    </Button>
  ) : (
    <SignInButton mode="modal">
      <Button variant="outline" size="icon" className="relative">
        <div className="relative flex items-center justify-center">
          <LuShoppingCart />
          {totalItemsInCart > 0 && (
            <div className="absolute -top-3 -right-3 bg-primary text-black rounded-full h-6 w-6 flex items-center justify-center text-md bg-white">
              {totalItemsInCart}
            </div>
          )}
        </div>
      </Button>
    </SignInButton>
  );
}

export default CartButton;
