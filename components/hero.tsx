"use client";
import React from "react";
import Runner from "@/public/runner.png";
import Image from "next/image";
import Link from "next/link";
import { faq, heroData, trainersData } from "@/lib/data";
import Convince from "@/public/Convince.jpeg";
import { TbTreadmill, TbFreeRights } from "react-icons/tb";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Hero() {
  const faq = [
    {
      question:
        "What types of memberships do you offer, and what are the associated costs?",
      answer:
        "We offer various membership options, including monthly, quarterly, and annual plans. The costs vary based on the type and duration of the membership. For detailed pricing information, please visit our Memberships page or contact our front desk.",
    },
    {
      question:
        "Do you provide personal training sessions, and how can I schedule one?",
      answer:
        "Yes, we offer personalized training sessions with our certified trainers. To schedule a personal training session, you can visit the front desk, call our gym, or use our online booking system. Our trainers will work with you to create a tailored fitness plan based on your goals and preferences.",
    },

    {
      question:
        "What safety measures are in place, especially considering the ongoing health situation?",
      answer:
        "Your safety is our top priority. We have implemented stringent health and hygiene protocols in line with the latest guidelines from health authorities. These measures include frequent sanitization of equipment, social distancing practices, mandatory mask policies in common areas, and limited class sizes. Please visit our Safety Measures page to learn more about the precautions we are taking to ensure a safe gym environment.",
    },
  ];
  return (
    <>
      <section className="relative w-full min-h-screen sm:items-center sm:justify-center bg-[#FEF6F3] scroll-mt-[105rem]">
        <div className="flex flex-col sm:flex-row relative sm:mt-[5rem] mt-[5rem]">
          <div className="flex flex-col items-center justify-center sm:items-start sm:w-1/2 sm:ml-[2rem] sm:mt-[20rem] md:mt-[15rem] md:ml-[5rem] lg:ml-[2rem]">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold text-center sm:text-left my-10 ">
              Surpass <br />
              Your Limits
            </h1>
            <div className="flex flex-row gap-x-5">
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
          <div className="flex justify-start items-center sm:w-1/5 sm:scale-[2] sm:mt-[20rem] md:mt-[10rem] md:scale-[2] lg:scale-[1.5] lg:mr-[25rem]">
            <Image
              src={Runner}
              alt="Picture of the author"
              width="400"
              height="400"
              priority={true}
            />
          </div>
        </div>
      </section>

      <section
        id="choose"
        className="mt-[5rem] sm:max-w-4xl w-full sm:pt-0 sm:mb-0 sm:scroll-mt-[4rem] scroll-mt-[5rem]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center">
          Why choose us?
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-5 gap-5">
          {heroData.map((card, index) => (
            <React.Fragment key={index}>
              <Pick {...card} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="bg-[#F8F8F8] mt-[5rem] w-full sm:pt-0 sm:mb-0 sm:scroll-mt-[4rem] scroll-mt-[0.5rem]">
        <h1 className="mt-[5rem] flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center">
          Featured Trainers
        </h1>
        <h2 className="mt-[5rem] flex justify-center text-3xl xl:text-4xl font-medium mb-10 text-center">
          Train with some of the best!
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mt-5 gap-5">
          {trainersData.map((trainer, index) => (
            <React.Fragment key={index}>
              <Trainer {...trainer} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="mt-[5rem] lg:max-w-[75rem] sm:flex flex-col sm:flex-row justify-center gap-10 mx-5 mb-24 lg:mb-0 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-center ">
            Still not convinced?
          </h1>
          <div className="flex flex-col md:flex-row text-start sm:mb-28 md:mb-[5rem] lg:mb-[-5rem]">
            <Image
              src={Convince}
              alt="Picture of the author"
              className=" md:h-[18rem] lg:h-[25rem] w-[auto] rounded-xl shadow-xl md:mt-24 lg:mt-16"
            />
            <div className="flex ml-5 h-[25vw] w-[auto] sm:mt-6 lg:mt-28">
              <div className="p-4 ">
                <h1 className="text-3xl font-bold">
                  Guaranteed to get the body of your dreams!
                </h1>
                <p className="mt-2 text-md font-thin">
                  We guarantee that if you follow our personalized fitness and
                  nutrition plan consistently, attend scheduled sessions with
                  our trainers, and adhere to our guidelines, you will see
                  noticeable improvements in your fitness and overall well-being
                  within a specified period. If you don't experience the
                  expected results, we will work with you and adjust your
                  program until you achieve your goals, at no extra cost. Your
                  success is our priority.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-5 lg:mt-16 lg:w-1/2 sm:w-3/4 sm:mt-5 md:mt-5 mt-[15rem] md:mb-20">
            <div className="flex flex-row">
              <div className="text-5xl">
                <TbTreadmill />
              </div>
              <p className="text-sm/[2] leading-tight px-2">
                State-of-the-art fitness equipment outfitted with cutting-edge
                technology and innovative features, engineered to optimize your
                workout experience and enhance your overall performance.
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <div className="text-5xl">
                <TbFreeRights />
              </div>
              <p className="text-sm/[2] leading-tight px-2">
                Experience our services with a risk-free trial period, and enjoy
                hassle-free cancellation at any time, no questions asked. Your
                contentment and satisfaction are our highest priorities,
                ensuring a worry-free trial period and seamless cancellation at
                any time, without any inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-3/4 h-[50rem] sm:pt-0 mt-[-5rem] items-center justify-center">
        <h1 className="text-3xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10 text-center ">
          Frequently Asked Questions (FAQ)
        </h1>
        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={faq[0].question}
          >
            {faq[0].answer}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={faq[1].question}
          >
            {faq[1].answer}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title={faq[2].question}
          >
            {faq[2].answer}
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

type HeroProps = (typeof heroData)[number];
function Pick({ title, description, content }: HeroProps) {
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

type TrainerProps = (typeof trainersData)[number];
function Trainer({ name, title, specialty, notable, icon }: TrainerProps) {
  return (
    <section className="rounded-lg shadow-lg border border-opacity-20 my-5 pt-3 w-[25rem] h-[23rem] hover:scale-105 transition p-5">
      <h3 className="text-gray-500 font-medium text-lg">{name}</h3>
      <p className="w-[25rem] text-gray-500 pt-0 pb-5">
        {title} & {specialty}
      </p>
      <p className="flex flex-row items-center justify-center text-gray-400 font-medium text-md">
        {notable}
      </p>
      <div className="flex justify-center mt-12">
        <Image
          src={icon}
          alt={name}
          quality="95"
          priority={true}
          height="125"
          width="125"
        />
      </div>
    </section>
  );
}
