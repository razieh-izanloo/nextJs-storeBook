import Image from "next/image";
import { BtnBack } from "@/components/btnBack/btnBack";
import { getDictionary } from "../dictionaries/dictionaries";
import "./not-found.scss";

export async function generateMetadata() {
  const translate = await getDictionary("metaData");
  return {
    title: `NetBook | ${translate.notFound}`,
  };
}

const NotFound = async() => {
    const translate = await getDictionary("notFound");

  return (
    <div id="section-notFound">
      <div id="not-found">
        <object
          type="image/svg+xml"
          data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
        >
          <Image
            src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
            alt="Animated 404 error page showing a cat playing with a ball of yarn"
            fill
          />
        </object>
        <BtnBack title={translate.btnBack} />
      </div>
    </div>
  );
};

export default NotFound;
