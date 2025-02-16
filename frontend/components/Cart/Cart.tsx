"use client";

import { FC, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
// import { useSession } from "next-auth/react";
import { removeItemFromCart, toggleCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import useCartTotals from "@/hooks/useCartTotals";
// import { getStripe } from "@/libs/loadStripe";
const Cart: FC = () => {
  const { showCart, cartItems } = useAppSelector((state) => state.cart);
  const [renderComponent, setRenderComponent] = useState(false);

  const { totalPrice } = useCartTotals();

  const { data: session } = useSession();

  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) =>
    dispatch(removeItemFromCart({ _id: id }));

  const checkoutHandler = async () => {
    const stripe = await getStripe();

    const { data } = await axios.post("/api/stripe", {
      cartItems,
      userEmail: session?.user?.email,
    });

    if (!data) return;

    localStorage.removeItem("cart");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;
  return (
    <div>
      <div
        className={`${"flex items-center py-2 border-b"} ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-2 bg-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => dispatch(toggleCart())}
          >
            X
          </button>
        </div>

        <div className="p-4 flex flex-col items-center border-b">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center py-2 border-b">
                <Image
                  width={100}
                  height={100}
                  src={item.images[0].url}
                  alt={item.name}
                  className="w-12 h-12 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-medium">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">$ {item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="w-6 h-6 bg-gray-200 text-gray-600 flex items-center justify-center rounded ml-2"
                  >
                    <RiCloseLine />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>

        <div className="px-4 py-2 bg-gray-200 flex items-center justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">$ {totalPrice}</span>
        </div>
        <button
          onClick={checkoutHandler}
          className="w-full py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
