import React from "react";
import AppStoreButtons from "./app-store-buttons";

const ShareSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-4 lg:px-[15vw]">
      {/* Text and Buttons Column */}
      <div className="text-center lg:text-start max-w-md md:max-w-2xl lg:max-w-xl">
        <h3 className="text-3xl md:text-[2.45rem] lg:text-3xl font-serif text-gray-800 mb-6 lg:mb-12 leading-relaxed">
          Share Atoms with a friend and support each other in making tiny
          changes for remarkable results.
        </h3>

        {/* App Store Buttons */}
        <div className="hidden lg:block">
          <AppStoreButtons />
        </div>
      </div>

      {/* Illustration Column */}
      <div className="flex flex-col items-center gap-8">
        <img
          src="https://placehold.co/400x600"
          width={400}
          height={400}
          className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[40rem]"
        />
        <div className="block lg:hidden">
          <AppStoreButtons />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
