import { about, humbleBeginningsData } from "@/lib/data";
import React from "react";
import Alex from "@/public/Alex.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#F8F8F8] mb-24">
      <h1 className="text-lg md:text-xl lg:text-4xl xl:text-6xl font-semibold text-gray-700 mt-[5rem] text-start">
        About Us
      </h1>
      <div className="bg-red-500 pt-[0.025rem] sm:mt-5 h-1 w-1/3 rounded-full bg-opacity-50"></div>
      <div className="flex flex-col mt-[1rem] md:w-3/4 items-center">
        {about.map((item) => {
          return (
            <ul key={item.statement} className="flex flex-col w-3/4">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-8 mb-4 text-start">
                {item.statement}
              </h1>
              <p>{item.response}</p>
            </ul>
          );
        })}
      </div>
    </section>
  );
}
