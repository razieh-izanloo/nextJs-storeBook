import { useDictionary } from "@/hooks/useDictionary";
import { useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";

const items = [
  { name: "home", href: "/home" },
  { name: "publishers", href: "/publishers" },
  { name: "sellers", href: "/sellers" },
  { name: "author", href: "/author" },
];

export const NavItems = () => {
  const lang = useAppSelector((state) => state.app.lang);
  const { dict, loadingTranslate } = useDictionary("home");
  const pathname = usePathname();

  return (
    <div className="nav-items">
      <div className="flex flex-col md:flex-row space-x-4 md:px-2">
        {items.map((item) =>
          loadingTranslate ? (
            <Skeleton width="100px" key={item.name} />
          ) : (
            <a
              key={item.name}
              href={`/${lang}/${item.href}`}
              className={`${
                pathname.includes(item.href)
                  ? "text-[#615b5b]"
                  : "text-[#787e84]"
              }  px-3 py-2 text-sm font-medium`}
            >
              {dict[item.name]}
            </a>
          )
        )}
      </div>
    </div>
  );
};
