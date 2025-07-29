"use client";
import { useDictionary } from "@/hooks/useDictionary";
import { TableProps } from "@/types/product";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

export const Table = (props: TableProps) => {
  const { dataTable } = props;
  const [activeTab, setActiveTab] = useState("info");
  const { dict, loadingTranslate } = useDictionary("product");

  return (
    <div className="w-11/12 mx-auto p-6 bg-white rounded-md shadow-sm my-5 text-[14px]">
      <div className="flex border-b border-gray-300 mb-6">
        {[
          { title: "bookSpecifications", name: "info" },
          { title: "users'Opinion", name: "reviews" },
        ].map((item) => (
          <button
            onClick={() => setActiveTab(item.name)}
            className={`text-sm font-semibold pb-2 px-4 ${
              activeTab === item.name
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-500 cursor-pointer"
            }`}
            disabled={activeTab === item.name}
            key={item.name}
          >
            {loadingTranslate ? <Skeleton width="30px" /> : dict[item.title]}
          </button>
        ))}
      </div>

      {activeTab === "info" && (
        <table className="w-full border-separate border-spacing-y-2 border-spacing-x-0">
          <tbody>
            {Object.entries(dataTable).map(([key, value], index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : ""
                } border-b-gray-100`}
                key={index}
              >
                <td className="px-4 py-2 text-gray-600 w-1/3">
                  {loadingTranslate ? <Skeleton width="30px" /> : dict[key]}
                </td>
                <td
                  className={`px-4 py-2 ${
                    index % 2 === 0
                      ? "text-teal-600 cursor-pointer hover:underline"
                      : ""
                  }`}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === "reviews" && (
        <div className="text-gray-600 text-center py-10">
          هنوز دیدگاهی ثبت نشده است.
        </div>
      )}
    </div>
  );
};
