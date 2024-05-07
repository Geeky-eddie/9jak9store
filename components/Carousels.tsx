"use client"

import React, { useEffect } from 'react';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../app/imageanimate.css';
import Link from 'next/link';

interface PictureGridProps {
  imagess: string[];
}

const Carousel: React.FC<PictureGridProps> = ({ imagess }) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.image-card');

    const scrollHandler = () => {
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
          element.classList.add('animate-slide-in');
        }
      });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Trigger animation on initial load if elements are in view
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div>
      <div className="items-center text-center justify-center py-16 ">
        {/* <p className="md:text-heading1-bold text-heading3-bold">What we do</p> */}
      </div>
      <div className="overflow-hidden px-5">
        <Link href="/ourdogs">
        
        <div className="grid md:grid-cols-4 gap-4 grid-rows-1">
          {imagess.map((url, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg p-10 md:p-0 image-card">
              <div className="w-full h-full group">
                <img
                  src={url}
                  alt={`Picture ${index}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer">
                  {/* <p className="text-white font-bold text-heading4-bold flex items-center">View more<ArrowForwardIcon className="mr-2" /></p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
