"use client";

import { useState } from "react";
import DogHeartFavorite from "./DogHeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

const DogInfo = ({ dogInfo }: { dogInfo: DogType | null }) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  if (!dogInfo) {
    // If dogInfo is not provided, return some fallback UI or handle the case accordingly
    return <p>No dog information available.</p>;
  }

  // Apply null checks for dogInfo.colors and dogInfo.sizes
  if (dogInfo.colors && dogInfo.colors.length > 0) {
    setSelectedColor(dogInfo.colors[0]);
  }

  if (dogInfo.sizes && dogInfo.sizes.length > 0) {
    setSelectedSize(dogInfo.sizes[0]);
  }

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-heading3-bold">{dogInfo.title}</p>
        <DogHeartFavorite dog={dogInfo} />
      </div>

      {/* <div className="flex gap-2">
        <p className="text-base-medium text-grey-2">Category:</p>
        <p className="text-base-bold">{dogInfo.category}</p>
      </div> */}

      {/* <p className="text-heading3-bold">$ {dogInfo.price}</p> */}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Description:</p>
        <p className="text-small-medium">{dogInfo.description}</p>
      </div>

      {/* {dogInfo.colors && dogInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {dogInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* {dogInfo.sizes && dogInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {dogInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )} */}

      {/* <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="hover:text-red-1 cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div> */}

      {/* <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: dogInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Add To Cart
      </button> */}
    </div>
  );
};

export default DogInfo;
