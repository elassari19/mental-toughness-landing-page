import Image from "next/image";
import { AppleIcon, PlayIcon } from "lucide-react";
import appStoreSvg from "@/app/images/appstore.svg";
import playStoreSvg from "@/app/images/playstore.svg";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center space-y-2 pb-8">
        <img
          src="https://placehold.co/150x50"
          alt="Atoms app screenshot"
          width={150}
        />
        <span>
          {" "}
          The <span className="font-serif italic">official</span> Atomic Habits
          app
        </span>
      </div>
      <div className="flex flex-col items-center justify-between md:flex-row max-w-screen-lg mx-auto">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="font-cooper text-4xl text-gray-900 md:text-5xl lg:text-6xl tracking-tighter">
            <span className="font-serif italic">Tiny changes,</span>
            <br />
            remarkable results.
          </h1>
          <p className="text-lg text-gray-600">
            Build good habits and break bad ones with the only app built on the
            proven science of habit formation.
          </p>
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
        </div>
        <div className="mt-10 md:mt-0">
          <div className="relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[2.5rem] bg-gray-800 shadow-xl">
            <div className="absolute inset-[3px] overflow-hidden rounded-[2.3rem] bg-white">
              <img
                src="https://placehold.co/294x594"
                alt="Atoms app screenshot"
                width={294}
                height={594}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 top-0 h-6 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
