"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/global/SectionTitle";
import CartItemsList from "../../components/Cart/CartItemsList";
import CartTotals from "../../components/Cart/CartTotals";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks"; // Import useAppDispatch
import { removeItemFromCart } from "../../redux/features/cartSlice"; // Import the removeItemFromCart action
import { Watch, WatchSubset } from "@/models/watch";

function CartPage() {
  const dispatch = useAppDispatch(); // Initialize dispatch

  const { cartItems } = useAppSelector((state) => state.cart);

  // Convert Watch[] to WatchSubset[] for proper formatting
  const formattedCartItems: WatchSubset[] = cartItems.map((item: Watch) => ({
    _id: item._id,
    price: item.price,
    quantity: item.quantity,
    images: item.images,
    name: item.name,
    maxQuantity: 10, // Default maxQuantity value
  }));

  // The removeItem function will dispatch the removeItemFromCart action
  const removeItem = (id: string) => {
    dispatch(removeItemFromCart({ _id: id })); // Dispatch the action with item id
  };

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
            <CartItemsList
              cartItems={formattedCartItems}
              removeItem={removeItem}
            />
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
