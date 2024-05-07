"use client";

import Carousel from "./Carousel";
import "../app/textanimate.css";
import React, { useEffect } from "react";

const Thirdsection: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".animated-text");

    const scrollHandler = () => {
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // Trigger animation on initial load if elements are in view
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="py-16 items-center text-left p-10">
      <div className="items-center text-center justify-center py-16">
        <p className="md:text-heading2-bold text-heading4-bold bg-red-800 rounded-lg py-5">
          Why Choose 9ja K9 Academy?
        </p>
      </div>
      <div className="p-5">
        <ul className="list-disc pl-6 mb-8">
          <li className="my-5 animated-text slide-in-left">
            Passion in Every Paw Step: Our trainers are fueled by a genuine love
            for dogs, making learning an exciting and rewarding experience.
          </li>
          <li className="my-5 animated-text slide-in-right">
            Triumphant Transformations: Witness astounding progress as dogs
            evolve into confident, disciplined, and well-mannered companions.
          </li>
          <li className="my-5 animated-text slide-in-left">
            Elevate Your Pooch's Potential: A Systematic Dog Training Haven,
            refining skills for any goal. Our Mission, Vision, and Values guide
            refined training, crafting unfailing responses amidst challenges.
          </li>
          <li className="my-5 animated-text slide-in-right">
            Your Dog, Your Way: Tailored programs match your dog's personality
            and your goals.
          </li>
          <li className="my-5 animated-text slide-in-left">
            Elegance In Training: This isn't just a statement we use to make dog
            training sound fancy but like equestrians, dancers or any sport -
            movement is one of the set standards that's considered by our team
            of well trained trainers.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Thirdsection;
