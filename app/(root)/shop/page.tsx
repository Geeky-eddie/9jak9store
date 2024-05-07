// "use client"

import ProductList from "@/components/ProductList";
import React from "react";



const Ourdogs = () => {


  return (
    <div className=" text-center">
    <p className="text-heading1-bold py-8">Welcome to our store</p>
     <ProductList />
    </div>
  )
}

export const dynamic = "force-dynamic";

export default Ourdogs