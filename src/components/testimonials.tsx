"use client";
import { useState } from "react";

interface Testimonial {
  title: string;
  quote: string;
  author: string;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Love the flexibility.",
    quote:
      "The personalized focus of the habit you create make it unique and more beneficial to you. I'd tried another habit building app and it wasn't as user friendly. Having a desired outcome requirement makes the habit continue to resonate with me each time. This program is encouraging but not intrusive. Good job!",
    author: "User from USA",
    source: "App Store Review",
  },
  {
    title: "Best Habit App",
    quote:
      "This is the best habit app I've ever used. It's so easy to use and it really helps me stick to my goals. I'm so grateful for this app.",
    author: "User from USA",
    source: "Twitter Review",
  },
  {
    title: "Best Habit App",
    quote:
      "This is the best habit app I've ever used. It's so easy to use and it really helps me stick to my goals. I'm so grateful for this app.",
    author: "User from USA",
    source: "Twitter Review",
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animate, setAnimate] = useState(false);
  const testimonial = testimonials[activeTestimonial];
  const nextReview = () => {
    setAnimate(true);
    setTimeout(() => {
      setActiveTestimonial((activeTestimonial + 1) % testimonials.length);
      setAnimate(false);
    }, 300);
  };
  return (
    <section className="flex flex-col justify-between lg:px-[10vw] bg-dark-gray text-white rounded-2xl my-16 mx-4 h-fit md:h-[33rem] lg:h-[80vh] p-8 pt-20">
      <h2 className="hidden lg:block text-2xl">
        See what people are saying about Atoms
      </h2>
      <div
        className={`flex flex-col lg:flex-row justify-between gap-12 ${
          animate ? "animate-fade-out" : ""
        }`}
      >
        <h3 className="text-[2.5rem] w-full lg:text-5xl">
          {testimonial.title}
        </h3>

        <div className="w-full space-y-8">
          <p className="text-white text-lg lg:text-base lg:max-w-sm leading-relaxed">
            &quot;{testimonial.quote}&quot;
          </p>
          <div className="text-sm text-white">
            <p className="font-bold text-lg lg:text-base">
              {testimonial.author}
            </p>
            <p className=" text-lg lg:text-base">{testimonial.source}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end w-full mt-8">
        <button onClick={nextReview} className="py-4 px-8">
          <svg
            width="100%"
            viewBox="0 0 210 38"
            fill="none"
            className="max-w-[150px] fill-current"
            onClick={nextReview}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M192.858 1.32257L208.768 17.2325C209.744 18.2088 209.744 19.7917 208.768 20.768L192.858 36.6779C191.882 37.6542 190.299 37.6542 189.322 36.6779C188.346 35.7016 188.346 34.1187 189.322 33.1424L200.964 21.5002H0V16.5002H200.964L189.322 4.8581C188.346 3.88179 188.346 2.29888 189.322 1.32257C190.299 0.346254 191.882 0.346254 192.858 1.32257Z"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
