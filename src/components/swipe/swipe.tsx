"use client";
import { useRef, useEffect, ReactNode } from "react";
import { useAppSelector } from "@/redux/hooks";
import "./swipe.scss";

type Props = {
  children: ReactNode;
  autoScroll?: boolean;
};

export const Swipe = ({ children, autoScroll = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const dir = useAppSelector((state) => state.app.dir);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("dragging");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseUp);
    el.addEventListener("mouseup", onMouseUp);

    let interval: NodeJS.Timeout | null = null;

    interval = setInterval(() => {
      if (!el) return;

      const scrollAmount = 100;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      if (dir === "rtl") {
        if (Math.abs(el.scrollLeft) >= maxScrollLeft) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft -= scrollAmount;
        }
      } else {
        if (el.scrollLeft >= maxScrollLeft) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += scrollAmount;
        }
      }
    }, 5000);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseUp);
      el.removeEventListener("mouseup", onMouseUp);
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, dir]);

  return (
    <div ref={ref} className="swipe-container px-2 px-lg-0">
      {children}
    </div>
  );
};
