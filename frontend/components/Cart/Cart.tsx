"use client";

import { FC, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
// import { useSession } from "next-auth/react";
import { removeItemFromCart, toggleCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import useCartTotals from "@/hooks/";
// import { getStripe } from "@/libs/loadStripe";
const Cart = () => {
  return <div>Cart</div>;
};

export default Cart;
