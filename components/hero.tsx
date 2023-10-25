import React from "react";
import Runner from "@/public/runner.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full scroll-mt-[105rem] bg-gradient-to-r from-rose-400 to-red-500 sm:items-center sm:justify-center">
      <div className="relative mt-[5rem] flex flex-col sm:mt-[5rem] sm:flex-row ">
        <div className="flex flex-col items-center justify-center sm:ml-[2rem] sm:mt-[20rem] sm:w-1/2 sm:items-start md:ml-[5rem] md:mt-[15rem] lg:ml-[10rem] ">
          <h1 className="my-10 text-center text-5xl font-semibold text-white sm:text-left sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl ">
            Surpass <br />
            Your Limits.
          </h1>
          <div className="flex flex-row gap-x-5">
            <div className="md:text-md rounded-xl bg-rose-500 px-2 py-2 text-sm text-white transition hover:scale-105 lg:px-2 lg:text-lg">
              <Link href="#membership">
                <span>Get Started</span>
              </Link>
            </div>
            <div className="md:text-md rounded-xl bg-rose-500 px-2 py-2 text-sm text-white transition hover:scale-105 lg:px-2 lg:text-lg">
              <a href="#choose">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-start rounded-full border-r-8 border-white sm:mt-[20rem] sm:w-1/5 sm:scale-[2] md:mt-[10rem] md:scale-[2] lg:mr-[30rem] lg:scale-[1.75]">
          <Image
            src={Runner}
            alt="Motivate!"
            width="500"
            height="500"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
