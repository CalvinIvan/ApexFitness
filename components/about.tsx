import { about, humbleBeginningsData } from "@/lib/data";
import React from "react";
import Alex from "@/public/Alex.png";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mb-24 flex flex-col items-center justify-center"
    >
      <h1 className="mt-[5rem] text-start text-3xl font-semibold text-gray-700 md:text-3xl lg:text-4xl xl:text-6xl">
        About Us
      </h1>
      <div className="h-1 w-1/3 rounded-full bg-red-500 bg-opacity-50 pt-[0.025rem] sm:mt-5 sm:w-[20%]"></div>
      <div className="mt-[1rem] flex flex-col items-center md:w-3/4">
        {about.map((item) => {
          return (
            <ul key={item.statement} className="flex w-3/4 flex-col">
              <h1 className="mb-4 mt-8 text-start text-lg font-semibold text-gray-700 md:text-xl lg:text-2xl xl:text-3xl">
                {item.statement}
              </h1>
              <p className="font-medium text-gray-500">{item.response}</p>
            </ul>
          );
        })}
      </div>
    </section>
  );
}
