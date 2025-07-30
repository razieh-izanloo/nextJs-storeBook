"use client";
import Image from "next/image";
import Link from "next/link";
import { CartAction } from "./cartAction";
import { DetailProps } from "@/types/product";

export const Detail = (props: DetailProps) => {
  const { id, title, autor, desc, srcImg, price } = props.data;

  return (
    <div className="flex flex-col items-center sm:flex-row bg-white rounded-lg shadow-md p-6 w-11/12 mx-auto gap-6">
      <div className="flex-shrink-0 w-48">
        <Image
          src={srcImg}
          alt={title}
          className="w-full h-auto rounded-md object-cover"
          loading="lazy"
          width={156}
          height={239}
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div className="flex flex-col gap-3">
          <h2 className="text-[14px] sm:text-lg font-semibold leading-relaxed">
            {title}
          </h2>

          <div className="flex gap-2 text-sm text-blue-600 mt-2">
            <Link href="#" className="hover:underline">
              {autor}
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">{desc}</p>
        </div>

        <div className="mt-4 sm:flex justify-end gap-4 items-center">
          <CartAction data={props.data} />

          <p className="text-right text-gray-700 text-sm whitespace-nowrap">
            <span className="font-bold text-sm text-black">{price}</span>
            <span>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};
