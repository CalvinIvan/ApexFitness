"use client";
import { classData } from "@/lib/data";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function Classes() {
  return (
    <section id="classes" className="mt-[5rem] w-[95vw] scroll-mt-[4rem]">
      <div className="flex flex-col items-center">
        <h1 className="mt-[2.5rem] text-center text-2xl font-medium text-gray-700 lg:text-4xl xl:text-5xl">
          Check out some of our{" "}
          <span className="text-red-500 transition hover:text-red-300">
            classes!
          </span>
        </h1>
        <div className="mb-10 flex h-1 w-[85%] rounded-full bg-red-500 bg-opacity-50 pt-[0.025rem] sm:mt-5 sm:w-[45%]"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-5 flex w-[95vw] flex-col flex-wrap items-center justify-center gap-5 sm:flex-row">
          {classData.map((item) => (
            <Card
              key={item.title}
              className="h-[30rem] w-[25rem] rounded-lg shadow-lg shadow-gray-300 transition hover:scale-105"
            >
              <CardHeader className="mt-5 flex items-center justify-center">
                <Image
                  fetchPriority="high"
                  src={item.image.src}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="rounded-xl border border-opacity-50"
                />
              </CardHeader>
              <h4 className="text-center text-xl font-bold text-gray-700">
                {item.title}
              </h4>
              <CardBody className="font-medium text-gray-600">
                {item.desc}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
