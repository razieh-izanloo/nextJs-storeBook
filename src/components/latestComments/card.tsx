import { CardProps } from "@/types/cardLatestComment";
import Image from "next/image";

export const Card = ({
  fullname,
  date,
  comment,
  title,
  bookTitle,
  bookImage,
  stars,
}: CardProps) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl shadow p-4 bg-white w-[294px] max-w-sm text-[14px]">
      <div>
        <h3 className="text-gray-800 font-normal mb-2">{fullname}</h3>

        <div className="flex items-center justify-between gap-1 mb-2">
          <div className="flex items-center">
            {Array.from({ length: stars }).map((_, i) => (
              <Image
                key={i}
                src="/images/icons/star.svg"
                alt="star"
                width={16}
                height={16}
              />
            ))}
          </div>
          <span className="text-[12px] text-gray-500">{date}</span>
        </div>

        <p className="text-gray-700 mb-3">{comment}</p>

        <div className="text-sm text-gray-500 mb-2">{title}</div>
      </div>

      <div className="flex items-start gap-2 pt-4 border-t border-[#c7ccd1]">
        <div className="w-12 h-20 relative rounded shrink-0">
          <Image src={bookImage} alt="book" fill className="object-cover" />
        </div>
        <span className="text-[12px] text-gray-800">
          {bookTitle}
        </span>
      </div>
    </div>
  );
};
