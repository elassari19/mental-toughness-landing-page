import Image from "next/image";
import appStoreSvg from "@/app/images/appstore.svg";
import playStoreSvg from "@/app/images/playstore.svg";

export default function AppStoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
      <a
        href="#"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src={appStoreSvg}
          alt="Download on the App Store"
          width={120}
          height={50}
          priority
        />
      </a>
      <a
        href="#"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src={playStoreSvg}
          alt="Get it on Google Play"
          width={120}
          height={50}
          priority
        />
      </a>
    </div>
  );
}
