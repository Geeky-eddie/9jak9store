"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";
import DogList from "./DogList";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
  };
  
  const clickPrev = () => {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className=" items-center">
       
        
        <div className="grid place-items-center md:grid-cols-1 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl relative">
        <div className="flex text-center justify-center items-center">
            <p className="text-heading1-bold py-8">Meet Our Dogs</p>
        </div>


{images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out relative"
              : "hidden"
          }`}
        >
        
          <Image
            src={elem.src}
            alt=""
            width={400}
            height={400}
            className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
          />

        
          {idx === activeImage && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-4 bg-black bg-opacity-30">
              {/* Your description component */}
              <Description
                activeImage={activeImage}
                clickNext={clickNext}
                clickPrev={clickPrev}
              />
            </div>
          )}
        </div>
      ))}


       
      {/* <DogList /> */}
      

</div>

      
      
    </div>
  );
};

export default Slider;

