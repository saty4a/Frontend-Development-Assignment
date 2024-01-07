import React from "react";
import Image from "next/image";

const FeatureCard = ({ FeatureData }) => {
  return (
    <div className="reveal flex flex-col items-center my-[3rem] gap-4">
      <Image
        src={FeatureData && FeatureData.img}
        className="m-auto"
        alt="featureIcon"
      />
      <p className="text-base font-medium">{FeatureData.title}</p>
      <p className="text-sm font-medium text-[#5A6475] w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
      </p>
    </div>
  );
};

export default FeatureCard;
