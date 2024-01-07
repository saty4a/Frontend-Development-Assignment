import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import iconOne from "../assets/featureIcon-1.png";
import iconTwo from "../assets/featureIcon-2.png";
import iconThree from "../assets/featureIcon-3.png";
import FeatureCard from "@/Components/featureCard";

const FeatureSectionFirst = () => {
  const FeatureData = [
    {
      img: iconOne,
      title: "Globally Accepted",
    },
    {
      img: iconTwo,
      title: "Biometric Integrated",
    },
    {
      img: iconThree,
      title: "Fully Secured",
    },
  ];
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
      <div className="flex flex-col lg:flex-row">
        {FeatureData &&
          FeatureData.map((data, index) => <FeatureCard FeatureData={data} key={index} />)}
      </div>
    </section>
  );
};

export default FeatureSectionFirst;
