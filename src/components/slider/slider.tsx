"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./slider.scss";
import Link from "next/link";

const images = [
  { name: "slide1", alt: "img", href: "#" },
  { name: "slide2", alt: "img", href: "#" },
  { name: "slide3", alt: "img", href: "#" },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutIndex = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeoutIndex);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex !== images.length - 1) setCurrentIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (currentIndex !== 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="h-[30vh] sm:h-[40vh] md:h-[60vh] section-slider">
      {images.map((item, index) => {
        if (currentIndex === index)
          return (
            <Link key={item.name} href={item.href}>
              <Image
                key={item.name}
                src={`/images/slider/${item.name}.jpg`}
                alt={item.alt}
                className="slide-img absolute"
                priority
                fill
              />
            </Link>
          );
      })}
      <div className="pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? "active" : ""} item`}
          ></div>
        ))}
      </div>
      <div className="btns-slider">
        <div
          className={`btn ${
            currentIndex === images.length - 1 ? "disable" : ""
          }`}
          onClick={() => nextSlide()}
        >
          <Image
            src="/images/icons/arrow.svg"
            alt="arrow"
            width="15"
            height="15"
          />
        </div>
        <div
          className={`btn ${currentIndex === 0 ? "disable" : ""}`}
          onClick={() => prevSlide()}
        >
          <Image
            src="/images/icons/arrow.svg"
            className="rotate-180"
            alt="arrow"
            width="15"
            height="15"
          />
        </div>
      </div>
    </div>
  );
};
