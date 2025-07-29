"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cart";
import { useState } from "react";

export const CartAction = ({ product }: any) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: count }));
  };

  const btnAction = (operator: string) => {
    return (
      <button
        onClick={() =>
          setCount((c) => (operator === "-" ? Math.max(1, c - 1) : c + 1))
        }
        className="border border-gray-400 text-gray-500 rounded-[3px] px-2 cursor-pointer"
      >
        {operator}
      </button>
    );
  };

  return (
    <div className="flex items-center gap-2">
      {btnAction("-")}
      <span>{count}</span>
      {btnAction("+")}
      <button
        onClick={handleAdd}
        className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded text-sm cursor-pointer"
      >
        افزودن به سبد
      </button>
    </div>
  );
};
