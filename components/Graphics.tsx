import React from 'react';
import styles from '../app/Graphics.module.css';
import "../app/graphics.css";
import Image  from 'next/image';
import pic1 from "../app/pic1.webp";

const Graphics = () => {
  return (
    <main>

   

    <div className="items-center text-center justify-center py-16 ">
    <p className="md:text-heading1-bold text-heading3-bold">What we do</p>
    </div>
    <div className=' wrapped my-24'>
       
    
      <div className="container">
        <div id="carousel" className="">
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
          <div><Image alt="images loading" src={pic1} /></div>
        </div>
      </div>
    </div>

    </main>
  );
};

export default Graphics;
