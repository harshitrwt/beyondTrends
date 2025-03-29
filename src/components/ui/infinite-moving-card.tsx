"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 max-w-7xl overflow-hidden bg-black [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-purple-700 bg-black px-8 py-6 md:w-[450px] shadow-lg overflow-hidden"
            key={item.name}
          >
            <div className="absolute inset-0 bg-purple-700 blur-[100px] opacity-40"></div>
            <blockquote className="relative z-20 flex flex-col items-center text-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full border-4 border-purple-700 shadow-md mb-4" />
              <span className="text-sm leading-[1.6] font-normal text-gray-300">{item.quote}</span>
              <div className="mt-4">
                <span className="text-sm font-semibold text-white">{item.name}</span>
                <span className="block text-sm text-gray-400">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
