import { getDictionary } from "dictionaries/dictionaries";
import { Card } from "./card";
import { CardProps } from "@/types/cardLatestComment";

export const LatestComments = async () => {
  let data: [];
  const response = await fetch("http://localhost:3000/api/latestComments");
  const res = await response.json();
  if (res?.data) data = res.data;
  else return null;

  const t = await getDictionary("latestComments");

  return (
    data && (
      <div className="flex gap-4 px-4 py-6">
        {data.map((item: CardProps, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    )
  );
};
