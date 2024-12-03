import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import appStoreSvg from "@/app/images/appstore.svg";
import playStoreSvg from "@/app/images/playstore.svg";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16">
      <img 
        src="https://placehold.co/500x250"
        alt=""
        width={500}
        height={250}
        className="mb-12 mx-auto"
      />
      <div className="flex flex-col items-center text-center md:text-left md:flex-row justify-between mb-12">
        <div className="flex flex-col gap-8 underline">
          <Link
            href="https://jamesclear.com"
            className="hover:text-gray-600 transition-colors"
          >
            jamesclear.com
          </Link>
          <Link href="#" className="hover:text-gray-600 transition-colors">
            3-2-1 Newsletter
          </Link>
          <Link href="#" className="hover:text-gray-600 transition-colors">
            Earn as an Affiliate?
          </Link>
          <Link href="#" className="hover:text-gray-600 transition-colors">
            Atoms FAQs & Support
          </Link>
        </div>
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

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
        <div className="flex gap-6 mb-6 md:mb-0">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>

        <div className="flex gap-6">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
