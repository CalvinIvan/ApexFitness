"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { classData } from "@/lib/data";

export default function Classes() {
  return (
    <section className="mt-[5rem] w-full">
      <h1 className="text-4xl font-bold text-center text-gray-800">Classes</h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-5 gap-5 w-3/4">
          {classData.map((item) => (
            <Card
              key={item.title}
              className="md:w-[75vw] lg:w-1/3 rounded-lg shadow-lg shadow-gray-300 hover:scale-105 transition"
            >
              <CardHeader className="flex items-center justify-center mt-5">
                <Image
                  fetchPriority="high"
                  src={item.image.src}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="rounded-xl border border-opacity-50"
                />
              </CardHeader>
              <h4 className="text-xl font-bold text-center text-gray-700">
                {item.title}
              </h4>
              <CardBody className="text-gray-600 font-medium">
                {item.desc}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
