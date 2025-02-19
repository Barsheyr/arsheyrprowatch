"use client";

import React from "react";
import SectionTitle from "@/components/global/SectionTitle";
import CartItemsList from "../../components/Cart/CartItemsList";
import CartTotals from "../../components/Cart/CartTotals";
import { useAppSelector } from "../../hooks/storeHooks";
import { Watch, WatchSubset } from "@/models/watch";

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
      <div className="max-w-7xl mx-auto py-20">
        <SectionTitle text="Shopping Cart" />
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartItemsList cartItems={formattedCartItems} />
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <CartTotals cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
