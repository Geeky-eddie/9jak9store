"use client"

import Image from "next/image";
import React, { useState } from "react";

const DogGallery = ({ dogMedia }: { dogMedia: string[] }) => {
  // Check if dogMedia is defined and not empty before accessing its elements
  const initialMainImage = dogMedia && dogMedia.length > 0 ? dogMedia[0] : null;
  const [mainImage, setMainImage] = useState(initialMainImage);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      {/* Render mainImage only if it's defined */}
      {mainImage && (
        <Image
          src={mainImage}
          width={500}
          height={500}
          alt="dog"
          className="w-96 h-96 rounded-lg shadow-xl object-cover"
        />
      )}
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {/* Map dogMedia only if it's defined */}
        {dogMedia && dogMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={200}
            width={200}
            alt="dog"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-black" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
