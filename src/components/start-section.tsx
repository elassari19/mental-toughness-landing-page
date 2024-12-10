import React from "react";
import AppStoreButtons from "./app-store-buttons";

const StartSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 p-4 lg:px-[15vw]">
      {/* Text and Buttons Column */}
      <div className="text-center lg:text-start max-w-md md:max-w-2xl lg:max-w-lg">
        <h3 className="text-3xl md:text-[2.45rem] lg:text-3xl font-serif text-gray-800 mb-6 lg:mb-12 leading-relaxed">
          Get started today with the app based on the NYT best-seller that has
          already helped over 20 million people.
        </h3>

        {/* App Store Buttons */}
        <div className="hidden lg:block">
          <AppStoreButtons />
        </div>
      </div>

      {/* Illustration Column */}
      <div className="flex flex-col items-center gap-8">
        <img
          src="https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/65854a3b9462776fda1399e1_book-p-800.png"
          width={600}
          height={400}
          className="w-[30rem] h-[40rem] lg:w-[30rem] lg:h-[40rem]"
        />
        <div className="block lg:hidden">
          <AppStoreButtons />
        </div>
      </div>
    </div>
  );
};

export default StartSection;
