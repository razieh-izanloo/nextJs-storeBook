import Image from "next/image";
import { BtnBack } from "@/components/btnBack/btnBack";
import "./not-found.scss";

const NotFound = () => {
  return (
    <div id="section-notFound">
      <div id="not-found">
        <Image
          src="/images/404.png"
          className="max-w-full"
          width={500}
          height={400}
          alt="404"
        />
        <BtnBack title="Go back" />
      </div>
    </div>
  );
};

export default NotFound;
