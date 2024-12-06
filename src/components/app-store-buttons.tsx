import Image from "next/image";
import appStoreSvg from "@/app/images/appstore.svg";
import playStoreSvg from "@/app/images/playstore.svg";
import Link from "next/link";

export default function AppStoreButtons() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-8">
    <Link
      href="https://apps.apple.com/us/app/atoms-from-atomic-habits/id6474421906"
      className="transition-transform hover:scale-105 active:scale-95"
    >
      <Image
        src={appStoreSvg}
        alt="Download on the App Store"
        width={120}
        height={50}
        priority
      />
    </Link>
    <a
      href="https://play.google.com/store/apps/details?id=app.getatoms.android"
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
