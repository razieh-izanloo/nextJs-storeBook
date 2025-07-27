"use server";

import Link from "next/link";
import "./category.scss";
import Image from "next/image";
import { Swipe } from "@/components/swipe/swipe";
import { getDictionary } from "dictionaries/dictionaries";

export const Category = async () => {
  let categories: [];
  const response = await fetch("http://localhost:3000/api/category");
  const data = await response.json();
  if (data?.data) categories = data.data;
  else return null;

  const t = await getDictionary("category");

  return (
    <Swipe>
      <div className="section-category">
        {categories &&
          categories.map((item: { name: string }, index) => (
            <Link
              className="link-category"
              href={{ pathname: "/subjects", query: { subject: item.name } }}
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
      </div>
    </Swipe>
  );
};
