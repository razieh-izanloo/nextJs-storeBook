"use server";

import Link from "next/link";
import Image from "next/image";
import { Swipe } from "@/components/swipe/swipe";
import { getCurrentLang } from "@/helpers/language";
import { slugify } from "@/helpers/slugify";
import { getDictionary } from "dictionaries/dictionaries";
import "./salesOfWeek.scss";

export const SalesOfWeek = async () => {
  let data: [];
  const response = await fetch("http://localhost:3000/api/salesOfWeek", {
    next: { revalidate: 60 * 60 * 24 * 7 }, // 7 day
  });
  const res = await response.json();
  if (res?.data) data = res.data;
  else return null;

  const currentLang = await getCurrentLang();
  const translate = await getDictionary("salesOfWeek");

  return (
    <div className="section-salesOfWeek">
      <span className="block mb-3 px-2 px-lg-0">{translate.title}</span>
      <Swipe autoScroll>
        {data &&
          data.map((item: { [key: string]: string }, index) => (
            <Link
              className="link-salesOfWeek"
              href={{
                pathname: `/${currentLang}/product/${item.id}}`,
              }}
              key={index}
            >
              <span className="img-book">
                <Image src={item.srcImg} fill alt="" className="object-cover" />
              </span>
              <span>
                <span className="truncate max-w-full">{item.title}</span>
                <span className="truncate max-w-full">{item.desc}</span>
              </span>
            </Link>
          ))}
      </Swipe>
    </div>
  );
};
