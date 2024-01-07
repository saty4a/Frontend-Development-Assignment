import React from "react";
import { FaCreditCard } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <section className="reveal flex flex-col items-center my-[5rem]">
      <h2 className="text-3xl font-semibold w-full md:w-2/3 md:text-4xl xl:w-2/5">
        Unlock Limitless Possibilities with Our New Card Solutions
      </h2>
      <div className="flex flex-col gap-2 mt-8 justify-center items-center md:flex-row">
        <button className="flex gap-2 items-center justify-center rounded-xl border-2 bg-[#582066] text-white px-3 py-3 w-[20rem] md:w-[13rem] xl:w-[12rem]">
          <span className="text-base">Unlock your Card</span>
          <FaCreditCard className="cursor-pointer" size={20} />
        </button>
        <button className="flex gap-2 items-center justify-center rounded-xl border-2 bg-[#EEEFEF] text-[#5A6475] py-3 w-[20rem] md:w-[13rem] xl:w-[12rem] border hover:border-black shadow hover:shadow-lg">
          <span className="text-base">Customer support</span>
          <FaHeadphones className="cursor-pointer" size={20} />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
