"use server";

import Link from "next/link";
import "./category.scss";
import Image from "next/image";
import { Swipe } from "@/components/swipe/swipe";
import { getDictionary } from "dictionaries/dictionaries";
import { headers } from "next/headers";

export const Category = async () => {
  let categories: [];
  const response = await fetch("http://localhost:3000/api/category");
  const data = await response.json();
  if (data?.data) categories = data.data;
  else return null;

  const t = await getDictionary("category");
  const lang = (await headers()).get("x-current-lang");

  return categories &&
      <div className="section-category px-2 px-lg-0">
    <Swipe>
          {categories.map((item: { name: string }, index) => (
            <Link
              className="link-category"
              href={{ pathname: `/${lang}/category`, query: { category: item.name } }}
              key={index}
            >
              <Image
                src={`/images/icons/${item.name}.svg`}
                width="30"
                height="30"
                alt=""
              />
              {t[item.name]}
            </Link>
    ))}
    </Swipe>        
    </div>
  
};
