"use client"

// import useCart from "@/lib/hooks/useCart";
// import Link from "next/link";
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../components/PreloadAnimation";
import "../../preloader.css";

const BankTransferPage = () => {
  const [isPreloading, setIsPreloading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag2";
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
        <div className="container mx-auto p-4 items-center text-center ">
        <h1 className="text-2xl font-bold mb-4">Bank Transfer Details</h1>
        <p className="mb-4">Please transfer the exact amount to the following bank account:</p>
        <span>123456789 - Access Bank</span>
        <p className="my-4">Then click the message admin button to message an admin</p>
        
        <div className="flex justify-between items-center my-12">
          <button
           
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Products Page
          </button>
          
         
          <button
          
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Message Admin
          </button>
        </div>
      </div>
       )}
       </>
    );
  };
  
  export default BankTransferPage;



