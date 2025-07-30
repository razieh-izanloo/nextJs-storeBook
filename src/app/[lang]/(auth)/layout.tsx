import { LayoutProps } from "@/types/layout";
import Image from "next/image";
import { FooterAuth } from "./footerAuth";
import "./layout.scss";

export default async function AuthLayout({ children }: LayoutProps) {

  return (
    <div className="container">
      <div className="w-full grid md:grid-cols-4 lg:grid-cols-3 bg-white">
        <div className="hidden md:flex justify-center items-center md:col-span-2 lg:col-span-2">
          <Image
            src="/images/signin-image.jpg"
            alt="store book login"
            width="300"
            height="300"
          />
        </div>
        <div className="section-auth px-4 md:col-span-2 lg:col-span-1">
          <div className="flex justify-center ">
            <Image
              src="/images/logo.png"
              className="my-4"
              alt="bookStore logo"
              width="70"
              height="70"
            />
          </div>
          {children}
          <FooterAuth/>
        </div>
      </div>
    </div>
  );
}
