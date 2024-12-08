import React from "react";

interface TextSectionProps {
  slides: {
    image: string;
    caption: string;
    title: string;
    description: React.ReactNode;
  }[];
}

export const TextSection: React.FC<TextSectionProps> = ({ slides }) => {
  return (
    <div className="w-1/2 ml-auto">
      {slides.map((section, index) => (
        <div
          key={section.title}
          className={`text-section min-h-screen flex flex-col justify-center p-16 ${
            index === slides.length - 1
              ? "mb-[10vh]"
              : index === 0
                ? "-mt-[10vh]"
                : ""
          }`}
        >
          <div className="transform transition-transform">
            <h2 className="text-5xl font-bold text-white mb-6">
              {section.title}
            </h2>
            <p className="text-white text-xl leading-relaxed max-w-xl">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
