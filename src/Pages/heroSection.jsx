import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-5 mt-[3rem] md:mt-[5rem]">
      <h4 className="text-[#582066] text-base font-medium">
        Seamless experience
      </h4>
      <h1 className="px-2 text-[#121417] text-4xl font-semibold w-[20rem] md:text-6xl md:w-full lg:w-3/4 xl:w-1/2">
        Unleashing the Next Generation of Card Solutions
      </h1>
      <h3 className="px-2 text-[#5A6475] text-lg font-normal w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      </h3>
      <button className="flex gap-2 items-center justify-center rounded-xl border-2 bg-[#582066] text-white px-3 py-3 m-auto w-[20rem] md:w-[13rem] xl:w-[12rem]">
        <span className="text-base">Unlock your Card</span>
        <FaArrowRightLong className="cursor-pointer" size={20} />
      </button>
      <p className="text-[#5A6475] text-sm font-medium">
        *No credit card required
      </p>
    </section>
  );
};

export default HeroSection;
