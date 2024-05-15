"use client"
import AboutUsPage from "@/components/AboutUsPage";
import React from "react";
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";



const Aboutus = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);
  
    const reloadKey = "reloadFlag1";
    const hasReloaded = localStorage.getItem(reloadKey);
  
    // Check if the page has already been reloaded
    if (!hasReloaded) {
      // Reload the page once after 4 seconds (4000 milliseconds)
      const timeout = setTimeout(() => {
        localStorage.setItem(reloadKey, "true"); // Set flag in local storage
        window.location.reload();
      }, 4000);
  
      // Clear the timeout to prevent the reload after the first time
      return () => {
        clearTimeout(timeout);
        localStorage.removeItem(reloadKey); // Remove the flag from local storage
      };
    }
  }, []);
  
  

  return (
    <>
      {isPreloading ? (
        <PreloadAnimation />
      ) : (
    <div className=" text-center">
    
     <AboutUsPage />
    </div>
      )}
      </>
  )
}

export const dynamic = "force-dynamic";

export default Aboutus