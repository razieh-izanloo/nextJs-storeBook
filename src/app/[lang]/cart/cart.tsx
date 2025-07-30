"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/cart";
import Image from "next/image";
import Link from "next/link";
import { FinalPrice } from "./finalPrice";
import { useDictionary } from "@/hooks/useDictionary";
import Skeleton from "react-loading-skeleton";
import { Products } from "./products";

export const Cart = () => {
  const products = useAppSelector((state) => state.cart.items);
  const { dict, loadingTranslate } = useDictionary("cart");

  return (
    <div className="flex flex-col sm:flex-row min-h-screen p-6 bg-gray-100 gap-6">
      <FinalPrice />

      <div className="flex-1 bg-white rounded-lg shadow p-6 overflow-auto">
        {loadingTranslate ? (
          <Skeleton width="35px" count={2} />
        ) : (
          <>
            <h2 className="font-bold text-lg mb-6">{dict.shoppingCart}</h2>
            <p className="mb-4 text-gray-600">
              <span>{dict.inYourShoppingCart}</span>
              <span className="px-1">{products.length}</span>
              <span>{dict.itemIsAvailable}</span>
            </p>
          </>
        )}
        <Products />
      </div>
    </div>
  );
};
