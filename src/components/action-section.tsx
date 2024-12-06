"use client";

import React from "react";
import actionSvg from "@/app/images/action.svg";
import Image from "next/image";
import Carousel from "./carousel";
import StickyParallaxContainer from "./StickyParallaxContainer";

const slides = [
  {
    image: "https://placehold.co/200x200",
    caption: "Not just any habit",
    title: "Identity-based habits",
    description: (
      <span>
        Start small and build habits based on the kind of person you want to
        become.
        <br />
        Get guidance on how to start at the right size for you. Create
        consistency by committing to a time and place. Build habits anchored in
        meaningful identities.
      </span>
    ),
  },
  {
    image: "https://placehold.co/200x200",
    caption: "Supportive environment",
    title: "A journey with support",
    description: (
      <span>
        Atoms works with you, not against you, as your journey through making
        lasting change. It’s not about perfection, it’s about consistency and we
        are here to help you figure out what works best for you.
      </span>
    ),
  },
  {
    image: "https://placehold.co/200x200",
    caption: "Habit reminders",
    title: "Everyone needs a nudge",
    description: (
      <span>
        Set up reminders that are unique to you. Need a reminder for the exact
        time your habit should be performed? No problem. Need a few reminders
        throughout the day so your habit stays top of mind? We do that to.
      </span>
    ),
  },
];

const ActionSection = () => {
  return (
    <div className="relativ20 my-16 mb-28 px-4 flex flex-col gap-20 min-h-[130vh] md:min-h-[180vh] lg:min-h-[70vh]">
      <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-start lg:px-[15vw] leading-tight">
        <h2 className="text-[2rem] md:text-[2.7rem] lg:text-2xl md:max-w-xl lg:max-w-xs font-medium font-serif text-gray-800 mb-4">
          Atoms is designed to help you take action
        </h2>
        <p className="text-lg md:text-2xl px-8 lg:px-0 md:max-w-2xl lg:text-sm lg:max-w-xs lg:leading-[1.25rem]">
          Our core features are designed to help you build better habits, track
          progress, and make lasting change.
        </p>
      </div>
      {/* small and medium screens */}
      <div className="flex flex-col lg:hidden items-center justify-start min-h-screen">
        <div className="relative min-h-[80vw] w-full bg-dark-gray rounded-2xl">
          <Image
            src={actionSvg}
            alt="action svg"
            width={400}
            height={600}
            className="absolute left-0 -bottom-32 z-[2] w-full h-[70vw] object-cover"
          />

          <div className="absolute left-0 -top-8 z-[3] w-screen overflow-hidden">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <StickyParallaxContainer slides={slides} />
      </div>
    </div>
  );
};

export default ActionSection;
