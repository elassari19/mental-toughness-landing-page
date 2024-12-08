import React from "react";

interface ImageSectionProps {
  slides: {
    image: string;
    caption: string;
    title: string;
    description: React.ReactNode;
  }[];
}

export const ImageSection: React.FC<ImageSectionProps> = ({ slides }) => {
  return (
    <div className="w-1/2 sticky top-0 h-screen flex items-center">
      {slides.map((section) => (
        <div key={section.title} className="section-image absolute inset-0 p-8">
          <img
            src={section.image}
            alt={section.title}
            className="w-[20vw] h-[70vh] mx-auto mt-5 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
