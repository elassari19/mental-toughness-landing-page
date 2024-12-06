import AtomsSection from "@/components/atoms-section";
import HeroSection from "@/components/hero-section";
import UniqueSection from "@/components/unique section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import AppStoreButtons from "@/components/app-store-buttons";
import Lessons from "@/components/lessons";

import React from "react";
import HabitsSection from "@/components/habits-section";
import ActionSection from "@/components/action-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AtomsSection />
      <UniqueSection />
      <HabitsSection />
      <ActionSection />
      <Lessons />
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text and Buttons Column */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl font-serif text-gray-800 mb-6 leading-relaxed">
            Get started today with the app based on the NYT best-seller that has
            already helped over 20 million people.
          </h3>

          {/* App Store Buttons */}
          <AppStoreButtons />
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
          <AppStoreButtons />
        </div>

        {/* Illustration Column */}
        <div className="flex-1 max-w-sm">
          <img src="https://placehold.co/400x600" width={400} height={400} />
        </div>
        <hr className="absolute w-full border-t border-black bottom-8" />
      </div>
      <Footer />
    </main>
  );
}
