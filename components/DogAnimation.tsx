"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../app/doganim.css";
import gif from "../app/gif1.gif"; // Remove the "public/" prefix
import Image from 'next/image';

const DogAnimation = () => {
    const dogRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const dog = dogRef.current;
        if (!dog) return; // Check if dog is null before proceeding
        
        gsap.to(dog, {
          x: "100vw", // Move the dog to the right edge of the screen
          duration: 12, // Duration of the animation in seconds
          ease: "linear", // Linear easing for constant speed
          repeat: 4, // Play the animation once without repeating
          onComplete: () => {
            // Hide the dog when the animation completes
            dog.style.visibility = "hidden";
          }
        });
      }, []);
    
  
    return (
      <div className="dog-container">
        <div ref={dogRef} className="dog"> 
          <Image src={gif} alt='dog' width={600} height={500} />
        </div>
      </div>
    );
};

export default DogAnimation;
