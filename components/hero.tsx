import React from "react";
import Runner from "@/public/runner.png";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/lib/data";

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen sm:items-center sm:justify-center bg-[#FEF6F3] ">
        <div className="flex flex-col sm:flex-row relative sm:mt-[5rem]">
          <div className="flex flex-col items-center justify-center sm:items-end sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold text-center sm:text-left my-10 ">
              Surpass <br />
              Your Limits
            </h1>
            <div className="flex flex-row mr-[0rem] sm:mr-[0rem] md:mr-[9rem] lg:mr-[5rem] xl:mr-[27rem] gap-x-5">
              <div className="text-white text-sm md:text-md lg:text-lg lg:px-2 py-2 px-1 rounded-xl bg-[#FD6343]">
                <Link href="/Membership">
                  <span>Get Started</span>
                </Link>
              </div>
              <div className="text-white text-sm md:text-md lg:text-lg lg:px-2 py-2 px-1 rounded-xl bg-[#FD6343]">
                <a href="#choose">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center sm:w-1/5">
            <Image
              src={Runner}
              alt="Picture of the author"
              width="400"
              height="400"
              priority={true}
            />
          </div>
          <h1 className="flex text-2xl h-1/2 mt-5 sm:mt-[10rem] mx-[5rem] justify-end font-light text-[#AFADAC] font-sans sm:text-3xl leading-5">
            What are you waiting for? <br />
            Take control of your life today!
          </h1>
        </div>
      </section>

      <section
        id="choose"
        className="mt-[5rem] sm:max-w-4xl w-full sm:pt-0 sm:mb-0 sm:scroll-mt-[4rem] scroll-mt-[0.5rem]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center">
          Why choose us?
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-5 gap-5">
          {heroData.map((card, index) => (
            <React.Fragment key={index}>
              <Project {...card} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

type HeroProps = (typeof heroData)[number];
function Project({ title, description, content }: HeroProps) {
  return (
    <section className="rounded-lg shadow-lg border border-opacity-20 my-5 pt-3 w-[25rem] h-[23rem] hover:scale-105 transition p-5">
      <h3 className="text-gray-500 font-medium text-lg">{title}</h3>
      <p className="w-[25rem] text-gray-500 pt-0 pb-5">{description}</p>
      <p className="flex flex-row items-center justify-center text-gray-400 font-medium text-md">
        {content}
      </p>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-2"></ul>
    </section>
  );
}
