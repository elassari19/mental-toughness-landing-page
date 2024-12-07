"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import actionSvg from "@/app/images/action.svg";

interface StickyParallaxContainerProps {
  slides: {
    image: string;
    caption: string;
    title: string;
    description: React.ReactNode;
  }[];
  height?: string;
  className?: string;
}

const StickyParallaxContainer = ({
  slides,
  height = "200vh", // Default height for the scroll container
  className = "",
}: StickyParallaxContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate progress (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, -containerTop / (containerHeight - viewportHeight))
      );

      // Update children positions based on scroll progress
      Array.from(sticky.children).forEach((child, index) => {
        const element = child as HTMLElement;
        const totalChildren = sticky.children.length;
        const childProgress = scrollProgress * totalChildren - index;

        if (childProgress <= 0) {
          // element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        } else if (childProgress >= 1) {
          // element.style.opacity = "0";
          element.style.transform = "translateY(-30%)";
        } else {
          // element.style.opacity = (1 - childProgress).toString();
          element.style.transform = `translateY(${-childProgress * 30}%)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height }}
    >
      <div className="sticky left-0 top-40 w-full h-[60vh]">
        <div className="h-full w-full z-[2] bg-dark-gray rounded-2xl"></div>
        <Image
          src={actionSvg}
          alt="action svg"
          width={400}
          height={600}
          className="absolute z-[2] -bottom-20"
        />
      </div>
      <div
        ref={stickyRef}
        className="sticky h-1/2 overflow-hidden w-full rounded-2xl"
      >
        {slides.map((item, idx) => (
          <div
            key={idx}
            className="absolute w-full flex justify-between items-center px-[15vw] text-white"
            style={{ top: `${idx * 30}vh`, zIndex: 3 }}
          >
            <div className="flex-1 h-1/6">
              <img
                src={item.image}
                alt={item.caption}
                width={400}
                height={600}
                className="w-[20vw] h-[75vh] object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1 text-center">
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyParallaxContainer;
