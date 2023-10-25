"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { classData } from "@/lib/data";

export default function Membership() {
  return (
    <section
      id="membership"
      className="mt-[1rem] flex scroll-mt-[5rem] justify-center sm:mt-[2rem]"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Exclusive Pricing Plan
        </h1>
        <div className="mb-10 flex h-1 w-[75%] rounded-full bg-red-500 bg-opacity-50 pt-[0.025rem] sm:mt-5"></div>

        <h2 className="mb-10 text-center font-medium text-gray-600 sm:text-2xl md:text-3xl xl:text-5xl">
          Choose what fits your lifestyle goal!
        </h2>
        <div className="mt-5 flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row">
          <div>
            <Card className="h-[325px] max-w-[350px] rounded-lg bg-gradient-to-r from-rose-200 to-red-500/50 text-gray-600 transition hover:scale-105 sm:max-w-[400px]">
              <CardHeader className="flex gap-3">
                <div className="flex w-full flex-col items-center justify-center">
                  <p className="text-md font-semibold">
                    Pro<span className="text-red-500/50">Essentials</span>{" "}
                    Package
                  </p>
                  <p className="text-small text-default-500 font-medium">
                    $34.99
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>*Most popular beginner package*</p>
                <p>Comprehensive gym access with essential equipment</p>
                <p>Personalized fitness assessment and goal setting</p>
                <p>Unlimited access to selected group classes</p>
                <p>Monthly progress check-ins with trainers</p>
                <p>Standard gym hours</p>
              </CardBody>
              <Divider />
              <CardFooter className="flex items-center justify-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="h-[325px] max-w-[350px] rounded-lg bg-gradient-to-r from-rose-200 to-red-500/60 text-gray-700 transition hover:scale-105">
              <CardHeader className="flex gap-3">
                <div className="flex w-full flex-col items-center justify-center ">
                  <p className="text-md font-semibold">
                    Pro<span className="text-red-500/75">Plus</span> Package
                  </p>
                  <p className="text-small text-default-500 font-medium">
                    $39.99
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>All features of ProEssentials</p>
                <p>Customized workout plans designed by certified trainers</p>
                <p>Unlimited access to diverse group fitness classes</p>
                <p>Bi-monthly progress assessments and goal adjustments</p>
                <p>Extended gym hours for flexible workouts</p>
              </CardBody>
              <Divider />
              <CardFooter className="flex items-center justify-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="h-[325px] max-w-[350px] rounded-lg bg-gradient-to-r from-rose-400 to-red-500/80 text-gray-800 transition hover:scale-105">
              <CardHeader className="flex gap-3">
                <div className="flex w-full flex-col items-center justify-center ">
                  <p className="text-md font-semibold">
                    Pro
                    <span className="bg-gradient-to-r from-orange-200 to-red-200 bg-clip-text text-transparent">
                      Elite
                    </span>{" "}
                    Package
                  </p>
                  <p className="text-small text-default-500 font-medium">
                    $54.99
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Intensive personal training sessions (4 sessions per week)
                </p>
                <p>
                  Access to premium group fitness classes and specialized
                  workshops
                </p>
                <p>
                  Weekly progress tracking, nutritional guidance, and meal
                  planning
                </p>
                <p>
                  Priority access to facilities and classes during operating
                  hours
                </p>
              </CardBody>
              <Divider />
              <CardFooter className="flex items-center justify-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
