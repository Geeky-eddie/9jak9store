"use client";


import "../app/textanimate.css";
import React, { useEffect } from "react";

const Secondsection: React.FC = () => {
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
                    Unlock Elegance in Your Dog: 9ja K9’s Transformative Training Programs Empowers Owners and Canines
                </p>
            </div>
            <div className="p-5">
                <p className="mb-8 animated-text slide-in-left">
                    Elevate your bond with your canine companion through 9ja K9's transformative dog training experience. We believe in lasting results achieved through empowering owners to become confident trainers. Unlike "magic bullet" programs that promise quick fixes, 9ja K9 equips you with the knowledge and skills to cultivate a well-behaved, obedient dog for life.
                </p>
                <p className="mb-8 animated-text slide-in-right">
                    Forget expensive "follow-up" sessions. Our comprehensive curriculum goes beyond basic commands, instilling elegance in movement and responsiveness that echoes the grace of equestrianism or dance. Our team of expert trainers guides you every step of the way, ensuring you possess the tools to nurture a strong, consistent relationship with your dog.
                </p>
                <p className="mb-8 animated-text slide-in-left">
                    Our comprehensive curriculum equips you with the knowledge and skills to:
                </p>
                <ul className="list-disc pl-6 mb-8">
                    <li className='my-5 animated-text slide-in-right'>Master fundamental commands and obedience training.</li>
                    <li className='my-5 animated-text slide-in-left'>Effectively address unwanted behaviors and develop positive reinforcement techniques.</li>
                    <li className='my-5 animated-text slide-in-right'>Build a strong bond of trust and respect with your dog.</li>
                    <li className='my-5 animated-text slide-in-left'>Nurture your dog's natural instincts and intelligence through stimulating activities.</li>
                    <li className='my-5 animated-text slide-in-right'>Become a confident co-trainer, capable of handling future dogs on your own.</li>
                </ul>
                <p className="mb-8 animated-text slide-in-left">
                    9ja K9 isn't just about training; it's about investing in a fulfilling future with your canine companion. By empowering you to become a co-trainer, you'll gain the confidence to handle future dogs on your own, unless specific circumstances necessitate our professional assistance.
                </p>
                <p className="mb-8 animated-text slide-in-right">
                    Don't settle for "trained in a week" promises. Invest in lasting results with 9ja K9.
                </p>
                <div className="mb-8"></div>
                <p className="mb-8 animated-text slide-in-left">
                    By implementing these additional suggestions, you can create an even more compelling and engaging marketing message that effectively captures the attention of potential clients and inspires them to choose 9ja K9 for their dog's training needs.
                </p>
            </div>
        </div>
    );
};

export default Secondsection;
