import { getDictionary } from "dictionaries/dictionaries";
import Image from "next/image";

export const CategoryCard = async (props: any) => {
  const { category } = props;
  const translate = await getDictionary("category");
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-4 w-11/12 gap-4">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
        <Image
          src={`/images/icons/${category}.svg`}
          width={50}
          height={50}
          alt="category img"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 font-semibold text-lg mb-1 flex gap-2">
          <span>{translate.category}:</span>
          <span>{translate[category]}</span>
        </h3>
        <p className="text-gray-500 text-sm">{translate.viewAll}</p>
      </div>
    </div>
  );
};
