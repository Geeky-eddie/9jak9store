import React from 'react';
// import { AddCircleOutline } from '@mui/icons-material';


interface PictureGridProps {
  images: string[];
}

const Carousel: React.FC<PictureGridProps> = ({ images }) => {
  return (
    <div>
      <div className="items-center text-center justify-center py-16 ">
      <p className="md:text-heading1-bold text-heading3-bold">What we do</p>
      </div>
      <div className=' overflow-hidden '>
        <div className="grid md:grid-cols-5 gap-4 grid-rows-2">
        {images.map((url, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg p-10 md:p-0">
          <div className="w-full h-full group">
            <img
              src={url}
              alt={`Picture ${index}`}
              className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 cursor-pointer rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer">
              <p className="text-white font-bold text-heading4-bold flex items-center">
                {/* <AddCircleOutline className="mr-2" /> */}
                Book a session
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Carousel;
