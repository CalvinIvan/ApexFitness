import React from "react";
import Runner from "@/public/runner.png";
import Image from "next/image";
import Link from "next/link";
import { GrFavorite, GrGroup, GrRun, GrSchedules } from "react-icons/gr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Hero() {
  return (
    <>
      <section className="relative sm:items-center sm:justify-center bg-[#FEF6F3] border border-black overflow-hidden">
        <div className="flex flex-col sm:flex-row relative sm:mt-[5rem]">
          <div className="flex flex-col items-center justify-center sm:items-end sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold text-center sm:text-left my-10 ">
              Surpass <br />
              Your Limits
            </h1>
            <div className="flex flex-row mr-[0rem] sm:mr-[25rem] md:mr-[2.5rem] lg:mr-[5rem] xl:mr-[27rem] gap-x-5">
              <div className="text-white p-4 rounded-xl bg-[#FD6343]">
                <Link href="/Membership">
                  <span>Get Started</span>
                </Link>
              </div>
              <div className="text-white p-4 rounded-xl bg-[#FD6343]">
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
      <section className="w-[75vw] flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center">
            Why choose us?
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 max-w-[75%]">
            <Card className="w-[75vw] sm:w-[25vw] ">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card className="w-[75vw] sm:w-[25vw]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card className="w-[75vw] sm:w-[25vw]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card className="w-[75vw] sm:w-[25vw]">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-[75vw] sm:w-[25vw]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
