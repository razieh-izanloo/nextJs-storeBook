import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/cart";

export const Products = () => {
  const products = useAppSelector((state) => state.cart.items);
  const { dict, loadingTranslate } = useDictionary("cart");
  const lang = useAppSelector((state) => state.app.lang);
  const dispatch = useAppDispatch();
  if (!products.length) return null;

  return (
    <div className="space-y-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="border border-gray-400 rounded p-2 sm:p-4 flex items-end justify-between"
        >
          <Link
            href={`/${lang}/product/${product.id}`}
            className="flex gap-4  items-center"
          >
            <Image
              width={80}
              height={96}
              src={product.srcImg}
              alt={product.title}
              className="object-cover rounded"
            />
            <span className="flex flex-col flex-1 text-[12px] sm:text-[14px] text-gray-600">
              <h3 className="font-semibold text-gray-800">{product.title}</h3>
              {loadingTranslate ? (
                <Skeleton count={2} width="35px" />
              ) : (
                <>
                  <p>
                    {dict.count}: {product.quantity}
                  </p>
                  <p>
                    {dict.price}: {product.price?.toLocaleString()} {dict.toman}
                  </p>
                </>
              )}
            </span>
          </Link>
          <Image
            src="/images/icons/delete.svg"
            onClick={() => dispatch(removeFromCart(product.id))}
            width={20}
            height={24}
            alt="delete"
            className="cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
