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

export default function Membership() {
  return (
    <section className="mt-[10rem] flex justify-center">
      <div className="flex flex-col ">
        <h1 className="text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center">
          Exclusive Pricing Plan
        </h1>
        <h2 className="text-gray-600 sm:text-4xl md:text-2xl lg:text-3xl xl:text-5xl font-medium mb-10 text-center">
          Choose what fits your lifestyle goal!
        </h2>
        <div className="flex flex-row sm:flex-row flex-wrap items-center justify-center mt-5 gap-5">
          <div>
            <Card className="max-w-[400px] h-[325px] bg-[#FEF6F3] text-gray-500 rounded-lg hover:scale-105 transition">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col w-full justify-center items-center">
                  <p className="text-md font-semibold">ProEssentials</p>
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
              <CardFooter className="flex justify-center items-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="max-w-[400px] h-[325px] bg-[#FEF6F3] text-gray-500 rounded-lg hover:scale-105 transition">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col w-full justify-center items-center ">
                  <p className="text-md font-semibold">
                    <span className="text-red-500">ProPlus</span> Package
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
              <CardFooter className="flex justify-center items-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="max-w-[400px] h-[325px] bg-[#FEF6F3] text-gray-500 rounded-lg hover:scale-105 transition">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col w-full justify-center items-center ">
                  <p className="text-md font-semibold">ProElite Package</p>
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
              <CardFooter className="flex justify-center items-center">
                Billed every other week*
              </CardFooter>
            </Card>
          </div>
        </div>
        <h1 className="mt-[5rem] text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-10 text-center">
          Check out some of our{" "}
          <span className="text-red-500 hover:text-red-300 transition">
            <Link href="/Classes">classes!</Link>
          </span>
        </h1>
      </div>
    </section>
  );
}
