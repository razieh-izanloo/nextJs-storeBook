import { getDictionary } from "dictionaries/dictionaries";
import { CardProps } from "@/types/cardLatestComment";
import { Card } from "./card";
import "./latestComments.scss";

export const LatestComments = async () => {
  let data: [];
  const response = await fetch("http://localhost:3000/api/latestComments");
  const res = await response.json();
  if (res?.data) data = res.data;
  else return null;

  const t = await getDictionary("latestComments");

  return (
    data && (
      <>
        <h3 className="my-3 px-2 px-lg-0">آخرین نظرات</h3>
        <div className="flex justify-center md:justify-start md:px-2">
          <div className="grid sm:grid-cols-2 gap-4 mb-3 justify-center lg:justify-start latestComments">
            {data.map((item: CardProps, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </>
    )
  );
};
