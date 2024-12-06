"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import rocks from "./imgs/rocks.png";
import clock from "./imgs/clock.png";
import heart from "./imgs/heart.png";
import tools from "./imgs/tools.png";
import handshake from "./imgs/handshake.png";
import { ArrowBigDown, ChevronDown } from "lucide-react";

const whys = [
  {
    title: "We know what really works",
    description:
      "We built Atoms on the proven principles of habit change: make it obvious, make it attractive, make it easy, make it satisfying.",
    img: rocks,
  },
  {
    title: "We meet you where you are",
    description:
      "We believe building lasting habits means starting small and stretching just the right amount. We guide you through finding that balance.",
    img: handshake,
  },
  {
    title: "we evolve as you evolve",
    description:
      "We help you adjust habits that aren’t sticking, and level them up just the right amount as you make personal progress.",
    img: tools,
  },
  {
    title: (
      <>
        We’re in it for the long-haul
      </>
    ),
    description:
      "We support you in creating accountability and learning the mindsets essential to lasting positive change.",
    img: clock,
  },
  {
    title: "We know what it takes to show up",
    description:
      "We know everybody needs reminders to return to what matters most, and we support you in building that system.",
    img: heart,
  },
];

export default function UniqueSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };  
  }, []);

  useEffect(() => {
    if (!isDesktop || !scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveSlide(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
      }
    );

    const elements = scrollContainerRef.current.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isDesktop]);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.clientWidth;

      if (isDesktop) {
        const targetElement = scrollContainerRef.current.querySelector(`[data-index="${index}"]`);
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollLeft = index * slideWidth;
      }
      setActiveSlide(index);
    }
  };

  return (
    <section
      className={"px-[5%] max-w-screen-xl mx-auto overflow-hidden" + (isDesktop ? "lg:h-screen" : "")}
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[1.5rem] text-center font-serif font-medium text-muted-foreground mb-12">
        Why we&apos;re different
      </h2>

      <div className="relative flex lg:gap-8 lg:h-[calc(100vh-180px)] lg:px-[5rem]">
        {/* Bullets - Horizontal bottom on mobile, Vertical left on desktop */}
        <div className="hidden lg:flex flex-col justify-center gap-2 relative z-10 ml-4">
          {whys.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeSlide ? "bg-black h-4" : "bg-gray-300"
              }`}
              onClick={() => scrollToSlide(i)}
            />
          ))}
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row lg:flex-col w-full overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden snap-x lg:snap-y snap-mandatory scrollbar-hide lg:h-full pb-12 lg:pb-0"
          style={{ scrollBehavior: "smooth" }}
          onScroll={(e) => {
            if (!isDesktop) {
              const container = e.currentTarget;
              const slideWidth = container.clientWidth;
              const newActive = Math.round(container.scrollLeft / slideWidth);
              setActiveSlide(newActive);
            }
          }}
        >
          <div className="bg-[#f2ece0] w-[14rem] h-[16rem] rounded-full absolute top-2/3 lg:top-1/2 left-1/2 -lg:left-1/3 -translate-x-1/2 lg:translate-x-[12vw] -translate-y-1/2" />

          {whys.map((why, i) => (
            <div
              key={i}
              data-index={i}
              className="flex-none w-full md:min-h-full snap-start snap-always z-10"
            >
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 h-full py-4">
                <div className="flex flex-col justify-center space-y-10 mx-auto lg:mx-0">
                  <h3 className="text-[2.75rem] md:text-[3.3rem] lg:text-[5rem] text-center lg:text-left font-bold leading-[0.9] tracking-tighter hyphens-none">
                    {why.title}
                  </h3>
                  <p className="text-muted text-lg md:text-2xl lg:text-base text-center lg:text-left lg:mx-0 max-w-2xl">
                    {why.description}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={why.img}
                    alt=""
                    width={isDesktop ? 400 : 250}
                    height={isDesktop ? 400 : 250}
                    priority
                    className="w-[250px] xl:w-full h-auto max-w-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow scroll buttons */}
        <div className="hidden lg:block absolute z-50 cursor-pointer border border-gray-300 hover:border-gray-600 p-2 rounded-full bottom-16 left-[15vw] -translate-x-1/2">
          <ChevronDown onClick={() => scrollToSlide(activeSlide + 1)} size={16} />
        </div>

        {/* Mobile Bullets */}
        <div className="flex lg:hidden justify-center gap-2 absolute bottom-0 left-0 right-0">
          {whys.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeSlide ? "bg-black w-4" : "bg-gray-300"
              }`}
              onClick={() => scrollToSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
