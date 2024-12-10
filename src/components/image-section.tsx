import Image from "next/image";
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
          <Image
            src={
              "https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/659c5189c93ac18fe3e5f7f1_iphone-mockup-p-1080.png"
            }
            alt="phone case"
            width={400}
            height={600}
            className="absolute z-[999] w-[40vw] h-[70vh] top-[5.5rem] left-16 object-cover"
          />

          <img
            src={section.image}
            alt={section.title}
            className="w-[20vw] h-[70vh] mx-auto mt-5 rounded-2xl object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
