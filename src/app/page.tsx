import AtomsSection from "@/components/atoms-section";
import HeroSection from "@/components/hero-section";
import UniqueSection from "@/components/unique section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import Lessons from "@/components/lessons";

import React from "react";
import HabitsSection from "@/components/habits-section";
import ActionSection from "@/components/action-section";
import StartSection from "@/components/start-section";
import ShareSection from "@/components/share-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AtomsSection />
      <UniqueSection />
      <HabitsSection />
      <ActionSection />
      <Lessons />
      <StartSection />
      <Testimonials />
      <ShareSection />
      <Footer />
    </main>
  );
}
