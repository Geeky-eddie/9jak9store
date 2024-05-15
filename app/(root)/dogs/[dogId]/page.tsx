"use client"

import DogGallery from "@/components/DogGallery"
import DogCard from "@/components/DogCard"
import DogInfo from "@/components/DogInfo"
import { getDogDetails, getOtherDogs } from "@/lib/actions/actions"
import { useEffect, useState } from "react";
import PreloadAnimation from "../../../../components/PreloadAnimation";
import "../../preloader.css";

const DogDetails = async ({ params }: { params: { dogId: string }}) => {
  const dogDetails = await getDogDetails(params.dogId)
  const relatedProducts = await getOtherDogs(params.dogId)

  const [isPreloading, setIsPreloading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    const reloadKey = "reloadFlag5";
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
    <>
    
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <DogGallery dogMedia={dogDetails.media} />
      <DogInfo dogInfo={dogDetails} />
    </div>

    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Other Dogs</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {relatedProducts?.map((dog: DogType) => (
          <DogCard key={dog._id} dog={dog} />
        ))}
      </div>
    </div>
    </>

)}
</>
  )
}

export const dynamic = "force-dynamic";

export default DogDetails