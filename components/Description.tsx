import React from "react";
import { images } from "./constants";
import left from "../public/left.png";
import right from "../public/right.png";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full  relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline text-red-800">
        9JA-K9
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold ">{elem.title}</div>
            <div className="text-red-800 leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic ">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          {/* <button className="bg-red-800 text-white uppercase px-4 py-2 rounded-md my-10">
            Meet dog
          </button> */}
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer px-4"
              onClick={clickPrev}
            >
              <Image className=" mr-10 hover:w-14 hover:h-12" src={left} width={40} height={40} alt="left" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer px-4 "
              onClick={clickNext}
            >
              <Image className=" ml-10 hover:w-14 hover:h-12" src={right} width={40} height={40} alt="right" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;