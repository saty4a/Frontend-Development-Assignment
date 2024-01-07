import React from "react";
import wise from "../assets/Logo-4.png";
import person from "../assets/person.png";
import star from "../assets/star.png";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="reveal flex flex-col items-center my-[5rem]">
      <Image
        src={wise}
        className="m-auto w-1/3 md:w-1/6 xl:w-[10%]"
        alt="featureIcon"
      />
      <p className="text-[#24282F] text-xl font-medium px-3 my-[3rem] w-full md:text-3xl md:w-3/4 xl:1/6">
        I had the pleasure of experiencing the next generation of card solutions
        with this incredible product. It's refreshing to see such innovation in
        the financial industry.
      </p>
      <Image src={person} className="m-auto" alt="person" />
      <h5 className="text-base font-medium mt-4">Nick Babich</h5>
      <p className="text-sm font-normal text-[#5A6475] mb-3">Lead Designer</p>
      <div className="flex justify-center gap-2">
        <Image src={star} className="" alt="star" />
        <Image src={star} className="" alt="star" />
        <Image src={star} className="" alt="star" />
        <Image src={star} alt="star" />
      </div>
    </section>
  );
};

export default TestimonialSection;
