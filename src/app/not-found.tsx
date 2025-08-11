import Image from "next/image";
import { BtnBack } from "@/components/btnBack/btnBack";
import "./not-found.scss";

const NotFound = () => {
  return (
    <div id="section-notFound">
      <div id="not-found">
        <object
          type="image/svg+xml"
          data="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
        >
          <Image
            src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg"
            alt="Kitty Yarn Play 404 page animation - Made by SVGator"
            fill
          />
        </object>
        <BtnBack title="Go back" />
      </div>
    </div>
  );
};

export default NotFound;
