// "use client"
import DogList from "@/components/DogList";
import React from "react";
// import { useEffect, useState } from "react";




const Ourdogs = () => {

  // const [isPreloading, setIsPreloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsPreloading(false);
  //   }, 4000);
  // }, []);


  return (
    
    <div className=" text-center">
    <p className="text-heading1-bold py-8">Meet Our Dogs</p>
     <DogList />
    </div>
    
  )
}

export const dynamic = "force-dynamic";

export default Ourdogs