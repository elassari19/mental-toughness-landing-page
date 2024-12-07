import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import AppStoreButtons from "./app-store-buttons";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-20">
      <img
        src="https://placehold.co/500x250"
        alt=""
        width={500}
        height={250}
        className="mb-12 w-[70vw] mx-auto"
      />
      <div className="flex flex-col items-start gap-8 text-center lg:text-left lg:flex-row justify-between p-8">
        <div className="text-start flex flex-col gap-8 underline md:text-xl lg:text-base">
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
          <div className="flex gap-6 mb-6 md:mb-0 text-xs md:text-base lg:text-xs">
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
        </div>

        <div className="flex flex-col gap-16 items-start lg:items-end">
          <AppStoreButtons />
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Twitter size={24} className="text-white fill-black" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Instagram size={24} className="text-white fill-black" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Facebook size={24} className="text-black fill-black" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin size={24} className="text-black fill-black" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
