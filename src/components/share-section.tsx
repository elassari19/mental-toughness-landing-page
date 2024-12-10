import React from "react";
import AppStoreButtons from "./app-store-buttons";

const ShareSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 p-4 lg:px-[15vw]">
      {/* Text and Buttons Column */}
      <div className="flex-1 text-center lg:text-start max-w-md md:max-w-2xl lg:max-w-xl">
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
      <div className="flex-1 flex flex-col items-center gap-8">
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/65534b324e87f7b0282adbc6/659c5189c93ac18fe3e5f7f1_iphone-mockup-p-1080.png"
            width={600}
            height={400}
            className="hidden lg:block w-[35rem] h-[40rem] object-cover"
          />
          <video
            src="https://content.atomscontent.com/Atoms_Logo_01_f218b72879.mp4"
            data-wf-ignore="true"
            muted
            autoPlay
            controls={false}
            width={600}
            height={400}
            className="block w-[150%] object-cover border-t-4 border-dark-gray lg:absolute lg:w-[12rem] lg:h-[14rem] lg:bottom-[13rem] lg:left-[9rem] lg:border-none"
          ></video>
        </div>
        <div className="block lg:hidden">
          <AppStoreButtons />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
