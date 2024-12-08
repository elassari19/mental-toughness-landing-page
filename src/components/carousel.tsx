import React, { useState, useRef, useEffect } from "react";

interface IProps {
  slides: {
    image: string;
    caption: string;
    title: string;
    description: React.ReactNode;
  }[];
}

function Carousel({ slides }: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const targetTop = targetRef.current?.getBoundingClientRect().height || 300;

  console.log("targetTop", targetTop);

  const handleDragStart = (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    setStartX(clientX);
    setPrevTranslate(currentTranslate);
  };

  const handleDragMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    event.preventDefault();

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const diff = clientX - startX;
    const translate = prevTranslate + diff / 6;

    setCurrentTranslate(translate);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (Math.abs(movedBy) > 20) {
      if (movedBy < 0 && activeIndex < slides.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (movedBy > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }

    // Reset to the snap position
    setCurrentTranslate(-(activeIndex * 100));
    setPrevTranslate(-(activeIndex * 100));
  };

  useEffect(() => {
    setCurrentTranslate(-(activeIndex * 100));
    setPrevTranslate(-(activeIndex * 100));
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className={`w-[98vw] flex transition-transform ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } touch-pan-y`}
        style={{
          transform: `translateX(${isDragging ? currentTranslate : -(activeIndex * 100)}%)`,
          transition: isDragging ? "none" : "transform 300ms ease-in-out",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide, index) => (
          <div key={index} className="shrink-0 w-full select-none">
            <div className="w-[100vw] h-[85vw] flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.caption}
                width={400}
                height={600}
                className="w-[45vw] h-[100vw] object-cover rounded-2xl pointer-events-none"
                draggable="false"
              />
            </div>

            <div
              ref={targetRef}
              className="flex flex-col items-center text-center mt-32 md:mt-[25vh] gap-4 px-4"
            >
              <p className="text-[1.5rem] md:text-[1.75rem] font-serif">
                {slide.caption}
              </p>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="md:text-2xl max-w-md md:max-w-xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute max-w-[95vw] left-0 right-0 flex justify-center"
        style={{
          bottom: `${targetTop >= 270 ? targetTop + 50 : targetTop >= 220 ? targetTop + 65 : targetTop}px`,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`mx-2 w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-[#ffdc61]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
