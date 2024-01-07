import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import phone from "../assets/phone.png";
import stick from "../assets/stick.png";
import glitter from "../assets/glitter.png";
import spending from "../assets/spending.png";
import Image from "next/image";

const FeatureSectionSecond = () => {
  return (
    <section className="reveal flex flex-col items-center gap-5 mt-[4rem] md:mt-[5rem]">
      <h2 className="px-2 text-[#121417] text-3xl font-semibold w-[22rem] md:text-4xl md:w-3/4 lg:w-3/4 xl:w-1/2">
        Elevating Card Programs with Cutting-Edge Technology
      </h2>
      <h3 className="px-2 text-[#5A6475] text-lg font-normal w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </h3>
      <div className="flex gap-2 items-center justify-center m-auto text-[#582066]">
        <span className="text-base">Compare all Pro features</span>
        <FaArrowRightLong className="cursor-pointer" size={20} />
      </div>
      <div className="flex flex-col gap-7 lg:flex-row">
        <div className="phone bg-[#FAF9FF] rounded-xl mx-4 md:mx-0 md:px-[8rem] lg:px-[5rem] pt-20">
          <Image
            src={glitter}
            className="phone-glitter-position"
            alt="glitter"
          />
          <Image src={stick} className="stick-position" alt="stick" />
          <Image src={phone} className="m-auto" alt="phone" />
        </div>
        <div className="spending bg-[#FAF9FF] rounded-xl mx-4 md:mx-0 py-[3rem] ps-[3rem] md:ps-[8rem] pe-5 lg:ps-[5rem] lg:p-[3rem]">
          <Image
            src={glitter}
            className="spending-glitter-position"
            alt="glitter"
          />
          <Image src={spending} className="" alt="spending" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionSecond;
