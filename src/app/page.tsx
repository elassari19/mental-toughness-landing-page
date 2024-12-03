import AtomsSection from "@/components/atoms-section";
import HeroSection from "@/components/hero-section";
import UniqueSection from "@/components/unique section";
import Image from "next/image";
import Testimonials from "@/components/testimonials";

import appStoreSvg from "@/app/images/appstore.svg";
import playStoreSvg from "@/app/images/playstore.svg";
import { LessonCard } from "@/components/lesson-card";

import React from "react";

const lessons = [
  {
    title: "Make Your Habits Fun",
    preview: (
      <>
        If you&apos;re struggling to stick to a habit because it feels like a
        hassle, then pick a different version of that habit.
        <br />
        Different people like different things. Find the most enjoyable version
        of each habit you do. Make your habits fun!
      </>
    ),
  },
  {
    title: "Aim to Be Great in 10 Years",
    preview: "",
  },
  {
    title: "Start Small",
    preview: "",
  },
  {
    title: "Everything is Imperfect",
    preview: "",
  },
];
export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        <AtomsSection />
        <UniqueSection />
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text and Buttons Column */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
              Build good habits, break bad ones, and make better decisions in
              just five good minutes a day. Get started today and cast a vote
              for future you.
            </h3>

            {/* App Store Buttons */}
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

          {/* Illustration Column */}
          <div className="flex-1 max-w-sm">
            <img src="https://placehold.co/400x600" width={400} height={400} />
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-16 w-full">
          {/* Header */}
          <div className="max-w-xl mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Daily Lessons
            </h2>
            <p className="text-lg text-gray-600">
              Use Atoms to stay motivated and change your mindset with lessons
              from James Clear, delivered daily.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {lessons.map((lesson, i) => (
              <LessonCard
                key={i}
                title={lesson.title}
                preview={lesson.preview}
              />
            ))}
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text and Buttons Column */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
              Get started today with the app based on the NYT best-seller that
              has already helped over 20 million people.
            </h3>

            {/* App Store Buttons */}
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

          {/* Illustration Column */}
          <div className="flex-1 max-w-sm">
            <img src="https://placehold.co/400x600" width={400} height={400} />
          </div>
        </div>
        <Testimonials />
        <div className="relative max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text and Buttons Column */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
              Share Atoms with a friend and support each other in making tiny
              changes for remarkable results.
            </h3>

            {/* App Store Buttons */}
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

          {/* Illustration Column */}
          <div className="flex-1 max-w-sm">
            <img src="https://placehold.co/400x600" width={400} height={400} />
          </div>
          <hr className="absolute w-full border-t border-black bottom-8" />
        </div>
      </main>
    </div>
  );
}
