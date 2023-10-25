import React from "react";
import { TbTreadmill, TbFreeRights } from "react-icons/tb";
import motivate from "@/images/Convince.png";
import Image from "next/image";

export default function Convince() {
  return (
    <section className="mx-5 mb-24 flex-col justify-center gap-10 sm:flex sm:flex-row lg:mb-0 lg:max-w-[75rem] ">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Still not convinced?
        </h1>
        <div className="mb-5 h-1 w-3/4 rounded-full bg-red-500 bg-opacity-50 pt-[0.025rem] sm:mt-5"></div>

        <div className="mt-5 flex flex-col text-start sm:mb-28 md:mb-[5rem] md:flex-row lg:mb-[-5rem]">
          <Image
            src={motivate}
            alt="Picture of the author"
            className=" w-[auto] rounded-xl shadow-xl md:mt-24 md:h-[18rem] lg:mt-16 lg:h-[25rem]"
          />
          <div className="ml-5 mt-7 flex h-[25vw] w-[auto] sm:mt-6 lg:mt-28">
            <div className="p-4 ">
              <h1 className="text-3xl font-bold text-gray-600">
                Guaranteed to get the body of your dreams!
              </h1>
              <p className="text-md mt-2 font-thin text-gray-500">
                We guarantee that if you follow our personalized fitness and
                nutrition plan consistently, attend scheduled sessions with our
                trainers, and adhere to our guidelines, you will see noticeable
                improvements in your fitness and overall well-being within a
                specified period. If you don&apos;t experience the expected
                results, we will work with you and adjust your program until you
                achieve your goals, at no extra cost. Your success is our
                priority.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[15rem] flex flex-col gap-x-5 sm:mt-5 sm:w-3/4 md:mb-[2rem] lg:mt-[5rem] lg:w-3/4">
          <div className="flex flex-row">
            <div className="text-5xl">
              <TbTreadmill />
            </div>
            <p className="md:text-md/[2] px-2 leading-tight text-gray-600 lg:text-lg/[2]">
              State-of-the-art fitness equipment outfitted with cutting-edge
              technology and innovative features, engineered to optimize your
              workout experience and enhance your overall performance.
            </p>
          </div>
          <div className="mt-5 flex flex-row">
            <div className="text-5xl">
              <TbFreeRights />
            </div>
            <p className="md:text-md/[2] px-2 leading-tight text-gray-600 lg:text-lg/[2]">
              Experience our services with a risk-free trial period, and enjoy
              hassle-free cancellation at any time, no questions asked. Your
              contentment and satisfaction are our highest priorities, ensuring
              a worry-free trial period and seamless cancellation at any time,
              without any inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
