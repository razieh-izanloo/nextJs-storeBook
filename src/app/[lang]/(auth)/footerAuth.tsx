import Link from "next/link";
import { getDictionary } from "../../../dictionaries/dictionaries";
import { headers } from "next/headers";

export const FooterAuth = async () => {
  const translate = await getDictionary("auth");
  const headerList = headers();
  const pathname = (await headerList).get("x-current-path")?.split("/");
  const lang = (await headerList).get("x-current-lang");
  const validPath =
    pathname?.[pathname?.length - 1] === "signin" ? "signup" : "signin";

    return (
    <div className="flex flex-col items-end text-end gap-3 py-3">
      {pathname?.[pathname?.length - 1] === "signin" && (
        <Link
          href={`${lang}/forgetpass`}
          className="text-[#1c7acb] text-[15px] w-fit"
        >
          {translate.forget}
        </Link>
      )}
      <Link href={`${lang}/${validPath}`} className="text-[15px] w-fit">
        {translate[validPath]}
      </Link>
    </div>
  );
};
