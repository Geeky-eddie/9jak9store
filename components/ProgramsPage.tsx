import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { programs } from '../lib/data/programs';
import "../app/Style.css";
import { Button } from "flowbite-react";
import DogAnimation from './DogAnimation';
import DogAnimations from './DogAnimations';

const ProgramsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-heading1-bold my-14 text-center">Explore Our Diverse Range Of Programs</h1>
      {/* <DogAnimation /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="card bg-red-800 cursor-pointer my-8">
            <h2 className="text-xl text-heading3-bold mb-8 text-center items-center">{program.title}</h2>
                <p className="text-white mb-8">💰 Price: {program.price}</p>
                <p className="text-white mb-8">⏳ Duration: {program.duration}</p>
                <p className="text-white mb-8">🔍 Requirements: {program.requirements}</p>
                <p className="text-white mb-8">🚨 Required items: {program.required}</p>
                <p className="text-white mb-8">🎲 Optional items: {program.optional}</p>
                <p className="text-white mb-8">🚀 Skills Covered: {program.skills}</p>
                <div className=' items-center flex justify-center'>
                    <Button color="gray" className='text-black '>Book now</Button>
                </div>
                
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProgramsPage;
