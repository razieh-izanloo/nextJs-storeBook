import { getDictionary } from "dictionaries/dictionaries";
import Image from "next/image";

const features = [
  { title: "bookCollection", nameImg: "buy-delivery-discount" },
  { title: "directPurchase", nameImg: "money" },
  { title: "subsidizedPrices", nameImg: "arrow-down-up" },
  { title: "nationwideShipping", nameImg: "book-open-bg" },
];

export const StoreFeatures = async () => {
  const translate = await getDictionary("storeFeatures");

  return (
    <div className="px-2 md:px-0">
      <div className="bg-white grid grid-cols-2 gap-3 sm:gap-0 sm:grid-cols-4 p-6 rounded-[8px] my-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center sm:${
              index !== features.length - 1 ? "border-l border-l-slate-400" : ""
            }`}
          >
            <Image
              src={`/images/icons/${item.nameImg}.svg`}
              alt="feature store"
              width={50}
              height={50}
            />
            <span className="block mt-2 text-[#737377] text-[14px]">
              {translate[item.title]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
