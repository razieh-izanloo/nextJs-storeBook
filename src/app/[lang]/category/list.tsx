"use client";

import { useState, useMemo } from "react";
import { ProductProps } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";

type ListProps = {
  data: ProductProps[];
  lang: string;
};

export const List = ({ data, lang }: ListProps) => {
  const [search, setSearch] = useState("");
  const { dict, loadingTranslate } = useDictionary("category");

  const filteredData = useMemo(() => {
    if (!search) return data;
    const lowerSearch = search.toLowerCase();
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerSearch) ||
        item.desc.toLowerCase().includes(lowerSearch)
    );
  }, [search, data]);

  return (
    <div className="h-screen overflow-hidden flex flex-col w-11/12 bg-white my-4">
      <div className="p-4">
        <input
          type="text"
          placeholder={loadingTranslate ? "..." : dict.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {filteredData.length ? (
          filteredData.map((item, i) => (
            <Link
              href={`/${lang}/product/${item.id}`}
              key={i}
              className="flex items-center border-b border-gray-300 py-2 gap-3"
            >
              <Image
                src={item.srcImg}
                alt={item.title}
                className="object-cover"
                width={92}
                height={133}
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold sm:w-10/12">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{item.price} <span>{dict.toman}</span></p>
              </div>
              <button className="p-2 w-6 h-6 text-gray-400 hover:text-red-500">
                ♥
              </button>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">{dict.doesNotExist}</p>
        )}
      </div>
    </div>
  );
};
