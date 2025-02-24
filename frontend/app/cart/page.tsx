// "use client";

// import React from "react";
// import SectionTitle from "@/components/global/SectionTitle";
// import CartItemsList from "../../components/Cart/CartItemsList";
// import CartTotals from "../../components/Cart/CartTotals";
// import { useAppSelector } from "../../hooks/storeHooks";
// import { Watch, WatchSubset } from "@/models/watch";

// function CartPage() {
//   const { cartItems } = useAppSelector((state) => state.cart);

//   const formattedCartItems: WatchSubset[] = cartItems.map((item: Watch) => ({
//     _id: item._id,
//     price: item.price,
//     quantity: item.quantity,
//     images: item.images,
//     name: item.name,
//     maxQuantity: 10,
//   }));

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <SectionTitle text="Your cart is empty" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto py-20">
//         <SectionTitle text="Shopping Cart" />
//         <div className="mt-8 grid gap-4 lg:grid-cols-12">
//           <div className="lg:col-span-8">
//             <CartItemsList cartItems={formattedCartItems} />
//           </div>
//           <div className="lg:col-span-4 lg:pl-4">
//             <CartTotals cartItems={cartItems} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

"use client";

import React from "react";
import SectionTitle from "@/components/global/SectionTitle";
import CartItemsList from "../../components/Cart/CartItemsList";
import CartTotals from "../../components/Cart/CartTotals";
import { useAppSelector } from "../../hooks/storeHooks";
import { Watch, WatchSubset } from "@/models/watch";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

function CartPage() {
  const { cartItems } = useAppSelector((state) => state.cart);

  const formattedCartItems: WatchSubset[] = cartItems.map((item: Watch) => ({
    _id: item._id,
    price: item.price,
    quantity: item.quantity,
    images: item.images,
    name: item.name,
    maxQuantity: 10,
  }));

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <SectionTitle text="Your cart is empty" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-20 lg:px-0">
        <SectionTitle text="Shopping Cart" />
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          {/* Cart Items List */}
          <div className="lg:col-span-8">
            <CartItemsList cartItems={formattedCartItems} />
          </div>

          {/* Cart Totals + Authentication Logic */}
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals cartItems={cartItems} />

            {/* If user is signed in, show checkout button */}
            <SignedIn>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded">
                Proceed to Checkout
              </button>
            </SignedIn>

            {/* If user is signed out, show sign-in button */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded">
                  Sign In to Checkout
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
