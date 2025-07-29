import { useDictionary } from "@/hooks/useDictionary";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

export const NavbarActions = () => {
  const lang = useAppSelector((state) => state.app.lang);
  const { dict, loadingTranslate } = useDictionary("home");

  return (
    <div className="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto px-2 md:px-0">
      <Link
        className="text-[#0fa5a1] text-[14px] hover:bg-[#f6fcfb] md:p-3 hover:rounded-[4px]"
        href={`/${lang}/signin`}
      >
        {loadingTranslate ? <Skeleton width="50px"/> : 
        <>{dict.signin}/{dict.signup}</>
        }
      </Link>

      <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
      >
        <Link
          href={`/${lang}/basket`}
          className="block hover:bg-[#f5f5f5] md:p-1.5 rounded-4xl"
        >
          <Image
            src="/images/icons/basket.svg"
            width="24"
            height="24"
            alt="Shopping cart in a bookstore"
          />
        </Link>
      </button>
    </div>
  );
};
