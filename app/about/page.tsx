import { humbleBeginningsData } from "@/lib/data";
import React from "react";
import Alex from "@/public/Alex.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center  bg-[#F8F8F8]">
      <div className="flex flex-col mt-[5rem] w-3/4 items-center">
        <h1 className="text-3xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 text-center text-gray-700">
          Humble Beginnings 🌱
        </h1>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex flex-col w-3/2 sm:w-1/2 items-center justify-center text-gray-600 mb-20">
            <p className="">{humbleBeginningsData[0]}</p>
            <p className="mt-5">{humbleBeginningsData[1]}</p>
            <p className="mt-5">{humbleBeginningsData[2]}</p>
            <p className="mt-5">{humbleBeginningsData[3]}</p>
            <p className="mt-5">{humbleBeginningsData[4]}</p>
          </div>
          <div className="flex flex-col mt-[5rem] mb-[5rem] ml-[5rem]">
            <Image
              src={Alex}
              alt="Alex"
              className="h-[20] sm:h-[40rem] w-auto rounded-lg shadow shadow-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
