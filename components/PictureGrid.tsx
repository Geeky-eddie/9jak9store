"use client"

import React, { useEffect } from 'react';
import '../app/imageanimate.css';
import Link from 'next/link';
// import { AddCircleOutline } from '@mui/icons-material';

interface PictureGridProps {
  imageUrls: string[];
}

const PictureGrid: React.FC<PictureGridProps> = ({ imageUrls }) => {

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
    <div className=' overflow-hidden'>
      <div className="items-center text-center justify-center py-16 ">
        <p className="md:text-heading1-bold text-heading3-bold">"Where Training Becomes a Tail-Wagging Adventure"</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4 grid-rows-1">
        {imageUrls.map((url, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg p-10 md:p-0  image-card">
            <div className="w-full h-full group">
              <img
                src={url}
                alt={`Picture ${index}`}
                className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 cursor-pointer rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer">
                <Link href='https://forms.gle/TrMrHCKzWhYj4qEH9'>
                <p className="text-white font-bold text-heading4-bold flex items-center">
                  {/* <AddCircleOutline className="mr-2" /> */}
                  Book a session
                </p>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureGrid;
