import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import Switch from "@mui/material/Switch";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-rose-500/95 py-20 mt-10" id="pricing">
      <h2 className="font-bold text-[35px] md:text-[46px] text-white text-center mb-5">
        Choose The Best Plan For You
      </h2>
      <div className="flex items-center justify-center mb-5 font-bold text-white">
        <span>Monthly</span>
        <Switch
          checked={isMonthly}
          onChange={() => setIsMonthly(!isMonthly)}
          color="primary"
        />
        <span>Yearly</span>
      </div>

      <div className="w-[89%] m-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-[1400px]">
        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border">
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-gray-700">
                {isMonthly ? "$420" : "$35"}
              </span>
              <span className="text-sm font-bold text-gray-400 ml-[1px]">
                /{isMonthly ? "year" : "month"}
              </span>
            </div>
            <h5 className="text-2xl font-bold mb-[9px]">Basic Package</h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">
              Billed bi-weekly
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Comprehensive gym access with essential equipment
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Personalized fitness assessment and goal setting
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Unlimited access to selected group classes
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Monthly progress check-ins with trainers
                </span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md bg-rose-700 text-white font-bold duration-500 hover:bg-rose-600">
            Get Started
          </button>
        </div>

        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border">
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-gray-700">
                {isMonthly ? "$540" : "$45"}
              </span>
              <span className="text-sm font-bold text-gray-400 ml-[1px]">
                /{isMonthly ? "year" : "month"}
              </span>
            </div>
            <h5 className="text-2xl font-bold mb-[9px]">
              Intermediate Package
            </h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">
              Billed bi-weekly
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Customized workout plans designed by certified trainers
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Bi-monthly progress assessments and goal adjustments
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Unlimited access to diverse group fitness classes
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-gray-700">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-500">
                  Monthly progress check-ins with trainers
                </span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md bg-rose-700 text-white font-bold duration-500 hover:bg-rose-600">
            Get Started
          </button>
        </div>

        <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border relative">
          <span className="absolute right-[-5px] top-[-5px] bg-rose-700 p-1 rounded-lg uppercase font-bold text-sm text-white">
            Most popular
          </span>
          <div>
            <div className="mb-[21px]">
              <span className="text-2xl font-bold text-gray-700">
                {isMonthly ? "$660" : "$55"}
              </span>
              <span className="text-sm font-bold text-gray-800 ml-[1px]">
                /{isMonthly ? "year" : "month"}
              </span>
            </div>
            <h5 className="text-2xl font-bold text-gray-700 mb-[9px]">
              Pro Package
            </h5>
            <p className="text-sm font-bold text-gray-400 mb-[43px]">
              Billed monthly
            </p>
            <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
            <ul className="mb-[20px]">
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-rose-400 drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-700">
                  Intensive personal training sessions (4 sessions per week)
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-rose-400 drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-700">
                  Access to premium group fitness classes and specialized
                  workshops
                </span>
              </li>
              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-rose-400 drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-700">
                  Weekly progress tracking, nutritional guidance, and meal
                  planning
                </span>
              </li>

              <li className="flex items-center gap-[5px] mb-[17px]">
                <div className="text-rose-400 drop-shadow-sm">
                  <AiFillCheckCircle />
                </div>
                <span className="text-md text-gray-700">
                  Priority access to facilities and classes during operating
                  hours
                </span>
              </li>
            </ul>
          </div>
          <button className="py-[11px] px-[22px] rounded-md duration-500 hover:bg-rose-600 bg-rose-700 text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
