"use client"

// import useCart from "@/lib/hooks/useCart";
// import Link from "next/link";
// import { useEffect } from "react";

const BankTransferPage = () => {
   
  
    return (
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
    );
  };
  
  export default BankTransferPage;



