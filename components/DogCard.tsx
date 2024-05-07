"use client";

import Image from "next/image";
import Link from "next/link";
import DogHeartFavorite from "./DogHeartFavorite";

interface DogCardProps {
  dog: DogType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const DogCard = ({ dog, updateSignedInUser }: DogCardProps ) => {
  return (
    <Link
      href={`/dogs/${dog._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <div className="w-full h-full group">
        <Image
                src={dog.media[0]}
                alt="dog"
                width={250}
                height={300}
                className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 cursor-pointer rounded-lg"
              />
              <div>
                <p className="text-base-bold text-center py-3">{dog.title}</p>
                {/* <p className="text-small-medium text-grey-2">{dog.category}</p> */}
              </div>
      </div>
      
      {/* <div className="flex justify-between items-center">
        <p className="text-body-bold">${dog.price}</p>
        <DogHeartFavorite dog={dog} updateSignedInUser={updateSignedInUser} />
      </div> */}
    </Link>
  );
};

export default DogCard;
