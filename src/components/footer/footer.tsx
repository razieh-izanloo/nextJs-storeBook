import { getCurrentLang } from "@/helpers/language";
import { getDictionary } from "dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { links, socialMedia } from "./itemsFooter";


export const Footer = async () => {
  const currentLang = await getCurrentLang();
  const translate = await getDictionary("footer");

  return (
    <footer className="bg-white text-[#484d52] py-10 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-right">
        <div>
          <Link href={`/${currentLang}/home`}>
            <Image src="/images/logo.png" width={65} height={45} alt="logo" />
          </Link>
          <div className="py-3">
            {["copyRight", "desc"].map((item, index) => (
              <span key={index} className="text-[12px] blok mb-2 block">
                {translate[item]}
              </span>
            ))}
          </div>
          <p>lang</p>
        </div>
        {links.map((itemLink, index) => (
          <div key={index}>
            <h2 className="text-[16px] font-bold mb-3">{itemLink.title}</h2>
            {itemLink.items.map((item, indexItem) => (
              <ul key={indexItem} className="space-y-1 text-sm">
                <li>
                  <Link href={item.url}>{translate[item.text]}</Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
        <div>
          <h2 className="text-[16px] font-bold mb-3">مارا دنبال کنید</h2>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            {socialMedia.map((item, index) => (
              <Link key={index} href={item.href}>
                <Image
                  src={`/images/icons/${item.nameImg}.svg`}
                  width={20}
                  height={20}
                  alt={item.nameImg}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
