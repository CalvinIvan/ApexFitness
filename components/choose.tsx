import { heroData } from "@/lib/data";
import React from "react";

type HeroProps = (typeof heroData)[number];
function Pick({ title, description, content }: HeroProps) {
  return (
    <section className="my-5 h-[23rem] w-[25rem] rounded-lg border border-opacity-20 p-5 pt-3 shadow-lg transition hover:scale-105">
      <h3 className="py-2 text-3xl text-gray-500">
        <div className="mt-1 text-3xl"> {title}</div>
      </h3>
      <p className="w-[25rem] pb-1 pt-0 font-semibold text-gray-600">
        {description}
      </p>
      <p className="text-md flex flex-row items-center justify-center text-gray-500">
        {content}
      </p>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-2"></ul>
    </section>
  );
}

export default function Choose() {
  return (
    <section
      id="choose"
      className="w-full scroll-mt-[5rem] sm:mb-0 sm:max-w-2xl sm:pt-0"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Why choose us?
        </h1>
        <div className="h-1 w-[55%] rounded-full bg-red-500 bg-opacity-50 pt-[0.025rem] sm:mt-5 sm:w-[95%]"></div>

        <div className="mb-10 mt-5 flex w-[90vw] flex-col flex-wrap items-center justify-center gap-5 sm:mb-[10rem] sm:flex-row">
          {heroData.map((card, index) => (
            <React.Fragment key={index}>
              <Pick {...card} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
