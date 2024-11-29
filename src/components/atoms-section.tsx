"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import chalkCircle from "@/app/images/chalk_circle.svg";

const atoms = [
  <span key="obvious">
    Make it <br />
    obvious.
  </span>,
  <span key="attractive">
    Make it <br />
    attractive.
  </span>,
  <span key="easy">
    Make it <br />
    easy.
  </span>,
  <span key="satisfying">
    Make it <br />
    satisfying.
  </span>,
];

export default function AtomsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;

    // Calculate which item is at the left edge
    const items = Array.from(container.children) as HTMLElement[];
    const itemPositions = items.map((item, index) => ({
      index,
      position: item.offsetLeft,
    }));

    // Find the item closest to the scroll position
    const closest = itemPositions.reduce((prev, curr) => {
      return Math.abs(scrollPosition - prev.position) <
        Math.abs(scrollPosition - curr.position)
        ? prev
        : curr;
    });

    setActiveIndex(closest.index);
  };

  // Update active index on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      updateActiveIndex();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    updateActiveIndex();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(atoms.length - 1, activeIndex + 1);

    setActiveIndex(newIndex);

    const container = scrollRef.current;
    const items = container.children;
    if (items[newIndex]) {
      items[newIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section className="bg-dark-gray text-white rounded-4xl py-36 px-20 mx-4 -translate-y-[120px]">
      <div className="max-w-5xl mx-auto space-y-14">
        <h2 className="font-serif text-3xl leading-tight max-w-[35rem] break-keep">
          Atoms is the only app built on scientifically-backed laws of habit
          change
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex items-center space-x-10 overflow-x-auto overflow-y-hidden hide-scrollbars pr-[80%] snap-x snap-mandatory touch-pan-x select-none cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {atoms.map((atom, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className="flex items-center space-x-2 snap-start relative select-none"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <span className="text-[14rem] text-yellow leading-none relative select-none">
                    {i + 1}.
                    {isActive && (
                      <Image
                        src={chalkCircle}
                        alt="Active item indicator border border-white"
                        width={200}
                        height={200}
                        className="absolute top-1/4 -tranylate-y-1/2 z-10 object-contain w-[150px]"
                        draggable={false}
                      />
                    )}
                  </span>
                  <span className="text-huge font-semibold tracking-tight min-w-content whitespace-nowrap leading-none select-none">
                    {atom}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end mt-8 space-x-4">
          <button
            className="p-2 bg-white text-gray-900 rounded-full disabled:opacity-50"
            onClick={() => scrollTo("left")}
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-2 bg-white text-gray-900 rounded-full disabled:opacity-50"
            onClick={() => scrollTo("right")}
            disabled={activeIndex === atoms.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
