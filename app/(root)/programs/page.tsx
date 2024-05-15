"use client"

import ProgramsPage from '@/components/ProgramsPage'
import React from 'react'
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";

const Programs = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag7";
    const hasReloaded = localStorage.getItem(reloadKey);

    // Check if the page has already been reloaded
    if (!hasReloaded) {
      // Reload the page once after 4 seconds (4000 milliseconds)
      const timeout = setTimeout(() => {
        localStorage.setItem(reloadKey, "true"); // Set flag in local storage
        window.location.reload();
      }, 4000);

      // Clear the timeout to prevent the reload after the first time
      return () => clearTimeout(timeout);
    }
  }, []);
  return (
    <>
    {isPreloading ? (
      <PreloadAnimation />
    ) : (
    <div>
        <ProgramsPage />
    </div>
     )}
     </>
  )
}

export default Programs