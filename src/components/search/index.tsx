"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useDictionary } from "@/hooks/useDictionary";
import { Suggestions } from "./suggestions";
import "./search.scss";

export const Search = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const lang = useAppSelector((state) => state.app.lang);
  const { dict, loadingTranslate } = useDictionary(lang, "search");

  const handleSelect = (text: string) => {
    const encoded = encodeURIComponent(text);
    router.push(`/search/${encoded}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      handleSelect(query.trim());
    }
  };

  return (
    <div className="section-search">
      <Image
        src="/images/icons/search.svg"
        className="img-search"
        alt="book search"
        width={22}
        height={32}
      />
      <input
        type="text"
        name="search"
        placeholder={loadingTranslate ? "..." : dict.placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {query && (
        <Image
          src="/images/icons/close.svg"
          width="14"
          height="14"
          alt="clear the search term"
          className="btn-close"
          onClick={() => setQuery("")}
        />
      )}
      <Suggestions query={query} handleSelect={handleSelect} />
    </div>
  );
};
