"use client";
import { INFO_LANGS, support_langs } from "@/helpers/constants";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = useAppSelector((state) => state.app.lang);
  const pathname = usePathname();

  const updateUrl = (lang: string) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  const selectLanguage = () => {
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (isOpen) {
  //       const handleClickOutside = (event: MouseEvent) => {
  //         if (
  //           dropdownRef.current &&
  //           !dropdownRef.current.contains(event.target as Node)
  //         ) {
  //           setIsOpen(false);
  //         }
  //       };

  //       document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  //     }
  //   }, [isOpen]);

  return (
    <div className="relative inline-block text-start w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center cursor-pointer gap-2 px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-50"
      >
        <Image src={`/images/flags/fa.svg`} alt={""} width={24} height={24} />
        <span>{INFO_LANGS[currentLang].label}</span>
        <Image
          src="/images/icons/arrow.svg"
          alt="change language"
          width={10}
          height={10}
          className="rotate-90"
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 bottom-10 rounded-md shadow-lg"
        >
          {support_langs.map((lang) => (
            <Link
              href={updateUrl(lang)}
              key={lang}
              onClick={() => selectLanguage()}
              className={`w-full px-4 py-2 text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-100
                 ${lang === currentLang ? "bg-gray-100" : ""}`}
            >
              <Image
                src={`/images/flags/${lang}.svg`}
                alt={""}
                width={24}
                height={24}
              />

              {INFO_LANGS[lang].label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
