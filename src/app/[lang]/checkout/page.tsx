"use client";
import { Input } from "@/components/input/input";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateApp } from "@/redux/slices/app";
import { useRouter } from "next/navigation";
import { useDictionary } from "@/hooks/useDictionary";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import Link from "next/link";
import "./page.scss";

const CheckoutPage = () => {
  const [values, setValues] = useState({
    address: "",
    contactNumber: "",
    postalCode: "",
    recipientName: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentLang = useAppSelector((state) => state.app.lang);
  const cartItems = useAppSelector((state) => state.cart.items);

  const [cartLoaded, setCartLoaded] = useState(false);

  useEffect(() => {
    setCartLoaded(true);
  }, []);

  useEffect(() => {
    if (cartLoaded && cartItems.length === 0) {
      router.push(`/${currentLang}/cart`);
    }
  }, [cartLoaded, cartItems]);

  const { dict, loadingTranslate } = useDictionary("checkout");

  function checkform(e: React.MouseEvent<HTMLAnchorElement>) {
    const isEmpty = Object.values(values).find((item) => item.length === 0);

    if (isEmpty) {
      e.preventDefault();
      dispatch(
        updateApp({
          errorMessage: { text: "Please fill in the fields", type: "warning" },
        })
      );
    }
  }

  return (
    <div className="container">
      <div className="w-full grid md:grid-cols-4 lg:grid-cols-3">
        <div className="hidden md:flex justify-center items-center md:col-span-2 lg:col-span-2">
          <Image
            src="/images/woman.png"
            alt="store book login"
            width="300"
            height="300"
          />
        </div>
        <div className="section-checkout px-4 md:col-span-2 lg:col-span-1">
          <div className="flex justify-center ">
            <Image
              src="/images/logo.png"
              className="my-4"
              alt="bookStore logo"
              width="70"
              height="70"
            />
          </div>

          <div>
            <div className="mb-6">
              {loadingTranslate ? (
                <Skeleton width="100px" />
              ) : (
                <>
                  <h1 className="font-bold text-xl text-center">
                    {dict.signin}
                  </h1>
                  <p className="text-gray-500 text-[15px]">
                    {dict.completeForm}
                  </p>
                </>
              )}
            </div>

            <Input
              type="text"
              title={dict?.recipientName}
              loading={loadingTranslate}
              name="text"
              onChange={(value: string) =>
                setValues((prev) => ({ ...prev, address: value }))
              }
            />
            <Input
              type="text"
              title={dict?.address}
              loading={loadingTranslate}
              name="address"
              onChange={(value: string) =>
                setValues((prev) => ({ ...prev, address: value }))
              }
            />
            <Input
              type="number"
              title={dict?.postalCode}
              loading={loadingTranslate}
              name="postalCode"
              onChange={(value: string) =>
                setValues((prev) => ({ ...prev, postalCode: value }))
              }
            />
            <Input
              type="number"
              title={dict?.contactNumber}
              loading={loadingTranslate}
              name="contactNumber"
              onChange={(value: string) =>
                setValues((prev) => ({ ...prev, contactNumber: value }))
              }
            />

            <Link onClick={(e) => checkform(e)} href="" className="payment">
              {loadingTranslate ? <Skeleton width="100px" /> : dict.payment}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
