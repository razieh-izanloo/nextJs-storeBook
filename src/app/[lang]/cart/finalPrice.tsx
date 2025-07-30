import { useDictionary } from "@/hooks/useDictionary";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export const FinalPrice = () => {
  const products = useAppSelector((state) => state.cart.items);
  const { dict, loadingTranslate } = useDictionary("cart");

  const totalPrice = products.reduce(
    (sum, p) => sum + Number(p.price) * p.quantity,
    0
  );

  const discount = Math.floor(totalPrice * 0.2);
  const payable = totalPrice - discount;
  return (
    <div className="sm:w-1/3 bg-white rounded-lg shadow p-6 flex flex-col">
      <h2 className="font-bold mb-6 text-lg">
        {loadingTranslate ? <Skeleton width="25px" /> : dict.shoppingCartTotal}
      </h2>
      <div className="space-y-6 text-gray-700 text-[14px]">
        {loadingTranslate ? (
          <Skeleton width="35px" count={3} />
        ) : (
          [
            {
              icon: "price",
              title: `${dict.productPrices} (${products.length})`,
              value: totalPrice,
            },
            {
              icon: "discount",
              title: `(۲۰٪) ${dict.productDiscounts}`,
              value: discount,
            },
            { icon: "money-bag", title: dict.payableAmount, value: payable },
          ].map((item) => (
            <div className="flex align-center gap-2" key={item.title}>
              <Image
                src={`/images/icons/${item.icon}.svg`}
                width={20}
                height={20}
                alt={item.title}
              />
              <p>
                <span>{item.title}:</span>
                <span className="px-1">
                  {item.value?.toLocaleString()}
                </span>
                  <span>{dict.toman}</span>
              </p>
            </div>
          ))
        )}
      </div>
      <button className="mt-16 w-full bg-[#0fa5a1] cursor-pointer hover:bg-[#0e7e7b] text-white py-3 rounded transition">
        {loadingTranslate ? <Skeleton width="25px" /> : dict.shoppingCartTotal}
      </button>
    </div>
  );
};
