"use client";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useState } from "react";
import { NavItems } from "./navItems";
import { NavbarActions } from "./navbarActions";
import "./navbar.scss";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white mx-auto max-w-7xl md:px-6 lg:px-8 md:gap-2">
      <div
        className={`${
          mobileMenuOpen ? "open" : ""
        } relative flex flex-col md:flex-row h-16 items-center justify-center  md:justify-between`}
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center justify-center px-2 md:px-0 rounded-md absolute inset-y-0 left-0 cursor-pointer md:hidden"
        >
          <Image
            src={`/images/icons/${mobileMenuOpen ? "close" : "hamburger"}.svg`}
            width="24"
            height="24"
            alt="menu"
          />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-start w-full md:w-fit">
          <div className="flex shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="/images/logo.png"
              alt="Your Company"
            />
          </div>
          <NavItems />
        </div>

       <NavbarActions/>
      </div>
    </nav>
  );
};
