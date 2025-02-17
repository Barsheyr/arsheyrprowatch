"use client";

import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import { RootState } from "../../redux/store"; // Import RootState for better type inference

function CartButton() {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // Calculate the total number of items in the cart
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        {/* Only show the cart item count if there are items in the cart */}
        {totalItemsInCart > 0 && (
          <span className="absolute -top-3 -right-3 bg-primary text-black rounded-full h-6 w-6 flex items-center justify-center text-md bg-white">
            {totalItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
}

export default CartButton;
