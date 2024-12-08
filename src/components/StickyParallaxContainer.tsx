"use client";
import { ImageSection } from "./image-section";
import { TextSection } from "./text-section";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

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

const StickyParallaxContainer = ({ slides }: StickyParallaxContainerProps) => {
  useScrollAnimation();

  return (
    <div className="scroll-container relative scroll-smooth mt-20">
      <div className="w-full h-[270vh] absolute top-0">
        <div className="bg-dark-gray rounded-2xl mt-[10vh] sticky top-[10vh] w-full h-[60vh]"></div>
      </div>
      <div className="relative flex">
        <ImageSection slides={slides} />
        <TextSection slides={slides} />
      </div>
    </div>
  );
};

export default StickyParallaxContainer;
