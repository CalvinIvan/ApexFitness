import heroImage from "../assets/heroimage.png";
import { AiFillStar } from "react-icons/ai";
const Hero = () => {
  return (
    <section className="bg-red-500/95  w-full">
      <div className="max-w-[1400px] w-[89%] m-auto grid  md:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="mt-20 md:mt-0 text-center md:text-start">
          <h2 className="text-white text-2xl font-bold drop-shadow-lg ">
            Welcome to
          </h2>
          <h1 className="text-white text-6xl font-bold drop-shadow-lg mb-3">
            APEX Fitness
          </h1>
          <p className="text-white">
            Step into a dynamic environment where cutting-edge fitness meets
            personalized training, creating a synergy that propels you toward
            your fitness goals. Embrace a community-driven atmosphere that
            inspires and supports your fitness journey.
          </p>
          <div className="flex gap-4 md:gap-1 lg:gap-4 mt-6 justify-center md:justify-start">
            <a
              className="duration-500 hover:bg-rose-500 bg-rose-700/50 py-2 px-6 rounded text-white shadow-lg drop-shadow flex items-center justify-center"
              href="#about"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full">
          <img
            src={heroImage}
            className="w-full lg:h-[50%] h-[450px] object-scale-down "
            alt=""
          />
          <div className="absolute bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5 p-1 m-3 w-44 rounded-lg shadow-md bg-white text-center scale-75 md:scale-100">
            <span className="text-3xl font-bold mb-0 text-rose-500">10k+</span>
            <h6 className="text-sm text-slate-400 mt-1">Reviews</h6>
          </div>
          <div className="absolute right-[-50px] md:scale-100 scale-75 top-16 md:top-10 lg:top-10 md:right-0 lg:right-2 p-4 w-44 rounded-lg shadow-md bg-white m-3 text-center">
            <h6 className="text-sm text-slate-400 mt-1">
              <span>
                <div className="font-semibold text-rose-500 flex justify-center items-center text-[18px]">
                  5 <span className="text-transparent"> .</span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                Rated Gym
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
