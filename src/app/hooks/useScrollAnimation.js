import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    const textSections = gsap.utils.toArray(".text-section");
    const images = gsap.utils.toArray(".section-image");

    // Set initial states
    gsap.set(images.slice(1), { opacity: 0 });

    textSections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(images[i], {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          });
          if (i > 0) {
            gsap.to(images[i - 1], {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }
        },
        onEnterBack: () => {
          gsap.to(images[i], {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          });
          if (i < images.length - 1) {
            gsap.to(images[i + 1], {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            });
          }
        },
        markers: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
