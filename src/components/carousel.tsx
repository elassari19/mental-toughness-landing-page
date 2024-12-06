import React, { useState } from "react";

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

  return (
    <div className="relative">
      <div
        className="w-[98vw] flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="shrink-0 w-full">
            <div className="w-[100vw] h-[85vw] flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.caption}
                width={400}
                height={600}
                className="w-[45vw] h-[100vw] object-cover rounded-2xl"
              />
            </div>
            <div className="text-center mt-32 md:mt-[25vh] grid gap-4">
              <p className="text-[1.5rem] md:text-[1.75rem]">{slide.caption}</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="md:text-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute max-w-[95vw] top-[70vh] md:top-[110vh] left-0 right-0 flex justify-center">
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
