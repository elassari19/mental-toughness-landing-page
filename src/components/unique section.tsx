"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import rocks from "./imgs/rocks.png";
import clock from "./imgs/clock.png";
import heart from "./imgs/heart.png";
import tools from "./imgs/tools.png";
import handshake from "./imgs/handshake.png";

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
        We’re in it for the <br /> long-haul
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
      className={"pt-24 px-8 max-w-screen-xl mx-auto overflow-hidden" + (isDesktop ? " h-screen" : "")}
    >
      <h2 className="text-2xl text-center font-serif font-medium text-muted-foreground mb-12">
        Why we&apos;re different
      </h2>

      <div className="relative flex md:gap-8 md:h-[calc(100vh-180px)]">
        {/* Bullets - Horizontal bottom on mobile, Vertical left on desktop */}
        <div className="hidden md:flex flex-col justify-center gap-2 relative z-10 ml-4">
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
          className="flex flex-row md:flex-col w-full overflow-x-auto md:overflow-y-auto md:overflow-x-hidden snap-x md:snap-y snap-mandatory scrollbar-hide md:h-full pb-12 md:pb-0"
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
          {whys.map((why, i) => (
            <div
              key={i}
              data-index={i}
              className="flex-none w-full md:min-h-full snap-start snap-always"
            >
              <div className="grid md:grid-cols-2 gap-4 lg:gap-8 h-full px-4 md:px-8 py-4">
                <div className="flex flex-col justify-center max-w-[64ch] space-y-10 mx-auto md:mx-0">
                  <h3 className="text-4xl lg:text-huge text-center md:text-left font-bold leading-[0.9] tracking-tighter hyphens-none">
                    {why.title}
                  </h3>
                  <p className="text-muted max-w-[40ch] text-center md:text-left mx-auto md:mx-0">
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
                    className="w-[250px] md:w-full h-auto max-w-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Bullets */}
        <div className="flex md:hidden justify-center gap-2 absolute bottom-0 left-0 right-0">
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
